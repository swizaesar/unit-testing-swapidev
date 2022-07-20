import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Row } from "reactstrap";
import fetchApi from "../../Services/fetchApi";
import PokemonList from "./pokemonList";

const Home = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [pokemon, setPokemon] = React.useState(false);
  React.useEffect(() => {
    fetchApi.pokemonList({ dispatch });
  }, [dispatch]);
  const onDetailPage = (data) => {
    const id = data.url.split("/")[data.url.split("/").length - 2];
    navigate(`/detail/${id}`);
  };
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
            return (
              <PokemonList
                onDetailPage={onDetailPage}
                pokemon={data}
                key={key}
              />
            );
          })}
      </Row>
    </div>
  );
};
export default Home;
