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
  const [venue, setVenue] = useState("");
  const [link, setLink] = useState("");
  const [price, setPrice] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(
        process.env.REACT_APP_BACKEND_URL + "exhibitions",
        {
          name,
          description,
          date,
          link,
          venue,
          price,
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
            <div>Venue</div>
            <input
              className="textarea"
              type="text"
              value={venue}
              onChange={(e) => {
                setVenue(e.target.value);
              }}
            ></input>
            <div>Link</div>
            <input
              className="textarea"
              type="text"
              value={link}
              onChange={(e) => {
                setLink(e.target.value);
              }}
            ></input>
            <div>Price</div>
            <input
              className="textarea"
              type="text"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            ></input>
            <div>
              <button type="submit">Create</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateEvent;
