import { useState } from "react";
import ReactPaginate from "react-paginate";
import { useReactionsQuery } from "../../../../services/apiSlice";
import { useReactionsSelection } from "../utilsPagination";
import { btnsDescriptionData } from "../dataPagination";
import TablePagination from "../tablePagination/TablePagination";
import BtnsPagination from "../btnsPagination/BtnsPagination";

const PaginationSection = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [counter, setCounter] = useState(0);
  const { data, isLoading, error } = useReactionsQuery(undefined);
  const { getReactionsToPrint } = useReactionsSelection(counter);

  const pageCount =
    getReactionsToPrint && Math.ceil(getReactionsToPrint.length / 3);

  const changePage = ({ selected }: any) => {
    setPageNumber(selected);
  };

  let tablePrint = <div></div>;

  if (isLoading) {
    tablePrint = <div style={{ textAlign: "center" }}>Loading...</div>;
  }

  if (error) {
    if ("error" in error)
      tablePrint = <div style={{ textAlign: "center" }}> {error.error} </div>;
  }

  if (data) {
    tablePrint = (
      <>
        <TablePagination counter={counter} pageNumber={pageNumber} />
        {getReactionsToPrint.length > 0 ? (
          <ReactPaginate
            previousLabel={"<<"}
            nextLabel={">>"}
            pageCount={pageCount || 1}
            onPageChange={changePage}
            containerClassName={"paginationCounters"}
            previousLinkClassName={"paginationCounters__previousNext"}
            pageLinkClassName={"paginationCounters__btn"}
            nextLinkClassName={"paginationCounters__previousNext"}
            activeClassName={"paginationCounters__active"}
            disabledClassName={"paginationCounters__disabledBtn"}
          />
        ) : (
          <div className="emptyContainer"></div>
        )}
      </>
    );
  }

console.log('',counter)

  return (
    <section id="pagination">
      <div className="wrapper paginationHome">
        <h3 className="paginationHome__header">
          Reakcje aktualnie zapisane w dzienniku
        </h3>
        <BtnsPagination setCounter={setCounter} setPageNumber={setPageNumber} />

        <div className="paginationHome__reactionDescription">
          {btnsDescriptionData[counter]}
          {counter === 2 ? null : "°C"}
        </div>

        {tablePrint}
      </div>
    </section>
  );
};

export default PaginationSection;
