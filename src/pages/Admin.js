import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import AdminContext from "../context/AdminContext";
import LandingPage from "../pages/LandingPage";

import { Link } from "react-router-dom";

function Admin() {
  const { adminData, setAdminData } = useContext(AdminContext);
  const history = useHistory();
  return (
    <div className="mx-auto">
      <div>
        {adminData.admin ? (
          <div>
            <div>
              <Link to={`/createAdmin`}>Create Admin</Link>
            </div>
            <div>
              <Link to={`/adminList`}>Admin List</Link>
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
