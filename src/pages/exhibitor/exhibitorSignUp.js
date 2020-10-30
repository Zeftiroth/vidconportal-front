import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { GetExhibitor } from "../../actions/exhibitorActions";
import LoginContext from "../../context/LoginContext";
import { useHistory } from "react-router-dom";
import axios from "axios";

function ExhibitorRegister() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [designation, setDesignation] = useState("");
  const [address, setAddress] = useState("");
  const [office, setOffice] = useState("");
  const [mobile, setMobile] = useState("");
  const [fax, setFax] = useState("");
  const [diet, setDiet] = useState("");
  let { loginData, setLoginData } = useContext(LoginContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const postPackage = {
      username,
      email,
      password,
      passwordConfirm,
      name,
      organization,
      designation,
      address,
      office,
      mobile,
      fax,
      diet
      
    };
    if (
      !email ||
      !password ||
      !username ||
      !name ||
      !organization ||
      !designation ||
      !address ||
      !office ||
      !mobile ||
      !fax
    ) {
      alert('Not all fields filled')
    } else if (password != passwordConfirm) {
      alert("Password and Confirm Password do not match")
    }
      
    await axios
      .post(process.env.REACT_APP_BACKEND_URL + `exhibitors/register`, {
        postPackage,
      })
      .then((res) => {
        console.log(res.data);
        alert(`Successfully register exhibitor ${res.data.username}`);
      })
      .catch((err) => {
        console.log(err);
        alert(`Failed to register`);
      });
    axios
      .post(process.env.REACT_APP_BACKEND_URL + `exhibitors/login`, {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
        setLoginData = {
          token: response.data.token,
          data: response.data.data,
        };
        // dispatch(GetUser(loginData));
        localStorage.setItem("auth-token", response.data.token);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <div>
        <div>Register new exhibitor account</div>
        <form onSubmit={handleSubmit}>
          <div>Username</div>
          <input
            value={username}
            type="text"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />

          <div> Email </div>
          <input
            value={email}
            type="text"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <div> Password</div>
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
          />
          <div> Name </div>
          <input
            value={name}
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <div> Organization </div>
          <input
            value={organization}
            type="text"
            onChange={(e) => {
              setOrganization(e.target.value);
            }}
          />
          <div> Designation </div>
          <input
            value={designation}
            type="text"
            onChange={(e) => {
              setDesignation(e.target.value);
            }}
          />
          <div> Address </div>
          <input
            value={address}
            type="text"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
          <div> Office Number </div>
          <input
            value={office}
            type="text"
            onChange={(e) => {
              setOffice(e.target.value);
            }}
          />
          <div> Mobile Number </div>
          <input
            value={mobile}
            type="text"
            onChange={(e) => {
              setMobile(e.target.value);
            }}
          />
          <div> Fax Number</div>
          <input
            value={fax}
            type="text"
            onChange={(e) => {
              setFax(e.target.value);
            }}
          />
          <div> Diet</div>
          <select
           
            
            value={diet}
            onChange={(e) => {
              setDiet(e.target.value);
            }}
          >
            <option
             
              value="non-vegetarian"
            >
              Non-Vegetarian
            </option>
            <option
              
              value="vegetarian"
            >
              Vegetarian
            </option>
            
          </select>

          <div></div>
          <div></div>
          <div></div>
          <div></div>

          <div>
            <button>Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ExhibitorRegister;
