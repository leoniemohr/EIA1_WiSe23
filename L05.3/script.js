movies = [
    "Ihr habt euch für einen Horrorfilm entschieden, wollt ihr lieber <b>Es</b> oder <b>Psycho</b> schauen?",
    "Ihr habt euch für einen Actionfilm entschieden, wollt ihr lieber die <b>Tribute</b> schauen oder die <b>Bestimmung</b>?"
]

horrormovies = [
    "Ihr schaut den Film Es. Ein gruseliger Horrorfilm, der euch auf der Couch festnagelt. Jede Szene sorgt für Gänsehaut und Spannung.",
    "Ihr schaut den Film Psycho. Ein klassischer Psychothriller, der euch bis zur letzten Minute in seinen Bann zieht. Die unvorhersehbare Handlung lässt euch mit offenem Mund zurück."

]

actionmovies = [
    "Ihr schaut den Film die Tribute. Es ist ein actiongeladener Film mit beeindruckenden Spezialeffekten. Ihr seid begeistert von der Handlung und den Charakteren.",
    "Ihr schaut den Film die Bestimmung. Es ist ein packender Actionfilm mit unerwarteten Wendungen. Ihr findet die Story fesselnd und könnt es kaum erwarten, wie es weitergeht."
]

let state = 0;

const input = document.querySelector(".inputForm_field")
const output = document.getElementById("output");

input.addEventListener("keydown", function (event) {
    console.log("test")
    if (event.key == "Enter"){
        if (state == 0){
            if (input.value == "Horrorfilm"){
                output.innerHTML = movies[0]
                input.value = ""
                state = 1
            } else if (input.value == "Actionfilm"){
                output.innerHTML = movies[1]
                input.value = ""
                state = 2
            }
        }

        if (state == 1){
            if (input.value == "Es"){
                output.innerHTML = horrormovies[0]
                input.value = ""
            } else if (input.value == "Psycho"){
                output.innerHTML = horrormovies[1]
                input.value = ""
            }
        } 
        
        if (state == 2){
            if (input.value == "Tribute"){
                output.innerHTML = actionmovies[0]
                input.value = ""
            } else if (input.value == "Bestimmung"){
                output.innerHTML = actionmovies[1]
                input.value = ""
            }
        }
       
    }
})