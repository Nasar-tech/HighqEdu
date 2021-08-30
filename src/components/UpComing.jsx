import React from "react";

const UpComing = () => {
  return (
    <div>
      <br />
      <br />
      <div class="container">
        <h2>
          Upcoming Classes
          <img src="https://img.icons8.com/fluency/50/000000/new.png" />
        </h2>
        <p>
          Click on Register to get notified when we
          start
        </p>
        <hr class="w-25" mx-auto />
      </div>

<div className="container">
  
<div className="row">
       
          {/* Card three */}
        <div className="col-10 col-lg-4">
          <div class="card courseCard">
            <div class="card-body">
              <h5 class="card-title">React</h5>&nbsp;&nbsp;<span className="badge badge-secondary">New</span>
              <hr />
              <h6 class="card-subtitle mb-2 text-muted">FrontEnd Development</h6>
              <p class="card-text">
                One of the trending FrontEnd Development Library
              </p>
              <a href="#" class="card-link">
                <kbd>Register Course</kbd>
              </a>
              
            </div>
          </div>
        </div>
          {/* Card Four */}
        <div className="col-10 col-lg-4">
          <div class="card courseCard">
            <div class="card-body">
              <h5 class="card-title">React</h5>&nbsp;&nbsp;<span className="badge badge-secondary">New</span>
              <hr />
              <h6 class="card-subtitle mb-2 text-muted">Backend Development</h6>
              <p class="card-text">
                MERN Stack Development
              </p>
              <a href="#" class="card-link">
                <kbd>Register Course</kbd>
              </a>
              
            </div>
          </div>
        </div>
          {/* Card five */}
        <div className="col-10 col-lg-4">
          <div class="card courseCard">
            <div class="card-body">
              <h5 class="card-title">React</h5>&nbsp;&nbsp;<span className="badge badge-secondary">New</span>
              <hr />
              <h6 class="card-subtitle mb-2 text-muted">Selenium Testing</h6>
              <p class="card-text">
                Selenium C# from Starting to End
              </p>
              <a href="#" class="card-link">
                <kbd>Register Course</kbd>
              </a>
              
            </div>
          </div>
        </div>


      </div>

</div>



    </div>
  );
};

export default UpComing;
