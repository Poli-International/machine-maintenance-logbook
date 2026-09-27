# Machine Maintenance Logbook: user guide

The Machine Maintenance Logbook tracks machine identity, running hours, calibration values, service intervals, repair costs, and inspection history for tattoo studios, piercers, and body-art equipment technicians.

## What it is for

The Machine Maintenance Logbook provides a structured inventory of rotary, coil, pen, and power devices in your studio. It records equipment provenance, serial numbers, suppliers, warranty expiration dates, workstations, and assigned artists.

The tool logs ongoing servicing: voltage calibration, ultrasonic cleaning, cartridge drive replacements, motor checks, RCA cord testing, grip sterilisation, and parts replacement. It monitors operating hours between checkups, alerts staff when service intervals elapse, aggregates repair costs across machines and calendar years, and generates offline calendar files for scheduled servicing.

## Who it is for

- **Studio owners and managers** tracking machinery, maintenance intervals across workstations, and annual repair expenditures.
- **Tattoo artists and piercers** maintaining personal equipment, logging voltage calibrations, and tracking motor wear.
- **Hygiene supervisors and safety officers** maintaining documentation and linking physical receipt binders to digital equipment records.
- **Equipment technicians and machine builders** servicing studio hardware and documenting running hours for clients.

## How to use it

### Checking maintenance due alerts and calendar exports

1. Review the `Maintenance Due & Overdue` banner. Overdue equipment displays `Overdue by {days} days` or `Overdue by {hours} running hours`.
2. Deadlines within fourteen days display `Due in {days} days`.
3. Click `Export .ics` beside any due machine to download calendar reminders.
4. When on schedule, the banner displays `All active machines are up to date.`.

### Registering a machine in the inventory

1. Open the `Machines` tab.
2. Enter the identifier in `Machine Name / ID`. This field is mandatory.
3. Enter hardware details in `Serial Number`, `Model`, and `Supplier / Distributor`.
4. Record dates in `Purchase Date` and `Warranty End Date`.
5. Add location details in `Station / Room` and assign an artist in `Assigned Artist`.
6. Define service targets in `Service Interval (Days)` or `Service Interval (Hours)`.
7. Click `Save Machine` to add the equipment to the inventory table.

### Managing machine status and retirement

1. Locate equipment in the `Registered Machines` table displaying `Active`.
2. When storing or retiring equipment, click `Retire` under `Actions`.
3. Confirm the action. The status becomes `Retired`, retaining history while silencing alerts.
4. Click `Reactivate` to return the machine to active service.

### Logging a maintenance event

1. Open the `Service Log` tab.
2. Choose equipment under `Select Machine`.
3. Select the calendar date in `Service Date`.
4. Enter meter readings in `Current Running Hours`.
5. Select a task under `Maintenance Type`: `Voltage calibration`, `Clean & sanitise`, `Needle cartridge change`, `Full service (bearing/motor)`, `Cord / RCA check`, `Grip sterilisation`, `Parts replacement`, or `Other`.
6. Enter diagnostics in `Running Voltage (V)`, `Parts Replaced`, `Cost`, and `Filing Reference (Paper Report / Receipt Binder)`.
7. Add remarks in `Service Notes` and click `Add to Log`.

### Filtering and reviewing maintenance history

1. Filter records using `All Stations / Rooms`, `All Artists`, `All Machines`, `All Types`, or `Status: All`, `Status: Active only`, and `Status: Retired only`.
2. The `Hours (Delta)` column calculates time between checks using `{current} hrs - {prev} hrs = {delta} hrs since last {type}`.
3. To delete an entry, click `Delete` (`×`) and confirm.

### Analyzing parts replaced and maintenance costs

1. Open the `Parts & Costs` tab.
2. In `Total Costs by Machine`, review replaced parts under `Parts Replaced`, calculations under `Cost Calculation`, and totals under `Total Cost`.
3. In `Total Costs by Year`, review annual service counts and expenditures.

### Creating and restoring backups

1. Open the `Backup & Restore` tab.
2. Click `Export JSON Backup` to download an offline database archive.
3. Click `Restore JSON Backup` to import a previously saved archive.
4. Click `Clear All Data` to erase local records.

## What it does not do

