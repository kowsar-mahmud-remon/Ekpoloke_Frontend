import { apiSlice } from "../api/apiSlice";

const addressApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    addAddress: build.mutation({
      query: (user) => ({
        url: `/api/user/address/create`,
        user,
        method: "POST",
        body: user,
      }),
    }),

    getAddress: build.mutation<any, void>({
      query: () => ({
        url: `/api/user/getAddress`,
        method: "POST",
      }),
    }),
  }),
});

export const { useAddAddressMutation, useGetAddressMutation } = addressApi;
