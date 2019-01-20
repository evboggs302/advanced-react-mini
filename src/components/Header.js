import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class Header extends Component {
    render() {
    return (
        <div className='header-full'>
        {/* HOC */}
        <p>ADVANCED REACT</p>
            <div className='header'>
                <div>
                    <NavLink to="/pokemon" activeStyle={{ fontWeight: "bold", color: "red"}}>
                        Pokemon HOC
                    </NavLink>
                </div>
                
                {/* Presentational */}
                <div>
                    <NavLink to="/pokemon-presentational" activeStyle={{ fontWeight: "bold", color: "red"}}>
                        Pokemon Presentational
                    </NavLink>
                </div>

                {/* Render Props */}
                <div>
                    <NavLink to="/pokemon-renderprops" activeStyle={{ fontWeight: "bold", color: "red"}}>
                        Pokemon Render Props
                    </NavLink>
                </div>
            </div>
        </div>
    )
    }
}

export default Header