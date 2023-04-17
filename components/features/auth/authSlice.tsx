import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface intializeCartAction {
  type: string;
  // payload: {
  //   cartItems: [];
  // };
}

interface ISignUpAction {
  token: string;
  user: {
    _id: string;
    email: string;
    firstName: string;
    fullName: string;
    lastName: string;
    role: string;
  };
}
interface IInitialState {
  accessToken: string;
  user: {
    _id: string;
    email: string;
    firstName: string;
    fullName: string;
    lastName: string;
    role: string;
  };
}

const initialState: IInitialState = {
  accessToken: "",
  user: {
    _id: "",
    email: "",
    firstName: "",
    fullName: "",
    lastName: "",
    role: "",
  },
};

export const userSlice = createSlice({
  name: "newUser",
  initialState,
  reducers: {
    signUp: (state: IInitialState, action: PayloadAction<ISignUpAction>) => {
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
