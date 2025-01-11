import { React, Component } from 'react';
import { Link } from "react-router-dom";
import './Series.css';

class Series extends Component {

    render() {
        return (
            <main className='series-page'>
                <section className='series-container'>
                    <Link className='series-link' to={`/`}>
                        <div className='series-item'>
                            <div className='series-icon-wrapper'><i class="fas fa-suitcase"></i></div>
                            <div className='series-heading'>Атлас</div>
                        </div>
                    </Link>
                    <Link className='series-link' to={`/`}>
                        <div className='series-item'>
                            <div className='series-icon-wrapper'><i class="fas fa-building"></i></div>
                            <div className='series-heading'>Архитектурa</div>
                        </div>
                    </Link>
                    <Link className='series-link' to={`/`}>
                        <div className='series-item'>
                            <div className='series-icon-wrapper'><i class="fas fa-seedling"></i></div>
                            <div className='series-heading'>В градината</div>
                        </div>
                    </Link>
                    <Link className='series-link' to={`/`}>
                        <div className='series-item'>
                            <div className='series-icon-wrapper'><i class="fas fa-tools"></i></div>
                            <div className='series-heading'>Как се прави</div>
                        </div>
                    </Link>
                    <Link className='series-link' to={`/`}>
                        <div className='series-item'>
                            <div className='series-icon-wrapper'><i class="fas fa-table-tennis"></i></div>
                            <div className='series-heading'>Правилата на играта</div>
                        </div>
                    </Link>
                    <Link className='series-link' to={`/`}>
                        <div className='series-item'>
                            <div className='series-icon-wrapper'><i class="fas fa-book-open"></i></div>
                            <div className='series-heading'>Историята на</div>   
                        </div>
                    </Link>
                    <Link className='series-link' to={`/`}>
                        <div className='series-item'>
                            <div className='series-icon-wrapper'><i class="fas fa-landmark"></i></div>
                            <div className='series-heading'>Бизнес истории</div>
                        </div>
                    </Link>
                    <Link className='series-link' to={`/`}>
                        <div className='series-item'>
                            <div className='series-icon-wrapper'><i class="fas fa-pizza-slice"></i></div>
                            <div className='series-heading'>Кулинарни истории</div>
                        </div>
                    </Link>
                </section>
            </main>
        )
    }
}
export default Series;