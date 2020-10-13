import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Switch, Route, NavLink, Redirect } from "react-router-dom";
import Admin from "./pages/Admin.js";
import AdminDashboard from "./pages/AdminDashboard";
import CreateAdmin from "./pages/CreateAdmin";
import AdminList from "./pages/AdminList";
import EditAdmin from "./pages/EditAdmin";
import AdminLogin from "./pages/AdminLogin";
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/Navbar";
import AdminContext from "./context/AdminContext";
import axios from "axios";

function App() {
  const [adminData, setAdminData] = useState({
    token: undefined,
    admin: undefined,
  });
  useEffect(() => {
    const checkLogin = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }

      const tokenRes = await axios.post(
        `http://localhost:5000/admins/tokenIsValid`,
        null,
        {
          headers: { "x-auth-token": token },
        }
      );
      console.log(tokenRes.data);
      if (tokenRes.data) {
        const adminRes = await axios.get(
          `http://localhost:5000/admins/checkLoggedIn`,
          {
            headers: { "x-auth-token": token },
          }
        );
        setAdminData({
          token,
          admin: adminRes.data,
        });
        // localStorage.setItem("auth-token", token);
      }
    };
    checkLogin();
  }, []);
  return (
    <div className="App">
      <AdminContext.Provider value={{ adminData, setAdminData }}>
        <Navbar />
        <Switch>
          <Route exact path={"/"} exact component={LandingPage} />
          <Route path={"/admin"} exact component={Admin} />
          <Route path={"/createAdmin"}>
            <CreateAdmin />
          </Route>
          <Route path={"/adminLogin"} exact component={AdminLogin} />
          <Route path={`/adminList`} exact component={AdminList} />
          <Route path={`/editAdmin/:editAdmin`} exact component={EditAdmin} />
          <Redirect path={"/"} />
        </Switch>
      </AdminContext.Provider>
    </div>
  );
}

export default App;
