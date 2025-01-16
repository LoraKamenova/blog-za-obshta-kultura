import React from 'react';
import { useParams } from 'react-router-dom';
import Craft from './Craft';

const CraftWrapper = () => {
    const { id } = useParams()
    return (
        <Craft id={id} />

)};

export default CraftWrapper;