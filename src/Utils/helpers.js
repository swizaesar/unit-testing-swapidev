export const pokemonImage = (url) => {
  const pokemonId = url.split("/")[url.split("/").length - 2];
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
};
