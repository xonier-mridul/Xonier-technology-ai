import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    name:"",
    email:"",
    country:"",
    number:"",
    message:""
}

const UserSlice = createSlice({
    name:"contact",
    initialState,
    reducers:{
        contactData:(state,action)=>{
           state=({...state, ...action.payload})
        }
    }
})

export const {contactData} = UserSlice.actions;
export default UserSlice.reducer;