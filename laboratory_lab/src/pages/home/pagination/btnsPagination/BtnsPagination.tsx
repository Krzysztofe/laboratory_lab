import { btnsReactionsNamesData } from "../dataPagination";

interface Props {
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
}

const BtnsPagination = (props: Props) => {
  return (
    <div className="paginationHome__btns">
      {btnsReactionsNamesData.map((name, idx) => {
        return (
          <button
            key={name}
            onClick={() => (props.setCounter(idx), props.setPageNumber(0))}
            className="btn paginationHome__btn"
          >
            {name}
          </button>
        );
      })}
    </div>
  );
};

export default BtnsPagination;
