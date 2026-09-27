# Machine-onderhoudslogboek: gebruikershandleiding

Het Machine-onderhoudslogboek registreert machinetypes, draaiuren, kalibratiewaarden, onderhoudsintervallen, reparatiekosten en inspectiehistoriek voor tattoostudio's, piercers en onderhoudstechnici in de lichaamskunstsector.

## Waarvoor dit hulpmiddel dient

Het Machine-onderhoudslogboek biedt een gestructureerd inventarisoverzicht voor elke rotary machine, spoelmachine, pen machine of voedingseenheid in uw studio. Het legt de herkomst van het apparaat vast, evenals fabrieksnummers, leveranciersgegevens, garantietermijnen, behandelplekken en toegewezen artiesten.

De toepassing ondersteunt het dagelijkse beheer: kalibratie van de werkspanning, ultrasoonreiniging, vervanging van naaldmodule-aandrijvingen, revisie van motoren en lagers, controle van RCA-kabels, sterilisatie van grips en het wisselen van slijtageonderdelen. Het systeem berekent het verschil in draaiuren tussen opeenvolgende ingrepen, waarschuwt het studioteam zodra onderhoudstermijnen verstrijken, telt reparatiekosten op per machine en per kalenderjaar, en maakt iCalendar-bestanden aan voor een offline planning van werkplaatscontroles.

## Voor wie dit hulpmiddel bedoeld is

- **Studio-eigenaren en bedrijfsleiders** die gezamenlijke apparatuur beheren, onderhoudsschema's over meerdere behandelruimtes bewaken en jaarlijkse reparatiekosten onder controle houden.
- **Vaste artiesten, gasttatoeëerders en piercers** die hun persoonlijke uitrusting onderhouden, favoriete voltinstellingen documenteren en motorslijtage monitoren.
- **Hygiënecoördinatoren en kwaliteitsmedewerkers** die keuringsrapporten bijhouden en fysieke factuurmappen koppelen aan digitale registraties.
- **Reparatietechnici en machinebouwers** die werkplaatsrevisies uitvoeren, lagers vervangen en draaiuren registreren voor studioklanten.

## Gebruiksaanwijzing

### Onderhoudswaarschuwingen controleren en agenda exporteren

1. Raadpleeg de meldingsbalk `Vervallen en aankomend onderhoud` bovenaan het scherm. Machines die de ingestelde grenswaarden overschrijden, worden gemarkeerd met `{days} dagen te laat` of `{hours} draaiuren overschreden`.
2. Wanneer een machine binnen veertien dagen aan de beurt is voor onderhoud, toont de balk `Over {days} dagen gepland`.
3. Klik op `Exporteer als .ics` naast het betreffende apparaat om een agendabestand te downloaden met de machinenaam, het serienummer, de werkplek en de artiest.
4. Zodra alle actieve apparaten binnen de planning vallen, toont de balk `Alle actieve machines zijn up-to-date.`.

### Een nieuwe machine toevoegen aan de inventaris

1. Open het tabblad `Machinebeheer` in de menubalk.
2. Vul bij de invoervelden de herkenbare naam of code in bij `Machinenaam / ID`. Dit veld is verplicht.
3. Vul de technische kenmerken in bij `Serienummer`, `Typenummer / model` en `Leverancier / verdeler`.
4. Voer de relevante data in bij `Aankoopdatum` en `Garantie tot`.
5. Bepaal de locatie in de studio via `Werkplek / behandelruimte` en wijs de hoofdgebruiker toe via `Toegewezen artiest`.
6. Stel de waarschuwingslimiet in bij `Onderhoudsinterval (dagen)` of `Onderhoudsinterval (draaiuren)`.
7. Klik op `Machine opslaan` om het apparaat toe te voegen aan het overzicht.

### Status beheren en machines buiten gebruik stellen

1. Zoek het apparaat op in het tabblad `Machinebeheer` binnen de tabel `Geregistreerde machines`. Machines in gebruik dragen het groene label `In gebruik`.
2. Als een machine wordt verkocht, afgeschreven of als reserve wordt bewaard, klikt u onder `Handelingen` op `Buiten gebruik stellen`.
3. Bevestig de handeling in het dialoogvenster. Het apparaat krijgt de status `Buiten gebruik gesteld`. De volledige servicehistoriek blijft bewaard voor naslag, maar de machine verschijnt niet langer in de meldingen voor dringend onderhoud.
4. Om een gearchiveerde machine opnieuw in te zetten in de dagelijkse routine, klikt u op `Heractiveren`.

### Een onderhoudsbeurt registreren

