import React from 'react';
import logo from '../images/Vector.png'
import '../index.css';

function NavBar(){
    return(
        <nav className="nav-bar">
            <img id="logo" src={logo} />
        </nav>
    )
}

export default NavBar 