import React from "react";
import { CardBody } from "reactstrap";
import { pokemonImage } from "../../Utils/helpers";
import { PokemonCardStyle } from "./index.style";

const CardPokemon = ({ pokemon }) => {
  return (
    <PokemonCardStyle>
      <CardBody>
        <img
          role="pokemonPhoto"
          src={pokemonImage(pokemon.url)}
          alt=""
          className="img-fluid"
        />
        <div role="pokemonName" className="pokemon-name">
          {pokemon.name}
        </div>
      </CardBody>
    </PokemonCardStyle>
  );
};
export default CardPokemon;
