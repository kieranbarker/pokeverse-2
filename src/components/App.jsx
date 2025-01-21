import { useEffect, useState } from "react";

import Header from "./Header.jsx";
import Main from "./Main.jsx";

import fetchPokemon from "../fetchPokemon.js";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const inParty = pokemon.filter((p) => p.is_in_party);
  const notInParty = pokemon.filter((p) => !p.is_in_party);

  function addToParty(id) {
    setPokemon(
      pokemon.map((p) => {
        if (p.id === id) {
          return { ...p, is_in_party: true };
        } else {
          return p;
        }
      })
    );
  }

  function removeFromParty(id) {
    setPokemon(
      pokemon.map((p) => {
        if (p.id === id) {
          return { ...p, is_in_party: false };
        } else {
          return p;
        }
      })
    );
  }

  useEffect(() => {
    fetchPokemon().then(setPokemon);
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
