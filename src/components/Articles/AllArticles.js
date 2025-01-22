import { React, Component } from 'react';
import { Link } from "react-router-dom";
import data from '../../assets/data.json';
import ArticleCard from '../Articles/ArticleCard';
import ArticleNavbar from './ArticleNavbar';
import './AllArticles.css';

class AllArticles extends Component {

    render() {

        let reversedData = data.reverse();
        let articles = reversedData.filter(temp => temp.category.includes("Статии")).map(({_id, title, url, subcategory, content, date}) => ({_id, title, url, subcategory, content, date}));
    
        return (
            <section className="all-articles-page">
                <section className='series-container'>
                    <Link className='series-link' to={`/articles/architecture`}>
                        <div className='series-item'>
                            <div className='series-icon-wrapper'><i class="fas fa-building"></i></div>
                            <div className='series-heading'>
                                <p>Архитектурни</p>
                                <p>разкази</p>
                            </div>
                        </div>
                    </Link>
                    <Link className='series-link' to={`/articles/world`}>
                        <div className='series-item'>
                            <div className='series-icon-wrapper'><i class="fas fa-map-signs"></i></div>
                            <div className='series-heading'>
                                <p>Места</p>
                                <p>по света</p>
                            </div>
                        </div>
                    </Link>
                    <Link className='series-link' to={`/articles/garden`}>
                        <div className='series-item'>
                            <div className='series-icon-wrapper'><i class="fas fa-seedling"></i></div>
                            <div className='series-heading'>
                                <p>В</p>
                                <p>градината</p>
                            </div>
                        </div>
                    </Link>
                    <Link className='series-link' to={`/articles/how`}>
                        <div className='series-item'>
                            <div className='series-icon-wrapper'><i class="fas fa-tools"></i></div>
                            <div className='series-heading'>
                                <p>Как се</p>
                                <p>прави</p>
                            </div>
                        </div>
                    </Link>
                    <Link className='series-link' to={`/articles/sports`}>
                        <div className='series-item'>
                            <div className='series-icon-wrapper'><i class="fas fa-table-tennis"></i></div>
                            <div className='series-heading'>
                                <p>Правилата</p>
                                <p>на играта</p>
                            </div>
                        </div>
                    </Link>
                    <Link className='series-link' to={`/articles/stories`}>
                        <div className='series-item'>
                            <div className='series-icon-wrapper'><i class="fas fa-book-open"></i></div>
                            <div className='series-heading'>
                                <p>Историята</p>
                                <p>на</p>
                            </div>   
                        </div>
                    </Link>
                    <Link className='series-link' to={`/articles/business-stories`}>
                        <div className='series-item'>
                            <div className='series-icon-wrapper'><i class="fas fa-landmark"></i></div>
                            <div className='series-heading'>
                                <p>Бизнес</p>
                                <p>истории</p>
                            </div>
                        </div>
                    </Link>
                    <Link className='series-link' to={`/articles/food-stories`}>
                        <div className='series-item'>
                            <div className='series-icon-wrapper'><i class="fas fa-pizza-slice"></i></div>
                            <div className='series-heading'>
                                <p>Кулинарни</p>
                                <p>класики</p>
                            </div>
                        </div>
                    </Link>
                    <Link className='series-link' to={`/articles/other`}>
                        <div className='series-item'>
                            <div className='series-icon-wrapper'><i class="fas fa-newspaper"></i></div>
                            <div className='series-heading'>
                                <p>Други</p>
                                <p>статии</p>
                            </div>
                        </div>
                    </Link>
                </section>
                <h1 className='all-articles-heading'>Всички статии</h1>
                <div className='all-articles-container'>
                    {articles.map((x) => (
                        <Link className='all-articles-link' key={x._id} {...x} to={`/articles/${x._id}`}>
                            <ArticleCard title={x.title}
                            content={x.content}
                            url={x.url}
                            date={x.date}
                            subcategory={x.subcategory}
                            />
                        </Link>
                        )
                    )}
                </div>
            </section>
        )
    }
}
export default AllArticles;