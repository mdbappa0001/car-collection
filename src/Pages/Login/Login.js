import React from 'react';

const Login = () => {
    return (
        <>
            <div className='flex flex-wrap justify-center mt-20'>
                <div className='w-full max-w-sm'>
                    <form action="" className='shadown-md bg-white rounded px-8 pt-6 pb-8 mb-4'>
                        <div className='mb-5'>
                            <label htmlFor="" className='block text-gray-700 text-sm font-bold mb-2'>
                                UserName
                            </label>
                            <input type="text" className='shodow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                placeholder="UserName"
                            />
                        </div>

                        <div className='mb-6'>
                            <label htmlFor="password" className='block text-gray-700 text-sm font-bold mb-2'>
                                Password
                            </label>

                            <input type="password"
                                className='shodow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                placeholder='Password'
                            />
                        </div>
                        <div className='flex items-center justify-between'>
                            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
                                Sign In
                            </button>
                            <a 
                            className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-700'
                            href="/">
                                Forgot Password ?</a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;