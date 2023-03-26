import { btnsProjectsData } from "../dataPagination";

interface Props {
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
}

const BtnsPagination = (props: Props) => {
  return (
    <div className="reactionsHome__btns">
      {btnsProjectsData.map((project, idx) => {
        return (
          <button
            key={project}
            onClick={() => (props.setCounter(idx), props.setPageNumber(0))}
            className="reactionsHome__btn"
          >
            {project}
          </button>
        );
      })}
    </div>
  );
};

export default BtnsPagination;
