import React from "react";
import { Col } from "reactstrap";
import CardPokemon from "../../Components/Card";

const PokemonList = ({ pokemon, onDetailPage = () => {} }) => {
  return (
    <Col xs={6}>
      <CardPokemon pokemon={pokemon} onDetailPage={onDetailPage} />
    </Col>
  );
};
export default PokemonList;
