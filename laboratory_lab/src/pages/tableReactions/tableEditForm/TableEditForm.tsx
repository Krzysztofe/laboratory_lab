import TextInput from "../../../components/inputs/textInput/TextInput";
import { ChangeEvent } from "../../../data/types";
import { useDispatch, useSelector } from "react-redux";
import { handleChange } from "../../../redux/storeFeatures/tableReactionsSlice";
import { RootState } from "../../../redux/store";
import {
  inputsPrintDataFirst,
  inputsPrintDataSecond,
} from "./dataTableEditForm";

const TableEditForm = () => {
  const dispatch = useDispatch();

  const { editedReaction } = useSelector(
    (state: RootState) => state.tableReactions
  );

  const { isOpen } = useSelector(
    (state: RootState) => state.tableReactions.toggleTable
  );

  const handleInputChange = (e: ChangeEvent) => {
    const { name, value } = e.target;
    dispatch(handleChange([name, value]));
  };

  const inputsPrintData = isOpen ? inputsPrintDataFirst : inputsPrintDataSecond;

  return (
    <>
      {inputsPrintData.map(inputData => {
        return (
          <td key={inputData.name}>
            <TextInput
              text={""}
              type={inputData.type}
              name={inputData.name}
              value={editedReaction[inputData.name]}
              onChange={handleInputChange}
            />
          </td>
        );
      })}
    </>
  );
};

export default TableEditForm;
