import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { admin_login,messageClear } from '../../store/Reducers/authReducer';
import { PropagateLoader } from 'react-spinners';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {loader,errorMessage,successMessage} = useSelector(state => state.auth)

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
        //console.log(state)
        dispatch(admin_login(state))
    }

    const overrideStyle = {
        display: 'flex',
        margin: "0 auto",
        height:'24px',
        justifyContent: 'center',
        alignItems: 'center',

    }
    useEffect(() => {
        if(errorMessage){
            toast.error(errorMessage)
            dispatch(messageClear())
        }
        if(successMessage){
            toast.success(successMessage)
            dispatch(messageClear())
            navigate('/')
            
        }
    },[errorMessage,successMessage,dispatch, navigate])


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
                       
                        <button disabled={loader?true:false} className='bg-slate-800 w-full hover:shadow-blue-300/ hover:shadow-lg text-white rounded-md px-7 py-2 mb-3'>{loader ? <PropagateLoader color="#ffffff" cssOverride={overrideStyle}/> :'Login'}</button>
                        
                        
                    </form>

                </div>

            </div>
        </div>
    );
};

export default AdminLogin;