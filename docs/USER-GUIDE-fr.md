# Registre de maintenance des machines : guide d'utilisation

Le Registre de maintenance des machines suit l'identité des appareils, les heures de fonctionnement, les valeurs d'étalonnage, les intervalles d'entretien, les coûts de réparation et l'historique des contrôles pour les studios de tatouage, les perceurs et les techniciens de maintenance en art corporel.

## À quoi sert cet outil

Le Registre de maintenance des machines fournit un inventaire structuré pour chaque machine rotative, machine à bobines, dermographe stylo ou alimentation de votre atelier. Il consigne la provenance du matériel, les numéros de série des fabricants, les coordonnées des fournisseurs, les dates d'échéance de garantie, les postes de travail et les tatoueurs attitrés.

L'application assure le suivi des entretiens opérationnels : étalonnage de la tension, nettoyage aux ultrasons, remplacement des mécanismes d'entraînement de cartouches d'aiguilles, révision des moteurs et des roulements, contrôle des câbles RCA, stérilisation des manchons et remplacement de pièces détachées. Elle comptabilise l'évolution des heures de fonctionnement entre deux interventions, alerte l'équipe lorsque les intervalles planifiés arrivent à terme, regroupe les dépenses par machine et par année civile, et génère des fichiers de calendrier hors ligne pour planifier les révisions en atelier.

## À qui s'adresse cet outil

- **Responsables et gérants de studios de tatouage** assurant la gestion du parc de machines partagé, la régularité des entretiens sur chaque poste et le contrôle des frais de réparation annuels.
- **Tatoueurs résidents ou invités et perceurs** gérant leur équipement personnel, consignant leurs réglages de tension sur mesure et suivant l'usure de leurs moteurs.
- **Référents hygiène et sécurité** tenant à jour les registres d'inspection et reliant les classeurs de factures papier aux fiches techniques numériques.
- **Techniciens réparateurs et concepteurs de machines** effectuant les révisions d'atelier, le remplacement de roulements et le relevé des heures de service pour leurs clients.

## Comment l'utiliser

### Vérifier les alertes d'entretien et exporter le calendrier

1. Consultez le bandeau `Entretiens requis et en retard` situé en haut de l'écran. Les appareils dont l'échéance est dépassée affichent l'avertissement `En retard de {days} jours` ou `Dépassement de {hours} heures d'usage`.
2. Lorsqu'un appareil approche de sa date cible dans un délai de quatorze jours, le bandeau affiche `Prévu dans {days} jours`.
3. Cliquez sur le bouton `Exporter en .ics` en regard de l'appareil concerné pour télécharger un fichier d'événement iCalendar contenant le nom de la machine, le numéro de série, le poste de travail et l'artiste assigné.
4. Lorsque tous les équipements fonctionnent dans leurs tolérances planifiées, le bandeau indique `Tous les appareils en service sont à jour.`.

### Enregistrer un appareil dans l'inventaire

1. Ouvrez l'onglet `Parc de machines` dans la barre de navigation.
2. Dans le bloc d'enregistrement, saisissez le nom ou la référence interne dans `Nom ou identifiant de l'appareil`. Ce champ est obligatoire.
3. Renseignez les spécifications matérielles dans `Numéro de série`, `Modèle` et `Fournisseur / Distributeur`.
4. Renseignez les dates repères dans `Date d'achat` et `Fin de garantie`.
5. Précisez l'emplacement dans l'atelier dans `Poste de travail / Salle` et le praticien référent dans `Tatoueur assigné`.
6. Fixez les seuils d'alerte dans `Intervalle d'entretien (jours)` ou `Intervalle d'entretien (heures)`.
7. Cliquez sur `Enregistrer l'appareil` pour inscrire le matériel dans le tableau d'inventaire.

### Gérer le statut et la mise hors service d'une machine

1. Dans l'onglet `Parc de machines`, repérez l'appareil dans le tableau `Machines enregistrées`. Les machines en activité portent le badge vert `En service`.
2. Si un équipement est vendu, déclassé ou placé en réserve, cliquez sur `Mettre hors service` dans la colonne `Opérations`.
3. Validez l'action dans la fenêtre de confirmation. La machine reçoit le statut `Retirée du service`. L'ensemble de son historique technique demeure consultable, mais elle est retirée des alertes de révision courantes.
4. Pour réintégrer un équipement dans le planning actif, cliquez sur `Remettre en service`.

### Enregistrer une intervention technique

