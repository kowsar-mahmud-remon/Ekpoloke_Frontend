import { apiSlice } from "../api/apiSlice";

const reviewApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    addReview: build.mutation({
      query: ({ productId, formData }) => ({
        url: `/api/rateProduct/${productId}`,
        formData,
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

export const { useAddReviewMutation } = reviewApi;
