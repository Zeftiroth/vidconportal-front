import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";

import { Container, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import axios from "axios";
import postImage1 from "../assets/images/lp-1-1.jpg";
import postImage2 from "../assets/images/lp-1-2.jpg";
import postImage3 from "../assets/images/lp-1-2.jpg";

const Sidebar = () => {
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
  let history = useHistory();
  const convertDate = (e) => {
    let d = new Date(e);
    let date = d.toString();
    return date;
  };
  return (
    <div className="sidebar">
      <div className="single-sidebar categories-widget">
        <div className="widget-title">
          <h3>Categories</h3>
        </div>
        <ul className="links-list">
          <li>
            <a href="#">Business</a>
          </li>
          <li>
            <a href="#">Promotion</a>
          </li>
          <li>
            <a href="#">New Technologies</a>
          </li>
        </ul>
      </div>

      <div className="single-sidebar post-widget">
        <div className="widget-title">
          <h3>Latest Events</h3>
        </div>
        {list.map((pap) => (
          <div className="widget-post-wrapper">
            <div className="widget-single-post">
              {/* <div className="image-block">
                <div className="inner-block">
                  <img src={postImage1} alt="Awesome Image" />
                </div>
              </div> */}
              <div className="text-block">
                <h3>
                  <a href="#">
                    {pap.name}.{" "}
                    <div className="text-box-color">
                      <i class="fa fa-calendar"></i> {convertDate(pap.date)}
                    </div>
                  </a>
                </h3>
              </div>
            </div>
          </div>
        ))}
        {/* <div className="widget-post-wrapper">
          <div className="widget-single-post">
            <div className="image-block">
              <div className="inner-block">
                <img src={postImage1} alt="Awesome Image" />
              </div>
            </div>
            <div className="text-block">
              <h3>
                <a href="#">
                  Basic rules of running web agency.{" "}
                  <div className="text-box-color">
                    <i class="fa fa-calendar"></i> 30 April, 2020 10.30AM
                  </div>
                </a>
              </h3>
            </div>
          </div>
          <div className="widget-single-post">
            <div className="image-block">
              <div className="inner-block">
                <img src={postImage2} alt="Awesome Image" />
              </div>
            </div>
            <div className="text-block">
              <h3>
                <a href="#">
                  Introducing latest app features{" "}
                  <div className="text-box-color">
                    <i class="fa fa-calendar"></i> 30 April, 2020 10.30AM
                  </div>
                </a>
              </h3>
            </div>
          </div>
          <div className="widget-single-post">
            <div className="image-block">
              <div className="inner-block">
                <img src={postImage3} alt="Awesome Image" />
              </div>
            </div>
            <div className="text-block">
              <h3>
                <a href="#">
                  Become the best sale marketer{" "}
                  <div className="text-box-color">
                    <i class="fa fa-calendar"></i> 30 April, 2020 10.30AM
                  </div>
                </a>
              </h3>
            </div>
          </div>
        </div> */}
      </div>

      <div className="single-sidebar tags-widget">
        <div className="widget-title">
          <h3>Tags</h3>
        </div>
        <div className="tag-list-wrapper">
          <a href="#">Business,</a> <a href="#">Agency,</a>{" "}
          <a href="#">Technology,</a>
          <a href="#">Parallax,</a> <a href="#">Innovative,</a>{" "}
          <a href="#">Professional,</a> <a href="#">Experience,</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
