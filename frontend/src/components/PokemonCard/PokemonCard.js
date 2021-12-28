import React from "react";
import PokemonTypeChip from "../PokemonTypeChip/PokemonTypeChip";

import "./styles.scss";

function PokemonCard() {
  return (
    <div className="Card">
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
        alt="pokemon"
      />
      <div className="Card-Content">
        <div className="Card-Chips">
          <PokemonTypeChip />
          <PokemonTypeChip />
          <PokemonTypeChip />
        </div>
        <p>Pokemon Name</p>
      </div>
    </div>
  );
}

export default PokemonCard;
