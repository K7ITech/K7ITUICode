import React from "react";
import { Link } from "react-router-dom";
const MobileNavbar = () => {
  return (
    <div className="display-mob">
      <nav class="navbar navbar-expand-lg blur border-radius-xl top-0 z-index-fixed shadow fixed-top  start-0 end-0">
        <div class="container-fluid px-0">
          <Link
            class="navbar-brand font-weight-bolder ms-sm-3  d-block d-md-none"
            to="/"
            rel="tooltip"
            title="Designed and Coded by Creative Tim"
            data-placement="bottom"
          >
            <img
              src="../assets/img/logo.png"
              alt="Bootstrap"
              width="60"
              height="40"
              style={{ objectFit: "contain" }}
            />
          </Link>
          <button
            class="navbar-toggler shadow-none ms-md-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navigation"
            aria-controls="navigation"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon mt-2">
              <span class="navbar-toggler-bar bar1"></span>
              <span class="navbar-toggler-bar bar2"></span>
              <span class="navbar-toggler-bar bar3"></span>
            </span>
          </button>
          <div
            class="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0"
            id="navigation"
          >
            <ul class="navbar-nav navbar-nav-hover ms-auto">
              <li class="nav-item dropdown dropdown-hover mx-2">
                <Link
                  to="/MobileAboutUs"
                  role="button"
                  class="nav-link ps-2 d-flex cursor-pointer align-items-center text-black"
                >
                 <i className="ri-group-line opacity-6 me-2 text-md"></i>
                  About Us
                </Link>
              </li>
              <li class="nav-item dropdown dropdown-hover mx-2">
                <Link
                  to="/MobileIndustries"
                  role="button"
                  class="nav-link ps-2 d-flex cursor-pointer align-items-center"
                >
                 <i class="ri-community-line opacity-6 me-2 text-md" aria-hidden="true"></i>
                  Industries
                </Link>
              </li>
              <li class="nav-item dropdown dropdown-hover mx-2">
                <Link
                  to="/MobileServices"
                  role="button"
                  class="nav-link ps-2 d-flex cursor-pointer align-items-center"
                >
                  <i class="ri-server-line opacity-6 me-2 text-md" aria-hidden="true"></i>
                  Services
                </Link>
              </li>
              <li class="nav-item dropdown dropdown-hover mx-2">
                <Link
                  to="/MobileOurLeadership"
                  role="button"
                  class="nav-link ps-2 d-flex cursor-pointer align-items-center"
                >
                  <i class="ri-insert-row-top opacity-6 me-2 text-md"></i>
                  Our Leadership
                </Link>
              </li>
              <li class="nav-item dropdown dropdown-hover mx-2">
                <Link
                  to="/MobileTrainingPlacements"
                  role="button"
                  class="nav-link ps-2 d-flex cursor-pointer align-items-center"
                >
                  <i class="ri-presentation-line opacity-6 me-2 text-md"></i>
                  Training & Placements
                </Link>
              </li>
              <li class="nav-item dropdown dropdown-hover mx-2">
                <Link
                  to="/MobileCareer"
                  role="button"
                  class="nav-link ps-2 d-flex cursor-pointer align-items-center"
                >
                  <i class="ri-graduation-cap-line opacity-6 me-2 text-md"></i>
                  Career
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MobileNavbar;
