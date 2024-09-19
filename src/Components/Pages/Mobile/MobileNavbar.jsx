import React from "react";

const MobileNavbar = () => {
  return (
    <div className="display-mob">
      <nav class="navbar navbar-expand-lg blur border-radius-xl top-0 z-index-fixed shadow fixed-top  start-0 end-0">
        <div class="container-fluid px-0">
          <a
            class="navbar-brand font-weight-bolder ms-sm-3  d-block d-md-none"
            href="/"
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
          </a>
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
                <a
                  href="/MobileAboutUs"
                  role="button"
                  class="nav-link ps-2 d-flex cursor-pointer align-items-center text-black"
                >
                 <i className="ri-group-line opacity-6 me-2 text-md"></i>
                  About Us
                </a>
              </li>
              <li class="nav-item dropdown dropdown-hover mx-2">
                <a
                  href="/MobileIndustries"
                  role="button"
                  class="nav-link ps-2 d-flex cursor-pointer align-items-center"
                >
                 <i class="ri-community-line opacity-6 me-2 text-md" aria-hidden="true"></i>
                  Industries
                </a>
              </li>
              <li class="nav-item dropdown dropdown-hover mx-2">
                <a
                  href="/MobileServices"
                  role="button"
                  class="nav-link ps-2 d-flex cursor-pointer align-items-center"
                >
                  <i class="ri-server-line opacity-6 me-2 text-md" aria-hidden="true"></i>
                  Services
                </a>
              </li>
              <li class="nav-item dropdown dropdown-hover mx-2">
                <a
                  href="/MobileOurLeadership"
                  role="button"
                  class="nav-link ps-2 d-flex cursor-pointer align-items-center"
                >
                  <i class="ri-insert-row-top opacity-6 me-2 text-md"></i>
                  Our Leadership
                </a>
              </li>
              <li class="nav-item dropdown dropdown-hover mx-2">
                <a
                  href="/MobileTrainingPlacements"
                  role="button"
                  class="nav-link ps-2 d-flex cursor-pointer align-items-center"
                >
                  <i class="ri-presentation-line opacity-6 me-2 text-md"></i>
                  Training & Placements
                </a>
              </li>
              <li class="nav-item dropdown dropdown-hover mx-2">
                <a
                  href="/MobileCareer"
                  role="button"
                  class="nav-link ps-2 d-flex cursor-pointer align-items-center"
                >
                  <i class="ri-graduation-cap-line opacity-6 me-2 text-md"></i>
                  Career
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MobileNavbar;
