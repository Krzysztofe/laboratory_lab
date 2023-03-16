import { FC } from "react";
import TextInput from "../../../components/inputs/textInput/TextInput";
import { ChangeEvent } from "../../../data/types";
import { ModelEditForm } from "../tableBody/dataTableBody";

interface ModelEditFormProps {
  reactionEdit: ModelEditForm;
  setReactionEdit: React.Dispatch<React.SetStateAction<ModelEditForm>>;
  inputsData: {name: string, type: string}[]
}

const TableEditForm: FC<ModelEditFormProps> = ({
  reactionEdit,
  setReactionEdit,
  inputsData
}) => {
  const handleChange = (e: ChangeEvent) => {
    setReactionEdit({
      ...reactionEdit,
      [e.target.name]: e.target.value,
    });
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
              value={reactionEdit[inputData.name]}
              onChange={handleChange}
            />
          </td>
        );
      })}
    </>
  );
};

export default TableEditForm;
