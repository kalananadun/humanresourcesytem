// authentication slice for the redux 
import {createSlice} from "@reduxjs/toolkit";

interface AuthState {
    isAuth: boolean | null;
    user:{
        id: string | null;
        email: string,
        fname: string,
        lname: string,
        dob : string,

    } | null;
    test: boolean | null;
}


const initialState : AuthState ={
    isAuth : null,
    user : null,
    test : null
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        testAuth:(state)=>{
            state.test ? state.test = false : state.test = true
        }
    }
})

export const {testAuth} = authSlice.actions;
export default authSlice.reducer;
