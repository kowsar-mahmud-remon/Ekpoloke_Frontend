import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://ekpoloke-backend-old.onrender.com",
  }),
  endpoints: (build) => ({
    getPost: build.query({
      query: ({ fields, pagination }) =>
        `api/product/trending?fields=${
          fields || "name,price,productPictures"
        }&page=${pagination?.page || 1}&limit=${pagination?.limit || 10}`,
    }),
    getCarousel: build.query({
      query: () =>
        '/api/slides'
    }),
  }),
});

export const { useGetPostQuery, useGetCarouselQuery } = productApi;
