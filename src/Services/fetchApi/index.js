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
  pokemonDetail: ({ dispatch, slug }) => {
    serviceAction(dispatch).fetchApi({
      url: `/pokemon/${slug}`,
      method: "GET",
      group: "pokemon",
      key: "pokemonDetail",
    });
  },
};
export default fetchApi;
