import { React, Component } from 'react';
import { Link } from "react-router-dom";
import data from '../../assets/data.json';
import BookCard from '../Books/BookCard';
import '../../SharedCSS/SharedAllPage.css';

class AllBooks extends Component {

    render() {

        let reversedData = data.reverse();
        let recipes = reversedData.filter(temp => temp.category.includes("Книги")).map(({_id, title, url, subcategory, content, date}) => ({_id, title, url, subcategory, content, date}));
    
        return (
            <section className="all-shared-page">
                    <div className='shared-subcategories'>
                        <ul className='shared-subcategories-list'>
                             <Link className='shared-link' to={`/books/fiction`}>
                                <li className='shared-item'>Художествена литература</li>
                            </Link>
                            <Link className='shared-link' to={`/books/non-fiction`}>
                                <li className='shared-item'>Нехудожествена литература</li>
                            </Link>
                            <Link className='shared-link' to={`/books/economics`}>
                                <li className='shared-item'>Икономическа литература</li>
                            </Link>
                            <Link className='shared-link' to={`/books/bio`}>
                                <li className='shared-item'>Биографии</li>
                            </Link>
                            <Link className='shared-link' to={`/books/guides`}>
                                <li className='shared-item'>Пътеводители</li>
                            </Link>
                            <Link className='shared-link' to={`/books/sofia`}>
                                <li className='shared-item'>Книги за София</li>
                            </Link>
                        </ul>
                    </div>
                <h1 className='all-shared-heading'>Всички книги</h1>
                <div className='all-shared-container'>
                    {recipes.map((x) => (
                        <Link className='all-shared-link' key={x._id} {...x} to={`/books/${x._id}`}>
                            <BookCard title={x.title}
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
export default AllBooks;