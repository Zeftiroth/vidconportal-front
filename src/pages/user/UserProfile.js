import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { GetUser } from "../../actions/userActions";
import { useHistory } from "react-router-dom";
import axios from "axios";
import LoginContext from "../../context/LoginContext";



function UserProfile() {
  let {loginData, setLoginData} = useContext(LoginContext)
  const [userDetails, setUserDetails] = useState(loginData)
    console.log(loginData)
    
    const dispatch = useDispatch();
    const userInfo = useSelector((state) => state.userInfo);
    let history = useHistory();
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

    const handleRedirect = (e) => {
        e.preventDefault();
        history.push("/userEdit")
    }


    return (
      <div>
        <div>
          <div>User Profile</div>
          {loginData.data ? (
            <>
              <div>{loginData.data.data.username}</div>
              <div>{loginData.data.data.email}</div>
        <div>
            <button onClick={handleRedirect}>

            Edit
            </button>
        </div>
            </>
          ) : (
            <div>Loading</div>
          )}
        </div>
      </div>
    );
}

export default UserProfile
