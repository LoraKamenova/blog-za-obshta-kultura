import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <Link className='header-link' to={`/`}>
            <section className='header-container'>
                <h1 className='header-title'>Блог за обща култура</h1>
            </section>
        </Link>
    )
};

export default Header;