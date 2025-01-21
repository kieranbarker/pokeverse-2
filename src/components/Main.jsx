import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import CustomAlert from "./CustomAlert.jsx";
import Party from "./Party.jsx";
import Pokedex from "./Pokedex.jsx";

function Main(props) {
  return (
    <Container className="my-4">
      {props.notInParty.length > 0 ? (
        <>
          <Party
            pokemon={props.inParty}
            removeFromParty={props.removeFromParty}
          />
          <Pokedex
            pokemon={props.notInParty}
            partySize={props.inParty.length}
            addToParty={props.addToParty}
          />
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
