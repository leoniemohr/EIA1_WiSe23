// Array für Textteile
let textTeile = [
    "Du triffst dich mit einer Freundin für einen Filmeabend. Ihr steht nun vor der Filmauswahl, wollt ihr lieber einen *Horrorfilm oder einen *Actionfilm schauen?",
    "Ihr habt euch für einen Horrorfilm entschieden, wollt ihr lieber *ES oder *Psycho schauen?",
    "Ihr habt euch für einen Actionfilm entschieden, wollt ihr lieber die *Tribute schauen oder die *Bestimmung?",
    "Ihr schaut den Film *Tribute. Es ist ein actiongeladener Film mit beeindruckenden Spezialeffekten. Ihr seid begeistert von der Handlung und den Charakteren.",
    "Ihr schaut den Film *Bestimmung. Es ist ein packender Actionfilm mit unerwarteten Wendungen. Ihr findet die Story fesselnd und könnt es kaum erwarten, wie es weitergeht.",
    "Ihr schaut den Film *ES. Ein gruseliger Horrorfilm, der euch auf der Couch festnagelt. Jede Szene sorgt für Gänsehaut und Spannung.",
    "Ihr schaut den Film *Psycho. Ein klassischer Psychothriller, der euch bis zur letzten Minute in seinen Bann zieht. Die unvorhersehbare Handlung lässt euch mit offenem Mund zurück."
];

// Funktion für die Benutzereingabe
function benutzerEingabe(index) {
    return prompt(textTeile[index]);
}

// Funktion für die Benachrichtigung
function zeigeBenachrichtigung(index) {
    alert(textTeile[index]);
}

// Hauptprogramm
let entscheidung = benutzerEingabe(0);

if (entscheidung == "Horrorfilm") {
    entscheidung = benutzerEingabe(1);
    if (entscheidung == "ES") {
        zeigeBenachrichtigung(5);
    } else if (entscheidung == "Psycho") {
        zeigeBenachrichtigung(6);
    }
} else if (entscheidung == "Actionfilm") {
    entscheidung = benutzerEingabe(2);
    if (entscheidung == "Tribute") {
        zeigeBenachrichtigung(3);
    } else if (entscheidung == "Bestimmung") {
        zeigeBenachrichtigung(4);
    }
}
