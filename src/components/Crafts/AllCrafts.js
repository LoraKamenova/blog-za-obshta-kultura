import { React, Component } from 'react';
import { Link } from "react-router-dom";
import data from '../../assets/data.json';
import CraftCard from './CraftCard';
import '../../SharedCSS/AllPosts.css';

class AllCrafts extends Component {

    render() {

        let crafts = data.filter(temp => temp.category.includes("Направи си сам")).map(({_id, title, url, subcategory, content, date}) => ({_id, title, url, subcategory, content, date}));
        let reversedCrafts = crafts.reverse();

        return (
            <section className="all-posts-page">
                <h1 className='all-posts-heading'>Всички статии</h1>
                <div className='all-posts-container'>
                    {reversedCrafts.map((x) => (
                        <Link className='all-posts-link' key={x._id} {...x} to={`/crafts/${x._id}`}>
                            <CraftCard title={x.title}
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
export default AllCrafts;