import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navigation">
                    <ul className="menu">
                        <li><a href="/">Logo</a></li>
                        <li><a href="/">Home</a></li>
                        <li className="signup"><a href="/">Sign Up</a></li>
                        <li className="signup"><a href="/">Login</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}


export default Navbar;