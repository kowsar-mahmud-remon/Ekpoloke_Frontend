import { configureStore } from "@reduxjs/toolkit";
import caroSlice from './features/carousel/carouselSlice'



export const store = configureStore({
    reducer:{
       carousel:caroSlice,
    }
})