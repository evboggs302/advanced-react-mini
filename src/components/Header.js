import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class Header extends Component {
    render() {
    return (
        <div className='header-full'>
        
        <p>ADVANCED REACT</p>
            <div className='header'>

                {/* Presentational */}
                <div>
                    <NavLink to="/" activeStyle={{ fontWeight: "bold", color: "Green"}}>
                        Pokemon Presentational
                    </NavLink>
                </div>

                {/* HOC */}
                <div>
                    <NavLink to="/pokemon-hoc" activeStyle={{ fontWeight: "bold", color: "pink"}}>
                        Pokemon HOC
                    </NavLink>
                </div>
                
                

                {/* Render Props */}
                <div>
                    <NavLink to="/pokemon-renderprops" activeStyle={{ fontWeight: "bold", color: "yellow"}}>
                        Pokemon Render Props
                    </NavLink>
                </div>

                {/* Children */}
                <div>
                    <NavLink to="/children" activeStyle={{ fontWeight: "bold", color: "gray"}}>
                        Children
                    </NavLink>
                </div>
            </div>
        </div>
    )
    }
}

export default Header