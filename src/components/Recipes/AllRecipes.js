import { React, Component } from 'react';
import { Link } from "react-router-dom";
import data from '../../assets/data.json';
import RecipeCard from '../Recipes/RecipeCard';
import '../../SharedCSS/SharedAllPage.css';

class AllRecipes extends Component {

    render() {

        let reversedData = data.reverse();
        let recipes = reversedData.filter(temp => temp.category.includes("Рецепти")).map(({_id, title, url, subcategory, content, date}) => ({_id, title, url, subcategory, content, date}));
    
        return (
            <section className="all-shared-page">
                    <div className='shared-subcategories'>
                        <ul className='shared-subcategories-list'>
                             <Link className='shared-link' to={`/recipes/salads`}>
                                <li className='shared-item'>Салати</li>
                            </Link>
                            <Link className='shared-link' to={`/recipes/starters`}>
                                <li className='shared-item'>Предястия</li>
                            </Link>
                            <Link className='shared-link' to={`/recipes/main`}>
                                <li className='shared-item'>Основни</li>
                            </Link>
                            <Link className='shared-link' to={`/recipes/baking`}>
                                <li className='shared-item'>Тестени</li>
                            </Link>
                            <Link className='shared-link' to={`/recipes/desserts`}>
                                <li className='shared-item'>Десерти</li>
                            </Link>
                            <Link className='shared-link' to={`/recipes/drinks`}>
                                <li className='shared-item'>Напитки</li>
                            </Link>
                        </ul>
                    </div>
                <h1 className='all-shared-heading'>Всички рецепти</h1>
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
export default AllRecipes;