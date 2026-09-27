# Tattoo Machine Maintenance Logbook - Complete Guide

## Target Keywords

**Primary keyword:** tattoo machine maintenance log

**Long-tail keywords:**

1. tattoo machine service log template
2. rotary machine service log
3. coil machine calibration tracker
4. tattoo machine voltage log
5. tattoo machine running hours tracker
6. studio equipment maintenance log
7. tattoo machine service interval reminder
8. tattoo machine parts and cost tracker
9. machine maintenance log with .ics calendar export
10. tattoo machine warranty and purchase date tracker
11. tattoo machine maintenance CSV export
12. tattoo machine service history by artist and station
13. tattoo machine maintenance log stored in browser
14. equipment maintenance logbook for tattoo studios
15. tattoo machine service due and overdue alerts

## Meta Title

```html
<title>Machine Maintenance Logbook, Service & Voltage Tracker</title>
```

## Meta Description

```html
<meta name="description" content="Log every tattoo machine service, calibration, and voltage check in one place. Track intervals, running voltage, and full equipment history.">
```

## H1 + Content Outline

# Tattoo Machine Maintenance Logbook

- **What is Tattoo Machine Maintenance Logbook?**
- **Who Should Use This**
  - Studio owners and operations managers
  - Resident, guest artists, and piercers
  - Hygiene and safety officers
  - Repair technicians and machine builders
- **How to Use**
  - Review the Maintenance Due & Overdue banner
  - Register a new machine
  - Manage machine status (retire / reactivate)
  - Log a maintenance event
  - Filter and review the service log
  - Analyse parts and costs
  - Back up and restore your data
- **What the Tool Tracks**
  - Machine identity fields
  - Service event fields
  - Interval logic (days and hours)
  - Running hours delta calculation
  - Cost aggregation by machine and year
- **Use-Case Examples**
  - A shared studio fleet with rotating artists
  - A touring artist's personal rotary
  - A technician documenting a full service
- **Exporting and Printing**
  - CSV export
  - .ics calendar export
  - JSON backup and restore
  - Browser print
- **Frequently Asked Questions (FAQ)**
- **Structured Data**
- **Internal Linking Suggestions**

## What is Tattoo Machine Maintenance Logbook?

Tattoo Machine Maintenance Logbook is a free browser-based tool that records the identity, service history, and maintenance schedule of every tattoo machine in a studio. It is built around four views: a **Service Log**, a **Machines** register, a **Parts & Costs** breakdown, and a **Backup & Restore** panel.

The tool stores a machine's name or ID, serial number, model, supplier, purchase date, warranty end date, station or room, assigned artist, and an optional service interval in days, in hours, or both. Against each machine you log maintenance events with a service date, a maintenance type (voltage calibration, clean and sanitise, needle cartridge change, full service, cord / RCA check, grip sterilisation, parts replacement, or other), an optional running hours reading, an optional running voltage, parts replaced, cost, a filing reference for paper reports or receipt binders, and free-text notes.

From those inputs the tool does three things automatically. It compares each active machine against its configured interval and surfaces due or overdue warnings in a banner at the top of the page. It calculates the running-hours delta between consecutive services of the same type on the same machine. It aggregates parts and costs by machine and by calendar year.

Everything is held in your browser's local storage. Nothing is transmitted to Poli International or any external server. You can export the full log to CSV, export due maintenance dates to an .ics calendar file, and download or restore a complete JSON backup.

## Who Should Use This

**Studio owners and operations managers** coordinating a shared machine fleet across multiple stations, who need to see which machines are due for service and what the studio is spending on maintenance each year.

**Resident, guest artists, and piercers** maintaining personal equipment, recording preferred running voltages, and tracking mechanical wear on their own machines.

**Hygiene and safety officers** keeping inspection records and linking paper reports or receipt binders to digital entries via the filing reference field.

**Repair technicians and machine builders** performing workshop overhauls, replacing bearings, and documenting running hours for studio clients.

## How to Use

### Review the Maintenance Due & Overdue banner

