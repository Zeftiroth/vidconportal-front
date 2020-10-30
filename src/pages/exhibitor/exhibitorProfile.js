import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { GetExhibitor } from "../../actions/userActions";
import { useHistory } from "react-router-dom";
import axios from "axios";
import LoginContext from "../../context/LoginContext";

function ExhibitorProfile() {
  
  let { loginData, setLoginData } = useContext(LoginContext);
  console.log(loginData);
  const dispatch = useDispatch();
  const exhiInfo = useSelector((state) => state.exhiInfo);
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
    history.push("/exhibitorEdit");
  };

  return (
    <div className="d-flex justify-content-center">
      <div>
        <div>Exhibitor Profile</div>
        {loginData.data ? (
          <>
            <div>Username:</div>
            <div>{loginData.data.data.username}</div>
            <div>Email:</div>
            <div>{loginData.data.data.email}</div>
            <div>Name:</div>
            <div>{loginData.data.data.name}</div>
            <div>Organization:</div>

            <div>{loginData.data.data.organization}</div>
            <div>Designation:</div>
            <div>{loginData.data.data.designation}</div>
            <div>Address:</div>
            <div>{loginData.data.data.address}</div>
            <div>Office Number:</div>
            <div>{loginData.data.data.office}</div>
            <div>Mobile Number:</div>
            <div>{loginData.data.data.mobile}</div>
            <div>Fax Number:</div>
            <div>{loginData.data.data.fax}</div>
            <div>Category:</div>
            <div>{loginData.data.data.type}</div>
            <div>Diet:</div>
            <div>{loginData.data.data.diet}</div>
            <div>
              <button
                className="btn btn-outline-dark my-3"
                onClick={handleRedirect}
              >
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

export default ExhibitorProfile;
