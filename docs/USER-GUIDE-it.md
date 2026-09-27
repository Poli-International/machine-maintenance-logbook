# Registro manutenzione macchinette: guida all'uso

Il Registro manutenzione macchinette tiene traccia dell'identità dei dispositivi, delle ore di lavoro, dei parametri di calibrazione, degli intervalli di revisione, dei costi di riparazione e della cronologia delle ispezioni per studi di tatuaggi, piercer e tecnici specializzati nel settore della body art.

## A cosa serve

Il Registro manutenzione macchinette fornisce un inventario strutturato per ogni macchinetta rotativa, a bobine, penna o alimentatore presente nello studio. Registra i dati di fabbricazione, i numeri di matricola originali, i recapiti dei rivenditori, le scadenze di garanzia, le postazioni operative e i tatuatori assegnati.

L'applicazione consente di gestire le attività periodiche: calibrazione della tensione di lavoro, lavaggio a ultrasuoni, sostituzione dei componenti di trazione per cartucce ad ago, revisione di motori e cuscinetti, collaudo dei cavi RCA, sterilizzazione delle impugnature e rimpiazzo di parti usurate. Calcola l'incremento delle ore operative tra interventi successivi, segnala allo staff dello studio il raggiungimento delle scadenze prefissate, aggrega le spese per singolo apparecchio e per anno solare, e genera promemoria in formato iCalendar per pianificare le manutenzioni senza dipendere da servizi cloud.

## A chi si rivolge

- **Titolari e gestori di studi di tatuaggi** che coordinano le attrezzature condivise, controllano i calendari di revisione delle postazioni e monitorano le spese complessive di officina.
- **Tatuatori resident o guest e piercer** che curano la propria strumentazione personale, annotano le tarature di voltaggio preferite e tengono conto dell'usura meccanica.
- **Responsabili igienico-sanitari e della sicurezza** che compilano i registri di verifica interna e collegano i raccoglitori di fatture cartacee alle schede digitali.
- **Tecnici riparatori e costruttori artigianali** che eseguono messe a punto al banco, sostituiscono cuscinetti e documentano le ore di lavoro per conto degli studi clienti.

## Come si usa

### Verifica degli avvisi di manutenzione ed esportazione del calendario

1. Controlla il pannello `Manutenzioni previste e scadute` posizionato nella parte superiore della schermata. I dispositivi che hanno superato i limiti impostati mostrano l'avviso `Scaduta da {days} giorni` o `Superamento di {hours} ore di lavoro`.
2. Se un apparecchio si trova entro quattordici giorni dalla data limite prevista, il riquadro indica `Prevista tra {days} giorni`.
3. Fai clic sul pulsante `Esporta file .ics` accanto al dispositivo per scaricare un file promemoria contenente nome, matricola, postazione e tatuatore assegnato.
4. Quando tutte le macchinette attive rispettano le scadenze impostate, il banner riporta `Tutti i macchinari attivi risultano aggiornati.`.

### Registrazione di un nuovo dispositivo nell'inventario

1. Apri la scheda `Parco macchinette` nella barra di navigazione principale.
2. Nella sezione di inserimento, digita la sigla identificativa o il nome in `Nome macchinetta / ID`. Questo campo è obbligatorio.
3. Inserisci i dettagli dell'hardware in `Numero di matricola`, `Modello` e `Fornitore / Distributore`.
4. Specifica le date salienti in `Data di acquisto` e `Scadenza garanzia`.
5. Assegna la collocazione fisica in `Postazione / Stanza` e indica il professionista in `Tatuatore assegnato`.
6. Imposta le soglie di controllo desiderate in `Intervallo di controllo (giorni)` o `Intervallo di controllo (ore)`.
7. Fai clic su `Salva macchinetta` per registrare il dispositivo nell'inventario.

### Gestione dello stato operativo e dismissione

1. Nella scheda `Parco macchinette`, individua l'apparecchio nella tabella `Macchinette registrate`. Le macchinette attive mostrano il contrassegno verde `In uso`.
2. Quando un dispositivo viene venduto, ritirato o destinato a scorta di riserva, fai clic su `Dismettere` nella colonna `Comandi`.
3. Conferma l'operazione nella finestra di dialogo. L'apparecchio riceverà lo stato `Dismessa`. Tutta la cronologia tecnica pregressa rimane intatta e consultabile, ma la macchinetta viene esclusa dalle notifiche di manutenzione imminente.
4. Per riattivare un dispositivo archiviato e reinserirlo nel ciclo di lavoro ordinario, fai clic su `Riattivare`.

### Registrazione di un intervento tecnico

