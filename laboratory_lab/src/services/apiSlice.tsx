import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL_DATA } from "../data/apiKeys";
import { ModelFormReaction } from "../pages/reactionForm/formReaction/ModelFormReaction";

interface Reactions {
  [key: string]: ModelFormReaction;
}

export const reactionsApiSlice = createApi({
  reducerPath: "reactionsApi",
  baseQuery: fetchBaseQuery({ baseUrl: URL_DATA }),
  tagTypes: ["names"],
  endpoints: builder => ({
    reactions: builder.query<Reactions, void>({
      query: () => "/names.json",
      providesTags: ["names"],
    }),
    addReaction: builder.mutation<void, ModelFormReaction>({
      query: reaction => ({
        url: "/names.json",
        method: "POST",
        body: reaction,
      }),
      invalidatesTags: ["names"],
    }),

    updateReaction: builder.mutation<any, any>({
      query: ubdateReaction => ({
        url: `/names/${ubdateReaction.id}.json`,
        method: "PUT",
        body: ubdateReaction,
      }),
      invalidatesTags: ["names"],
    }),

    deleteReaction: builder.mutation<ModelFormReaction, string | undefined>({
      query: id => ({
        url: `/names/${id}.json`,
        method: "DELETE",
      }),
      invalidatesTags: ["names"],
    }),
  }),
});

export const {
  useReactionsQuery,
  useAddReactionMutation,
  useDeleteReactionMutation,
  useUpdateReactionMutation,
} = reactionsApiSlice;
