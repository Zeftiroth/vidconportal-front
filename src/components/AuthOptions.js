import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import AdminContext from "../context/AdminContext";

function AuthOptions() {
  const { adminData, setAdminData } = useContext(AdminContext);
  const history = useHistory();
  const login = () => {
    history.push("/adminLogin");
  };

  const signUp = () => {
    history.push("/createAdmin");
  };

  const logout = () => {
    setAdminData({
      token: undefined,
      admin: undefined,
    });
    localStorage.setItem("auth-token", "");
  };
  return (
    <div>
      {adminData.admin ? (
        <button onClick={logout}>Log Out</button>
      ) : (
        <div>
          <button onClick={login}>Login</button>
          <button onClick={signUp}>Sign Up</button>
        </div>
      )}
    </div>
  );
}

export default AuthOptions;
