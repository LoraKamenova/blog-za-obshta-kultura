import { React, Component } from 'react';
import { Link } from "react-router-dom";
import data from '../../assets/data.json';
import BookCard from '../Books/BookCard';
import '../../SharedCSS/AllPosts.css';

class AllBooks extends Component {

    render() {

        let recipes = data.filter(temp => temp.category.includes("Книги")).map(({_id, title, url, subcategory, content, date}) => ({_id, title, url, subcategory, content, date}));
    
        return (
            <section className="all-posts-page">
                <section className='subcategories'>
                    <ul className='subcategories-list'>
                        <Link className='subcategory-link' to={`/books/fiction`}>
                            <li className='subcategory-item'>Художествена литература</li>
                        </Link>
                        <Link className='subcategory-link' to={`/books/non-fiction`}>
                            <li className='subcategory-item'>Нехудожествена литература</li>
                        </Link>
                        <Link className='subcategory-link' to={`/books/economics`}>
                            <li className='subcategory-item'>Икономическа литература</li>
                        </Link>
                        <Link className='subcategory-link' to={`/books/bio`}>
                            <li className='subcategory-item'>Биографии</li>
                        </Link>
                        <Link className='subcategory-link' to={`/books/guides`}>
                            <li className='subcategory-item'>Книги за пътуване</li>
                        </Link>
                        <Link className='subcategory-link' to={`/books/sofia`}>
                            <li className='subcategory-item'>Книги за София</li>
                        </Link>
                        <Link className='subcategory-link' to={`/books/sofia`}>
                            <li className='subcategory-item'>Списания</li>
                        </Link>
                    </ul>
                </section>
                <h1 className='all-posts-heading'>Всички книги</h1>
                <section className='all-posts-container'>
                    {recipes.map((x) => (
                        <Link className='all-posts-link' key={x._id} {...x} to={`/books/${x._id}`}>
                            <BookCard title={x.title}
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
export default AllBooks;