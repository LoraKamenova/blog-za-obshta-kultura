import { React } from 'react';
import { Link, useLocation } from "react-router-dom";
import data from '../../assets/data.json';
import CraftCard from './CraftCard';
import '../../SharedCSS/AllPosts.css';

const BookTag = () => { 
const location = useLocation();


    let crafts = data.filter(temp => temp.tags.includes(location.state.tag)).map(({_id, title, url, subcategory, content, date}) => ({_id, title, url, subcategory, content, date}));

    return (

        <section className="all-posts-page">
            <h1 className='all-posts-heading'>Статии с етикет "{location.state.tag}"</h1>
            <section className='all-posts-container'>
                {crafts.map((x) => (
                    <Link className='all-posts-link' key={x._id} {...x} to={`/crafts/${x._id}`}>
                        <CraftCard title={x.title}
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

export default BookTag;