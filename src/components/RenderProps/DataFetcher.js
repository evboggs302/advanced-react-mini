import React, { Component } from "react";
import axios from "axios";

class DataFetcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: null
    };
  }
  fetchData = () => {
    axios.get(this.props.url).then(response => {
      this.setState({
        pokemon: response.data.cards
      });
    });
  };

  render() {
    return (
      <div>
        {this.state.pokemon
          ? this.props.renderPokemon(this.state.pokemon)
          : this.fetchData()}
      </div>
    );
  }
}

export default DataFetcher;
