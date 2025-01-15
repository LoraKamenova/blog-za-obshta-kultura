import React from 'react';
import { useParams } from 'react-router-dom';
import Recipe from './Recipe';

const RecipeWrapper = () => {
    const { id } = useParams()
    return (
        <Recipe id={id} />

)};

export default RecipeWrapper;