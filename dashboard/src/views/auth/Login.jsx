import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Login = () => {
    return (
        <div className='min-w-screen min-h-screen bg-[#cdcae9] flex justify-center items-center'>
            <div className='w-{350px} text-[#ffffff] pt-2'>
                <div className='bg-[#6f68d1] p-4 rounded-e-md'>
                    <h2 className='text-xl mb-3 font-bold'>Wellcome to Ecommerce</h2>
                    <p className='text-sm mb-3 font-medium'>Please Sign In Your Account</p>
                    <form>
                        
                        <div className='flex flex-col w-full gap-1 mb-3'>
                            <label className=''>Email</label>
                            <input className='px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md' type='email' placeholder='Email' id='email' required/>
                        </div>
                        <div className='flex flex-col w-full gap-1 mb-3'>
                            <label className=''>Password</label>
                            <input className='px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md' type='password' placeholder='Password' id='password' required/>
                        </div>
                       
                        <button className='bg-slate-800 w-full hover:shadow-blue-300/hover:shadow-lg text-white rounded-md px-7 py-2 mb-3'>Sign In</button>
                        <div className='flex items-center mb-3 gap-3 justify-center'>
                            <p>Already Have an account?<Link className='font-bold' to='/register'>Sign Up</Link></p>
                        </div>
                        <div className='w-full flex justify-center items-center mb-3'>
                            <div className='w-[45%] bg-slate-700 h-[1px]' ></div>
                            <div className='w-[10%] flex justify-center items-center'>
                                <span className='pb-1'>Or</span>
                            </div>
                            <div className='w-[45%] bg-slate-700 h-[1px]'></div>
                            
                        </div>
                        <div className='flex items-center gap-3 justify-center'>
                            <div className='w-[135px] flex rounded-md bg-orange-700 shadow-lg hover:shadow-orange-700/50 justify-center items-center cursor-pointer overflow-hidden  h-[35px]'>
                                <span><FaGoogle /></span>
                            </div>
                            <div className='w-[135px] flex rounded-md bg-blue-700 shadow-lg hover:shadow-blue-700/50 justify-center items-center cursor-pointer overflow-hidden  h-[35px]'>
                                <span><FaFacebook /></span>
                            </div>
                        </div>
                    </form>

                </div>

            </div>
        </div>
    );
};

export default Login;