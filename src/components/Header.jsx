import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import pokeBall from "/poke_ball.svg";

function Header() {
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
      </Container>
    </Navbar>
  );
}

export default Header;
