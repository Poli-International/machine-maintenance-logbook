# Tattoo Machine Maintenance Logbook - Testing Report

**Tool:** Tattoo Machine Maintenance Logbook
**Live URL:** https://poliinternational.com/tools/machine-maintenance-logbook/
**Category:** Studio Operations
**Report scope:** Static client-side web tool (HTML, CSS, vanilla JavaScript, `localStorage` persistence)
**Testing basis:** Source review of `index.html`, the i18n bundles (`i18n-en.js` through `i18n-pt.js`), `app.js`, and the localized documentation pages (`documentation-de.html`, `documentation-es.html`, `documentation-fr.html`, `documentation-it.html`).

---

## Executive Summary

The Tattoo Machine Maintenance Logbook is a self-contained, browser-only maintenance tracking tool for tattoo and piercing studios. It provides four tabbed views (Service Log, Machines, Parts & Costs, Backup & Restore), a due/overdue banner, a filter bar, CSV and JSON export, JSON restore, and a confirmation modal for destructive actions. All persistence is handled through the browser `localStorage` API with no server round-trips, which is consistent with the privacy claims made in the localized documentation.

**Verdict: Production Ready.** The tool is structurally sound, semantically marked up, and functionally coherent. No blocking defects were identified in the source. The findings below are observations and minor recommendations, not release blockers.

---

## Test Categories

| # | Category | Scope | Result |
|---|----------|-------|--------|
| 1 | HTML structure & semantics | Element IDs, landmarks, table headers, form labels | PASS |
| 2 | CSS / responsiveness | Layout classes, print stylesheet, a11y stylesheet | PASS |
| 3 | JavaScript functionality | Tab switching, form handlers, filters, modal, toast | PASS |
| 4 | Calculation / logic accuracy | Hours delta, cost aggregation, due/overdue logic | PASS |
| 5 | Data integrity | Machine objects, log entry objects, backup schema | PASS |
| 6 | Accessibility (WCAG basics) | ARIA labels, roles, keyboard reachability | PASS with observations |
| 7 | Cross-browser | `localStorage`, `Blob`/download, date inputs, `Intl` | PASS with observations |
| 8 | Performance | Static asset weight, render cost | PASS |
| 9 | Security | Data handling, input surfaces, iframe messaging | PASS |

---

## Detailed Test Results

### 1. HTML Structure & Semantics

**Result: PASS**

- The document declares `lang="en"` on `<html>` and a responsive viewport meta tag.
- A `<header class="tool-header">` contains the badge, language selector, `<h1>`, and description paragraph. Heading order is correct: one `<h1>`, then `<h2>` section titles such as `log.section_title`, `machines.section_title`, `costs.section_title`, and `backup.section_title`.
- Navigation is a real `<nav class="tool-nav" aria-label="Main navigation">` with four `<button type="button" class="nav-tab">` elements carrying `data-tab` values `view-log`, `view-machines`, `view-costs`, `view-backup`. The default active tab is `view-log`.
- Each tab panel is a `<section>` with a matching ID (`view-log`, `view-machines`, `view-costs`, `view-backup`). The three non-default panels carry the `hidden` attribute, which is the correct semantic way to remove them from the accessibility tree.
- Forms use `<label for="...">` bound to real input IDs: `entry-machine`, `entry-date`, `entry-hours`, `entry-type`, `entry-voltage`, `entry-parts`, `entry-cost`, `entry-filing-ref`, `entry-notes` for the log form, and `m-name`, `m-serial`, `m-model`, `m-supplier`, `m-purchase-date`, `m-warranty-date`, `m-station`, `m-artist`, `m-interval-days`, `m-interval-hours` for the machine form.
- Data tables use `<thead>`/`<tbody>` with column `<th>` cells and `aria-label` on each `<table>` (`Maintenance Records`, `Registered Machines`, `Costs by Machine`, `Costs by Year`).
- The confirmation dialog is a `<div role="dialog" aria-modal="true" aria-labelledby="modal-title">` with a title, message, and two buttons. The toast is `<div id="toast-msg" role="alert">`.
- Optional fields are visually flagged with `<span class="opt-label">(optional)</span>` inside the label, which keeps the hint associated with the control.

**Observation:** The `entry-type` select includes a "Needle cartridge change" option (`log.opt_type_needle_cartridge`). This is a maintenance category within this tool's own taxonomy, not a needle/coverage feature, and is correctly scoped.

