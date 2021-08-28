import React from "react";

const Footer = () => {
  return (
    <div>
      <div class="container">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 mt-4 mb-0 p-0 border-top">
          <p class="col-md-4 mb-0 text-success">©HighQ-Labs 2021 Company, Inc</p>

          <a
            href="/"
            class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
          ></a>

          <ul class="nav col-md-4 justify-content-end">
            <li class="nav-item">
              <a href="#" disabled class="nav-link px-2">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a href="pagenotfound" class="nav-link px-2">
                Features
              </a>
            </li>
           
            <li class="nav-item">
              <a href="pagenotfound" class="nav-link px-2">
                FAQs
              </a>
            </li>
            <li class="nav-item">
              <a href="pagenotfound" class="nav-link px-2">
                About
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
