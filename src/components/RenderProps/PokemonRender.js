import React, { Component } from "react";

class CarsListRender extends Component {
	render() {
		const pokeList = this.props.data.map(pokemon => {
			return <div className='pokemon-display' key={pokemon.id}>
				<p>{pokemon.name}</p>
				<img src={pokemon.imageUrl} alt='pokemon'/>
			</div>
		})
		return <div>
			{pokeList}
		</div>;
	}
}

export default CarsListRender;