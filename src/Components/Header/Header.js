import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className ='logo'>
            <img src={logo} alt=""/>
            <nav>
                <a href="/Shop">Shop</a>
                <a href="/Order">Order Review</a>
                <a href="/Manage">Manage Inventory here</a>
            </nav>
        </div>
    );
};

export default Header;