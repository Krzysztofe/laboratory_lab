import { useRef, useEffect, useState } from "react";
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

const TableEditForm = () => {
  const dispatch = useDispatch();

  const { editedReaction } = useSelector(
    (state: RootState) => state.tableReactions
  );

  const { isOpen } = useSelector(
    (state: RootState) => state.tableReactions.toggleTable
  );

  const { validationForm } = useValidationForm(editedReaction);

  const [textInputFocused, setTextInputFocused] = useState(false);
  const customInputRef = useRef<HTMLDivElement>(null);

  const inputRef = useRef<HTMLDivElement>(null);
  const customDivRef = useRef<HTMLDivElement>(null);

  const handleCustomDivClick = () => {
    inputRef?.current?.focus();
  };

  const handledivChange = () => {
    const input = inputRef.current;
    const customDiv = customDivRef.current;

    if (input && customDiv && input instanceof HTMLInputElement) {
      customDiv.textContent = input?.value;
      input.style.width = `${customDiv.offsetWidth}px`;
    }
  };

  const handleInputChange = (e: ChangeEvent, key: any) => {
    const { name, value } = e.target;
    dispatch(handleChange([name, value]));
  };

  const inputsPrintData = isOpen ? inputsPrintDataFirst : inputsPrintDataSecond;

  const toString = (solventsValue: any) => {
    if (Array.isArray(solventsValue)) {
      return solventsValue.join(", ");
    }
    return solventsValue;
  };

  const string = toString(editedReaction.solvents);

  const formatValue = (value: any) => {
    const select = value.split("").map((char?: any) => {
      return isNaN(Number(char)) ? (
        <>  {char} </>
      ) : (
        <small className="numberInCheckbox" key={crypto.randomUUID()}>
          {char}
        </small>
      );
    });

    return select;
  };

  // const handleTextInputFocus = () => {
  //   setTextInputFocused(true);
  // };

  // const handleTextInputBlur = () => {
  //   setTextInputFocused(false);
  // };

  // const handleCustomDivClickXX = () => {
  //   if (!textInputFocused) {
  //     customInputRef.current?.focus();
  //   }
  // };


  const handleKeyDown = (event:React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
    }
  };
  
  





  return (
    <>
      {inputsPrintData.map(({ type, name }) => {
        return (
          <td style={{ position: "relative" }} key={name}>
            <TextInput
              text={""}
              type={type}
              name={name}
              value={editedReaction[name]}
              onChange={handleInputChange}
              onChangeSolv={handledivChange}
              // onFocus={handleTextInputFocus}
              // onBlur={handleTextInputBlur}
              ref={inputRef}
              classContainer={"editForm__textInputContainer"}
              classLabel={"editForm__textInputLabel"}
              classInput={`editForm__textInput ${
                editedReaction[name] === editedReaction.solvents &&
                "editForm__textInput--solvents"
              }`}
            />

            <div className="editForm__error">
              <small>
                {validationForm()[name as keyof typeof validationForm]}
              </small>
            </div>
            {/* {editedReaction[name] === editedReaction.solvents && (
              <div
                // className="editForm__inputSolvents"
                // contentEditable="true"
                // suppressContentEditableWarning
                // ref={customDivRef}
                // onClick={handleCustomDivClick}
                contentEditable={!textInputFocused}
                suppressContentEditableWarning
                ref={customInputRef}
                // onClick={handleCustomDivClickXX}
              >
                {formatValue(string)}
              </div>
            )} */}
          </td>
        );
      })}
    </>
  );
};

export default TableEditForm;
