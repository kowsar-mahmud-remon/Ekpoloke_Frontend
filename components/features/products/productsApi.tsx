import { apiSlice } from "../api/apiSlice";

const productsApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getAllProducts: build.query({
      query: ({ fields, pagination }) =>
        `api/product/trending?fields=${
          fields || "name,price,productPictures"
        }&page=${pagination?.page || 1}&limit=${pagination?.limit || 10}`,
    }),
    getProductById: build.query({
            query: (_id) => `api/product/${_id}`,
          }),
    getAllCategory: build.query({
      query: () => "/api/category/getcategory",
    }),
    getCarousel: build.query({
      query: () => "/api/slides",  
    }),
    getProductBySlug: build.query({
      query: (slug) => `/api/products/${slug}`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetAllProductsQuery, useGetAllCategoryQuery , useGetCarouselQuery, useGetProductByIdQuery, useGetProductBySlugQuery} = productsApi;
