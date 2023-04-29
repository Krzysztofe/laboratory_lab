import { useDispatch, useSelector } from "react-redux";
import TextInput from "../../../components/inputs/textInput/TextInput";
import { ChangeEvent } from "../../../data/types";
import { useValidationForm } from "../../../hooks/useValidationForm";
import { RootState } from "../../../redux/store";
import { handleChange } from "../../../redux/storeFeatures/tableReactionsSlice";
import { solventIdx } from "../../../utils/solventIdx";
import {
  thValuesFirst,
  thValuesSecond,
} from "../tableEditForm/dataTableEditForm";
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

  const { validationForm } = useValidationForm(editedReaction);

  const handleInputChange = (e: ChangeEvent) => {
    const { name, value } = e.target;
    dispatch(handleChange({ name: name, value: value }));
  };

  const handleKeyPress = (
    e: React.KeyboardEvent<HTMLInputElement>,
    inputValue: string
  ) => {
    if (inputValue.length > 6) {
      e.preventDefault();
      return;
    }
  };

const handleTouchEnd = (
  e: React.TouchEvent<HTMLInputElement>,
  inputValue: string
) => {
  if (inputValue.length > 6) {
    e.preventDefault();
    return;
  }
};

  const inputsPrintData = isOpen ? inputsPrintDataFirst : inputsPrintDataSecond;

  const getThValues = isOpen ? thValuesFirst : thValuesSecond;

  return (
    <>
      {inputsPrintData.map(({ type, name }, idx) => {
        return (
          <td
            data-cell={`${getThValues[idx]}`}
            style={{ position: "relative" }}
            key={name}
            className={`${
              (name === "solvent" && "editForm__solventCellDisplay") ||
              (name === "finishDate" && "editForm__solventCellDisplay")
            }`}
          >
            <div className="editForm__inputWrapper">
              <TextInput
                label={""}
                type={type}
                name={name}
                value={
                  Array.isArray(editedReaction[name])
                    ? editedReaction[name].join(", ")
                    : editedReaction[name]
                }
                handleChange={handleInputChange}
                handleKeyPress={(e) =>
                  name === "solvent" && handleKeyPress(e, editedReaction[name])
                }
                handleTouchEnd = {(e) =>
                  name === "solvent" && handleTouchEnd(e, editedReaction[name])}
                containerClass={"editForm__textInputContainer"}
                labelClass={"editForm__textInputLabel"}
                inputClass={`editForm__textInput ${
                  name === "solvent" && "editForm__textInput--solvent"
                }`}
              />

              {name === "solvent" && (
                <div className="editForm__printSolvent">
                  {solventIdx(editedReaction[name])}
                </div>
              )}
              <div className="editForm__error">
                {validationForm()[name as keyof typeof validationForm]}
              </div>
            </div>
          </td>
        );
      })}
    </>
  );
};

export default TableEditForm;
