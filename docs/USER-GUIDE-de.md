# Maschinen-Wartungsbuch: Bedienungsanleitung

Das Maschinen-Wartungsbuch erfasst Gerätekennungen, Betriebsstunden, Kalibrierungswerte, Wartungsintervalle, Reparaturkosten und Inspektionsverläufe für Tattoostudios, Piercer und Gerätetechniker im Bereich der Körperkunst.

## Wofür das Werkzeug bestimmt ist

Das Maschinen-Wartungsbuch stellt ein strukturiertes Bestandsverzeichnis für jede Rotary-Maschine, Spulenmaschine, Pen-Maschine oder Stromversorgungseinheit Ihres Studios bereit. Es dokumentiert Herstellerangaben, Werksnummern, Fachhändlerkontakte, Garantiefristen, Arbeitsplätze und zugewiesene Tätowierer.

Die Anwendung begleitet die laufende Instandhaltung: Überprüfung der Arbeitsspannung, Ultraschallreinigung, Wechsel von Nadelmodulantrieben, Wartung von Motoren und Kugellagern, Cinch-Kabelprüfungen, Griffstücksterilisation und Austausch von Verschleißteilen. Sie ermittelt die Zunahme der Betriebsstunden zwischen aufeinanderfolgenden Eingriffen, erinnert das Studiopersonal bei Fälligkeit geplanter Zyklen, fasst Reparaturausgaben nach Gerät und Kalenderjahr zusammen und erstellt iCalendar-Dateien zur lokalen Terminverwaltung ohne Cloud-Zwang.

## Für wen das Werkzeug gedacht ist

- **Studioinhaber und Betriebsleiter**, die den gemeinschaftlichen Gerätebestand koordinieren, die Prüfzyklen an allen Arbeitsplätzen überwachen und Reparaturkosten im Blick behalten.
- **Resident- oder Gasttätowierer sowie Piercer**, die ihre persönliche Ausrüstung pflegen, bevorzugte Volteinstellungen festhalten und den mechanischen Verschleiß dokumentieren.
- **Hygienebeauftragte und Sicherheitsverantwortliche**, die Prüfunterlagen führen und Papierbelege im Ordner mit den digitalen Einträgen verknüpfen.
- **Gerätetechniker und Maschinenbauer**, die Werkstattüberholungen vornehmen, Lager austauschen und die geleisteten Betriebsstunden für Studios nachweisen.

## Wie das Werkzeug bedient wird

### Fällige Wartungen prüfen und Kalender exportieren

1. Beachten Sie den Hinweiskasten `Fällige und überfällige Wartungen` am oberen Rand der Ansicht. Überschreiten aktive Geräte die hinterlegten Schwellenwerte, warnt das System mit `Überfällig um {days} Tage` oder `Überfällig um {hours} Betriebsstunden`.
2. Steht eine Überprüfung innerhalb der kommenden vierzehn Tage an, erscheint der Vermerk `Fällig in {days} Tagen`.
3. Betätigen Sie die Schaltfläche `Als .ics exportieren` neben dem betroffenen Gerät, um eine Termindatei mit Gerätename, Seriennummer, Arbeitsplatz und Tätowierer herunterzuladen.
4. Befinden sich alle im Einsatz befindlichen Geräte im Soll, meldet der Kasten `Alle aktiven Maschinen sind auf aktuellem Stand.`.

### Neue Maschine im Bestand registrieren

1. Wechseln Sie in der Menüleiste auf den Reiter `Maschinenpark`.
2. Geben Sie im Erfassungsbereich den Namen oder das Studiokürzel unter `Maschinenname / Kennung` ein. Diese Eingabe ist verpflichtend.
3. Ergänzen Sie technische Gerätedaten in `Seriennummer`, `Modell` und `Lieferant / Fachhändler`.
4. Tragen Sie wichtige Kalenderdaten unter `Kaufdatum` und `Garantieablaufdatum` ein.
5. Hinterlegen Sie den Studiobereich unter `Arbeitsplatz / Raum` und bestimmen Sie den Hauptnutzer in `Zugewiesener Tätowierer`.
6. Legen Sie Prüffristen unter `Wartungsintervall (Tage)` oder `Wartungsintervall (Betriebsstunden)` fest.
7. Betätigen Sie `Maschine speichern`, um das Gerät in die Bestandsübersicht aufzunehmen.

