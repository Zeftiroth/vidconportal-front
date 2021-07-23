import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import LoginContext from "../../context/LoginContext";

import { useHistory } from "react-router-dom";
import axios from "axios";
function MeetingList() {
  const [meetingList, setMeetingList] = useState([]);
  let token = localStorage.getItem("auth-token");
  const fetchMeetingList = async (e) => {
    // e.preventDefault();
    try {
      await axios
        .get(process.env.REACT_APP_BACKEND_URL + "admins/list", {
          headers: { "x-auth-token": token },
        })
        .then((response) => {
          console.log(response.data);
          setMeetingList(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (e) {
      console.log(e.message);
    }
  };
  useEffect(() => {
    fetchMeetingList();
  }, []);
  let history = useHistory();
  const toMeeting = (e) => {
    e.preventDefault()
    
    history.push(`createMeeting/${e.target.id}`)
  }

  return (
    <div>
      <div>
        <div>Meeting List</div>
        <div>
          <div>
            {meetingList ? (
              <div>
                <div>
                  {meetingList.map((meeting) => {
                    return (
                      <div>
                        <div id={meeting._id}>Title: {meeting.title}</div>
                        <div>Content: {meeting.body}</div>
                        <button id={meeting._id} onClick={toMeeting}>
                          Go
                        </button>
                        <div>
                          {" "}
                          Receipient:{" "}
                          {meeting.receiver.map((receiver) => {
                            return (
                              <>
                                <span>{receiver.username} </span>
                              </>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <>unable to fetch list</>
            )}
          </div>
        </div>
        <div>{/* <button onClick={fetchMeetingList}>List</button> */}</div>
      </div>
    </div>
  );
}

export default MeetingList;
