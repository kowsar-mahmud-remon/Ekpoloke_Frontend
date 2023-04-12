import { createSlice } from "@reduxjs/toolkit";
import { log } from "console";

const initialState = {
  addreess: [],
  orders: [],
  error: null,
  orderFetching: false,
  loading: false,
  orderDetails: {},
};

export const addressSlice = createSlice({
  name: "addreess",
  initialState,
  reducers: {
    addAddress: (state: any, action: any) => {    
      const arr = action.payload;
        state.addreess.push(arr)
    },
    addOrder: (state: any, action: any) => {
      const arr = action.payload;
        state.orders.push(arr)
    },
    
  },
});

export const { addAddress, addOrder } = addressSlice.actions;
export default addressSlice.reducer;
