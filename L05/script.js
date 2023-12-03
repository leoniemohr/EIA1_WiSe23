let entscheidung = prompt("Du triffst dich mit einer Freundin für einen Filmeabend. Ihr steht nun vor der Filmauswahl, wollt ihr lieber einen *Horrorfilm oder einen *Actionfilm schauen?"); //lässt ein popup (prompt) erscheinen mit dem Text in ""


if (entscheidung == "Horrorfilm") { //überprüft ob die bedingung dass Horrorfilm gewählt wird erfüllt ist
     entscheidung = prompt("Ihr habt euch für einen Horrorfilm entschieden, wollt ihr lieber *ES  oder *Psycho schauen?");//wenn ja dann wird der prompt mit text zu Horrorfilm geöffnet
} 

// falls nicht Horrorfilm gewählt wird..
else if (entscheidung == "Actionfilm") { //überprüft ob die wahl actionfilm ist
      entscheidung = prompt("Ihr habt euch für einen Actionfilm entschieden, wollt ihr lieber die *Tribute schauen oder die *Bestimmung?");//wenn ja dann wird der prompt mit text zu actionfilm geöffnet
}


// Zeigt dem Benutzer eine Benachrichtigung (alert) über die getroffene Filmwahl
let Film = alert("Fantastische Entscheidung! Schnappt euch eure Lieblingssnacks, Getränke und eine kuschelige Decke – der Filmabend kann beginnen!");
