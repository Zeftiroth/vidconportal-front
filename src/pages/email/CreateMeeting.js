import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import LoginContext from "../../context/LoginContext";
// import { ZoomMtg } from "@zoomus/websdk";
import { useHistory } from "react-router-dom";
import axios from "axios";

function CreateMeeting() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div>
        <div>Create Zoom Meeting</div>
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
            <button type="submit">Create</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateMeeting;
