import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";

import { useHistory } from "react-router-dom";
import axios from "axios";

function PageIndex() {
  let history = useHistory();
  const redirectAdmin = () => {
    history.push("/admin");
  };
  const redirectCreateAdmin = () => {
    history.push("/createAdmin");
  };
  const redirectUserRegistration = () => {
    history.push("/userRegister");
  };
  const redirectUserLogin = () => {
    history.push("/userLogin");
  };
  const redirectParticipantRegistration = () => {
    history.push("/exhibitorRegister");
  };
  const redirectParticipantLogin = () => {
    history.push("/exhibitorLogin");
  };
  const redirectParticipantProfile = () => {
    history.push("/exhibitorProfile");
  };
  const redirectEventList = () => {
    history.push("/eventList");
  };
  const redirectCreateEvent = () => {
    history.push("/createEvent");
  };
  const redirectJoinEvent = () => {
    history.push("/joinEvent");
  };

  const redirectCreateEmail = () => {
    history.push("/createEmail");
  };
  const redirectMeetingList = () => {
    history.push("/meetingList");
  };
  const redirectExhibitorEdit = () => {
    history.push("/exhibitorEdit");
  };
  const redirectAuthRouting = () => {
    history.push("/authRouting");
  };
  const redirectUserProfile = () => {
    history.push("/userProfile");
  };
  const redirectUserList = () => {
    history.push("/userList");
  };
  const redirectUserEdit = () => {
    history.push("/userEdit");
  };
  const redirectAdminLogin = () => {
    history.push("/adminLogin");
  };
  const redirectAdminList = () => {
    history.push("/adminList");
  };

  return (
    <div>
      <div>
        <div>This is the index page</div>
        <div onClick={redirectAdmin}>
          <a>Admin</a>
        </div>
        <div onClick={redirectCreateAdmin}>
          <a>Create Admin</a>
        </div>
        <div onClick={redirectUserRegistration}>
          <a>User Registration</a>
        </div>
        <div onClick={redirectUserLogin}>
          <a>User Login</a>
        </div>
        <div onClick={redirectParticipantRegistration}>
          <a>Participant Registration</a>
        </div>
        <div onClick={redirectParticipantLogin}>
          <a>Participant Login</a>
        </div>
        <div onClick={redirectParticipantProfile}>
          <a>Participant Profile</a>
        </div>
        <div onClick={redirectEventList}>
          <a>Event List</a>
        </div>
        <div onClick={redirectCreateEvent}>
          <a>Create Event</a>
        </div>
        <div onClick={redirectJoinEvent}>
          <a>Join Event</a>
        </div>
        <div onClick={redirectCreateEmail}>
          <a>Create Email</a>
        </div>
        <div onClick={redirectMeetingList}>
          <a>Meeting List</a>
        </div>
        <div onClick={redirectExhibitorEdit}>
          <a>Exhibitor Edit</a>
        </div>
        <div onClick={redirectAuthRouting}>
          <a>Auth Routing</a>
        </div>
        <div onClick={redirectUserProfile}>
          <a>User Profile</a>
        </div>
        <div onClick={redirectUserEdit}>
          <a>User Edit</a>
        </div>
        <div onClick={redirectUserList}>
          <a>User List</a>
        </div>
        <div onClick={redirectAdminLogin}>
          <a>Admin Login</a>
        </div>
        <div onClick={redirectAdminList}>
          <a>Admin List</a>
        </div>
      </div>
    </div>
  );
}

export default PageIndex;
