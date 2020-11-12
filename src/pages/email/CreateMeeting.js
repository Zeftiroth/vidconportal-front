import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import LoginContext from "../../context/LoginContext";
// import { ZoomMtg } from "@zoomus/websdk";
import { useHistory } from "react-router-dom";
import axios from "axios";

function CreateMeeting(props) {
  let eventID = props.match.params.createMeeting;
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [events, setEvents] = useState("");
  const [eventDetails, setEventDetails] = useState([]);
  const [eventList, setEventList] = useState([]);
  let token = localStorage.getItem("auth-token");
  let { loginData, setLoginData } = useContext(LoginContext);
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
  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post(process.env.REACT_APP_BACKEND_URL + "exhibitions/meeting", {
        title,
        body,
        sender: loginData.data.id,
        eventID,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.messagae);
      });
  };
  const handleZoom = (e) => {
    const newWindow = window.open(e, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  const handleMeets = (e) => {
    const newWindow = window.open(e, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  const handleTeams = (e) => {
    const newWindow = window.open(e, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  const fetchEventList = async () => {
    await axios
      .get(process.env.REACT_APP_BACKEND_URL + `exhibitions`, {
        headers: { "x-auth-token": token },
      })
      .then((response) => {
        console.log(response.data);
        let tmpl = response.data;
        setEventList(tmpl);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    fetchEventList();
    fetchEvent();
  }, []);

  return (
    <div>
      <div>
        <div>Create Event Meeting</div>
        <div>Event Name: {eventDetails.name}</div>
        <div>
          <button
            onClick={() => {
              handleZoom(`https://us04web.zoom.us/meeting#/upcoming`);
            }}
          >
            Zoom
          </button>
          <button
            onClick={() => {
              handleMeets(`https://meet.google.com/`);
            }}
          >
            Meets
          </button>
          <button
            onClick={() => {
              handleTeams(`https://teams.microsoft.com/_#/calendarv2`);
            }}
          >
            Teams
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div>Title</div>
          <input
            value={title}
            type="text"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <div>
            <div class="input-group">Body</div>

            <textarea
              class="form-control"
              aria-label="With textarea"
              value={body}
              type="text"
              onChange={(e) => {
                setBody(e.target.value);
              }}
            ></textarea>
          </div>
          <div>
            {/* <label>Event:</label>
            <select
              required
              className="form-control"
              value={events}
              onChange={(e) => {
                setEvents(e.target.value);
              }}
            >
              <option selected value>
                -- select an option --
              </option>
              {eventList.map((ed) => {
                return (
                  <option key={ed._id} value={ed.name}>
                    {ed.name}
                  </option>
                );
              })}
            </select> */}
          </div>
          <div>
            <button type="submit">Create</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateMeeting;
