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
        <a href="/AboutUs" > About Us</a>
      </li>
	  <li>
        <a href="/Features" > Features</a>
      </li>
       <li>
        <a href="/FronteventList" >
          Events
          
     </a>
      
      </li>
      <li>
        <a href="/ContactUs" > Contacts</a>
      </li>
    </ul>
  );
};

export default NavLinks;
