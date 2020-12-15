import React from "react";

import postImage1 from "../assets/images/lp-1-1.jpg";
import postImage2 from "../assets/images/lp-1-2.jpg";
import postImage3 from "../assets/images/lp-1-2.jpg";

const Sidebar = () => {
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
        <div className="widget-post-wrapper">
          <div className="widget-single-post">
            <div className="image-block">
              <div className="inner-block">
                <img src={postImage1} alt="Awesome Image" />
              </div>
            </div>
            <div className="text-block">
              <h3>
                <a href="#">Basic rules of running web agency. <div className="text-box-color"><i class="fa fa-calendar"></i> 30 April, 2020 10.30AM</div></a>
				
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
                <a href="#">Introducing latest app features <div className="text-box-color"><i class="fa fa-calendar"></i> 30 April, 2020 10.30AM</div></a>
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
                <a href="#">Become the best sale marketer <div className="text-box-color"><i class="fa fa-calendar"></i> 30 April, 2020 10.30AM</div></a>
              </h3>
            </div>
          </div>
        </div>
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
