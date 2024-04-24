import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUser = createAsyncThunk("fetchUserToken", async(payload:any) => {
    const { username, password, type } = payload
    console.log(username, password, type);
    
    const data:any = axios.post(`http://localhost:5001/api/${type}`, {username, password})
    .then((res:any) => {
        console.log(res);
        localStorage.setItem("token", res.data.token)
        return (res.data)
    })
    return data
})

const inti = {
    username: "",
    isloggedIn: false,
    isloading: false,
    error: "",
}

const slice:any = {
    name: 'user',
    initialState: inti,
    reducers: {
        logout: (state:any) => {
            state.username = "";
            state.isloggedIn = false;
            state.isloading = false;
            
        }
    },
    extraReducers: (builder:any) => {
        builder.addCase(fetchUser.fulfilled, (state:any, action:any) => {
            console.log(action.payload);
            state.username = action.payload.username
            state.isloggedIn = true;
            state.isloading = false
        });

        builder.addCase(fetchUser.pending, (state:any) => {
            console.log(state);
            state.isloading = true;
        });
        builder.addCase(fetchUser.rejected, (state:any, payload:any) => {
            state.isloading = true;
            state.error = payload.error || "page not found";
        });
    },
}


const useSlice:any = createSlice(slice) 
export const { logout } = useSlice.actions
export default useSlice.reducer

/* 
const curpayload = payload.payload
            console.log(curpayload);
            state.gmail = curpayload.gmail;
            state.isloggedIn = true;
            state.username = curpayload.gmail.substring(0, curpayload.gmail.lastIndexOf("@"));
            state.token = curpayload.token
            state.isloading = false;
            state.isRec = payload.payload.isRec || false
*/