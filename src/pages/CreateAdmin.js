import React, { useState, useEffect } from "react";
import axios from "axios";

function CreateAdmin() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleFirstNameInput = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameInput = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordInput = (e) => {
    setConfirmPassword(e.target.value);
  };

  // const backend = process.env.REACT_APP_BACKEND_URL
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:5000/admins/add`, {
        adminName: { firstName, lastName },
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res);
        alert(`Admin ${firstName}` + ` ${lastName} created successfully`);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="d-flex justify-content-center pt-5">
      <div>
        <form onSubmit={handleSubmit}>
          <div>First Name</div>
          <input
            value={firstName}
            type="text"
            onChange={handleFirstNameInput}
          />
          <div> Last Name </div>
          <input value={lastName} type="text" onChange={handleLastNameInput} />
          <div> Email </div>
          <input value={email} type="text" onChange={handleEmailInput} />
          <div> Password</div>
          <input value={password} type="text" onChange={handlePasswordInput} />
          <div> Confirm Password </div>
          <input
            value={confirmPassword}
            type="text"
            onChange={handleConfirmPasswordInput}
          />
          <div>
            <button>Create Admin</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateAdmin;
