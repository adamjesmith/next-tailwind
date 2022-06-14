export async function requestPokemon() {
  const res = await fetch(
    'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0'
  );
  const json = await res.json();

  return json.results;
}
