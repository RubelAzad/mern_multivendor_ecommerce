import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Pagination from '../Pagination' // Adjust the import path if needed
import { FaEdit, FaImage, FaTrash } from 'react-icons/fa';
import {IoMdCloseCircle} from 'react-icons/io'


const Category = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(5);
    const [show, setShow] = useState(false);
    const totalItems = 50;

    return (
        <div className='px-2 lg:px-7 pt-5'>
            <div className='flex lg:hidden justify-between items-center mb-5 p-4 bg-[#6a5fdf] rounded-md'>
                <h1 className='text-[#d0d2d6] font-semibold text-lg'>Category</h1>
                <button onClick={() => setShow(true)} className='bg-red-500 shadow-lg hover:shadow-red-500/10 px-4 py-2 cursor-pointer rounded-sm text-sm'>Add</button>

            </div>
            <div className='flex flex-wrap w-full'>
                <div className='w-full lg:w-7/12'>
                    <div className='w-full p-4 bg-[#6a5fdf] rounded-md'>
                        <div className='flex justify-between items-center'>
                            <select onChange={(e) => setPerPage(parseInt(e.target.value))} className='px-3 py-2 focus:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]'>
                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="20">20</option>
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
                                                <td className='px-4 py-1 font-medium whitespace-nowrap'>
                                                    <div className='flex justify-start items-center gap-4'>
                                                    <Link className='p-[6px] bg-yellow-500 rounded-md hover:shadow-lg hover:shadow-yellow-500/50'><FaEdit/></Link>
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

                            <Pagination pageNumber={currentPage} setPageNumber={setCurrentPage} totalItem={totalItems} parPage={perPage} showItem={5} />
                        </div>
                    </div>
                </div>
                <div className={` w-[320px] lg:w-5/12 translate-x-100 lg:relative lg:right-0 fixed ${show ? 'right-0' : '-right-[340px]'} z-[9999] top-0 transition-all duration-500`}>
                        <div className='w-full pl-5'>
                            <div className='bg-[#6a5fdf] h-screen lg:h-auto px-3 py-5 lg:rounded-md text-[#d0d2d6]'>
                                <div className='flex justify-between items-center mb-4'>
                                    <h1 className='text-[#d0d2d6] font-semibold text-xl mb-4 w-full text-center'>Add Category</h1>
                                    <div onClick={() => setShow(false)} className='block lg:hidden justify-left items-center cursor-pointer w-[25px] h-[25px]'>
                                        <IoMdCloseCircle/>

                                    </div>
                                </div>
                                <form>
                                    <div className='flex flex-col w-full gap-1 mb-3'>
                                        <label htmlFor='name'> Category Name</label>
                                        <input type='text' id='category_name' name='category_name' placeholder='Category Name' className='px-3 py-2 focus:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]' required/>
                                    </div>
                                    <div>
                                        <label className='flex justify-center items-center flex-col h-[238px] cursor-pointer border border-dashed hover:border-red-400 rounded-md w-full border-[#d0d2d6]' htmlFor='image'>
                                            <span><FaImage/></span>
                                            <span>Select Image</span>
                                        </label>
                                        <input type='file' id='image' name='image' className='hidden'/>

                                    </div>
                                    <button className='bg-red-500 w-full hover:shadow-red-500/40 hover:shadow-md text-white rounded-md px-7 py-2 my-2'>Add Category</button>

                                </form>

                            </div>
                            
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Category;