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

- **HTML5**, Semantic markup with form inputs and data table
- **CSS3**, External stylesheet (`/tools/machine-maintenance-logbook/css/style.css`)
- **Vanilla JavaScript (ES6)**, No frameworks, libraries, or dependencies
- **LocalStorage API**, Client-side data persistence
- **No server, no database, no external APIs**

### File Structure

```
machine-maintenance-logbook/
├── index.html          # Main HTML document
├── css/
│   └── style.css       # All styling (external)
└── js/
    └── app.js          # All application logic (external)
```

### Component / Logic Breakdown

The tool consists of three logical layers:

1. **Presentation Layer** (`index.html`), Form inputs, table, buttons, empty state display
2. **Styling Layer** (`style.css`), Visual presentation (not analyzed in this document)
3. **Application Layer** (`app.js`), Data management, rendering, event handling, export

---

## Data Schemas

### LocalStorage Key

```
Key: "poli-maint-log"
Type: string (JSON array)
```

### Entry Object Schema

Each entry in the array is an object with the following fields:

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `date` | string | Yes | Date of maintenance event (YYYY-MM-DD) | `"2025-03-15"` |
| `machine` | string | Yes | Machine or device name | `"FK Irons Spektra"` |
| `type` | string | Yes | Maintenance type from dropdown | `"Voltage calibration"` |
| `voltage` | string | No | Voltage reading (empty string if not provided) | `"6.5"` or `""` |
| `notes` | string | No | Additional notes (empty string if not provided) | `"replaced worn cam"` |

### Example Stored Data

```json
[
  {
    "date": "2025-03-15",
    "machine": "FK Irons Spektra",
    "type": "Voltage calibration",
    "voltage": "6.5",
    "notes": "Set to 6.5V for shading"
  },
  {
    "date": "2025-03-14",
    "machine": "Bishop Rotary",
    "type": "Clean & sanitise",
    "voltage": "",
    "notes": ""
  }
]
```

### Maintenance Type Constants

The dropdown in `index.html` defines these valid `type` values:

- `"Voltage calibration"`
- `"Clean & sanitise"`
- `"Needle cartridge change"`
- `"Full service (bearing/motor)"`
- `"Cord / RCA check"`
- `"Grip sterilisation"`
- `"Other"`

---

## Calculation / Logic Algorithms

### `load()`

**Purpose:** Retrieve all entries from LocalStorage.

**Steps:**
1. Call `localStorage.getItem('poli-maint-log')`
2. If key exists, parse JSON string to array; otherwise return empty array `[]`
3. Return array of entry objects

### `save(entries)`

**Purpose:** Persist entries array to LocalStorage.

**Steps:**
1. Accept `entries` parameter (array of entry objects)
2. Call `JSON.stringify(entries)` to convert to JSON string
3. Call `localStorage.setItem('poli-maint-log', stringifiedData)`

### `escHtml(s)`

**Purpose:** Sanitize user input for safe HTML rendering.

**Steps:**
1. Convert input to string
2. Replace `&` with `&amp;`
3. Replace `<` with `&lt;`
4. Replace `>` with `&gt;`
5. Replace `"` with `&quot;`
6. Return sanitized string

### `render()`

**Purpose:** Update the DOM to reflect current data state.

**Steps:**
1. Call `load()` to get current entries array
2. Update `logCount` element text:
   - If entries exist: `"{count} entr{y/ies}"`
   - If empty: empty string
3. If no entries:
   - Show `emptyState` div
   - Hide `logTable`
   - Exit function
4. If entries exist:
   - Hide `emptyState`
   - Show `logTable`
   - Build HTML string by iterating entries in **reverse order** (newest first)
   - For each entry, create a table row with:
     - Date (escaped)
     - Machine name (escaped)
     - Maintenance type (escaped)
     - Voltage: value + " V" if present, otherwise ", " (em dash)
     - Notes: value if present, otherwise ", " (em dash)
     - Delete button with `data-idx` attribute set to original array index
   - Set `logBody.innerHTML` to built HTML

### CSV Export Algorithm

**Steps:**
1. Call `load()` to get entries
2. If no entries, show alert and exit
3. Build CSV header: `Date,Machine,Type,Voltage (V),Notes`
4. For each entry, create CSV row:
   - Wrap each field value in double quotes
   - Escape internal double quotes by doubling them (`""`)
   - Join fields with commas
5. Combine header and rows with newlines
6. Create temporary anchor element with `data:text/csv;charset=utf-8` URI
7. Set download filename to `machine-maintenance-log.csv`
8. Programmatically click the anchor to trigger download

---

## API Reference

### Public Functions

| Function | Parameters | Returns | Description |
|----------|------------|---------|-------------|
| `load()` | None | Array of entry objects | Loads all entries from LocalStorage |
| `save(entries)` | `entries`: Array of entry objects | `undefined` | Saves entries array to LocalStorage |
| `escHtml(s)` | `s`: any value | Sanitized string | HTML-escapes a string for safe DOM insertion |
| `render()` | None | `undefined` | Re-renders the entire log table and UI state |

