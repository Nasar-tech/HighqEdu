import React from "react";
import Navbar from "./components/Navbar";
import Courses from "./components/Courses";
import Placements from "./components/Placements";
import Contactus from "./components/Contactus";
import UpComing from "./components/UpComing";
import Footer from "./components/Footer";
import Aboutus from "./components/Aboutus";


import "./App.css";
import Clients from "./components/Clients";
import OnlyContactus from "./components/OnlyContactus";

function Home() {
  return (
    <>  
    
      <Navbar />
    
      <Courses />
      <UpComing />
      <Placements /> 
      <Clients/>     
      <OnlyContactus />
      <Footer/>
    </>
  );
}

export default Home;
