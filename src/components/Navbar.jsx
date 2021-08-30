import React from "react";

import { Link } from "react-router-dom";
import OnlyNav from "./onlyNav";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="bgimg img-fluid">
          {/* <!-- NavBar Start --> */}

          <div className="container mb-5 text-center headerset">
            <br />
            <br />
            <br />

            <h1 className="customFont">
              <samp>Welcome</samp> to <span className="eduTech">HQL </span>
            </h1>
            <p className="headingPara">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Edutech is a Subset Educational Institute from HighQ-Labs
              is a IT Solutions and Services company headquartered in Bangalore
              with operations in India, UK, and Middle East. HighQ-Labs provides
              IT solutions in the area of web application development, mobile
              application development, building APIs, and software testing.
              HighQ-Labs is a partner of choice for various unicorns in India
              and fortune 500 companies across the globe for providing
              cost-effective and quality IT services and solutions. HighQ-Labs
              provides its clients also in fulfilling their resourcing needs by
              providing customized training in the areas of development and
              software testing. HighQ-Labs expertise comes in the area of
              application development both web and mobile. Core Team at
              HighQ-Labs come with an overall IT industry experience of over 2
              decades, we clearly understand the needs of our clients, thus
              ensuring our engineers play an important role in our clients
              success story.
            </p>
            {/* Marquee texts */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
