import { createSlice } from "@reduxjs/toolkit";

interface intializeCartAction {
  type: string;
  // payload: {
  //   cartItems: [];
  // };
}

const initialState = {
  accessToken: undefined,
  user: undefined,
};

export const userSlice = createSlice({
  name: "newUser",
  initialState,
  reducers: {
    signUp: (state: any, action: any) => {
      console.log("usseeerrSSSSSSSSlice", action?.payload);
      state.accessToken = action?.payload?.token;
      state.user = action?.payload?.user;
    },

    // isUserLoggedIn: (state: any, action: any) => {
    //   const token = localStorage.getItem("token");
    //   const user = JSON.parse(localStorage.getItem("user"));
    // },

    forgetPasswordToken: (state: any, action: any) => {
      // console.log("usseeerrSSSSSSSSlice", action?.payload);
      state.accessToken = action?.payload?.token;
    },

    signOut: (state: any) => {
      (state.accessToken = undefined), (state.user = undefined);
    },
  },
});

export const { signUp, forgetPasswordToken, signOut } = userSlice.actions;
export default userSlice.reducer;
