import { createSlice } from "@reduxjs/toolkit";

interface intializeCartAction {
  type: string;
  payload: {
    cartItems: [];
  };
}

const initialState = {
  cartItems: [],
  cartTotalAmmount: 0,
  cartTotalQuantity: 0,
};

export const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addCart: (state: any, action: any) => {
      let eachCartproductIndex = state.cartItems.findIndex(
        (item: any) => item?._id === action.payload?._id
      );

      if (eachCartproductIndex >= 0) {
        state.cartItems[eachCartproductIndex].qty += 1;
      } else {
        let assembledItem: any;
        if (action.payload.qty > 1) {
          assembledItem = { ...action.payload, qty: action.payload.qty };
          console.log("action payload in detail", action.payload.qty);
          state.cartItems.push(assembledItem);
        } else if (action.payload.qty === 1) {
          assembledItem = { ...action.payload, qty: 1 };
          console.log("action payload", action.payload);
          state.cartItems.push(assembledItem);
        }
        // localstorage add

        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },

    intializeCart: (state: any, action: intializeCartAction) => {
      state.cartItems = action.payload.cartItems;
    },

    removeSingleItem: (state, action) => {},

    clearAll: (state, action) => {},

    increment: (state, action) => {},

    decrement: (state, action) => {},
  },
});

export const { addCart, intializeCart } = cartSlice.actions;
export default cartSlice.reducer;
