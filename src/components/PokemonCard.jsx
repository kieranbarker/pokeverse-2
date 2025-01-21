import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const MAX_PARTY_SIZE = 6;

function PokemonCard(props) {
  let button;

  if (props.addToParty) {
    button = (
      <Button
        variant="success"
        disabled={props.partySize === MAX_PARTY_SIZE}
        onClick={() => props.addToParty(props.pokemon.id)}
      >
        Add
      </Button>
    );
  } else if (props.removeFromParty) {
    button = (
      <Button
        variant="danger"
        onClick={() => props.removeFromParty(props.pokemon.id)}
      >
        Remove
      </Button>
    );
  }

  return (
    <Card>
      <Card.Img
        variant="top"
        src={props.pokemon.sprites.front_default}
        width={96}
        height={96}
        className="w-auto align-self-center"
      />
      <Card.Body>
        <Card.Title className="text-capitalize">
          {props.pokemon.name}
        </Card.Title>
        {button}
      </Card.Body>
    </Card>
  );
}

export default PokemonCard;
