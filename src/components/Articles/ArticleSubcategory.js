import { React } from 'react';
import { Link } from "react-router-dom";
import data from '../../assets/data.json';
import ArticleCard from './ArticleCard';
import './AllArticles.css';

const ArticleSubcategory = (props) => { 

    let articles = data.filter(temp => temp.subcategory.includes(props.subcategory)).map(({_id, title, url, subcategory, content, date}) => ({_id, title, url, subcategory, content, date}));
    let reversedArticles = articles.reverse();
    return (

        <section className="all-articles-page">
            <h1 className='all-articles-heading'>Поредица "{props.subcategory}"</h1>
            <section className='all-articles-container'>
                {reversedArticles.map((x) => (
                    <Link className='all-articles-link' key={x._id} {...x} to={`/articles/${x._id}`}>
                        <ArticleCard title={x.title}
                        content={x.content}
                        url={x.url}
                        date={x.date}
                        subcategory={x.subcategory}
                        />
                    </Link>)
                )}
            </section>
        </section>
    )
};

export default ArticleSubcategory;