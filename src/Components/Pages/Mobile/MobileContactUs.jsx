import React from "react";
import MobileNavbar from "./MobileNavbar";
import MobileFooter from "./MobileFooter";

const MobileContactUs = () => {
  return (
    <div>
      <MobileNavbar />
      <section class="py-6">
        <div class="container">
          <div class="align-items-center">
            <div class="justify-content-start text-center">
              <div>
                <h3 className="source-serif-4 font-weight-lighter fs-2 text-warning">
                  Contact Us
                </h3>
                <p className="text-black fs-6">
                  Please call us or email to us for any queries and our team at
                  K7 Infotech will evaluate your queries and revert back
                  appropriately
                </p>
              </div>
            </div>
            <div class="p-1 info-horizontal d-flex align-items-center mb-4">
              <div class="icon icon-md icon-shape bg-gradient-primary shadow-primary text-center border-radius-xl">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
              </div>
              <div class="description ps-3">
                <p class="mb-0 text-black">
                  258,LV Nilayam, <br /> 3rd cross, Jayanthi Nagar Ext,
                  Horamavu,
                  <br />
                  Bangalore Pin code -560043
                </p>
              </div>
            </div>
            <div class="p-1 info-horizontal d-flex align-items-center mb-4">
              <div class="icon icon-md icon-shape bg-gradient-primary shadow-primary text-center border-radius-xl">
                <i class="fa fa-phone" aria-hidden="true"></i>
              </div>
              <div class="description ps-3">
                <p class="mb-0 text-black">+91 8068036654</p>
              </div>
            </div>
            <div class="p-1 info-horizontal d-flex align-items-center mb-4">
              <div class="icon icon-md icon-shape bg-gradient-primary shadow-primary text-center border-radius-xl">
                <i class="fa fa-envelope" aria-hidden="true"></i>
              </div>
              <div class="description ps-3">
                <p class="mb-0 text-black">careers@k7itech.com</p>
              </div>
            </div>
            <div className="container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2491.3851387655654!2d77.66804407455253!3d13.02798336994981!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11339ddb83d1%3A0x938eceb3dbb15991!2sK7%20Infotech!5e0!3m2!1sen!2sin!4v1722593942294!5m2!1sen!2sin" width="100%"
                height="300px"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <MobileFooter />
    </div>
  );
};

export default MobileContactUs;
