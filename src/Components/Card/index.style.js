import { Card } from "reactstrap";
import styled from "styled-components";

export const PokemonCardStyle = styled(Card)`
  margin-bottom: 30px;
  color: #000000;
  cursor: pointer;
  img {
    display: block;
    margin: auto;
    margin-bottom: 15px;
  }
  .pokemon-name {
    text-align: center;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 500;
  }
`;
