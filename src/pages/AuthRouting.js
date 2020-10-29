import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import LoginContext from "../context/LoginContext";
import LandingPage from "./LandingPage"

function AuthRouting() {
  const { loginData, setLoginData } = useContext(LoginContext);
  const history = useHistory();
  const pLogin = () => {
    history.push("/userLogin");
  };

  const pSignUp = () => {
    history.push("/userRegister")
  };
  const eLogin = () => {
    history.push("/exhibitorLogin");
  };

  const eSignUp = () => {
    history.push("/exhibitorRegister");
  };

  return (
    <div>
      {loginData.login ? (
        <LandingPage />
      ) : (
        <div className="d-flex flex-row mx-auto my-5 px-0 py-5 justify-content-center">
          <div className="d-flex justify-content-center col-5 mx-auto">
            <button className="mx-5" onClick={pLogin}>
              Participant Login
            </button>
            <button className="mx-5" onClick={pSignUp}>
              Participant Sign Up
            </button>
          </div>
          <div className="d-flex justify-content-center col-5 mx-auto">
            <button className="mx-5" onClick={eLogin}>
              Exhibitor Login
            </button>
            <button className="mx-5" onClick={eSignUp}>
              Exhibitor Sign Up
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AuthRouting;
