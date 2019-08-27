import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav className="main-nav">
                <ul>
                    <li>
                        <a href="/">Logo</a>
                    </li>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">Sign Up</a>
                    </li>
                    <li>
                        <a href="/">Logout</a>
                    </li>
                </ul>
            </nav>
        )
    }
}


export default Navbar;