1. Ouvrez l'onglet `Journal d'entretien` dans la barre de navigation.
2. Choisissez l'appareil dans la liste déroulante `Sélectionner l'appareil`.
3. Indiquez le jour des travaux dans `Date d'intervention`.
4. Renseignez le relevé horaire dans `Compteur d'heures actuel` si votre alimentation ou votre minuterie mesure le temps de fonctionnement.
5. Sélectionnez la catégorie appropriée sous `Type d'intervention` : `Étalonnage de la tension`, `Nettoyage et désinfection`, `Changement support cartouche`, `Révision complète (moteur/roulement)`, `Contrôle câble / fiche RCA`, `Stérilisation du manchon`, `Remplacement de composant` ou `Autre intervention`.
6. Complétez les données techniques : tension d'exercice dans `Tension mesurée (V)`, pièces ou joints installés dans `Pièces remplacées`, coût engagé dans `Dépense`, et référence de classement dans `Réf. de classement (dossier papier / facture)`.
7. Consignez vos remarques d'atelier dans `Observations techniques`.
8. Cliquez sur `Ajouter au journal` pour enregistrer l'entrée.

### Filtrer et consulter l'historique d'entretien

1. Utilisez la barre de filtres pour affiner l'affichage par poste avec `Tous les postes / salles`, par professionnel avec `Tous les artistes`, par équipement avec `Tous les appareils`, par catégorie de travail avec `Toutes les catégories`, ou par statut avec `Statut : Tous`, `État : En service seulement` et `État : Hors service seulement`.
2. Dans le tableau des interventions, la colonne `Heures (Différence)` calcule le temps de travail écoulé depuis la précédente opération de même nature selon la formule `{current} hrs - {prev} hrs = {delta} hrs since last {type}`.
3. Pour retirer une ligne erronée, cliquez sur le bouton `Supprimer` (`×`) de la ligne et confirmez votre choix.

### Analyser les pièces remplacées et les dépenses de maintenance

1. Ouvrez l'onglet `Pièces et coûts` dans la barre de navigation.
2. Dans le cadre `Dépenses cumulées par appareil`, étudiez le récapitulatif des pièces sous `Pièces remplacées`, le détail arithmétique sous `Détail du calcul` et le montant total sous `Montant total`.
3. Dans le cadre `Dépenses cumulées par année civile`, examinez le nombre d'interventions et les dépenses annuelles globales.

### Créer et restaurer des sauvegardes

1. Ouvrez l'onglet `Sauvegarde et restauration` dans la barre de navigation.
2. Cliquez sur `Exporter sauvegarde JSON` pour télécharger une archive autonome contenant la totalité des machines, des entretiens et des périodicités.
3. Pour récupérer vos dossiers sur un autre poste ou après une réinitialisation de navigateur, cliquez sur `Restaurer un fichier JSON`, désignez votre fichier de sauvegarde et confirmez.
4. Pour effacer définitivement le stockage local du navigateur, cliquez sur `Effacer toutes les données` et confirmez.

## Ce que l'outil ne fait pas

- Il ne calcule pas l'amortissement du capital, les délais de retour sur investissement ni les taux de rentabilité horaire des machines ; ces études financières sont traitées par le simulateur [Equipment ROI Calculator](https://poliinternational.com/equipment-roi-calculator/).
- Il ne compare pas les tarifs de location de cabine, les taux horaires moyens ni les répartitions de commissions entre artistes ; l'analyse économique du studio relève du [Studio Pricing Benchmark](https://poliinternational.com/studio-pricing-benchmark/).
- Il ne consigne pas les cycles de stérilisation en autoclave à vapeur, les tests biologiques d'inactivation de spores ni les intégrateurs chimiques ; la traçabilité des autoclaves est assurée par le [Autoclave & Sterilization Calculator](https://poliinternational.com/autoclave-calculator/).
- Il ne gère pas les numéros de lots de bijoux de piercing stériles, les rapports d'analyse métallurgique de coulée ni la conformité des alliages ; les certificats matière et les normes d’alliage se vérifient avec le [Biocompatibility Material Checker](https://poliinternational.com/material-certification-checker/).

## Où sont stockées vos données

L'inventaire de vos machines et l'historique complet des entretiens résident exclusivement dans la mémoire locale de votre navigateur Web, sur votre terminal personnel. L'application utilise l'interface `localStorage` du navigateur et ne transmet aucune fiche technique, aucun numéro de série, aucun montant financier ni aucun nom d'artiste à Poli International ou vers un quelconque serveur distant.

Ces données restant strictement confinées à votre équipement, la suppression des données de navigation, le vidage du cache ou l'utilisation d'une session de navigation privée temporaire effacera vos registres. Téléchargez régulièrement un fichier d'archive grâce au bouton `Exporter sauvegarde JSON` avant toute opération de nettoyage sur votre système.

Une archive JSON complète intègre la version du schéma applicatif, l'horodatage d'exportation, les fiches machines détaillées et l'ensemble des interventions techniques. Un export CSV fournit quant à lui une table prête à l'emploi pour les logiciels de tableur.

## Impression et exportations

