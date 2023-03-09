import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL_DATA } from "../data/apiKeys";
import { ModelFormReaction } from "../pages/reactionForm/formReaction/ModelFormReaction";
import { ModelListReactions } from "../pages/reactionsList/modelListReactions";
interface Reaction {
  name: string;
  surname: string;
}

interface Reactions {
  [key: string]: ModelFormReaction;
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
    // ModelListReactions[]
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

    // ModelListReactions[]
    deleteReaction: builder.mutation<void, any>({
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
