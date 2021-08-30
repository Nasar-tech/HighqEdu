import React from "react";

const Footer = () => {
  return (
    <div>
      <div class="container">
        <footer>
          <hr className="w-100" />
          <div className="row d-flex justify-content-center">
            <div className="col-5 col-md-5 ml-5">
            <p class="text-success">©HighQ-Labs 2021 Company, Inc</p>

            </div>
            <div className="col-5 col-md-5 ml-5">
              <p class="text-success"><i class="fas fa-map-marked-alt"></i> D.No.46-17-20, Kilari Enclave, above HDFC Bank, Danavai Peta</p>
              <p class="text-success mt-0"><i class="fas fa-mobile-alt"></i>&nbsp; Phone : +91 80991 14345</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
