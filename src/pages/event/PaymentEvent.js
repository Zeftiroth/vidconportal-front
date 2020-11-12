import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import LoginContext from "../../context/LoginContext";
import StripeCheckout from "react-stripe-checkout";
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
    const response = await axios.post(
      process.env.REACT_APP_BACKEND_URL + `exhibitions/checkout`,
      { token, eventDetails, sender: loginData.data.id },
      {
        headers: { "x-auth-token": token },
      }
    );
    const { status } = response.data;
    console.log("Response:", response.data);
    // if (status === "success") {
    //   toast("Success! Check email for details", { type: "success" });
    // } else {
    //   toast("Something went wrong", { type: "error" });
    // }
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
            stripeKey="pk_test_51HlxKrJR3iDF6LZj9fNz4a07pqgneu7qtefD3HAdJmLcJYMC7XzorCyLNZo42ZSW82EWesCyMXIGbpAXTSi060WA000T9R44wc"
            token={handleToken}
            amount={eventDetails.price * 100}
            name={eventDetails.name}
            billingAddress
          />
        </div>
      </div>
    </div>
  );
}

export default PaymentEvent;