- **Feuilles de calcul CSV** : dans l'onglet `Journal d'entretien`, cliquez sur `Télécharger en CSV` pour récupérer un fichier tabulaire reprenant dates, désignations, postes, artistes, types d'intervention, compteurs d'heures, tensions mesurées, pièces changées, dépenses, références de classement et notes techniques.
- **Rappels d'agenda** : dans le bandeau `Entretiens requis et en retard` ou la table `Parc de machines`, cliquez sur `Exporter en .ics` pour obtenir des fiches d'événements compatibles avec Google Calendar, Apple Calendrier ou Microsoft Outlook.
- **Archives complètes JSON** : dans l'onglet `Sauvegarde et restauration`, cliquez sur `Exporter sauvegarde JSON` pour générer une sauvegarde intégrale transférable vers un autre appareil.
- **Dossiers papier imprimés** : utilisez la commande d'impression de votre navigateur (Ctrl+P ou Cmd+P) pour imprimer n'importe quel écran. La feuille de style d'impression masque automatiquement la navigation, les commandes et les fonds de couleur pour produire des tableaux nets destinés aux classeurs de contrôle de l'atelier.

## Foire aux questions

### Comment savoir si une machine de tatouage nécessite un entretien ?
L'application confronte en permanence l'état de chaque machine en service à ses seuils d'entretien configurés. Dès que l'intervalle en jours calendaires ou en heures de fonctionnement est dépassé depuis la dernière intervention, le bandeau supérieur classe la machine parmi les équipements en retard. Lorsqu'une date cible intervient dans les quatorze jours suivants, le bandeau signale une révision imminente.

### Peut-on définir les intervalles d'entretien en heures d'utilisation plutôt qu'en jours ?
Oui, chaque profil de machine autorise la fixation d'un seuil exprimé en heures de service, en jours calendaires, ou en combinant simultanément les deux critères. Dès que vous enregistrez les heures relevées sur votre alimentation lors d'une révision, le logiciel surveille le cumul et déclenche un avertissement dès que le palier horaire est franchi.

### Que deviennent les enregistrements de maintenance lorsqu'une machine est retirée du service ?
La mise hors service d'une machine préserve l'intégralité de ses fiches techniques, ses dépenses engagées et ses réglages de tension dans le registre. L'appareil est simplement retiré du bandeau des révisions requises et des alertes de calendrier, tout en restant pleinement accessible à l'aide des filtres de recherche.

### Où sont conservées les données relatives à mes machines ?
Toutes les données sont conservées localement dans la mémoire de votre navigateur sur l'ordinateur, la tablette ou le smartphone que vous utilisez. Aucun profil d'appareil, numéro de série, montant de réparation ni nom d'artiste n'est transmis par le réseau ou enregistré sur les serveurs de Poli International.

### Comment transférer les registres d'entretien vers un autre ordinateur ou une tablette ?
Accédez à l'onglet `Sauvegarde et restauration` sur votre premier ordinateur et cliquez sur `Exporter sauvegarde JSON` pour enregistrer l'archive de votre registre. Transférez ce fichier sur votre nouveau terminal, ouvrez l'application, cliquez sur `Restaurer un fichier JSON` et sélectionnez le fichier pour charger instantanément vos données.

### À quoi sert le champ de référence de classement ?
Le champ de classement relie les enregistrements numériques aux documents physiques archivés dans l'atelier, comme les dossiers de factures, les classeurs de garantie ou les fiches d'intervention atelier. En saisissant un numéro de facture ou un repère de classeur, le personnel du studio peut présenter immédiatement les justificatifs originaux lors d'un contrôle sanitaire.

### Peut-on exporter les dates d'entretien prévues vers son agenda Google ou Apple ?
Oui, le bouton `Exporter en .ics` situé à côté de chaque appareil devant être révisé permet de télécharger un fichier d'agenda normalisé. Il vous suffit d'ouvrir ce fichier pour l'intégrer dans Google Calendar, Apple Calendrier ou Microsoft Outlook et disposer d'un rappel local.

### Comment le carnet calcule-t-il la différence d'heures de service entre deux entretiens ?
Lorsque vous saisissez un compteur horaire lors d'une intervention, le système recherche la précédente fiche enregistrée pour cette même machine et cette même catégorie de travail. Il soustrait l'ancien relevé du relevé courant pour afficher le nombre exact d'heures effectuées entre ces deux révisions.

## Limites

Le Registre de maintenance des machines constitue un outil d'organisation administrative et arithmétique de votre atelier, mais il ne peut en aucun cas juger de l'état mécanique réel de vos matériels. Le logiciel ne détecte ni l'usure interne des moteurs, ni le jeu mécanique des roulements, ni les défaillances de faisceau électrique, ni la perte de tension des ressorts, ni l'efficacité des cycles de stérilisation.

Les tatoueurs, perceurs et exploitants d'ateliers demeurent seuls responsables du contrôle physique de leur parc, de la conformité électrique de leurs installations, du respect des préconisations constructeurs et de l'application rigoureuse des règles sanitaires. Le registre numérique complète la vigilance pratique en atelier sans jamais remplacer l'examen technique direct par un réparateur qualifié.