### Event Handlers

| Handler | Element | Event | Behavior |
|---------|---------|-------|----------|
| `addBtn.addEventListener('click', ...)` | `#add-btn` | `click` | Validates form, creates new entry, saves, resets form, re-renders |
| `logBody.addEventListener('click', ...)` | `#log-body` | `click` (delegated) | Detects `.del-btn` clicks, confirms deletion, removes entry, re-renders |
| `exportBtn.addEventListener('click', ...)` | `#export-btn` | `click` | Generates CSV file and triggers download |
| `clearBtn.addEventListener('click', ...)` | `#clear-btn` | `click` | Confirms, removes all entries from LocalStorage, re-renders |

### Initialization

On page load:
1. `entryDate.value` is set to today's date (ISO format, YYYY-MM-DD)
2. `render()` is called to display any existing entries

---

## Integration Guide

### Standalone Embedding

The tool is a fully self-contained static HTML page. To embed it:

**Option 1: Direct URL**
```
https://poliinternational.com/tools/machine-maintenance-logbook/
```

**Option 2: Iframe Embedding**

The tool includes built-in iframe support:
- Detects if loaded in an iframe (`window.self !== window.top`)
- Automatically applies dark theme
- Listens for `message` events with `type: 'poli-theme'` to toggle light/dark mode

Example iframe embed:
```html
<iframe 
  src="https://poliinternational.com/tools/machine-maintenance-logbook/"
  width="100%" 
  height="800" 
  frameborder="0"
  allow="storage-access"
  title="Machine Maintenance Logbook">
</iframe>
```

**Theme control from parent page:**
```javascript
// Send theme state to iframe
document.querySelector('iframe').contentWindow.postMessage({
  type: 'poli-theme',
  light: true  // or false for dark
}, '*');
```

### Dependencies

- **Zero external dependencies**, No jQuery, React, or any third-party libraries
- **No CDN resources**, Everything is self-hosted
- **No server requirements**, Works entirely in the browser

---

## Customization

### Adding Maintenance Types

Edit the `<select id="maint-type">` element in `index.html`:

```html
<option value="Voltage calibration">Voltage calibration</option>
<option value="Your new type">Your new type</option>
```

### Changing CSV Export Filename

In `app.js`, modify the download attribute:

```javascript
a.download = 'your-custom-filename.csv';
```

### Modifying Voltage Range

In `index.html`, adjust the voltage input constraints:

```html
<input type="number" id="voltage-val" ... min="0" max="20" step="0.1">
```

### Styling

All visual customization is done via `/tools/machine-maintenance-logbook/css/style.css`. The tool uses BEM-style class naming (e.g., `tool-header`, `add-card`, `form-grid`).

---

## Performance

- **LocalStorage operations** are synchronous and near-instant for typical datasets (hundreds of entries)
- **DOM updates** use `innerHTML` assignment, which is efficient for small to medium datasets
- **No network requests**, Zero latency from external resources
- **No animations or transitions**, Minimal CPU/GPU usage
- **Memory footprint**, Only stores entry data as JSON string in LocalStorage (typically < 100KB for thousands of entries)

---

## Browser Compatibility

| Feature | Support |
|---------|---------|
| LocalStorage | IE 8+, all modern browsers |
| `input[type="date"]` | Chrome, Firefox, Edge, Safari 14.1+ |
| `input[type="number"]` | All modern browsers |
| `template literals` | IE 11+, all modern browsers |
| `fetch` / `Promise` | Not used |
| `Arrow functions` | IE 11+, all modern browsers |
| `const` / `let` | IE 11+, all modern browsers |

**Note:** The `input[type="date"]` fallback on older browsers will show a plain text input. All core functionality works on IE 11+.

---

## Security

### Input Handling

- **HTML escaping**, The `escHtml()` function sanitizes all user input before DOM insertion, preventing XSS attacks
- **CSV injection prevention**, All CSV values are wrapped in double quotes and internal quotes are escaped
- **No eval() or innerHTML injection**, Only sanitized content is rendered

### Data Privacy

- **All data stays in the browser**, No data is sent to any server
- **LocalStorage only**, Data persists only on the user's device
- **No cookies, no tracking, no analytics**

### Limitations

- LocalStorage is **not encrypted**, Data is stored as plain text
- LocalStorage is **domain-specific**, Data cannot be accessed across different domains
- **No authentication**, Anyone with browser access can view/modify data

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | Initial release | Core logbook functionality with add, delete, export, and clear features |

---

## Support / Contact

For technical support, feature requests, or bug reports:

**Email:** support@poliinternational.com

**Website:** https://poliinternational.com/

---

*Documentation generated from source code version 1.0.0*
