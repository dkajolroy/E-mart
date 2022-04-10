import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='login_page m-auto my-5 rounded col-md-4 shadow bg-light pb-5 px-5'>
            <h2 className='text-center py-3'>Login Hare</h2>
            <form>
                <label>Email</label>
                <input type="text" placeholder='Email' className='form-control shadow-none' />
                <label>Password</label>
                <input type="password" placeholder='Password' className='form-control shadow-none' />
                <input type="submit" className='btn btn-success px-5 my-2' />
            </form>
            <strong>Create Account to <Link to="/sign_up" className='text-success'>SignUp </Link>?</strong>
        </div>
    );
};

export default Login;