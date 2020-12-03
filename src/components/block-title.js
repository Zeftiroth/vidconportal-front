import React from "react";

const BlockTitle = ({ textAlign,  title }) => {
  return (
    <div className={`block-title text-${textAlign}`}>
      {/*<img src={image} alt="Awesome Image" />  */}
      <h2>{title}</h2>
    </div>
  );
};

export default BlockTitle;
