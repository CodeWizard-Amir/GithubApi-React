import React, { Component, Fragment } from "react";
import Header from "../layout/Header";
import "../../styles/bootstrap.css";
import "../../styles/about.css";
const about = () => {
  return (
    <Fragment>
      <Header />
      <div className='p-5 bg-info'>
        <h2>github finder</h2>
        <h4>version 2.1.0</h4>
      </div>
    </Fragment>
  );
};

export default about;
