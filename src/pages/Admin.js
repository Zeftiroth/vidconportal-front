import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import LoginContext from "../context/LoginContext";
import LandingPage from "../pages/LandingPage";

import { Link } from "react-router-dom";

function Admin() {
  const { loginData, setLoginData } = useContext(LoginContext);
  const history = useHistory();
  return (
    <div className="mx-auto">
      <div>
        {loginData.data ? (
          <div>
            <div>
              <Link to={`/createAdmin`}>Create Admin</Link>
            </div>
            <div>
              <Link to={`/adminList`}>Admin List</Link>
            </div>
            <div>
              <Link to={`/userList`}>User List</Link>
            </div>
            <div>
              <Link to={`/exhibitorList`}>Exhibitor List</Link>
            </div>
          </div>
        ) : (
          <LandingPage />
        )}
      </div>
    </div>
  );
}

export default Admin;
