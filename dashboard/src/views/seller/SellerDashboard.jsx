import React from 'react';
import { MdCurrencyExchange, MdProductionQuantityLimits } from 'react-icons/md';
import { FaCartShopping } from 'react-icons/fa6';
import Chart from 'react-apexcharts'
import { Link } from 'react-router-dom';

const SellerDashboard = () => {

    const state = {
        series: [{
                name: 'Orders',
                data: [30, 40, 35, 50, 49, 80, 100]
            },
            {
                name: 'Revenue',
                data: [30, 40, 20, 55, 49, 65, 70]
            },
            {
                name: 'Sales',
                data: [30, 40, 35, 50, 70, 60, 70]
            }
        ],
        options: {
            colors: ['#BE344A', '#53B679', '#2272C6'],
            plotOptions: {
                borderRadius: 30
            },
            chart: {
                background: 'transparent',
                foreColor: '#f0f0f0',
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show:true,
                curve: ['smooth', 'straight', 'stepline'],
                lineCap: 'butt',
                colors:'#f0f0f0',
                width: .5,
                dashArray: 0
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            legend: {
                position: 'top'
            },
            responsive:[
                {
                    breakpoint: 565,
                    yaxis: {
                        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                    },
                    options: {
                        plotOptions: {
                            bar:{
                                horizontal: true
                            }
                        },
                        chart:{
                            height: '550px'
                        }
                    }

                }
            ]
        }
    }
    

    return (
        <div className='px-2 md:px-7 py-5'>
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7'>
                <div className='flex justify-between items-center p-5 bg-[#fae8e8] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-[#5c5c5c]'>
                        <h2 className='text-3xl font-bold'>100</h2>
                        <span className='text-md font-medium'>Total sales this month</span>

                    </div>
                    <div className='w-[47px] h-[47px] rounded-full bg-[#fa0305] flex justify-center items-center text-xl'>
                        <MdCurrencyExchange className='text-[#fae8e8] shadow-lg'/>
                    </div>
                </div>
                <div className='flex justify-between items-center p-5 bg-[#fee2e2] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-[#5c5c5c]'>
                        <h2 className='text-3xl font-bold'>50</h2>
                        <span className='text-md font-medium'>Products</span>

                    </div>
                    <div className='w-[47px] h-[47px] rounded-full bg-[#760077] flex justify-center items-center text-xl'>
                        <MdProductionQuantityLimits className='text-[#fae8e8] shadow-lg'/>
                    </div>
                </div>
                <div className='flex justify-between items-center p-5 bg-[#e9feea] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-[#5c5c5c]'>
                        <h2 className='text-3xl font-bold'>20</h2>
                        <span className='text-md font-medium'>Orders</span>

                    </div>
                    <div className='w-[47px] h-[47px] rounded-full bg-[#51d758] flex justify-center items-center text-xl'>
                        <FaCartShopping className='text-[#fae8e8] shadow-lg'/>
                    </div>
                </div>
                
                <div className='flex justify-between items-center p-5 bg-[#ecebff] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-[#5c5c5c]'>
                        <h2 className='text-3xl font-bold'>200</h2>
                        <span className='text-md font-medium'>Pending Order</span>

                    </div>
                    <div className='w-[47px] h-[47px] rounded-full bg-[#0200f8] flex justify-center items-center text-xl'>
                        <FaCartShopping className='text-[#fae8e8] shadow-lg'/>
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-wrap mt-7'>
                <div className='w-full lg:w-7/12 lg:pr-3'>
                    <div className='w-full bg-[#645ea4] p-4 rounded-md'>
                        <Chart options={state.options} series={state.series} type="bar" height={350}/>
                    </div>
                </div>
                <div className='w-full lg:w-5/12 lg:pl-4 mt-4 lg:mt-0'>
                    <div className='w-full bg-[#645ea4] p-4 rounded-md text-[#fae8e8]'>
                        <div className='flex justify-between items-center'>
                            <h2 className='text-lg font-semibold text-[#fae8e8]'>Recent Customer Message</h2>
                            <Link className='px-3 py-1 bg-[#fae8e8] text-[#645ea4] font-semibold rounded-md'>View All</Link>
                        </div>
                        <div className='flex flex-col gap-2 pt-6 text-[#5c5c5c]'>
                            <ol className='relative border-slate-700 ml-4'>
                                <li className='mb-3 ml-6'>
                                    <div className='flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-[6px] bg-[#4c7fe2] rounded-full z-10'>
                                        <img className='w-full rounded-full h-full shadow-lg' src='http://localhost:3000/images/admin.jpg' alt=''/>
                                    </div>
                                    <div className='p-3 bg-slate-800 rounded-lg border border-slate-600 shadow-sm text-white'>
                                        <div className='flex justify-between items-center mb-2'>
                                            <Link className='text-md font-normal'>Seller</Link>
                                            <time className='mb-1 text-sm font-normal sm:order-last sm:mb-0'>2 day ago</time>
                                        </div>
                                        <div className='p-2 text-xs font-normal bg-slate-700 rounded-lg border border-slate-800'>
                                            How Are You
                                        </div>
                                    </div> 
                                </li>
                                <li className='mb-3 ml-6'>
                                    <div className='flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-[6px] bg-[#4c7fe2] rounded-full z-10'>
                                        <img className='w-full rounded-full h-full shadow-lg' src='http://localhost:3000/images/admin.jpg' alt=''/>
                                    </div>
                                    <div className='p-3 bg-slate-800 rounded-lg border border-slate-600 shadow-sm text-white'>
                                        <div className='flex justify-between items-center mb-2'>
                                            <Link className='text-md font-normal'>Admin</Link>
                                            <time className='mb-1 text-sm font-normal sm:order-last sm:mb-0'>2 day ago</time>
                                        </div>
                                        <div className='p-2 text-xs font-normal bg-slate-700 rounded-lg border border-slate-800'>
                                            How Are You
                                        </div>
                                    </div> 
                                </li>
                                <li className='mb-3 ml-6'>
                                    <div className='flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-[6px] bg-[#4c7fe2] rounded-full z-10'>
                                        <img className='w-full rounded-full h-full shadow-lg' src='http://localhost:3000/images/admin.jpg' alt=''/>
                                    </div>
                                    <div className='p-3 bg-slate-800 rounded-lg border border-slate-600 shadow-sm text-white'>
                                        <div className='flex justify-between items-center mb-2'>
                                            <Link className='text-md font-normal'>Customer</Link>
                                            <time className='mb-1 text-sm font-normal sm:order-last sm:mb-0'>2 day ago</time>
                                        </div>
                                        <div className='p-2 text-xs font-normal bg-slate-700 rounded-lg border border-slate-800'>
                                            How Are You
                                        </div>
                                    </div> 
                                </li>

                            </ol>
                        </div>
                    </div>

                </div>
                    
            </div>
            <div className='w-full p-4 bg-[#6a5fdf] rounded-md mt-6'>
                <div className='flex justify-between items-center'>
                    <h2 className='font-semibold text-lg text-[#d0d2d6] pb-3'>Recent Orders</h2>
                    <Link className='px-3 py-1 bg-[#d0d2d6] text-[#6a5fdf] font-semibold rounded-md text-sm'>View All</Link>
                </div>
                <div className='relative overflow-x-auto'>
                    <table className='w-full text-sm text-[#d0d2d6] text-left'>
                        <thead className='text-sm text-[#d0d2d6] uppercase border-b border-slate-700'>
                            <tr>
                                <th scope='col' className='px-4 py-3'>Order ID</th>
                                <th scope='col' className='px-4 py-3'>Price</th>
                                <th scope='col' className='px-4 py-3'>Payment Status</th>
                                <th scope='col' className='px-4 py-3'>Order Status</th>
                                <th scope='col' className='px-4 py-3'>Active</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                [1,2,3,4,5,6,7,8,9,10].map((item, index) =>
                                    <tr key={index}>
                                        <td scope='row' className='px-4 py-3 font-medium whitespace-nowrap'>#12345</td>
                                        <td scope='row' className='px-4 py-3 font-medium whitespace-nowrap'>50000</td>
                                        <td scope='row' className='px-4 py-3 font-medium whitespace-nowrap'>Pending</td>
                                        <td scope='row' className='px-4 py-3 font-medium whitespace-nowrap'>Pending</td>
                                        <td scope='row' className='px-4 py-3 font-medium whitespace-nowrap'>
                                        <Link>View</Link></td>
                                    </tr>

                                )
                            }
                            
                            
                        </tbody>

                    </table>

                </div>

            </div>

        </div>
    );
};

export default SellerDashboard;