1. Ga naar het tabblad `Onderhoudslog` in de navigatiebalk.
2. Kies het apparaat in het dropdownmenu `Machine kiezen`.
3. Geef de uitvoeringsdatum op bij `Datum van onderhoud`.
4. Vul de actuele stand in bij `Huidige draaiurenstand` indien uw voedingseenheid of timer de bedrijfstijd registreert.
5. Selecteer de uitgevoerde werkzaamheid onder `Type werkzaamheid`: `Spanningskalibratie`, `Reiniging & desinfectie`, `Vervanging naaldmodule-aandrijving`, `Grote revisie (motor/lagers)`, `Inspectie snoer / RCA-aansluiting`, `Sterilisatie van grip`, `Onderdelenwissel` of `Overige werkzaamheden`.
6. Vul de aanvullende details in: gemeten spanning bij `Werkspanning (V)`, geplaatste onderdelen bij `Vervangen componenten`, gemaakte kosten bij `Kostenbedrag` en de documentcode bij `Dossierkenmerk (papieren bon / map)`.
7. Noteer praktische opmerkingen in `Technische opmerkingen`.
8. Klik op `Toevoegen aan logboek` om de invoer op te slaan.

### Onderhoudshistoriek filteren en doorzoeken

1. Gebruik de filterbalk om de weergave te verfijnen: filter op ruimte via `Alle werkplekken / ruimtes`, op medewerker via `Alle artiesten`, op apparaat via `Alle machines`, op taak via `Alle werkzaamheden`, of op status via `Selectie: Alles`, `Selectie: Enkel in gebruik` en `Selectie: Enkel buiten gebruik`.
2. In de tabel toont de kolom `Draaiuren (Verschil)` de gewerkte tijd sinds de vorige registratie van hetzelfde type via de formule `{current} hrs - {prev} hrs = {delta} hrs since last {type}`.
3. Om een foutieve invoer te wissen, klikt u op de knop `Verwijderen` (`×`) in de desbetreffende tabelrij en bevestigt u de verwijdering.

### Vervangen onderdelen en onderhoudskosten analyseren

1. Ga naar het tabblad `Onderdelen & kosten` in de navigatiebalk.
2. Bekijk in het vak `Totale uitgaven per machine` de lijst met onderdelen onder `Vervangen componenten`, de berekening onder `Kostenopbouw` en het totaal onder `Totaalbedrag`.
3. Controleer in het vak `Totale uitgaven per kalenderjaar` het aantal ingrepen en de totale jaarlijkse studio-uitgaven.

### Back-ups maken en terugzetten

1. Open het tabblad `Back-up & herstel` in de navigatiebalk.
2. Klik op `JSON-bestand exporteren` om een lokaal reservebestand te downloaden met alle machines, onderhoudsbeurten en service-intervallen.
3. Om gegevens over te zetten naar een andere computer of te herstellen na het wissen van de browsercache, klikt u op `JSON-bestand herstellen`, selecteert u het bestand en bevestigt u de import.
4. Om alle lokaal bewaarde gegevens definitief te verwijderen, klikt u op `Volledig geheugen wissen` en bevestigt u de melding.

## Wat dit hulpmiddel niet doet

