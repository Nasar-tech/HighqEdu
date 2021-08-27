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
        <p>Click on <kbd>MoreInfo</kbd> and Register to get notified when we start</p>
        <hr class="w-25" mx-auto />
      </div>
      <marquee class="marquee" direction="right">
        {/*  style="width: 18rem; */}
        <div class="card AdvCard">
          <div class="card-body">
            <h5 class="card-title">Front End Course </h5>
            <h6 class="card-subtitle mb-2 text-muted">React Course</h6>
            <a href="#" class="card-link btn-dark">
              MoreInfo
            </a>
          </div>
        </div>
        <div class="card AdvCard">
          <div class="card-body">
            <h5 class="card-title">Backend Development </h5>
            <h6 class="card-subtitle mb-2 text-muted">React Course</h6>
            <a href="#" class="card-link btn-dark">
              MoreInfo
            </a>
          </div>
        </div>
        <div class="card AdvCard">
          <div class="card-body">
            <h5 class="card-title">Front End Course </h5>
            <h6 class="card-subtitle mb-2 text-muted">React Course</h6>
            <a href="#" class="card-link btn-dark">
              MoreInfo
            </a>
          </div>
        </div>
      </marquee>
    </div>
  );
};

export default UpComing;
