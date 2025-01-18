import { React } from 'react';
import { Link } from "react-router-dom";
import data from '../../assets/data.json';
import BookCard from './BookCard';
import '../../SharedCSS/SharedAllPage.css';

const BookSubcategory = (props) => { 

    let books = data.filter(temp => temp.subcategory.includes(props.subcategory)).map(({_id, title, url, subcategory, content, date}) => ({_id, title, url, subcategory, content, date}));

    return (

        <section className="all-shared-page">
            <h1 className='all-shared-heading'>Категория "{props.subcategory}"</h1>
            <div className='all-shared-container'>
                {books.map((x) => (
                    <Link className='all-shared-link' key={x._id} {...x} to={`/books/${x._id}`}>
                        <BookCard title={x.title}
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

export default BookSubcategory;