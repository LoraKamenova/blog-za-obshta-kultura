import { React, Component } from 'react';
import { Link } from "react-router-dom";
import './Admin.css';

class Admin extends Component {

    render() {

        return (
            <div className='all-forms-page'>
                {/* <h1 className='admin-heading'>Админ панел</h1> */}
                <section className='all-forms-container'>
                    <div className='first-row'>
                        <div className='first-row-left'>Админ панел</div>
                        <div className='first-row-right'>
                            <Link className='form-link upper' to={`/admn/post`}>
                                <div className='form-item'>Статия</div>
                            </Link>
                            <Link className='form-link upper' to={`/admn/recipe`}>
                                <div className='form-item'>Рецепта</div>
                            </Link>
                        </div>
                    </div>
                    <div className='second-row'>
                        <Link className='form-link lower' to={`/admn/book`}>
                            <div className='form-item'>Книга</div>
                        </Link>
                        <Link className='form-link lower' to={`/admn/craft`}>
                            <div className='form-item'>DIY</div>
                        </Link>
                        <Link className='form-link lower' to={`/admn/word`}>
                            <div className='form-item'>Дума</div>
                        </Link>
                    </div>
                </section>
            </div>
        )
    }
}
export default Admin;