import Row from "react-bootstrap/Row";
import PokemonGrid from "./PokemonGrid.jsx";

function Party(props) {
  return (
    <>
      <h2>My Party ({props.pokemon.length})</h2>
      {props.pokemon.length > 0 ? (
        <Row xs={1} sm={2} md={3} lg={4} xl={5} xxl={6} className="mb-4 gy-4">
          <PokemonGrid
            pokemon={props.pokemon}
            removeFromParty={props.removeFromParty}
          />
        </Row>
      ) : (
        <p>Add some Pokémon to your party.</p>
      )}
    </>
  );
}

export default Party;
