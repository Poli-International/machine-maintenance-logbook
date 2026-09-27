# Tattoo Machine Maintenance Logbook - Technical Documentation

## Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [Data Schemas](#data-schemas)
3. [Calculation / Logic Algorithms](#calculation--logic-algorithms)
4. [API Reference](#api-reference)
5. [Integration Guide](#integration-guide)
6. [Customization](#customization)
7. [Performance](#performance)
8. [Browser Compatibility](#browser-compatibility)
9. [Security](#security)
10. [Version History](#version-history)
11. [Support / Contact](#support--contact)

---

## Architecture Overview

### Technology Stack

The Tattoo Machine Maintenance Logbook is a dependency-free, client-side web application built with:

- **HTML5** for structure (`index.html`)
- **CSS** for styling, loaded from `/tools/machine-maintenance-logbook/css/style.css`, plus shared print and accessibility stylesheets (`/tools/shared/print.css`, `/tools/shared/a11y.css`)
- **Vanilla JavaScript** (no framework, no build step) for all application logic
- **Browser `localStorage`** for persistence (all data stays on the user's device)
- **Web APIs used**: `Blob`/`URL.createObjectURL` (via export handlers), `FileReader` (via restore handler), `File` input, `iCalendar` text generation for `.ics` downloads

There is no backend, no network calls, and no third-party runtime libraries. The tool is a static bundle.

### File Structure

Based on the `FILE:` headers and script/link tags in the source:

```
/tools/machine-maintenance-logbook/
├── index.html                 # Main application shell and all four views
├── manifest.json              # Web app manifest (referenced, not shown)
├── css/
│   └── style.css              # Tool-specific styles
└── js/
    ├── i18n-en.js             # English strings
    ├── i18n-fr.js             # French strings
    ├── i18n-it.js             # Italian strings
    ├── i18n-de.js             # German strings
    ├── i18n-es.js             # Spanish strings
    ├── i18n-nl.js             # Dutch strings
    ├── i18n-pt.js             # Portuguese strings
    └── app.js                 # All application logic

/tools/shared/
├── print.css                  # Shared print stylesheet
└── a11y.css                   # Shared accessibility stylesheet

/js/
└── input-guards.js            # Shared input sanitisation guards
```

Documentation pages (`documentation-de.html`, `documentation-es.html`, `documentation-fr.html`, `documentation-it.html`) are static, self-contained HTML files with inline CSS and are not part of the runtime application.

### Component / Logic Breakdown

The UI is a single-page application with four tab panels toggled by `data-tab` attributes on `.nav-tab` buttons:

| Tab | Panel ID | Purpose |
|-----|----------|---------|
| Service Log | `#view-log` | Log maintenance events, filter, export CSV |
| Machines | `#view-machines` | Register machines, manage active/retired status |
| Parts & Costs | `#view-costs` | Aggregate costs by machine and by calendar year |
| Backup & Restore | `#view-backup` | Export/restore JSON, clear all data |

Supporting UI components:

- **Due / Overdue banner** (`#due-banner`, `#due-items-container`): surfaces machines that are overdue or due within 14 days, with per-machine `.ics` export.
- **Confirm modal** (`#confirm-modal`): generic confirmation dialog used for destructive actions.
- **Toast** (`#toast-msg`): transient status messages.
- **Language selector** (`#language-select`): switches between the seven bundled locales.
- **Iframe theme bridge**: an inline script in `<head>` detects embedding (`window.self !== window.top`) and listens for `poli-theme` postMessages to toggle `data-theme` between light and dark.

All application logic lives in `app.js`; the `i18n-*.js` files supply translated strings keyed by `data-i18n` attributes.

---

## Data Schemas

The application persists two primary collections in `localStorage`: a machines array and a maintenance log array. Field names below reflect the form input IDs and the documented German/Spanish/French/Italian descriptions of the rendered columns.

### Machine Object

Created via the `#machine-form` form. Required field: `name`.

| Field | Source input | Type | Notes |
|-------|--------------|------|-------|
| `name` | `#m-name` | string | Required. Machine name or ID |
| `serial` | `#m-serial` | string | Serial number |
| `model` | `#m-model` | string | Model |
| `supplier` | `#m-supplier` | string | Supplier / distributor |
| `purchaseDate` | `#m-purchase-date` | date string | Purchase date |
| `warrantyDate` | `#m-warranty-date` | date string | Warranty end date |
| `station` | `#m-station` | string | Station / room |
| `artist` | `#m-artist` | string | Assigned artist |
| `intervalDays` | `#m-interval-days` | number | Optional. Service interval in days (min 1, step 1) |
| `intervalHours` | `#m-interval-hours` | number | Optional. Service interval in hours (min 1, step 1) |
| `status` | (set by app) | string | `active` or `retired` |

Example:

```json
{
  "name": "Rotary A",
  "serial": "RA-00123",
  "model": "Pen Style v2",
  "supplier": "Example Distributor",
  "purchaseDate": "2024-03-01",
  "warrantyDate": "2026-03-01",
  "station": "Station 1",
  "artist": "A. Smith",
  "intervalDays": 90,
  "intervalHours": 200,
  "status": "active"
}
```

### Maintenance Entry Object

Created via the `#log-form` form. Required fields: `machineId`, `date`, `type`.

| Field | Source input | Type | Notes |
|-------|--------------|------|-------|
| `machineId` | `#entry-machine` | string | Required. References a machine |
| `date` | `#entry-date` | date string | Required. Service date |
| `hours` | `#entry-hours` | number | Optional. Current running hours (min 0, step 0.1) |
| `type` | `#entry-type` | string | Required. One of the maintenance types below |
| `voltage` | `#entry-voltage` | number | Optional. Running voltage in V (min 0, max 25, step 0.1) |
| `parts` | `#entry-parts` | string | Optional. Parts replaced |
| `cost` | `#entry-cost` | number | Optional. Cost (min 0, step 0.01) |
| `filingRef` | `#entry-filing-ref` | string | Optional. Filing reference (paper report / receipt binder) |
| `notes` | `#entry-notes` | string | Optional. Service notes |

**Maintenance type values** (from the `#entry-type` options):

- `Voltage calibration`
- `Clean & sanitise`
- `Needle cartridge change`
- `Full service` (bearing/motor)
- `Cord / RCA check`
- `Grip sterilisation`
- `Parts replacement`
- `Other`

Example:

```json
{
  "machineId": "Rotary A",
  "date": "2024-06-15",
  "hours": 412.5,
  "type": "Voltage calibration",
  "voltage": 7.8,
  "parts": "",
  "cost": 0,
  "filingRef": "INV-2024-118",
  "notes": "Recalibrated to 7.8 V"
}
```

### JSON Backup Envelope

The `#backup-json-btn` export produces a JSON file containing (per the German/Spanish/French/Italian documentation): the internal schema version, the export timestamp, all machine records, and all maintenance entries. The `#restore-file-input` accepts `.json` files only.

### CSV Export

The `#export-csv-btn` produces a tabular CSV containing: date, machine, station, artist, maintenance type, hours, voltage, parts, cost, filing reference, and notes.

---

## Calculation / Logic Algorithms

### Hours Delta Calculation

The Service Log table column **Hours (Delta)** computes the running hours elapsed since the previous entry of the same maintenance type for the same machine. The formula rendered in the cell is:

```
{current} hrs - {prev} hrs = {delta} hrs since last {type}
```

Where:

- `{current}` is the `hours` value of the entry being displayed
- `{prev}` is the `hours` value of the most recent earlier entry for the same machine and same `type`
- `{delta}` is `current - prev`
- `{type}` is the maintenance type label

If no prior matching entry exists, or if either entry lacks an `hours` value, no delta is shown.

### Due / Overdue Evaluation

For each machine with `status === "active"`, the app compares the last service date and last recorded hours against the machine's configured intervals:

1. **Days overdue**: if `intervalDays` is set and the number of days since the last service exceeds it, the banner shows `Overdue by {days} days`.
2. **Hours overdue**: if `intervalHours` is set and the running hours since the last service exceed it, the banner shows `Overdue by {hours} running hours`.
3. **Due soon**: if a service date falls within the next 14 days, the banner shows `Due in {days} days`.
4. **All clear**: if no active machine is overdue or due soon, the banner shows `All active machines are up to date.`

Retired machines are excluded from these evaluations but remain visible via the status filter.

### Cost Aggregation

Two aggregation routines feed the Parts & Costs view:

- **By machine** (`#costs-machine-body`): groups entries by machine, lists the distinct `parts` values, shows the arithmetic breakdown, and sums `cost` into a total per machine.
- **By year** (`#costs-year-body`): groups entries by the calendar year of `date`, counts the events, shows the arithmetic breakdown, and sums `cost` into a total per year.

Empty states are shown when no cost-bearing entries exist (`#costs-machine-empty`, `#costs-year-empty`).

### iCalendar (.ics) Generation

Each due/overdue item and each machine row exposes an `.ics` export. The generated calendar event includes the machine name, serial number, station, and assigned artist, and is intended for import into Google Calendar, Apple Calendar, or Microsoft Outlook.

### Filtering

The filter bar applies conjunctive filters to the Service Log table:

- `#filter-station`: All Stations / Rooms, or a specific station
- `#filter-artist`: All Artists, or a specific artist
- `#filter-machine`: All Machines, or a specific machine
- `#filter-type`: All Types, or a specific maintenance type
- `#filter-status`: `all`, `active`, or `retired`

When no rows match, `#log-empty-state` is revealed with the message "No maintenance records match your filters."

---

## API Reference

The application is not a library; it exposes no public JavaScript API. The following are the real DOM handlers and controls wired in the markup. All handlers are bound in `app.js` (not shown in full) and are listed here by their element IDs and intended behaviour.

### Forms

| Handler | Element | Behaviour |
|---------|---------|-----------|
| Log submit | `#log-form` | Validates required fields (`machineId`, `date`, `type`), appends a maintenance entry, refreshes the log table, due banner, and cost views |
| Machine submit | `#machine-form` | Validates `name`, appends a machine with `status: "active"`, refreshes the machines table and due banner |

### Buttons

| Handler | Element | Behaviour |
|---------|---------|-----------|
| `#add-entry-btn` | submit | Submits `#log-form` |
| `#save-machine-btn` | submit | Submits `#machine-form` |
| `#export-csv-btn` | button | Downloads the filtered Service Log as CSV |
| `#backup-json-btn` | button | Downloads a full JSON backup (schema version, timestamp, machines, entries) |
| `#restore-trigger-btn` | button | Opens the hidden `#restore-file-input` file picker |
| `#clear-all-btn` | button | Opens the confirm modal, then clears all `localStorage` data |
| `#modal-cancel-btn` | button | Dismisses the confirm modal without action |
| `#modal-confirm-btn` | button | Confirms the pending destructive action |
| Per-row delete (`×`) | button | Opens the confirm modal, then removes the row |
| Per-machine retire/reactivate | button | Toggles `status` between `active` and `retired` |
| Per-machine `.ics` export | button | Downloads an iCalendar file for that machine's next service |

### File Input

| Handler | Element | Behaviour |
|---------|---------|-----------|
| `#restore-file-input` | `<input type="file" accept=".json">` | Reads the selected JSON file and restores machines and entries |

### Selects

| Handler | Element | Behaviour |
|---------|---------|-----------|
| `#language-select` | select | Switches the active locale (en, de, fr, es, it, pt, nl) |
| `#filter-station`, `#filter-artist`, `#filter-machine`, `#filter-type`, `#filter-status` | select | Re-renders the Service Log table |

### PostMessage Bridge

When embedded in an iframe, the tool listens for:

```js
window.addEventListener('message', function (e) {
  if (e.data && e.data.type === 'poli-theme') {
    document.documentElement.setAttribute('data-theme', e.data.light ? 'light' : 'dark');
  }
});
```

Payload shape: `{ type: 'poli-theme', light: boolean }`.

---

## Integration Guide

### Standalone Use

Open the live URL directly:

```
https://poliinternational.com/tools/machine-maintenance-logbook/
```

No installation, account, or network connection is required after the initial page load. All data is written to the browser's `localStorage` on the current device.

### Iframe Embedding

The tool detects embedding via `window.self !== window.top` and switches to a dark theme by default. A parent page can drive the theme by posting a message to the iframe:

```js
iframe.contentWindow.postMessage({ type: 'poli-theme', light: true }, '*');
```

The tool responds by setting `data-theme="light"` on its root element. Posting `{ type: 'poli-theme', light: false }` restores the dark theme.

### Dependency-Free Static Bundle

The runtime is plain HTML, CSS, and JavaScript. There is no bundler, no npm dependency, and no server-side component. Deployment consists of serving the static files under `/tools/machine-maintenance-logbook/` plus the shared assets under `/tools/shared/` and `/js/input-guards.js`.

### Data Portability

Because data lives only in `localStorage`, moving between devices requires the JSON backup workflow:

1. On the source device, open **Backup & Restore** and click **Export JSON Backup**.
2. Transfer the file to the target device.
3. On the target device, click **Restore JSON Backup** and select the file.

---

## Customization

- **Localisation**: The seven bundled locales are loaded as separate scripts (`i18n-en.js` through `i18n-pt.js`). Strings are keyed by `data-i18n` attributes in the markup. Adding a locale means adding a new `i18n-xx.js` file, a `<script>` tag, and an `<option>` in `#language-select`.
- **Theming**: The root element accepts `data-theme="light"` or `data-theme="dark"`. The iframe bridge sets this automatically; a standalone deployment can set it directly.
- **Styling**: Tool-specific styles live in `css/style.css`; shared print and accessibility styles are in `/tools/shared/print.css` and `/tools/shared/a11y.css`.
- **Maintenance types**: The `#entry-type` select is a fixed list of eight options. Adding or removing a type requires editing the markup and the corresponding i18n keys.

---

## Performance

- **No network I/O at runtime**: All reads and writes target `localStorage`; there are no fetch calls, no analytics, and no external assets beyond the same-origin CSS and JS files.
- **Single-page rendering**: Tab switching toggles the `hidden` attribute on the four panels; no route changes or reloads occur.
- **Table rendering**: The Service Log, Machines, and Costs tables are rendered from in-memory arrays. Filtering re-renders the log table only.
- **Export operations**: CSV, JSON, and `.ics` exports are generated client-side and downloaded via object URLs.

---

## Browser Compatibility

The tool relies on widely supported web platform features:

- `localStorage`
- `Blob` and `URL.createObjectURL`
- `FileReader` and `<input type="file">`
- `postMessage` and `window.self` / `window.top` comparison
- CSS custom properties and `data-*` attribute selectors
- `hidden` attribute for panel visibility

Any modern evergreen browser (Chrome, Edge, Firefox, Safari) supports these. The manifest link (`./manifest.json`) enables installable PWA behaviour where the host supports it.

---

## Security

- **No server transmission**: Machine records, serial numbers, costs, artist names, and notes never leave the device. The tool makes no outbound requests.
- **Local-only storage**: Data is scoped to the origin's `localStorage`. Clearing site data, using private browsing, or clearing the cache will erase records; the JSON backup workflow is the intended mitigation.
- **Input handling**: The page loads `/js/input-guards.js` before the application scripts, which provides shared input sanitisation guards. All user-supplied strings (machine names, notes, parts, filing references) are rendered into the DOM; the input guards layer is the mechanism the codebase uses to constrain that input.
- **Iframe messaging**: The theme bridge accepts `poli-theme` messages and only reads `e.data.light` as a boolean; it does not execute or evaluate message content.
- **No credentials**: The tool stores no authentication tokens, passwords, or personal identifiers beyond what the user types into the machine and log forms.

---

## Version History

### 1.0.0

Initial release. Includes:

- Four-tab interface: Service Log, Machines, Parts & Costs, Backup & Restore
- Machine registration with serial, model, supplier, purchase and warranty dates, station, artist, and day/hour service intervals
- Maintenance logging with eight maintenance types, running hours, voltage, parts, cost, filing reference, and notes
- Hours delta calculation per machine and maintenance type
- Due / overdue banner with 14-day lookahead and per-machine `.ics` export
- Filtering by station, artist, machine, type, and status
- Cost aggregation by machine and by calendar year
- CSV export of the service log
- JSON backup and restore
- Seven bundled locales (en, de, fr, es, it, pt, nl)
- Iframe theme bridge via `postMessage`

---

## Support / Contact

For questions, bug reports, or feature requests, contact:

**support@poliinternational.com**
