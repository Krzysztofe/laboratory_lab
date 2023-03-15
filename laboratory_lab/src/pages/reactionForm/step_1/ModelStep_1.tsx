import { ModelFormReaction } from "../formReaction/ModelFormReaction";
export interface ModelStep_1 {
  reaction: ModelFormReaction;
  handleChange: (fields: Partial<ModelFormReaction>) => void;
}
