import { useContext } from "react";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import CustomAlert from "./CustomAlert.jsx";
import Party from "./Party.jsx";
import Pokedex from "./Pokedex.jsx";

import { PokemonContext } from "../PokemonContext.js";

function Main() {
  const { notInParty } = useContext(PokemonContext);

  return (
    <Container className="my-4">
      {notInParty.length > 0 ? (
        <>
          <Party />
          <Pokedex />
        </>
      ) : (
        <Col md={6} className="mx-auto">
          <CustomAlert variant="info">Loading...</CustomAlert>
        </Col>
      )}
    </Container>
  );
}

export default Main;
