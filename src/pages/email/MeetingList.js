import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import LoginContext from "../../context/LoginContext";

import { useHistory } from "react-router-dom";
import axios from "axios";
function MeetingList() {
    const [meetingList, setMeetingList] = useState([])
    let token = localStorage.getItem("auth-token");
    const fetchMeetingList = (e) => {
        e.preventDefault();
        try {

             axios.get(process.env.REACT_APP_BACKEND_URL + "exhibitors/m", 
            {
                headers: { "x-auth-token": token },
            })
            .then((response) => {
                console.log(response.data)
            }).catch((error) => {
                
                console.log(error)
            })
        } catch (e) {

            console.log(e.message)
        }
        
    }
    // useEffect( () => {
    //     fetchMeetingList()
        
    // }, [])

    return (
        <div>
            <div>
                <div>
                    Meeting List
                </div>
                <div>
                    <button onClick={fetchMeetingList}>List</button>
                </div>
            </div>
        </div>
    )
}

export default MeetingList
