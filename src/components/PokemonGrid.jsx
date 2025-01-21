import Col from "react-bootstrap/Col";
import PokemonCard from "./PokemonCard.jsx";

function PokemonGrid(props) {
  return (
    <>
      {props.pokemon.map((p) => (
        <Col key={p.name}>
          <PokemonCard
            pokemon={p}
            partySize={props.partySize}
            addToParty={props.addToParty}
            removeFromParty={props.removeFromParty}
          />
        </Col>
      ))}
    </>
  );
}

export default PokemonGrid;
