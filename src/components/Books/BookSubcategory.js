import { React } from 'react';
import { Link } from "react-router-dom";
import data from '../../assets/data.json';
import BookCard from './BookCard';
import '../Books/AllBooks.css';

const BookSubcategory = (props) => { 

    let books = data.filter(temp => temp.subcategory.includes(props.subcategory)).map(({_id, title, url, subcategory, content, date}) => ({_id, title, url, subcategory, content, date}));
    let reversedBooks = books.reverse();

    return (

        <section className="all-books-page">
            <h1 className='all-books-heading'>Категория "{props.subcategory}"</h1>
            <section className='all-books-container'>
                {reversedBooks.map((x) => (
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

export default BookSubcategory;