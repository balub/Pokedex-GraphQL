import React from "react";

import "./styles.scss";

function PokemonTypeChip({ data }) {
  return (
    <div className="chip" style={{ backgroundColor: "red" }}>
      {data.toUpperCase()}
    </div>
  );
}

export default PokemonTypeChip;
