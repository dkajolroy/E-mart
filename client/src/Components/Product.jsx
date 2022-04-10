import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const Product = ({ product }) => {
    const { title, price, image, rating, _id } = product


    return (
        <div className='product-item col-lg-3 col-md-4 col-sm-6 mt-3 '>
            <Link to={`/product/${_id}`} className="image_item">
                <img className='product_image' src={image} alt={title} />
            </Link>
            <div className="description px-1">
                <div className="title">{title.substring(0, 25)}....</div>
                <div className="price_rating d-flex justify-content-between mb-2">
                    <h5>Price: ${price.toFixed(0)}</h5>
                    <div className="rating"><Rating rating={rating} /></div>
                </div>
            </div>
            <div className="product_action">
                <div className="row">
                    <div className="col-8 pe-1">
                        <button className='btn shadow-none btn-success rounded-0 w-100'>Add to Cart</button>
                    </div>
                    <div className="col ps-0">
                        <button className='btn shadow-none btn-danger rounded-0 w-100'>Buy</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;