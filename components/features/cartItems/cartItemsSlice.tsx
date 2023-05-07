import { createSlice } from "@reduxjs/toolkit";

interface intializeCartAction {
  payload: any;
  type: string;
}

interface IStateInterface {
  cartItems: any;
  cartTotalAmmount: number;
  cartTotalQuantity: number;
}

const initialState: {
  cartItems: any;
  cartTotalAmmount: number;
  cartTotalQuantity: number;
} = {
  cartItems: [],
  cartTotalAmmount: 0,
  cartTotalQuantity: 0,
};

export const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addCart: (state: IStateInterface, action: any) => {
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

    intializeCart: (state: IStateInterface, action: intializeCartAction) => {
      state.cartItems = action.payload.cartItems;
    },

    clearAll: (state, action) => {},

    increment: (state: IStateInterface, action: intializeCartAction) => {
      console.log("carts", JSON.stringify(state.cartItems));
      let eachCartproductIndex = state.cartItems.findIndex(
        (item: any) => item?._id === action.payload.cartItem?._id
      );

      if (eachCartproductIndex >= 0) {
        state.cartItems[eachCartproductIndex].qty += 1;
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },
    decrement: (state: IStateInterface, action: intializeCartAction) => {
      console.log("carts", JSON.stringify(state.cartItems));
      let eachCartproductIndex = state.cartItems.findIndex(
        (item: any) => item?._id === action.payload.cartItem?._id
      );

      if (eachCartproductIndex <= 1) {
        state.cartItems[eachCartproductIndex].qty -= 1;
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },

    removeSingleItem: (state, action) => {
      const removeItem = state.cartItems.filter(
        (item: any) => item?._id !== action.payload?._id
      );
      state.cartItems = removeItem;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});

export const {
  addCart,
  intializeCart,
  increment,
  decrement,
  removeSingleItem,
} = cartSlice.actions;
export default cartSlice.reducer;
