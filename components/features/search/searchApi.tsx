import { apiSlice } from "../api/apiSlice";

const searchApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getSearchProduct: build.query({
      query: ({ searchText, sortBy, page, limit, fields }) =>
        `/api/product/search?s=${searchText}&sort=${sortBy || ""}&page=${
          page || 1
        }&limit=${limit || 20}&fields=${
          fields || "name productPictures price"
        }`,
    }),
  }),
});

export const { useGetSearchProductQuery } = searchApi;
