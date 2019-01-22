import React, { Component } from "react";

class PokemonDisplay extends Component {
	render() {
		const pokeList = this.props.pokemon.map(pokemon => {
			return <div className='pokemon-display' key={pokemon.id}>
				<div>{pokemon.name}</div>
				<div>
					<img src={pokemon.imageUrl} alt='pokemon'/>
				</div>
			</div>
		})

		return <div>{pokeList}</div>
	}
}
export default PokemonDisplay;
