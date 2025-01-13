import { React, Component } from 'react';
import { Link } from "react-router-dom";
import data from '../../assets/data.json';
import ArticleCard from '../Articles/ArticleCard';
import Series from '../Articles/Series/Series';
import './AllArticles.css';

class AllArticles extends Component {

    render() {

        let reversedData = data.reverse();
        let articles = reversedData.filter(temp => temp.category.includes("Статии")).map(({_id, title, url, subcategory, content, date}) => ({_id, title, url, subcategory, content, date}));
    
        return (
            <section className="all-articles-page">
                <Series></Series>
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