import { btnsReactionsNamesData, btnsSubtitleData } from "../dataPagination";

interface Props {
  counter: number;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
}

const HeaderPagination = (props: Props) => {
  return (
    <>
      <h2 className="paginationHome__header">
        Reakcje zapisane <br/>w dzienniku
      </h2>

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
      <div className="paginationHome__reactionDescription">
        {btnsSubtitleData[props.counter]}
      </div>
    </>
  );
};

export default HeaderPagination;
