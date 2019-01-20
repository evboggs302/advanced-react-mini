import React, { Component } from "react";
import axios from 'axios';
import PokemonDisplay from './PokemonDisplay';

class PokemonContainer extends Component {
	constructor(){
		super();
		this.state = {
			pokemon: []
		}
	}

	componentDidMount(){
		axios.get('https://api.pokemontcg.io/v1/cards?setCode=base1').then(pokemon => {
			this.setState({
				pokemon: pokemon.data.cards
			})
		})
	}

	render() {
		return <PokemonDisplay pokemon={this.state.pokemon}/>
	}
}

export default PokemonContainer;