import { useState } from "react";
import ReactPaginate from "react-paginate";
import { useReactionsQuery } from "../../../../services/apiSlice";
import { useReactionsSelection } from "../utilsPagination";
import {
  btnsProjectsData,
  btnsProjectDescriptionData,
} from "../dataPagination";
import TablePagination from "../tablePagination/TablePagination";
import BtnsPagination from "../btnsPagination/BtnsPagination";

const PaginationSection = () => {
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
    <section>
      <div className="wrapper reactionsHome">
        
        <BtnsPagination setCounter={setCounter} setPageNumber={setPageNumber} />

        <div className="reactionsHome__reactionDescription">
          {btnsProjectDescriptionData[counter]}
        </div>
      
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
      </div>
    </section>
  );
};

export default PaginationSection;
