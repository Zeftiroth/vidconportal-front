import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { GetExhibitor } from "../../actions/userActions";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router";
import axios from "axios";
import LoginContext from "../../context/LoginContext";

function ParticipantProfile(props) {
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
  const { id } = useParams();
  console.log(id);
  let token = localStorage.getItem("auth-token");
  const [partInfo, setPartInfo] = useState([]);
  const fetchPartInfo = async () => {
    await axios
      .get(process.env.REACT_APP_BACKEND_URL + `exhibitors/${id}`, {
        headers: { "x-auth-token": token },
      })
      .then((response) => {
        console.log(response.data);
        let tlist = response.data;
        setPartInfo(tlist);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchPartInfo();
  }, []);
  const handleRedirect = (e) => {
    e.preventDefault();
    history.push("/exhibitorEdit");
  };
  // todo editPartInfo
  return (
    <div className="d-flex justify-content-center">
      <div>
        <div>Exhibitor Profile</div>
        {partInfo ? (
          <>
            {/* <div>{id}</div> */}
            <div>Username:</div>
            <div>{partInfo.username}</div>
            <div>Email:</div>
            <div>{partInfo.email}</div>
            <div>Name:</div>
            <div>{partInfo.name}</div>
            <div>Organization:</div>

            <div>{partInfo.organization}</div>
            <div>Designation:</div>
            <div>{partInfo.designation}</div>
            <div>Address:</div>
            <div>{partInfo.address}</div>
            <div>Office Number:</div>
            <div>{partInfo.office}</div>
            <div>Mobile Number:</div>
            <div>{partInfo.mobile}</div>
            <div>Fax Number:</div>
            <div>{partInfo.fax}</div>
            <div>Category:</div>
            <div>{partInfo.type}</div>
            <div>Diet:</div>
            <div>{partInfo.diet}</div>
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

export default ParticipantProfile;
