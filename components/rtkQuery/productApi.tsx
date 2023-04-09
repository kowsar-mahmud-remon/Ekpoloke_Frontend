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
      query: (_id) => `api/product/${_id}`,
    }),
    getCarousel: build.query({
      query: () => "/api/slides",
    }),
    getAllCategory: build.query({
      query: () => "/api/category/getcategory",
    }),
    getProductBySlug: build.query({
      query: (slug) => `/api/products/${slug}`,
    }),
    addReview: build.mutation({
      query: ({ productId, data, params }) => ({
        url: `/api/rateProduct/${productId}`,
        params,
        method: "POST",
        body: data,
      }),
    }),

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
});

export const {
  useGetProductsQuery,
  useGetCarouselQuery,
  useGetAllCategoryQuery,
  useGetProductBySlugQuery,
  useGetProductByIdQuery,
  useAddReviewMutation,
  useAddUserMutation,
  useAddLoginUserMutation,
  useForgotPasswordAtLoginMutation,
  useResetPasswordAtLoginMutation,
} = productApi;
