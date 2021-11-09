async function whosThatPokemon(): Promise<string> {

    const id: string = String(Math.floor(Math.random() * 898 + 1));


    let retData: string = await (getPokemon(id));
    let parsedData = JSON.parse(retData);

    // let pic :HTMLImageElement= (document.getElementById("whosthatpokemon") as HTMLImageElement);
    // pic.src = parsedData.sprites.front_default;
    // pic.style.filter = "brightness(0%)"; 
    // pic.height = 200;
    // pic.width = 200;

    return parsedData.name;
}

async function getPokemon(id: String): Promise<string> {
    const http = new XMLHttpRequest();
    const url: string = "https://pokeapi.co/api/v2/pokemon/" + id;

    let ret;
    http.onreadystatechange = function () {
        if (http.readyState == 4 && http.status == 200) {
            ret = http.responseText;
        }
        else {
            ret = undefined;
        }
    }
    http.open("GET", url, false);
    http.send();



    return ret;

}

module.exports = {whosThatPokemon, getPokemon};