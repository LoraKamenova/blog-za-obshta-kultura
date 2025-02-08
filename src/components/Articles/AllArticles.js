import { React, Component } from 'react';
import { Link } from "react-router-dom";
import data from '../../assets/data.json';
import ArticleCard from '../Articles/ArticleCard';
import '../../SharedCSS/AllPosts.css';

class AllArticles extends Component {

    render() {

        let articles = data.filter(temp => temp.category.includes("Статии")).map(({_id, title, url, subcategory, content, date}) => ({_id, title, url, subcategory, content, date}));
        let reversedArticles = articles.reverse();

        return (
            <section className="all-posts-page">
                <section className='sub-articles-container'>
                    <Link className='sub-articles-link' to={`/articles/architecture`}>
                        <div className='sub-articles-item'>
                            <div className='sub-articles-icon-wrapper'><i class="fas fa-building"></i></div>
                            <div className='sub-articles-heading'>
                                <p>Архитектурни</p>
                                <p>разкази</p>
                            </div>
                        </div>
                    </Link>
                    <Link className='sub-articles-link' to={`/articles/world`}>
                        <div className='sub-articles-item'>
                            <div className='sub-articles-icon-wrapper'><i class="fas fa-map-signs"></i></div>
                            <div className='sub-articles-heading'>
                                <p>Места</p>
                                <p>по света</p>
                            </div>
                        </div>
                    </Link>
                    <Link className='sub-articles-link' to={`/articles/garden`}>
                        <div className='sub-articles-item'>
                            <div className='sub-articles-icon-wrapper'><i class="fas fa-seedling"></i></div>
                            <div className='sub-articles-heading'>
                                <p>В</p>
                                <p>градината</p>
                            </div>
                        </div>
                    </Link>
                    <Link className='sub-articles-link' to={`/articles/how`}>
                        <div className='sub-articles-item'>
                            <div className='sub-articles-icon-wrapper'><i class="fas fa-tools"></i></div>
                            <div className='sub-articles-heading'>
                                <p>Как се</p>
                                <p>прави</p>
                            </div>
                        </div>
                    </Link>
                    <Link className='sub-articles-link' to={`/articles/sports`}>
                        <div className='sub-articles-item'>
                            <div className='sub-articles-icon-wrapper'><i class="fas fa-table-tennis"></i></div>
                            <div className='sub-articles-heading'>
                                <p>Правилата</p>
                                <p>на играта</p>
                            </div>
                        </div>
                    </Link>
                    <Link className='sub-articles-link' to={`/articles/stories`}>
                        <div className='sub-articles-item'>
                            <div className='sub-articles-icon-wrapper'><i class="fas fa-book-open"></i></div>
                            <div className='sub-articles-heading'>
                                <p>Историята</p>
                                <p>на</p>
                            </div>   
                        </div>
                    </Link>
                    <Link className='sub-articles-link' to={`/articles/business-stories`}>
                        <div className='sub-articles-item'>
                            <div className='sub-articles-icon-wrapper'><i class="fas fa-landmark"></i></div>
                            <div className='sub-articles-heading'>
                                <p>Бизнес</p>
                                <p>истории</p>
                            </div>
                        </div>
                    </Link>
                    <Link className='sub-articles-link' to={`/articles/food-stories`}>
                        <div className='sub-articles-item'>
                            <div className='sub-articles-icon-wrapper'><i class="fas fa-pizza-slice"></i></div>
                            <div className='sub-articles-heading'>
                                <p>Кулинарни</p>
                                <p>класики</p>
                            </div>
                        </div>
                    </Link>
                    <Link className='sub-articles-link' to={`/articles/other`}>
                        <div className='sub-articles-item'>
                            <div className='sub-articles-icon-wrapper'><i class="fas fa-newspaper"></i></div>
                            <div className='sub-articles-heading'>
                                <p>Други</p>
                                <p>статии</p>
                            </div>
                        </div>
                    </Link>
                </section>
                <h1 className='all-posts-heading'>Всички статии</h1>
                <section className='all-posts-container'>
                    {reversedArticles.map((x) => (
                        <Link className='all-posts-link' key={x._id} {...x} to={`/articles/${x._id}`}>
                            <ArticleCard title={x.title}
                            content={x.content}
                            url={x.url}
                            date={x.date}
                            subcategory={x.subcategory}
                            />
                        </Link>
                        )
                    )}
                </section>
            </section>
        )
    }
}
export default AllArticles;