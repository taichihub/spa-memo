import React, { useContext } from "react";
import texts from "../locales/texts";
import labels from "../locales/labels";
import { sessionContext } from "./SessionProvider";

const Header = () => {
  const { session, login, logout } = useContext(sessionContext);

  return (
    <header>
      <h1>{texts.appTitle}</h1>
      <button onClick={session === "login" ? logout : login}>
        {session === "login" ? labels.logOutButton : labels.logInButton}
      </button>
    </header>
  );
};

export default Header;
