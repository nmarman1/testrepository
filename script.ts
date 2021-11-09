const {whosThatPokemon, getPokemon} = require('./whosThatPokemon')

let answer: string;
let guesses: number = 0;
let correct: number = 0;
let guessStage:boolean = false; 

async function getTeamMember(): Promise<number> {

    if (numMons == 6) {
        document.getElementById("Name").innerHTML = "You already have 6 pokemon!";
        return 0;
    }
    let textField: HTMLInputElement = document.getElementById("textfield") as HTMLInputElement;
    let x: string = textField.value;
    textField.value = "";

    if (x == "") {
        console.log("Nothing!");
        return 0;
    }

    x = x.toLowerCase();

    let retData:string = await getPokemon(x);
    if(retData == undefined){
        document.getElementById("Name").innerHTML = `${x} not found!`;
        return 0;
    }
    numMons++;

    let parsedData = JSON.parse(retData);
    console.log(parsedData.sprites.front_default);

    let picture = document.createElement("img");
    picture.addEventListener("click", () => {
        numMons--;
        picture.remove();
    });
    picture.src = parsedData.sprites.front_default;
    document.body.insertBefore(picture, document.getElementById("Guesser"));

    document.getElementById("Name").innerHTML = `It's ${x}!`;

    return 0;
}

let numMons: number = 0;

document.getElementById("Clicked").addEventListener("click", getTeamMember);
document.getElementById("textfield").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        getTeamMember();
    }
});




document.getElementById("WTP B1").addEventListener("click", async function() { 
    if(guessStage){
        this.innerHTML="Pick a random pokemon";
        guesses++;
        (document.getElementById("whosthatpokemon") as HTMLImageElement).style.filter = "brightness(100%)";
        document.getElementById("Answer").innerHTML = `It was ${answer}! Score: ${correct}/${guesses}`;
        guessStage = false;

    }
    else{
        answer = await whosThatPokemon(); 
        this.innerHTML="Give Up";
        guessStage = true;
    }
});

document.getElementById("guess").addEventListener("keydown", async function (e) {
    if (e.key === "Enter") {
        let parsed_answer = answer.match(/^([a-z0-9]*)/)[0];

        if(parsed_answer == (this as HTMLTextAreaElement).value.toLowerCase()){
            if(guessStage){
            correct ++;
            guesses++;
            document.getElementById("Answer").innerHTML = `It's ${answer}! Score: ${correct}/${guesses}`;
            (document.getElementById("whosthatpokemon") as HTMLImageElement).style.filter = "brightness(100%)";
            document.getElementById("WTP B1").innerHTML="Pick a random pokemon";
            guessStage = false;
            }
            else{
                answer = await whosThatPokemon();
                document.getElementById("WTP B1").innerHTML = "Give Up";
                this.innerHTML = "";
                guessStage = true;
            }
        }
        else{
            if(guessStage){
                guesses++;
                document.getElementById("Answer").innerHTML = `Nope! Try again! Score: ${correct}/${guesses}`;
                document.getElementById("guess").innerHTML = "";
            }
            else{
                answer = await whosThatPokemon();
                document.getElementById("WTP B1").innerHTML = "Give Up";
                this.innerHTML = "";
                guessStage = true;
            }
        }
        (this as HTMLTextAreaElement).value = "";
    }
});


document.onkeydown = function (event) {
    if (event.ctrlKey && event.shiftKey && event.key == "I") {
        return false;
    }
}