1. Seleziona la scheda `Registro interventi` nella barra di navigazione.
2. Scegli l'apparecchio dal menu a tendina `Seleziona macchinetta`.
3. Indica il giorno dell'operazione in `Data intervento`.
4. Inserisci la lettura cumulativa in `Ore di lavoro correnti` qualora l'alimentatore o il timer dello studio registri il tempo effettivo di accensione.
5. Seleziona la voce idonea in `Tipo di manutenzione`: `Calibrazione della tensione`, `Pulizia e sanificazione`, `Sostituzione aggancio cartucce`, `Revisione totale (motore/cuscinetti)`, `Verifica cavo / innesto RCA`, `Sterilizzazione dell'impugnatura`, `Sostituzione ricambi` o `Altro intervento`.
6. Specifica i parametri opzionali: voltaggio operativo in `Tensione di funzionamento (V)`, parti usurate in `Componenti sostituiti`, spesa sostenuta in `Importo spesa` e collocazione della fattura in `Riferimento cartaceo (faldone / ricevuta)`.
7. Riporta osservazioni o indicazioni di laboratorio in `Note di officina`.
8. Fai clic su `Salva nel registro` per memorizzare l'intervento.

### Filtro e consultazione della cronologia

1. Usa la barra dei filtri per restringere i record per ambiente con `Tutte le postazioni / stanze`, per operatore con `Tutti i tatuatori`, per apparecchio con `Tutte le macchinette`, per categoria tecnica con `Tutte le tipologie`, oppure per condizione con `Stato: Qualsiasi`, `Stato: Solo in uso` e `Stato: Solo dismesse`.
2. Nella tabella degli interventi, la colonna `Ore (Differenza)` calcola il tempo operativo intercorso dall'ultimo intervento della stessa tipologia applicando la formula `{current} hrs - {prev} hrs = {delta} hrs since last {type}`.
3. Se desideri rimuovere una voce inserita per errore, premi il tasto `Elimina` (`×`) sulla riga corrispondente e conferma l'eliminazione.

### Analisi dei ricambi impiegati e delle spese di manutenzione

1. Apri la scheda `Ricambi e costi` nella barra dei menu.
2. Nel riquadro `Spese complessive per macchinetta`, consulta l'elenco dei materiali in `Componenti sostituiti`, il dettaglio aritmetico in `Calcolo della spesa` e l'importo complessivo in `Costo totale`.
3. Nel riquadro `Spese complessive per anno solare`, esamina il conteggio delle operazioni e il totale dei costi annui sostenuti dallo studio.

### Creazione e ripristino delle copie di sicurezza

1. Apri la scheda `Salvataggio e ripristino` nella barra di navigazione.
2. Fai clic su `Esporta backup JSON` per salvare sul tuo dispositivo un archivio completo contenente dispositivi, interventi e intervalli temporali.
3. Per importare i dati su una nuova postazione o dopo aver cancellato la cronologia del browser, premi `Ripristina da file JSON`, seleziona il file e conferma.
4. Per cancellare definitivamente ogni informazione salvata in locale, fai clic su `Azzera tutti i dati` e conferma la scelta.

## Cosa non fa questo strumento