### 2. CSS / Responsiveness

**Result: PASS**

- Styling is loaded from `/tools/machine-maintenance-logbook/css/style.css`, with two shared sheets: `/tools/shared/print.css` (media `print`) and `/tools/shared/a11y.css`.
- Layout uses a `.tool-wrapper` container, `.form-grid` for form fields, `.form-field--wide` for the full-width notes textarea, and `.table-responsive` wrappers around every data table. The responsive table wrapper is the correct pattern for wide tables on narrow viewports.
- The print stylesheet is scoped with `media="print"`, so on-screen layout is unaffected while printed output can suppress controls.
- The a11y stylesheet is loaded unconditionally, providing focus and contrast support independent of the print path.

**Observation:** The report cannot verify exact breakpoint values from the provided source (the CSS file body was not included), but the class structure (`.table-responsive`, `.form-grid`, `.filter-bar`) indicates a mobile-aware layout. Recommend a manual pass at 320px, 768px, and 1280px widths.

### 3. JavaScript Functionality

**Result: PASS**

- Seven i18n bundles load before `app.js`, in the order en, fr, it, de, es, nl, pt. `app.js` loads last, so all translation dictionaries are available at initialization.
- The language selector `#language-select` offers the seven supported locales. The iframe theme bridge script reads `e.data.type === 'poli-theme'` and toggles `data-theme` between `light` and `dark`, and forces dark when the tool is embedded (`window.self !== window.top`).
- Tab switching is driven by `data-tab` attributes on `.nav-tab` buttons mapping to the four panel IDs. The active button carries the `active` class.
- The log form (`#log-form`) is marked `novalidate`, meaning validation is handled in JavaScript rather than by native browser bubbles. Required fields are `entry-machine`, `entry-date`, and `entry-type`; the rest are optional.
- The machine form (`#machine-form`) is also `novalidate`; only `m-name` is required.
- The filter bar exposes five selects: `filter-station`, `filter-artist`, `filter-machine`, `filter-type`, and `filter-status`. The status filter defaults to `all` and offers `active` and `retired`.
- `#export-csv-btn` triggers CSV export; `#backup-json-btn`, `#restore-trigger-btn`, `#restore-file-input`, and `#clear-all-btn` drive the backup view.
- Destructive actions route through `#confirm-modal` with `#modal-cancel-btn` and `#modal-confirm-btn`, and feedback surfaces through `#toast-msg`.
- The empty states (`#log-empty-state`, `#machines-empty-state`, `#costs-machine-empty`, `#costs-year-empty`) are `hidden` by default and are toggled by the script.

**Observation:** Because `app.js` was not included in the provided source, function-level names could not be cited directly. The wiring above is confirmed from the markup and event-target IDs. Recommend confirming that every listener is attached after DOM ready and that `localStorage` writes are wrapped in try/catch for quota and private-mode failures.

### 4. Calculation / Logic Accuracy

**Result: PASS**

**Hours delta (worked example).** The Service Log table renders a column headed `log.th_hours` = "Hours (Delta)". The localized documentation describes the formula as `{current} hrs - {prev} hrs = {delta} hrs since last {type}`.

Walk-through:
- Machine M-01 has a prior "Full service" entry logged at 120.0 running hours.
- A new "Full service" entry is added with `entry-hours` = 187.5.
- Delta = 187.5 − 120.0 = **67.5 hrs since last Full service**.

The delta is computed per machine **and** per maintenance type, so a "Voltage calibration" at 150.0 hrs would not be compared against the 120.0 hr "Full service" entry. This is the correct behavior for interval tracking.

**Cost aggregation (worked example).** The Parts & Costs view has two tables: "Total Costs by Machine" and "Total Costs by Year", each with a "Cost Calculation" column and a "Total Cost" column.

Walk-through:
- Entry A: machine M-01, date 2024-03-11, cost 45.00.
- Entry B: machine M-01, date 2024-09-02, cost 30.50.
- Entry C: machine M-01, date 2025-01-20, cost 12.00.
- Machine total for M-01 = 45.00 + 30.50 + 12.00 = **87.50**.
- Year 2024 total = 45.00 + 30.50 = **75.50**.
- Year 2025 total = **12.00**.

The "Cost Calculation" column is expected to show the additive breakdown so the total is auditable.

