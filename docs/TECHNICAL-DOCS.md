# Tattoo Machine Maintenance Logbook - Technical Documentation

## Architecture & Technology Stack

The application is built using standard web technologies:
- **HTML5**: Semantic tags, accessible forms, tables, and dialogs.
- **CSS3**: Variable-based styling with light/dark theme support and strict `[hidden] { display: none !important; }` visibility handling.
- **JavaScript (ES6+)**: Self-contained client-side application logic without external CDN dependencies or runtime frameworks.
- **Storage Layer**: Browser `localStorage` APIs storing records under three keys:
  - `poli-maint-machines`: Registered machines and specifications.
  - `poli-maint-log`: Chronological maintenance event logs.
  - `poli_tools_language`: User language preference (`en`, `de`, `fr`, `es`, `it`, `pt`, `nl`).

## Data Schemas

### Machine Schema (`poli-maint-machines`)
```typescript
interface Machine {
  id: string;               // Unique string identifier (e.g. "m_1740000000000")
  name: string;             // Distinct machine identifier
  serialNumber: string;     // Hardware serial number
  model: string;            // Model name or designation
  supplier: string;         // Distributor or supplier name
  purchaseDate: string;     // YYYY-MM-DD
  warrantyEndDate: string;  // YYYY-MM-DD
  station: string;          // Station, booth, or room
  artist: string;           // Assigned tattoo artist
  intervalDays: number | null;   // Calendar service interval in days
  intervalHours: number | null;  // Usage service interval in running hours
  status: 'active' | 'retired';  // Operating state
}
```

### Log Entry Schema (`poli-maint-log`)
```typescript
interface MaintenanceEntry {
  id: string;               // Unique string identifier (e.g. "e_1740000000000")
  machineId: string;        // Foreign key referencing Machine.id
  machineName: string;      // Cached or manual machine name
  date: string;             // YYYY-MM-DD
  runningHours: number | null;   // Operating hours meter reading
  type: string;             // Maintenance action category
  voltage: string | null;   // Calibration voltage reading
  partsReplaced: string;    // Free text of parts replaced
  cost: number | null;      // Direct monetary expenditure
  filingRef: string;        // Physical paperwork filing location
  notes: string;            // Free text technician observations
}
```

## Core Computational Modules

### Running Hours Arithmetic (Improvement B)
On rendering the service log, entries for each machine and service type are ordered chronologically. For entry $i$ with running hours $H_i$, the previous reading $H_{i-1}$ is retrieved:
$$\Delta H = H_i - H_{i-1}$$
The interface renders this arithmetic explicitly (`150 hrs - 100 hrs = 50 hrs since last [type]`) to meet the requirement that every derived figure shows its arithmetic.

### Cost Aggregation (Improvement C)
Costs are aggregated using two indices:
1. **Per Machine**: $\sum \text{cost}$ for entries linked to each machine, displaying the itemized calculation ($C_1 + C_2 = \text{Total}$).
2. **Per Calendar Year**: $\sum \text{cost}$ grouped by $\text{date.slice}(0, 4)$.

### Due & Overdue Evaluation (Improvement D, F)
Evaluated upon loading for each active (`status !== 'retired'`) machine:
- Target date: $\text{Base Date} + \text{Interval Days}$
- Day differential: $(\text{Target Date} - \text{Current Date})$.
- If differential $\le 0$, flagged overdue. If $1 \le \text{differential} \le 14$, flagged due soon.
- Retired machines are explicitly bypassed.

### iCalendar Generation (Improvement D)
RFC 5545 `.ics` event payloads are constructed in-memory and converted to a Blob with MIME type `text/calendar;charset=utf-8` for direct download, bypassing any external server or network transmission.

### Cross-Tool Navigation (Rule 18)
Links to external suite widgets use full canonical URLs with top-level window targets:
- Equipment ROI Calculator: `https://poliinternational.com/equipment-roi-calculator/` with `target="_top"`.

### Internationalization Architecture (Rules 5, 6, 7)
Seven languages (`en`, `de`, `fr`, `es`, `it`, `pt`, `nl`) are contained in a synchronous dictionary map (`I18N`) in `js/app.js`. When the user switches language, `updateStaticTranslations()` and `renderAll()` execute sequentially, maintaining input states and redrawing all dynamic tables.

## Website Embedding

Studios can embed the tool directly into external websites using the canonical iframe URL:

```html
<iframe src="https://poliinternational.com/tools/machine-maintenance-logbook/index.html" width="100%" height="800" frameborder="0"></iframe>
```
