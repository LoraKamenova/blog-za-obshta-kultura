import { React, Component } from 'react';
import { Link } from "react-router-dom";
import data from '../../assets/data.json';
import RecipeCard from '../Recipes/RecipeCard';
import '../Recipes/AllRecipes.css';

class AllRecipes extends Component {

    render() {

        let recipes = data.filter(temp => temp.category.includes("Рецепти")).map(({_id, title, url, subcategory, content, date}) => ({_id, title, url, subcategory, content, date}));
        let reversedRecipes = recipes.reverse();

        return (
            <section className="all-recipes-page">
                <section className='recipe-subcategories'>
                    <ul className='recipe-subcategories-list'>
                        <Link className='recipe-subcategory-link' to={`/recipes/salads`}>
                            <li className='recipe-subcategory-item'>Салати</li>
                        </Link>
                        <Link className='recipe-subcategory-link' to={`/recipes/starters`}>
                            <li className='recipe-subcategory-item'>Предястия</li>
                        </Link>
                        <Link className='recipe-subcategory-link' to={`/recipes/main`}>
                            <li className='recipe-subcategory-item'>Основни</li>
                        </Link>
                        <Link className='recipe-subcategory-link' to={`/recipes/baking`}>
                            <li className='recipe-subcategory-item'>Тестени</li>
                        </Link>
                        <Link className='recipe-subcategory-link' to={`/recipes/desserts`}>
                            <li className='recipe-subcategory-item'>Десерти</li>
                        </Link>
                        <Link className='recipe-subcategory-link' to={`/recipes/drinks`}>
                            <li className='recipe-subcategory-item'>Напитки</li>
                        </Link>
                    </ul>
                </section>
                <h1 className='all-recipes-heading'>Всички рецепти</h1>
                <section className='all-recipes-container'>
                    {reversedRecipes.map((x) => (
                        <Link className='all-recipes-link' key={x._id} {...x} to={`/recipes/${x._id}`}>
                            <RecipeCard title={x.title}
                            content={x.content}
                            url={x.url}
                            date={x.date}
                            subcategory={x.subcategory}
                            />
                        </Link>
                        )
                    )}
                </section>
            </section>
        )
    }
}
export default AllRecipes;