- Non calcola i piani di ammortamento dei macchinari, i periodi di recupero dell'investimento né i margini di pareggio orario; tali valutazioni economiche sono demandate al calcolatore [Equipment ROI Calculator](https://poliinternational.com/equipment-roi-calculator/).
- Non effettua analisi comparative sui costi di affitto della postazione, sulle tariffe orarie o sulle percentuali di suddivisione dei compensi tra artisti; per questi calcoli consulta lo strumento [Studio Pricing Benchmark](https://poliinternational.com/studio-pricing-benchmark/).
- Non traccia i cicli di sterilizzazione dell'autoclave a vapore, i test con spore biologiche né le strisce indicatrici chimiche; il monitoraggio delle sterilizzatrici è affidato a [Autoclave & Sterilization Calculator](https://poliinternational.com/autoclave-calculator/).
- Non tiene il registro dei lotti di gioielleria sterile da piercing, delle rapporti di colata o della conformità metallurgica; i certificati di colata e gli standard delle leghe si verificano con il [Biocompatibility Material Checker](https://poliinternational.com/material-certification-checker/).

## Dove risiedono i tuoi dati

L'inventario dei macchinari e i verbali delle manutenzioni rimangono esclusivamente nella memoria locale del tuo browser, all'interno del dispositivo in uso. L'applicativo sfrutta lo spazio `localStorage` del browser e non trasmette numeri di serie, modelli, costi, note o nomi del personale a Poli International né ad alcun server esterno.

Poiché le informazioni sono salvate unicamente in locale, l'eliminazione dei dati del browser, la cancellazione della cache o l'uso di finestre di navigazione anonima comporterà la perdita definitiva dei record. Effettua con regolarità una copia di sicurezza tramite `Esporta backup JSON` prima di procedere alla pulizia periodica del computer.

Un archivio JSON completo include la versione dello schema di dati, l'orario di creazione, le schede anagrafiche dei macchinari e la cronologia dettagliata di tutte le riparazioni. L'esportazione in formato CSV fornisce una tabella strutturata apribile con qualsiasi software di foglio di calcolo.

## Stampa ed esportazione dati

- **Fogli di calcolo in formato CSV**: nella scheda `Registro interventi`, premi `Estrai tabella CSV` per ottenere un file tabellare con date, macchinette, stanze, tatuatori, tipologie di lavoro, ore cumulate, voltaggi, ricambi, costi, riferimenti cartacei e annotazioni.
- **Promemoria per calendario**: nel banner `Manutenzioni previste e scadute` o nell'elenco `Parco macchinette`, premi `Esporta file .ics` per generare appuntamenti importabili in Google Calendar, Apple Calendario o Microsoft Outlook.
- **Archivi digitali JSON**: nella scheda `Salvataggio e ripristino`, fai clic su `Esporta backup JSON` per produrre una copia integrale trasferibile su altri computer.
- **Rapporti cartacei stampati**: utilizza la funzione di stampa del browser (Ctrl+P o Cmd+P) in qualsiasi schermata. La formattazione dedicata per la stampa esclude pulsanti, barre di menu e sfondi grafici, producendo tabelle sobrie e pronte per essere inserite nei registri cartacei dello studio.

## Domande frequenti

### Come posso capire quando una macchinetta per tatuaggi deve essere revisionata?
L'applicazione valuta costantemente i macchinari attivi rispetto ai limiti prefissati. Se i giorni trascorsi o le ore di lavoro superano la soglia stabilita dall'ultimo intervento, il banner superiore evidenzia l'apparecchio come scaduto. Se un appuntamento cade nei successivi quattordici giorni, il sistema lo segnala come previsto a breve.

### È possibile calcolare la frequenza di manutenzione in base alle ore di lavoro anziché ai giorni solari?
Sì, ogni scheda macchinetta consente di indicare un intervallo in ore di funzionamento, in giorni di calendario, o con entrambi i vincoli contemporaneamente. Registrando le ore effettive indicate dal proprio alimentatore durante ogni controllo, il programma controlla il monte ore e avvisa non appena viene raggiunto il limite impostato.

### Cosa succede ai dati storici di una macchinetta quando viene dismessa?
La dismissione mantiene intatti tutti i dati storici, i costi dei ricambi e le calibrazioni di voltaggio registrate in precedenza. La macchinetta viene semplicemente rimossa dal banner degli avvisi urgenti e dai promemoria di scadenza, rimanendo comunque sempre reperibile attraverso i filtri di visualizzazione.

### Dove vengono custodite le informazioni sulle macchinette registrate?
Tutti i dati rimangono memorizzati unicamente all'interno della memoria del browser sul computer, tablet o smartphone in uso. Nessun dato identificativo, numero di serie, importo di spesa o nominativo viene inoltrato via internet o memorizzato sui server di Poli International.

### Come si trasferisce il registro degli interventi su un altro computer o tablet?
Accedi alla sezione `Salvataggio e ripristino` sul dispositivo attuale e premi `Esporta backup JSON` per salvare il database completo. Copia questo file sul nuovo dispositivo, apri l'applicazione, premi `Ripristina da file JSON` e seleziona il file scaricato per caricare tutte le macchinette e le annotazioni.

### A cosa serve il campo del riferimento cartaceo?
Il campo del riferimento cartaceo permette di associare ciascuna voce informatica a un riscontro materiale presente in studio, come un raccoglitore di fatture, un faldone di scontrini fiscali o un fascicolo tecnico del costruttore. Indicando il numero del documento o il codice del faldone, il personale può esibire subito la ricevuta d'acquisto o il collaudo originale in sede di controllo ispettivo.

### Posso sincronizzare le prossime revisioni con Google Calendar o Apple Calendario?
Sì, premendo `Esporta file .ics` accanto a un dispositivo in scadenza viene scaricato un file di evento compatibile con gli standard internazionali. Aprendo il file scaricato è possibile integrarlo all'istante in Google Calendar, Apple Calendario o Microsoft Outlook per ricevere notifiche locali.

### In che modo il registro calcola la differenza delle ore di funzionamento tra gli interventi?
Quando si inserisce una lettura oraria durante la registrazione di un lavoro, il sistema individua il controllo precedente registrato per quella precisa macchinetta e per quella medesima categoria. Sottrae quindi il valore antecedente da quello attuale e riporta esattamente quante ore di lavoro sono state svolte tra i due interventi tecnici.

## Limiti

Il Registro manutenzione macchinette fornisce un supporto di archiviazione gestionale e di calcolo matematico per lo studio, ma non può accertare lo stato meccanico reale o l'integrità strutturale dell'hardware. Il programma non rileva l'affaticamento dell'indotto del motore, il gioco meccanico dei cuscinetti, eventuali dispersioni elettriche, il decadimento elastico delle molle né l'efficacia dei cicli di sterilizzazione.

Tatuatori, piercer e titolari di studio restano gli unici responsabili dell'ispezione fisica degli strumenti, della verifica della sicurezza elettrica, del rispetto delle prescrizioni dei costruttori e dell'osservanza delle normative igienico-sanitarie vigenti. L'uso di un registro digitale integra la normale diligenza tecnica dello studio, ma non si sostituisce all'esame periodico effettuato da un riparatore o tecnico abilitato.
