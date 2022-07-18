import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row } from "reactstrap";
import fetchApi from "../../Services/fetchApi";
import PokemonList from "./pokemonList";

const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [pokemon, setPokemon] = React.useState(false);
  React.useEffect(() => {
    fetchApi.pokemonList({ dispatch });
  }, [dispatch]);
  React.useEffect(() => {
    if (state?.pokemon?.pokemonList?.isSuccess) {
      setPokemon(state.pokemon.pokemonList.data.results);
    }
  }, [state]);
  return (
    <div data-testid="home">
      <Row>
        {pokemon &&
          pokemon.map((data, key) => {
            return <PokemonList pokemon={data} key={key} />;
          })}
      </Row>
    </div>
  );
};
export default Home;
