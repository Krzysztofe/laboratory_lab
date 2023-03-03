import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../../data/firebaseConfig";
import { Link } from "react-router-dom";

const NavAside = () => {
  const [user] = useAuthState(auth);
  return (
    <aside>
      <nav className="navAside">
        <Link to="/">Strona główna</Link>
        <p>Zalogowany: {user?.email}</p>
      </nav>
    </aside>
  );
};

export default NavAside;
