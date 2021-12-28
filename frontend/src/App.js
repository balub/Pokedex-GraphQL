import "./App.scss";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

import PokemonCard from "./components/PokemonCard/PokemonCard";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <PokemonCard />
      </div>
    </ApolloProvider>
  );
}

export default App;
