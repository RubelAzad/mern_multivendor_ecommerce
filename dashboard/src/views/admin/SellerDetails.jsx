import React from 'react';

const SellerDetails = () => {
    return (
        <div className='px-2 lg:px-7 pt-5'>
            <h1 className='text-[25px] font-semibold text-lg mb-2'>Seller Details</h1>
            <div className='w-full p-4 bg-[#6a5fdf] rounded-md'>
                <div className='w-full flex flex-wrap text-[#d0d2d6] '>
                    <div className='w-3/12 flex justify-center items-center py-3'>
                        <img className='w-full h-[300px]' src='http://localhost:3000/images/user.png' alt='sellerimage' />

                    </div>
                    <div className='w-4/12'>
                        <div className='px-0 md:px-5 py-2'>
                            <div className='py-2 text-lg'>
                                <h2>Basic Info</h2>
                            </div>
                            <div className='flex justify-between text-sm flex-col gap-2 p-4 bg-[#9e97e9] rounded-md'>
                                <div className='flex gap-2 font-bold text-[#000000]'>
                                    <span>Name: </span>
                                    <span>Tahosan Islam</span>
                                </div>
                                <div className='flex gap-2 font-bold text-[#000000]'>
                                    <span>Email: </span>
                                    <span>themeup@gmail.com</span>
                                </div>
                                <div className='flex gap-2 font-bold text-[#000000]'>
                                    <span>Role: </span>
                                    <span>Seller</span>
                                </div>
                                <div className='flex gap-2 font-bold text-[#000000]'>
                                    <span>Status: </span>
                                    <span>Active</span>
                                </div>
                                <div className='flex gap-2 font-bold text-[#000000]'>
                                    <span>Payment Status: </span>
                                    <span>Active</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-4/12'>
                        <div className='px-0 md:px-5 py-2'>
                            <div className='py-2 text-lg'>
                                <h2>Address</h2>
                            </div>
                            <div className='flex justify-between text-sm flex-col gap-2 p-4 bg-[#9e97e9] rounded-md'>
                                <div className='flex gap-2 font-bold text-[#000000]'>
                                    <span>Shop Name: </span>
                                    <span>Coder Mind</span>
                                </div>
                                <div className='flex gap-2 font-bold text-[#000000]'>
                                    <span>Division: </span>
                                    <span>Rajshahi</span>
                                </div>
                                <div className='flex gap-2 font-bold text-[#000000]'>
                                    <span>District: </span>
                                    <span>Pabna</span>
                                </div>
                                <div className='flex gap-2 font-bold text-[#000000]'>
                                    <span>State: </span>
                                    <span>Bhangoora</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div>
                    <form>
                        <div className='flex gap-4 py-3'>
                            <select className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]' name='' id=''>
                                <option value="">Select Status</option>
                                <option value="1">active</option>
                                <option value="2">Deactive</option>
                            </select>
                            <button className='bg-red-500 w-[170px] hover:shadow-red-500/40 hover:shadow-md text-white rounded-md px-7 py-2 '>Submit</button>

                        </div>
                    </form>
                </div>
            </div>
            
        </div>
    );
};

export default SellerDetails;