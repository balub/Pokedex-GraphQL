import "./App.scss";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

import PokemonCard from "./components/PokemonCard/PokemonCard";
import { fetchPokemon } from "./service/queries";

function App() {
  const { loading, error, data } = useQuery(fetchPokemon);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="App">
      {data.all_pokemon.map((item) => (
        <PokemonCard data={item} key={item.id} />
      ))}
    </div>
  );
}

export default App;
