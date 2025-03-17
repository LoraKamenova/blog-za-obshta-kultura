import { React } from 'react';
import { Link } from "react-router-dom";
import data from '../../assets/data.json';
import RecipeCard from './RecipeCard';
import '../Recipes/AllRecipes.css';

const RecipeSubcategory = (props) => { 

    let recipes = data.filter(temp => temp.subcategory.includes(props.subcategory)).map(({_id, title, url, subcategory, content, date}) => ({_id, title, url, subcategory, content, date}));
    let reversedRecipes = recipes.reverse();

    return (

        <section className="all-recipes-page">
            <h1 className='all-recipes-heading'>Категория "{props.subcategory}"</h1>
            <div className='all-recipes-container'>
                {reversedRecipes.map((x) => (
                    <Link className='all-recipes-link' key={x._id} {...x} to={`/recipes/${x._id}`}>
                        <RecipeCard title={x.title}
                        content={x.content}
                        url={x.url}
                        date={x.date}
                        subcategory={x.subcategory}
                        />
                    </Link>)
                )}
            </div>
        </section>
    )
};

export default RecipeSubcategory;