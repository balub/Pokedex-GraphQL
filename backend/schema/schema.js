import {
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from "graphql";
import axios from "axios";

const PokemonType = new GraphQLObjectType({
  name: "PokemonType",
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    sprite: {
      type: GraphQLString,
      resolve(parentValue) {
        return parentValue.pokemon_data.sprites.other.dream_world.front_default;
      },
    },
    pokemon_type: {
      type: new GraphQLList(GraphQLString),
      resolve(parentValue) {
        return parentValue.pokemon_data.types.map((item) => {
          return item.type.name;
        });
      },
    },
  },
});

const RootQuery = new GraphQLObjectType({
  type: "RootQuery",
  name: "Pokemon",
  fields: {
    pokemon: {
      type: PokemonType,
      args: { id: { type: GraphQLInt } },
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:3000/pokemon/${args.id}`)
          .then((res) => res.data);
      },
    },
    all_pokemon: {
      type: new GraphQLList(PokemonType),
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:3000/pokemon`)
          .then((res) => res.data);
      },
    },
  },
});

const schema = new GraphQLSchema({
  query: RootQuery,
});

export { schema };