The banner at the top of the tool lists machines that have passed their configured service interval. Overdue machines show as overdue by a number of days or by a number of running hours. Machines approaching their interval within fourteen days show as due in a number of days. When every active machine is within its schedule, the banner reports that all active machines are up to date. Each flagged machine has an **Export .ics** button that downloads a calendar event containing the machine name, serial number, station, and artist.

### Register a new machine

1. Open the **Machines** tab.
2. Enter a **Machine Name / ID** (required).
3. Fill in **Serial Number**, **Model**, and **Supplier / Distributor**.
4. Set **Purchase Date** and **Warranty End Date**.
5. Enter the **Station / Room** and **Assigned Artist**.
6. Optionally set a **Service Interval (Days)** and/or a **Service Interval (Hours)**.
7. Click **Save Machine**.

Registered machines appear in the **Registered Machines** table with their serial and model, supplier, purchase and warranty dates, station and artist, interval, and status.

### Manage machine status

In the **Registered Machines** table, active machines carry an **Active** status. Use **Retire** to mark a machine as sold, decommissioned, or held in reserve; its full history is preserved but it stops appearing in due and overdue alerts. Use **Reactivate** to return a retired machine to the active schedule.

### Log a maintenance event

1. Open the **Service Log** tab.
2. Select the machine from the **Select Machine** dropdown.
3. Set the **Service Date**.
4. Optionally enter **Current Running Hours**.
5. Choose a **Maintenance Type**: Voltage calibration, Clean & sanitise, Needle cartridge change, Full service (bearing/motor), Cord / RCA check, Grip sterilisation, Parts replacement, or Other.
6. Optionally enter **Running Voltage (V)** (0 to 25).
7. Optionally enter **Parts Replaced**, **Cost**, and a **Filing Reference (Paper Report / Receipt Binder)**.
8. Add any **Service Notes**.
9. Click **Add to Log**.

### Filter and review the service log

Use the filter bar above the log table to narrow records by **Station / Room**, **Artist**, **Machine**, **Maintenance Type**, or **Status** (All, Active only, Retired only). The log table shows Date, Machine, Type, Hours (Delta), Voltage, Parts & Cost, Filing Ref, and Notes. The **Hours (Delta)** column reports the running hours elapsed since the previous service of the same type on the same machine. Each row has a delete control that asks for confirmation before removing the entry.

### Analyse parts and costs

Open the **Parts & Costs** tab. The **Total Costs by Machine** table lists parts replaced, the cost calculation, and total cost per machine. The **Total Costs by Year** table lists the number of events, the cost calculation, and total cost per calendar year.

### Back up and restore your data

Open the **Backup & Restore** tab. Use **Export JSON Backup** to download a complete archive of machines, service logs, and costs. Use **Restore JSON Backup** to load a JSON file onto a new device or after clearing your browser. Use **Clear All Data** to wipe all stored records, with a confirmation dialog before anything is removed.

## What the Tool Tracks

**Machine identity fields:** Machine Name / ID, Serial Number, Model, Supplier / Distributor, Purchase Date, Warranty End Date, Station / Room, Assigned Artist, Service Interval (Days), Service Interval (Hours).

**Service event fields:** Machine, Service Date, Current Running Hours, Maintenance Type, Running Voltage (V), Parts Replaced, Cost, Filing Reference, Service Notes.

**Interval logic:** Each machine can carry a day-based interval, an hour-based interval, or both. The due banner checks active machines against these thresholds and flags overdue or due-soon machines.

**Running hours delta:** When a running hours reading is entered, the tool finds the previous entry for the same machine and the same maintenance type, subtracts the earlier reading from the current one, and displays the delta.

**Cost aggregation:** Costs entered against service events are summed by machine and by calendar year.

## Use-Case Examples

**A shared studio fleet with rotating artists.** A studio registers six machines, each assigned to a station and an artist, with a 90-day service interval and a 500-hour interval. When one machine passes 90 days since its last full service, the due banner flags it. The studio exports the .ics file, imports it into the shared calendar, and books the machine in for a bearing check.

