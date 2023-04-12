import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productApi } from "../rtkQuery/productApi";
import cartSlice from "./tools/cart/cartSlice";
import userSlice from "./tools/userSlice/userSlice";
import addressSlice from "./tools/addressSlice/addressSlice";

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    carts: cartSlice,
    user: userSlice,
    addreess: addressSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

setupListeners(store.dispatch);
