import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import LoginContext from "../../context/LoginContext";

import { useHistory } from "react-router-dom";
import axios from "axios";

import Layout from "../../components/layout";
import InnerHeader from "../../components/inner-header";
import PageHeader from "../../components/page-header";
import Footer from "../../components/footer";

function JoinEvent() {
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
  const sendToPayment = (e) => {
    e.preventDefault();
    console.log(e.target.id);
    history.push(`paymentEvent/${e.target.id}`);
  };

  let history = useHistory();
  return (

    <div>
      <div>
        <div>List of Event:</div>
        <div>
          {list.length > 0 ? (
            <>
              {list.map((eventList) => {
                return (
                  <>
                    <div id={eventList._id}>
                      <div>Event: {eventList.name}</div>
                      <div>Description: {eventList.description}</div>
                      <div>Date: {Date(eventList.date)}</div>
                      <div>Price: {eventList.price}</div>
                      <div>Venue: {eventList.venue}</div>
                      <div>
                        <button id={eventList._id} onClick={sendToPayment}>
                          Attend Event
                        </button>
                      </div>
                      <div></div>
                    </div>
                  </>
                );
              })}
            </>
          ) : (
            <div>Unable to fetch event list</div>
          )}
        </div>
      </div>
    </div>
  );

}

export default JoinEvent;
