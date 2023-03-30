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
<<<<<<< HEAD
    getProductById: build.query({
      query: (_id) =>
      `api/product/${_id}`,
=======
    getCarousel: build.query({
      query: () => "/api/slides",
    }),
    getAllCategory: build.query({
      query: () => "/api/category/getcategory",
    }),
    getProductBySlug: build.query({
      query: (slug) => `/api/products/${slug}`,
>>>>>>> 0914c4efd390de91edd3f4252e4d27acb906f51d
    }),
  }),
});

<<<<<<< HEAD
export const { useGetProductsQuery, useGetProductByIdQuery } = productApi;

// /product/:productSlug/:productId/p
=======
export const {
  useGetPostQuery,
  useGetCarouselQuery,
  useGetAllCategoryQuery,
  useGetProductBySlugQuery,
} = productApi;
>>>>>>> 0914c4efd390de91edd3f4252e4d27acb906f51d
