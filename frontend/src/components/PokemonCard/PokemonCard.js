import React from "react";
import PokemonTypeChip from "../PokemonTypeChip/PokemonTypeChip";

import "./styles.scss";

function PokemonCard({ data }) {
  const { sprite, name, pokemon_type } = data;
  return (
    <div className="Card">
      <img src={sprite} alt="pokemon" />
      <div className="Card-Content">
        <div className="Card-Chips">
          {pokemon_type.map((item) => (
            <PokemonTypeChip data={item} />
          ))}
        </div>
        <p>{name.toUpperCase()}</p>
      </div>
    </div>
  );
}

export default PokemonCard;
