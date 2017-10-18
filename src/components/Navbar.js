import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component{
    render(){
        return (
            <div>
                <nav className="black">
                    <div className="nav-wrapper">
                    <a href="/" className="brand-logo center">Lil Black Book</a>
                    <a data-activates="main-menu" className="button-collapse show-on-large">
                        <i className="fa fa-bars"></i>
                    </a>
                    <ul className="side-nav" id="main-menu">
                        <li><Link to="/"><i className="fa fa-users"></i>Contacts</Link></li>
                        <li><Link to="/contacts/add"><i className="fa fa-heart"></i>Add Contact</Link></li>
                    </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;