import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import LoginContext from "../../context/LoginContext";

import { useHistory } from "react-router-dom";
import axios from "axios";



function EventList() {
  const [list, setList] = useState([]);
  let token = localStorage.getItem("auth-token");
  const fetchEventList = async () => {
    await axios
      .get(process.env.REACT_APP_BACKEND_URL + `exhibitions`, {
        headers: { "x-auth-token": token },
      })
      .then(async (response) => {
        console.log(response.data);
        let tmpl = response.data;
        await setList(tmpl);
      });
  };
  useEffect(() => {
    fetchEventList();
  }, []);
  let history = useHistory();
  const sendToEvent = (e) => {
    e.preventDefault();
    console.log(e.target.id);
    history.push(`editEvent/${e.target.id}`);
  };
  const sendToCreateEventMeeting = (e) => {
    e.preventDefault();
    console.log(e.target.id);
    history.push(`createMeeting/${e.target.id}`);
  };
  const convertDate = (e) => {
    let d = new Date(e);
    let date = d.toString();
    return date;
  };
  return (
    <div>
      <div>
        <div>List of Event:</div>
        </div>
      </div>
    
		
  );
}

export default EventList;
