import React from "react";

const FeatureCard = ({ icon, title, text, link }) => {
  return (
    <div className="single-service-one">
      <div className="hover-block"></div>
      <i className={icon}></i>
      <h3>{title}</h3>
      <p>{text}</p>
      <div className="line-block"></div>
     
    </div>
  );
};

export default FeatureCard;
