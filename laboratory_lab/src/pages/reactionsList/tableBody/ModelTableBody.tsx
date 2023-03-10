import { ModelReaction } from "../listReactions/modelReaction";
export interface ModelTableBody {
  getTableBodyReactions: (reaction: ModelReaction) => any[];
  reactions: ModelReaction[] | undefined;
}
