import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Pagination from '../Pagination' // Adjust the import path if needed
import { FaEdit, FaEye, FaTrash } from 'react-icons/fa';
import Search from '../components/Search';

const Order = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(5);
    const [searchValue, setSearchValue] = useState('');
    const [show, setShow] = useState(false);
    const totalItems = 50;

    return (
        <div className='px-2 lg:px-7 pt-5'>
            <h1 className='text-[#000000] font-bold text-lg mb-3'>Order List</h1>
            
            <div className='flex flex-wrap w-full'>
                <div className='w-full'>
                    <div className='w-full p-4 bg-[#6a5fdf] rounded-md'>
                        <Search setPerPage={setPerPage} setSearchValue={setSearchValue} searchValue={searchValue}/>
                        <div className='relative overflow-x-auto'>
                            <table className='w-full text-sm text-[#d0d2d6] text-left'>
                                <thead className='text-sm text-[#d0d2d6] uppercase border-b border-slate-700'>
                                    <tr>
                                        <th scope='col' className='px-4 py-3'>Order Id</th>
                                        <th scope='col' className='px-4 py-3'>Price</th>
                                        <th scope='col' className='px-4 py-3'>Payment Status</th>
                                        <th scope='col' className='px-4 py-3'>Order Status</th>
                                        <th scope='col' className='px-4 py-3'>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        [1,2,3,4,5].map((item, index) =>
                                            <tr key={index}>
                                                <td className='px-4 py-1 font-medium whitespace-nowrap'>{item}</td>
                                                <td className='px-4 py-1 font-medium whitespace-nowrap'>3254</td>
                                                <td className='px-4 py-1 font-medium whitespace-nowrap'>Pending</td>
                                                <td className='px-4 py-1 font-medium whitespace-nowrap'>Pending</td>
                                                <td className='px-4 py-1 font-medium whitespace-nowrap'>
                                                    <div className='flex justify-start items-center gap-4'>
                                                    <Link className='p-[6px] bg-green-500 rounded-md hover:shadow-lg hover:shadow-green-500/50'><FaEye/></Link>
                                                    </div>
                                                </td>
                                            </tr>

                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div className='w-full flex justify-end mt-4 bottom-4 right-4'>

                            <Pagination 
                            pageNumber={currentPage} 
                            setPageNumber={setCurrentPage} 
                            totalItem={totalItems} 
                            parPage={perPage} 
                            showItem={5} 

                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;