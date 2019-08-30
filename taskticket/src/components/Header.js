import React, { Component } from 'react';
import logo from '../img/logo.png';

class Header extends Component {
    render () {
        return (
            <h1 className="App_Name">
                <img className="logo_img" src={logo} alt="Logo"></img>
            </h1>
        )
    }
}

export default Header;
