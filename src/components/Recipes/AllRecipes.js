import { React, Component } from 'react';
import { Link } from "react-router-dom";
import data from '../../assets/data.json';
import RecipeCard from '../Recipes/RecipeCard';
import '../../SharedCSS/AllPosts.css';

class AllRecipes extends Component {

    render() {

        let recipes = data.filter(temp => temp.category.includes("Рецепти")).map(({_id, title, url, subcategory, content, date}) => ({_id, title, url, subcategory, content, date}));
    
        return (
            <section className="all-posts-page">
                <section className='subcategories'>
                    <ul className='subcategories-list'>
                        <Link className='subcategory-link' to={`/recipes/salads`}>
                            <li className='subcategory-item'>Салати</li>
                        </Link>
                        <Link className='subcategory-link' to={`/recipes/starters`}>
                            <li className='subcategory-item'>Предястия</li>
                        </Link>
                        <Link className='subcategory-link' to={`/recipes/main`}>
                            <li className='subcategory-item'>Основни</li>
                        </Link>
                        <Link className='subcategory-link' to={`/recipes/baking`}>
                            <li className='subcategory-item'>Тестени</li>
                        </Link>
                        <Link className='subcategory-link' to={`/recipes/desserts`}>
                            <li className='subcategory-item'>Десерти</li>
                        </Link>
                        <Link className='subcategory-link' to={`/recipes/drinks`}>
                            <li className='subcategory-item'>Напитки</li>
                        </Link>
                    </ul>
                </section>
                <h1 className='all-posts-heading'>Всички рецепти</h1>
                <section className='all-posts-container'>
                    {recipes.map((x) => (
                        <Link className='all-posts-link' key={x._id} {...x} to={`/recipes/${x._id}`}>
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