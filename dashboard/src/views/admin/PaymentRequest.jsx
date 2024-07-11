import React,{forwardRef} from 'react';
import {FixedSizeList as List} from 'react-window';

function handleOnWheel({deltaY}){
    console.log('handleOnWheel',deltaY)
}

const outerElementType = forwardRef((props,ref)=>(
    <div ref={ref} onWheel={handleOnWheel} {...props}/>
))

const PaymentRequest = () => {

    const array =[1,2,3,4,5,6,7,8,9,10]

    const Row = ({index,style}) => {
        return (
            <div style={style} className='flex text-sm rounded-md font-medium'>
                <div className='w-[25%] p-3 whitespace-nowrap'>{index+1}</div>
                <div className='w-[25%] p-3'>$100</div>
                <div className='w-[25%] p-3'>
                    <span className='py-[2px] p-[5px] bg-slate-700 text-blue-500 rounded-md text-sm'>Pending</span>
                </div>
                <div className='w-[25%] p-3'>2022-01-01</div>
                <div className='w-[25%] p-2'>
                    <button className='bg-[#726cc6] text-[#ffffff] rounded-md px-2 py-1'>Confirm</button>
                </div>
            </div>
        );
    }

    return (
        <div className='px-2 lg:px-7 pt-5'>
            <div className='w-full p-4 bg-[#6a5fdf] rounded-md'>
                <h2 className='text-xl font-medium pb-5 text-[#d0d2d6]'>Withdraw Request</h2>

                <div className='w-full'>
                    <div className='w-full overflow-auto'>
                        <div className='flex bg-[#a7a3de] uppercase text-xs min-w-[340px] rounded-md font-bold'>
                            <div className='w-[25%] p-3'>No</div>
                            <div className='w-[25%] p-3'>Amount</div>
                            <div className='w-[25%] p-3'>Status</div>
                            <div className='w-[25%] p-3'>Date</div>
                            <div className='w-[25%] p-3'>Action</div>
                        </div>
                        {
                            <List style={{ minWidth:'350px' }}
                            className='List'
                            height={370}
                            itemSize={35}
                            itemCount={10000}
                            outerElementType={outerElementType}
                            >
                                {Row}
                            </List>
                        }

                    </div>

                </div>

            </div>
            
        </div>
    );
};

export default PaymentRequest;