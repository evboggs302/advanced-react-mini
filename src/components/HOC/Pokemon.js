import React, { Component } from "react";
import myHOC from './myHOC';

class Pokemon extends Component {
	render() {
		const characterList = this.props.data.map(pokemon => {
			return <div key={pokemon.id}>
			<p>{pokemon.name}</p>
			<img src={pokemon.imageUrl} alt='pokemon'/>
			</div>
		})
		return <div>{characterList}</div>;
	}
}
export default myHOC(Pokemon, 'https://api.pokemontcg.io/v1/cards?setCode=base1');