**A touring artist's personal rotary.** An artist registers a single rotary with a 60-day interval and no hour-based interval. Each clean and sanitise event is logged with a running voltage of 8.5 V and a note about the grip. After several months, the log shows a consistent voltage trend and the artist can spot when a calibration drifts.

**A technician documenting a full service.** A technician logs a full service (bearing/motor) event, enters the running hours reading, records the parts replaced (bearings, gasket), enters the cost, and adds a filing reference pointing to the paper receipt binder. The Parts & Costs tab then shows the machine's cumulative spend for the year.

## Exporting and Printing

- **CSV export:** In the Service Log tab, click **Export CSV** to download a table of dates, machines, types, hours, voltages, parts, costs, filing references, and notes.
- **Calendar export:** In the due banner or the Machines table, click **Export .ics** to generate a calendar event for a machine that is due or overdue.
- **JSON backup:** In the Backup & Restore tab, click **Export JSON Backup** to download a complete archive for backup or device transfer.
- **Print:** Use your browser's print function (Ctrl+P or Cmd+P) on any view. The print stylesheet hides navigation, buttons, and colour backgrounds so you get clean tables for studio folders.

## Frequently Asked Questions (FAQ)

**How do I know when a tattoo machine needs servicing?**
The tool continuously compares active machines against their configured intervals. When the day interval has elapsed or the running hours limit has been exceeded since the last check, the top banner flags the machine as overdue. If a target date falls within the next fourteen days, the banner reports it as due soon.

**Can I set service intervals by running hours instead of calendar days?**
Yes. Each machine can carry an hour-based interval, a day-based interval, or both at once. When you enter the running hours reading from your power supply at each service, the tool checks the cumulative hours and alerts you when the hour threshold is reached.

**What happens to maintenance records when a machine is retired?**
Retiring a machine preserves all historical service records, parts costs, and voltage calibrations. The machine is simply removed from the current due and overdue alerts and upcoming calendar reminders, but it remains fully searchable through the status filters.

**Where is my machine data stored?**
All data is held only in your browser's local storage on the computer, tablet, or phone you are using. No machine data, serial numbers, costs, or artist names are transmitted over the internet or stored on Poli International servers.

**How do I move the logbook to another computer or tablet?**
On your current computer, open the Backup & Restore tab and click **Export JSON Backup**. Transfer the downloaded file to the new device, open the tool there, click **Restore JSON Backup**, and select the file.

**What is the filing reference field for?**
The filing reference links the digital entry to physical studio folders, warranty documents, or receipt binders. By entering an invoice number or folder reference, staff can immediately produce the original workshop report or purchase receipt during a hygiene inspection.

**Can I export upcoming maintenance dates to Google or Apple Calendar?**
Yes. Clicking **Export .ics** next to a due machine generates a standard calendar file. You can import it directly into Google Calendar, Apple Calendar, or Microsoft Outlook to set up local reminders.

**How does the logbook calculate the running hours difference between services?**
When a running hours reading is entered on an event, the tool finds the previous entry for the same machine and the same maintenance type. It subtracts the earlier reading from the current one and reports exactly how many running hours the machine worked between those two checks.

**Does the tool calculate machine depreciation or return on investment?**
No. It tracks maintenance events, intervals, running hours, voltages, parts, and costs. It does not compute depreciation, payback periods, or hourly break-even thresholds.

**Can I print a clean copy of the log for a studio folder?**
Yes. Use your browser's print function on any view. The print stylesheet hides navigation, buttons, and colour backgrounds so you get clean tables suitable for physical studio records.

