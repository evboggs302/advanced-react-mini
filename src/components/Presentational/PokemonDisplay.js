import React, { Component } from "react";

class PokemonDisplay extends Component {
	render() {
		const pokeList = this.props.pokemon.map(pokemon => {
			return <div>
				<p>{pokemon.name}</p>
				<img src={pokemon.imageUrl} />
			</div>
		})

		return <div>{pokeList}</div>
	}
}
export default PokemonDisplay;
