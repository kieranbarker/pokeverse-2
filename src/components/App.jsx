import { useEffect, useReducer } from "react";

import Header from "./Header.jsx";
import Main from "./Main.jsx";

import fetchPokemon from "../fetchPokemon.js";
import { PokemonContext, PokemonDispatchContext } from "../PokemonContext.js";

function pokemonReducer(pokemon, action) {
  if (action.type === "loaded") {
    return action.data;
  } else if (action.type === "added") {
    return pokemon.map((p) => {
      if (p.id === action.id) {
        return { ...p, is_in_party: true };
      } else {
        return p;
      }
    });
  } else if (action.type === "removed") {
    return pokemon.map((p) => {
      if (p.id === action.id) {
        return { ...p, is_in_party: false };
      } else {
        return p;
      }
    });
  } else {
    throw new RangeError(`Unknown action: ${action.type}`);
  }
}

function App() {
  const [pokemon, dispatch] = useReducer(pokemonReducer, []);
  const inParty = pokemon.filter((p) => p.is_in_party);
  const notInParty = pokemon.filter((p) => !p.is_in_party);

  useEffect(() => {
    fetchPokemon().then((data) => {
      dispatch({
        type: "loaded",
        data: data,
      });
    });
  }, []);

  return (
    <PokemonContext.Provider value={{ inParty, notInParty }}>
      <PokemonDispatchContext.Provider value={dispatch}>
        <Header />
        <Main />
      </PokemonDispatchContext.Provider>
    </PokemonContext.Provider>
  );
}

export default App;
