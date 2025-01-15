import { React, Component } from 'react';
import { Link } from "react-router-dom";
import data from '../../../assets/data.json';
import RecipeCard from '../RecipeCard';
import '../../../SharedCSS/SharedAllPage.css';

class Drinks extends Component {

    render() {

        let reversedData = data.reverse();
        let recipes = reversedData.filter(temp => temp.subcategory.includes("Напитки")).map(({_id, title, url, subcategory, content, date}) => ({_id, title, url, subcategory, content, date}));
    
        return (
            <section className="all-shared-page">
                <h1 className='all-shared-heading'>Категория "Напитки"</h1>
                <div className='all-shared-container'>
                    {recipes.map((x) => (
                        <Link className='all-shared-link' key={x._id} {...x} to={`/recipes/${x._id}`}>
                            <RecipeCard title={x.title}
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
export default Drinks;