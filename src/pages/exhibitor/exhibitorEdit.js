import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { GetExhibitor } from "../../actions/exhibitorActions";
import { useHistory } from "react-router-dom";
import axios from "axios";
import LoginContext from "../../context/LoginContext";

function ExhibitorEdit() {
  const exhiInfo = useSelector((state) => state.exhiInfo);
  console.log(exhiInfo);
  let { loginData, setLoginData } = useContext(LoginContext);
  let history = useHistory();
  let uid = loginData.data;
  console.log(uid);
  const dispatch = useDispatch();
  // dispatch(GetUser());
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [passwordConfirm, setPasswordConfirm] = useState("");
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [designation, setDesignation] = useState("");
  const [address, setAddress] = useState("");
  const [office, setOffice] = useState("");
  const [mobile, setMobile] = useState("");
  const [fax, setFax] = useState("");
  const [type, setType] = useState("");
  const [diet, setDiet] = useState("");
  console.log(type);
  const handleSubmit = async (e) => {
    e.preventDefault();
    let token = localStorage.getItem("auth-token");
    if (
      !email ||
    //   !password ||
      !username ||
      !name ||
      !organization ||
      !designation ||
      !address ||
      !office ||
      !mobile ||
      !fax ||
      !type
    ) {
      alert("Not all fields filled");
    } 
    
    await axios
      .post(
        process.env.REACT_APP_BACKEND_URL + `exhibitors/update/${uid.data._id}`,
        {
          username,
          email,
        //   password,
        //   passwordConfirm,
          name,
          organization,
          designation,
          address,
          office,
          mobile,
          fax,
          type,
        }
      )
      .then((res) => {
        console.log(res.data);
        dispatch(GetExhibitor(uid.data._id));
        setLoginData({
          data: res,
        });

        // history.push("/userProfile");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <div className=" px-5 mx-5">
        <div className="d-flex justify-content-center my-2 mx-auto">
          Edit Participant account
        </div>
      </div>
      <form className="px-5 mx-5" onSubmit={handleSubmit}>
        <div className="d-flex my-1 mx-auto">Username</div>
        <input
          className="form-control d-flex justify-content-center mx-auto"
          value={username}
          type="text"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />

        <div className="d-flex  my-1 mx-auto"> Email </div>
        <input
          className="form-control d-flex justify-content-center mx-auto"
          value={email}
          type="text"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        {/* <div> Password</div>
          <input
            value={password}
            type="text"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div> Confirm Password </div>
          <input
            value={passwordConfirm}
            type="text"
            onChange={(e) => {
              setPasswordConfirm(e.target.value);
            }}
          /> */}
        <div className="d-flex  my-1 mx-auto"> Name </div>
        <input
          className="form-control d-flex justify-content-center mx-auto"
          value={name}
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <div className="d-flex my-1 mx-auto"> Organization </div>
        <input
          className="form-control d-flex justify-content-center mx-auto"
          value={organization}
          type="text"
          onChange={(e) => {
            setOrganization(e.target.value);
          }}
        />
        <div className="d-flex  my-1 mx-auto"> Designation </div>
        <input
          className="form-control d-flex justify-content-center mx-auto"
          value={designation}
          type="text"
          onChange={(e) => {
            setDesignation(e.target.value);
          }}
        />
        <div className="d-flex  my-1 mx-auto"> Address </div>
        <input
          className="form-control d-flex justify-content-center mx-auto"
          value={address}
          type="text"
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />
        <div className="d-flex  my-1 mx-auto"> Office Number </div>
        <input
          className="form-control d-flex justify-content-center mx-auto"
          value={office}
          type="text"
          onChange={(e) => {
            setOffice(e.target.value);
          }}
        />
        <div className="d-flex  my-1 mx-auto"> Mobile Number </div>
        <input
          className="form-control d-flex justify-content-center mx-auto"
          value={mobile}
          type="text"
          onChange={(e) => {
            setMobile(e.target.value);
          }}
        />
        <div className="d-flex  my-1 mx-auto"> Fax </div>
        <input
          className="form-control d-flex justify-content-center mx-auto"
          value={fax}
          type="text"
          onChange={(e) => {
            setFax(e.target.value);
          }}
        />
        <div className="d-flex  my-1 mx-auto" for="type">
          {" "}
          Type
        </div>
        <select
          className="custom-select d-flex justify-content-center my-1 mx-auto"
          id="type"
          value={type}
          onChange={(e) => {
            setType(e.target.value);
          }}
        >
          <option
            className="d-flex justify-content-center mx-auto"
            value="paying"
          >
            Paying
          </option>
          <option
            className="d-flex justify-content-center mx-auto"
            value="complimentary"
          >
            Complimentarity
          </option>
          <option
            className="d-flex justify-content-center mx-auto"
            value="invite"
          >
            Invite
          </option>
        </select>
        <div> Diet</div>
        <select
          className="custom-select d-flex justify-content-center my-1 mx-auto"
          value={diet}
          onChange={(e) => {
            setDiet(e.target.value);
          }}
        >
          <option
            className="d-flex justify-content-center mx-auto"
            value="non-vegetarian"
          >
            Non-Vegetarian
          </option>
          <option
            className="d-flex justify-content-center mx-auto"
            value="vegetarian"
          >
            Vegetarian
          </option>
        </select>
        <div>
          <button
            className="btn btn-outline-dark my-3 d-flex justify-content-center mx-auto"
            type="submit"
          >
            Edit
          </button>
        </div>
      </form>
    </>
  );
}

export default ExhibitorEdit;