### Betriebszustand und Ausmusterung verwalten

1. Suchen Sie das betreffende Gerät im Reiter `Maschinenpark` innerhalb der Tabelle `Registrierter Maschinenpark`. Einsatzbereite Geräte tragen die grüne Kennzeichnung `Aktiv`.
2. Wird eine Maschine verkauft, stillgelegt oder als Notfallreserve eingelagert, klicken Sie unter `Aktionen` auf `Ausmustern`.
3. Bestätigen Sie den Vorgang im Abfragefenster. Das Gerät erhält den Status `Ausgemustert`. Alle bisherigen Protokolle bleiben vollständig erhalten, das Gerät wird jedoch nicht mehr in den aktuellen Fälligkeitsanzeigen berücksichtigt.
4. Um ein eingelagertes Gerät wieder in den Arbeitszyklus aufzunehmen, klicken Sie auf `Reaktivieren`.

### Wartungsvorgang protokollieren

1. Öffnen Sie den Reiter `Wartungsprotokoll` in der Navigationsleiste.
2. Wählen Sie das Gerät aus dem Aufklappmenü `Maschine wählen`.
3. Bestimmen Sie den Arbeitstag unter `Wartungsdatum`.
4. Erfassen Sie den aktuellen Zählerstand unter `Aktuelle Betriebsstunden`, sofern Ihr Netzteil oder Studio-Timer die Betriebszeit misst.
5. Wählen Sie die passende Kategorie unter `Wartungsart`: `Spannungskalibrierung`, `Reinigung & Desinfektion`, `Nadelmodulaufnahme-Wechsel`, `Vollständige Wartung (Lager/Motor)`, `Kabel- / Cinch-Prüfung`, `Griffstücksterilisation`, `Teileaustausch` oder `Sonstiges`.
6. Ergänzen Sie werkstattrelevante Daten: Arbeitsspannung unter `Betriebsspannung (V)`, erneuerte Komponenten unter `Ersetzte Bauteile`, getätigte Ausgaben unter `Kostenbetrag` sowie Aktenvermerke unter `Ablagereferenz (Prüfbericht / Rechnungsordner)`.
7. Fügen Sie technische Anmerkungen im Feld `Wartungsnotizen` hinzu.
8. Klicken Sie auf `Eintrag hinzufügen`, um den Eintrag zu speichern.

### Wartungsverlauf filtern und auswerten

1. Nutzen Sie die Filterleiste oberhalb der Tabelle: Filtern Sie nach Räumen mit `Alle Arbeitsplätze / Räume`, nach Mitarbeitern mit `Alle Tätowierer`, nach Geräten mit `Alle Maschinen`, nach Art des Eingriffs mit `Alle Wartungsarten` oder nach Status mit `Zustand: Gesamtauswahl`, `Status: Nur aktive` und `Status: Nur ausgemusterte`.
2. In der Protokolltabelle ermittelt die Spalte `Betriebsstunden (Delta)` die geleistete Laufzeit seit der letzten Wartung derselben Kategorie nach der Formel `{current} hrs - {prev} hrs = {delta} hrs since last {type}`.
3. Um einen fehlerhaften Eintrag zu entfernen, klicken Sie auf das Symbol `Löschen` (`×`) in der entsprechenden Zeile und bestätigen Sie die Löschung.

### Ersetzte Bauteile und Ausgaben analysieren

1. Öffnen Sie den Reiter `Teile & Kosten` in der oberen Leiste.
2. Prüfen Sie im Kasten `Gesamtkosten nach Maschine` die Auflistung unter `Ersetzte Bauteile`, die rechnerische Aufschlüsselung unter `Kostenberechnung` und den Gesamtbetrag unter `Gesamtsumme`.
3. Prüfen Sie im Kasten `Gesamtkosten nach Kalenderjahr` die jährliche Anzahl der Einsätze und die gesamten Jahressummen.

### Sicherungskopien erstellen und einspielen

1. Wechseln Sie zum Reiter `Sicherung & Wiederherstellung`.
2. Klicken Sie auf `JSON-Sicherung exportieren`, um eine eigenständige Sicherungsdatei mit sämtlichen Geräten, Wartungseinträgen und Intervallen auf Ihrem Gerät zu speichern.
3. Um Datensätze auf einen neuen Arbeitsplatz zu übertragen oder nach einer Browserbereinigung wiederherzustellen, klicken Sie auf `JSON-Sicherung einspielen`, wählen Sie Ihre Datei aus und bestätigen Sie.
4. Um sämtliche gespeicherten Studioeinträge im Browser unwiderruflich zu löschen, klicken Sie auf `Alle Daten zurücksetzen` und bestätigen Sie den Dialog.

