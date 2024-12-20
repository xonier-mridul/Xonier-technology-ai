import { createSlice } from "@reduxjs/toolkit";
import { MdOutlineSignalWifiStatusbarConnectedNoInternet4 } from "react-icons/md";


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