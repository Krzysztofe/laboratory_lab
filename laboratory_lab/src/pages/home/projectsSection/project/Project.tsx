import { FC } from "react";
import { Props } from "./modelProject";

const Project: FC<Props> = props => {
  return (
    <div className="project">
      <h3 className="project__title">
        {props.title[0]} <br /> {props.title[1]}
      </h3>
    </div>
  );
};

export default Project;
