import React from 'react';

const OrderDetails = () => {
    return (
        <div className='px-2 lg:px-7 pt-5'>
            <div className='w-full p-4 bg-[#6a5fdf] rounded-md'>
                <div className='flex justify-between items-center p-4'>
                    <div className='text-xl text-[#d0d2d6]'>Order Details</div>
                    <select name='' id='' className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#475569] border-slate-700 rounded-md text-[#d0d2d6]'>
                        <option value='' className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#475569] border-slate-700 rounded-md text-[#d0d2d6]'>All</option>
                        <option value='' className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#475569] border-slate-700 rounded-md text-[#d0d2d6]'>Pending</option>
                        <option value='' className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#475569] border-slate-700 rounded-md text-[#d0d2d6]'>Confirmed</option>
                        <option value='' className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#475569] border-slate-700 rounded-md text-[#d0d2d6]'>Shipped</option>
                        <option value='' className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#475569] border-slate-700 rounded-md text-[#d0d2d6]'>Delivered</option>
                        <option value='' className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#475569] border-slate-700 rounded-md text-[#d0d2d6]'>Cancelled</option>
                    </select>
                </div>
                <div className='p-4'>
                    <div className='flex gap-2 text-lg text-[#d0d2d6]'>
                        <h2>#21211</h2>
                        <span>20/05/2024</span>
                    </div>
                    <div className='flex flex-wrap'>
                        <div className='w-[30%]'>
                            <div className='pr-3 text-[#d0d2d6] text-lg'>
                                <h2 className='pb-2 semibold'>Rahat Islam</h2>
                                <p><span className='text-sm'>Hiroko Potter P.O. Box 887 2508 Dolor. Av. Muskegon KY 12482 (314) 244-6306</span></p>

                            </div>
                            <div className='flex justify-start items-center gap-3'>
                                <h2>Payment Status</h2>
                                <span className='text-base'>paid</span>
                            </div>
                            <span className=''>Price: $1000</span>
                            <div className='mt-4 flex flex-col gap-4 bg-[#8288ed] rounded-lg'>
                                <div className='text-[#d0d2d6]'>
                                    <div className='flex gap-3 text-md'>
                                        <img className='w-[50px] h-[52px] rounded-md' src="http://localhost:3000/images/user.png" alt="order"/>
                                        <div className=''>
                                            <h2>Product Name</h2>
                                            <p>
                                                <span className='text-sm'>Brand: </span>
                                                <span className='text-sm'>Easy </span>
                                                <span className='text-sm'>Quantity: 3</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-4 flex flex-col gap-4 bg-[#8288ed] rounded-lg'>
                                <div className='text-[#d0d2d6]'>
                                    <div className='flex gap-3 text-md'>
                                        <img className='w-[50px] h-[52px] rounded-md' src="http://localhost:3000/images/user.png" alt="order"/>
                                        <div>
                                            <h2>Product Name</h2>
                                            <p>
                                                <span className='text-sm'>Brand: </span>
                                                <span className='text-sm'>Easy </span>
                                                <span className='text-sm'>Quantity: 3</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-4 flex flex-col gap-4 bg-[#8288ed] rounded-lg'>
                                <div className='text-[#d0d2d6]'>
                                    <div className='flex gap-3 text-md'>
                                        <img className='w-[50px] h-[52px] rounded-md' src="http://localhost:3000/images/user.png" alt="order"/>
                                        <div className=''>
                                            <h2>Product Name</h2>
                                            <p>
                                                <span className='text-sm'>Brand: </span>
                                                <span className='text-sm'>Easy </span>
                                                <span className='text-sm'>Quantity: 3</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-[70%]'>
                            <div className='pl-3'>
                                <div className='mt-4 flex flex-col bg-[#8288ed] rounded-lg text-[#d0d2d6] p-4'>
                                    <div className='text-[#d0d2d6] mt-2'>
                                        <div className='flex justify-start items-center gap-3'>
                                            <h2>Seller 1 Order</h2>
                                            <span>pending</span>
                                        </div>
                                        <div className='flex gap-3 text-md pt-2'>
                                            <img className='w-[50px] h-[52px] rounded-md' src="http://localhost:3000/images/user.png" alt="order"/>
                                            <div className=''>
                                                <h2>Product Name</h2>
                                                <p>
                                                    <span className='text-sm'>Brand: </span>
                                                    <span className='text-sm'>Easy </span>
                                                    <span className='text-sm'>Quantity: 3</span>
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                    <div className='text-[#d0d2d6] mt-2'>
                                        <div className='flex justify-start items-center gap-3'>
                                            <h2>Seller 1 Order</h2>
                                            <span>pending</span>
                                        </div>
                                        <div className='flex gap-3 text-md pt-2'>
                                            <img className='w-[50px] h-[52px] rounded-md' src="http://localhost:3000/images/user.png" alt="order"/>
                                            <div className=''>
                                                <h2>Product Name</h2>
                                                <p>
                                                    <span className='text-sm'>Brand: </span>
                                                    <span className='text-sm'>Easy </span>
                                                    <span className='text-sm'>Quantity: 3</span>
                                                </p>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;