import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { admin_login } from '../../store/Reducers/authReducer';

const AdminLogin = () => {
    
    const dispatch = useDispatch()

    const [state, setState] = useState({
        email: '',
        password: ''
    })

    const loginHandle = (e) => {
        const { name, value } = e.target
        setState({ ...state, [name]: value })
    }
    const submit = (e) => {
        e.preventDefault()
        dispatch(admin_login(state))
    }


    return (
        <div className='min-w-screen min-h-screen bg-[#cdcae9] flex justify-center items-center'>
            <div className='w-{350px} text-[#ffffff] pt-2'>
                <div className='bg-[#6f68d1] p-4 rounded-e-md'>
                    <div className='h-[70px] flex justify-center items-center'>
                        <div className='w-[200px] h-[80px] mb-4'>
                            <img className='w-full h-full' src={"../images/logo.png"} alt="logo" />
                        </div>
                    </div>
                    <form onSubmit={submit}>
                        
                        <div className='flex flex-col w-full gap-1 mb-3'>
                            <label className=''>Email</label>
                            <input  onChange={loginHandle} value={state.email} className='px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md' type='email' placeholder='Email' id='email' name='email' required/>
                        </div>
                        <div className='flex flex-col w-full gap-1 mb-3'>
                            <label className=''>Password</label>
                            <input onChange={loginHandle} value={state.password} className='px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md' type='password' placeholder='Password' id='password' name='password' required/>
                        </div>
                       
                        <button className='bg-slate-800 w-full hover:shadow-blue-300/hover:shadow-lg text-white rounded-md px-7 py-2 mb-3'>Login</button>
                        
                        
                    </form>

                </div>

            </div>
        </div>
    );
};

export default AdminLogin;