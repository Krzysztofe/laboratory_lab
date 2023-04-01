import React from "react";
import BtnFormSubbmit from "../../../../components/btnFormSubmit/BtnFormSubbmit";
import TextInput from "../../../../components/inputs/textInput/TextInput"

const FormContainer = () => {
  return (
    <aside className="contactformContainer">
      <h3 className="contactformContainer__title">Skontaktuj się z grupą badawczą</h3>
      <form className="contactForm">
        <TextInput
          type={"text"}
          name={"name"}
          value={""}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => console.log("")}
          text={"Wpisz imię"}
          placeholder={"Imię"}
          classContainer={"contactForm__container"}
          classLabel={"contactForm__label"}
          classInput={"contactForm__input"}
        />
        <TextInput
          type={"text"}
          name={"email"}
          value={""}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => console.log("")}
          text={"Wpisz email"}
          placeholder={"Email"}
          classContainer={"contactForm__container"}
          classLabel={"contactForm__label"}
          classInput={"contactForm__input"}
        />

        <div
          className="contactForm__inputContainer
                    contactForm__inputContainer--textarea"
        >
          <label className="contactForm__label">Wpisz wiadomość</label>
          <textarea
            name="message"
            className="contactForm__input contactForm__input--textarea"
            rows={4}
            placeholder="Wiadomość"
          />
        </div>

        <BtnFormSubbmit text={"Wyślij"} class={"btn contactForm__btn"} />
      </form>
    </aside>
  );
};

export default FormContainer;
