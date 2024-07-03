
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
import api from '../../api/api'  

export const admin_login = createAsyncThunk('auth/admin_login', async (info) => {
    console.log(info)
    try{
        const {data} = await api.post('/admin-login', info,{withCredentials:true})
        return data;

    }catch(error){
    }
})

export const authReducer = createSlice({
    name: 'auth',
    initialState: {
        successMessage:'',
        errorMessage:'',
        loader: false,
        userInfo:''
    },
    reducers: {
        
    },
    extraReducers: () => {

    }
})

export default authReducer.reducer
