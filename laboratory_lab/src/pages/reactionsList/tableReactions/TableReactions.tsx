import { FC } from "react";

import { ModelTableReactions } from "./modelTableReactions";

const TableReactions: FC<ModelTableReactions> = ({ children }) => {
  return <table style={{ fontSize: 10 }}>{children}</table>;
};

export default TableReactions;
