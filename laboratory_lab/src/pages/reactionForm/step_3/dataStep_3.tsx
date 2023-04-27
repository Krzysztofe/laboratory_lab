import { ModelReaction } from "../../../services/apiSlice";

export const fields = [
  {
    name: "startDate",
    type: "date",
    label: "Data rozpoczęcia",
    value: (reaction: ModelReaction) => reaction.startDate,
    errorKey: "startDate",
  },
  {
    name: "finishDate",
    type: "date",
    label: "Data ukończenia",
    value: (reaction: ModelReaction) => reaction.finishDate,
    errorKey: "finishDate",
  },
  {
    name: "startTime",
    type: "time",
    label: "Godzina rozpoczęcia",
    value: (reaction: ModelReaction) => reaction.startTime,
    errorKey: "startTime",
  },
  {
    name: "finishTime",
    type: "time",
    label: "Godzina zakończenia",
    value: (reaction: ModelReaction) => reaction.finishTime,
    errorKey: "finishTime",
  },
]
