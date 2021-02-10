import React from "react";
import { useHistory } from "react-router-dom";

const EventCard = ({ image, update, date, time, title, text, link, _id }) => {
  let history = useHistory();
  const sendToReg = (e) => {
    e.preventDefault();
    console.log(e.target.id);
    history.push(`paymentEvent/${_id}`);
  };

  return (
    <div className="single-blog-style-one">
      <div className="image-block">
        <div className="inner-block">
          <img src={image} alt="Awesome Image" />
          <div className="date-block">
            <i className="fa fa-calendar"></i> {date}
          </div>
        </div>
      </div>
      <div className="text-block">
        <div className="meta-info">
          <a href={`/FrontEventDetails/${_id}`}>
            <i className="fa fa-calendar"></i> {update}
          </a>

          <span className="sep">.</span>
          <a href={`/FrontEventDetails/${_id}`}>{time}</a>
        </div>
        <h3>
          <a href={`/FrontEventDetails/${_id}`}>{title}</a>
        </h3>
        <p>{text}</p>
        <div className="line-block"></div>
        <a href={`/FrontEventDetails/${_id}`} className="more-link">
          View Events
        </a>
      </div>
    </div>
  );
};

export default EventCard;
