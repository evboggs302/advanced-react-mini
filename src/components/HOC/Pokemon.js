import React, { Component } from "react";
import myHOC from './myHOC';

function Pokemon(props) {
		const characterList = props.data.map(pokemon => {
			return <div className='pokemon-display' key={pokemon.id}>
			<div>{pokemon.name}</div>
			<img src={pokemon.imageUrl} alt='pokemon'/>
			</div>
		})
		return <div>{characterList}</div>;
}
export default myHOC(Pokemon, 'https://api.pokemontcg.io/v1/cards?setCode=base1');