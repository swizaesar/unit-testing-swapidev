import React from "react";
import { CardBody } from "reactstrap";
import { pokemonImage } from "../../Utils/helpers";
import { PokemonCardStyle } from "./index.style";

const CardPokemon = ({ pokemon, onDetailPage = () => {} }) => {
  return (
    <PokemonCardStyle onClick={() => onDetailPage(pokemon)}>
      <CardBody>
        <img src={pokemonImage(pokemon.url)} alt="" className="img-fluid" />
        <div role="pokemonName" className="pokemon-name">
          {pokemon.name}
        </div>
      </CardBody>
    </PokemonCardStyle>
  );
};
export default CardPokemon;
