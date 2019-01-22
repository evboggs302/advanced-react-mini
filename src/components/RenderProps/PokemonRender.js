import React, { Component } from "react";

class PokemonRender extends Component {
	render() {
		const pokeList = this.props.data.map(pokemon => {
			return <div className='pokemon-display' key={pokemon.id}>
				<div>{pokemon.name}</div>
				<img src={pokemon.imageUrl} alt='pokemon'/>
			</div>
		})
		return <div>
			{pokeList}
		</div>;
	}
}

export default PokemonRender;