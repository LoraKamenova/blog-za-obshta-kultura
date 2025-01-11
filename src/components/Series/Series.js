import { React, Component } from 'react';
import './Series.css';

class Series extends Component {

    render() {
        return (
            <section className='series-container'>
                <div className='series-item'>
                    <div className='series-icon-wrapper'><i class="fas fa-suitcase"></i></div>
                    <div className='series-heading'>Атлас</div>
                </div>
                <div className='series-item'>
                    <div className='series-icon-wrapper'>
                        <i class="fas fa-building"></i>
                        <div className='series-heading'>Архитектурa</div>
                    </div>
                </div>
                <div className='series-item'>
                    <div className='series-icon-wrapper'>
                        <i class="fas fa-seedling"></i>
                        <div className='series-heading'>В градината</div>
                    </div>
                </div>
                <div className='series-item'>
                    <div className='series-icon-wrapper'>
                        <i class="fas fa-table-tennis"></i>
                        <div className='series-heading'>Правилата на играта</div>
                    </div>
                </div>
                <div className='series-item'>
                    <div className='series-icon-wrapper'>
                        <i class="fas fa-tools"></i>
                        <div className='series-heading'>Как се прави</div>
                    </div>
                </div>
                <div className='series-item'>
                    <div className='series-icon-wrapper'>
                        <i class="fas fa-book-open"></i>
                        <div className='series-heading'>Историята на</div>
                    </div>
                </div>
                <div className='series-item'>
                    <div className='series-icon-wrapper'>
                        <i class="fas fa-landmark"></i>
                        <div className='series-heading'>Бизнес истории</div>
                    </div>
                </div>
                <div className='series-item'>
                    <div className='series-icon-wrapper'>
                        <i class="fas fa-pizza-slice"></i>
                        <div className='series-heading'>Кулинарни истории</div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Series;