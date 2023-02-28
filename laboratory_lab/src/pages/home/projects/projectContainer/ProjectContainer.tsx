import { FC } from "react";
import{Props} from "./model"

const ProjectContainer: FC<Props> = props => {
  return (
    <div className="project__container">
      <h3 className="project__container__title">
        {props.title[0]} <br /> {props.title[1]}
      </h3>
    </div>
  );
};

export default ProjectContainer;
