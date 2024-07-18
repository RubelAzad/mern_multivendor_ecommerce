import React from 'react';
import { MdCurrencyExchange } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Payments = () => {
    return (
        <div className='px-2 md:px-7 py-5'>
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7 mb-7'>
                <div className='flex justify-between items-center p-5 bg-[#fae8e8] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-[#5c5c5c]'>
                        <h2 className='text-3xl font-bold'>100</h2>
                        <span className='text-md font-medium'>Sale Amount</span>

                    </div>
                    <div className='w-[47px] h-[47px] rounded-full bg-[#fa0305] flex justify-center items-center text-xl'>
                        <MdCurrencyExchange className='text-[#fae8e8] shadow-lg'/>
                    </div>
                </div>
                <div className='flex justify-between items-center p-5 bg-[#fee2e2] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-[#5c5c5c]'>
                        <h2 className='text-3xl font-bold'>50</h2>
                        <span className='text-md font-medium'>Available Amount</span>

                    </div>
                    <div className='w-[47px] h-[47px] rounded-full bg-[#760077] flex justify-center items-center text-xl'>
                        <MdCurrencyExchange className='text-[#fae8e8] shadow-lg'/>
                    </div>
                </div>
                <div className='flex justify-between items-center p-5 bg-[#e9feea] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-[#5c5c5c]'>
                        <h2 className='text-3xl font-bold'>20</h2>
                        <span className='text-md font-medium'>Withdraw Amount</span>

                    </div>
                    <div className='w-[47px] h-[47px] rounded-full bg-[#51d758] flex justify-center items-center text-xl'>
                        <MdCurrencyExchange className='text-[#fae8e8] shadow-lg'/>
                    </div>
                </div>
                
                <div className='flex justify-between items-center p-5 bg-[#ecebff] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-[#5c5c5c]'>
                        <h2 className='text-3xl font-bold'>200</h2>
                        <span className='text-md font-medium'>Pending Amount</span>

                    </div>
                    <div className='w-[47px] h-[47px] rounded-full bg-[#0200f8] flex justify-center items-center text-xl'>
                        <MdCurrencyExchange className='text-[#fae8e8] shadow-lg'/>
                    </div>
                </div>
            </div>
            <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-2 pb-4'>
                <div className='bg-[#6a5fdf] text-[#d0d2d6] rounded-md p-5'>
                    <h2 className='text-lg'>Send Request</h2>
                    <div className='pt-5'>
                        <form >
                            <div className='flex gap-3 flex-grow'>
                                <input min='0' type='number' className='[-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none px-2 py-2 md:w-[79%] focus:border-indigo-200 outline-none bg-[#6a5fdf] border border-slate-800 rounded-md text-[#d0d2d6]' name='amount' placeholder='Enter Amount' />
                                <button className='bg-red-600 w-[180px] hover:shadow-red-300/50 hover:shadow-lg text-white rounded-md px-2 py-2'>
                                    Submit
                                </button>

                            </div>
                        </form>
                        
                    </div>
                </div>
                
                    
            </div>

        </div>
    );
};

export default Payments;