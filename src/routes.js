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
        path='/pokemon-presentational'
        component={PokemonContainer}
    />
    {/* HOC */}
    <Route
        path='/pokemon'
        component={Pokemon}
    />
    {/* Render Props */}
    <Route
        path='/pokemon-renderprops'
        render={() => {
            return (
                <DataFetcher 
                url='https://api.pokemontcg.io/v1/cards?setCode=base1'
                render={(data) => {
                    return <PokemonRender data={data} />
                }}
                />
            )
        }} />
    {/* Children */}
    <Route path='/children' component={Parent} />
</Switch>