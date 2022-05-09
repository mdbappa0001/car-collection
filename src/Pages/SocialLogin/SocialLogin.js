import React from 'react';
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;

    if (error) {
           errorElement = <div>
                <p className='text-red-500'>Error: {error.message}</p>
            </div>
    }

    if (user) {
        navigate('/')
    }

    return (
        <div>
            <div className='flex items-center mx-16'>
                <div style={{ height: '1px' }} className='bg-blue-400 w-16'></div>
                <p className='mx-8 text-white'>or</p>
                <div style={{ height: '1px' }} className='bg-blue-400 w-16'></div>
            </div>
            {errorElement}
            <button
            onClick={()=> signInWithGoogle()}
                className='bg-blue-500 hover:bg-blue-700 text-white rounded-full'>
                Google Sign In
            </button>
        </div>
    );
};

export default SocialLogin;