import { gql } from "@apollo/client";

const fetchPokemon = gql`
  {
    all_pokemon {
      id
      name
      pokemon_type
      sprite
    }
  }
`;

export { fetchPokemon };
