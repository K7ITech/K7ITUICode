import React from "react";

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
              <a class="navbar-brand" href="/">
                <img
                  src="../assets/img/logo.png"
                  alt="Bootstrap"
                  width="80"
                  height="50"
                  style={{ objectFit: "contain" }}
                />
              </a>
              <ul class="navbar-nav mx-auto d-flex gap-4">
                <li class="nav-item">
                  <a
                    class="nav-link fs-6 text-black"
                    aria-current="page"
                    href="/Aboutus"
                  >
                    About Us
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link fs-6 text-black"
                    aria-current="page"
                    href="/Industries"
                  >
                    Industries
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link  fs-6 text-black"
                    aria-current="page"
                    href="/Services"
                  >
                    Services
                  </a>
                </li>

                <li class="nav-item">
                  <a
                    class="nav-link  fs-6 text-black"
                    aria-current="page"
                    href="/OurLeadership"
                  >
                    Our Leadership
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link  fs-6 text-black"
                    aria-current="page"
                    href="/TrainingPlacements"
                  >
                    Training & Placements
                  </a>
                </li>
                {/* <li class="nav-item">
                  <a
                    class="nav-link  fs-6 text-black"
                    aria-current="page"
                    href="/Career"
                  >
                    Career
                  </a>
                </li> */}
                <li class="nav-item">
                  <a
                    class="nav-link  fs-6 text-black"
                    aria-current="page"
                    href="/Career"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
              <form class="d-flex gap-0 text-end justify-content-end  align-items-center">
                <a
                  href="https://www.facebook.com/share/c1pn8nwMo7EcLdLu/?mibextid=qi2Omg"
                  class="text-secondary me-xl-4"
                  
                >
                  <span class="fa fa-facebook text-info fa-lg"></span>
                </a>
                <a
                  href="https://www.instagram.com/k7infotechpvtltd"
                  class="text-secondary me-xl-4"
                >
                  <span class="fa fa-instagram  text-danger fa-lg"></span>
                </a>
                <a
                  href="https://www.linkedin.com/company/k7infotech/"
                  class="text-secondary me-xl-4"
                >
                  <span class="fa fa-linkedin text-success fa-lg"></span>
                </a>
                <a
                  href="https://youtube.com/@k7infotechpvtltd?si=wty7wuwiXmhp564O"
                  class="text-secondary me-xl-4"
                >
                  <span class="fa fa-youtube-play  text-danger fa-lg"></span>
                </a>
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