- Het berekent geen afschrijvingen, terugverdientijden of rentabiliteitsgrenzen per werkuur; dergelijke financiële analyses worden uitgevoerd via de [Equipment ROI Calculator](https://poliinternational.com/equipment-roi-calculator/).
- Het vergelijkt geen stoelhuren, uurtarieven of commissieverdelingen tussen artiesten; tariefvergelijkingen voor de studio verlopen via de applicatie [Studio Pricing Benchmark](https://poliinternational.com/studio-pricing-benchmark/).
- Het registreert geen stoomautoclaafcycli, biologische sporentests of chemische integratoren; de registratie van sterilisatieprocessen gebeurt in het [Autoclave & Sterilization Calculator](https://poliinternational.com/autoclave-calculator/).
- Het beheert geen partijnummers voor steriele piercingsieraden, materiaalrapporten of metallurgische analyses; materiaalcertificaten en legeringsnormen controleert u met de [Biocompatibility Material Checker](https://poliinternational.com/material-certification-checker/).

## Waar uw gegevens worden bewaard

Uw machine-inventaris en het volledige onderhoudsarchief blijven uitsluitend opgeslagen in het lokale geheugen van de webbrowser op uw eigen apparaat. De toepassing maakt gebruik van de `localStorage` van de browser en verstuurt geen machinegegevens, serienummers, kosten of namen van artiesten naar Poli International of externe servers.

Omdat alle informatie uitsluitend lokaal staat opgeslagen, leidt het legen van uw browsercache, het opschonen van websitegegevens of het werken in een incognitotabblad tot gegevensverlies. Maak daarom regelmatig een reservekopie via `JSON-bestand exporteren` voordat u onderhoud aan uw computer of browser uitvoert.

Een complete JSON-back-up bevat de schemaversie, het exporttijdstip, alle machineprofielen en de chronologische onderhoudsrapporten. Een CSV-export levert een overzichtelijke tabel op die geschikt is voor spreadsheetprogramma's.

## Afdrukken en exporteren

- **CSV-overzichten**: klik in het tabblad `Onderhoudslog` op `Download CSV-bestand` om een spreadsheetbestand op te slaan met datums, machines, ruimtes, artiesten, categorieën, draaiuren, werkspanningen, onderdelen, kosten, dossierkenmerken en notities.
- **Herinneringen in agenda**: klik in het waarschuwingsvak `Vervallen en aankomend onderhoud` of in de tabel `Machinebeheer` op `Exporteer als .ics` om bestanden te downloaden voor Google Agenda, Apple Agenda of Microsoft Outlook.
- **Volledige JSON-archieven**: klik in het tabblad `Back-up & herstel` op `JSON-bestand exporteren` om een compleet reservebestand te genereren voor migratie of archivering.
- **Papieren afdrukken**: gebruik de printfunctie van uw browser (Ctrl+P of Cmd+P) op elk scherm. De speciaal ingerichte printopmaak verbergt knoppen, menubalken en achtergrondkleuren automatisch, wat resulteert in heldere tabellen voor uw fysieke inspectiemap.

## Veelgestelde vragen

### Hoe weet ik wanneer een tattoomachine onderhoud nodig heeft?
Het programma toetst de actieve machines voortdurend aan de ingestelde intervallen. Zodra de termijn in kalenderdagen is verstreken of de vastgelegde draaiuren zijn overschreden sinds de vorige beurt, markeert het waarschuwingsvak de machine als te laat. Ligt een geplande beurt binnen de komende veertien dagen, dan meldt het systeem dat er binnenkort onderhoud nodig is.

### Kan ik onderhoudsintervallen bepalen op basis van draaiuren in plaats van kalenderdagen?
Ja, voor elk apparaat kunt u een interval bepalen in draaiuren, in kalenderdagen, of met beide voorwaarden tegelijk. Wanneer u tijdens onderhoud de stand van uw voeding noteert, telt het systeem de uren op en ontvangt u een waarschuwing zodra het streefgetal is bereikt.

### Wat gebeurt er met onderhoudsgegevens wanneer een machine buiten gebruik wordt gesteld?
Bij het buiten gebruik stellen blijven alle historische onderhoudsrapporten, materiaalkosten en spanningswaarden bewaard. Het apparaat verdwijnt enkel uit de actuele meldingsbalk en agendameldingen, maar blijft altijd raadpleegbaar via de filters.

### Waar worden mijn machinegegevens opgeslagen?
Alle gegevens worden uitsluitend bewaard in het browsergeheugen van de computer, tablet of smartphone die u gebruikt. Er worden geen apparaatprofielen, serienummers, reparatiebedragen of personeelsnamen via internet verzonden of op servers van Poli International opgeslagen.

### Hoe verplaats ik het onderhoudslogboek naar een andere computer of tablet?
Open het tabblad `Back-up & herstel` op uw huidige apparaat en klik op `JSON-bestand exporteren` om de database op te slaan. Zet dit bestand over naar uw nieuwe toestel, open daar het logboek, klik op `JSON-bestand herstellen` en selecteer het bestand om alle gegevens direct in te laden.

### Waarvoor dient het veld dossierkenmerk?
Het dossierkenmerk vormt de schakel tussen de digitale registratie en fysieke studiobonnen, facturenmappen of garantiedocumenten in de studio. Door een factuurnummer of tabbladcode te noteren, kan het personeel bij een hygiëne-inspectie direct de bijbehorende papieren aankoopbon of het inspectierapport tonen.

### Kan ik geplande onderhoudsbeurten overnemen in Google Agenda of Apple Agenda?
Ja, door te klikken op `Exporteer als .ics` naast een machine die onderhoud nodig heeft, downloadt u een universeel agendabestand. U kunt dit bestand openen in Google Agenda, Apple Agenda of Microsoft Outlook om lokale herinneringen in te stellen.

### Hoe berekent het logboek het verschil in draaiuren tussen twee beurten?
Zodra u een tellerstand invoert bij een onderhoudsbeurt, zoekt het systeem naar de meest recente invoer voor diezelfde machine en dezelfde werkzaamheid. Het trekt de oude stand af van de huidige stand en toont exact hoeveel draaiuren de machine tussen beide beurten heeft gewerkt.

## Beperkingen van het hulpmiddel

Het Machine-onderhoudslogboek biedt administratieve en rekenkundige ondersteuning voor de werkplaats van uw studio, maar kan de feitelijke mechanische staat van uw apparatuur niet testen. Het programma herkent geen interne slijtage van motoren, speling op lagers, elektrische storingen, afnemende veerspanning of de doeltreffendheid van sterilisatieprocessen.

Tatoeëerders, piercers en studio-eigenaren blijven altijd zelf verantwoordelijk voor de fysieke controle van hun machines, de elektrische veiligheid, het naleven van fabrikantvoorschriften en de toepassing van geldende hygiënenormen. Digitale registraties ondersteunen de professionele werkplaatspraktijk, maar vervangen nooit een directe technische inspectie door een bevoegde onderhoudstechnicus.
