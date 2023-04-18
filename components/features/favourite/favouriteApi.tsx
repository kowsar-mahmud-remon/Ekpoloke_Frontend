import { apiSlice } from "../api/apiSlice";

const favouriteApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    addToFavorite: build.mutation<any, void>({
      query: (productId) => ({
        url: `/api/favorites/add`,
        productId,
        method: "POST",
        body: productId,
      }),
    }),
    removeFromFavorite: build.mutation<any, void>({
      query: (productId) => ({
        url: `/api/favorites/remove`,
        productId,
        method: "DELETE",
        body: productId,
      }),
    }),

    getFavorites: build.query({
      query: () => "/api/favorites/get",
    }),
  }),
});

export const {
  useAddToFavoriteMutation,
  useRemoveFromFavoriteMutation,
  useGetFavoritesQuery,
} = favouriteApi;
