import TextInput from "../../../components/inputs/textInput/TextInput";
import { ChangeEvent } from "../../../data/types";
import { useDispatch, useSelector } from "react-redux";
import { handleChange } from "../../../redux/storeFeatures/tableReactionsSlice";
import { RootState } from "../../../redux/store";
import {
  inputsPrintDataFirst,
  inputsPrintDataSecond,
} from "./dataTableEditForm";

import { useValidationForm } from "../../../hooks/useValidationForm";
import {
  useAddReactionMutation,
  useReactionsQuery,
} from "../../../services/apiSlice";
import RequestMessage from "../../reactionForm/RequestMessage";

const TableEditForm = () => {
  const dispatch = useDispatch();
  const { editedReaction } = useSelector(
    (state: RootState) => state.tableReactions
  );
  const { isOpen } = useSelector(
    (state: RootState) => state.tableReactions.toggleTable
  );
  const [addReaction, success] = useAddReactionMutation();

  const { error, isLoading } = useReactionsQuery(undefined);
  const { validationForm } = useValidationForm(editedReaction);

  const handleInputChange = (e: ChangeEvent) => {
    const { name, value } = e.target;
    dispatch(handleChange([name, value]));
  };

  const inputsPrintData = isOpen ? inputsPrintDataFirst : inputsPrintDataSecond;

  let rowContent = (
    <>
      {inputsPrintData.map(({ type, name }) => {
        return (
          <td style={{ position: "relative" }} key={name}>
            <TextInput
              label={""}
              type={type}
              name={name}
              value={editedReaction[name]}
              handleChange={handleInputChange}
              containerClass={"editForm__textInputContainer"}
              labelClass={"editForm__textInputLabel"}
              inputClass={`editForm__textInput ${
                editedReaction[name] === editedReaction.solvents &&
                "editForm__textInput--solvents"
              }`}
            />

            <div className="editForm__error">
              <small>
                {validationForm()[name as keyof typeof validationForm]}
              </small>
            </div>
          </td>
        );
      })}
    </>
  );

  if (success.isLoading) {
    rowContent = (
      <RequestMessage
        message={<> Wysyła... </>}
        className="formReaction__requestMessage"
      />
    );
  }

  if (success.error) {
    if ("error" in success.error)
      rowContent = (
        <RequestMessage
          message={success.error.error}
          className="formReaction__requestMessage"
        />
      );
  }

  return (
    <>
      {inputsPrintData.map(({ type, name }) => {
        return (
          <td style={{ position: "relative" }} key={name}>
            <TextInput
              label={""}
              type={type}
              name={name}
              value={editedReaction[name]}
              handleChange={handleInputChange}
              containerClass={"editForm__textInputContainer"}
              labelClass={"editForm__textInputLabel"}
              inputClass={`editForm__textInput  ${success.error && "ditError"}`}
            />

            <div className="editForm__error">
              <small>
                {validationForm()[name as keyof typeof validationForm]}
              </small>
            </div>
          </td>
        );
      })}
    </>
  );
};

export default TableEditForm;
