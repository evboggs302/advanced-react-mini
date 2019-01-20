import React from 'react';
import {Switch, Route} from 'react-router-dom';
//Components
import PokemonContainer from './components/Presentational/PokemonContainer';
import Pokemon from './components/HOC/Pokemon';
import DataFetcher from './components/RenderProps/DataFetcher';
import PokemonRender from './components/RenderProps/PokemonRender';
import Parent from './components/Children/Parent';

export default <Switch>
    {/* Presentational */}
    <Route
        path='/pokemon-presentational'/>
    {/* HOC */}
    <Route
        path='/pokemon'/>
    {/* Render Props */}
    <Route
        path='/pokemon-renderprops'/>
    {/* Children */}
    <Route path='/children'/>
</Switch>