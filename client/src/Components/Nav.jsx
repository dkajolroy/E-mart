import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';

const Nav = () => {
    return (
        <nav className=' main_nav_bars '>
            <div className="container d-flex justify-content-between">
                <div className="brand h4 d-flex align-items-center"><Link className='text-light' to="/">E-com</Link></div>
                <ul className='m-0 d-flex'>
                    <li className='d-flex align-items-center'>
                        <Link className='text-light p-3' to="/cart"><span className='mx-1'><FiShoppingCart /></span>Cart</Link>
                    </li>
                    <li className='d-flex align-items-center'>
                        <Link className='text-light p-3 ' to="/sign_in">Login</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;