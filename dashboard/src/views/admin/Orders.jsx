import React, { useState } from 'react';
import { LuArrowDownSquare } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import Pagination from '../Pagination'; // Adjust the import path if needed

const Orders = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(5);
    const [show, setShow] = useState(false);
    const totalItems = 50; // Example total items

    return (
        <div className='px-2 lg:px-7 pt-5'>
            <h2 className='text-[#000000] font-semibold text-lg mb-3'>Orders</h2>
            <div className='w-full p-4 bg-[#6a5fdf] rounded-md'>
                <div className='flex justify-between items-center'>
                    <select onChange={(e) => setPerPage(parseInt(e.target.value))} className='px-3 py-2 focus:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]'>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                    </select>
                    <input type="search" className='px-3 py-2 focus:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]' />
                </div>
                <div className='relative mt-5 overflow-x-auto'>
                    <div className='w-full text-sm text-left text-[#d0d2d6]'>
                        <div className='text-sm text-[#d0d2d6] uppercase border-b border-slate-700'>
                            <div className='flex justify-between items-center'>
                                <div className='py-3 w-[25%] font-bold'>Order Id</div>
                                <div className='py-3 w-[13%] font-bold'>Price</div>
                                <div className='py-3 w-[25%] font-bold'>Payment Status</div>
                                <div className='py-3 w-[25%] font-bold'>Order Status</div>
                                <div className='py-3 w-[18%] font-bold'>Action</div>
                                <div className='py-3 w-[8%] font-bold'><LuArrowDownSquare /></div>
                            </div>
                        </div>
                        {/* Example rows for display */}
                        {[...Array(perPage)].map((item, idx) => (
                            <div className='text-[#d0d2d6]' key={idx}>
                                <div className='flex justify-between items-start border-b border-slate-700'>
                                    <div className='py-3 w-[25%] font-medium whitespace-nowrap'>#123</div>
                                    <div className='py-3 w-[13%] font-medium whitespace-nowrap'>4000 BDT</div>
                                    <div className='py-3 w-[25%] font-medium whitespace-nowrap'>Pending</div>
                                    <div className='py-3 w-[25%] font-medium whitespace-nowrap'>Pending</div>
                                    <div className='py-3 w-[18%] font-medium whitespace-nowrap'><Link to={`/admin/dashboard/order/details/1`}>View</Link></div>
                                    <div onClick={() => setShow(!show)} className='py-3 w-[8%] font-medium whitespace-nowrap'><LuArrowDownSquare /></div>
                                </div>
                                <div className={show ? 'block border-b border-slate-700 bg-[#827efc]' : 'hidden'}>
                                    <div className='flex justify-start items-start'>
                                        <div className='py-3 w-[25%] font-medium whitespace-nowrap pl-3'>#123</div>
                                        <div className='py-3 w-[13%] font-medium pl-3'>4000 BDT</div>
                                        <div className='py-3 w-[25%] font-medium pl-3'>Pending</div>
                                        <div className='py-3 w-[25%] font-medium pl-3'>Pending</div>
                                        <div className='py-3 w-[18%] font-medium '></div>
                                        <div className='py-3 w-[8%] font-medium '></div>
                                    </div>
                                    <div className='flex justify-start items-start'>
                                        <div className='py-3 w-[25%] font-medium whitespace-nowrap pl-3'>#123</div>
                                        <div className='py-3 w-[13%] font-medium pl-3'>4000 BDT</div>
                                        <div className='py-3 w-[25%] font-medium pl-3'>Pending</div>
                                        <div className='py-3 w-[25%] font-medium pl-3'>Pending</div>
                                        <div className='py-3 w-[18%] font-medium '></div>
                                        <div className='py-3 w-[8%] font-medium '></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='w-full flex justify-end mt-4 bottom-4 right-4'>

                    <Pagination pageNumber={currentPage} setPageNumber={setCurrentPage} totalItem={totalItems} parPage={perPage} showItem={5} />
                </div>
            </div>
        </div>
    );
};

export default Orders;
