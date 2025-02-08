import React from 'react';
import { Link, NavLink } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    return (

<nav className="navbar">
        <ul className='nav-list'>
            <li className='nav-item'>
                <NavLink activeclassName="active" className='nav-link' to="/">Начало</NavLink>
            </li>
            <li className='nav-item'>
                <NavLink activeclassName="active" className='nav-link' to="/articles">Статии</NavLink>
            </li>
            <li className='nav-item'>
                <NavLink activeclassName="active" className='nav-link' to="/recipes">Рецепти</NavLink>
            </li>
            <li className='nav-item'>
                <NavLink activeclassName="active" className='nav-link' to="/books">Читателски дневник</NavLink>
            </li>
            <li className='nav-item'>
                <NavLink activeclassName="active" className='nav-link' to="/crafts">Направи си сам</NavLink>
            </li>
            <li className='nav-item'>
                <NavLink activeclassName="active" className='nav-link' to="/words">Дума на деня</NavLink>
            </li>
            <li className='nav-item'>
                <NavLink activeclassName="active" className='nav-link' to="/about">За блога</NavLink>
            </li>
        </ul>
</nav>
    )
};

export default Navbar;