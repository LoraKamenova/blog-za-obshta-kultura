import { React, Component } from 'react';
import { Link } from "react-router-dom";
import data from '../../assets/data.json';
import CraftCard from './CraftCard';
import '../../SharedCSS/SharedAllPage.css';

class AllCrafts extends Component {

    render() {

        let reversedData = data.reverse();
        let crafts = reversedData.filter(temp => temp.category.includes("Направи си сам")).map(({_id, title, url, subcategory, content, date}) => ({_id, title, url, subcategory, content, date}));
    
        return (
            <section className="all-shared-page">
                <h1 className='all-shared-heading'>Всички статии</h1>
                <div className='all-shared-container'>
                    {crafts.map((x) => (
                        <Link className='all-shared-link' key={x._id} {...x} to={`/diy/${x._id}`}>
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