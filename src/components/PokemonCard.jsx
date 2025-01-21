import Card from "react-bootstrap/Card";

function PokemonCard(props) {
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
        <Card.Title className="text-capitalize text-center">
          {props.pokemon.name}
        </Card.Title>
      </Card.Body>
    </Card>
  );
}

export default PokemonCard;
