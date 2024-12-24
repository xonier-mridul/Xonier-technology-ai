import { createSlice } from "@reduxjs/toolkit";



const initialState = ({
    users:{
        name:"",
        email:"",
        number:"",
        message:""
    }
})

const UserSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        MaintainUser:(state, action)=>{
           
        }
    }
})