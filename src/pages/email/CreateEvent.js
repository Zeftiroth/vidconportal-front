import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import LoginContext from "../../context/LoginContext";

import { useHistory } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
function CreateEvent() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  let token = localStorage.getItem("auth-token");
  const [date, setDate] = useState(new Date());
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(
        process.env.REACT_APP_BACKEND_URL + "exhibitions",
        {
          name,
          description,
          date,
        },
        {
          headers: { "x-auth-token": token },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div>
      <div>
        <div>Create Event</div>
        <div>
          <form onSubmit={handleSubmit}>
            <div>Name of the Event</div>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            ></input>
            <div>Description</div>
            <input
              className="textarea"
              type="text"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            ></input>
            <div>Date </div>
            <div>
              <DatePicker
                selected={date}
                // value={date}
                onChange={(e) => {
                  setDate(e);
                  console.log(date);
                }}
              />
            </div>
            <button type="submit">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateEvent;
