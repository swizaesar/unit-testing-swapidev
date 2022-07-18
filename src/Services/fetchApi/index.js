import serviceAction from "../ServiceApi";

const fetchApi = {
  pokemonList: ({ dispatch }) => {
    serviceAction(dispatch).fetchApi({
      url: "/pokemon",
      method: "GET",
      group: "pokemon",
      key: "pokemonList",
    });
  },
};
export default fetchApi;
