import React from "react";
import { Link } from "react-router-dom";


const OnlyNav = () => {

 
  return (
   
    <div>

      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <Link className="navbar-brand text-white" to="/">
         
      <p className="mt-2"><i className="fas fa-laptop-code">Edu-Tech </i> </p>
          <div className="contactDetails"> 
            <p className="contactPara1"><i class="fas fa-mobile-alt"></i>&nbsp;&nbsp;&nbsp;+91 80991 14345</p>
            <p className="contactPara2"><i class="fas fa-at"></i>&nbsp;&nbsp;Email : highqlabs@gmail.com</p>
            <br/>
            
          </div>  
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className=" nav navbar-nav ml-auto">
            <li className="nav-item active mr-2">
              <Link className="nav-link text-white" style={{fontSize:"23px"}} to="/">
                <i className="fas fa-home"></i> Home
              </Link>
              
            </li>
            <li className="nav-item  mr-2">
              <Link className="nav-link text-white" style={{fontSize:"23px"}} to="/Courses">
                <i className="fas fa-chalkboard-teacher"></i> Courses
              </Link>
            </li>
            <li className="nav-item mr-2">
              <Link className="nav-link text-white" style={{fontSize:"23px"}} to="/Career">
                <i className="fas fa-graduation-cap"></i> Career
              </Link>
            </li>
            <li className="nav-item mr-2">
              <Link className="nav-link text-white" style={{fontSize:"23px"}} to="/OurPlacements">
                <i className="fas fa-terminal"></i> OurPlacements
              </Link>
            </li>
            <li className="nav-item mr-2">
              <Link className="nav-link text-white" style={{fontSize:"23px"}} to="/Contactus">
                <i className="fas fa-search-dollar"></i> Contactus
              </Link>
            </li>
          </ul><br/>
         
        </div>
      </nav>
      
    </div>
  );
};

export default OnlyNav;
