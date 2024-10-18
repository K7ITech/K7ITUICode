import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="display">
        <nav
          class="navbar navbar-expand-lg align-items-center w-100 h-15 z-index-3 mt-0 position-fixed"
          style={{ backgroundColor: "#f6f4ee" }}
        >
          <div class="container-fluid w-100">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <Link class="navbar-brand" to="/">
                <img
                  src="../assets/img/logo.png"
                  alt="Bootstrap"
                  width="80"
                  height="50"
                  style={{ objectFit: "contain" }}
                />
              </Link>
              <ul class="navbar-nav mx-auto d-flex gap-4">
                <li class="nav-item">
                  <Link
                    class="nav-link fs-6 text-black"
                    aria-current="page"
                    to="/Aboutus"
                  >
                    About Us
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    class="nav-link fs-6 text-black"
                    aria-current="page"
                    to="/Industries"
                  >
                    Industries
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    class="nav-link  fs-6 text-black"
                    aria-current="page"
                    to="/Services"
                  >
                    Services
                  </Link>
                </li>

                <li class="nav-item">
                  <Link
                    class="nav-link  fs-6 text-black"
                    aria-current="page"
                    to="/OurLeadership"
                  >
                    Our Leadership
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    class="nav-link  fs-6 text-black"
                    aria-current="page"
                    to="/TrainingPlacements"
                  >
                    Training & Placements
                  </Link>
                </li>
                {/* <li class="nav-item">
                  <Link
                    class="nav-link  fs-6 text-black"
                    aria-current="page"
                    to="/Career"
                  >
                    Career
                  </Link>
                </li> */}
                <li class="nav-item">
                  <Link
                    class="nav-link  fs-6 text-black"
                    aria-current="page"
                    to="/Career"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
              <form class="d-flex gap-0 text-end justify-content-end  align-items-center">
                <Link
                  to="https://www.facebook.com/share/c1pn8nwMo7EcLdLu/?mibextid=qi2Omg"
                  class="text-secondary me-xl-4"
                  
                >
                  <span class="fa fa-facebook text-info fa-lg"></span>
                </Link>
                <Link
                  to="https://www.instagram.com/k7infotechpvtltd"
                  class="text-secondary me-xl-4"
                >
                  <span class="fa fa-instagram  text-danger fa-lg"></span>
                </Link>
                <Link
                  to="https://www.linkedin.com/company/k7infotech/"
                  class="text-secondary me-xl-4"
                >
                  <span class="fa fa-linkedin text-success fa-lg"></span>
                </Link>
                <Link
                  to="https://youtube.com/@k7infotechpvtltd?si=wty7wuwiXmhp564O"
                  class="text-secondary me-xl-4"
                >
                  <span class="fa fa-youtube-play  text-danger fa-lg"></span>
                </Link>
                <button type="button" class="btn btn-outline-success text-xs ">
                  +91 8068036654{" "}
                  <span>
                    <i class="fa fa-phone ms-2" aria-hidden="true"></i>
                  </span>
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
