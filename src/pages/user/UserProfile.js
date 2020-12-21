import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { GetUser } from "../../actions/userActions";
import { useHistory } from "react-router-dom";
import axios from "axios";
import LoginContext from "../../context/LoginContext";

function UserProfile(props) {
  let { loginData, setLoginData } = useContext(LoginContext);
  const [userDetails, setUserDetails] = useState(loginData);
  console.log(loginData);
  console.log(userDetails);
  let userID = props.match.params.id;
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userInfo);
  let history = useHistory();
  let token = localStorage.getItem("auth-token");
  // let uid = loginData.login.id
  // console.log(uid)
  // useEffect(() => {
  //     axios
  //   .get(process.env.REACT_APP_BACKEND_URL + `users/${uid}`,)
  //   .then( (response) => {
  //     console.log(response.data);
  //     setUserDetails(response.data)
  //     console.log(userDetails)
  //   } )
  // }, [])
  const fetchData = async () => {
    try {
      let response = await axios.get(
        process.env.REACT_APP_BACKEND_URL + `users/${userID}`,
        {
          headers: { "x-auth-token": token },
        }
      );
      let tulist = response.data;
      setUserDetails(tulist);
    } catch (error) {}
  };
  const handleRedirect = (e) => {
    e.preventDefault();
    history.push("/userEdit");
  };
  useEffect(() => {
    fetchData();
  }, []);

  // const handleDelete = async () => {
  //   // await axios.delete(process.env.REACT_APP_BACKEND_URL + `users/${}`)
  // };

  return (
    <div>
      <div>
        <div>User Profile</div>
        {userDetails ? (
          <>
            <div>{userDetails.username}</div>
            <div>{userDetails.email}</div>
            <div>
              <button onClick={handleRedirect}>Edit</button>
              {/* <button onClick={handleDelete}>Delete</button> */}
            </div>
          </>
        ) : (
          <div>Loading</div>
        )}
      </div>
    </div>
  );
}

export default UserProfile;
