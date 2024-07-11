import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Pagination from '../Pagination' // Adjust the import path if needed
import { FaEye } from 'react-icons/fa';

const Sellers = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(5);
    //const [show, setShow] = useState(false);
    const totalItems = 50;

    return (
        <div className='px-2 lg:px-7 pt-5'>
            <div className='w-full p-4 bg-[#6a5fdf] rounded-md'>
                        <div className='flex justify-between items-center'>
                            <select onChange={(e) => setPerPage(parseInt(e.target.value))} className='px-3 py-2 focus:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]'>
                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="20">20</option>
                                <option value="50">50</option>
                            </select>
                            <input type="search" className='px-3 py-2 focus:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]' />
                        </div>
                        <div className='relative overflow-x-auto'>
                            <table className='w-full text-sm text-[#d0d2d6] text-left'>
                                <thead className='text-sm text-[#d0d2d6] uppercase border-b border-slate-700'>
                                    <tr>
                                        <th scope='col' className='px-4 py-3'>No</th>
                                        <th scope='col' className='px-4 py-3'>Image</th>
                                        <th scope='col' className='px-4 py-3'>Name</th>
                                        <th scope='col' className='px-4 py-3'>Shop Name</th>
                                        <th scope='col' className='px-4 py-3'>Payment Status</th>
                                        <th scope='col' className='px-4 py-3'>Email</th>
                                        <th scope='col' className='px-4 py-3'>Division</th>
                                        <th scope='col' className='px-4 py-3'>District</th>
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
                                                <td className='px-4 py-1 font-medium whitespace-nowrap'>Abul Kalam Azad</td>
                                                <td className='px-4 py-1 font-medium whitespace-nowrap'>Coder Shop</td>
                                                <td className='px-4 py-1 font-medium whitespace-nowrap'>Pending</td>
                                                <td className='px-4 py-1 font-medium whitespace-nowrap'>rubelazad123@gmail.com</td>
                                                <td className='px-4 py-1 font-medium whitespace-nowrap'>Rajshahi</td>
                                                <td className='px-4 py-1 font-medium whitespace-nowrap'>Pabna</td>
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

                            <Pagination pageNumber={currentPage} setPageNumber={setCurrentPage} totalItem={totalItems} parPage={perPage} showItem={5} />
                        </div>
                    </div>
            
        </div>
    );
};

export default Sellers;
