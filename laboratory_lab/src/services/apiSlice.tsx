import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL_DATA } from "../data/apiKeys";

interface Reaction {
  name: string;
  surname: string;
}

interface Reactions {
  [key: string]: Reaction;
}

export const reactionsApiSlice = createApi({
  reducerPath: "reactionsApi",
  baseQuery: fetchBaseQuery({ baseUrl: URL_DATA }),
  tagTypes: ["names"],
  endpoints: builder => ({
    getReactions: builder.query<Reactions, void>({
      query: () => "/names.json",
      providesTags: ["names"],
    }),
    addReaction: builder.mutation<void, any>({
      query: reaction => ({
        url: "/names.json",
        method: "POST",
        body: reaction,
      }),
      invalidatesTags: ["names"],
    }),
    // updateReaction: builder.mutation<void, Reaction>({
    //   query: ({ id, ...rest }) => ({
    //     url: `/names/${id}.json`,
    //     method: "PUT",
    //     body: rest,
    //   }),
    // }),
    deleteReaction: builder.mutation<void, string>({
      query: id => ({
        url: `/names/${id}.json`,
        method: "DELETE",
      }),
      invalidatesTags: ["names"],
    }),
  }),
});

export const {
  useGetReactionsQuery,
  useAddReactionMutation,
  useDeleteReactionMutation,
} = reactionsApiSlice;
