import { React, Component } from 'react';
import { Link } from "react-router-dom";
import HomeArticle from './HomeArticle';
import HomeCard from './HomeCard';
import data from '../../assets/data.json';
import words from '../../assets/data_words.json';
import './Home.css';

class Home extends Component {

    render() {
       
        let articles = data.filter(temp => temp.category.includes("Статии")).map(({_id }) => ({_id }));
        let recipes = data.filter(temp => temp.category.includes("Рецепти")).map(({_id, title, date, url, content}) => ({_id, title, date, url, content}));
        let books = data.filter(temp => temp.category.includes("Книги")).map(({_id, title, date, url, content}) => ({_id, title, date, url, content}));
        let diy = data.filter(temp => temp.category.includes("Направи си сам")).map(({_id, title, date, url, content}) => ({_id, title, date, url, content}));

        const word = words[words.length - 1];
        const articleId = articles[articles.length - 1]._id;
        const recipe = recipes[recipes.length - 1];
        // console.log(recipe._id);
        const book = books[books.length - 1];
        const DIY = diy[diy.length - 1];

        return (
            <main className='home-page'>
                <section className='home-left-section'>
                    <div className='home-article-wrapper'>
                        <div className='home-new-wrapper'>
                            <span className='home-new'>Нова статия</span>
                        </div>
                        <HomeArticle id={articleId} />
                        <div className='home-more-button-wrapper'>
                            <Link className='home-link' to={`/articles`}>
                                <div className="home-more-button">Още статии</div>
                            </Link>
                        </div>
                    </div>
                </section>
                <section className='home-right-section'>
                    <div className='home-word-wrapper'>
                        <div className='home-new-wrapper'>
                            <span className='home-new'>Дума на деня</span>
                        </div>
                        <div className='word-wrapper'>
                            <h2 className='word'>{word.word}</h2>
                            <p classNam='word-description'>{word.description}</p>
                        </div>
                    </div>
                    <div className='home-book-wrapper left-wrapper'>
                        <div className='home-new-wrapper'>
                            <span className='home-new'>Читателски дневник</span>
                        </div>
                        <Link className='home-link' key={book._id} {...book} to={`/book/${book._id}`}>
                                <HomeCard title={book.title}
                                content={book.content}
                                url={book.url}
                                date={book.date}
                                />
                        </Link>
                    </div>
                    <div className='home-recipe-wrapper left-wrapper'>
                        <div className='home-new-wrapper'>
                            <span className='home-new'>Рецепти</span>
                        </div>
                        <Link className='home-link' key={recipe._id} {...recipe} to={`/recipes/${recipe._id}`}>
                                <HomeCard title={recipe.title}
                                content={recipe.content}
                                url={recipe.url}
                                date={recipe.date}
                                />
                        </Link>
                    </div>
                    <div className='home-diy-wrapper left-wrapper'>
                        <div className='home-new-wrapper'>
                            <span className='home-new'>Направи си сам</span>
                        </div>
                        <Link className='home-link' key={DIY._id} {...DIY} to={`/diy/${DIY._id}`}>
                                <HomeCard title={DIY.title}
                                content={DIY.content}
                                url={DIY.url}
                                date={DIY.date}
                                />
                        </Link>
                    </div>
                </section>

            </main>
        )
    }
}
export default Home;