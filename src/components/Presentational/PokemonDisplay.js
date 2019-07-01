import React from "react";
import "../../App.css";

function PokemonDisplay(props) {
  const pokelist = props.pokemon.map(pokemon => {
    return (
      <div key={pokemon.id} className="pokemon-display">
        <img src={pokemon.imageUrl} alt="pokemon" />
      </div>
    );
  });
  return <div>{pokelist}</div>;
}

export default PokemonDisplay;
