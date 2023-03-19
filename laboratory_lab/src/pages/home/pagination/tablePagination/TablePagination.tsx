import { ModelReaction } from "../../../../hooks/useReactions";
import { useReactionsSelection } from "../utilsPagination";

const TablePagination = ({
  counter,
  pageNumber,
}: {
  counter: number;
  pageNumber: number;
}) => {
  const { getReactionsToPrint } = useReactionsSelection(counter);
  const reactionPerPage = 3;
  const pagesVisited = pageNumber * reactionPerPage;

  const displayOrganizations = getReactionsToPrint
    .slice(pagesVisited, pagesVisited + reactionPerPage)
    .map((reaction: ModelReaction) => {
      return (
        <table key={reaction.id} className="">
          <thead>
            <tr>
              <th>Nazwa</th>
              <th>Alkaloidy</th>
              <th>Substraty</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="">{reaction.name}</td>
              <td className="">{reaction.alcaloids}</td>
              <td className="">{reaction.substract}</td>
            </tr>
          </tbody>
        </table>
      );
    });
  return (
    <>
      {getReactionsToPrint.length === 0 ? (
        <div>Brak przeprowadzonych reakcji</div>
      ) : (
         displayOrganizations 
      )}
    </>
  );
};
export default TablePagination;
