import { FC } from "react";
import { Props } from "./modelContact";

const Contact: FC<Props> = ({ children }) => {
  return (
    <section>
      <div className="wrapper contact">
        <div className="contact__opacity">{children}</div>
      </div>
    </section>
  );
};

export default Contact;
