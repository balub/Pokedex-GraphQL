import React from "react";

import "./styles.scss";

function PokemonTypeChip({ data }) {
  return <div className="chip">{data.toUpperCase()}</div>;
}

export default PokemonTypeChip;
