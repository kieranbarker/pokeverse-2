import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import pokeBall from "/poke_ball.svg";

const MIN_PARTY_SIZE = 2;

function Header(props) {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <img
            alt=""
            src={pokeBall}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Pokéverse
        </Navbar.Brand>
        {props.partySize >= MIN_PARTY_SIZE && (
          <Button variant="danger">Battle</Button>
        )}
      </Container>
    </Navbar>
  );
}

export default Header;
