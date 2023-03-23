import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchCaroData = createAsyncThunk("carousel/fetchCaroData", async()=>{
    
    const res = await axios.get("https://ekpoloke-backend-old.onrender.com/api/slides");

if(res){
    return res

}


})

const caroSlice = createSlice({
    name:'carousel',
    initialState:{
        isLoading:false,
        carousel:[],
        error:null
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchCaroData.pending, (state)=>{
            state.isLoading = true;
        })
        builder.addCase(fetchCaroData.fulfilled, (state,action)=>{
            state.isLoading = false;
            state.carousel = action.payload;
            state.error = null;
        })
        builder.addCase(fetchCaroData.rejected, (state,action)=>{
            state.isLoading = false;
            state.carousel = [];
            state.error = action.error.message;
        })
    }
})
export const {} = caroSlice.actions
export default caroSlice.reducer