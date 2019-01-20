import React, { Component } from "react";

class CarsListRender extends Component {
	render() {
		const pokeList = this.props.data.map(pokemon => {
			return <div>
				<p>{pokemon.name}</p>
				<img src={pokemon.imageUrl} />
			</div>
		})
		return <div>
			{pokeList}
		</div>;
	}
}

export default CarsListRender;