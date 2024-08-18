const pokemonUrl = 'https://pokeapi.co/api/v2/pokemon/';

function capitalise(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

async function fetchPokemon(pokemonIdArray) {
  const fetchPromises = pokemonIdArray.map(async (id) => {
    const response = await fetch(pokemonUrl + id);
    const responseJson = await response.json();

    return {
      name: capitalise(responseJson.name),
      url: responseJson.sprites.front_default,
      id: responseJson.id,
      isClicked: false,
    };
  });

  const pokemonArray = await Promise.all(fetchPromises);

  return pokemonArray;
}

export default fetchPokemon;
