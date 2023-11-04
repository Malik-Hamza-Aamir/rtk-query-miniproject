import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GET_ALL_PRODUCTS } from "../endpoints/endpoints";

export const productApiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: GET_ALL_PRODUCTS }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/",
    }),
    postProducts: builder.mutation({
      query: (product) => ({
        url: "/",
        method: "POST",
        body: product,
      }),
    }),
  }),
});

export const { useGetProductsQuery } = productApiSlice;
