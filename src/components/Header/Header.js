import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';
import Navbar from './Navbar';

const Header = () => {
    return (
        <header className='header-navbar'>
            <Link className='header-link' to={`/`}>
                <section className='header-container'>
                    <h1 className='header-title'>Блог за обща култура</h1>
                </section>
            </Link>
            <Navbar></Navbar>
        </header>
    )
};

export default Header;