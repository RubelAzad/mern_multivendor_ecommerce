import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddProduct = () => {

    const categories = [
        {
            id: 1,
            name: 'Sports'
        },
        {
            id: 2,
            name: 'Tshirts'
        },
        {
            id: 3,
            name: 'Mobile'
        },
        {
            id: 4,
            name: 'Computer'
        },
        {
            id: 5,
            name: 'Sports'
        },
        {
            id: 6,
            name: 'Watch'
        }
    ]

    const [state, setState] = useState({
        product_name: '',
        description: '',
        discount: '',
        price: '',
        brand_name: '',
        stock: ''
    })

    const inputHandle = (e) => {
        const { name, value } = e.target
        setState({...state, [name]: value })
    }

    const [cateShow, setCateShow] = useState(false)
    const [category, setCategory] = useState('')
    const [allCategory, setAllCategory] = useState(categories)
    const [searchValue, setSearchValue] = useState('')

    const categorySearch = (e) => {
        const value = e.target.value
        setSearchValue(value)
        if(value){
            let srcValue = allCategory.filter(c => c.name.toLowerCase().indexOf(value.toLowerCase()) > -1)
            setAllCategory(srcValue)
        }else{
            setAllCategory(categories)

        }
        

    }

    return (
        <div className='px-2 lg:px-7 pt-5 '>
            <div className='w-full p-4 bg-[#6a5fdf] rounded-md'>
                <div className='flex justify-between items-center pb-4'>
                    <h2 className='text=[#d0d2d6] text-xl font-semibold'>Add Product</h2>
                    <Link to='/admin/products' className='bg-blue-500 hover:shadow-blue-500/10 hover:shadow-lg text-white rounded-sm px-7 py-2'>
                        All Product
                    </Link>
                </div>
                <div>
                    <form>
                        <div className='flex flex-col mb-3 md:flex-row gap-4 w-full text-[#d0d2d6]'>
                            <div className='flex flex-col w-full gap-1'>
                                <label htmlFor='product_name'>Product Name</label>
                                <input  onChange={inputHandle} value={state.product_name} type='text' name='product_name' className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700 bg-transparent rounded-md' placeholder='Product Name' />
                            </div>
                            <div className='flex flex-col w-full gap-1'>
                                <label htmlFor='brand_name'>Brand Name</label>
                                <input  onChange={inputHandle} value={state.brand_name} type='text' name='brand_name' className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700 bg-transparent rounded-md' placeholder='Brand Name' />
                            </div>
                        </div>
                        <div className='flex flex-col mb-3 md:flex-row gap-4 w-full text-[#d0d2d6]'>
                            <div className='flex flex-col w-full gap-1 relative'>
                                <label htmlFor='category'>Category</label>
                                <input readOnly onClick={() => setCateShow(!cateShow)}  onChange={inputHandle} value={category} type='text' id='category' className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700 bg-transparent rounded-md' placeholder='Category' />

                                <div className={`absolute top-[101%] bg-slate-800 w-full transition-all ${cateShow ? 'scale-100' : 'scale-0'}`}>
                                    <div className='w-full px-4 py-2 fixed'>
                                        <input value={searchValue} onChange={categorySearch} type='text' className=' w-full px-3 py-1 focus:border-indigo-500 outline-none bg-transparent border border-slate-700 rounded-md text-[#d0d2d6] overflow-hidden' placeholder='search'/>
                                    </div>
                                    <div className='pt-14'></div>
                                    <div className='flex justify-start items-start flex-col h-[200px] overflow-y-scroll'>
                                        {
                                            allCategory.map((c,i) =><span className={`px-4 py-2 hover:bg-indigo-500 hover:text-white hover:shadow-lg w-full cursor-pointer ${category === c.name && 'bg-indigo-500 '}`} onClick={() => {
                                                setCateShow(false)
                                                setCategory(c.name)
                                                setSearchValue('')
                                                setAllCategory(categories)
                                            }} >{c.name} </span>)
                                        }

                                    </div>

                                    

                                </div>

                            </div>
                            <div className='flex flex-col w-full gap-1'>
                                <label htmlFor='stock'>Product Stock</label>
                                <input  onChange={inputHandle} value={state.stock} type='text' name='stock' className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700 bg-transparent rounded-md' placeholder='Stock' />
                            </div>
                        </div>
                        
                    </form>
                </div>
            </div>
            
        </div>
    );
};

export default AddProduct;