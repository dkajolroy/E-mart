import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='bg-dark pt-5'>
            <div className="container">
                <div className="row">
                    <div className="col-md mt-4">
                        <div className="row">
                            <div className="col">
                                <ul className='m-0'>
                                    <li className='my-2'><Link className='text-light' to="/">Home</Link></li>
                                    <li className='my-2'><Link className='text-light' to="/">Contact</Link></li>
                                    <li className='my-2'><Link className='text-light' to="/">Service</Link></li>
                                    <li className='my-2'><Link className='text-light' to="/">Blogs</Link></li>
                                    <li className='my-2'><Link className='text-light' to="/">About</Link></li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul className='m-0'>
                                    <li className='my-2'><Link className='text-light' to="/">Home</Link></li>
                                    <li className='my-2'><Link className='text-light' to="/">Contact</Link></li>
                                    <li className='my-2'><Link className='text-light' to="/">Service</Link></li>
                                    <li className='my-2'><Link className='text-light' to="/">Blogs</Link></li>
                                    <li className='my-2'><Link className='text-light' to="/">About</Link></li>
                                    <li className='my-2'><Link className='text-light' to="/">Contact</Link></li>
                                    <li className='my-2'><Link className='text-light' to="/">Service</Link></li>
                                    <li className='my-2'><Link className='text-light' to="/">Blogs</Link></li>
                                    <li className='my-2'><Link className='text-light' to="/">About</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md mt-4">
                        <div className="row">
                            <div className="col">
                                <ul className='m-0'>
                                    <li className='my-2'><Link className='text-light' to="/">Community</Link></li>
                                    <li className='my-2'><Link className='text-light' to="/">Privacy Policy</Link></li>
                                    <li className='my-2'><Link className='text-light' to="/">Customer</Link></li>
                                    <li className='my-2'><Link className='text-light' to="/">Seller Policy</Link></li>
                                    <li className='my-2'><Link className='text-light' to="/">Information</Link></li>
                                    <li className='my-2'><Link className='text-light' to="/">Donation</Link></li>
                                    <li className='my-2'><Link className='text-light' to="/">Investing</Link></li>
                                    <li className='my-2'><Link className='text-light' to="/">Apply</Link></li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul className='m-0'>
                                    <li className='my-2'><Link className='text-light' to="/">Hotline</Link></li>
                                    <li className='my-2'><Link className='text-light' to="/">+88025722244</Link></li>
                                    <li className='my-2'><Link className='text-light' to="/">Live Chat</Link></li>
                                    <li className='my-2'><Link className='text-light' to="/">Phone: 123</Link></li>
                                    <li className='my-2'><Link className='text-light' to="/">University</Link></li>
                                </ul>
                                <div className="payment_get_way">
                                    <img className='w-100' src="https://wpchats.com/wp-content/uploads/2015/05/Payment-gateway-of-WordPress.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright_brand mt-5 pb-3">
                    <p className='text-light text-center'>Copyright All E-Com {new Date().getFullYear()}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;