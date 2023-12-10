// Array für Texte
let texte = [
      "Du triffst dich mit einer Freundin für einen Filmeabend. Ihr steht nun vor der Filmauswahl, wollt ihr lieber einen *Horrorfilm oder einen *Actionfilm schauen?",
      "Ihr habt euch für einen Horrorfilm entschieden, wollt ihr lieber *ES oder *Psycho schauen?",
      "Ihr habt euch für einen Actionfilm entschieden, wollt ihr lieber die *Tribute schauen oder die *Bestimmung?",
      "Fantastische Entscheidung! Schnappt euch eure Lieblingssnacks, Getränke und eine kuschelige Decke – der Filmabend kann beginnen!"
  ];
  
  // Funktion für die Benutzereingabe
  function benutzerEingabe(index) {
      return prompt(texte[index]);
  }
  
  // Funktion für die Benachrichtigung
  function zeigeBenachrichtigung(index) {
      alert(texte[index]);
  }
  
  

  
  let entscheidung = benutzerEingabe(0);
  
  if (entscheidung === "Horrorfilm") {
      entscheidung = benutzerEingabe(1);
  } else if (entscheidung === "Actionfilm") {
      entscheidung = benutzerEingabe(2);
  }
  
  zeigeBenachrichtigung(3);
  