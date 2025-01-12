import React from 'react';
import { useParams } from 'react-router-dom';
import Article from '../Article/Article';

const ArticleWrapper = () => {
    const { id } = useParams()
    return (
        <Article id={id} />

)};

export default ArticleWrapper;