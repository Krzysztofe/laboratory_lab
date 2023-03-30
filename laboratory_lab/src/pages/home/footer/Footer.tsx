import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="wrapper footer">
      <Link
        to={"https://github.com/Krzysztofe/Laboratory_Lab"}
        className="footer__link"
      >
        Laboratory Lab repository
        <BsGithub className="footer__icon" />
      </Link>
    </footer>
  );
};

export default Footer;
