import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL_DATA } from "../data/apiKeys";

export interface ModelReaction {
  [key: string]: any;
  id?: string;
  name: string;
  alcaloids: string;
  selectMilimolles: string;
  selectReactionCondition: string;
  solvent: string;
  atmosphere: string;
  startDate: string;
  finishDate: string;
  startTime: string;
  finishTime: string;
  technics: string;
  isEdit?: boolean;
}

interface Reactions {
  [key: string]: ModelReaction;
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
    addReaction: builder.mutation<void, ModelReaction>({
      query: reaction => ({
        url: "/reactions.json",
        method: "POST",
        body: reaction,
      }),
      invalidatesTags: ["reactions"],
    }),

    updateReaction: builder.mutation<void, ModelReaction>({
      query: ubdateReaction => ({
        url: `/reactions/${ubdateReaction.id}.json`,
        method: "PUT",
        body: ubdateReaction,
      }),
      invalidatesTags: ["reactions"],
    }),

    deleteReaction: builder.mutation<ModelReaction, string | undefined>({
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
