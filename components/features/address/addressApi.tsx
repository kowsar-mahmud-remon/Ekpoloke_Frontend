import { apiSlice } from "../api/apiSlice";

const addressApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    addAddress: build.mutation<any, void>({
      query: (user) => {
        return {
          url: `/api/user/address/create`,
          method: "POST",
          body: user,
        };
      },
    }),

    getAddress: build.mutation<any, void>({
      query: () => ({
        url: `/api/user/getAddress`,
        method: "POST",
      }),
    }),
    addOrders: build.mutation<any, any>({
      query: (user) => {
        return {
          url: `/api/addOrder`,
          method: "POST",
          body: user,
        };
      },
    }),
    getOrder: build.query({
      query: () => "/api/getOrders",
    }),
  }),
});

export const {
  useAddAddressMutation,
  useGetAddressMutation,
  useAddOrdersMutation,
  useGetOrderQuery,
} = addressApi;
