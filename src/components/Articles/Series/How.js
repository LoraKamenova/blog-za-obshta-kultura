import { React, Component } from 'react';
import { Link } from "react-router-dom";
import data from '../../../assets/data.json';
import ArticleCard from '../ArticleCard';
import '../AllArticles.css';

class How extends Component {

    render() {

        let reversedData = data.reverse();
        let articles = reversedData.filter(temp => temp.subcategory.includes("Как се прави")).map(({_id, title, url, subcategory, content, date}) => ({_id, title, url, subcategory, content, date}));
    
        return (
            <section className="all-articles-page">
                <h1 className='all-articles-heading'>Поредица "Как се прави"</h1>
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
export default How;