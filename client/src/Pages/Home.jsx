import React, { useEffect, useState } from 'react';
import Product from '../Components/Product';
import axios from 'axios';

export default function Home() {

    const [product, setProduct] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get('http://localhost:5000/api/get/allProduct')
            setProduct(data)
        }
        fetchData()
    }, []);


    return (
        <div className='home_screen py-5 bg-light'>
            <div className="container ">
                <div className="row"> {
                    product.map(item => (
                        <Product product={item} key={item._id} />
                    ))
                }</div>
            </div>
        </div>
    );
}
