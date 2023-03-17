import { FC } from "react";
import TextInput from "../../../components/inputs/textInput/TextInput";
import { ChangeEvent } from "../../../data/types";
import { ModelEditForm } from "../tableBody/dataTableBody";
import { useDispatch, useSelector } from "react-redux";
import { handleChange } from "../../../redux/storeFeatures/tableReactionsSlice";
import { RootState } from "../../../redux/store";

interface ModelEditFormProps {
  inputsData: { name: string; type: string }[];
}

const TableEditForm: FC<ModelEditFormProps> = ({ inputsData }) => {
  const dispatch = useDispatch();

  const { editedReaction } = useSelector(
    (state: RootState) => state.tableReactions
  );

  const handleInputChange = (e: ChangeEvent) => {
    const { name, value } = e.target;
    dispatch(handleChange([name, value]));
  };

  return (
    <>
      {inputsData.map(inputData => {
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
