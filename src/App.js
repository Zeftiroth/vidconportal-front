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
import AdminContext from "./context/LoginContext";
import axios from "axios";
import UserRegister from "./pages/user/UserRegister";
import UserLogin from "./pages/user/UserLogin";
import ExhibitorRegister from "./pages/exhibitor/exhibitorSignUp";
import ExhibitorLogin from "./pages/exhibitor/exhibitorLogin";
import AuthRouting from "./pages/AuthRouting";
import UserProfile from "./pages/user/UserProfile";
import UserEdit from "./pages/user/UserEdit";
import ExhibitorProfile from "./pages/exhibitor/exhibitorProfile";
import ExhibitorEdit from "./pages/exhibitor/exhibitorEdit";
import UserList from "./pages/user/UserList";
import CreateEmail from "./pages/email/CreateEmail";
import MeetingList from "./pages/email/MeetingList";
import CreateMeeting from "./pages/email/CreateMeeting";
import CreateEvent from "./pages/email/CreateEvent";
import EventList from "./pages/event/EventList";
import EventDetails from "./pages/event/EventDetails";
import EditEvent from "./pages/event/EditEvent";
import JoinEvent from "./pages/event/JoinEvent";
import PaymentEvent from "./pages/event/PaymentEvent";
import PageIndex from "./pages/PageIndex";
import Reporting from "./pages/reporting/Reporting";

function App() {
  let [toggle, setToggle] = useState(false);
  let [loginData, setLoginData] = useState({
    token: undefined,
    data: undefined,
    access: undefined,
  });
  const checkLogin = async () => {
    let token = localStorage.getItem("auth-token");
    if (token === null) {
      localStorage.setItem("auth-token", "");
      token = "";
    }

    const tokenResAdmin = await axios.post(
      `http://localhost:5000/admins/tokenIsValid`,
      null,
      {
        headers: { "x-auth-token": token },
      }
    );

    const tokenResUser = await axios.post(
      `http://localhost:5000/users/tokenIsValid`,
      null,
      {
        headers: { "x-auth-token": token },
      }
    );

    const tokenResExhibitor = await axios.post(
      `http://localhost:5000/exhibitors/tokenIsValid`,
      null,
      {
        headers: { "x-auth-token": token },
      }
    );

    console.log(tokenResAdmin.data);
    console.log(tokenResExhibitor.data);
    console.log(tokenResUser.data);
    if (tokenResAdmin.data) {
      const loginRes = await axios.get(
        `http://localhost:5000/admins/checkLoggedIn`,
        {
          headers: { "x-auth-token": token },
        }
      );
      setLoginData({
        token,
        data: loginRes.data,
      });
      // localStorage.setItem("auth-token", token);
    } else if (tokenResExhibitor.data) {
      const exloginRes = await axios.get(
        `http://localhost:5000/exhibitors/checkLoggedIn`,
        {
          headers: { "x-auth-token": token },
        }
      );
      setLoginData({
        token,
        data: exloginRes.data,
      });
    } else if (tokenResUser.data) {
      await axios
        .get(`http://localhost:5000/users/checkLoggedIn`, {
          headers: { "x-auth-token": token },
        })
        .then((userLoginRes) => {
          console.log(userLoginRes);

          setLoginData({
            token: token,
            data: userLoginRes.data,
          });
        });
    }
  };
  useEffect(() => {
    console.log(loginData);
    checkLogin();
  }, []);
  // useEffect(() => {
  //   recheckLogin()
  // },[])
  const recheckLogin = async () => {
    let token = localStorage.getItem("auth-token");

    const retokenResAdmin = await axios.post(
      `http://localhost:5000/admins/tokenIsValid`,
      null,
      {
        headers: { "x-auth-token": token },
      }
    );

    const retokenResUser = await axios.post(
      `http://localhost:5000/users/tokenIsValid`,
      null,
      {
        headers: { "x-auth-token": token },
      }
    );

    const retokenResExhibitor = await axios.post(
      `http://localhost:5000/exhibitors/tokenIsValid`,
      null,
      {
        headers: { "x-auth-token": token },
      }
    );

    console.log(retokenResAdmin.data);
    console.log(retokenResExhibitor.data);
    console.log(retokenResUser.data);
    if (retokenResAdmin.data) {
      const loginRes = await axios.get(
        `http://localhost:5000/admins/checkLoggedIn`,
        {
          headers: { "x-auth-token": token },
        }
      );
      setLoginData({
        token,
        login: loginRes.data,
        access: loginRes.access,
      });
      // localStorage.setItem("auth-token", token);
    } else if (retokenResExhibitor.data) {
      const loginRes = await axios.get(
        `http://localhost:5000/exhibitors/checkLoggedIn`,
        {
          headers: { "x-auth-token": token },
        }
      );
      setLoginData({
        token,
        login: loginRes.data,
        access: loginRes.access,
      });
    } else if (retokenResUser.data) {
      await axios
        .get(`http://localhost:5000/users/checkLoggedIn`, {
          headers: { "x-auth-token": token },
        })
        .then((userLoginRes) => {
          console.log(userLoginRes);

          setLoginData({
            token: token,
            data: userLoginRes.data,
          });
        });
    }
  };
  return (
    <div className="App">
      <AdminContext.Provider value={{ loginData, setLoginData }}>
      
        <Switch>
          <Route exact path={"/"} exact component={LandingPage} />
          <Route path={"/index"} exact component={PageIndex} />
          <Route path={"/admin"} exact component={Admin} />
          <Route path={"/createAdmin"} exact component={CreateAdmin} />
          <Route path={"/userRegister"} exact component={UserRegister} />
          <Route path={"/userLogin"} exact component={UserLogin} />
          <Route
            path={"/exhibitorRegister"}
            exact
            component={ExhibitorRegister}
          />
          <Route path={"/exhibitorLogin"} exact component={ExhibitorLogin} />
          <Route
            path={"/exhibitorProfile"}
            exact
            component={ExhibitorProfile}
          />
          <Route path={`/editEvent/:editEvent`} exact component={EditEvent} />
          <Route path={"/eventList"} exact component={EventList} />
		    <Route path={"/eventDetails"} exact component={EventDetails} />
          <Route path={"/createEvent"} exact component={CreateEvent} />
          <Route
            path={"/createMeeting/:createMeeting"}
            exact
            component={CreateMeeting}
          />
          <Route path={"/reporting"} exact component={Reporting} />
          <Route
            path={"/paymentEvent/:paymentEvent"}
            exact
            component={PaymentEvent}
          />
          <Route path={"/joinEvent"} exact component={JoinEvent} />
          <Route path={"/createEmail"} exact component={CreateEmail} />
          <Route path={"/meetingList"} exact component={MeetingList} />
          <Route path={"/exhibitorEdit"} exact component={ExhibitorEdit} />
          <Route path={"/authRouting"} exact component={AuthRouting} />
          <Route path={"/userProfile"} exact component={UserProfile} />
          <Route path={"/userEdit"} exact component={UserEdit} />
          <Route path={"/userList"} exact component={UserList} />
          <Route path={"/adminLogin"} exact component={AdminLogin} />
          <Route path={`/adminList`} exact component={AdminList} />
          <Route path={`/editAdmin/:editAdmin`} exact component={EditAdmin} />
          <Route path={"*"} exact component={LandingPage} />
          <Redirect path={"/"} />
        </Switch>
      </AdminContext.Provider>
    </div>
  );
}

export default App;
