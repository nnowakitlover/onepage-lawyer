import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';

const menu = [
    { name: 'Home', path: '/', exact: 'true', },
    { name: 'O mnie', path: '/about' },
    { name: 'Specjalizacje', path: '/specs' },
    { name: 'Klienci', path: '/clients' },
    { name: 'Kontakt', path: '/contact' }
]

const Header = () => {

    const nav = menu.map(item => (
        <div key={item.name}>
            <NavLink to={item.path} exact={item.exact ? item.exact : false}>{item.name}</NavLink>
        </div>
    ))
    return (
        <div className="nav">
            <nav>
                {nav}
            </nav>
        </div>
    );
}

export default Header;