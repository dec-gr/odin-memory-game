const pokemonUrl = 'https://pokeapi.co/api/v2/pokemon/';

async function fetchPokemon(pokemonIdArray) {
  const fetchPromises = pokemonIdArray.map(async (id) => {
    const response = await fetch(pokemonUrl + id);
    const responseJson = await response.json();

    return {
      name: responseJson.name,
      url: responseJson.sprites.front_default,
      id: responseJson.id,
    };
  });

  const pokemonArray = await Promise.all(fetchPromises);

  return pokemonArray;
}

export default fetchPokemon;
