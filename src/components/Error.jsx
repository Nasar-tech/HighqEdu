import React from "react";
import { NavLink } from "react-router-dom";
import Home from "../Home";
const Error = () => {
  return (
    <div className="container">
    <div className="row">
      <div className="col-10">
        <h1>OOps Pagenot Found : (</h1>+
      <button className="btn btn-secondary">

      <h4>
        <NavLink to="/">Click here to HomePage</NavLink>
        </h4> 
      </button>
      </div>
      
    </div>
    </div>
  );
};

export default Error;
