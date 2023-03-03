import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../data/firebaseConfig";
import { Link } from "react-router-dom";

const NavSignIn = () => {
  const [user] = useAuthState(auth);
  return (
    <aside>
      <Link to="/">Strona główna</Link>
      <p>Zalogowany: {user?.email}</p>
    </aside>
  );
};

export default NavSignIn;
