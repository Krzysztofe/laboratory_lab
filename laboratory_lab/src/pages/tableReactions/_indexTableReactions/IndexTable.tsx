import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../data/firebaseConfig";
import TableBody from "../tableBody/TableBody";
import TableHead from "../tableHead/TableHead";
import TableHeader from "../tableHeader/TableHeader";
import TableReactions from "../tableReactions/TableReactions";

const IndexTable = () => {
  const navigate = useNavigate();
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      !user && navigate("/login");
    });
  }, []);

  return (
    <main className="tableReactions__main">
      <TableHeader />
      <TableReactions>
        <TableHead />
        <TableBody />
      </TableReactions>
    </main>
  );
};

export default IndexTable;
