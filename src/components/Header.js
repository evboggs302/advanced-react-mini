import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class Header extends Component {
    render() {
    return (
        <div>
        {/* HOC */}
        <NavLink to="/pokemon" activeStyle={{ fontWeight: "bold", color: "red"}}>
            Pokemon HOC
        </NavLink>
        
        {/* Presentational */}
        <NavLink to="/pokemon-presentational" activeStyle={{ fontWeight: "bold", color: "red"}}>
            Pokemon Presentational
        </NavLink>
        
        {/* Render Props */}
        <NavLink to="/pokemon-renderprops" activeStyle={{ fontWeight: "bold", color: "red"}}>
            Pokemon Render Props
        </NavLink>

        </div>
    )
    }
}

export default Header