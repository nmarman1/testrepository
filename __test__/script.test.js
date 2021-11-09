const {whosThatPokemon, getPokemon} = require("../whosThatPokemon");

test('Get pokemon 1, bulbasaur, by number', async ()=>{
    const retData = await getPokemon("1");
    expect(JSON.parse(retData).name).toBe("bulbasaur");
});