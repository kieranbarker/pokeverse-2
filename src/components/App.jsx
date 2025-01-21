import { useEffect, useReducer, useState } from "react";

import Header from "./Header.jsx";
import Main from "./Main.jsx";

import fetchPokemon from "../fetchPokemon.js";

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

  function addToParty(id) {
    dispatch({
      type: "added",
      id: id,
    });
  }

  function removeFromParty(id) {
    dispatch({
      type: "removed",
      id: id,
    });
  }

  useEffect(() => {
    fetchPokemon().then((data) => {
      dispatch({
        type: "loaded",
        data: data,
      });
    });
  }, []);

  return (
    <>
      <Header partySize={inParty.length} />
      <Main
        inParty={inParty}
        notInParty={notInParty}
        addToParty={addToParty}
        removeFromParty={removeFromParty}
      />
    </>
  );
}

export default App;
