import { React } from 'react';
import { Link, useLocation } from "react-router-dom";
import data from '../../assets/data.json';
import BookCard from './BookCard';
import '../Books/AllBooks.css';

const BookTag = () => { 
const location = useLocation();


    let books = data.filter(temp => temp.tags.includes(location.state.tag)).map(({_id, title, url, subcategory, content, date}) => ({_id, title, url, subcategory, content, date}));

    return (

        <section className="all-books-page">
            <h1 className='all-books-heading'>Статии с етикет "{location.state.tag}"</h1>
            <section className='all-books-container'>
                {books.map((x) => (
                    <Link className='all-books-link' key={x._id} {...x} to={`/books/${x._id}`}>
                        <BookCard title={x.title}
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