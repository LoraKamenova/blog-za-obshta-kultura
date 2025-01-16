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
            {/* <li className='nav-item'>
                <NavLink className='nav-link' to="/series">Поредици</NavLink>
            </li> */}
            {/* <li className='nav-item dropdown'>Поредици<i className='fa fa-caret-down'></i>
                <div className='dropdown-content'>
                    <NavLink activeclassName="active" className='nav-link drop' to="/articles/architecture"><div className='div-list-item'>Архитектурa</div></NavLink>
                    <NavLink activeclassName="active" className='nav-link drop' to="/articles/atles"><div className='div-list-item'>Атлас</div></NavLink>
                    <NavLink activeclassName="active" className='nav-link drop' to="/articles/business"><div className='div-list-item'>Бизнес истории</div></NavLink>
                    <NavLink activeclassName="active" className='nav-link drop' to="/articles/garden"><div className='div-list-item'>В градината</div></NavLink>
                    <NavLink activeclassName="active" className='nav-link drop' to="/articles/history"><div className='div-list-item'>Историята на</div></NavLink>
                    <NavLink activeclassName="active" className='nav-link drop' to="/articles/production"><div className='div-list-item'>Как се прави</div></NavLink>
                    <NavLink activeclassName="active" className='nav-link drop' to="/articles/dishes"><div className='div-list-item'>Кулинарни класики</div></NavLink>
                    <NavLink activeclassName="active" className='nav-link drop' to="/articles/games"><div className='div-list-item'>Правилата на играта</div></NavLink>
                </div>
            </li> */}
            <li className='nav-item'>
                <NavLink activeclassName="active" className='nav-link' to="/words">Дума на деня</NavLink>
            </li>
            <li className='nav-item'>
                <NavLink activeclassName="active" className='nav-link' to="/books">Читателски дневник</NavLink>
            </li>
            <li className='nav-item'>
                <NavLink activeclassName="active" className='nav-link' to="/recipes">Рецепти</NavLink>
            </li>
            <li className='nav-item'>
                <NavLink activeclassName="active" className='nav-link' to="/crafts">Направи си сам</NavLink>
            </li>
            <li className='nav-item'>
                <NavLink activeclassName="active" className='nav-link' to="/about">За блога</NavLink>
            </li>
        </ul>
</nav>
    )
};

export default Navbar;