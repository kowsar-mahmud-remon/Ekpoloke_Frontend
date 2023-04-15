import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import addressSlice from "./tools/addressSlice/addressSlice";
import { apiSlice } from "../features/api/apiSlice";
import cartItemsSlice from "../features/cartItems/cartItemsSlice";
import  userSlice  from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    carts: cartItemsSlice,
    user: userSlice,
    addreess: addressSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

setupListeners(store.dispatch);
