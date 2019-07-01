import React, { Component } from "react";
import axios from "axios";
import PokemonDisplay from "./PokemonDisplay";

class PokemonContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: []
    };
  }
  componentDidMount() {
    axios
      .get(`https://api.pokemontcg.io/v1/cards?setCode=base1`)
      .then(response => {
        console.log(response);
        this.setState({
          pokemon: response.data.cards
        });
      });
  }

  render() {
    return (
      <div>
        <PokemonDisplay pokemon={this.state.pokemon} />
      </div>
    );
  }
}

export default PokemonContainer;
