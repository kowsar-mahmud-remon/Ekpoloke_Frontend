import { apiSlice } from "../api/apiSlice";

const authApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    addUser: build.mutation({
      query: (user) => ({
        url: `/api/signup`,
        user,
        method: "POST",
        body: user,
      }),
    }),

    addLoginUser: build.mutation({
      query: (user) => ({
        url: `/api/signin`,
        user,
        method: "POST",
        body: user,
      }),
    }),

    forgotPasswordAtLogin: build.mutation({
      query: (user) => ({
        url: `/api/forgotPassword`,
        user,
        method: "PUT",
        body: user,
      }),
    }),

    resetPasswordAtLogin: build.mutation({
      query: (user) => ({
        url: `/api/resetPassword`,
        user,
        method: "PUT",
        body: user,
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useAddUserMutation,
  useAddLoginUserMutation,
  useForgotPasswordAtLoginMutation,
  useResetPasswordAtLoginMutation,
} = authApi;