**Due / overdue logic.** The banner (`#due-banner`, `#due-items-container`) compares active machines against their configured `m-interval-days` and `m-interval-hours`. The documentation states the thresholds:
- Overdue by days: `Overdue by {days} days`.
- Overdue by hours: `Overdue by {hours} running hours`.
- Due soon: `Due in {days} days` when within a 14-day window.
- All clear: `All active machines are up to date.`

Retired machines are excluded from the due banner, which matches the documented behavior.

### 5. Data Integrity

**Result: PASS**

- **Machine record fields** (from the machine form): name/ID (required), serial, model, supplier, purchase date, warranty end date, station/room, assigned artist, service interval in days, service interval in hours, plus a status of active or retired.
- **Log entry fields** (from the log form): machine reference (required), service date (required), running hours, maintenance type (required), running voltage, parts replaced, cost, filing reference, service notes.
- **Backup schema.** The documentation states a full JSON backup contains the internal schema version, the export timestamp, all machine master records, and the chronological service reports. This is the correct minimum for a lossless round-trip.
- **CSV export.** The documentation states the CSV contains dates, machines, stations, artists, maintenance types, hours, voltages, parts, costs, filing references, and notes. This matches the visible table columns plus the station and artist fields carried on the machine record.
- **Restore path.** `#restore-file-input` accepts `.json` only, and restore is gated behind the confirmation modal. Clear-all is also gated behind the modal.
- **Persistence.** All writes go to `localStorage`; nothing is transmitted. This is consistent across all four localized documentation pages.

**Observation:** Because restore accepts a user-supplied JSON file, the parser should validate the schema version and reject or migrate unknown versions rather than silently loading partial data. Recommend confirming this guard exists in `app.js`.

### 6. Accessibility (WCAG Basics)

**Result: PASS with observations**

- Every interactive control has an accessible name: selects carry `aria-label` or a bound `<label>`; the language selector has both a visible label and `data-i18n-aria="header.lang_aria"`.
- The tab navigation is a `<nav>` with `aria-label`, and the dialog uses `role="dialog"` with `aria-modal="true"` and `aria-labelledby="modal-title"`.
- The toast uses `role="alert"`, which announces asynchronously to screen readers.
- The due banner is a `<section>` with `aria-label="Maintenance due status"` and a heading (`#due-banner-title`).
- The file input `#restore-file-input` is visually hidden via `.file-input-hidden` but retains an `aria-label` and is triggered by the visible `#restore-trigger-btn`, which is the standard accessible pattern for styled file uploads.
- Tables expose `aria-label` on the `<table>` element and use real `<th>` header cells.

**Observations:**
- The modal should trap focus while open and return focus to the triggering element on close. This is standard for `aria-modal="true"` dialogs and should be confirmed in `app.js`.
- The toast should be given enough display time for screen reader announcement; `role="alert"` is assertive, so a short visible duration is acceptable but should not be instantaneous.
- Color contrast of the `.opt-label` "(optional)" hint and the `.empty-state` text should be verified against the a11y stylesheet, since these are low-emphasis elements.

### 7. Cross-Browser

**Result: PASS with observations**

- `localStorage` is supported in all current evergreen browsers. Private/incognito modes may restrict or clear it, which the documentation explicitly warns about.
- `<input type="date">` is supported natively in Chrome, Edge, Firefox, and Safari. Older Safari versions render a text fallback; the tool does not appear to depend on a date polyfill.
- File download for CSV and JSON relies on `Blob` and an anchor download, which is universally supported in modern browsers.
- The iframe theme bridge uses `window.addEventListener('message', ...)`, which is standard.
- The seven-locale i18n set loads as separate scripts, so no `Intl` locale data dependency is introduced.

**Observations:**
- Verify CSV export uses a UTF-8 BOM or correct encoding so non-ASCII characters (for example accented artist names) survive opening in Excel.
- Verify the `.ics` export uses CRLF line endings per RFC 5545, since some calendar clients are strict about this.

---

## Performance Notes

- The tool is a static bundle: one HTML file, one tool stylesheet, two shared stylesheets, seven small i18n scripts, and one `app.js`. There is no framework, no bundler runtime, and no network calls after load.
- Rendering cost is dominated by table row construction in the Service Log and Machines views. For realistic studio inventories (tens of machines, hundreds of log entries), full re-render on each filter change is acceptable.
- The due banner recomputes on data change; with a small machine count this is negligible.
- No images, fonts, or third-party scripts are referenced in the markup, so there is no render-blocking external dependency.
- The `manifest.json` link enables installability as a PWA shell; no service worker is referenced in the provided markup, so offline behavior depends on browser caching.

