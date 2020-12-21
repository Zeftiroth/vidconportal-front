import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import LoginContext from "../../context/LoginContext";
import StripeCheckout from "react-stripe-checkout";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
// import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import axios from "axios";
// import "react-toastify/dist/ReactToastify.css";

function PaymentEvent(props) {
  let [apiKey, setApiKey] = useState(process.env.REACT_APP_STRIPE_PUBLIC_KEY);
  console.log(apiKey);
  let eventID = props.match.params.paymentEvent;
  let token = localStorage.getItem("auth-token");
  let { loginData, setLoginData } = useContext(LoginContext);
  console.log(loginData);
  const [eventDetails, setEventDetails] = useState([]);
  const fetchEvent = async () => {
    await axios
      .get(process.env.REACT_APP_BACKEND_URL + `exhibitions/${eventID}`, {
        headers: { "x-auth-token": token },
      })
      .then((response) => {
        console.log(response.data);
        let tmpl = response.data;
        setEventDetails(tmpl);
      });
  };
  async function handleToken(token) {
    await axios
      .post(
        process.env.REACT_APP_BACKEND_URL + `exhibitions/payment`,
        { token, eventDetails, sender: loginData.data },
        {
          headers: { "x-auth-token": token },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    fetchEvent();
  }, []);
  return (
    <div>
      <div>
        <div>Payment Page</div>
        <div>
          {/* {eventDetails.length > 0 ? ( */}
          <>
            <div>
              <div>Event Name: {eventDetails.name}</div>
              <div>Description: {eventDetails.description}</div>
              <div>Date of Event: {Date(eventDetails.date)}</div>
              <div>Price: {eventDetails.price}</div>
              <div>Venue: {eventDetails.venue}</div>
            </div>
          </>
          {/* ) : (
            <>
              <div>n/a</div>
            </>
          )} */}
        </div>
        <div>
          <StripeCheckout
            stripeKey={process.env.REACT_APP_STRIPE_PUBLIC_KEY}
            token={handleToken}
            amount={eventDetails.price * 100}
            name={eventDetails.name}
            billingAddress
            shippingAddress
            panelLabel="RM"
            alipay
            bitcoin
          >
            <button> Pay </button>
          </StripeCheckout>
          <script
            type="text/javascript"
            src="/javascripts/jquery-3.1.1.min.js"
          ></script>
        </div>
      </div>
    </div>
  );
}

export default PaymentEvent;
