import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import LoginContext from "../../context/LoginContext";

import { useHistory } from "react-router-dom";
import axios from "axios";

function EditEvent(props) {
  let eventID = props.match.params.editEvent;
  console.log(eventID);
  let token = localStorage.getItem("auth-token");
  const [eventDetails, setEventDetails] = useState([]);
  const fetchEvent = async () => {
    await axios
      .get(process.env.REACT_APP_BACKEND_URL + `exhibitions/${eventID}`, {
        headers: { "x-auth-token": token },
      })
      .then((response) => {
        console.log(response.data);
        setEventDetails(response.data);
      });
  };
  useEffect(() => {
    fetchEvent();
  }, []);
  const ShowDetails = () => {
    if (eventDetails.length > 0) {
      return (
        <>
          <div>
            <div>Event Name: {eventDetails.name}</div>
            <div>Description: {eventDetails.description}</div>
            <div>Date of Event: {Date(eventDetails.date)}</div>
          </div>
        </>
      );
    }
  };
  return (
    <div>
      <div>
        <div>Edit Event Details</div>
        <div>
          <div>{ShowDetails}</div>
        </div>
      </div>
    </div>
  );
}

export default EditEvent;
