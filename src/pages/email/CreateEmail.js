import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import LoginContext from "../../context/LoginContext";

import { useHistory } from "react-router-dom";
import axios from "axios";

function CreateEmail() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("")
    let { loginData, setLoginData } = useContext(LoginContext);
    const handleSubmit = async e => {
        e.preventDefault()
        await axios.post(process.env.REACT_APP_BACKEND_URL + "admins/meeting", 
          {
            title,
            body,
            sender: loginData.data.id
          }).then((res) =>{
            console.log(res.data)
            
          }).catch((err) =>{
            console.log(err.messagae)
          })
        
    }
    return (
      <div>
        <div>Mass Email to Participants</div>
        <div>
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
            {/* <input
              value={body}
              type="text"
              onChange={(e) => {
                setBody(e.target.value);
              }}
            /> */}
            {/* <div></div>
            <input />
            <div></div>
            <input /> */}
            <button className="d-block" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    );
}

export default CreateEmail
