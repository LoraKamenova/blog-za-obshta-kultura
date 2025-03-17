import { React, Component } from 'react';
import { Link } from "react-router-dom";
import './Admin.css';

class Admin extends Component {

    render() {

        return (
            <div className='all-forms-page'>
                <h1 className='admin-heading'>Админ панел</h1>
                <section className='all-forms-container'>
                    <Link className='form-link' to={`/admn/post`}>
                        <div className='form-item'>Статия</div>
                    </Link>
                    <Link className='form-link' to={`/admn/recipe`}>
                        <div className='form-item'>Рецепта</div>
                    </Link>
                    <Link className='form-link' to={`/admn/book`}>
                        <div className='form-item'>Книга</div>
                    </Link>
                    <Link className='form-link' to={`/admn/craft`}>
                        <div className='form-item'>DIY</div>
                    </Link>
                    <Link className='form-link' to={`/admn/word`}>
                        <div className='form-item'>Дума</div>
                    </Link>
                </section>
            </div>
        )
    }
}
export default Admin;