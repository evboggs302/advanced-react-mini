import React, { Component } from "react";
import myHOC from './myHOC';

class Pokemon extends Component {
	render() {
		const characterList = this.props.data.map(pokemon => {
			return <div>
			<p>{pokemon.name}</p>
			<img src={pokemon.imageUrl} />
			</div>
		})
		return <div>{characterList}</div>;
	}
}
export default myHOC(Pokemon, 'https://api.pokemontcg.io/v1/cards?setCode=base1');