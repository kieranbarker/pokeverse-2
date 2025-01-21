import { useEffect, useState } from "react";

import Header from "./Header.jsx";
import Main from "./Main.jsx";

import fetchPokemon from "../fetchPokemon.js";

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetchPokemon().then(setPokemon);
  }, []);

  return (
    <>
      <Header />
      <Main pokemon={pokemon} />
    </>
  );
}

export default App;
