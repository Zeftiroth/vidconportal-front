import React from "react";


const EventCard = ({ image, update, date, time, title, text, link }) => {
  return (
    <div className="single-blog-style-one">
      <div className="image-block">
        <div className="inner-block">
          <img src={image} alt="Awesome Image" />
          <div className="date-block"><i className="fa fa-calendar"></i> {date}</div>
        </div>
      </div>
      <div className="text-block">
        <div className="meta-info">
          <a href={link}>
           <i className="fa fa-calendar"></i> {update}</a>
         
          <span className="sep">.</span>
          <a href={link}>
           {time}</a>
         
        </div>
        <h3>
          <a href={link}>
           {title}</a>
          
        </h3>
        <p>{text}</p>
        <div className="line-block"></div>
        <a href={link} className="more-link">View Events</a>
       
      </div>
    </div>
  );
};

export default EventCard;
