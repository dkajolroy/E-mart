import React from 'react';
import { MdArrowBack } from 'react-icons/md';
import { BsCart4 } from 'react-icons/bs';

const Cart = () => {
    return (
        <div className='cart_page container my-4 bg-light rounded'>
            <div className="top_bar d-flex justify-content-between py-2">
                <h5><span className='me-2'><MdArrowBack /></span>Continue Shopping</h5>
                <h5 className='h4 me-4'><BsCart4 /></h5>
            </div>
            <hr />
            <div className="row">
                <div className="col-md-8 col-sm-8 border-end">
                    <div className="header border-bottom">
                        <div className="row ">
                            <div className="col">Image</div>
                            <div className="col">Title</div>
                            <div className="col">Price</div>
                            <div className="col"></div>
                        </div>
                    </div>
                    {/* Product item map */}
                    <div className="all_cart_item border rounded my-2">
                        <div className="row py-4">
                            <div className="col-lg-8">
                                <div className="row">
                                    <div className="col">Image</div>
                                    <div className="col-8">Lorem ipsum dolor sit amet.</div>
                                    <div className="col">22</div>
                                </div>
                            </div>
                            <div className="col-lg">
                                <div className="row">
                                    <div className="col text-center">incre/Decre</div>
                                    <div className="col text-center">Remove</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Cart Calculator */}
                <div className="col-md-4 col-sm-4">
                    <table className='w-100 my-2'>
                        <thead>
                            <tr className='border'>
                                <td colSpan={2} className='p-2 text-center h5'>Total</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='border'>
                                <td className='p-2'>Total item:</td>
                                <td>22</td>
                            </tr>
                            <tr className='border'>
                                <td className='p-2'>Total Price:</td>
                                <td>22</td>
                            </tr>
                            <tr className='border'>
                                <td className='p-2'>Vat+tax:</td>
                                <td>22</td>
                            </tr>
                            <tr className='border'>
                                <td className='p-2'>Shiping Charge:</td>
                                <td>22</td>
                            </tr>
                            <tr className='border'>
                                <td className='p-2 h6'>Sub Total:</td>
                                <td className='h6'>22</td>
                            </tr>
                            <tr>
                                <td colSpan={2} className='border'> <img className='w-100' src="https://wpchats.com/wp-content/uploads/2015/05/Payment-gateway-of-WordPress.png" alt="" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;