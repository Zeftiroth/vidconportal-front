import React from "react";
import AuthOptions from "./AuthOptions";
import { useHistory } from "react-router-dom";

function Navbar() {
  let history = useHistory();
  const home = () => {
    history.push("/authRouting");
  };
  return (
    <div>
      <div>
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
          <a class="navbar-brand" onClick={home}>
            VinConPortal
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              {/* <li class="nav-item ">
                <a class="nav-link" href="/userRegister">
                  Participant
                  
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/exhibitorRegister">
                  Exhibitor
                </a>
              </li> */}
              <li class="nav-item">
                <a class="nav-link" href="/index">
                  Index
                </a>
              </li>
              {/* <li class="nav-item">
                <a
                  class="nav-link disabled"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li> */}
            </ul>
          </div>
          <AuthOptions />
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
