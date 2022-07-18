import React from "react";
import { Col } from "reactstrap";
import CardPokemon from "../../Components/Card";

const PokemonList = ({ pokemon }) => {
  return (
    <Col xs={6}>
      <CardPokemon pokemon={pokemon} />
    </Col>
  );
};
export default PokemonList;
