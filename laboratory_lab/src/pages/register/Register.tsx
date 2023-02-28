import React from 'react';
import { Typewriter } from "react-simple-typewriter";
// import BtnsLogin from '../../components/btnsLogin/BtnsLogin';
const Register = () => {
    return (
      <>
        <div className="headerSpacer"></div>
        {/* <form onSubmit={handleRegister} className="wrapper wrapper--login"> */}
          {/* <TitleDecor
            text={["załóż konto"]}
            classContainer={""}
            classH2={""}
            classUnderline={"login__underline"}
          /> */}

          <div className="login__inputs">
            <label className="login__label">
              <Typewriter cursorStyle="" typeSpeed={300} words={["Email"]} />
              <input
                type="text"
                name="email"
                // value={inputValueRregister.email}
                // onChange={handleChange}
                // ref={inputRef}
                className="login__input"
              />
            </label>

            <label className="login__label">
              <Typewriter cursorStyle="" typeSpeed={300} words={["Hasło"]} />
              <input
                type="password"
                name="password"
                // value={inputValueRregister.password}
                // onChange={handleChange}
                className="login__input"
              />
            </label>

            <label className="login__label">
              <Typewriter
                cursorStyle=""
                typeSpeed={300}
                words={["Powtórz hasło"]}
              />
              <input
                type="password"
                name="passwordRepeated"
                // value={inputValueRregister.passwordRepeated}
                // onChange={handleChange}
                className="login__input"
              />
            </label>
          </div>

          {/* <p className="login__errors">{errors}</p> */}

          {/* <BtnsLogin
            link={"/logowanie"}
            btnRight="załuż konto"
            btnLeft="zaloguj się"
            inputFocus={inputFocus}
          /> */}
        {/* </form> */}
      </>
    );
};

export default Register;