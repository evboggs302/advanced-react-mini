import React, { Component } from 'react';
import Header from './components/Header';
import routes from './routes';
import './App.css';
//Pokemon API Link - https://api.pokemontcg.io/v1/cards?setCode=base1

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {routes}
      </div>
    );
  }
}

export default App;
