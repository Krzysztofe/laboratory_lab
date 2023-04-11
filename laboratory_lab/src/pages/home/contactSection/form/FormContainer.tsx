import { useState, FormEvent } from "react";
import BtnFormSubbmit from "../../../../components/btnFormSubmit/BtnFormSubbmit";
import TextInput from "../../../../components/inputs/textInput/TextInput";

const FormContainer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsOpen(prev => !prev);
  };

  return (
    <aside className="contactformContainer">
      <h3 className="contactformContainer__title">
        Skontaktuj się z grupą <br /> badawczą
      </h3>
      <form onSubmit={handleSubmit} className="contactForm">
        <div className="contactForm__inputWrapper">
          <TextInput
            type={"text"}
            name={"name"}
            value={""}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              console.log("")
            }
            text={"Wpisz imię"}
            placeholder={"Imię"}
            classContainer={"contactForm__container"}
            classLabel={"contactForm__label"}
            classInput={"contactForm__input"}
          />
          <div className="contactForm__error">
            {isOpen && <small>Formularz w przygotowaniu</small>}
          </div>
        </div>

        <div className="contactForm__inputWrapper">
          <TextInput
            type={"text"}
            name={"email"}
            value={""}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              console.log("")
            }
            text={"Wpisz email"}
            placeholder={"Email"}
            classContainer={"contactForm__container"}
            classLabel={"contactForm__label"}
            classInput={"contactForm__input"}
          />
          <div className="contactForm__error">
            {isOpen && <small>Formularz w przygotowaniu</small>}
          </div>
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
          <div className="contactForm__error">
            {isOpen && <small>Formularz w przygotowaniu</small>}
          </div>
        </div>

        <BtnFormSubbmit text={"Wyślij"} class={"btn contactForm__btn"} />
      </form>
      <div className="div" contentEditable="true">
        moli ala ola ela jkkkk wwwww
      </div>
    </aside>
  );
};

export default FormContainer;