## Structured Data

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "name": "Tattoo Machine Maintenance Logbook",
      "url": "https://poliinternational.com/tools/machine-maintenance-logbook/",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "description": "Log every tattoo machine service, calibration, and voltage check in one place. Track intervals, running voltage, and full equipment history.",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Machine identity register with serial, model, supplier, purchase and warranty dates",
        "Service log with maintenance type, running hours, voltage, parts, cost, and filing reference",
        "Service interval tracking by days, running hours, or both",
        "Due and overdue maintenance banner with .ics calendar export",
        "Running hours delta calculation between consecutive services",
        "Cost aggregation by machine and by calendar year",
        "CSV export of the full service log",
        "JSON backup and restore",
        "Local browser storage only, no data transmitted"
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do I know when a tattoo machine needs servicing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The tool continuously compares active machines against their configured intervals. When the day interval has elapsed or the running hours limit has been exceeded since the last check, the top banner flags the machine as overdue. If a target date falls within the next fourteen days, the banner reports it as due soon."
          }
        },
        {
          "@type": "Question",
          "name": "Can I set service intervals by running hours instead of calendar days?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Each machine can carry an hour-based interval, a day-based interval, or both at once. When you enter the running hours reading from your power supply at each service, the tool checks the cumulative hours and alerts you when the hour threshold is reached."
          }
        },
        {
          "@type": "Question",
          "name": "What happens to maintenance records when a machine is retired?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Retiring a machine preserves all historical service records, parts costs, and voltage calibrations. The machine is simply removed from the current due and overdue alerts and upcoming calendar reminders, but it remains fully searchable through the status filters."
          }
        },
        {
          "@type": "Question",
          "name": "Where is my machine data stored?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "All data is held only in your browser's local storage on the computer, tablet, or phone you are using. No machine data, serial numbers, costs, or artist names are transmitted over the internet or stored on Poli International servers."
          }
        },
        {
          "@type": "Question",
          "name": "How do I move the logbook to another computer or tablet?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "On your current computer, open the Backup & Restore tab and click Export JSON Backup. Transfer the downloaded file to the new device, open the tool there, click Restore JSON Backup, and select the file."
          }
        },
        {
          "@type": "Question",
          "name": "What is the filing reference field for?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The filing reference links the digital entry to physical studio folders, warranty documents, or receipt binders. By entering an invoice number or folder reference, staff can immediately produce the original workshop report or purchase receipt during a hygiene inspection."
          }
        },
        {
          "@type": "Question",
          "name": "Can I export upcoming maintenance dates to Google or Apple Calendar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Clicking Export .ics next to a due machine generates a standard calendar file. You can import it directly into Google Calendar, Apple Calendar, or Microsoft Outlook to set up local reminders."
          }
        },
        {
          "@type": "Question",
          "name": "How does the logbook calculate the running hours difference between services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "When a running hours reading is entered on an event, the tool finds the previous entry for the same machine and the same maintenance type. It subtracts the earlier reading from the current one and reports exactly how many running hours the machine worked between those two checks."
          }
        },
        {
          "@type": "Question",
          "name": "Does the tool calculate machine depreciation or return on investment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. It tracks maintenance events, intervals, running hours, voltages, parts, and costs. It does not compute depreciation, payback periods, or hourly break-even thresholds."
          }
        },
        {
          "@type": "Question",
          "name": "Can I print a clean copy of the log for a studio folder?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Use your browser's print function on any view. The print stylesheet hides navigation, buttons, and colour backgrounds so you get clean tables suitable for physical studio records."
          }
        }
      ]
    }
  ]
}
```

## Internal Linking Suggestions

Link to relevant Poli International wiki and blog topics that support the maintenance workflow this tool covers:

- **Equipment ROI Calculator** for payback and depreciation analysis that this logbook deliberately does not perform.
- **Studio Pricing Benchmark** for cabin rent, hourly rates, and artist split comparisons.
- **Autoclave & Sterilization Calculator** for autoclave cycle, spore test, and chemical indicator logging.
- **Biocompatibility Material Checker** for sterile piercing jewellery batch certificates and alloy standards.
- **Tattoo machine voltage and calibration guides** for interpreting the Running Voltage (V) field over time.
- **Rotary vs coil machine maintenance articles** for context on bearing, motor, and spring wear.
- **Studio hygiene and inspection record guides** for how the filing reference field supports paper trail compliance.
- **Tattoo studio inventory and asset management posts** for registering and retiring machines.
- **Data backup and browser storage explainers** for understanding local storage and JSON backups.
- **Tattoo machine buying and warranty guides** for making use of the purchase date and warranty end date fields.
