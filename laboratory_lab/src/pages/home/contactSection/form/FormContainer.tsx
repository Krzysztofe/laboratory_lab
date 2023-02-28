import React from "react";
import BtnFormSubbmit from "../../../../components/btnFormSubmit/BtnFormSubbmit";

const FormContainer = () => {
  return (
    <aside className="formContainer">
      <h3 className="formContainer__title">Kontakt z grupą badawczą</h3>
      <form className="contactForm">
        <div className="contactForm__inputContainer">
          <label className="contactForm__label">Wpisz imię</label>
          <input
            type="text"
            name="name"
            className="contactForm__input"
            placeholder="Imię"
          />
        </div>

        <div className="contactForm__inputContainer">
          <label className="contactForm__label">Wpisz email</label>
          <input
            type="text"
            name="email"
            className="contactForm__input"
            placeholder="Email"
          />
        </div>

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

        <BtnFormSubbmit text={"Wyślij"} class={"contactForm__btn"} />
      </form>
    </aside>
  );
};

export default FormContainer;