- It does not calculate capital equipment payback periods or hourly break-even rates; those financial analyses belong to the [Equipment ROI Calculator](https://poliinternational.com/equipment-roi-calculator/).
- It does not benchmark studio booth rental fees, hourly pricing rates, or artist commission splits; studio pricing evaluations belong to the [Studio Pricing Benchmark](https://poliinternational.com/studio-pricing-benchmark/).
- It does not record autoclave steam sterilisation cycles, spore tests, or chemical indicator strips; autoclave logging belongs to the [Autoclave & Sterilization Calculator](https://poliinternational.com/autoclave-calculator/).
- It does not track sterile piercing jewelry batch numbers, mill test reports, or alloy standards; mill certificates and alloy standards are checked in the [Biocompatibility Material Checker](https://poliinternational.com/material-certification-checker/).

## Where your data lives

Your machine inventory and maintenance records reside exclusively in your web browser on your local device. The application stores data in browser `localStorage` and never transmits machine details, serial numbers, financial figures, or artist names to Poli International or any remote server.

Because records are stored locally, clearing your browser site data, emptying website caches, or using temporary private browsing windows will erase your records. Download regular backups via `Export JSON Backup` before performing system cleanups.

A complete JSON export file contains your application schema version, export timestamp, registered machine profiles, and maintenance records. A CSV export contains filtered tabular data formatted for spreadsheet software.

## Printing and exporting

- **CSV Spreadsheets**: On `Service Log`, click `Export CSV` to download tabular files containing dates, machine names, stations, artists, types, running hours, voltages, parts, costs, filing references, and notes.
- **Calendar Reminders**: In `Maintenance Due & Overdue` or `Machines`, click `Export .ics` to download calendar files for Google Calendar, Apple Calendar, or Microsoft Outlook.
- **JSON Archives**: On `Backup & Restore`, click `Export JSON Backup` to produce complete database archives for studio migration or backups.
- **Physical Hard Copies**: Use your browser print function (Ctrl+P or Cmd+P) to print clean paper tables suitable for physical inspection folders.

## Questions and answers

### How do I know when a tattoo machine is due for maintenance?
The application evaluates active machines against configured service intervals. When days elapsed or running hours exceed configured thresholds, the top banner flags the machine as overdue. If a scheduled service falls within fourteen days, the banner alerts you that maintenance is due soon.

### Can I track maintenance intervals by running hours instead of calendar days?
Yes, machine profiles support service intervals measured in running hours, calendar days, or both. When you record operating hours during maintenance, the software tracks usage and triggers alerts when the hourly target is reached.

### What happens to maintenance records when a machine is retired?
Retiring equipment preserves all historical maintenance logs, expense calculations, and calibrations. The retired machine is removed from active maintenance alerts, but remains accessible using status filters.

### Where is my machine maintenance data stored?
All information is saved locally in your browser storage on your current device. No machine profiles, serial numbers, costs, or artist names are ever sent over the network or stored on Poli International servers.

### How do I transfer machine logs to another computer or tablet?
Open `Backup & Restore` on your current computer and click `Export JSON Backup` to save your database file. Move this file to your new device, open the tool there, click `Restore JSON Backup`, and select the file.

### What is the filing reference field used for?
The filing reference field connects digital entries to physical paper binders, receipt folders, or invoice files in the studio. Recording invoice numbers or binder coordinates allows studio staff to produce paper receipts or inspection records during inspections.

### Can I export upcoming machine service dates to my Google or Apple calendar?
Yes, clicking `Export .ics` beside any due machine downloads a standardized iCalendar event file. You can import this file into Google Calendar, Apple Calendar, or Outlook to establish local service reminders.

### How does the logbook calculate delta running hours between services?
When you log running hours, the system finds the previous entry for that specific machine and service type. It subtracts the earlier reading from the current reading and displays the operating hours completed between those checkups.

## Limits

The Machine Maintenance Logbook provides an administrative record of studio service history, but cannot evaluate the physical condition of hardware. The software cannot detect internal motor fatigue, bearing play, electrical short circuits, spring tension decay, or autoclave sterilisation efficacy.

Tattoo artists, piercers, and studio owners remain solely responsible for physically examining machinery, testing electrical safety, verifying manufacturer specifications, and adhering to studio health standards. Digital records complement physical workshop diligence, but do not replace direct physical inspection by qualified equipment technicians.
