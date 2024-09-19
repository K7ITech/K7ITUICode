import React from "react";
import MobileNavbar from "./MobileNavbar";
import MobileFooter from "./MobileFooter";

const MobileOurLeadership = () => {
  return (
    <div>
      <MobileNavbar />
      <div className="container py-6">
        <div class="">
          <div class=" mx-auto text-center">
            <h6 class="text-gradient text-info text-uppercase">
              The Executive Team
            </h6>
            <h2>Building the future</h2>
          </div>
        </div>
        <div class="mt-5 mb-5">
         <a href="/MobileLeadershipInside">
         <div class="card shadow-lg">
            <div class="card-header mx-3 p-0 bg-transparent position-relative z-index-2">
              <a class="d-block blur-shadow-image ">
                <img
                  src="../../assets/img/K7it.png"
                  alt="img-blur-shadow"
                  class="img-fluid shadow border-radius-lg img-height"
                  loading="lazy"
                />
              </a>
              <div class="card-body text-center bg-white border-radius-lg p-3 pt-0">
                <p class="mb-1 d-md-none d-block text-sm font-weight-bold text-dark mt-3">
                  Kesavulu Arthala
                </p>
                <p class="mb-0 text-xs font-weight-bolder text-info text-gradient text-uppercase">
                 FOUNDER & CEO
                </p>
              </div>
            </div>
          </div>
         </a>
        </div>
      </div>{" "}
      <MobileFooter/>
    </div>
  );
};

export default MobileOurLeadership;
