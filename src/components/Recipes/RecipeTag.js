import { React } from 'react';
import { Link, useLocation } from "react-router-dom";
import data from '../../assets/data.json';
import RecipeCard from './RecipeCard';
import '../Recipes/AllRecipes.css';

const BookTag = () => { 
const location = useLocation();


    let recipes = data.filter(temp => temp.tags.includes(location.state.tag)).map(({_id, title, url, subcategory, content, date}) => ({_id, title, url, subcategory, content, date}));

    return (

        <section className="all-recipes-page">
            <h1 className='all-recipes-heading'>Статии с етикет "{location.state.tag}"</h1>
            <section className='all-recipes-container'>
                {recipes.map((x) => (
                    <Link className='all-recipes-link' key={x._id} {...x} to={`/recipes/${x._id}`}>
                        <RecipeCard title={x.title}
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