import React, { useState } from "react";
import { useDispatch } from "react-redux";
import BtnFormSubbmit from "../../../components/btnFormSubmit/BtnFormSubbmit";
import TextInput from "../../../components/inputs/textInput/TextInput";
import { addMessage } from "../../../redux/storeFeatures/reactionsContactSlice";

const Reactions = () => {
  const [emailValue, setEmailValue] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addMessage(emailValue));
  };

  return (
    <section>
      <div className="wrapper reactionsHome">
        <form onSubmit={e => handleSubmit(e)}>
          <TextInput
            type={"text"}
            name={"email"}
            value={emailValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmailValue(e.target.value)
            }
            text={"Podaj email"}
            placeholder="Email"
          />
          <BtnFormSubbmit text={"wyślij"} />
        </form>
      </div>
    </section>
  );
};

export default Reactions;
