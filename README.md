# Tattoo Machine Maintenance Logbook

> **Log every tattoo machine service, calibration, and voltage check in one place. Track intervals, running hours, and full equipment history.**

[![License](https://img.shields.io/github/license/Poli-International/machine-maintenance-logbook)](LICENSE)
[![Last Commit](https://img.shields.io/github/last-commit/Poli-International/machine-maintenance-logbook)](https://github.com/Poli-International/machine-maintenance-logbook/commits/main)

**Live Demo:** [https://poliinternational.com/tools/machine-maintenance-logbook/](https://poliinternational.com/tools/machine-maintenance-logbook/)

---

## 🎯 Overview

The Tattoo Machine Maintenance Logbook provides tattoo artists and studio owners with an inspection-ready digital logbook for tracking equipment service histories, running hours, and maintenance costs without transmitting studio data to external servers.

**Category:** Studio Operations

This is a free tool from the [Poli International Widget Suite](https://poliinternational.com/tools/). It runs entirely client-side; data is stored locally in your browser's localStorage and is never transmitted to us.

---

## ✨ Features

- **Machine Identity Registry (Improvement A)**: Record serial number, model, supplier, purchase date, and warranty expiration date once per machine.
- **Running Hours Tracking & Delta Arithmetic (Improvement B)**: Record current meter hours on each service event and inspect the exact hours elapsed since the preceding service of each type (`current - previous = delta hrs`).
- **Parts & Maintenance Cost Totals (Improvement C)**: Log components replaced and monetary costs per event. Inspect cumulative totals calculated per machine and per calendar year.
- **Equipment Payback Link (Improvement C)**: Directly links to the [Equipment ROI Calculator](https://poliinternational.com/equipment-roi-calculator/) for equipment investment and payback analysis.
- **Upcoming & Overdue Service Schedules (Improvement D)**: On-load banner identifies equipment due or overdue based on calendar day intervals or running hour thresholds.
- **Calendar (.ics) Export (Improvement D)**: Export standard iCalendar (.ics) event files per machine for import into studio calendar applications without servers or background notification services.
- **Filing Reference System (Improvement E)**: Enter the physical binder, drawer, or folder reference where paper service receipts and inspection reports are stored.
- **Machine Retirement (Improvement F)**: Transition decommissioned machines to a "Retired" state that preserves their historical records while removing them from active maintenance due lists.
- **Grouped by Station and Artist (Improvement G)**: Assign machines to specific stations or rooms and artists, with multi-attribute filtering across the entire logbook.
- **Full JSON Backup & Restore (Improvement H)**: Export complete machine registries and service logs to a single JSON backup file and restore on any device.
- **CSV Data Export**: Generate standard CSV spreadsheets for inspection audits and record-keeping.
- **Seven Fully Localized Languages**: Available in English, German (Deutsch), French (Français), Spanish (Español), Italian (Italiano), Portuguese (Português), and Dutch (Nederlands).

---

## 🚀 Installation & Usage

### Option 1: Use Online

Visit:
**[https://poliinternational.com/tools/machine-maintenance-logbook/](https://poliinternational.com/tools/machine-maintenance-logbook/)**

### Option 3: Embed in Studio Website

Studios can embed the tool directly into their website using the canonical iframe URL:

```html
<iframe src="https://poliinternational.com/tools/machine-maintenance-logbook/index.html" width="100%" height="800" frameborder="0"></iframe>
```

### Option 2: Run Locally

```bash
git clone https://github.com/Poli-International/machine-maintenance-logbook.git
cd machine-maintenance-logbook
npm install
npm run dev
```

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**Published by [Poli International](https://poliinternational.com)**

[Website](https://poliinternational.com) • [Tools](https://poliinternational.com/tools/) • [GitHub](https://github.com/Poli-International)

</div>
