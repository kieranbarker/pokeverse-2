import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import CustomAlert from "./CustomAlert.jsx";
import Pokedex from "./Pokedex.jsx";

function Main(props) {
  return (
    <Container className="my-4">
      {props.pokemon.length > 0 ? (
        <Pokedex pokemon={props.pokemon} />
      ) : (
        <Col md={6} className="mx-auto">
          <CustomAlert variant="info">Loading...</CustomAlert>
        </Col>
      )}
    </Container>
  );
}

export default Main;
