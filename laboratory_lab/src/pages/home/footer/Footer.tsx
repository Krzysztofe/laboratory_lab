import React from "react";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <Link
        to={"https://github.com/Krzysztofe/Laboratory_Lab"}
        className="footer__link"
      >
        <h4>Laboratory Lab repository </h4>{" "}
        <BsGithub className="footer__icon" />
      </Link>
    </footer>
  );
};

export default Footer;
