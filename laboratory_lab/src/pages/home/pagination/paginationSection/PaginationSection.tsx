import { useState } from "react";
import ReactPaginate from "react-paginate";
import { useReactionsQuery } from "../../../../services/apiSlice";
import HeaderPagination from "../headerPaination/HeaderPagination";
import TablePagination from "../tablePagination/TablePagination";
import { useFilteredReactions } from "../useFilteredReactions";

const PaginationSection = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [counter, setCounter] = useState(0);
  const { data, isLoading, error } = useReactionsQuery(undefined);
  const { getReactionsTablePrint } = useFilteredReactions(counter);

  const pageCount =
    getReactionsTablePrint?.length &&
    Math.ceil(getReactionsTablePrint.length / 3);

  const changePage = ({ selected }: { selected: number }) => {
    setPageNumber(selected);
  };

  let tableContent = (
    <div className="reactionsHome__emptyTableMessage">
      Brak reakcji zapisanych w dzienniku
    </div>
  );

  if (isLoading) {
    tableContent = <div style={{ textAlign: "center" }}>Loading...</div>;
  }

  if (error) {
    if ("error" in error)
      tableContent = <div style={{ textAlign: "center" }}> {error.error} </div>;
  }

  if (data) {
    tableContent = (
      <>
        <TablePagination counter={counter} pageNumber={pageNumber} />
        {getReactionsTablePrint.length > 0 ? (
          <ReactPaginate
            previousLabel={"<<"}
            nextLabel={">>"}
            pageCount={pageCount || 1}
            onPageChange={changePage}
            pageRangeDisplayed={1}
            marginPagesDisplayed={2}
            containerClassName={"paginationCounters"}
            previousLinkClassName={"paginationCounters__previousNext"}
            pageLinkClassName={"paginationCounters__btn"}
            nextLinkClassName={"paginationCounters__previousNext"}
            activeClassName={"paginationCounters__active"}
            disabledClassName={"paginationCounters__disabledBtn"}
          />
        ) : (
          <div className="emptyCountersContainer"></div>
        )}
      </>
    );
  }

  return (
    <section id="pagination">
      <div className="wrapper paginationHome">
        <HeaderPagination
          counter={counter}
          setCounter={setCounter}
          setPageNumber={setPageNumber}
        />
        {tableContent}
      </div>
    </section>
  );
};

export default PaginationSection;
