import React from "react";
import Style from "./index.style";
import Wave from "../../Assets/Images/simple-wave-lines-background-35.png";
import pokemon from "../../Assets/Images/pokemon.png";
import pokeball from "../../Assets/Icon/logo.png";

const Header = () => {
  return (
    <Style>
      <img src={Wave} alt="poke ball" className="img-fluid wave" />
      <div className="header">
        <div className="header-content">
          <div className="header-content__images">
            <div>
              <img src={pokemon} alt="pokemon" className="img-fluid pokemon" />
            </div>
          </div>
          <div className="header-content__pokemon">
            <img src={pokeball} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </Style>
  );
};
export default Header;
