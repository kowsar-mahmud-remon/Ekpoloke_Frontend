import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://ekpoloke-backend-old.onrender.com",
  }),
  endpoints: (build) => ({
    getProducts: build.query({
      query: ({ fields, pagination }) =>
        `api/product/trending?fields=${
          fields || "name,price,productPictures"
        }&page=${pagination?.page || 1}&limit=${pagination?.limit || 10}`,
    }),
    getProductById: build.query({
      query: (_id) =>
      `api/product/${_id}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productApi;

// /product/:productSlug/:productId/p
