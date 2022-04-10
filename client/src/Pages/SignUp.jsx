import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='login_page m-auto my-5 rounded col-md-4 shadow bg-light pb-5 px-5'>
            <h2 className='text-center py-3'>SignUp</h2>
            <form>
                <label>Name</label>
                <input type="text" placeholder='Name' className='form-control shadow-none' />
                <label>Email</label>
                <input type="text" placeholder='Email' className='form-control shadow-none' />
                <label>Password</label>
                <input type="password" placeholder='Password' className='form-control shadow-none' />
                <label>Confirm Password</label>
                <input type="password" placeholder='Confirm Password' className='form-control shadow-none' />
                <input type="submit" className='btn btn-success px-5 my-2' />
            </form>
            <strong>Already have an account to <Link to="/sign_in" className='text-success'>Log in </Link>?</strong>
        </div>
    );
};

export default Login;