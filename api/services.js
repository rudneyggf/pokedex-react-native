const baseUrl = "https://pokeapi.co/api/v2";
const GEN1_TOTAL = 151;

const listPokemonsGen1 = async ({ limit = 30, offset = 0 } = {}) => {
  const restantes = Math.max(0, GEN1_TOTAL - offset);
  const effectiveLimit = Math.min(limit, restantes);

  if (effectiveLimit === 0) {
    return [];
  }

  const url = `${baseUrl}/pokemon?limit=${effectiveLimit}&offset=${offset}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }

    const data = await response.json();

    return data.results.map((pokemon) => {
      const partesUrl = pokemon.url.split("/").filter(Boolean);
      const numero = Number(partesUrl[partesUrl.length - 1]);
      const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero}.png`;

      return {
        numero,
        nome: pokemon.name,
        sprite,
      };
    });
  } catch (erro) {
    console.error("Falha ao buscar Pokémon da 1ª geração:", erro);
    return [];
  }
};

const pokemonDetails = async(numero) =>{

}

export { listPokemonsGen1, pokemonDetails }; 