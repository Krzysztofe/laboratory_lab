import { ReactNode } from "react";

export interface Props {
  children: ReactNode;
}

const TableReactions = (props: Props) => {
  return <table className="wrapper tableReactions__table">{props.children}</table>;
};

export default TableReactions;
