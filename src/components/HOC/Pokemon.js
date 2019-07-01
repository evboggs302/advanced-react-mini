import React from "react";
import myHOC from "./myHOC";

function Pokemon(props) {
  const pokelist = props.data.map(pokemon => {
    return (
      <div key={pokemon.id}>
        <img src={pokemon.imageUrl} alt="pokemon" />
      </div>
    );
  });
  return <div>{pokelist}</div>;
}

export default myHOC(
  Pokemon,
  "https://api.pokemontcg.io/v1/cards?setCode=base1"
);
