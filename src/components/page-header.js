import React from "react";


const PageHeader = ({ crumbtext, title }) => {
  return (
    <section className="inner-banner">
      <div className="container">
        <ul className="thm-breadcrumb">
          <li>
            <a href="/">
              Home</a>
           
          </li>
          <li>
            <span className="sep">.</span>
          </li>
          <li>
            <span className="page-title">{crumbtext}</span>
          </li>
        </ul>
        <h2>{title}</h2>
      </div>
    </section>
  );
};

export default PageHeader;
