import { useState } from "react";
import { useReactionsSelection } from "../utilsPagination";
import ReactPaginate from "react-paginate";
import { useReactionsQuery } from "../../../../services/apiSlice";
import { btnsProjectsData } from "../dataPagination";
import TablePagination from "../tablePagination/TablePagination";

const PaginationMain = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [counter, setCounter] = useState(0);
  const { isLoading, error } = useReactionsQuery(undefined);
  const { getReactionsToPrint } = useReactionsSelection(counter);

  const pageCount =
    getReactionsToPrint && Math.ceil(getReactionsToPrint.length / 3);

  const changePage = ({ selected }: any) => {
    setPageNumber(selected);
  };

  isLoading && <div>Loading...</div>;

  if (error) {
    if ("error" in error) return <div> {error.error} </div>;
  }

  return (
    <>
      {btnsProjectsData.map((project, idx) => {
        return (
          <button
            key={project}
            onClick={() => (setCounter(idx), setPageNumber(0))}
          >
            {project}
          </button>
        );
      })}

      <TablePagination counter={counter} pageNumber={pageNumber} />
      {getReactionsToPrint.length > 0 ? (
        <ReactPaginate
          previousLabel={"<< Poprzednia"}
          nextLabel={"Następna >>"}
          pageCount={pageCount || 1}
          onPageChange={changePage}
          containerClassName={"paginationButtonsContainer"}
          previousLinkClassName={"paginationButton__previousNext"}
          nextLinkClassName={"paginationButton__previousNext"}
          disabledClassName={"disabledButton"}
          activeClassName={"paginationButton__active"}
        />
      ) : null}
    </>
  );
};

export default PaginationMain;
