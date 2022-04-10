import React from 'react';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

const Rating = ({ rating }) => {
    return (
        <div className='product_rating'>
            <span className='text-danger'>{rating >= 1 ? (<BsStarFill />) : rating > 0 ? (<BsStarHalf />) : (<BsStar />)}</span>
            <span className='text-danger'>{rating >= 2 ? (<BsStarFill />) : rating > 1 ? (<BsStarHalf />) : (<BsStar />)}</span>
            <span className='text-danger'>{rating >= 3 ? (<BsStarFill />) : rating > 2 ? (<BsStarHalf />) : (<BsStar />)}</span>
            <span className='text-danger'>{rating >= 4 ? (<BsStarFill />) : rating > 3 ? (<BsStarHalf />) : (<BsStar />)}</span>
            <span className='text-danger'>{rating >= 5 ? (<BsStarFill />) : rating > 4 ? (<BsStarHalf />) : (<BsStar />)}</span>
        </div>
    );
};

export default Rating;