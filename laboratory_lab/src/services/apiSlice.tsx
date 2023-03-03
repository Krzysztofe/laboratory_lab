import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL_DATA } from "../data/apiKeys";


interface Reactions{
}

export const reactionsApiSlice = createApi({
  reducerPath: "reactionsApi",
  baseQuery: fetchBaseQuery({ baseUrl: URL_DATA }),
  endpoints: builder => ({
    getReactions: builder.query({
      query: () => "/names.json",
    }),
  }),
});

export const { useGetReactionsQuery } = reactionsApiSlice;
