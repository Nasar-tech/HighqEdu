import React from "react";
import Footer from "./Footer";
import OnlyContactus from "./OnlyContactus";
import OnlyNav from "./onlyNav";
const Contactus = () => {
  return (
    <>
    <OnlyNav></OnlyNav>
    <br />
    <br />
    <br />
    <br />
      {/* <!-- Contact us start --> */}
      <OnlyContactus/>
      {/* <!-- Contact us ends --> */}
      <Footer/>
    </>
  );
};

export default Contactus;