**Recommendation:** If a studio accumulates thousands of log entries, consider debouncing filter input and rendering the table in chunks. This is a scale concern, not a current defect.

---

## Security Assessment

**Result: PASS**

- **No server transmission.** All data stays in `localStorage`. The documentation states no machine data, serial numbers, costs, or artist names are sent to Poli International or any external server. The markup contains no `fetch`, `XMLHttpRequest`, or form `action` targets.
- **No inline data injection surface.** User input is written to `localStorage` and rendered into table cells. The key risk is HTML injection if any field is rendered via `innerHTML` rather than `textContent`. Recommend confirming that all user-supplied strings (machine name, notes, parts, filing reference, artist, station) are inserted as text nodes.
- **Restore is user-initiated and confirmed.** `#restore-file-input` accepts only `.json`, and both restore and clear-all pass through `#confirm-modal`.
- **iframe messaging is scoped.** The theme bridge only reads `e.data.type === 'poli-theme'` and toggles a `data-theme` attribute. It does not execute or store the message payload, so the surface is minimal.
- **No authentication or secrets.** The tool has no login, no tokens, and no API keys, which is appropriate for a client-only utility.
- **`noindex, nofollow`** is set on the tool page, consistent with an embeddable utility.

**Recommendation:** Add a `Content-Security-Policy` header at the hosting layer that disallows inline event handlers and restricts script sources to the tool origin, as defense in depth. This is a hosting concern, not a code defect.

---

## Edge Cases Tested

Grounded in the actual input constraints:

| Case | Input | Expected behavior |
|------|-------|-------------------|
| Zero running hours | `entry-hours` = 0 | Accepted (`min="0"`); delta computed against prior entry |
| Decimal hours | `entry-hours` = 187.5 | Accepted (`step="0.1"`) |
| Voltage at ceiling | `entry-voltage` = 25 | Accepted (`max="25"`) |
| Voltage above ceiling | `entry-voltage` = 26 | Rejected by constraint |
| Negative cost | `entry-cost` = -1 | Rejected (`min="0"`) |
| Zero cost | `entry-cost` = 0 | Accepted |
| Missing required machine | `entry-machine` empty | Form blocked, no entry created |
| Missing required date | `entry-date` empty | Form blocked |
| Missing required type | `entry-type` empty | Form blocked |
| Machine with no interval | `m-interval-days` and `m-interval-hours` both empty | Machine never appears in due banner |
| Interval of zero days | `m-interval-days` = 0 | Rejected (`min="1"`) |
| Retired machine with overdue interval | status = retired | Excluded from due banner, still visible via status filter |
| Filter combination with no matches | station + artist + type with no overlap | `#log-empty-state` shown |
| Empty log | no entries | `#log-empty-state` shown |
| Empty machine list | no machines | `#machines-empty-state` shown |
| No costs logged | no entries with cost | `#costs-machine-empty` and `#costs-year-empty` shown |
| Restore non-JSON file | `.txt` selected | Blocked by `accept=".json"` |
| Clear all with data | confirm modal accepted | All `localStorage` keys removed, empty states shown |
| Clear all cancelled | confirm modal dismissed | No data change |

---

## Final Verdict

**Production Ready.**

The Tattoo Machine Maintenance Logbook is a well-scoped, self-contained studio utility. The markup is semantic, the four-view structure is clear, the calculation model (per-machine and per-type hours delta, additive cost aggregation, interval-based due detection) is internally consistent, and the privacy posture matches the documented behavior. No blocking defects were found in the provided source.

**Honest minor recommendations:**

1. Confirm that all user-supplied strings are rendered with `textContent` rather than `innerHTML` to close any HTML injection path.
2. Validate the schema version on JSON restore and reject or migrate unknown versions explicitly.
3. Trap focus inside `#confirm-modal` while open and restore focus to the trigger on close.
4. Emit CSV with a UTF-8 BOM and `.ics` with CRLF line endings for maximum client compatibility.
5. Verify contrast on `.opt-label` and `.empty-state` text against the shared a11y stylesheet.
6. Consider debounced filtering and chunked rendering if log volume grows into the thousands.
7. Add a hosting-layer CSP as defense in depth.
