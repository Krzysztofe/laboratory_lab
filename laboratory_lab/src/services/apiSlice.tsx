import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL_DATA } from "../data/apiKeys";
import { ModelFormReaction } from "../pages/reactionForm/_indexFormReaction/ModelFormReaction";

interface Reactions {
  [key: string]: ModelFormReaction;
}

export const reactionsApiSlice = createApi({
  reducerPath: "reactionsApi",
  baseQuery: fetchBaseQuery({ baseUrl: URL_DATA }),
  tagTypes: ["reactions"],
  endpoints: builder => ({
    reactions: builder.query<Reactions, void>({
      query: () => "/reactions.json",
      providesTags: ["reactions"],
    }),
    addReaction: builder.mutation<void, ModelFormReaction>({
      query: reaction => ({
        url: "/reactions.json",
        method: "POST",
        body: reaction,
      }),
      invalidatesTags: ["reactions"],
    }),

    updateReaction: builder.mutation<void, ModelFormReaction>({
      query: ubdateReaction => ({
        url: `/reactions/${ubdateReaction.id}.json`,
        method: "PUT",
        body: ubdateReaction,
      }),
      invalidatesTags: ["reactions"],
    }),

    deleteReaction: builder.mutation<ModelFormReaction, string | undefined>({
      query: id => ({
        url: `/reactions/${id}.json`,
        method: "DELETE",
      }),
      invalidatesTags: ["reactions"],
    }),
  }),
});

export const {
  useReactionsQuery,
  useAddReactionMutation,
  useDeleteReactionMutation,
  useUpdateReactionMutation,
} = reactionsApiSlice;
