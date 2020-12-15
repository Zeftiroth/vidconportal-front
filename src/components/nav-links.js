import React from "react";

import SubNavToggler from "./sub-nav-toggler";
import { Link as ScrollLink } from "react-scroll";

const NavLinks = () => {
  return (
    <ul className="one-page-scroll-menu navigation-box">
      <li>
        <a href="/" Class="current"> Home</a>
        </li>
      <li>
        <a href="#" > About Us</a>
      </li>
	  <li>
        <a href="#" > Features</a>
      </li>
       <li>
        <a href="#" >
          Events
          <SubNavToggler />
     </a>
        <ul className="sub-menu">
          <li>
            <a href="#">
              Event Calendar</a>
           
          </li>
          <li>
            <a href="/eventList">
              All Events</a>
           
          </li>
        </ul>
      </li>
      <li>
        <a href="#" > Contacts</a>
      </li>
    </ul>
  );
};

export default NavLinks;
