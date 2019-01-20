import React, { Component } from "react";

class PokemonDisplay extends Component {
	render() {
		const pokeList = this.props.pokemon.map(pokemon => {
			return <div className='pokemon-display' key={pokemon.id}>
				<p>{pokemon.name}</p>
				<img src={pokemon.imageUrl} alt='pokemon'/>
			</div>
		})

		return <div>{pokeList}</div>
	}
}
export default PokemonDisplay;
