import React from 'react';

const Register = () => {
    return (
        <div className='min-w-screen min-h-screen bg-[#cdcae9] flex justify-center items-center'>
            <div className='w-{350px} text-[#ffffff] pt-2'>
                <div className='bg-[#6f68d1] p-4 rounded-e-md'>
                    <h2 className='text-xl mb-3 font-bold'>Wellcome to Ecommerce</h2>
                    <p className='text-sm mb-3 font-medium'>Please Register Your Account</p>
                    <form>
                        <div className='flex flex-col w-full gap-1 mb-3'>
                            <label className=''>Name</label>
                            <input className='px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md' type='name' placeholder='Name' id='name' required/>
                        </div>
                        <div className='flex flex-col w-full gap-1 mb-3'>
                            <label className=''>Email</label>
                            <input className='px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md' type='email' placeholder='Email' id='email' required/>
                        </div>
                        <div className='flex flex-col w-full gap-1 mb-3'>
                            <label className=''>Password</label>
                            <input className='px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md' type='password' placeholder='Password' id='password' required/>
                        </div>
                        <div className='flex items-center w-full gap-3 mb-3'>
                            <input className='w-4 h-4 text-blue-600 overflow-hidden bg-gray-200 rounded border-gray-300 focus:ring-blue-500 ' type='checkbox' placeholder='Password' id='password' required/>
                            <label htmlFor='checkbox'>I agree to privacy policy & terms</label>
                        </div>
                    </form>

                </div>

            </div>
        </div>
    );
};

export default Register;