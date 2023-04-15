import { apiSlice } from "../api/apiSlice";

const reviewApi = apiSlice.injectEndpoints({
    endpoints: (build) =>({
        addReview: build.mutation({
            query: ({ productId, data, params }) => ({
              url: `/api/rateProduct/${productId}`,
              params,
              method: "POST",
              body: data,
            }),
          }),
    })
})

export const {useAddReviewMutation} = reviewApi;