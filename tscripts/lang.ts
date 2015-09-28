var lang = {
    //culture: ko.observable("de-DE"),
    culture: ko.observable(navigator.userLanguage || navigator.language),
    "pleaseRead": function () {
        switch (this.culture()) {
            case "en-US":
            default:
                return "<strong>Please read:</strong> This site makes use of <a href='http://www.html5rocks.com/en/features/storage'>HTML5 localstorage</a> to store your information. This information is never sent to a server, and will only persist on the device that you set this up on.";
        }
    },
    "problem": function () {
        switch (this.culture()) {
            case "en-US":
            default:
                return "If you notice a problem with this site, please reach out to <a href='http://www.reddit.com/message/compose/?to=smdaegan'>/u/smdaegan</a> on reddit";
        }
    },
    "armor": function () {
        switch (this.culture()) {
            case "en-US":
            default:
                return "Armor";
        }
    },
    "weapon": function () {
        switch (this.culture()) {
            case "en-US":
            default:
                return "Weapon";
        }
    },
    "weapons": function () {
        switch (this.culture()) {
            case "en-US":
            default:
                return "Weapons";
        }
    },
    "jewelry": function () {
        switch (this.culture()) {
            case "en-US":
            default:
                return "Jewelry";
        }
    },
    "stashedItems": function () {
        switch (this.culture()) {
            case "en-US":
            default:
                return "Stashed Items";
        }
    },
    "totalCubed": function () {
        switch (this.culture()) {
            case "en-US":
            default:
                return lang.total() + " Cubed";
        }
    },
    "total": function () {
        switch (this.culture()) {
            case "en-US":
            default:
                return "Total";
        }
    },
    "settings": function () {
        switch (this.culture()) {
            case "en-US":
            default:
                return "Settings";
        }
    },
    "configure": function () {
        switch (this.culture()) {
            case "en-US":
            default:
                return "Configure";
        }
    },
    "seasonalSettingsHeader": function () {
        switch (this.culture()) {
            case "en-US":
            default:
                return "Seasonal Settings:";
        }
    },
    "nonSeasonalSettingsHeader": function () {
        switch (this.culture()) {
            case "en-US":
            default:
                return "Non-Seasonal Settings:";
        }
    },
    "hideCubed": function () {
        switch (this.culture()) {
            case "en-US":
            default:
                return "Hide Cubed";
        }
    },
    "showProgressBar": function () {
        switch (this.culture()) {
            case "en-US":
            default:
                return "Show Progress Bar";
        }
    },
    "export": function () {
        switch (this.culture()) {
            case "en-US":
            default:
                return "Export";
        }
    },
    "exportWarning": function () {
        switch (this.culture()) {
            case "en-US":
            default:
                return "The below will allow you to copy/paste your data into the import field.";
        }
    },
    "import": function () {
        switch (this.culture()) {
            case "en-US":
            default:
                return "Import";
        }
    },
    "importWarning": function () {
        switch (this.culture()) {
            case "en-US":
            default:
                return "Importing will override ALL of your current selections. Do so with caution.";
        }
    },
    "importConfirm": function () {
        switch (this.culture()) {
            case "en-US":
            default:
                return "Importing values will override all of your current selections. Are you sure you want to do this?";
        }
    },
    "refreshWarning": function () {
        switch (this.culture()) {
            case "en-US":
            default:
                return "This option will remove all data in local storage (including your selections) and refresh the grid. Are you sure you want to do this?";
        }
    },
    "seasonal": function () {
        switch (this.culture()) {
            case "en-US":
            default:
                return "Seasonal";
        }
    },
    "seasonalProgress": function () {
        switch (this.culture()) {
            case "en-US":
            default:
                return lang.seasonal() + " Progress";
        }
    },
    "nonSeasonal": function () {
        switch (this.culture()) {
            case "en-US":
            default:
                return "Non-Seasonal";
        }
    },
    "name": function () {
        switch (this.culture()) {
            case "en-US":
            default:
                return "Name";
        }
    },
    "cubedSeasonal": function () {
        switch (this.culture()) {
            case "en-US":
            default:
                return "Cubed - Seasonal";
        }
    },
    "cubedNonSeasonal": function () {
        switch (this.culture()) {
            case "en-US":
            default:
                return "Cubed - Non-Seasonal";
        }
    },
    "stashed": function () {
        switch (this.culture()) {
            case "en-US":
            default:
                return "Stashed";
        }
    },
    "affix": function () {
        switch (this.culture()) {
            case "en-US":
            default:
                return "Affix";
        }
    },
    englishToCulture: function (item) {
        var _item = ko.unwrap(item);
        try {
            switch (this.culture()) {
                case "en-US":
                default:
                    return item;
                case "de-DE":
                    {
                        switch (ko.unwrap(_item.itemName)) {
                            case "Sanguinary Vambracers":
                                return new Kanai.Equipment("Blutrünstige Unterarmschienen", "Wenn Ihr getroffen werdet, besteht eine Chance, dass Ihr Gegnern in der Nähe 1.000% Eures Dornenschadens zufügt");
                            case "Reaper's Wraps":
                                return new Kanai.Equipment("Wickeltuch des Seelenernters", "Heilkugeln stellen 30% Eurer Primärressource wieder her");

                            case "Ancient Parthan Defenders":
                                return new Kanai.Equipment('Uralte parthanische Schützer', "Für jeden betäubten Gegner im Umkreis von 25 Metern erleidet Ihr 12% weniger Schaden");
                            case "Broken Crown":
                                return new Kanai.Equipment('Zerbrochene Krone', 'Jedes Mal, wenn ein Edelstein fallen gelassen wird, wird ebenfalls ein Edelstein des Typs fallen gelassen, der in diesen Helm gesockelt wurde.');

                            case "Andariel's Visage":
                                return new Kanai.Equipment('Andariels Antlitz', 'Angriffe lösen eine Giftnova aus, die allen Feinden innerhalb von 10 Metern 350–450% Waffenschaden als Giftschaden zufügt');

                            case "Leorics Crown":
                                return new Kanai.Equipment('Leorics Krone', 'Verstärkt die Wirkung jedes Edelsteins, der in diesen Gegenstand eingesetzt ist, um 75–100%.');

                            case "Gungdo Gear":
                                return new Kanai.Equipment('Gungdo-Schienen', "Die durch 'Explodierende Hand' ausgelöste Explosion beim Tod fügt allen erfassten Gegnern den Effekt von 'Explodierende Hand' hinzu ");

                            case "Deathseer's Cowl":
                                return new Kanai.Equipment('Gugel des Todessehers', 'Es besteht eine Chance von 15–20%, dass Ihr einen untoten Gegner 2 Sek. lang betört, wenn Ihr von ihm getroffen werdet');

                            case "Pride's Fall":
                                return new Kanai.Equipment('Fall des Hochmuts', 'Wenn Ihr 5 Sek. lang keinen Schaden erleidet, werden Eure Ressourcenkosten um 30% reduziert');

                            case "Skull of Resonance":
                                return new Kanai.Equipment('Resonanzschädel', "'Drohruf' hat eine Chance, Gegner zu betören und sie auf Eure Seite überlaufen zu lassen");

                            case "Eye of Peshkov":
                                return new Kanai.Equipment('Auge von Peshkov', "Reduziert die Abklingzeit von 'Odem des Himmels' um 38–50%");

                            case "Gyana Na Kashu":
                                return new Kanai.Equipment('Gyana Na Kashu', "'Fegender Tritt' entfesselt einen durchschlagenden Feuerball, der allen Gegnern im Umkreis von 10 Metern vom Aufschlagsort 525–700% Waffenschaden als Feuerschaden zufügt");

                            case "Kekegi's Unbreakable Spirit":
                                return new Kanai.Equipment('Kekegis unbezwingbarer Geist', 'Chance, einen Effekt zu erhalten, der die Geisteskraftkosten Eurer Fertigkeiten 2–4 Sek. lang aufhebt, wenn Ihr einem Gegner Schaden zufügt');

                            case "Madstone":
                                return new Kanai.Equipment('Irrstein', "'Schlag der Sieben Fäuste' belegt getroffene Gegner mit 'Explodierende Hand'");

                            case "The Laws of Seph":
                                return new Kanai.Equipment('Sephs Gesetze', "Die Anwendung von 'Lichtblitz' stellt 165 Geisteskraft wieder her");

                            case "The Mind's Eye":
                                return new Kanai.Equipment('Das innere Auge', "'Heilige Einkehr' erhöht die Geisteskraftregeneration pro Sekunde um 10–15");

                            case "Tzo Krin's Gaze":
                                return new Kanai.Equipment('Tzo Krins Blick', "'Woge des Lichts' wird jetzt an der Position Eures Ziels ausgelöst");

                            case "Carnevil":
                                return new Kanai.Equipment('Karnevalfratze', 'Wenn Ihr einen Giftpfeil abschießt, verschießen Eure 5 am nächsten stehenden Fetische jedes Mal einen zusätzlichen Giftpfeil');

                            case "Mask of Jeram":
                                return new Kanai.Equipment('Jerams Maske', 'Diener verursachen 75–100% mehr Schaden');

                            case "Quetzalcoatl":
                                return new Kanai.Equipment('Quetzalcoatl', "'Heuschreckenplage' und 'Heimsuchung' verursachen ihren Schaden jetzt in der Hälfte der Zeit");

                            case "The Grin Reaper":
                                return new Kanai.Equipment('Gevatter Grins', 'Wenn Ihr angreift, habt Ihr eine Chance schreckliche Abbilder zu beschwören, die einige Eurer aktiven Fertigkeiten einsetzen können.');

                            case "Tiklandian Visage":
                                return new Kanai.Equipment('Tiklandische Fratze', "'Entsetzen' erfüllt Gegner in Eurer Nähe 6–8 Sek. lang mit Furcht und macht sie bewegungsunfähig");

                            case "Visage of Giyua":
                                return new Kanai.Equipment('Fratze von Giyua', 'Beschwört eine Fetischarmee, nachdem Ihr 2 Elitegegner getötet habt');

                            case "Archmage's Vicalyke":
                                return new Kanai.Equipment('Kamelaukion des Erzmagiers', 'Eure Spiegelbilder haben eine Chance, sich zu vermehren, wenn sie von Gegnern getötet werden');

                            case "Crown of the Primus":
                                return new Kanai.Equipment('Die Krone des Primus', "'Zeit verlangsamen' erhält den Effekt jeder Rune");

                            case "Dark Mage's Shade":
                                return new Kanai.Equipment('Schemen des dunklen Magiers', "Ihr wirkt automatisch 'Diamanthaut', wenn Ihr unter 35% Leben fallt. Dieser Effekt kann nur einmal alle 15–20 Sek. auftreten");

                            case "Storm Crow":
                                return new Kanai.Equipment('Sturmkrähe', 'Chance von 20–40%, eine feurige Kugel zu wirken, wenn Ihr angreift');

                            case "The Magistrate":
                                return new Kanai.Equipment('Der Magistrat', "Eure Frosthydra wirkt jetzt in regelmäßigen Abständen 'Frostnova'");

                            case "Chaingmail":
                                return new Kanai.Equipment("Paulus' Kürass", "Nachdem Ihr einen Überlebensbonus erhalten habt, werdet Ihr in kurzer Zeit vollständig geheilt");

                            case "The Swami":
                                return new Kanai.Equipment('Der Swami', "Die Stärkungseffekte Eurer 'Archon'-Stapel bleiben für 15–20 Sek. bestehen, nachdem 'Archon' nicht mehr aktiv ist.");

                            case "Velvet Camaral":
                                return new Kanai.Equipment('Samtkalotte', "Verdoppelt die Anzahl der Ziele, zu denen Euer Zauber 'Stromschlag' überspringt");

                            case "Fury of the Ancients":
                                return new Kanai.Equipment('Wut der Urahnen', "'Ruf der Urahnen' erhält den Effekt der Rune 'Wut der Urahnen'.");

                            case "Homing Pads":
                                return new Kanai.Equipment('Zielsuchplatten', 'Euer Stadtportal wird nicht länger unterbrochen, wenn Ihr Schaden erleidet. Beim Wirken des Stadtportals erhaltet Ihr einen schützenden Schild, der den erlittenen Schaden um 50–65% reduziert.');

                            case "Death Watch Mantle":
                                return new Kanai.Equipment('Todeswachtmantelung', 'Wenn Ihr getroffen werdet, besteht eine Chance von 25–35%, einen Dolchfächer auszulösen, der 750-950% Waffenschaden verursacht');

                            case "Pauldrons of the Skeleton King":
                                return new Kanai.Equipment('Schulterpanzer des Skelettkönigs', 'Wenn Ihr tödlichen Schaden erleidet, besteht eine Chance, dass Ihr, statt zu sterben, auf 25% Eures maximalen Lebens geheilt werdet und Gegner in der Nähe von Furcht erfüllt fliehen');

                            case "Vile Ward":
                                return new Kanai.Equipment('Abscheuschutz', "Der Schaden von 'Wütender Ansturm' wird für jeden betroffenen Gegner um 30–35% erhöht");

                            case "Armor of the Kind Regent":
                                return new Kanai.Equipment('Rüstung des gütigen Regenten', "'Niederstrecken' wird jetzt auch auf einen zweiten Gegner in der Nähe gewirkt");

                            case "Spaulders of Zakara":
                                return new Kanai.Equipment('Plattenschultern von Zakara', 'Eure Gegenstände werden unzerstörbar');

                            case "Cindercoat":
                                return new Kanai.Equipment('Aschemantel', 'Reduziert die Ressourcenkosten von Feuerfertigkeiten um 23–30%');

                            case "Goldskin":
                                return new Kanai.Equipment('Goldhaut', 'Gegner lassen manchmal Gold fallen, wenn Ihr sie trefft');

                            case "Shi Mizu's Haori":
                                return new Kanai.Equipment('Shi Mizus Haori', 'Wenn Ihr weniger als 20–25% Leben habt, sind alle Angriffe garantierte kritische Treffer');

                            case "Beckon Sail":
                                return new Kanai.Equipment('Locktuch', "Wenn Ihr tödlichen Schaden erleidet, setzt Ihr, statt zu sterben, 'Rauchwolke' ein und werdet auf 25% Eures Lebens geheilt. Dieser Effekt kann einmal alle 120 Sek. auftreten");

                            case "Blackfeather":
                                return new Kanai.Equipment('Schwarzfeder', 'Wenn Ihr einem Geschoss ausweicht oder von ihm getroffen werdet, schießt Ihr automatisch eine Zielsuchrakete auf den Angreifer, die ihm 600–800% Waffenschaden als physischen Schaden zufügt');

                            case "Cape of the Dark Night":
                                return new Kanai.Equipment('Cape des Schreckens, der die Nacht durchflattert', 'Ihr lasst automatisch Krähenfüße fallen, wenn Ihr getroffen werdet. Dieser Effekt kann nur einmal alle 6 Sek. auftreten');

                            case "The Cloak of the Garwulf":
                                return new Kanai.Equipment('Der Umhang des Garwulf', "Gefährte - Wolfgefährte' beschwört jetzt 3 Wölfe");

                            case "Cloak of Deception":
                                return new Kanai.Equipment('Umhang der Täuschung', 'Gegnerische Geschosse fliegen manchmal harmlos durch Euch hindurch');

                            case "Bracers of the First Men":
                                return new Kanai.Equipment('Armschienen der Ersten Menschen', "Erhöht die Angriffsgeschwindigkeit von 'Hammer der Urahnen' um 50% und den Schaden um 200%.");

                            case "Coils of the First Spider":
                                return new Kanai.Equipment('Wickel der Obersten Spinne', "Während Ihr 'Feuerfledermäuse' kanalisiert, wird Euer erlittener Schaden um 30% reduziert und Ihr erhaltet 80000 Leben pro Treffer.");

                            case "Bracers of Destruction":
                                return new Kanai.Equipment('Armschienen der Zerstörung', "Erhöht den Schaden der ersten 5 getroffenen Gegner von 'Seismisches Schmettern' um 400%.");

                            case "Custerian Wristguards":
                                return new Kanai.Equipment('Custerische Handgelenkschützer', 'Das Aufsammeln von Gold gewährt Erfahrung');

                            case "Drakon's Lesson":
                                return new Kanai.Equipment('Drakons Lektion', "Wenn Euer 'Schildstoß' 3 oder weniger Gegner trifft, wird sein Schaden um 150–200% erhöht und 25% seiner Zornkosten werden zurückerstattet.");

                            case "Jeram's Bracers":
                                return new Kanai.Equipment('Jerams Armschienen', "'Todeswall' verursacht 75–100% mehr Schaden und kann innerhalb von 2 Sek. bis zu dreimal gewirkt werden, bevor die Abklingzeit einsetzt.'");

                            case "Gabriel's Vambraces":
                                return new Kanai.Equipment('Gabriels Unterarmschienen', "Wenn 'GesegneterHammer' 3 oder weniger Gegner trifft, werden 75–100% seiner Zornkosten zurückerstattet.");

                            case "Krelm's Buff Bracers":
                                return new Kanai.Equipment("Krelms Verstärkungsarmschienen", 'Gewährt Immunität gegen Rückstoß und Betäubungseffekte');
                            case "Krelm's Buff Belt":
                                return new Kanai.Equipment("Krelms Verstärkungsgürtel", "Erhöht Eure Bewegungsgeschwindigkeit um 25%. Wenn Ihr Schaden erleidet, wird dieser Effekt für 5 Sek. aufgehoben")
                            case "Nemesis Bracers":
                                return new Kanai.Equipment('Armschienen der Nemesis', 'Schreine und Pylonen lassen einen gegnerischen Champion erscheinen');

                            case "Promise of Glory":
                                return new Kanai.Equipment('Verheißung', 'Ihr habt eine Chance von 4–6%, dass Gegner eine Machtkugel fallen lassen, wenn Ihr sie blendet');

                            case "Ranslor's Folly":
                                return new Kanai.Equipment('Ranslors Torheit', "'Energiewirbel' zieht in regelmäßigen Abständen herkömmliche Gegner innerhalb von 30 Metern heran.");

                            case "Spirit Guards":
                                return new Kanai.Equipment('Geisterschellen', 'Geisteskrafterzeuger reduzieren 3 Sek. lang Euren erlittenen Schaden um 30–40%');

                            case "Strongarm Bracers":
                                return new Kanai.Equipment('Raufboldarmschienen', 'Gegner, die zurückgestoßen werden, erleiden nach dem Landen 5 Sek. lang um 20–30% erhöhten Schaden');

                            case "Trag'Oul Coils":
                                return new Kanai.Equipment("Wickel des Trag'Oul", "Heilbrunnen füllen jetzt auch sämtliche Ressourcen wieder auf und reduzieren alle Abklingzeiten um 60 Sek.");

                            case "Frostburn":
                                return new Kanai.Equipment('Frostbrand', 'Eure Kälteeffekte haben eine Chance von bis zu 34–45%, Ziele einzufrieren');

                            case "Warzechian Armguards":
                                return new Kanai.Equipment('Armschützer der Warzecha', 'Jedes Mal, wenn Ihr ein Objekt zerstört, erhaltet Ihr einen kurzen Geschwindigkeitsschub');

                            case "Wraps of Clarity":
                                return new Kanai.Equipment('Wickel der Klarheit', 'Eure Hasserzeuger reduzieren Euren erlittenen Schaden 5 Sek. lang um 30–35%.');

                            case "Gladiator Gauntlets":
                                return new Kanai.Equipment('Gladiatorenpanzerhandschuhe', 'Nachdem Ihr einen Massakerbonus erhalten habt, regnet es Gold vom Himmel');

                            case "Gloves of Worship":
                                return new Kanai.Equipment('Handschuhe der Huldigung', 'Schreineffekte halten 10 Minuten an');

                            case "Tasker and Theo":
                                return new Kanai.Equipment('Tasker und Theo', 'Erhöht die Angriffsgeschwindigkeit Eurer Gefährten oder Diener um 40–50%');

                            case "Angel Hair Braid":
                                return new Kanai.Equipment('Engelshaarborte', "'Bestrafen' erhält den Effekt jeder Rune");

                            case "Belt of the Trove":
                                return new Kanai.Equipment('Gürtel des geheimen Schatzes', "Alle 6–8 Sek. lasst Ihr ein 'Bombardement' auf einen zufälligen Gegner in der Nähe niedergehen");

                            case "Binding of the Lost":
                                return new Kanai.Equipment('Gürtelband der Verlorenen', "Jeder Treffer mit 'Schlagder Sieben Fäuste' reduziert 7 Sek. lang Euren erlittenen Schaden um 3,5%.");

                            case "Belt of Transcendence":
                                return new Kanai.Equipment('Gürtel der Transzendenz', 'Beschwört einen Opportunisten, wenn Ihr mit einem Eurer Manaverbraucher trefft');

                            case "Blessed of Haull":
                                return new Kanai.Equipment('Haulls Segen', "'Gerechtigkeit' erzeugt einen 'Gesegneten Hammer', wenn ein Feind damit getroffen wird");

                            case "Goldwrap":
                                return new Kanai.Equipment('Goldträger', 'Goldsammeln: Eure Rüstung wird für 5 Sek. um einen Wert erhöht, der dem des aufgesammelten Goldes entspricht');

                            case "Cord of the Sherma":
                                return new Kanai.Equipment('Band von Sherma', 'Chance, bei einem Treffer ein Chaosfeld zu erzeugen, das Gegner für 3–4 Sek. blendet und verlangsamt');

                            case "Harrington Waistguard":
                                return new Kanai.Equipment('Hüftgurt der Harringtons', 'Wenn Ihr eine Truhe öffnet, wird Euer Schaden 10 Sek. lang um 100–135% erhöht');

                            case "Fazula's Improbable Chain":
                                return new Kanai.Equipment('Fazulas unmögliche Kette', "Ihr startet mit 20 'Archon'-Stapeln, wenn Ihr 'Archon' aktiviert.");

                            case "Crashing Rain":
                                return new Kanai.Equipment('Hagelsturm', "'Rachehagel' beschwört zusätzlich eine vom Himmel fallende Bestie, die 4000% Waffenschaden verursacht");

                            case "Haunting Girdle":
                                return new Kanai.Equipment('Spukgürtel', "'Heimsuchung' ruft 1 weitere Geister herbei");

                            case "Hwoj Wrap":
                                return new Kanai.Equipment('Wickeltuch der Hwoj', "'Heuschreckenplage' verlangsamt Gegner um 80%");

                            case "Hunter's Wrath":
                                return new Kanai.Equipment('Zorn des Jägers', 'Erhöht die Angriffsgeschwindigkeit Eurer Primärfertigkeiten um 30% und ihren Schaden um 45–60%.');

                            case "Insatiable Belt":
                                return new Kanai.Equipment('Gürtel der Unersättlichkeit', 'Das Aufsammeln einer Heilkugel erhöht Euer maximales Leben 15 Sek. lang um 5%. Bis zu 5-mal stapelbar');

                            case "Omnislash":
                                return new Kanai.Equipment('Vielschlitzergürtel', "'Schlitzen' wirkt in alle Richtungen");

                            case "Jang's Envelopment":
                                return new Kanai.Equipment('Jangs Umhüllung', "Gegner, die durch 'Schwarzes Loch' Schaden erleiden, werden außerdem 3 Sek. lang um 60–80% verlangsamt");

                            case "Omryn's Chain":
                                return new Kanai.Equipment('Omryns Kette', "Beim Einsatz von 'Salto' werden 'Krähenfüße' fallen gelassen");

                            case "Sacred Harness":
                                return new Kanai.Equipment('Heiliger Gurt', "'Richturteil' erhält den Effekt der Rune 'Entkräften' und wird an Eurem Aufschlagsort gewirkt, sobald Ihr 'Himmlische Vollstreckung' nutzt.");

                            case "Sash of Knives":
                                return new Kanai.Equipment('Messerschärpe', 'Wirft mit jedem Angriff einen Dolch auf einen Gegner in der Nähe und fügt ihm 500–650% Waffenschaden als physischen Schaden zu');

                            case "Sebor's Nightmare":
                                return new Kanai.Equipment('Sebors Alptraum', "Wenn Ihr eine Kiste öffnet, wird auf alle Gegner in der Nähe 'Heimsuchung' gewirkt");

                            case "Razor Strop":
                                return new Kanai.Equipment('Wetzriemen', 'Das Aufsammeln von Heilkugeln löst eine Explosion aus, die Gegnern im Umkreis von 20 Metern 300–400% Waffenschaden als Feuerschaden zufügt');

                            case "Thundergod's Vigor":
                                return new Kanai.Equipment('Kraft des Donnergotts', 'Wenn Ihr Angriffe blockt, ihnen ausweicht oder getroffen werdet, entfesselt Ihr elektrische Blitze, die 100–130% Waffenschaden als Blitzschaden verursachen');

                            case "Chilanik's Chain":
                                return new Kanai.Equipment('Chilaniks Kette', "Die Anwendung von 'Kriegsschrei' erhöht Eure Bewegungsgeschwindigkeit und die Eurer Verbündeten 10 Sek. lang um 40%");

                            case "Lamentation":
                                return new Kanai.Equipment('Klagelied', "Gegner können mit 2 Stapeln von 'Zerfleischen' belegt werden");

                            case "Pride of Cassius":
                                return new Kanai.Equipment('Stolz von Cassius', "Erhöht die Dauer von 'Schmerzen unterdrücken' um 6 Sek.");

                            case "The Undisputed Champion":
                                return new Kanai.Equipment('Der unangefochtene Sieger', "'Raserei' erhält den Effekt jeder Rune");

                            case "Death's Bargain":
                                return new Kanai.Equipment('Todeshandel', 'Erhaltet eine Todesaura, die Gegnern im Umkreis von 16 Metern physischen Schaden zufügt, der 750–1000% Eures Lebens pro Sekunde entspricht. Ihr regeneriert kein Leben mehr.');

                            case "Depth Diggers":
                                return new Kanai.Equipment('Tiefenwühler', 'Ressourcen erzeugende Primärfertigkeiten verursachen 80–100% zusätzlichen Schaden');

                            case "Hexing Pants of Mr. Yan":
                                return new Kanai.Equipment('Hexenhose von Herrn Yan', 'In Bewegung sind Eure Ressourcenerzeugung und Euer Schaden um 25% erhöht. Wenn Ihr stillsteht, sind sie jeweils um 20–25% reduziert.');

                            case "Illusory Boots":
                                return new Kanai.Equipment("Illusorische Stiefel", "Gestattet es, Euch ungehindert durch Gegner zu bewegen");
                            case "Pox Faulds":
                                return new Kanai.Equipment('Pockenpantalons', 'Wenn sich 3 oder mehr Gegner im Umkreis von 12 Metern befinden, geht von Euch ein widerlicher Gestank aus, der Gegnern im Umkreis von 15 Metern 5 Sek. lang pro Sekunde 450–550% Waffenschaden als Giftschaden zufügt');

                            case "Boots of Disregard":
                                return new Kanai.Equipment('Stiefel der Missachtung', 'Erhaltet für jede Sekunde, die Ihr stillsteht, zusätzlich 10.000 Lebensregeneration pro Sekunde. Dieser Effekt ist bis zu 4-mal stapelbar.');

                            case "Fire Walkers":
                                return new Kanai.Equipment('Flammengänger', 'Ihr verbrennt den Boden, auf dem Ihr wandelt, und alle Gegner, die in das Feuer geraten, erleiden jede Sekunde 300–400% Waffenschaden');

                            case "Irontoe Mudsputters":
                                return new Kanai.Equipment('Schlammspritzer mit Eisenkappe', 'Eure Bewegungsgeschwindigkeit wird um bis zu 25–30% erhöht, basierend auf Eurem verlorenen Leben');

                            case "Lut Socks":
                                return new Kanai.Equipment('Lut-Socken', "'Sprung' kann innerhalb von 2 Sek. erneut gewirkt werden, bevor die Abklingzeit beginnt");

                            case "Nilfur's Boast":
                                return new Kanai.Equipment('Nilfurs Stolz', "Erhöht den Schaden von 'Meteor' um 100%. Wenn Euer 'Meteor' 3 oder weniger Gegner trifft, erhöht sich der Schaden um 150–200%.");

                            case "The Crudest Boots":
                                return new Kanai.Equipment('Die gröbsten Stiefel', "'Mystischer Verbündeter' beschwört zwei mystische Verbündete, die an Eurer Seite kämpfen");

                            case "Dread Iron":
                                return new Kanai.Equipment('Schreckenseisen', "'Aufstampfen' erzeugt einen 'Erdrutsch'");

                            case "Genzaniku":
                                return new Kanai.Equipment('Genzaniku', 'Ihr beschwört manchmal einen geisterhaften Champion der Gefallenen, wenn Ihr angreift');

                            case "Hack":
                                return new Kanai.Equipment('Hacken', '75–100% Eures Dornenschadens wird auf jeden Angriff angewandt');

                            case "Sky Splitter":
                                return new Kanai.Equipment('Himmelsspalter', "Chance von 20%, 'Himmlisches Schmettern' auf getroffene Gegner zu wirken und 600-750% Waffenschaden als Blitzschaden zu verursachen");

                            case "The Burning Axe of Sankis":
                                return new Kanai.Equipment('Die brennende Axt von Sankis', 'Ihr unterdrückt manchmal Euren Schmerz, wenn Ihr getroffen werdet');

                            case "The Butcher's Sickle":
                                return new Kanai.Equipment('Schlächtersichel', 'Chance von 20–25%, Gegner zu Euch heranzuziehen, wenn Ihr angreift');

                            case "Envious Blade":
                                return new Kanai.Equipment('Klinge des Neids', 'Eure kritische Trefferchance gegen Gegner mit vollem Leben beträgt 100%');

                            case "Jace's Hammer of Vigilance":
                                return new Kanai.Equipment('Jaces Hammer der Wachsamkeit', "Vergrößert die Hämmer von 'Gesegneter Hammer'");

                            case "Mad Monarch's Scepter":
                                return new Kanai.Equipment('Szepter des wahnsinnigen Monarchen', 'Wenn Ihr 10 Gegner getötet habt, setzt Ihr eine Giftnova frei, die Gegnern innerhalb von 30 Metern 1050–1400% Waffenschaden als Giftschaden zufügt');

                            case "Odyn Son":
                                return new Kanai.Equipment('Odyns Sohn', 'Chance von 20–40%, einen Kettenblitz auf Eure Gegner zu wirken, wenn Ihr sie trefft');

                            case "Arreat's Law":
                                return new Kanai.Equipment('Das Gesetz des Arreat', "'Waffenwurf' erzeugt mit zunehmender Entfernung zum getroffenen Gegner zusätzlich bis zu 15–20 mehr Wut. Der Maximalwert wird ab 20 Meter erreicht.");

                            case "Azurewrath":
                                return new Kanai.Equipment('Blauzorn', 'Untote und dämonische Gegner innerhalb von 25 Metern erleiden jede Sekunde 500–650% Waffenschaden als Heiligschaden und werden manchmal in die Luft geschleudert.');

                            case "Fulminator":
                                return new Kanai.Equipment('Donnerkeil', 'Jeglicher Blitzschaden hat jetzt eine Chance, Gegner in Blitzableiter zu verwandeln, die Gegnern in der Nähe 6 Sekunden lang jede Sekunde 444–555% Waffenschaden als Blitzschaden zufügen.');

                            case "Rimeheart":
                                return new Kanai.Equipment('Frostherz', 'Gewährt eine Chance von 10%, bei einem Treffer eingefrorenen Gegnern sofort 10000% Waffenschaden als Kälteschaden zuzufügen');

                            case "Solanium":
                                return new Kanai.Equipment('Solanium', 'Kritische Treffer haben eine Chance von 3–4%, eine Heilkugel hervorzurufen');

                            case "Sever":
                                return new Kanai.Equipment('Schnitt', 'Eure Gegner platzen vor Neid');

                            case "Wizardspike":
                                return new Kanai.Equipment('Zauberdorn', 'Chance von 20–25%, eine gefrorene Kugel zu wirken, wenn Ihr angreift');

                            case "Shard of Hate":
                                return new Kanai.Equipment('Splitter des Hasses', "Elementarfertigkeiten haben eine Chance, einen mächtigen Angriff auszulösen, der 250% Waffenschaden verursacht:   Kältefertigkeiten lösen 'Eisknochengeist' aus   Giftfertigkeiten lösen 'Giftnova' aus   Blitzfertigkeiten lösen 'Combo - Blitz' aus");
                            case "Eun-jang-do":
                                return new Kanai.Equipment("Eun-jang-do", "Gegner, die über weniger als 20% ihres Lebens verfügen, werden durch Eure Angriffe für 3 Sek. eingefroren");

                            case "Ice Climbers":
                                return new Kanai.Equipment('Eiskletterer', 'Ihr erhaltet Immunität gegen Einfrierungs- und Bewegungsunfähigkeitseffekte');
                            case "St. Archew's Gage":
                                return new Kanai.Equipment("St. Archews Maß", "Der erste Treffer, den Ihr durch eine Gruppe Elitegegner erleidet, verleiht Euch 10 Sek. lang einen Schild, der Schaden in Höhe von 120–150% Eures maximalen Lebens absorbiert.");
                            case "Skycutter":
                                return new Kanai.Equipment('Himmelsschlitzer', 'Ihr ruft manchmal Engelsbeistand herbei, wenn Ihr angreift');

                            case "Starmetal Kukri":
                                return new Kanai.Equipment('Sternstahlkukri', "Reduziert jedes Mal, wenn Eure Fetische Schaden verursachen, die Abklingzeit von 'Fetischarmee' und 'Gro ßerböser Voodoo' um 1 Sek.");

                            case "Sacred Harvester":
                                return new Kanai.Equipment('Heiliger Ernter', "'Seelenernte' ist bis zu 10-mal stapelbar");

                            case "Anessazi Edge":
                                return new Kanai.Equipment('Anessazi-Stilett', 'Zombiehunde betäuben Gegner um sie herum für 1,5 Sek., wenn sie beschworen werden');

                            case "The Dagger of Darts":
                                return new Kanai.Equipment('Der Dolchpfeil', 'Eure Giftpfeile und die Giftpfeile Eurer Fetische durchschlagen ihre Ziele');

                            case "Rhen'ho Flayer":
                                return new Kanai.Equipment("Rhen'hos Schinder", "Eure Kröten verfolgen Gegner jetzt und können zweimal explodieren");

                            case "Jawbreaker":
                                return new Kanai.Equipment('Kieferbrecher', "Wenn 'Rasender Angriff' einen Gegner in mehr als 35 Metern Entfernung trifft, werden die Aufladungskosten der Fertigkeit erstattet");

                            case "The Gidbinn":
                                return new Kanai.Equipment('Der Gidbinn', 'Ihr beschwört manchmal einen Fetisch, wenn Ihr angreift');

                            case "The Spider Queen's Grasp":
                                return new Kanai.Equipment('Die Umklammerung der Spinnenkönigin', 'Eure Leichenspinnen erzeugen beim Auftreffen ein Netz, das Gegner um 60–80% verlangsamt');

                            case "The Fist of Az'Turrasq":
                                return new Kanai.Equipment("Die Faust von Az'Turrasq", "Erhöht den Schaden der Todesexplosion von 'Explodierende Hand' um 100% ");

                            case "Vengeful Wind":
                                return new Kanai.Equipment('Rachsüchtiger Wind', "Erhöht die maximale Stapelanzahl von 'Reißender Wind' um 3");

                            case "Darklight":
                                return new Kanai.Equipment('Dunkellicht', "'Himmelsfaust' hat eine Chance von 60%, zusätzlich an Eurer Position gewirkt zu werden");

                            case "Lion's Claw":
                                return new Kanai.Equipment('Löwenklaue', "'Schlag der Sieben Fäuste' führt 7 zusätzliche Schläge aus.");

                            case "Inviolable Faith":
                                return new Kanai.Equipment('Unerschütterlicher Glaube', "Das Wirken von 'Weihe' ruft weitere Wirkungsbereiche von 'Weihe' unter Euren Verbündeten hervor");

                            case "Gyrfalcon's Foote":
                                return new Kanai.Equipment('Gerfalkenfuß', "Entfernt die Ressourcenkosten von 'Gesegneter Schild'");

                            case "Kassar's Retribution":
                                return new Kanai.Equipment('Kassars Vergeltung', "Das Wirken von 'Gerechtigkeit' erhöht 2 Sek. lang Eure Bewegungsgeschwindigkeit um 20%");

                            case "Justinian's Mercy":
                                return new Kanai.Equipment('Justinians Gnade', "'Gesegneter Hammer' erhält den Effekt der Rune 'Herrschaft'");

                            case "Johanna's Argument":
                                return new Kanai.Equipment('Johannas Argument', "Erhöht die Angriffsgeschwindigkeit von 'Gesegneter Hammer' um 100%.");

                            case "Dishonored Legacy":
                                return new Kanai.Equipment('Geschändetes Erbe', "Erhöht den Schaden von 'Spalten' um bis zu 400%, basierend auf dem prozentualen Anteil der aktuell verbrauchten Wut.");

                            case "Swiftmount":
                                return new Kanai.Equipment('Windreiter', "Verdoppelt die Dauer von 'Kavallerie'");

                            case "Fjord Cutter":
                                return new Kanai.Equipment('Fjordspalter', 'Beim Angriff seid Ihr von einer unterkühlenden Aura umgeben.');

                            case "Burst of Wrath":
                                return new Kanai.Equipment('Ausbruch des Zorns', 'Das Töten von Gegnern und Zerstören von Objekten hat eine Chance, Euch 20% Eurer maximalen Primärressource zu gewähren');

                            case "Schaefer's Hammer":
                                return new Kanai.Equipment('Schaefers Hammer', 'Ihr ladet Euch mit Blitzenergie auf, wenn Ihr eine Blitzfertigkeit einsetzt, sodass Ihr Gegnern in der Nähe 5 Sek. lang pro Sekunde 650–850% Waffenschaden als Blitzschaden zufügt');

                            case "Butcher's Carver":
                                return new Kanai.Equipment('Schlächterschnitzer', 'Der Schlächter lebt in seinem Schnitzer weiter');

                            case "Skywarden":
                                return new Kanai.Equipment('Himmelswächter', 'Alle 60 Sek. erhaltet Ihr 60 Sek. lang ein zufälliges Gebot');

                            case "Thunderfury, Blessed Blade of the Windseeker":
                                return new Kanai.Equipment('Donnerzorn, Gesegnete Klinge des Windsuchers', 'Chance, Eurem Gegner bei einem Treffer einen Blitzschlag zu versetzen, der 279–372% Waffenschaden als Blitzschaden verursacht und dann auf weitere Gegner in der Nähe überspringt. Bei jedem getroffenen Gegner werden dessen Angriffs- und Bewegungsgeschwindigkeit 3 Sek. lang um 30% reduziert. Dieser Effekt springt auf bis zu 5 zusätzliche Gegner über');

                            case "Arthef's Spark of Life":
                                return new Kanai.Equipment('Arthefs Lebensfunke', 'Ihr werdet um 3–4% Eures verlorenen Lebens geheilt, wenn Ihr einen untoten Gegner tötet');

                            case "Soulsmasher":
                                return new Kanai.Equipment('Seelenberster', 'Wenn Ihr einen Gegner tötet, explodiert er und fügt allen Gegnern im Umkreis von 20 Metern 450–600% Eures Lebens pro getötetem Gegner als Schaden zu. Ihr erhaltet kein Leben pro getötetem Gegner mehr.');

                            case "The Furnace":
                                return new Kanai.Equipment('Der Schmelzofen', 'Erhöht den Schaden gegen Elitegegner um 40–50%');

                            case "Maloth's Focus":
                                return new Kanai.Equipment('Maloths Fokus', 'Der Anblick dieses Stabes schlägt Gegner gelegentlich in die Flucht');

                            case "Vigilance":
                                return new Kanai.Equipment('Wachsamkeit', "Chance, 'HeiligeEinkehr' zu wirken, wenn Ihr getroffen werdet");

                            case "The Grand Vizier":
                                return new Kanai.Equipment('Der Großwesir', "Reduziert die Arkankraftkosten von 'Meteor' um 50%");

                            case "The Smoldering Core":
                                return new Kanai.Equipment('Der Schwelende Kern', 'Niedere Gegner werden jetzt an den Einschlagsort Eures Meteors gelockt');

                            case "The Tormentor":
                                return new Kanai.Equipment('Der Peiniger', 'Ihr betört manchmal Gegner, wenn Ihr sie trefft');

                            case "Bovine Bardiche":
                                return new Kanai.Equipment('Rinderbardike', 'Chance, bei einem Treffer eine Herde mörderischer Kühe herbeizurufen');

                            case "Blade of Prophecy":
                                return new Kanai.Equipment('Klinge der Verheißung', "Zwei Gegner, die von 'Schuldspruch' betroffen sind, rufen ebenfalls eine Explosion hervor");

                            case "Valthek's Rebuke":
                                return new Kanai.Equipment('Valtheks Zurechtweisung', "'Energiewirbel' bewegt sich jetzt geradlinig");

                            case "Blood Brother":
                                return new Kanai.Equipment('Blutsbruder', 'Gewährt eine Chance von 15–20%, dass Angriffe geblockt werden. Geblockte Angriffe verursachen 30% weniger Schaden. Nach dem Blocken eines Angriffs verursacht Euer nächster Angriff 30% mehr Schaden.');

                            case "Wormwood":
                                return new Kanai.Equipment('Wermut', "Belegt Gegner in der Nähe ununterbrochen mit 'Heuschreckenplage'.");

                            case "Maximus":
                                return new Kanai.Equipment('Maximus', 'Chance, bei einem Treffer einen dämonischen Sklaven zu beschwören');

                            case "Stalgard's Decimator":
                                return new Kanai.Equipment('Stalgards Dezimierer', 'Bei Nahkampfangriffen wird eine Axt auf einen Gegner in der Nähe geschleudert, die ihm 550–700% Waffenschaden als physischen Schaden zufügt');

                            case "Scourge":
                                return new Kanai.Equipment('Geißel', 'Chance von 20–45%, mit dämonischer Wut zu explodieren und 1.800-2.000% Waffenschaden als Feuerschaden zu verursachen, wenn Ihr angreift');

                            case "Incense Torch of the Grand Temple":
                                return new Kanai.Equipment('Weihrauchstab des großen Tempels', "Reduziert die Geisteskraftkosten von 'Wogedes Lichts' um 50%");

                            case "Cam's Rebuttal":
                                return new Kanai.Equipment('Cams Erwiderung', "'Himmlische Vollstreckung' kann innerhalb von 4 Sek. wieder eingesetzt werden, bevor die Abklingzeit ausgelöst wird");

                            case "The Flow of Eternity":
                                return new Kanai.Equipment('Der Fluss der Ewigkeit', "Reduziert die Abklingzeit von 'Schlag der Sieben Fäuste' um 60%");

                            case "Flying Dragon":
                                return new Kanai.Equipment('Fliegender Drache', 'Ihr verdoppelt manchmal Eure Angriffsgeschwindigkeit, wenn Ihr angreift');

                            case "Baleful Remnant":
                                return new Kanai.Equipment('Unheilvolles Relikt', "Gegner, die getötet werden, während 'Akarats Champion' aktiv ist, werden 10 Sek. lang zu Avataren von 'Phalanx'");

                            case "Golden Flense":
                                return new Kanai.Equipment('Goldener Häuter', "'Schwungangriff' stellt 4–6 Zorn pro getroffenem Gegner wieder her");

                            case "Fate of the Fell":
                                return new Kanai.Equipment('Schicksal der Grausamen', "Ihr erhaltet zwei zusätzliche Strahlen 'Himmelsfuror'");

                            case "Bastion's Revered":
                                return new Kanai.Equipment('Held der Bastion', "'Raserei' ist bis zu 10-mal stapelbar");

                            case "Warstaff of General Quang":
                                return new Kanai.Equipment('Kriegsstab von General Quang', "'Gewitterfront' erhält den Effekt der Rune 'Rückenwind'");

                            case "Fury of the Vanished Peak":
                                return new Kanai.Equipment('Wut des vernichteten Gipfels', "Reduziert die Wutkosten von 'Seismisches Schmettern' um 50%");

                            case "The Gavel of Judgment":
                                return new Kanai.Equipment('Der Hammer des Richtspruchs', "Wenn 'Hammer der Urahnen' 3 oder weniger Ziele trifft, erhaltet Ihr 25 Wut zurück");

                            case "Cluckeye":
                                return new Kanai.Equipment('Hühnerauge', 'Chance von 25–50% auf ein Gegacker, wenn Ihr angreift');

                            case "Madawc's Sorrow":
                                return new Kanai.Equipment('Madawcs Schmerz', 'Ihr betäubt Gegner für 2 Sek., wenn Ihr sie das erste Mal trefft');

                            case "Leonine Bow of Hashir":
                                return new Kanai.Equipment('Löwenbogen von Hashir', 'Bolas haben eine Chance von 15–20%, bei ihrer Explosion alle Gegner im Umkreis von 24 Metern heranzuziehen');

                            case "Odyssey's End":
                                return new Kanai.Equipment('Ende der Odyssee', "Feinde, die von 'Einfangender Schuss' getroffen und verlangsamt werden, erleiden um 20–25% erhöhten Schaden aus allen Quellen");

                            case "Kridershot":
                                return new Kanai.Equipment('Kriderschuss', "'Elementarpfeil' erzeugt jetzt 3–4 Hass");

                            case "Yang's Recurve":
                                return new Kanai.Equipment('Yangs Reflexbogen', "Erhöht die Angriffsgeschwindigkeit von 'Mehrfachschuss' um 50%.");

                            case "The Raven's Wing":
                                return new Kanai.Equipment('Rabenflügel', 'Ein Rabe fliegt an Eurer Seite');

                            case "Demon Machine":
                                return new Kanai.Equipment('Dämonenmaschine', 'Chance von 35–65%, explosive Pfeile zu verschießen, wenn Ihr angreift');

                            case "Pus Spitter":
                                return new Kanai.Equipment('Eiterspeier', 'Chance von 25–50%, einen Säureklumpen zu werfen, wenn Ihr angreift');

                            case "Chanon Bolter":
                                return new Kanai.Equipment('Chanons Balläster', 'Eure Stachelfallen locken Gegner an. Gegner können einmal alle 12–16 Sek. angelockt werden');

                            case "Hellrack":
                                return new Kanai.Equipment('Höllenplage', 'Macht Gegner manchmal bewegungsunfähig, wenn Ihr sie trefft');

                            case "Calamity":
                                return new Kanai.Equipment('Katastrophe', 'Ziele, die Ihr trefft, werden todgeweiht');

                            case "Wojahnni Assaulter":
                                return new Kanai.Equipment('Sturm der Wojahnni', "Erhöht den Schaden von 'Schnellfeuer' für jede Sekunde Kanalisieren um 30–40%. Dieser Effekt ist bis zu 4-mal stapelbar.");

                            case "Helltrapper":
                                return new Kanai.Equipment('Höllenjäger', "Chance von 7–10%, bei einem Treffer 'Stachelfalle', 'Krähenfüße' oder 'Geschützturm' auszulösen");

                            case "Danetta's Revenge":
                                return new Kanai.Equipment('Danettas Rache', "'Salto' erhält den Effekt der Rune 'Geschüttelt, nicht gerührt'");

                            case "Danetta's Spite":
                                return new Kanai.Equipment('Danettas Trotz', "Ihr hinterlasst beim Einsatz von 'Salto' eine Kopie von Euch");

                            case "The Demon's Demise":
                                return new Kanai.Equipment('Der Untergang der Dämonen', "'Stachelfalle - Klebefalle' springt auf Gegner in der Nähe über, wenn sie explodiert.");

                            case "K'mar Tenclip":
                                return new Kanai.Equipment("Blankbogen von K'mar", "'Sperrfeuer' erhält den Effekt der Rune 'Wehender Schatten'");

                            case "The Mortal Drama":
                                return new Kanai.Equipment('Tödliches Drama', "Verdoppelt die Anzahl der Einschläge von 'Bombardement'");

                            case "Gesture of Orpheus":
                                return new Kanai.Equipment("Orpheus' Wink", "Reduziert die Abklingzeit von 'Zeit verlangsamen' um 40 %");

                            case "Valla's Bequest":
                                return new Kanai.Equipment('Vallas Vermächtnis', 'Die Projektile von Speerfeuer durchschlagen Ziele.');

                            case "Aether Walker":
                                return new Kanai.Equipment('Ätherwandler', "'Teleportation' hat keine Abklingzeit mehr, aber kostet 25 Arkankraft");

                            case "Wand of Woh":
                                return new Kanai.Equipment('Zauberstab von Woh', "Nach dem Wirken von 'Explosion' werden drei weitere Explosionen ausgelöst");

                            case "Denial":
                                return new Kanai.Equipment('Die Verwehrung', "Jeder von Eurem 'Schwungangriff' getroffene Gegner erhöht den Schaden Eures nächsten 'Schwungangriffs' um 30–40%. Bis zu 5-mal stapelbar.");

                            case "Defender of Westmarch":
                                return new Kanai.Equipment('Verteidiger der Westmark', 'Einen Angriff zu blocken gewährt eine Chance, einen heranstürmenden Wolf herbeizurufen, der allen Gegnern, die er berührt, 800–1000% Waffenschaden zufügt');

                            case "Coven's Criterion":
                                return new Kanai.Equipment('Maß des Zirkels', 'Ihr erleidet 45–60% weniger Schaden von geblockten Angriffen');

                            case "Eberli Charo":
                                return new Kanai.Equipment('Eberlis Charo', "Reduziert die Abklingzeit von 'Himmelsfuror' um 50%");

                            case "Freeze of Deflection":
                                return new Kanai.Equipment('Ablenkender Frost', 'Wenn Ihr einen Angriff blockt, besteht die Chance, den Angreifer 0,5–1,5 Sek. lang einzufrieren');

                            case "Serpent's Sparker":
                                return new Kanai.Equipment('Funkenstab der Schlange', 'Ihr könnt eine zusätzliche Hydra gleichzeitig aktiv haben');

                            case "Slorak's Madness":
                                return new Kanai.Equipment('Sloraks Wahnsinn', 'Dieser Zauberstab findet Euren Tod äußerst erheiternd');

                            case "Vo'Toyias Spiker":
                                return new Kanai.Equipment("Vo'Toyias' Dornschild", "Gegner, die von 'Provokation' betroffen sind, erleiden doppelten Schaden durch Dornen");

                            case "Ivory Tower":
                                return new Kanai.Equipment('Elfenbeinturm', "Geblockte Angriffe lösen ein 'Himmelsfeuer' in Blickrichtung aus");

                            case "Guard of Johanna":
                                return new Kanai.Equipment('Johannas Schutzschild', "Erhöht den Schaden der ersten 3 getroffenen Gegner von 'Gesegneter Hammer' um 250%.");

                            case "Hallowed Bulwark":
                                return new Kanai.Equipment('Geheiligtes Bollwerk', "'Eisenhaut' erhöht zusätzlich Euren Blockwert um 60%");

                            case "Akarat's Awakening":
                                return new Kanai.Equipment('Akarats Erwachen', 'Jedes erfolgreiche Blocken eines Angriffs hat eine Chance von 20–25%, jegliche Abklingzeiten um 1 Sek. zu reduzieren');

                            case "Frydehr's Wrath":
                                return new Kanai.Equipment('Frydehrs Zorn', "'Schuldspruch' hat keine Abklingzeit mehr, aber kostet 40 Zorn");

                            case "Piro Marella":
                                return new Kanai.Equipment("Piro Marella", "Reduziert die Zornkosten von 'Schildstoß' um 50%");

                            case "Jekangbord":
                                return new Kanai.Equipment('Jekangbrett', "'Gesegneter Schild' springt auf bis zu 4–6 weitere Gegner über");

                            case "Hellskull":
                                return new Kanai.Equipment('Höllenschädel', 'Erhöht Euren Schaden um 10%, wenn Ihr eine Zweihandwaffe verwendet');

                            case "The Final Witness":
                                return new Kanai.Equipment('Der letzte Zeuge', "'Gleißender Schild' trifft jetzt sämtliche Gegner, die Euch umgeben");

                            case "Salvation":
                                return new Kanai.Equipment('Erlösung', 'Wenn Ihr einen Angriff blockt, werdet Ihr und Eure Verbündeten um 20–30% des geblockten Betrags geheilt');

                            case "Unrelenting Phalanx":
                                return new Kanai.Equipment('Unnachgiebige Phalanx', "'Phalanx' wird 2-mal ausgelöst");

                            case "Sublime Conviction":
                                return new Kanai.Equipment('Erhabene Überzeugung', 'Wenn Ihr einen Angriff blockt, habt Ihr basierend auf Eurer aktuellen Menge Zorn eine Chance von bis zu 15–20%, den Angreifer 1,5 Sek. lang zu betäuben');

                            case "Henri's Perquisition":
                                return new Kanai.Equipment('Henris ewige Jagd', 'Wenn ein Gegner Euch zum ersten Mal trifft, wird dieser Schaden um 60–80% reduziert. Darüber hinaus wird der Gegner 3 Sek. lang betört.');

                            case "Homunculus":
                                return new Kanai.Equipment('Homunkulus', 'Alle 2 Sek. wird automatisch ein Zombiehund beschworen, der an Eurer Seite kämpft');

                            case "Uhkapian Serpent":
                                return new Kanai.Equipment('Uhkapische Schlange', '25–30% des Euch zugefügten Schadens wird auf Eure Zombiehunde umgelenkt');

                            case "Light of Grace":
                                return new Kanai.Equipment('Licht der Gnade', "'Froststrahl' durchschlägt jetzt Gegner");

                            case "Shukrani's Triumph":
                                return new Kanai.Equipment('Shukranis Triumph', "'Geistwandler' hält an, bis Ihr angreift oder sich ein Gegner innerhalb von 30 Metern von Euch befindet");

                            case "Myken's Ball of Hate":
                                return new Kanai.Equipment('Mykens Hasskugel', "'Stromschlag' kann auf Gegner überspringen, die bereits getroffen wurden");

                            case "The Oculus":
                                return new Kanai.Equipment('Der Oculus', "Chance von bis zu 20%, die Abklingzeit von 'Teleportation' zurückzusetzen, wenn Ihr Schaden erleidet");

                            case "Bombardier's Rucksack":
                                return new Kanai.Equipment('Rucksack des Bombenschützen', 'Ihr könnt 2 zusätzliche Geschütztürme gleichzeitig aktiv haben');

                            case "Winter Flurry":
                                return new Kanai.Equipment('Wintereile', "Es besteht eine Chance von 15–20%, dass Gegner, die durch Kälteschaden sterben, 'Frostnova' auslösen");

                            case "Triumvirate":
                                return new Kanai.Equipment('Triumvirat', "Eure Kernzauber erhöhen den Schaden von 'Arkane Kugel' 6 Sek. lang um 100%. Bis zu 3-mal stapelbar.");

                            case "Emimei's Duffel":
                                return new Kanai.Equipment('Emimeis tiefer Beutel', 'Bolas explodieren jetzt ohne Verzögerung');

                            case "Meticulous Bolts":
                                return new Kanai.Equipment('Akkurate Bolzen', "Der Kugelblitz von 'Elementarpfeil' bewegt sich mit einer Geschwindigkeit von 30–40%");

                            case "The Ninth Cirri Satchel":
                                return new Kanai.Equipment('Neunter Köcher des Cirri', "'Hungriger Pfeil' hat eine zusätzliche Chance von 20–25%, das Ziel zu durchschlagen");

                            case "Spines of Seething Hatred":
                                return new Kanai.Equipment('Dornen des brodelnden Hasses', "'Chakram' erzeugt 3–4 Hass");

                            case "Scrimshaw":
                                return new Kanai.Equipment('Walrosszahn', "Reduziert die Manakosten von 'Zombieangreifer' um 40–50%.");

                            case "SuWong Diviner":
                                return new Kanai.Equipment('Wünschelrute von Su Wong', "'Säurewolke' erhält den Effekt der Rune 'Schleimschmeißer'.");

                            case "Golden Scourge":
                                return new Kanai.Equipment("Goldgeißel", "'Niederstrecken' springt jetzt auf 3 weitere Gegner über");
                            case "Remorseless":
                                return new Kanai.Equipment("Unbarmherzigkeit", "'Hammer der Urahnen' hat eine Chance von 30%, für 20 Sek. einen Urahnen zu beschwören");
                            case "Cinder Switch":
                                return new Kanai.Equipment("Aschebeil", "Chance von 50%, einen Feuerball zu wirken, wenn Ihr angreift");
                            case "Sunder":
                                return new Kanai.Equipment("Zerfetzer", "Chance von 50%, den Boden unter den Füßen Eurer Gegner aufbrechen zu lassen, wenn Ihr angreift");
                            case "Ahavarion, Spear of Lycander":
                                return new Kanai.Equipment("Ahavarion, Stab von Lycander", "Es besteht eine Chance, dass beim Töten eines Dämons ein zufälliger Schreineffekt auf Euch gewirkt wird");
                            case "Buriza-Do Kyanon":
                                return new Kanai.Equipment("Buriza-Do Kyanon", "Eure Geschosse durchschlagen ihre Ziele zusätzlich 2-mal");
                            case "Wall of Man":
                                return new Kanai.Equipment("Mauer der Menschheit", "Chance von 20–30%, Euch mit einem Knochenschild zu umgeben, wenn Ihr getroffen werdet");

                            //Jewelry

                            case "Golden Gorget of Leoric":
                                return new Kanai.Equipment('Leorics goldenes Gorget', 'Nach Erhalt eines Massakerbonus werden 6 Skelettwächter beschworen, die 10 Sek. lang an Eurer Seite kämpfen');

                            case "Kymbo's Gold":
                                return new Kanai.Equipment('Kymbos Gold', 'Wenn Ihr Gold aufsammelt, werdet Ihr um den gleichen Betrag geheilt');

                            case "Mara's Kaleidoscope":
                                return new Kanai.Equipment('Maras Kaleidoskop', 'Ignoriert sämtlichen eintreffenden Giftschaden und heilt Euch um 10–15% der ignorierten Menge');

                            case "Moonlight Ward":
                                return new Kanai.Equipment('Mondlichtschutz', 'Wenn Ihr einen Gegner im Umkreis von 15 Metern trefft, besteht die Chance, dass Ihr von Splittern arkaner Energie geschützt werdet. Diese explodieren, wenn sich Gegner nähern, und fügen Gegnern im Umkreis von 15 Metern 240–320% Waffenschaden als Arkanschaden zu.');

                            case "Overwhelming Desire":
                                return new Kanai.Equipment('Überwältigendes Verlangen', 'Chance, bei einem Treffer den Gegner zu betören. Betörte Gegner erleiden 35% mehr Schaden.');

                            case "Rakoff's Glass of Life":
                                return new Kanai.Equipment('Rakoffs Glas des Lebens', 'Gegner, die Ihr tötet, haben eine zusätzliche Chance von 4%, eine Heilkugel fallen zu lassen');

                            case "Hellfire Ring":
                                return new Kanai.Equipment("Höllenfeuerring", "Ihr feuert manchmal eine explosive Höllenfeuerkugel ab, wenn Ihr angreift");

                            case "Talisman of Aranoch":
                                return new Kanai.Equipment('Talisman von Aranoch', 'Ignoriert sämtlichen eintreffenden Kälteschaden und heilt Euch um 10–15% der ignorierten Menge');

                            case "The Ess of Johan":
                                return new Kanai.Equipment('Johanns Essenz', 'Chance, Gegner bei einem Treffer zu Eurem Ziel zu ziehen und sie um 60–80% zu verlangsamen');

                            case "The Star of Azkaranth":
                                return new Kanai.Equipment('Der Stern von Azkaranth', 'Ignoriert sämtlichen eintreffenden Feuerschaden und heilt Euch um 10–15% der ignorierten Menge');

                            case "Xephirian Amulet":
                                return new Kanai.Equipment('Xephirisches Amulett', 'Ignoriert sämtlichen eintreffenden Blitzschaden und heilt Euch um 10–15% der ignorierten Menge');

                            case "Arcstone":
                                return new Kanai.Equipment('Arcusstein', 'Blitze springen regelmäßig zwischen allen Trägern dieses Gegenstands über und verursachen 1000–1500% Waffenschaden');

                            case "Avarice Band":
                                return new Kanai.Equipment('Band der Habgier', 'Jedes Mal, wenn Ihr Gold aufsammelt, wird Euer Gold- und Kugelsammelradius für 10 Sek. um 1 Meter erhöht. Bis zu 30-mal stapelbar');

                            case "Mirrorball":
                                return new Kanai.Equipment('Spiegelkugel', "'Magisches Geschoss' verschießt 2 zusätzliche Geschosse");

                            case "Dead Man's Legacy":
                                return new Kanai.Equipment('Vermächtnis des toten Mannes', "'Mehrfachschuss' trifft Gegner, die weniger als 60% Leben haben, zweimal");

                            case "Band of Hollow Whispers":
                                return new Kanai.Equipment('Band des leeren Raunens', 'Dieser Ring sucht gelegentlich Gegner in der Nähe heim');

                            case "Dovu Energy Trap":
                                return new Kanai.Equipment('Energiefalle von Dovu', 'Erhöht die Dauer von Betäubungseffekten um 20–25%');

                            case "Countess Julia's Cameo":
                                return new Kanai.Equipment('Kamee von Gräfin Julia', 'Ignoriert sämtlichen eintreffenden Arkanschaden und heilt Euch um 20–25% der ignorierten Menge');

                            case "Bul'Kathos's Wedding Band":
                                return new Kanai.Equipment("Bul-Kathos' Hochzeitsring", "Ihr saugt Gegnern um Euch herum das Leben aus");

                            case "Halo of Arlyse":
                                return new Kanai.Equipment('Arlyses Halo', "Eure Eisrüstung reduziert nun den durch Nahkampfangriffe erlittenen Schaden um 50–60% und wirkt zusätzlich jedes Mal automatisch 'Frostnova', wenn Ihr mindestens 10% Eures Lebens an Schaden erlitten habt");

                            case "Broken Promises":
                                return new Kanai.Equipment('Gebrochene Versprechen', 'Nach 5 aufeinanderfolgenden Treffern ohne kritischen Treffer wird Eure Chance, einen kritischen Treffer zu landen, 3 Sek. lang auf 100% erhöht');

                            case "Band of the Rue Chambers":
                                return new Kanai.Equipment('Band der Reuekammern', 'Geisteskrafterzeuger erzeugen 40–50% mehr Geisteskraft');

                            case "Haunt of Vaxo":
                                return new Kanai.Equipment('Vaxos Heimsuchung', 'Ruft Schattenklone zu Eurer Hilfe, wenn Ihr einen Gegner betäubt. Dieser Effekt kann nur einmal alle 30 Sek. auftreten');

                            case "Eternal Union":
                                return new Kanai.Equipment('Ewige Einheit', "Erhöht die Dauer der Avatare von 'Phalanx' um 200%");

                            case "Nagelring":
                                return new Kanai.Equipment('Nagelring', 'Ruft alle 10–12 Sek. einen Irren der Gefallenen herbei, der an Eurer Seite kämpft');

                            case "Convention of Elements":
                                return new Kanai.Equipment('Zusammenkunft der Elemente', 'Erhöht den Schaden einer Schadensart 4 Sek. lang um 150–200%. Der Effekt rotiert in folgender Reihenfolge zwischen den einzelnen Schadensarten, sofern sie Eurer Klasse zur Verfügung stehen: Arkan, Kälte, Feuer, Heilig, Blitz, Physisch, Gift');

                            case "Oculus Ring":
                                return new Kanai.Equipment('Oculus-Ring', 'Wenn Ihr einen Gegner tötet, besteht eine Chance, dass ein Bereich fokussierter Macht entsteht. Charaktere, die sich in diesem Bereich aufhalten, verursachen um 35–40% erhöhten Schaden.');

                            case "Krede's Flame":
                                return new Kanai.Equipment('Kredes Flamme', 'Wenn Ihr Feuerschaden erleidet, wird Eure Primärressource wiederhergestellt');

                            case "Pandemonium Loop":
                                return new Kanai.Equipment('Reif des Wahnsinns', 'Gegner, die getötet werden, während sie von Furcht ergriffen sind, sterben in einer blutigen Explosion und lassen Gegner in der Nähe vor Furcht fliehen');

                            case "Rechel's Ring of Larceny":
                                return new Kanai.Equipment('Rechels Ring des Diebstahls', 'Eure Bewegungsgeschwindigkeit wird 4 Sek. lang um 45–60% erhöht, nachdem Ihr einen Gegner mit Furcht erfüllt habt');

                            case "Puzzle Ring":
                                return new Kanai.Equipment('Flechtring', 'Beschwört einen Schatzgoblin, der Gegenstände normaler Qualität für Euch aufsammelt. Nachdem er 12–16 Gegenstände aufgesammelt hat, lässt er einen seltenen Gegenstand oder möglicherweise einen legendären fallen.');

                            case "Obsidian Ring of the Zodiac":
                                return new Kanai.Equipment('Obsidianring des Tierkreises', 'Reduziert die verbleibende Abklingzeit einer Eurer Fertigkeiten um 1 Sek., wenn ein Ressourcen verbrauchender Angriff einen Gegner trifft');

                            case "Skull Grasp":
                                return new Kanai.Equipment('Schädelgriff', "Erhöht den Waffenschaden von 'Wirbelwind' um 400%");

                            case "Ring of Royal Grandeur":
                                return new Kanai.Equipment('Ring des königlichen Prunks', 'Reduziert die Anzahl der für Setboni benötigten Gegenstände um 1 (auf ein Minimum von 2)');
                            case "Rogar's Huge Stone":
                                return new Kanai.Equipment('Rogars riesiger Stein', 'Erhöht Euer Leben pro Sekunde um bis zu 75–100%, basierend auf Eurem verlorenen Leben');
                            case "Unity":
                                return new Kanai.Equipment('Einheit', 'Jeglicher erlittene Schaden wird zwischen den Trägern dieses Gegenstands geteilt');
                            case "The Short Man's Finger":
                                return new Kanai.Equipment('Ring des kleinen Mannes', "'Koloss' beschwört nun drei kleinere Kolosse, die alle stärker sind als der vorherige");
                            case "The Tall Man's Finger":
                                return new Kanai.Equipment('Ring des großen Mannes', "'Zombiehund' beschwört einen einzelnen riesigen Hund, der mehr Schaden verursacht und über mehr Leben verfügt als alle anderen Hunde zusammen");
                            case "In-geom":
                                return new Kanai.Equipment("In-geom", "Die Abklingzeiten Eurer Fertigkeiten werden jedes Mal 15 Sek. lang um 10 Sek. reduziert, wenn Ihr eine Gruppe von Elitegegnern tötet");
                            case "Cosmic Strand":
                                return new Kanai.Equipment("Kosmischer Strang", "'Teleportation' erhält den Effekt der Rune 'Wurmloch'");
                            case "Wyrdward":
                                return new Kanai.Equipment('Wyrdschutz', 'Blitzschaden hat eine Chance von 25–35%, Gegner 1,5 Sek. lang zu betäuben');

                            default:
                                return item;

                        }
                    }


            }
        } catch (ex) {

        }
    },
    getArmor(target, culture?: string) {
        switch (this.culture()) {
            case "en-US":
            default:
                {
                    target.push(ko.observable(new Kanai.Equipment("Ancient Parthan Defenders", "Each stunned enemy within 25 yards reduces your damage taken by 12%.")));
                    target.push(ko.observable(new Kanai.Equipment("Gungdo Gear", "Exploding Palm's on-death explosion applies Exploding Palm.")));
                    target.push(ko.observable(new Kanai.Equipment("Andariel's Visage", "Attacks release a Poison Nova that deals 450% weapon damage as Poison to enemies within 10 yards.")));
                    target.push(ko.observable(new Kanai.Equipment("Broken Crown", "Whenever a gem drops, a gem of the type socketed into this item also drops.")));
                    target.push(ko.observable(new Kanai.Equipment("Deathseer's Cowl", "20% chance on being hit by an Undead enemy to charm it for 2 seconds.")));
                    target.push(ko.observable(new Kanai.Equipment("Leorics Crown", "Increase the effect of any gem socketed into this item by 100%.")));
                    target.push(ko.observable(new Kanai.Equipment("Pride's Fall", "Your resource costs are reduced by 30% after not taking damage for 5 seconds")));
                    target.push(ko.observable(new Kanai.Equipment("Skull of Resonance", "Threatening Shout has a chance to Charm enemies and cause them to join your side.")));
                    target.push(ko.observable(new Kanai.Equipment("Eye of Peshkov", "Reduce the cooldown of Breath of Heaven by 50%.")));
                    target.push(ko.observable(new Kanai.Equipment("Gyana Na Kashu", "Lashing Tail Kick releases a piercing fireball that deals 700% weapon damage as Fire to enemies within 10 yards on impact.")));
                    target.push(ko.observable(new Kanai.Equipment("Kekegi's Unbreakable Spirit", "Damaging enemies has a chance to grant you an effect that removes the Spirit cost of your abilities for 4 seconds.")));
                    target.push(ko.observable(new Kanai.Equipment("Madstone", "Your Seven-Sided Strike applies Exploding Palm.")));
                    target.push(ko.observable(new Kanai.Equipment("The Laws of Seph", "Using Blinding Flash restores 165 Spirit.")));
                    target.push(ko.observable(new Kanai.Equipment("The Mind's Eye", "Inner Sanctuary increases Spirit Regeneration per second by 15.")));
                    target.push(ko.observable(new Kanai.Equipment("Tzo Krin's Gaze", "Wave of Light is now cast at your enemy.")));
                    target.push(ko.observable(new Kanai.Equipment("Carnevil", "Your Fetishes shoot a Poison Dart every time you do.")));
                    target.push(ko.observable(new Kanai.Equipment("Mask of Jeram", "Pets deal 75–100% more damage.")));
                    target.push(ko.observable(new Kanai.Equipment("Quetzalcoatl", "Locust Swarm and Haunt now deal their damage in half of the normal duration.")));
                    target.push(ko.observable(new Kanai.Equipment("The Grin Reaper", "Chance to summon horrific Mimics when attacking.")));
                    target.push(ko.observable(new Kanai.Equipment("Tiklandian Visage", "Horrify causes you to Fear and Root enemies around you for 6–8 seconds.")));
                    target.push(ko.observable(new Kanai.Equipment("Visage of Giyua", "Summon a Fetish Army after you kill 2 Elites.")));
                    target.push(ko.observable(new Kanai.Equipment("Archmage's Vicalyke", "Your Mirror Images have a chance to multiply when killed by enemies.")));
                    target.push(ko.observable(new Kanai.Equipment("Crown of the Primus", "Slow Time gains the effect of every rune.")));
                    target.push(ko.observable(new Kanai.Equipment("Dark Mage's Shade", "Automatically cast Diamond Skin when you fall below 35% Life. This effect may occur once every 15 seconds.")));
                    target.push(ko.observable(new Kanai.Equipment("Storm Crow", "40% chance to cast a fiery ball when attacking.")));
                    target.push(ko.observable(new Kanai.Equipment("The Magistrate", "Frost Hydra now periodically casts Frost Nova.")));
                    target.push(ko.observable(new Kanai.Equipment("The Swami", "The bonuses from Archon stacks now last for 15-20 seconds after Archon expires.")));
                    target.push(ko.observable(new Kanai.Equipment("Velvet Camaral", "Double the number of enemies your Electrocute jumps to.")));
                    target.push(ko.observable(new Kanai.Equipment("Death Watch Mantle", "35% chance to explode in a fan of knives for 750-950% weapon damage when hit.")));
                    target.push(ko.observable(new Kanai.Equipment("Fury of the Ancients", "Call of the Ancients gains the effect of the Ancients' Fury rune.")));
                    target.push(ko.observable(new Kanai.Equipment("Homing Pads", "Your Town Portal is no longer interrupted by taking damage. While casting Town Portal you gain a protective bubble that reduces damage taken by 65%.")));
                    target.push(ko.observable(new Kanai.Equipment("Pauldrons of the Skeleton King", "When receiving fatal damage, there is a chance that you are instead restored to 25% of maximum Life and cause nearby enemies to flee in fear.")));
                    target.push(ko.observable(new Kanai.Equipment("Spaulders of Zakara", "Your items become indestructible.")));
                    target.push(ko.observable(new Kanai.Equipment("Vile Ward", "Furious Charge deals 35% increased damage for every enemy hit while charging.")));
                    target.push(ko.observable(new Kanai.Equipment("Armor of the Kind Regent", "Smite will now also be cast at a second nearby enemy.")));
                    target.push(ko.observable(new Kanai.Equipment("Chaingmail", "After earning a survival bonus, quickly heal to full Life.")));
                    target.push(ko.observable(new Kanai.Equipment("Cindercoat", "Reduces the resource cost of Fire skills by 30%.")));
                    target.push(ko.observable(new Kanai.Equipment("Goldskin", "Chance for enemies to drop gold when you hit them.")));
                    target.push(ko.observable(new Kanai.Equipment("Shi Mizu's Haori", "While below 25% Life, all attacks are guaranteed Critical Hits.")));
                    target.push(ko.observable(new Kanai.Equipment("Beckon Sail", "When receiving fatal damage, you instead automatically cast Smoke Screen and are healed to 25% Life. This effect may occur once every 120 seconds.")));
                    target.push(ko.observable(new Kanai.Equipment("Blackfeather", "Dodging or getting hit by a ranged attack automatically shoots a homing rocket back at the attacker for 800% weapon damage as Physical.")));
                    target.push(ko.observable(new Kanai.Equipment("Cape of the Dark Night", "Automatically drop Caltrops when you are hit. This effect may only occur once every 6 seconds.")));
                    target.push(ko.observable(new Kanai.Equipment("Cloak of Deception", "Enemy missiles sometimes pass through you harmlessly.")));
                    target.push(ko.observable(new Kanai.Equipment("The Cloak of the Garwulf", "Companion - Wolf Companion now summons 3 wolves.")));
                    target.push(ko.observable(new Kanai.Equipment("Bracers of Destruction", "Seismic Slam deals 400% increased damage to the first two enemies it hits.")));
                    target.push(ko.observable(new Kanai.Equipment("Bracers of the First Men", "Hammer of the Ancients attacks 50% faster and deals 200% increased damage.")));
                    target.push(ko.observable(new Kanai.Equipment("Coils of the First Spider", "While channeling Firebats, gain 80,000 Life per Hit.")));
                    target.push(ko.observable(new Kanai.Equipment("Custerian Wristguards", "Picking up gold grants experience.")));
                    target.push(ko.observable(new Kanai.Equipment("Drakon's Lesson", "When your Shield Bash hits 3 or less enemies, its damage is increased by 200% and 25% of its Wrath Cost is refunded.")));
                    target.push(ko.observable(new Kanai.Equipment("Gabriel's Vambraces", "When your Blessed Hammer hits 3 or fewer enemies, 100% of its Wrath Cost is refunded.")));
                    target.push(ko.observable(new Kanai.Equipment("Jeram's Bracers", "Wall of Death can be cast up to twice again within 2 seconds before the cooldown begins.")));
                    target.push(ko.observable(new Kanai.Equipment("Krelm's Buff Bracers", "You are immune to Knockback and Stun effects.")));
                    target.push(ko.observable(new Kanai.Equipment("Nemesis Bracers", "Shrines and Pylons will spawn an enemy champion.")));
                    target.push(ko.observable(new Kanai.Equipment("Promise of Glory", "6% chance to spawn a Nephalem Glory globe when you Blind an enemy.")));
                    target.push(ko.observable(new Kanai.Equipment("Ranslor's Folly", "Energy Twister periodically pulls in lesser enemies within 30 yards.")));
                    target.push(ko.observable(new Kanai.Equipment("Reaper's Wraps", "Health globes restore 30% of your primary resource.")));
                    target.push(ko.observable(new Kanai.Equipment("Sanguinary Vambracers", "Chance on being hit to deal 1000% of your Thorns damage to nearby enemies.")));
                    target.push(ko.observable(new Kanai.Equipment("Spirit Guards", "Your Spirit Generators reduce your damage taken by 40% for 3 seconds.")));
                    target.push(ko.observable(new Kanai.Equipment("Strongarm Bracers", "Enemies hit by knockbacks suffer 30% more damage for 5 seconds when they land.")));
                    target.push(ko.observable(new Kanai.Equipment("Trag'Oul Coils", "Healing wells replenish all resources and reduce all cooldowns by 60 seconds.")));
                    target.push(ko.observable(new Kanai.Equipment("Warzechian Armguards", "Every time you destroy a wreckable object, you gain a short burst of speed.")));
                    target.push(ko.observable(new Kanai.Equipment("Wraps of Clarity", "Your Hatred Generators reduce your damage taken by 30-35% for 5 seconds.")));
                    target.push(ko.observable(new Kanai.Equipment("Frostburn", "Your Cold damage has up to a 45% chance to Freeze enemies.")));
                    target.push(ko.observable(new Kanai.Equipment("Gladiator Gauntlets", "After earning a massacre bonus, gold rains from sky.")));
                    target.push(ko.observable(new Kanai.Equipment("Gloves of Worship", "Shrine effects last for 10 minutes.")));
                    target.push(ko.observable(new Kanai.Equipment("St. Archew's Gage", "The first time an elite pack damages you, gain an absorb shield equal to 150% of your maximum Life for 10 seconds.")));
                    target.push(ko.observable(new Kanai.Equipment("Tasker and Theo", "Increase attack speed of your pets by 50%.")));
                    target.push(ko.observable(new Kanai.Equipment("Angel Hair Braid", "Punish gains the effect of every rune.")));
                    target.push(ko.observable(new Kanai.Equipment("Belt of the Trove", "Every 6–8 seconds, call down Bombardment on a random nearby enemy.")));
                    target.push(ko.observable(new Kanai.Equipment("Belt of Transcendence", "Summon a Fetish Sycophant when you hit with a Mana spender.")));
                    target.push(ko.observable(new Kanai.Equipment("Binding of the Lost", "Each hit with Seven-Sided Strike grants 3.5% damage reduction for 7 seconds.")));
                    target.push(ko.observable(new Kanai.Equipment("Blessed of Haull", "Justice spawns a Blessed Hammer when it hits an enemy.")));
                    target.push(ko.observable(new Kanai.Equipment("Cord of the Sherma", "Chance on hit to create a chaos field that Blinds and Slows enemies inside for 4 seconds.")));
                    target.push(ko.observable(new Kanai.Equipment("Crashing Rain", "Rain of Vengeance also summons a crashing beast that deals 4000% weapon damage.")));
                    target.push(ko.observable(new Kanai.Equipment("Fazula's Improbable Chain", "You automatically start with 20 Archon stacks when entering Archon form.")));
                    target.push(ko.observable(new Kanai.Equipment("Goldwrap", "On gold pickup: Gain armor for 5 seconds equal to the amount picked up.")));
                    target.push(ko.observable(new Kanai.Equipment("Harrington Waistguard", "Opening a chest grants 135% increased damage for 10 seconds.")));
                    target.push(ko.observable(new Kanai.Equipment("Haunting Girdle", "Haunt releases 1 extra spirit.")));
                    target.push(ko.observable(new Kanai.Equipment("Hunter's Wrath", "Your Hatred generators attack 30% faster and deal 40% increased damage.")));
                    target.push(ko.observable(new Kanai.Equipment("Hwoj Wrap", "Locust Swarm also Slows enemies by 80%.")));
                    target.push(ko.observable(new Kanai.Equipment("Insatiable Belt", "Picking up a Health Globe increases your maximum Life by 5% for 15 seconds, stacking up to 5 times")));
                    target.push(ko.observable(new Kanai.Equipment("Jang's Envelopment", "Enemies damaged by Black Hole are also slowed by 80% for 3 seconds.")));
                    target.push(ko.observable(new Kanai.Equipment("Krelm's Buff Belt", "Gain 25% run speed. This effect is lost for 5 seconds after taking damage.")));
                    target.push(ko.observable(new Kanai.Equipment("Omnislash", "Slash attacks in all directions.")));
                    target.push(ko.observable(new Kanai.Equipment("Omryn's Chain", "Drop Caltrops when using Vault.")));
                    target.push(ko.observable(new Kanai.Equipment("Razor Strop", "Picking up a Health Globe releases an explosion that deals 400% weapon damage as Fire to enemies within 20 yards.")));
                    target.push(ko.observable(new Kanai.Equipment("Sacred Harness", "Judgment is cast at your landing location when casting Falling Sword.")));
                    target.push(ko.observable(new Kanai.Equipment("Sash of Knives", "With every attack, you throw a dagger at a nearby enemy for 650% weapon damage as Physical.")));
                    target.push(ko.observable(new Kanai.Equipment("Sebor's Nightmare", "Haunt is cast on all nearby enemies when you open a chest.")));
                    target.push(ko.observable(new Kanai.Equipment("Thundergod's Vigor", "Blocking, dodging or being hit causes you to discharge bolts of electricity that deal 130% weapon damage as Lightning.")));
                    target.push(ko.observable(new Kanai.Equipment("Chilanik's Chain", "Using War Cry increases the movement speed for you and all allies affected by 40% for 10 seconds.")));
                    target.push(ko.observable(new Kanai.Equipment("Lamentation", "Rend can now stack up to 2 times on an enemy.")));
                    target.push(ko.observable(new Kanai.Equipment("Pride of Cassius", "Increases the duration of Ignore Pain by 6 seconds.")));
                    target.push(ko.observable(new Kanai.Equipment("The Undisputed Champion", "Frenzy gains the effect of every rune.")));
                    target.push(ko.observable(new Kanai.Equipment("Death's Bargain", "Gain an aura of death that deals 1000% of your Life per Second to enemies within 20 yards. You no longer regenerate Life")));
                    target.push(ko.observable(new Kanai.Equipment("Depth Diggers", "Primary skills that generate resource deal 100% additional damage.")));
                    target.push(ko.observable(new Kanai.Equipment("Hexing Pants of Mr. Yan", "Your resource generation and damage is increased by 25% while moving and decreased by 20% while standing still.")));
                    target.push(ko.observable(new Kanai.Equipment("Pox Faulds", "When 3 or more enemies are within 12 yards, you release a vile stench that deals 550%weapon damage as Poison every second for 5 seconds to enemies within 15 yards.")));
                    target.push(ko.observable(new Kanai.Equipment("Boots of Disregard", "Gain 10000 Life Regeneration per second for each second you stand still. This effect stacks up to 8 times")));
                    target.push(ko.observable(new Kanai.Equipment("Fire Walkers", "Burn the ground you walk on, dealing 400% weapon damage each second.")));
                    target.push(ko.observable(new Kanai.Equipment("Ice Climbers", "Gain immunity to Freeze and Immobilize effects.")));
                    target.push(ko.observable(new Kanai.Equipment("Illusory Boots", "You may move unhindered through enemies.")));
                    target.push(ko.observable(new Kanai.Equipment("Irontoe Mudsputters", "Gain up to 30% increased movement speed based on amount of Life missing.")));
                    target.push(ko.observable(new Kanai.Equipment("Lut Socks", "Leap can be cast again within 2 seconds before the cooldown begins.")));
                    target.push(ko.observable(new Kanai.Equipment("Nilfur's Boast", "Increase the damage of Meteor by 100%. When your Meteor hits 3 or less enemies, the damage is increased by 200%.")));
                    target.push(ko.observable(new Kanai.Equipment("The Crudest Boots", "Mystic Ally summons two Mystic Allies that fight by your side.")));
                    target.push(ko.observable(new Kanai.Equipment("Dread Iron", "Ground Stomp causes an Avalanche.")));
                    target.push(ko.observable(new Kanai.Equipment('Eiskletterer', 'Ihr erhaltet Immunität gegen Einfrierungs- und Bewegungsunfähigkeitseffekte')));
                    break;
                }
            case "de-DE":
                {
                    target.push(ko.observable(new Kanai.Equipment("Blutrünstige Unterarmschienen", "Wenn Ihr getroffen werdet, besteht eine Chance, dass Ihr Gegnern in der Nähe 1.000% Eures Dornenschadens zufügt")));
                    target.push(ko.observable(new Kanai.Equipment("Wickeltuch des Seelenernters", "Heilkugeln stellen 30% Eurer Primärressource wieder her")));
                    target.push(ko.observable(new Kanai.Equipment('Uralte parthanische Schützer', "Für jeden betäubten Gegner im Umkreis von 25 Metern erleidet Ihr 12% weniger Schaden")));
                    target.push(ko.observable(new Kanai.Equipment('Zerbrochene Krone', 'Jedes Mal, wenn ein Edelstein fallen gelassen wird, wird ebenfalls ein Edelstein des Typs fallen gelassen, der in diesen Helm gesockelt wurde.')));
                    target.push(ko.observable(new Kanai.Equipment('Andariels Antlitz', 'Angriffe lösen eine Giftnova aus, die allen Feinden innerhalb von 10 Metern 350–450% Waffenschaden als Giftschaden zufügt')));
                    target.push(ko.observable(new Kanai.Equipment('Leorics Krone', 'Verstärkt die Wirkung jedes Edelsteins, der in diesen Gegenstand eingesetzt ist, um 75–100%.')));
                    target.push(ko.observable(new Kanai.Equipment('Gungdo-Schienen', "Die durch 'Explodierende Hand' ausgelöste Explosion beim Tod fügt allen erfassten Gegnern den Effekt von 'Explodierende Hand' hinzu ")));
                    target.push(ko.observable(new Kanai.Equipment('Gugel des Todessehers', 'Es besteht eine Chance von 15–20%, dass Ihr einen untoten Gegner 2 Sek. lang betört, wenn Ihr von ihm getroffen werdet')));
                    target.push(ko.observable(new Kanai.Equipment('Fall des Hochmuts', 'Wenn Ihr 5 Sek. lang keinen Schaden erleidet, werden Eure Ressourcenkosten um 30% reduziert')));
                    target.push(ko.observable(new Kanai.Equipment('Resonanzschädel', "'Drohruf' hat eine Chance, Gegner zu betören und sie auf Eure Seite überlaufen zu lassen")));
                    target.push(ko.observable(new Kanai.Equipment('Auge von Peshkov', "Reduziert die Abklingzeit von 'Odem des Himmels' um 38–50%")));
                    target.push(ko.observable(new Kanai.Equipment('Gyana Na Kashu', "'Fegender Tritt' entfesselt einen durchschlagenden Feuerball, der allen Gegnern im Umkreis von 10 Metern vom Aufschlagsort 525–700% Waffenschaden als Feuerschaden zufügt")));
                    target.push(ko.observable(new Kanai.Equipment('Kekegis unbezwingbarer Geist', 'Chance, einen Effekt zu erhalten, der die Geisteskraftkosten Eurer Fertigkeiten 2–4 Sek. lang aufhebt, wenn Ihr einem Gegner Schaden zufügt')));
                    target.push(ko.observable(new Kanai.Equipment('Irrstein', "'Schlag der Sieben Fäuste' belegt getroffene Gegner mit 'Explodierende Hand'")));
                    target.push(ko.observable(new Kanai.Equipment('Sephs Gesetze', "Die Anwendung von 'Lichtblitz' stellt 165 Geisteskraft wieder her")));
                    target.push(ko.observable(new Kanai.Equipment('Das innere Auge', "'Heilige Einkehr' erhöht die Geisteskraftregeneration pro Sekunde um 10–15")));
                    target.push(ko.observable(new Kanai.Equipment('Tzo Krins Blick', "'Woge des Lichts' wird jetzt an der Position Eures Ziels ausgelöst")));
                    target.push(ko.observable(new Kanai.Equipment('Karnevalfratze', 'Wenn Ihr einen Giftpfeil abschießt, verschießen Eure 5 am nächsten stehenden Fetische jedes Mal einen zusätzlichen Giftpfeil')));
                    target.push(ko.observable(new Kanai.Equipment('Jerams Maske', 'Diener verursachen 75–100% mehr Schaden')));
                    target.push(ko.observable(new Kanai.Equipment('Quetzalcoatl', "'Heuschreckenplage' und 'Heimsuchung' verursachen ihren Schaden jetzt in der Hälfte der Zeit")));
                    target.push(ko.observable(new Kanai.Equipment('Gevatter Grins', 'Wenn Ihr angreift, habt Ihr eine Chance schreckliche Abbilder zu beschwören, die einige Eurer aktiven Fertigkeiten einsetzen können.')));
                    target.push(ko.observable(new Kanai.Equipment('Tiklandische Fratze', "'Entsetzen' erfüllt Gegner in Eurer Nähe 6–8 Sek. lang mit Furcht und macht sie bewegungsunfähig")));
                    target.push(ko.observable(new Kanai.Equipment('Fratze von Giyua', 'Beschwört eine Fetischarmee, nachdem Ihr 2 Elitegegner getötet habt')));
                    target.push(ko.observable(new Kanai.Equipment('Kamelaukion des Erzmagiers', 'Eure Spiegelbilder haben eine Chance, sich zu vermehren, wenn sie von Gegnern getötet werden')));
                    target.push(ko.observable(new Kanai.Equipment('Die Krone des Primus', "'Zeit verlangsamen' erhält den Effekt jeder Rune")));
                    target.push(ko.observable(new Kanai.Equipment('Schemen des dunklen Magiers', "Ihr wirkt automatisch 'Diamanthaut', wenn Ihr unter 35% Leben fallt. Dieser Effekt kann nur einmal alle 15–20 Sek. auftreten")));
                    target.push(ko.observable(new Kanai.Equipment('Sturmkrähe', 'Chance von 20–40%, eine feurige Kugel zu wirken, wenn Ihr angreift')));
                    target.push(ko.observable(new Kanai.Equipment('Der Magistrat', "Eure Frosthydra wirkt jetzt in regelmäßigen Abständen 'Frostnova'")));
                    target.push(ko.observable(new Kanai.Equipment("Paulus' Kürass", "Nachdem Ihr einen Überlebensbonus erhalten habt, werdet Ihr in kurzer Zeit vollständig geheilt")));
                    target.push(ko.observable(new Kanai.Equipment('Der Swami', "Die Stärkungseffekte Eurer 'Archon'-Stapel bleiben für 15–20 Sek. bestehen, nachdem 'Archon' nicht mehr aktiv ist.")));
                    target.push(ko.observable(new Kanai.Equipment('Samtkalotte', "Verdoppelt die Anzahl der Ziele, zu denen Euer Zauber 'Stromschlag' überspringt")));
                    target.push(ko.observable(new Kanai.Equipment('Wut der Urahnen', "'Ruf der Urahnen' erhält den Effekt der Rune 'Wut der Urahnen'.")));
                    target.push(ko.observable(new Kanai.Equipment('Zielsuchplatten', 'Euer Stadtportal wird nicht länger unterbrochen, wenn Ihr Schaden erleidet. Beim Wirken des Stadtportals erhaltet Ihr einen schützenden Schild, der den erlittenen Schaden um 50–65% reduziert.')));
                    target.push(ko.observable(new Kanai.Equipment('Todeswachtmantelung', 'Wenn Ihr getroffen werdet, besteht eine Chance von 25–35%, einen Dolchfächer auszulösen, der 750-950% Waffenschaden verursacht')));
                    target.push(ko.observable(new Kanai.Equipment('Schulterpanzer des Skelettkönigs', 'Wenn Ihr tödlichen Schaden erleidet, besteht eine Chance, dass Ihr, statt zu sterben, auf 25% Eures maximalen Lebens geheilt werdet und Gegner in der Nähe von Furcht erfüllt fliehen')));
                    target.push(ko.observable(new Kanai.Equipment('Abscheuschutz', "Der Schaden von 'Wütender Ansturm' wird für jeden betroffenen Gegner um 30–35% erhöht")));
                    target.push(ko.observable(new Kanai.Equipment('Rüstung des gütigen Regenten', "'Niederstrecken' wird jetzt auch auf einen zweiten Gegner in der Nähe gewirkt")));
                    target.push(ko.observable(new Kanai.Equipment('Plattenschultern von Zakara', 'Eure Gegenstände werden unzerstörbar')));
                    target.push(ko.observable(new Kanai.Equipment('Aschemantel', 'Reduziert die Ressourcenkosten von Feuerfertigkeiten um 23–30%')));
                    target.push(ko.observable(new Kanai.Equipment('Goldhaut', 'Gegner lassen manchmal Gold fallen, wenn Ihr sie trefft')));
                    target.push(ko.observable(new Kanai.Equipment('Shi Mizus Haori', 'Wenn Ihr weniger als 20–25% Leben habt, sind alle Angriffe garantierte kritische Treffer')));
                    target.push(ko.observable(new Kanai.Equipment('Locktuch', "Wenn Ihr tödlichen Schaden erleidet, setzt Ihr, statt zu sterben, 'Rauchwolke' ein und werdet auf 25% Eures Lebens geheilt. Dieser Effekt kann einmal alle 120 Sek. auftreten")));
                    target.push(ko.observable(new Kanai.Equipment('Schwarzfeder', 'Wenn Ihr einem Geschoss ausweicht oder von ihm getroffen werdet, schießt Ihr automatisch eine Zielsuchrakete auf den Angreifer, die ihm 600–800% Waffenschaden als physischen Schaden zufügt')));
                    target.push(ko.observable(new Kanai.Equipment('Cape des Schreckens, der die Nacht durchflattert', 'Ihr lasst automatisch Krähenfüße fallen, wenn Ihr getroffen werdet. Dieser Effekt kann nur einmal alle 6 Sek. auftreten')));
                    target.push(ko.observable(new Kanai.Equipment('Der Umhang des Garwulf', "Gefährte - Wolfgefährte' beschwört jetzt 3 Wölfe")));
                    target.push(ko.observable(new Kanai.Equipment('Umhang der Täuschung', 'Gegnerische Geschosse fliegen manchmal harmlos durch Euch hindurch')));
                    target.push(ko.observable(new Kanai.Equipment('Armschienen der Ersten Menschen', "Erhöht die Angriffsgeschwindigkeit von 'Hammer der Urahnen' um 50% und den Schaden um 200%.")));
                    target.push(ko.observable(new Kanai.Equipment('Wickel der Obersten Spinne', "Während Ihr 'Feuerfledermäuse' kanalisiert, wird Euer erlittener Schaden um 30% reduziert und Ihr erhaltet 80000 Leben pro Treffer.")));
                    target.push(ko.observable(new Kanai.Equipment('Armschienen der Zerstörung', "Erhöht den Schaden der ersten 5 getroffenen Gegner von 'Seismisches Schmettern' um 400%.")));
                    target.push(ko.observable(new Kanai.Equipment('Custerische Handgelenkschützer', 'Das Aufsammeln von Gold gewährt Erfahrung')));
                    target.push(ko.observable(new Kanai.Equipment('Drakons Lektion', "Wenn Euer 'Schildstoß' 3 oder weniger Gegner trifft, wird sein Schaden um 150–200% erhöht und 25% seiner Zornkosten werden zurückerstattet.")));
                    target.push(ko.observable(new Kanai.Equipment('Jerams Armschienen', "'Todeswall' verursacht 75–100% mehr Schaden und kann innerhalb von 2 Sek. bis zu dreimal gewirkt werden, bevor die Abklingzeit einsetzt.'")));
                    target.push(ko.observable(new Kanai.Equipment('Gabriels Unterarmschienen', "Wenn 'GesegneterHammer' 3 oder weniger Gegner trifft, werden 75–100% seiner Zornkosten zurückerstattet.")));
                    target.push(ko.observable(new Kanai.Equipment("Krelms Verstärkungsarmschienen", 'Gewährt Immunität gegen Rückstoß und Betäubungseffekte')));
                    target.push(ko.observable(new Kanai.Equipment("Krelms Verstärkungsgürtel", "Erhöht Eure Bewegungsgeschwindigkeit um 25%. Wenn Ihr Schaden erleidet, wird dieser Effekt für 5 Sek. aufgehoben")));
                    target.push(ko.observable(new Kanai.Equipment('Armschienen der Nemesis', 'Schreine und Pylonen lassen einen gegnerischen Champion erscheinen')));
                    target.push(ko.observable(new Kanai.Equipment('Verheißung', 'Ihr habt eine Chance von 4–6%, dass Gegner eine Machtkugel fallen lassen, wenn Ihr sie blendet')));
                    target.push(ko.observable(new Kanai.Equipment('Ranslors Torheit', "'Energiewirbel' zieht in regelmäßigen Abständen herkömmliche Gegner innerhalb von 30 Metern heran.")));
                    target.push(ko.observable(new Kanai.Equipment('Geisterschellen', 'Geisteskrafterzeuger reduzieren 3 Sek. lang Euren erlittenen Schaden um 30–40%')));
                    target.push(ko.observable(new Kanai.Equipment('Raufboldarmschienen', 'Gegner, die zurückgestoßen werden, erleiden nach dem Landen 5 Sek. lang um 20–30% erhöhten Schaden')));
                    target.push(ko.observable(new Kanai.Equipment("Wickel des Trag'Oul", "Heilbrunnen füllen jetzt auch sämtliche Ressourcen wieder auf und reduzieren alle Abklingzeiten um 60 Sek.")));
                    target.push(ko.observable(new Kanai.Equipment('Frostbrand', 'Eure Kälteeffekte haben eine Chance von bis zu 34–45%, Ziele einzufrieren')));
                    target.push(ko.observable(new Kanai.Equipment('Armschützer der Warzecha', 'Jedes Mal, wenn Ihr ein Objekt zerstört, erhaltet Ihr einen kurzen Geschwindigkeitsschub')));
                    target.push(ko.observable(new Kanai.Equipment('Wickel der Klarheit', 'Eure Hasserzeuger reduzieren Euren erlittenen Schaden 5 Sek. lang um 30–35%.')));
                    target.push(ko.observable(new Kanai.Equipment('Gladiatorenpanzerhandschuhe', 'Nachdem Ihr einen Massakerbonus erhalten habt, regnet es Gold vom Himmel')));
                    target.push(ko.observable(new Kanai.Equipment('Handschuhe der Huldigung', 'Schreineffekte halten 10 Minuten an')));
                    target.push(ko.observable(new Kanai.Equipment('Tasker und Theo', 'Erhöht die Angriffsgeschwindigkeit Eurer Gefährten oder Diener um 40–50%')));
                    target.push(ko.observable(new Kanai.Equipment('Engelshaarborte', "'Bestrafen' erhält den Effekt jeder Rune")));
                    target.push(ko.observable(new Kanai.Equipment('Gürtel des geheimen Schatzes', "Alle 6–8 Sek. lasst Ihr ein 'Bombardement' auf einen zufälligen Gegner in der Nähe niedergehen")));
                    target.push(ko.observable(new Kanai.Equipment('Gürtelband der Verlorenen', "Jeder Treffer mit 'Schlagder Sieben Fäuste' reduziert 7 Sek. lang Euren erlittenen Schaden um 3,5%.")));
                    target.push(ko.observable(new Kanai.Equipment('Gürtel der Transzendenz', 'Beschwört einen Opportunisten, wenn Ihr mit einem Eurer Manaverbraucher trefft')));
                    target.push(ko.observable(new Kanai.Equipment('Haulls Segen', "'Gerechtigkeit' erzeugt einen 'Gesegneten Hammer', wenn ein Feind damit getroffen wird")));
                    target.push(ko.observable(new Kanai.Equipment('Goldträger', 'Goldsammeln: Eure Rüstung wird für 5 Sek. um einen Wert erhöht, der dem des aufgesammelten Goldes entspricht')));
                    target.push(ko.observable(new Kanai.Equipment('Band von Sherma', 'Chance, bei einem Treffer ein Chaosfeld zu erzeugen, das Gegner für 3–4 Sek. blendet und verlangsamt')));
                    target.push(ko.observable(new Kanai.Equipment('Hüftgurt der Harringtons', 'Wenn Ihr eine Truhe öffnet, wird Euer Schaden 10 Sek. lang um 100–135% erhöht')));
                    target.push(ko.observable(new Kanai.Equipment('Fazulas unmögliche Kette', "Ihr startet mit 20 'Archon'-Stapeln, wenn Ihr 'Archon' aktiviert.")));
                    target.push(ko.observable(new Kanai.Equipment('Hagelsturm', "'Rachehagel' beschwört zusätzlich eine vom Himmel fallende Bestie, die 4000% Waffenschaden verursacht")));
                    target.push(ko.observable(new Kanai.Equipment('Spukgürtel', "'Heimsuchung' ruft 1 weitere Geister herbei")));
                    target.push(ko.observable(new Kanai.Equipment('Wickeltuch der Hwoj', "'Heuschreckenplage' verlangsamt Gegner um 80%")));
                    target.push(ko.observable(new Kanai.Equipment('Zorn des Jägers', 'Erhöht die Angriffsgeschwindigkeit Eurer Primärfertigkeiten um 30% und ihren Schaden um 45–60%.')));
                    target.push(ko.observable(new Kanai.Equipment('Gürtel der Unersättlichkeit', 'Das Aufsammeln einer Heilkugel erhöht Euer maximales Leben 15 Sek. lang um 5%. Bis zu 5-mal stapelbar')));
                    target.push(ko.observable(new Kanai.Equipment('Vielschlitzergürtel', "'Schlitzen' wirkt in alle Richtungen")));
                    target.push(ko.observable(new Kanai.Equipment('Jangs Umhüllung', "Gegner, die durch 'Schwarzes Loch' Schaden erleiden, werden außerdem 3 Sek. lang um 60–80% verlangsamt")));
                    target.push(ko.observable(new Kanai.Equipment('Omryns Kette', "Beim Einsatz von 'Salto' werden 'Krähenfüße' fallen gelassen")));
                    target.push(ko.observable(new Kanai.Equipment('Heiliger Gurt', "'Richturteil' erhält den Effekt der Rune 'Entkräften' und wird an Eurem Aufschlagsort gewirkt, sobald Ihr 'Himmlische Vollstreckung' nutzt.")));
                    target.push(ko.observable(new Kanai.Equipment('Messerschärpe', 'Wirft mit jedem Angriff einen Dolch auf einen Gegner in der Nähe und fügt ihm 500–650% Waffenschaden als physischen Schaden zu')));
                    target.push(ko.observable(new Kanai.Equipment('Sebors Alptraum', "Wenn Ihr eine Kiste öffnet, wird auf alle Gegner in der Nähe 'Heimsuchung' gewirkt")));
                    target.push(ko.observable(new Kanai.Equipment('Wetzriemen', 'Das Aufsammeln von Heilkugeln löst eine Explosion aus, die Gegnern im Umkreis von 20 Metern 300–400% Waffenschaden als Feuerschaden zufügt')));
                    target.push(ko.observable(new Kanai.Equipment('Kraft des Donnergotts', 'Wenn Ihr Angriffe blockt, ihnen ausweicht oder getroffen werdet, entfesselt Ihr elektrische Blitze, die 100–130% Waffenschaden als Blitzschaden verursachen')));
                    target.push(ko.observable(new Kanai.Equipment('Chilaniks Kette', "Die Anwendung von 'Kriegsschrei' erhöht Eure Bewegungsgeschwindigkeit und die Eurer Verbündeten 10 Sek. lang um 40%")));
                    target.push(ko.observable(new Kanai.Equipment('Klagelied', "Gegner können mit 2 Stapeln von 'Zerfleischen' belegt werden")));
                    target.push(ko.observable(new Kanai.Equipment('Stolz von Cassius', "Erhöht die Dauer von 'Schmerzen unterdrücken' um 6 Sek.")));
                    target.push(ko.observable(new Kanai.Equipment('Der unangefochtene Sieger', "'Raserei' erhält den Effekt jeder Rune")));
                    target.push(ko.observable(new Kanai.Equipment('Todeshandel', 'Erhaltet eine Todesaura, die Gegnern im Umkreis von 16 Metern physischen Schaden zufügt, der 750–1000% Eures Lebens pro Sekunde entspricht. Ihr regeneriert kein Leben mehr.')));
                    target.push(ko.observable(new Kanai.Equipment('Tiefenwühler', 'Ressourcen erzeugende Primärfertigkeiten verursachen 80–100% zusätzlichen Schaden')));
                    target.push(ko.observable(new Kanai.Equipment('Hexenhose von Herrn Yan', 'In Bewegung sind Eure Ressourcenerzeugung und Euer Schaden um 25% erhöht. Wenn Ihr stillsteht, sind sie jeweils um 20–25% reduziert.')));
                    target.push(ko.observable(new Kanai.Equipment("Illusorische Stiefel", "Gestattet es, Euch ungehindert durch Gegner zu bewegen")));
                    target.push(ko.observable(new Kanai.Equipment('Pockenpantalons', 'Wenn sich 3 oder mehr Gegner im Umkreis von 12 Metern befinden, geht von Euch ein widerlicher Gestank aus, der Gegnern im Umkreis von 15 Metern 5 Sek. lang pro Sekunde 450–550% Waffenschaden als Giftschaden zufügt')));
                    target.push(ko.observable(new Kanai.Equipment('Stiefel der Missachtung', 'Erhaltet für jede Sekunde, die Ihr stillsteht, zusätzlich 10.000 Lebensregeneration pro Sekunde. Dieser Effekt ist bis zu 4-mal stapelbar.')));
                    target.push(ko.observable(new Kanai.Equipment('Flammengänger', 'Ihr verbrennt den Boden, auf dem Ihr wandelt, und alle Gegner, die in das Feuer geraten, erleiden jede Sekunde 300–400% Waffenschaden')));
                    target.push(ko.observable(new Kanai.Equipment('Schlammspritzer mit Eisenkappe', 'Eure Bewegungsgeschwindigkeit wird um bis zu 25–30% erhöht, basierend auf Eurem verlorenen Leben')));
                    target.push(ko.observable(new Kanai.Equipment('Lut-Socken', "'Sprung' kann innerhalb von 2 Sek. erneut gewirkt werden, bevor die Abklingzeit beginnt")));
                    target.push(ko.observable(new Kanai.Equipment('Nilfurs Stolz', "Erhöht den Schaden von 'Meteor' um 100%. Wenn Euer 'Meteor' 3 oder weniger Gegner trifft, erhöht sich der Schaden um 150–200%.")));
                    target.push(ko.observable(new Kanai.Equipment('Die gröbsten Stiefel', "'Mystischer Verbündeter' beschwört zwei mystische Verbündete, die an Eurer Seite kämpfen")));
                    target.push(ko.observable(new Kanai.Equipment("St. Archews Maß", "Der erste Treffer, den Ihr durch eine Gruppe Elitegegner erleidet, verleiht Euch 10 Sek. lang einen Schild, der Schaden in Höhe von 120–150% Eures maximalen Lebens absorbiert.")));
                    target.push(ko.observable(new Kanai.Equipment('Schreckenseisen', "'Aufstampfen' erzeugt einen 'Erdrutsch'")));
                    break;

                }
        }
    },
    getWeapons(target) {
        switch (this.culture()) {
            case "en-US":
            default: {
                target.push(ko.observable(new Kanai.Equipment("Genzaniku", "Chance to summon a ghostly Fallen Champion when attacking.")));
                target.push(ko.observable(new Kanai.Equipment("Hack", "100% of your Thorns damage is applied on every attack.")));
                target.push(ko.observable(new Kanai.Equipment("Sky Splitter", "20% chance to Smite enemies for 600-750% weapon damage as Lightning when you hit them.")));
                target.push(ko.observable(new Kanai.Equipment("The Burning Axe of Sankis", "Chance to fight through the pain when enemies hit you.")));
                target.push(ko.observable(new Kanai.Equipment("The Butcher's Sickle", "25% chance to drag enemies to you when attacking.")));
                target.push(ko.observable(new Kanai.Equipment("Envious Blade", "Gain 100% Critical Hit Chance against enemies at full health")));
                target.push(ko.observable(new Kanai.Equipment("Eun-jang-do", "Attacking enemies below 20% Life freezes them for 3 seconds.")));
                target.push(ko.observable(new Kanai.Equipment("Wizardspike", "Performing an attack has a 25% chance to hurl a Frozen Orb.")));
                target.push(ko.observable(new Kanai.Equipment("Jace's Hammer of Vigilance", "Increase the size of your Blessed Hammers.")));
                target.push(ko.observable(new Kanai.Equipment("Mad Monarch's Scepter", "After killing 10 enemies you release a Poison Nova that deals 1400% weapon damage as Poison to enemies within 30 yards.")));
                target.push(ko.observable(new Kanai.Equipment("Odyn Son", "40% chance to Chain Lightning enemies when you hit them.")));
                target.push(ko.observable(new Kanai.Equipment("Solanium", "Critical Hits have a 4% chance to spawn a health globe.")));
                target.push(ko.observable(new Kanai.Equipment("Arreat's Law", "Weapon Throw generates up to 15-20 additional Fury based on how far away the enemy hit is. Maximum benefit when the enemy hit is 20 or more yards away.")));
                target.push(ko.observable(new Kanai.Equipment("Azurewrath", "Undead and Demon enemies within 25 yards take 650% weapon damage as Holy every second and are sometimes knocked into the air.")));
                target.push(ko.observable(new Kanai.Equipment("Fulminator", "Lightning damage has a chance to turn enemies into lightning rods, causing them to pulse 555% weapon damage as Lightning every second to nearby enemies for 6 seconds.")));
                target.push(ko.observable(new Kanai.Equipment("In-geom", "Your skill cooldowns are reduced by 10 seconds for 15 seconds after killing an elite pack.")));
                target.push(ko.observable(new Kanai.Equipment("Rimeheart", "10% chance on hit to instantly deal 10000% weapon damage as Cold to enemies that are Frozen.")));
                target.push(ko.observable(new Kanai.Equipment("Sever", "Slain enemies rest in pieces.")));
                target.push(ko.observable(new Kanai.Equipment("Shard of Hate", "Elemental skills have a chance to trigger a powerful attack that deals 250% weapon damage:Cold skills trigger Freezing Skull, Poison skills trigger Poison Nova Lightning skills trigger Charged Bolt")));
                target.push(ko.observable(new Kanai.Equipment("Skycutter", "Chance to summon angelic assistance when attacking.")));
                target.push(ko.observable(new Kanai.Equipment("Thunderfury, Blessed Blade of the Windseeker", "Chance on hit to blast your enemy with Lightning, dealing 372% weapon damage as Lightning and then jumping to additional nearby enemies. Each enemy hit has their attack speed and movement speed reduced by 30% for 3 seconds. Jumps up to 5 targets.")));
                target.push(ko.observable(new Kanai.Equipment("Anessazi Edge", "Zombie Dogs stuns enemies around them for 1.5 seconds when summoned.")));
                target.push(ko.observable(new Kanai.Equipment("Rhen'ho Flayer", "Plague of Toads now seek out enemies and can explode twice.")));
                target.push(ko.observable(new Kanai.Equipment("Sacred Harvester", "Soul Harvest now stacks up to 10 times.")));
                target.push(ko.observable(new Kanai.Equipment("Starmetal Kukri", "Reduce the cooldown of Fetish Army and Big Bad Voodoo by 1 second each time your fetishes deal damage.")));
                target.push(ko.observable(new Kanai.Equipment("The Dagger of Darts", "Your Poison Darts and your Fetishes' Poison Darts now pierce.")));
                target.push(ko.observable(new Kanai.Equipment("The Gidbinn", "Chance to summon a Fetish when attacking.")));
                target.push(ko.observable(new Kanai.Equipment("The Spider Queen's Grasp", "Corpse Spiders releases a web on impact that Slows enemies by 60–80%.")));
                target.push(ko.observable(new Kanai.Equipment("Jawbreaker", "When Dashing Strike hits an enemy more than 30 yards away, its Charge cost is refunded.")));
                target.push(ko.observable(new Kanai.Equipment("Lion's Claw", "Seven-Sided Strike performs an additional 7 strikes.")));
                target.push(ko.observable(new Kanai.Equipment("The Fist of Az'Turrasq", "Exploding Palm's on-death explosion damage is increased by 100%.")));
                target.push(ko.observable(new Kanai.Equipment("Vengeful Wind", "Increases the maximum stack count of Sweeping Wind by 3.")));
                target.push(ko.observable(new Kanai.Equipment("Darklight", "Fist of the Heavens has a 60% chance to also be cast at your location.")));
                target.push(ko.observable(new Kanai.Equipment("Golden Scourge", "Smite now jumps to 3 additional enemies.")));
                target.push(ko.observable(new Kanai.Equipment("Gyrfalcon's Foote", "Removes the resource cost of Blessed Shield.")));
                target.push(ko.observable(new Kanai.Equipment("Inviolable Faith", "Casting Consecration also casts Consecration beneath all of your allies.")));
                target.push(ko.observable(new Kanai.Equipment("Johanna's Argument", "Increase the attack speed of Blessed Hammer by 100%.")));
                target.push(ko.observable(new Kanai.Equipment("Justinian's Mercy", "Blessed Hammer gains the effect of the Dominion rune.")));
                target.push(ko.observable(new Kanai.Equipment("Kassar's Retribution", "Casting Justice increases your movement speed by 20% for 2 seconds.")));
                target.push(ko.observable(new Kanai.Equipment("Swiftmount", "Doubles the duration of Steed Charge.")));
                target.push(ko.observable(new Kanai.Equipment("Dishonored Legacy", "Cleave deals up to 400% increased damage based on percentage on missing Fury.")));
                target.push(ko.observable(new Kanai.Equipment("Fjord Cutter", "You are surrounded by a Chilling Aura when attacking.")));
                target.push(ko.observable(new Kanai.Equipment("Remorseless", "Hammer of the Ancients has a 25–30% chance to summon an Ancient for 20 seconds.")));
                target.push(ko.observable(new Kanai.Equipment("Burst of Wrath", "Killing enemies and destroying objects has a chance to grant 20% of your maximum primary resource")));
                target.push(ko.observable(new Kanai.Equipment("Butcher's Carver", "The Butcher still inhabits his carver.")));
                target.push(ko.observable(new Kanai.Equipment("Cinder Switch", "50% chance to cast a fireball when attacking.")));
                target.push(ko.observable(new Kanai.Equipment("Arthef's Spark of Life", "Heal for 4% of your missing Life when you kill an Undead enemy.")));
                target.push(ko.observable(new Kanai.Equipment("Schaefer's Hammer", "Casting a Lightning skill charges you with Lightning, causing you to deal 850% weapon damage as Lightning every second for 5 seconds to nearby enemies.")));
                target.push(ko.observable(new Kanai.Equipment("Skywarden", "Every 60 seconds, gain a random Law for 60 seconds.")));
                target.push(ko.observable(new Kanai.Equipment("Soulsmasher", "When you kill an enemy, it explodes for 600% of your Life per Kill as damage to all enemies within 20 yards. You no longer benefit from your Life per Kill")));
                target.push(ko.observable(new Kanai.Equipment("Sunder", "50% chance to sunder the ground your enemies walk on when you attack.")));
                target.push(ko.observable(new Kanai.Equipment("The Furnace", "Increases damage against elites by 50%.")));
                target.push(ko.observable(new Kanai.Equipment("Bovine Bardiche", "Chance on hit to summon a herd of murderous cows.")));
                target.push(ko.observable(new Kanai.Equipment("Vigilance", "Getting hit has a chance to automatically cast Inner Sanctuary.")));
                target.push(ko.observable(new Kanai.Equipment("Ahavarion, Spear of Lycander", "Chance on killing a demon to gain a random Shrine effect.")));
                target.push(ko.observable(new Kanai.Equipment("Maloth's Focus", "Enemies occasionally flee at the sight of this staff.")));
                target.push(ko.observable(new Kanai.Equipment("The Grand Vizier", "Reduces the Arcane Power cost of Meteor by 50%.")));
                target.push(ko.observable(new Kanai.Equipment("The Smoldering Core", "Lesser enemies are now lured to your Meteor impact areas.")));
                target.push(ko.observable(new Kanai.Equipment("The Tormentor", "Chance to charm enemies when you hit them.")));
                target.push(ko.observable(new Kanai.Equipment("Valthek's Rebuke", "Energy Twister now travels in a straight path.")));
                target.push(ko.observable(new Kanai.Equipment("Wormwood", "Locust Swarm continuously plagues enemies around you.")));
                target.push(ko.observable(new Kanai.Equipment("Blade of Prophecy", "Two Condemned enemies also trigger Condemn's explosion.")));
                target.push(ko.observable(new Kanai.Equipment("Blood Brother", "Grants a 20% chance to block attacks. Blocked attacks inflict 30% less damage. After blocking an attack, your next attack inflicts 30% additional damage.")));
                target.push(ko.observable(new Kanai.Equipment("Cam's Rebuttal", "Falling Sword can be used again within 4 seconds before the cooldown is triggered.")));
                target.push(ko.observable(new Kanai.Equipment("Maximus", "Chance on hit to summon a Demonic Slave.")));
                target.push(ko.observable(new Kanai.Equipment("Scourge", "45% chance when attacking to explode with demonic fury for 2000% weapon damage as Fire.")));
                target.push(ko.observable(new Kanai.Equipment("Stalgard's Decimator", "Your melee attacks throw a piercing axe at a nearby enemy, dealing 700% weapon damage as Physical.")));
                target.push(ko.observable(new Kanai.Equipment("Flying Dragon", "Chance to double your attack speed when attacking.")));
                target.push(ko.observable(new Kanai.Equipment("Incense Torch of the Grand Temple", "Reduces the Spirit cost of Wave of Light by 50%.")));
                target.push(ko.observable(new Kanai.Equipment("The Flow of Eternity", "Reduces the cooldown of Seven-Sided Strike by 60%.")));
                target.push(ko.observable(new Kanai.Equipment("Warstaff of General Quang", "Tempest Rush gains the effect of the Tailwind rune.")));
                target.push(ko.observable(new Kanai.Equipment("Baleful Remnant", "Enemies killed while Akarat's Champion is active turn into Phalanx Avatars for 10 seconds.")));
                target.push(ko.observable(new Kanai.Equipment("Fate of the Fell", "Gain two additional rays of Heaven’s Fury.")));
                target.push(ko.observable(new Kanai.Equipment("Golden Flense", "Sweep Attack restores 6 Wrath for each enemy hit.")));
                target.push(ko.observable(new Kanai.Equipment("The Mortal Drama", "Double the number of Bombardment impacts.")));
                target.push(ko.observable(new Kanai.Equipment("Bastion's Revered", "Frenzy now stacks up to 10 times.")));
                target.push(ko.observable(new Kanai.Equipment("Fury of the Vanished Peak", "Reduces the Fury cost of Seismic Slam by 40–50%.")));
                target.push(ko.observable(new Kanai.Equipment("Madawc's Sorrow", "Stun enemies for 2 seconds the first time you hit them.")));
                target.push(ko.observable(new Kanai.Equipment("The Gavel of Judgment", "Hammer of the Ancients returns 20–25 Fury if it hits 3 or less enemies.")));
                target.push(ko.observable(new Kanai.Equipment("Cluckeye", "50% chance to cluck when attacking.")));
                target.push(ko.observable(new Kanai.Equipment("Kridershot", "Elemental Arrow now generates 4 Hatred.")));
                target.push(ko.observable(new Kanai.Equipment("Leonine Bow of Hashir", "Bola Shot has a 20% chance on explosion to pull in all enemies within 24 yards.")));
                target.push(ko.observable(new Kanai.Equipment("Odyssey's End", "Enemies snared by your Entangling Shot take 20–25% increased damage from all sources.")));
                target.push(ko.observable(new Kanai.Equipment("The Raven's Wing", "A raven flies to your side.")));
                target.push(ko.observable(new Kanai.Equipment("Yang's Recurve", "Multishot attacks 40% faster.")));
                target.push(ko.observable(new Kanai.Equipment("Buriza-Do Kyanon", "Your projectiles pierce 2 additional times.")));
                target.push(ko.observable(new Kanai.Equipment("Chanon Bolter", "Your Spike Traps lure enemies to them. Enemies may be taunted once every 12 seconds.")));
                target.push(ko.observable(new Kanai.Equipment("Demon Machine", "65% chance to shoot explosive bolts when attacking.")));
                target.push(ko.observable(new Kanai.Equipment("Hellrack", "Chance to root enemies to the ground when you hit them.")));
                target.push(ko.observable(new Kanai.Equipment("Pus Spitter", "50% chance to lob an acid blob when attacking.")));
                target.push(ko.observable(new Kanai.Equipment("Wojahnni Assaulter", "Rapid Fire deals 40% more damage for every second that you channel. Stacks up to 4 times.")));
                target.push(ko.observable(new Kanai.Equipment("Calamity", "Enemies you hit become Marked for Death.")));
                target.push(ko.observable(new Kanai.Equipment("Danetta's Revenge", "Vault gains the effect of the Rattling Roll rune.")));
                target.push(ko.observable(new Kanai.Equipment("Danetta's Spite", "Leave a clone of yourself behind after using Vault.")));
                target.push(ko.observable(new Kanai.Equipment("Helltrapper", "10% chance on hit to summon a Spike Trap, Caltrops or Sentry")));
                target.push(ko.observable(new Kanai.Equipment("K'mar Tenclip", "Strafe gains the effect of the Drifting Shadow rune.")));
                target.push(ko.observable(new Kanai.Equipment("The Demon's Demise", "Spike Trap - Sticky Trap spreads to nearby enemies when it explodes.")));
                target.push(ko.observable(new Kanai.Equipment("Valla's Bequest", "Strafe projectiles pierce.")));
                target.push(ko.observable(new Kanai.Equipment("Aether Walker", "Teleport no longer has a cooldown but costs 25 Arcane Power.")));
                target.push(ko.observable(new Kanai.Equipment("Gesture of Orpheus", "Reduces the cooldown of Slow Time by 40%.")));
                target.push(ko.observable(new Kanai.Equipment("Serpent's Sparker", "You may have one extra Hydra active at a time.")));
                target.push(ko.observable(new Kanai.Equipment("Slorak's Madness", "This wand finds your death humorous.")));
                target.push(ko.observable(new Kanai.Equipment("Wand of Woh", "3 additional Explosive Blasts are triggered after casting Explosive Blast.")));
                target.push(ko.observable(new Kanai.Equipment("Coven's Criterion", "You take 60% less damage from blocked attacks.")));
                target.push(ko.observable(new Kanai.Equipment("Defender of Westmarch", "Blocks have a chance of summoning a charging wolf that deals 1000% weapon damage to all enemies it passes through.")));
                target.push(ko.observable(new Kanai.Equipment("Denial", "Each enemy hit by your Sweep Attack increases the damage of your next Sweep Attack by 40%, stacking up to 5 times.")));
                target.push(ko.observable(new Kanai.Equipment("Eberli Charo", "Reduces the cooldown of Heaven's Fury by 50%.")));
                target.push(ko.observable(new Kanai.Equipment("Freeze of Deflection", "Blocking an attack has a chance to Freeze the attacker for 1.5 seconds.")));
                target.push(ko.observable(new Kanai.Equipment("Ivory Tower", "Blocks release forward a Fires of Heaven.")));
                target.push(ko.observable(new Kanai.Equipment("Vo'Toyias Spiker", "Enemies affected by Provoke take double damage from Thorns.")));
                target.push(ko.observable(new Kanai.Equipment("Wall of Man", "30% chance to be protected by a shield of bones when you are hit.")));
                target.push(ko.observable(new Kanai.Equipment("Akarat's Awakening", "Every successful block has a 25% chance to reduce all cooldowns by 1 second.")));
                target.push(ko.observable(new Kanai.Equipment("Frydehr's Wrath", "Condemn has no cooldown but instead costs 40 Wrath.")));
                target.push(ko.observable(new Kanai.Equipment("Guard of Johanna", "Blessed Hammer damage is increased by 250% for the first 3 enemies it hits.")));
                target.push(ko.observable(new Kanai.Equipment("Hallowed Bulwark", "Iron Skin also increases your Block Amount by 60%.")));
                target.push(ko.observable(new Kanai.Equipment("Hellskull", "Gain 10% increased damage while wielding a two-handed weapon.")));
                target.push(ko.observable(new Kanai.Equipment("Jekangbord", "Blessed Shield ricochets to 6 additional enemies")));
                target.push(ko.observable(new Kanai.Equipment("Piro Marella", "Reduces the Wrath cost of Shield Bash by 50%.")));
                target.push(ko.observable(new Kanai.Equipment("Salvation", "Blocked attacks heal you and your allies for 30% of the amount blocked")));
                target.push(ko.observable(new Kanai.Equipment("Sublime Conviction", "When you block, you have up to a 20% chance to Stun the attacker for 1.5 seconds based on your current Wrath.")));
                target.push(ko.observable(new Kanai.Equipment("The Final Witness", "Shield Glare now hits all enemies around you.")));
                target.push(ko.observable(new Kanai.Equipment("Unrelenting Phalanx", "Phalanx now casts twice.")));
                target.push(ko.observable(new Kanai.Equipment("Henri's Perquisition", "The first time an enemy deals damage to you, reduce that damage by 45-60% and Charm the enemy for 3 seconds.")));
                target.push(ko.observable(new Kanai.Equipment("Homunculus", "A Zombie Dog is automatically summoned to your side every 2 seconds.")));
                target.push(ko.observable(new Kanai.Equipment("Shukrani's Triumph", "Spirit Walk lasts until you attack or until an enemy is within 30 yards of you.")));
                target.push(ko.observable(new Kanai.Equipment("Uhkapian Serpent", "25–30% of the damage you take is redirected to your Zombie Dogs.")));
                target.push(ko.observable(new Kanai.Equipment("Cosmic Strand", "Teleport gains the effect of the Wormhole rune.")));
                target.push(ko.observable(new Kanai.Equipment("Light of Grace", "Ray of Frost now pierces.")));
                target.push(ko.observable(new Kanai.Equipment("Mirrorball", "Magic Missile fires 1–2 extra missiles.")));
                target.push(ko.observable(new Kanai.Equipment("Myken's Ball of Hate", "Electrocute can chain to enemies that have already been hit.")));
                target.push(ko.observable(new Kanai.Equipment("The Oculus", "Taking damage has up to a 15–20% chance to reset the cooldown on Teleport.")));
                target.push(ko.observable(new Kanai.Equipment("Triumvirate", "Your Signature Spells increase the damage of Arcane Orb by 75–100% for 6 seconds, stacking up to 3 times.")));
                target.push(ko.observable(new Kanai.Equipment("Winter Flurry", "Enemies killed by Cold damage have a 15–20% chance to release a Frost Nova.")));
                target.push(ko.observable(new Kanai.Equipment("Bombardier's Rucksack", "You may have 2 additional Sentries.")));
                target.push(ko.observable(new Kanai.Equipment("Dead Man's Legacy", "Multishot hits enemies below 60% health twice.")));
                target.push(ko.observable(new Kanai.Equipment("Emimei's Duffel", "Bolas now explode instantly.")));
                target.push(ko.observable(new Kanai.Equipment("Meticulous Bolts", "Elemental Arrow - Ball Lightning now travels at 40% speed.")));
                target.push(ko.observable(new Kanai.Equipment("Spines of Seething Hatred", "Chakram now generates 4 Hatred.")));
                target.push(ko.observable(new Kanai.Equipment("The Ninth Cirri Satchel", "Hungering Arrow has 25% additional chance to pierce.")));
                target.push(ko.observable(new Kanai.Equipment("SuWong Diviner", "Acid Cloud gains the effect of the Lob Blob Bomb rune.")));
                target.push(ko.observable(new Kanai.Equipment("Scrimshaw", "Reduces the Mana cost of Zombie Charger by 50%.")));

                break;
            }
            case "de-DE":
                {
                    target.push(ko.observable(new Kanai.Equipment('Genzaniku', 'Ihr beschwört manchmal einen geisterhaften Champion der Gefallenen, wenn Ihr angreift')));
                    target.push(ko.observable(new Kanai.Equipment('Hacken', '100% Eures Dornenschadens wird auf jeden Angriff angewandt')));
                    target.push(ko.observable(new Kanai.Equipment('Himmelsspalter', "Chance von 20%, 'Himmlisches Schmettern' auf getroffene Gegner zu wirken und 600-750% Waffenschaden als Blitzschaden zu verursachen")));
                    target.push(ko.observable(new Kanai.Equipment('Die brennende Axt von Sankis', 'Ihr unterdrückt manchmal Euren Schmerz, wenn Ihr getroffen werdet')));
                    target.push(ko.observable(new Kanai.Equipment('Schlächtersichel', 'Chance von 20–25%, Gegner zu Euch heranzuziehen, wenn Ihr angreift')));
                    target.push(ko.observable(new Kanai.Equipment('Klinge des Neids', 'Eure kritische Trefferchance gegen Gegner mit vollem Leben beträgt 100%')));
                    target.push(ko.observable(new Kanai.Equipment('Jaces Hammer der Wachsamkeit', "Vergrößert die Hämmer von 'Gesegneter Hammer'")));
                    target.push(ko.observable(new Kanai.Equipment('Szepter des wahnsinnigen Monarchen', 'Wenn Ihr 10 Gegner getötet habt, setzt Ihr eine Giftnova frei, die Gegnern innerhalb von 30 Metern 1050–1400% Waffenschaden als Giftschaden zufügt')));
                    target.push(ko.observable(new Kanai.Equipment('Odyns Sohn', 'Chance von 20–40%, einen Kettenblitz auf Eure Gegner zu wirken, wenn Ihr sie trefft')));
                    target.push(ko.observable(new Kanai.Equipment('Das Gesetz des Arreat', "'Waffenwurf' erzeugt mit zunehmender Entfernung zum getroffenen Gegner zusätzlich bis zu 15–20 mehr Wut. Der Maximalwert wird ab 20 Meter erreicht.")));
                    target.push(ko.observable(new Kanai.Equipment('Blauzorn', 'Untote und dämonische Gegner innerhalb von 25 Metern erleiden jede Sekunde 500–650% Waffenschaden als Heiligschaden und werden manchmal in die Luft geschleudert.')));
                    target.push(ko.observable(new Kanai.Equipment('Donnerkeil', 'Jeglicher Blitzschaden hat jetzt eine Chance, Gegner in Blitzableiter zu verwandeln, die Gegnern in der Nähe 6 Sekunden lang jede Sekunde 444–555% Waffenschaden als Blitzschaden zufügen.')));
                    target.push(ko.observable(new Kanai.Equipment('Frostherz', 'Gewährt eine Chance von 10%, bei einem Treffer eingefrorenen Gegnern sofort 10000% Waffenschaden als Kälteschaden zuzufügen')));
                    target.push(ko.observable(new Kanai.Equipment('Solanium', 'Kritische Treffer haben eine Chance von 3–4%, eine Heilkugel hervorzurufen')));
                    target.push(ko.observable(new Kanai.Equipment('Schnitt', 'Eure Gegner platzen vor Neid')));
                    target.push(ko.observable(new Kanai.Equipment('Zauberdorn', 'Chance von 20–25%, eine gefrorene Kugel zu wirken, wenn Ihr angreift')));
                    target.push(ko.observable(new Kanai.Equipment('Splitter des Hasses', "Elementarfertigkeiten haben eine Chance, einen mächtigen Angriff auszulösen, der 250% Waffenschaden verursacht:   Kältefertigkeiten lösen 'Eisknochengeist' aus   Giftfertigkeiten lösen 'Giftnova' aus   Blitzfertigkeiten lösen 'Combo - Blitz' aus")));
                    target.push(ko.observable(new Kanai.Equipment("Eun-jang-do", "Gegner, die über weniger als 20% ihres Lebens verfügen, werden durch Eure Angriffe für 3 Sek. eingefroren")));
                    target.push(ko.observable(new Kanai.Equipment('Himmelsschlitzer', 'Ihr ruft manchmal Engelsbeistand herbei, wenn Ihr angreift')));
                    target.push(ko.observable(new Kanai.Equipment('Sternstahlkukri', "Reduziert jedes Mal, wenn Eure Fetische Schaden verursachen, die Abklingzeit von 'Fetischarmee' und 'Gro ßerböser Voodoo' um 1 Sek.")));
                    target.push(ko.observable(new Kanai.Equipment('Heiliger Ernter', "'Seelenernte' ist bis zu 10-mal stapelbar")));
                    target.push(ko.observable(new Kanai.Equipment('Anessazi-Stilett', 'Zombiehunde betäuben Gegner um sie herum für 1,5 Sek., wenn sie beschworen werden')));
                    target.push(ko.observable(new Kanai.Equipment('Der Dolchpfeil', 'Eure Giftpfeile und die Giftpfeile Eurer Fetische durchschlagen ihre Ziele')));
                    target.push(ko.observable(new Kanai.Equipment("Rhen'hos Schinder", "Eure Kröten verfolgen Gegner jetzt und können zweimal explodieren")));
                    target.push(ko.observable(new Kanai.Equipment('Kieferbrecher', "Wenn 'Rasender Angriff' einen Gegner in mehr als 35 Metern Entfernung trifft, werden die Aufladungskosten der Fertigkeit erstattet")));
                    target.push(ko.observable(new Kanai.Equipment('Der Gidbinn', 'Ihr beschwört manchmal einen Fetisch, wenn Ihr angreift')));
                    target.push(ko.observable(new Kanai.Equipment('Die Umklammerung der Spinnenkönigin', 'Eure Leichenspinnen erzeugen beim Auftreffen ein Netz, das Gegner um 60–80% verlangsamt')));
                    target.push(ko.observable(new Kanai.Equipment("Die Faust von Az'Turrasq", "Erhöht den Schaden der Todesexplosion von 'Explodierende Hand' um 100% ")));
                    target.push(ko.observable(new Kanai.Equipment('Rachsüchtiger Wind', "Erhöht die maximale Stapelanzahl von 'Reißender Wind' um 3")));
                    target.push(ko.observable(new Kanai.Equipment('Dunkellicht', "'Himmelsfaust' hat eine Chance von 60%, zusätzlich an Eurer Position gewirkt zu werden")));
                    target.push(ko.observable(new Kanai.Equipment('Löwenklaue', "'Schlag der Sieben Fäuste' führt 7 zusätzliche Schläge aus.")));
                    target.push(ko.observable(new Kanai.Equipment('Unerschütterlicher Glaube', "Das Wirken von 'Weihe' ruft weitere Wirkungsbereiche von 'Weihe' unter Euren Verbündeten hervor")));
                    target.push(ko.observable(new Kanai.Equipment('Gerfalkenfuß', "Entfernt die Ressourcenkosten von 'Gesegneter Schild'")));
                    target.push(ko.observable(new Kanai.Equipment('Kassars Vergeltung', "Das Wirken von 'Gerechtigkeit' erhöht 2 Sek. lang Eure Bewegungsgeschwindigkeit um 20%")));
                    target.push(ko.observable(new Kanai.Equipment('Justinians Gnade', "'Gesegneter Hammer' erhält den Effekt der Rune 'Herrschaft'")));
                    target.push(ko.observable(new Kanai.Equipment('Johannas Argument', "Erhöht die Angriffsgeschwindigkeit von 'Gesegneter Hammer' um 100%.")));
                    target.push(ko.observable(new Kanai.Equipment('Geschändetes Erbe', "Erhöht den Schaden von 'Spalten' um bis zu 400%, basierend auf dem prozentualen Anteil der aktuell verbrauchten Wut.")));
                    target.push(ko.observable(new Kanai.Equipment('Windreiter', "Verdoppelt die Dauer von 'Kavallerie'")));
                    target.push(ko.observable(new Kanai.Equipment('Fjordspalter', 'Beim Angriff seid Ihr von einer unterkühlenden Aura umgeben.')));
                    target.push(ko.observable(new Kanai.Equipment('Ausbruch des Zorns', 'Das Töten von Gegnern und Zerstören von Objekten hat eine Chance, Euch 20% Eurer maximalen Primärressource zu gewähren')));
                    target.push(ko.observable(new Kanai.Equipment('Schaefers Hammer', 'Ihr ladet Euch mit Blitzenergie auf, wenn Ihr eine Blitzfertigkeit einsetzt, sodass Ihr Gegnern in der Nähe 5 Sek. lang pro Sekunde 650–850% Waffenschaden als Blitzschaden zufügt')));
                    target.push(ko.observable(new Kanai.Equipment('Schlächterschnitzer', 'Der Schlächter lebt in seinem Schnitzer weiter')));
                    target.push(ko.observable(new Kanai.Equipment('Himmelswächter', 'Alle 60 Sek. erhaltet Ihr 60 Sek. lang ein zufälliges Gebot')));
                    target.push(ko.observable(new Kanai.Equipment('Donnerzorn, Gesegnete Klinge des Windsuchers', 'Chance, Eurem Gegner bei einem Treffer einen Blitzschlag zu versetzen, der 279–372% Waffenschaden als Blitzschaden verursacht und dann auf weitere Gegner in der Nähe überspringt. Bei jedem getroffenen Gegner werden dessen Angriffs- und Bewegungsgeschwindigkeit 3 Sek. lang um 30% reduziert. Dieser Effekt springt auf bis zu 5 zusätzliche Gegner über')));
                    target.push(ko.observable(new Kanai.Equipment('Arthefs Lebensfunke', 'Ihr werdet um 3–4% Eures verlorenen Lebens geheilt, wenn Ihr einen untoten Gegner tötet')));
                    target.push(ko.observable(new Kanai.Equipment('Seelenberster', 'Wenn Ihr einen Gegner tötet, explodiert er und fügt allen Gegnern im Umkreis von 20 Metern 450–600% Eures Lebens pro getötetem Gegner als Schaden zu. Ihr erhaltet kein Leben pro getötetem Gegner mehr.')));
                    target.push(ko.observable(new Kanai.Equipment('Der Schmelzofen', 'Erhöht den Schaden gegen Elitegegner um 40–50%')));
                    target.push(ko.observable(new Kanai.Equipment('Maloths Fokus', 'Der Anblick dieses Stabes schlägt Gegner gelegentlich in die Flucht')));
                    target.push(ko.observable(new Kanai.Equipment('Wachsamkeit', "Chance, 'HeiligeEinkehr' zu wirken, wenn Ihr getroffen werdet")));
                    target.push(ko.observable(new Kanai.Equipment('Der Großwesir', "Reduziert die Arkankraftkosten von 'Meteor' um 50%")));
                    target.push(ko.observable(new Kanai.Equipment('Der Schwelende Kern', 'Niedere Gegner werden jetzt an den Einschlagsort Eures Meteors gelockt')));
                    target.push(ko.observable(new Kanai.Equipment('Der Peiniger', 'Ihr betört manchmal Gegner, wenn Ihr sie trefft')));
                    target.push(ko.observable(new Kanai.Equipment('Rinderbardike', 'Chance, bei einem Treffer eine Herde mörderischer Kühe herbeizurufen')));
                    target.push(ko.observable(new Kanai.Equipment('Klinge der Verheißung', "Zwei Gegner, die von 'Schuldspruch' betroffen sind, rufen ebenfalls eine Explosion hervor")));
                    target.push(ko.observable(new Kanai.Equipment('Valtheks Zurechtweisung', "'Energiewirbel' bewegt sich jetzt geradlinig")));
                    target.push(ko.observable(new Kanai.Equipment('Blutsbruder', 'Gewährt eine Chance von 15–20%, dass Angriffe geblockt werden. Geblockte Angriffe verursachen 30% weniger Schaden. Nach dem Blocken eines Angriffs verursacht Euer nächster Angriff 30% mehr Schaden.')));
                    target.push(ko.observable(new Kanai.Equipment('Wermut', "Belegt Gegner in der Nähe ununterbrochen mit 'Heuschreckenplage'.")));
                    target.push(ko.observable(new Kanai.Equipment('Maximus', 'Chance, bei einem Treffer einen dämonischen Sklaven zu beschwören')));
                    target.push(ko.observable(new Kanai.Equipment('Stalgards Dezimierer', 'Bei Nahkampfangriffen wird eine Axt auf einen Gegner in der Nähe geschleudert, die ihm 550–700% Waffenschaden als physischen Schaden zufügt')));
                    target.push(ko.observable(new Kanai.Equipment('Geißel', 'Chance von 20–45%, mit dämonischer Wut zu explodieren und 1.800-2.000% Waffenschaden als Feuerschaden zu verursachen, wenn Ihr angreift')));
                    target.push(ko.observable(new Kanai.Equipment('Weihrauchstab des großen Tempels', "Reduziert die Geisteskraftkosten von 'Wogedes Lichts' um 50%")));
                    target.push(ko.observable(new Kanai.Equipment('Cams Erwiderung', "'Himmlische Vollstreckung' kann innerhalb von 4 Sek. wieder eingesetzt werden, bevor die Abklingzeit ausgelöst wird")));
                    target.push(ko.observable(new Kanai.Equipment('Der Fluss der Ewigkeit', "Reduziert die Abklingzeit von 'Schlag der Sieben Fäuste' um 60%")));
                    target.push(ko.observable(new Kanai.Equipment('Fliegender Drache', 'Ihr verdoppelt manchmal Eure Angriffsgeschwindigkeit, wenn Ihr angreift')));
                    target.push(ko.observable(new Kanai.Equipment('Unheilvolles Relikt', "Gegner, die getötet werden, während 'Akarats Champion' aktiv ist, werden 10 Sek. lang zu Avataren von 'Phalanx'")));
                    target.push(ko.observable(new Kanai.Equipment('Goldener Häuter', "'Schwungangriff' stellt 4–6 Zorn pro getroffenem Gegner wieder her")));
                    target.push(ko.observable(new Kanai.Equipment('Schicksal der Grausamen', "Ihr erhaltet zwei zusätzliche Strahlen 'Himmelsfuror'")));
                    target.push(ko.observable(new Kanai.Equipment('Held der Bastion', "'Raserei' ist bis zu 10-mal stapelbar")));
                    target.push(ko.observable(new Kanai.Equipment('Kriegsstab von General Quang', "'Gewitterfront' erhält den Effekt der Rune 'Rückenwind'")));
                    target.push(ko.observable(new Kanai.Equipment('Wut des vernichteten Gipfels', "Reduziert die Wutkosten von 'Seismisches Schmettern' um 50%")));
                    target.push(ko.observable(new Kanai.Equipment('Der Hammer des Richtspruchs', "Wenn 'Hammer der Urahnen' 3 oder weniger Ziele trifft, erhaltet Ihr 25 Wut zurück")));
                    target.push(ko.observable(new Kanai.Equipment('Hühnerauge', 'Chance von 25–50% auf ein Gegacker, wenn Ihr angreift')));
                    target.push(ko.observable(new Kanai.Equipment('Madawcs Schmerz', 'Ihr betäubt Gegner für 2 Sek., wenn Ihr sie das erste Mal trefft')));
                    target.push(ko.observable(new Kanai.Equipment('Löwenbogen von Hashir', 'Bolas haben eine Chance von 15–20%, bei ihrer Explosion alle Gegner im Umkreis von 24 Metern heranzuziehen')));
                    target.push(ko.observable(new Kanai.Equipment('Ende der Odyssee', "Feinde, die von 'Einfangender Schuss' getroffen und verlangsamt werden, erleiden um 20–25% erhöhten Schaden aus allen Quellen")));
                    target.push(ko.observable(new Kanai.Equipment('Kriderschuss', "'Elementarpfeil' erzeugt jetzt 3–4 Hass")));
                    target.push(ko.observable(new Kanai.Equipment('Yangs Reflexbogen', "Erhöht die Angriffsgeschwindigkeit von 'Mehrfachschuss' um 50%.")));
                    target.push(ko.observable(new Kanai.Equipment('Rabenflügel', 'Ein Rabe fliegt an Eurer Seite')));
                    target.push(ko.observable(new Kanai.Equipment('Dämonenmaschine', 'Chance von 35–65%, explosive Pfeile zu verschießen, wenn Ihr angreift')));
                    target.push(ko.observable(new Kanai.Equipment('Eiterspeier', 'Chance von 25–50%, einen Säureklumpen zu werfen, wenn Ihr angreift')));
                    target.push(ko.observable(new Kanai.Equipment('Chanons Balläster', 'Eure Stachelfallen locken Gegner an. Gegner können einmal alle 12–16 Sek. angelockt werden')));
                    target.push(ko.observable(new Kanai.Equipment('Höllenplage', 'Macht Gegner manchmal bewegungsunfähig, wenn Ihr sie trefft')));
                    target.push(ko.observable(new Kanai.Equipment('Katastrophe', 'Ziele, die Ihr trefft, werden todgeweiht')));
                    target.push(ko.observable(new Kanai.Equipment('Sturm der Wojahnni', "Erhöht den Schaden von 'Schnellfeuer' für jede Sekunde Kanalisieren um 30–40%. Dieser Effekt ist bis zu 4-mal stapelbar.")));
                    target.push(ko.observable(new Kanai.Equipment('Höllenjäger', "Chance von 7–10%, bei einem Treffer 'Stachelfalle', 'Krähenfüße' oder 'Geschützturm' auszulösen")));
                    target.push(ko.observable(new Kanai.Equipment('Danettas Rache', "'Salto' erhält den Effekt der Rune 'Geschüttelt, nicht gerührt'")));
                    target.push(ko.observable(new Kanai.Equipment('Danettas Trotz', "Ihr hinterlasst beim Einsatz von 'Salto' eine Kopie von Euch")));
                    target.push(ko.observable(new Kanai.Equipment('Der Untergang der Dämonen', "'Stachelfalle - Klebefalle' springt auf Gegner in der Nähe über, wenn sie explodiert.")));
                    target.push(ko.observable(new Kanai.Equipment("Blankbogen von K'mar", "'Sperrfeuer' erhält den Effekt der Rune 'Wehender Schatten'")));
                    target.push(ko.observable(new Kanai.Equipment('Tödliches Drama', "Verdoppelt die Anzahl der Einschläge von 'Bombardement'")));
                    target.push(ko.observable(new Kanai.Equipment("Orpheus' Wink", "Reduziert die Abklingzeit von 'Zeit verlangsamen' um 40 %")));
                    target.push(ko.observable(new Kanai.Equipment('Vallas Vermächtnis', 'Die Projektile von Speerfeuer durchschlagen Ziele.')));
                    target.push(ko.observable(new Kanai.Equipment('Ätherwandler', "'Teleportation' hat keine Abklingzeit mehr, aber kostet 25 Arkankraft")));
                    target.push(ko.observable(new Kanai.Equipment('Zauberstab von Woh', "Nach dem Wirken von 'Explosion' werden drei weitere Explosionen ausgelöst")));
                    target.push(ko.observable(new Kanai.Equipment('Die Verwehrung', "Jeder von Eurem 'Schwungangriff' getroffene Gegner erhöht den Schaden Eures nächsten 'Schwungangriffs' um 30–40%. Bis zu 5-mal stapelbar.")));
                    target.push(ko.observable(new Kanai.Equipment('Verteidiger der Westmark', 'Einen Angriff zu blocken gewährt eine Chance, einen heranstürmenden Wolf herbeizurufen, der allen Gegnern, die er berührt, 800–1000% Waffenschaden zufügt')));
                    target.push(ko.observable(new Kanai.Equipment('Maß des Zirkels', 'Ihr erleidet 45–60% weniger Schaden von geblockten Angriffen')));
                    target.push(ko.observable(new Kanai.Equipment('Eberlis Charo', "Reduziert die Abklingzeit von 'Himmelsfuror' um 50%")));
                    target.push(ko.observable(new Kanai.Equipment('Ablenkender Frost', 'Wenn Ihr einen Angriff blockt, besteht die Chance, den Angreifer 0,5–1,5 Sek. lang einzufrieren')));
                    target.push(ko.observable(new Kanai.Equipment('Funkenstab der Schlange', 'Ihr könnt eine zusätzliche Hydra gleichzeitig aktiv haben')));
                    target.push(ko.observable(new Kanai.Equipment('Sloraks Wahnsinn', 'Dieser Zauberstab findet Euren Tod äußerst erheiternd')));
                    target.push(ko.observable(new Kanai.Equipment("Vo'Toyias' Dornschild", "Gegner, die von 'Provokation' betroffen sind, erleiden doppelten Schaden durch Dornen")));
                    target.push(ko.observable(new Kanai.Equipment('Elfenbeinturm', "Geblockte Angriffe lösen ein 'Himmelsfeuer' in Blickrichtung aus")));
                    target.push(ko.observable(new Kanai.Equipment('Johannas Schutzschild', "Erhöht den Schaden der ersten 3 getroffenen Gegner von 'Gesegneter Hammer' um 250%.")));
                    target.push(ko.observable(new Kanai.Equipment('Geheiligtes Bollwerk', "'Eisenhaut' erhöht zusätzlich Euren Blockwert um 60%")));
                    target.push(ko.observable(new Kanai.Equipment('Akarats Erwachen', 'Jedes erfolgreiche Blocken eines Angriffs hat eine Chance von 20–25%, jegliche Abklingzeiten um 1 Sek. zu reduzieren')));
                    target.push(ko.observable(new Kanai.Equipment('Frydehrs Zorn', "'Schuldspruch' hat keine Abklingzeit mehr, aber kostet 40 Zorn")));
                    target.push(ko.observable(new Kanai.Equipment("Piro Marella", "Reduziert die Zornkosten von 'Schildstoß' um 50%")));
                    target.push(ko.observable(new Kanai.Equipment('Jekangbrett', "'Gesegneter Schild' springt auf bis zu 4–6 weitere Gegner über")));
                    target.push(ko.observable(new Kanai.Equipment('Höllenschädel', 'Erhöht Euren Schaden um 10%, wenn Ihr eine Zweihandwaffe verwendet')));
                    target.push(ko.observable(new Kanai.Equipment('Der letzte Zeuge', "'Gleißender Schild' trifft jetzt sämtliche Gegner, die Euch umgeben")));
                    target.push(ko.observable(new Kanai.Equipment('Erlösung', 'Wenn Ihr einen Angriff blockt, werdet Ihr und Eure Verbündeten um 20–30% des geblockten Betrags geheilt')));
                    target.push(ko.observable(new Kanai.Equipment('Unnachgiebige Phalanx', "'Phalanx' wird 2-mal ausgelöst")));
                    target.push(ko.observable(new Kanai.Equipment('Erhabene Überzeugung', 'Wenn Ihr einen Angriff blockt, habt Ihr basierend auf Eurer aktuellen Menge Zorn eine Chance von bis zu 15–20%, den Angreifer 1,5 Sek. lang zu betäuben')));
                    target.push(ko.observable(new Kanai.Equipment('Henris ewige Jagd', 'Wenn ein Gegner Euch zum ersten Mal trifft, wird dieser Schaden um 60–80% reduziert. Darüber hinaus wird der Gegner 3 Sek. lang betört.')));
                    target.push(ko.observable(new Kanai.Equipment('Homunkulus', 'Alle 2 Sek. wird automatisch ein Zombiehund beschworen, der an Eurer Seite kämpft')));
                    target.push(ko.observable(new Kanai.Equipment('Uhkapische Schlange', '25–30% des Euch zugefügten Schadens wird auf Eure Zombiehunde umgelenkt')));
                    target.push(ko.observable(new Kanai.Equipment('Licht der Gnade', "'Froststrahl' durchschlägt jetzt Gegner")));
                    target.push(ko.observable(new Kanai.Equipment('Shukranis Triumph', "'Geistwandler' hält an, bis Ihr angreift oder sich ein Gegner innerhalb von 30 Metern von Euch befindet")));
                    target.push(ko.observable(new Kanai.Equipment('Mykens Hasskugel', "'Stromschlag' kann auf Gegner überspringen, die bereits getroffen wurden")));
                    target.push(ko.observable(new Kanai.Equipment('Der Oculus', "Chance von bis zu 20%, die Abklingzeit von 'Teleportation' zurückzusetzen, wenn Ihr Schaden erleidet")));
                    target.push(ko.observable(new Kanai.Equipment('Vermächtnis des toten Mannes', "'Mehrfachschuss' trifft Gegner, die weniger als 60% Leben haben, zweimal")));
                    target.push(ko.observable(new Kanai.Equipment('Rucksack des Bombenschützen', 'Ihr könnt 2 zusätzliche Geschütztürme gleichzeitig aktiv haben')));
                    target.push(ko.observable(new Kanai.Equipment('Wintereile', "Es besteht eine Chance von 15–20%, dass Gegner, die durch Kälteschaden sterben, 'Frostnova' auslösen")));
                    target.push(ko.observable(new Kanai.Equipment('Triumvirat', "Eure Kernzauber erhöhen den Schaden von 'Arkane Kugel' 6 Sek. lang um 100%. Bis zu 3-mal stapelbar.")));
                    target.push(ko.observable(new Kanai.Equipment('Emimeis tiefer Beutel', 'Bolas explodieren jetzt ohne Verzögerung')));
                    target.push(ko.observable(new Kanai.Equipment('Akkurate Bolzen', "Der Kugelblitz von 'Elementarpfeil' bewegt sich mit einer Geschwindigkeit von 30–40%")));
                    target.push(ko.observable(new Kanai.Equipment('Neunter Köcher des Cirri', "'Hungriger Pfeil' hat eine zusätzliche Chance von 20–25%, das Ziel zu durchschlagen")));
                    target.push(ko.observable(new Kanai.Equipment('Dornen des brodelnden Hasses', "'Chakram' erzeugt 3–4 Hass")));
                    target.push(ko.observable(new Kanai.Equipment('Walrosszahn', "Reduziert die Manakosten von 'Zombieangreifer' um 40–50%.")));
                    target.push(ko.observable(new Kanai.Equipment('Wünschelrute von Su Wong', "'Säurewolke' erhält den Effekt der Rune 'Schleimschmeißer'.")));
                    target.push(ko.observable(new Kanai.Equipment("Goldgeißel", "'Niederstrecken' springt jetzt auf 3 weitere Gegner über")));
                    target.push(ko.observable(new Kanai.Equipment("Unbarmherzigkeit", "'Hammer der Urahnen' hat eine Chance von 30%, für 20 Sek. einen Urahnen zu beschwören")));
                    target.push(ko.observable(new Kanai.Equipment("Aschebeil", "Chance von 50%, einen Feuerball zu wirken, wenn Ihr angreift")));
                    target.push(ko.observable(new Kanai.Equipment("Zerfetzer", "Chance von 50%, den Boden unter den Füßen Eurer Gegner aufbrechen zu lassen, wenn Ihr angreift")));
                    target.push(ko.observable(new Kanai.Equipment("Ahavarion, Stab von Lycander", "Es besteht eine Chance, dass beim Töten eines Dämons ein zufälliger Schreineffekt auf Euch gewirkt wird")));
                    target.push(ko.observable(new Kanai.Equipment("Buriza-Do Kyanon", "Eure Geschosse durchschlagen ihre Ziele zusätzlich 2-mal")));
                    target.push(ko.observable(new Kanai.Equipment("Mauer der Menschheit", "Chance von 20–30%, Euch mit einem Knochenschild zu umgeben, wenn Ihr getroffen werdet")));
                    target.push(ko.observable(new Kanai.Equipment("In-geom", "Die Abklingzeiten Eurer Fertigkeiten werden jedes Mal 15 Sek. lang um 10 Sek. reduziert, wenn Ihr eine Gruppe von Elitegegnern tötet")));
                    target.push(ko.observable(new Kanai.Equipment("Kosmischer Strang", "'Teleportation' erhält den Effekt der Rune 'Wurmloch'")));
                    target.push(ko.observable(new Kanai.Equipment('Spiegelkugel', "'Magisches Geschoss' verschießt 2 zusätzliche Geschosse")));
                }
        }
    },
    getJewelry(target) {
        switch (this.culture()) {
            case "en-US":
            default:
                target.push(ko.observable(new Kanai.Equipment("Countess Julia's Cameo", "Prevent all Arcane damage taken and heal yourself for 25% of the amount prevented.")));
                target.push(ko.observable(new Kanai.Equipment("Dovu Energy Trap", "Increases duration of Stun effects by 25%.")));
                target.push(ko.observable(new Kanai.Equipment("Golden Gorget of Leoric", "After earning a massacre bonus, 6 Skeletons are summoned to fight by your side for 10 seconds")));
                target.push(ko.observable(new Kanai.Equipment("Kymbo's Gold", "Picking up gold heals you for an amount equal to the gold that was picked up.")));
                target.push(ko.observable(new Kanai.Equipment("Mara's Kaleidoscope", "Prevent all Poison damage taken and heal yourself for 15% of the amount prevented.")));
                target.push(ko.observable(new Kanai.Equipment("Moonlight Ward", "Hitting an enemy within 15 yards has a chance to ward you with shards of Arcane energy that explode when enemies get close, dealing 320% weapon damage as Arcane to enemies within 15 yards.")));
                target.push(ko.observable(new Kanai.Equipment("Overwhelming Desire", "Chance on hit to charm the enemy. While charmed, the enemy takes 35% more damage")));
                target.push(ko.observable(new Kanai.Equipment("Rakoff's Glass of Life", "Enemies you kill have a 4% additional chance to drop a health globe.")));
                target.push(ko.observable(new Kanai.Equipment("Talisman of Aranoch", "Prevent all Cold damage taken and heal yourself for 15% of the amount prevented.")));
                target.push(ko.observable(new Kanai.Equipment("The Ess of Johan", "Chance on hit to pull in enemies toward your target and Slow them by 80%.")));
                target.push(ko.observable(new Kanai.Equipment("The Star of Azkaranth", "Prevent all Fire damage taken and heal yourself for 15% of the amount prevented.")));
                target.push(ko.observable(new Kanai.Equipment("Xephirian Amulet", "Prevent all Lightning damage taken and heal yourself for 15% of the amount prevented.")));
                target.push(ko.observable(new Kanai.Equipment("Arcstone", "Lightning pulses periodically between all wearers of this item, dealing 1500% weapon damage.")));
                target.push(ko.observable(new Kanai.Equipment("Avarice Band", "Each time you pick up gold, increase your Gold and Health Pickup radius by 1 yard for 10 seconds, stacking up to 30 times")));
                target.push(ko.observable(new Kanai.Equipment("Band of Hollow Whispers", "This ring occasionally haunts nearby enemies.")));
                target.push(ko.observable(new Kanai.Equipment("Band of the Rue Chambers", "Your Spirit Generators generate 50% more Spirit.")));
                target.push(ko.observable(new Kanai.Equipment("Broken Promises", "After 5 consecutive non-critical hits, your chance to critically hit is increased to 100% for 3seconds.")));
                target.push(ko.observable(new Kanai.Equipment("Bul'Kathos's Wedding Band", "You drain life from enemies around you.")));
                target.push(ko.observable(new Kanai.Equipment("Convention of Elements", "Gain 200% increased damage to a single element for 4 seconds. This effect rotates through the elements available to your class in the following order: Arcane, Cold, Fire, Holy, Lightning, Physical, Poison.")));
                target.push(ko.observable(new Kanai.Equipment("Eternal Union", "Increases the duration of Phalanx avatars by 200%.")));
                target.push(ko.observable(new Kanai.Equipment("Halo of Arlyse", "Your Ice Armor now reduces damage from melee attacks by 60% and automatically casts Frost Nova whenever you take 10% of your Life in damage.")));
                target.push(ko.observable(new Kanai.Equipment("Haunt of Vaxo", "Summons shadow clones to your aid when you Stun an enemy. This effect may occur once every 30 seconds.")));
                target.push(ko.observable(new Kanai.Equipment("Hellfire Ring", "Chance on hit to engulf the ground in lava, dealing 200% weapon damage per second for 6 seconds.")));
                target.push(ko.observable(new Kanai.Equipment("Krede's Flame", "Taking Fire damage restores your primary resource.")));
                target.push(ko.observable(new Kanai.Equipment("Nagelring", "Summons a Fallen Lunatic to your side every 10 seconds.")));
                target.push(ko.observable(new Kanai.Equipment("Obsidian Ring of the Zodiac", "Reduce the remaining cooldown of one of your skills by 1 seconds when you hit with a resource-spending attack.")));
                target.push(ko.observable(new Kanai.Equipment("Oculus Ring", "Chance to create an area of focused power on killing a monster. Damage is increased by 40% while standing in the area.")));
                target.push(ko.observable(new Kanai.Equipment("Pandemonium Loop", "Enemies slain while Feared die in a bloody explosion for 800% weapon damage and cause other nearby enemies to flee in Fear")));
                target.push(ko.observable(new Kanai.Equipment("Puzzle Ring", "Summon a treasure goblin who picks up normal-quality items for you. After picking up 12 items, he drops a rare item with a chance for a legendary.")));
                target.push(ko.observable(new Kanai.Equipment("Rechel's Ring of Larceny", "Gain 60% increased movement speed for 4 seconds after Fearing an enemy.")));
                target.push(ko.observable(new Kanai.Equipment("Ring of Royal Grandeur", "Reduces the number of items needed for set bonuses by 1 (to a minimum of 2).")));
                target.push(ko.observable(new Kanai.Equipment("Rogar's Huge Stone", "Increase your Life per Second by up to 100% based on your missing Life.")));
                target.push(ko.observable(new Kanai.Equipment("Skull Grasp", "Increase the damage of Whirlwind by 400% weapon damage.")));
                target.push(ko.observable(new Kanai.Equipment("The Short Man's Finger", "Gargantuan instead summons three smaller gargantuans each more powerful than before.")));
                target.push(ko.observable(new Kanai.Equipment("The Tall Man's Finger", "Zombie Dogs instead summons a single gargantuan dog with more damage and health than all other dogs combined.")));
                target.push(ko.observable(new Kanai.Equipment("Unity", "All damage taken is split between wearers of this item.")));
                target.push(ko.observable(new Kanai.Equipment("Wyrdward", "Lightning damage has a 35% chance to Stun for 1.5 seconds.")));
                break;
            case "de-DE":
                {
                    target.push(ko.observable(new Kanai.Equipment('Kamee von Gräfin Julia', 'Ignoriert sämtlichen eintreffenden Arkanschaden und heilt Euch um 20–25% der ignorierten Menge')));
                    target.push(ko.observable(new Kanai.Equipment('Energiefalle von Dovu', 'Erhöht die Dauer von Betäubungseffekten um 25%')));
                    target.push(ko.observable(new Kanai.Equipment('Leorics goldenes Gorget', 'Nach Erhalt eines Massakerbonus werden 6 Skelettwächter beschworen, die 10 Sek. lang an Eurer Seite kämpfen')));
                    target.push(ko.observable(new Kanai.Equipment("Kymbos Gold", 'Wenn Ihr Gold aufsammelt, werdet Ihr um den gleichen Betrag geheilt')));
                    target.push(ko.observable(new Kanai.Equipment('Maras Kaleidoskop', 'Ignoriert sämtlichen eintreffenden Giftschaden und heilt Euch um 10–15% der ignorierten Menge')));
                    target.push(ko.observable(new Kanai.Equipment('Mondlichtschutz', 'Wenn Ihr einen Gegner im Umkreis von 15 Metern trefft, besteht die Chance, dass Ihr von Splittern arkaner Energie geschützt werdet. Diese explodieren, wenn sich Gegner nähern, und fügen Gegnern im Umkreis von 15 Metern 240–320% Waffenschaden als Arkanschaden zu.')));
                    target.push(ko.observable(new Kanai.Equipment('Überwältigendes Verlangen', 'Chance, bei einem Treffer den Gegner zu betören. Betörte Gegner erleiden 35% mehr Schaden.')));
                    target.push(ko.observable(new Kanai.Equipment('Rakoffs Glas des Lebens', 'Gegner, die Ihr tötet, haben eine zusätzliche Chance von 4%, eine Heilkugel fallen zu lassen')));
                    target.push(ko.observable(new Kanai.Equipment('Talisman von Aranoch', 'Ignoriert sämtlichen eintreffenden Kälteschaden und heilt Euch um 10–15% der ignorierten Menge')));
                    target.push(ko.observable(new Kanai.Equipment('Johanns Essenz', 'Chance, Gegner bei einem Treffer zu Eurem Ziel zu ziehen und sie um 60–80% zu verlangsamen')));
                    target.push(ko.observable(new Kanai.Equipment('Der Stern von Azkaranth', 'Ignoriert sämtlichen eintreffenden Feuerschaden und heilt Euch um 10–15% der ignorierten Menge')));
                    target.push(ko.observable(new Kanai.Equipment('Xephirisches Amulett', 'Ignoriert sämtlichen eintreffenden Blitzschaden und heilt Euch um 10–15% der ignorierten Menge')));
                    target.push(ko.observable(new Kanai.Equipment('Arcusstein', 'Blitze springen regelmäßig zwischen allen Trägern dieses Gegenstands über und verursachen 1000–1500% Waffenschaden')));
                    target.push(ko.observable(new Kanai.Equipment('Band der Habgier', 'Jedes Mal, wenn Ihr Gold aufsammelt, wird Euer Gold- und Kugelsammelradius für 10 Sek. um 1 Meter erhöht. Bis zu 30-mal stapelbar')));
                    target.push(ko.observable(new Kanai.Equipment('Band des leeren Raunens', 'Dieser Ring sucht gelegentlich Gegner in der Nähe heim')));
                    target.push(ko.observable(new Kanai.Equipment('Band der Reuekammern', 'Geisteskrafterzeuger erzeugen 40–50% mehr Geisteskraft')));
                    target.push(ko.observable(new Kanai.Equipment('Gebrochene Versprechen', 'Nach 5 aufeinanderfolgenden Treffern ohne kritischen Treffer wird Eure Chance, einen kritischen Treffer zu landen, 3 Sek. lang auf 100% erhöht')));
                    target.push(ko.observable(new Kanai.Equipment("Bul-Kathos' Hochzeitsring", "Ihr saugt Gegnern um Euch herum das Leben aus")));
                    target.push(ko.observable(new Kanai.Equipment('Zusammenkunft der Elemente', 'Erhöht den Schaden einer Schadensart 4 Sek. lang um 150–200%. Der Effekt rotiert in folgender Reihenfolge zwischen den einzelnen Schadensarten, sofern sie Eurer Klasse zur Verfügung stehen: Arkan, Kälte, Feuer, Heilig, Blitz, Physisch, Gift')));
                    target.push(ko.observable(new Kanai.Equipment('Ewige Einheit', "Erhöht die Dauer der Avatare von 'Phalanx' um 200%")));
                    target.push(ko.observable(new Kanai.Equipment('Arlyses Halo', "Eure Eisrüstung reduziert nun den durch Nahkampfangriffe erlittenen Schaden um 60% und wirkt zusätzlich jedes Mal automatisch 'Frostnova', wenn Ihr mindestens 10% Eures Lebens an Schaden erlitten habt")));
                    target.push(ko.observable(new Kanai.Equipment('Vaxos Heimsuchung', 'Ruft Schattenklone zu Eurer Hilfe, wenn Ihr einen Gegner betäubt. Dieser Effekt kann nur einmal alle 30 Sek. auftreten')));
                    target.push(ko.observable(new Kanai.Equipment("Höllenfeuerring", "Ihr feuert manchmal eine explosive Höllenfeuerkugel ab, wenn Ihr angreift")));
                    target.push(ko.observable(new Kanai.Equipment('Kredes Flamme', 'Wenn Ihr Feuerschaden erleidet, wird Eure Primärressource wiederhergestellt')));
                    target.push(ko.observable(new Kanai.Equipment('Nagelring', 'Ruft alle 10–12 Sek. einen Irren der Gefallenen herbei, der an Eurer Seite kämpft')));
                    target.push(ko.observable(new Kanai.Equipment('Obsidianring des Tierkreises', 'Reduziert die verbleibende Abklingzeit einer Eurer Fertigkeiten um 1 Sek., wenn ein Ressourcen verbrauchender Angriff einen Gegner trifft')));
                    target.push(ko.observable(new Kanai.Equipment('Oculus-Ring', 'Wenn Ihr einen Gegner tötet, besteht eine Chance, dass ein Bereich fokussierter Macht entsteht. Charaktere, die sich in diesem Bereich aufhalten, verursachen um 35–40% erhöhten Schaden.')));
                    target.push(ko.observable(new Kanai.Equipment('Reif des Wahnsinns', 'Gegner, die getötet werden, während sie von Furcht ergriffen sind, sterben in einer blutigen Explosion und lassen Gegner in der Nähe vor Furcht fliehen')));
                    target.push(ko.observable(new Kanai.Equipment('Flechtring', 'Beschwört einen Schatzgoblin, der Gegenstände normaler Qualität für Euch aufsammelt. Nachdem er 12–16 Gegenstände aufgesammelt hat, lässt er einen seltenen Gegenstand oder möglicherweise einen legendären fallen.')));                    
                    target.push(ko.observable(new Kanai.Equipment('Rechels Ring des Diebstahls', 'Eure Bewegungsgeschwindigkeit wird 4 Sek. lang um 45–60% erhöht, nachdem Ihr einen Gegner mit Furcht erfüllt habt')));
                    target.push(ko.observable(new Kanai.Equipment('Ring des königlichen Prunks', 'Reduziert die Anzahl der für Setboni benötigten Gegenstände um 1 (auf ein Minimum von 2)')));
                    target.push(ko.observable(new Kanai.Equipment('Rogars riesiger Stein', 'Erhöht Euer Leben pro Sekunde um bis zu 75–100%, basierend auf Eurem verlorenen Leben')));
                    target.push(ko.observable(new Kanai.Equipment('Schädelgriff', "Erhöht den Waffenschaden von 'Wirbelwind' um 400%")));
                    target.push(ko.observable(new Kanai.Equipment('Ring des kleinen Mannes', "'Koloss' beschwört nun drei kleinere Kolosse, die alle stärker sind als der vorherige")));
                    target.push(ko.observable(new Kanai.Equipment('Ring des großen Mannes', "'Zombiehund' beschwört einen einzelnen riesigen Hund, der mehr Schaden verursacht und über mehr Leben verfügt als alle anderen Hunde zusammen")));
                    target.push(ko.observable(new Kanai.Equipment('Einheit', 'Jeglicher erlittene Schaden wird zwischen den Trägern dieses Gegenstands geteilt')));
                    target.push(ko.observable(new Kanai.Equipment('Wyrdschutz', 'Blitzschaden hat eine Chance von 25–35%, Gegner 1,5 Sek. lang zu betäuben')));                    
                }
        }
    }
}
