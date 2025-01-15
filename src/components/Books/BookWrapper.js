import React from 'react';
import { useParams } from 'react-router-dom';
import Book from './Book';

const BookWrapper = () => {
    const { id } = useParams()
    return (
        <Book id={id} />

)};

export default BookWrapper;