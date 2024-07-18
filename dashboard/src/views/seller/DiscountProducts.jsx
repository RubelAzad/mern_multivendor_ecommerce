import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Pagination from '../Pagination' // Adjust the import path if needed
import { FaEdit, FaEye, FaTrash } from 'react-icons/fa';
import Search from '../components/Search';

const DiscountProducts = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(5);
    const [searchValue, setSearchValue] = useState('');
    const [show, setShow] = useState(false);
    const totalItems = 50;

    return (
        <div className='px-2 lg:px-7 pt-5'>
            <h1 className='text-[#000000] font-bold text-lg mb-3'>Discount Product</h1>
            
            <div className='flex flex-wrap w-full'>
                <div className='w-full'>
                    <div className='w-full p-4 bg-[#6a5fdf] rounded-md'>
                        <Search setPerPage={setPerPage} setSearchValue={setSearchValue} searchValue={searchValue}/>
                        <div className='relative overflow-x-auto'>
                            <table className='w-full text-sm text-[#d0d2d6] text-left'>
                                <thead className='text-sm text-[#d0d2d6] uppercase border-b border-slate-700'>
                                    <tr>
                                        <th scope='col' className='px-4 py-3'>No</th>
                                        <th scope='col' className='px-4 py-3'>Image</th>
                                        <th scope='col' className='px-4 py-3'>Name</th>
                                        <th scope='col' className='px-4 py-3'>Category</th>
                                        <th scope='col' className='px-4 py-3'>Brand</th>
                                        <th scope='col' className='px-4 py-3'>Price</th>
                                        <th scope='col' className='px-4 py-3'>Discount</th>
                                        <th scope='col' className='px-4 py-3'>Stock</th>
                                        <th scope='col' className='px-4 py-3'>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        [1,2,3,4,5].map((item, index) =>
                                            <tr key={index}>
                                                <td className='px-4 py-1 font-medium whitespace-nowrap'>{item}</td>
                                                <td className='px-4 py-1 font-medium whitespace-nowrap'>
                                                    <img className='w-[40px] h-[40px] rounded' src={`http://localhost:3000/images/category/${item}.jpg`} alt='category'/>
                                                </td>
                                                <td className='px-4 py-1 font-medium whitespace-nowrap'>Tshirt</td>
                                                <td className='px-4 py-1 font-medium whitespace-nowrap'>Food</td>
                                                <td className='px-4 py-1 font-medium whitespace-nowrap'>Coder Mind 23</td>
                                                <td className='px-4 py-1 font-medium whitespace-nowrap'>2000</td>
                                                <td className='px-4 py-1 font-medium whitespace-nowrap'>15%</td>
                                                <td className='px-4 py-1 font-medium whitespace-nowrap'>50</td>
                                                <td className='px-4 py-1 font-medium whitespace-nowrap'>
                                                    <div className='flex justify-start items-center gap-4'>
                                                    <Link className='p-[6px] bg-yellow-500 rounded-md hover:shadow-lg hover:shadow-yellow-500/50'><FaEdit/></Link>
                                                    <Link className='p-[6px] bg-green-500 rounded-md hover:shadow-lg hover:shadow-green-500/50'><FaEye/></Link>
                                                    <Link className='p-[6px] bg-red-500 rounded-md hover:shadow-lg hover:shadow-red-500/50'><FaTrash/></Link>
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

export default DiscountProducts;