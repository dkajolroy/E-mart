import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Product from '../Components/Product';
import Rating from '../Components/Rating';


const ViewProduct = () => {
    const param_id = useParams()
    const [product, setProduct] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(`http://localhost:5000/api/get/singleProduct/${param_id.id}`)
            setProduct(data)
        }
        fetchData()
    }, []);
    const { title, price, rating, image, stock, brand, desc } = product

    return (
        <div className='view_product '>
            {
                product.error ?
                    <div style={{ height: "90vh" }} className="container d-flex align-items-center justify-content-center">
                        <h2 className='text-danger'>{product.error}</h2>
                    </div>
                    :
                    <div className="container-fluid bg-light py-5">
                        <div className="container ">
                            <ul className='m-0 d-flex p-0 py-2'>
                                <li><Link to="/">Home/</Link></li>
                                <li><Link to="/">Product</Link></li>
                            </ul>
                            <div className="row">

                                <div className="col-md-5">
                                    <div className="view_product_image border">
                                        <img className='w-100' src={image} alt={title} />
                                    </div>
                                </div>

                                <div className="col-md-7  d-flex align-items-start flex-column">
                                    <div className="top_view ">
                                        <div className="title_row d-flex justify-content-between">
                                            <h5 className="col-8">{title}</h5>
                                            <div className="status h6 border d-flex align-items-center m-0 p-2">Status:
                                                <span className={`ms-1 ${stock ? "text-success" : "text-danger"}`}>{stock ? "In Stock" : "Out of Stock"}</span>
                                            </div>
                                        </div>
                                        <h6 className='text-secondary mt-1'>Brand: {brand}</h6>
                                    </div>
                                    <div className="bottom_view mt-auto">
                                        <div className="price_deal mt-4">
                                            <h5 className='text-dark '>Price: ${price}</h5>
                                            <div className="view_product_rating">
                                                <Rating rating={rating} />
                                            </div>
                                        </div>
                                        <div className="view_product_action d-flex">
                                            <button className="btn btn-success px-5 me-1 rounded-0">Add to Cart</button>
                                            <button className="btn btn-danger px-5 rounded-0">Buy</button>
                                        </div>
                                    </div>
                                    <div className="bottom_view">
                                        <p className='text-secondary '>{desc}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="full_description_view_product mt-5">
                                <p><strong>Description: </strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo veniam laboriosam voluptatibus unde quibusdam laudantium provident dolor, quas at molestiae tempora ducimus sed libero, facilis quidem inventore distinctio fugiat temporibus placeat nihil? Iste ipsum obcaecati a, mollitia, architecto molestias, nemo modi enim voluptates numquam ducimus odit rerum repellendus ipsam nobis corporis quod blanditiis alias exercitationem laudantium. Ullam rerum facilis ab? Ducimus aliquid sapiente id cumque temporibus pariatur quos est! Doloremque iusto aperiam inventore temporibus sed consequuntur maiores deserunt error nisi quam nobis odit, quisquam consequatur obcaecati? Accusantium, explicabo error accusamus voluptatem nam odio earum necessitatibus laudantium quos natus iste perspiciatis.</p>
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
};

export default ViewProduct;