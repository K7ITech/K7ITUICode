import React from "react";

const MobileFooter = () => {
  return (
    <div>
      <footer class="footer mt-3 mb-4 z-index-3 bottom-10 ">
        <div class="container-fluid fixed-plugin">
          <div class="row align-items-center justify-content-lg-between">
            <div class="col-12 mb-lg-0 mb-2">
              <div class="copyright text-center text-sm text-muted text-lg-start">
                All rights reserved. Copyright by
                <a href="" class="font-weight-bold" target="_blank">
                  © 2024 K7IT
                </a>
              </div>
            </div>
            <div class="col-12 mt-2">
              <ul class="nav nav-footer justify-content-center justify-content-lg-center">
                <li class="nav-item">
                  <a href="https://www.facebook.com/share/c1pn8nwMo7EcLdLu/?mibextid=qi2Omg" class="nav-link text-muted " target="_blank">
                    <i
                      class="fa fa-facebook text-info fa-lg"
                      aria-hidden="true"
                    ></i>{" "}
                  </a>
                </li>
                <li class="nav-item">
                  <a href="https://www.instagram.com/k7infotechpvtltd" class="nav-link text-muted" target="_blank">
                    <i
                      class="fa fa-instagram  text-danger fa-lg"
                      aria-hidden="true"
                    ></i>
                  </a>
                </li>
                <li class="nav-item">
                  <a  href="https://www.linkedin.com/company/k7infotech/" class="nav-link text-muted" target="_blank">
                    <i
                      class="fa fa-linkedin text-success fa-lg"
                      aria-hidden="true"
                    ></i>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="https://youtube.com/@k7infotechpvtltd?si=wty7wuwiXmhp564O" class="nav-link pe-0 text-muted" target="_blank">
                    <i
                      class="fa fa-youtube-play  text-danger fa-lg"
                      aria-hidden="true"
                    ></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MobileFooter;
