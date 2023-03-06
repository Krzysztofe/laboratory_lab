import React, { FC } from "react";
import { InitialData } from "../ReactionForm";

interface Props {
  data: InitialData;
  handleChange: (fields: Partial<InitialData>) => void;
}

const Step_3: FC<Props> = props => {
  return <div>warunki reakcji - select rozpuszczalnik - checkbox</div>;
};

export default Step_3;