## Was das Werkzeug nicht leistet

- Es berechnet keine Maschinenabschreibungen, Amortisationszeiträume oder stundenbasierten Gewinnschwellen; solche betriebswirtschaftlichen Kalkulationen führt der [Equipment ROI Calculator](https://poliinternational.com/equipment-roi-calculator/) durch.
- Es vergleicht weder Kabinenmieten noch Stundensätze oder Provisionsmodelle zwischen Tätowierern; Auswertungen zur Studiopreisgestaltung erfolgen im [Studio Pricing Benchmark](https://poliinternational.com/studio-pricing-benchmark/).
- Es protokolliert keine Sterilisationszyklen von Dampfautoklaven, Bio-Indikatoren mit Sporen oder chemische Prüfstreifen; die Aufzeichnung von Sterilisationschargen übernimmt das [Autoclave & Sterilization Calculator](https://poliinternational.com/autoclave-calculator/).
- Es verwaltet keine Chargenzeugnisse für sterilen Piercingschmuck, Werksprüfzeugnisse oder metallurgische Legierungsprüfberichte; Werksprüfzeugnisse und Legierungsnormen prüfen Sie mit dem [Biocompatibility Material Checker](https://poliinternational.com/material-certification-checker/).

## Wo Ihre Daten gespeichert werden

Ihr Maschinenbestand und sämtliche Wartungsprotokolle verbleiben ausschließlich im lokalen Speicher Ihres Webbrowsers auf dem jeweils genutzten Endgerät. Die Web-App nutzt die Browserschnittstelle `localStorage` und übermittelt weder Geräteangaben noch Seriennummern, Reparaturkosten oder Künstlernamen an Poli International oder an externe Server.

Da alle Daten nur lokal vorgehalten werden, führt das Löschen von Webseiten-Daten, das Leeren des Caches oder das Arbeiten im privaten Browserfenster zum Verlust der Datensätze. Erstellen Sie daher vor Wartungsarbeiten am Computer regelmäßig eine Sicherungsdatei über `JSON-Sicherung exportieren`.

Eine vollständige JSON-Sicherung enthält die interne Schemaversion, den Zeitstempel des Exports, sämtliche Gerätestammdaten sowie die chronologischen Wartungsberichte. Ein CSV-Export stellt die Einträge in Tabellenform für Tabellenkalkulationsprogramme bereit.

## Drucken und Exportieren

- **CSV-Tabellendateien**: Klicken Sie im Reiter `Wartungsprotokoll` auf `Als CSV exportieren`, um eine Übersicht mit Datumsangaben, Maschinen, Räumen, Tätowierern, Wartungsarten, Betriebsstunden, Voltwerten, Bauteilen, Kosten, Aktenzeichen und Notizen herunterzuladen.
- **Kalendertermine**: Nutzen Sie im Kasten `Fällige und überfällige Wartungen` oder in der Tabelle `Maschinenpark` die Schaltfläche `Als .ics exportieren`, um Termine für Google Kalender, Apple Kalender oder Microsoft Outlook zu generieren.
- **Vollständige JSON-Archive**: Klicken Sie unter `Sicherung & Wiederherstellung` auf `JSON-Sicherung exportieren`, um ein vollständiges Datenabbild für Backups oder Gerätewechsel zu erzeugen.
- **Ausdrucke auf Papier**: Verwenden Sie die Druckfunktion Ihres Browsers (Strg+P oder Cmd+P) auf beliebigen Ansichten. Die integrierte Druckformatierung blendet Bedienelemente, Navigationsleisten und Farbflächen automatisch aus, sodass saubere Tabellenblätter für Ihre Studioordner entstehen.

## Häufig gestellte Fragen

### Woran erkenne ich, dass eine Tattoomaschine gewartet werden muss?
Die Anwendung gleicht den Zustand der aktiven Maschinen fortlaufend mit den konfigurierten Wartungsintervallen ab. Sobald das Intervall in Tagen abgelaufen ist oder die zulässigen Betriebsstunden seit der letzten Prüfung überschritten wurden, hebt das obere Hinweisfeld das Gerät als überfällig hervor. Liegt ein geplanter Termin innerhalb der nächsten vierzehn Tage, weist das System auf eine bald fällige Wartung hin.

### Können Wartungsintervalle nach Betriebsstunden statt nach Kalendertagen festgelegt werden?
Ja, für jedes Gerät kann wahlweise ein Grenzwert in Betriebsstunden, in Kalendertagen oder in einer Kombination aus beiden Kriterien festgelegt werden. Wenn Sie die abgelesenen Betriebsstunden Ihres Netzteils bei der Wartung erfassen, prüft das Programm die kumulierte Laufzeit und schlägt Alarm, sobald die Stundengrenze erreicht ist.

### Was passiert mit den Wartungseinträgen, wenn ein Gerät ausgemustert wird?
Bei einer Ausmusterung bleiben sämtliche historischen Reparaturberichte, Ausgaben und Voltkalibrierungen lückenlos erhalten. Die Maschine wird lediglich aus der aktuellen Fälligkeitsanzeige und den anstehenden Terminen entfernt, bleibt aber über die Statusfilter jederzeit auffindbar und auswertbar.

### Wo liegen die gespeicherten Maschinendaten?
Alle Informationen werden ausschließlich im Browser-Speicher des Computers, Tablets oder Smartphones abgelegt, auf dem Sie arbeiten. Es findet keine Übertragung von Gerätedaten, Seriennummern, Ausgaben oder Personennamen über das Internet statt, und es erfolgt keine Speicherung auf Servern von Poli International.

### Wie überträgt man das Wartungsbuch auf einen anderen Computer oder ein Tablet?
Rufen Sie auf dem bisherigen Computer den Reiter `Sicherung & Wiederherstellung` auf und klicken Sie auf `JSON-Sicherung exportieren`. Übertragen Sie die heruntergeladene Datei auf das neue Endgerät, öffnen Sie dort die Anwendung, wählen Sie `JSON-Sicherung einspielen` und bestätigen Sie die Auswahl.

### Wofür wird das Feld für die Ablagereferenz genutzt?
Die Ablagereferenz stellt die Verknüpfung zwischen dem digitalen Eintrag und physischen Studioordnern, Garantieunterlagen oder Rechnungsablagen her. Durch den Eintrag einer Rechnungsnummer oder Ordnerecke kann das Personal bei behördlichen Hygienebegehungen sofort den originalen Werkstattbericht oder Kaufbeleg vorlegen.

### Lassen sich anstehende Wartungstermine in den Google- oder Apple-Kalender übernehmen?
Ja, ein Klick auf `Als .ics exportieren` neben einer fälligen Maschine erzeugt eine standardisierte Kalenderdatei. Diese Datei lässt sich direkt in Google Kalender, Apple Kalender oder Microsoft Outlook importieren, um lokale Terminerinnerungen einzurichten.

### Wie ermittelt das Wartungsbuch die Differenz der Betriebsstunden zwischen Prüfungen?
Wird bei einem Eintrag ein Zählerstand angegeben, sucht das System nach dem unmittelbar vorhergehenden Eintrag für dasselbe Gerät und dieselbe Wartungskategorie. Es zieht den alten Wert vom neuen Zählerstand ab und gibt präzise an, wie viele Betriebsstunden die Maschine zwischen diesen beiden Überprüfungen im Einsatz war.

## Grenzen der Anwendung

Das Maschinen-Wartungsbuch dient der rechnerischen und organisatorischen Unterstützung im Studiobetrieb, kann jedoch den mechanischen Zustand oder die Gerätesicherheit nicht eigenständig bewerten. Das Programm erkennt weder Ermüdungserscheinungen an Motoren noch Lagerspiel, elektrische Isolationsfehler, nachlassende Federspannungen oder die biologische Wirksamkeit von Sterilisationsverfahren.

Tätowierer, Piercer und Studiobetreiber bleiben stets selbst für die sorgfältige Sichtprüfung ihrer Geräte, die elektrische Betriebssicherheit, die Einhaltung von Herstellerangaben und die Umsetzung der Hygienevorschriften verantwortlich. Digitale Protokolle unterstützen die werkstattübliche Sorgfalt, ersetzen jedoch nicht die direkte technische Überprüfung durch fachkundige Gerätetechniker.
