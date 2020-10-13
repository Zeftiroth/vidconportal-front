import React from "react";
import AuthOptions from "./AuthOptions";

function Navbar() {
  return (
    <div>
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="/">
            VinConPortal
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item ">
                <a class="nav-link" href="#">
                  Participant
                  {/* <span class="sr-only">(current)</span> */}
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Exhibitor
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/admin">
                  Admin
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
