import React from "react";
import MobileFooter from "./MobileFooter";

const MobileLandingPage = () => {
  return (
    <div>
      <div className="container justify-content-center">
        <div class="d-flex">
          <div class=" text-md-start px-sm-5  mt-sm-4 py-sm-2">
            <h1 class=" text-dark source-serif-4 text-normal fadeIn1 fadeInBottom mt-4">
              Launch your IT career with K7 Infotech
            </h1>
            <p class="lead mb-4 fadeIn3 fadeInBottom text-dark">
              We provide full-cycle software development service, web
              development, backend development, design and prototying, software
              development, testing, development and application maintenance
            </p>
            <div class="buttons fadeIn2 fadeInBottom">
              <button type="button" class="btn bg-gradient-info">
                Contact Us
              </button>
            </div>
          </div>
        </div>
        <div class="mb-4 pt-6">
          <div class="row justify-content-center">
            <h1 class="text-gradient text-dark mb-0 text-normal source-serif-4 text-center mb-4 w-100">
              Redefining software excellence with every project
            </h1>
            <p className="text-gradient text-dark mb-0 fs-7 text-normal source-serif-4 text-center mb-4">
              Driven by innovation, we craft cutting-edge solutions that empower
              businesses to thrive in the digital age.
            </p>
            <div class="col-12 mx-auto text-center">
              <div class="card card-blog card-plain">
                <div class="card-header p-0 position-relative z-index-2">
                  <a class="d-block blur-shadow-image">
                    <img
                      src="https://images.pexels.com/photos/6774452/pexels-photo-6774452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt="img-blur-shadow"
                      class="img-fluid border-radius-lg "
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-5">
          <section class="py-2" style={{ background: "aliceblue" }}>
            <div class="container">
              <div class="row mb-3">
                <div class="col-lg-5 col-md-12 ms-auto order-1 order-md-1 order-lg-1">
                  <div class="p-3 pt-0">
                    <div class="icon icon-shape bg-gradient-info rounded-circle shadow text-center mb-0">
                      <i class="ni ni-building"></i>
                    </div>
                    <h2 class="text-gradient text-info mb-0 text-normal font-monospace mb-4">
                      About Us
                    </h2>
                    <b className="fs-7 text-dark fw-normal text-normal">
                      K7 Infotech where innovation meets excellence in software
                      solutions. Established with a passion for harnessing
                      technology to drive business success, we specialize in
                      developing bespoke software that transforms ideas into
                      reality. Our dedicated team of tech enthusiasts and
                      industry experts collaborates seamlessly to deliver
                      cutting-edge applications tailored to meet the unique
                      needs of our clients across various sectors.
                    </b>
                    <div></div>
                  </div>
                  <a href="/MobileAboutUs" class="text-primary icon-move-right">
                    More about us
                    <i class="fas fa-arrow-right text-sm ms-1"></i>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div>
          <div class="row text-center justify-content-center pt-6">
            <div class="col-lg-10">
              <span class="badge rounded-pill badge-primary mb-2">
                What We Do
              </span>
              <h2 className="source-serif-4 text-normal text-black">
                Our Business Lines
              </h2>
              <p className="text-gradient text-dark mb-0 fs-5 text-normal source-serif-4 text-center mb-4">
                Empowering businesses through transformative software solutions.
              </p>
            </div>
          </div>
          <header>
            <div
              id="carouselExampleControls"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div
                    class="page-header min-vh-35"
                    style={{
                      backgroundImage:
                        "url('https://www.shutterstock.com/image-photo/vertical-view-happy-businessman-formalwear-600nw-1800744955.jpg')",
                    }}
                    loading="lazy"
                  ></div>
                  <div class="card shadow-lg mt-n5 mx-2 mb-4">
                    <div class="card-body">
                      <div class="container-fluid px-0">
                        <div class="row">
                          <div class="col-lg-6 col-sm-6 mb-sm-0 mb-4">
                            <div class="info-horizontal border-radius-xl p-4 d-block d-md-flex ">
                              <i class="material-icons text-3xl text-gradient text-danger">
                                tune
                              </i>
                              <div class="description ps-0 ps-md-3">
                                <h5>Banking</h5>
                                <p>
                                  Empowering the banking industry with advanced
                                  software solutions that revolutionize customer
                                  experiences, optimize operational
                                  efficiencies, and ensure robust security
                                  measures. Our tailored software integrates
                                  seamlessly with existing systems.
                                </p>
                                <a
                                  href="javascript:;"
                                  class="text-dark icon-move-right"
                                >
                                  More about us
                                  <i class="fas fa-arrow-right text-sm ms-1"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div
                    class="page-header min-vh-35"
                    style={{
                      backgroundImage:
                        "url('https://www.shutterstock.com/image-photo/serious-caring-pediatrician-woman-white-600nw-2261002251.jpg')",
                    }}
                    loading="lazy"
                  ></div>
                  <div class="card shadow-lg mt-n5 mx-2 mb-4">
                    <div class="card-body">
                      <div class="container-fluid px-0">
                        <div class="row">
                          <div class="col-lg-6 col-sm-6 mb-sm-0 mb-4">
                            <div class="info-horizontal border-radius-xl p-4 d-block d-md-flex ">
                              <i class="material-icons text-3xl text-gradient text-danger">
                                tune
                              </i>
                              <div class="description ps-0 ps-md-3">
                                <h5>Health Care</h5>
                                <p>
                                  Patients seek high-quality care services
                                  anytime, anywhere, and at affordable costs.
                                  This calls for a connected, always-on,
                                  patient-centric delivery model, which is
                                  driving healthcare players to rewire their
                                  operations and build cross-industry
                                  ecosystems.{" "}
                                </p>
                                <a
                                  href="javascript:;"
                                  class="text-dark icon-move-right"
                                >
                                  More about us
                                  <i class="fas fa-arrow-right text-sm ms-1"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div
                    class="page-header min-vh-35"
                    style={{
                      backgroundImage:
                        "url('https://media.istockphoto.com/id/638237036/photo/stack-of-hands-symbolizing-trust-and-cooperation.jpg?s=612x612&w=0&k=20&c=sj0zbFE0B0GhH9cxP6QDPVAYlBznNvQz6AiAwaeAi04=')",
                    }}
                    loading="lazy"
                  ></div>
                  <div class="card shadow-lg mt-n5 mx-2 mb-4">
                    <div class="card-body">
                      <div class="container-fluid px-0">
                        <div class="row">
                          <div class="col-lg-6 col-sm-6 mb-sm-0 mb-4">
                            <div class="info-horizontal border-radius-xl p-4 d-block d-md-flex ">
                              <i class="material-icons text-3xl text-gradient text-danger">
                                tune
                              </i>
                              <div class="description ps-0 ps-md-3">
                                <h5>Education</h5>
                                <p>
                                  The 21st century brought about a revolution in
                                  the education industry, with the internet as
                                  an instant and always-on source of learning.
                                  Market disruptions today have amplified the
                                  need for learning technology solutions for
                                  blended learning experiences.{" "}
                                </p>
                                <a
                                  href="javascript:;"
                                  class="text-dark icon-move-right"
                                >
                                  More about us
                                  <i class="fas fa-arrow-right text-sm ms-1"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div
                    class="page-header min-vh-35"
                    style={{
                      backgroundImage:
                        "url('https://media.istockphoto.com/id/1303374978/photo/airplane-flying-above-container-port.jpg?s=612x612&w=0&k=20&c=-qMae6sKSkWmmoa4-IjSKpzEXky_sLXf-BdUvhjyMHI=')",
                    }}
                    loading="lazy"
                  ></div>
                  <div class="card shadow-lg mt-n5 mx-2 mb-4">
                    <div class="card-body">
                      <div class="container-fluid px-0">
                        <div class="row">
                          <div class="col-lg-6 col-sm-6 mb-sm-0 mb-4">
                            <div class="info-horizontal border-radius-xl p-4 d-block d-md-flex ">
                              <i class="material-icons text-3xl text-gradient text-danger">
                                tune
                              </i>
                              <div class="description ps-0 ps-md-3">
                                <h5>Travel and Logistics</h5>
                                <p>
                                  Whether they are transporting people or
                                  parcels, travel and logistics companies are
                                  building robust ecosystems that facilitate
                                  safe, flexible, and convenient journeys for
                                  their customers. By building marketplaces
                                  supported by technology platforms.{" "}
                                </p>
                                <a
                                  href="javascript:;"
                                  class="text-dark icon-move-right"
                                >
                                  More about us
                                  <i class="fas fa-arrow-right text-sm ms-1"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="min-vh-15 position-absolute w-100 top-0">
                <a
                  class="carousel-control-prev ms-0 ms-md-n5 mt-12 mb-n7 mt-md-0 mb-md-0"
                  href="#carouselExampleControls"
                  role="button"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon position-absolute bottom-50"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </a>
                <a
                  class="carousel-control-next ms-0 ms-md-n5 mt-12 mb-n7 mt-md-0 mb-md-0"
                  href="#carouselExampleControls"
                  role="button"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon position-absolute bottom-50"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </a>
              </div>
            </div>
          </header>
          <div class="row text-center justify-content-center pt-6">
            <div class="col-lg-10">
              <span class="badge rounded-pill badge-success mb-2">
                Our Services
              </span>
              <h2 className="source-serif-4 text-normal text-black">
                Our Expertise & Experience
              </h2>
              <p className="text-gradient text-dark mb-0 fs-5 text-normal source-serif-4 text-center mb-4">
                Harnessing years of expertise to craft exceptional software
                solutions.
              </p>
            </div>
          </div>
          <section class="py-2 position-relative">
            <div
              id="carousel-testimonial-pricing"
              class="carousel slide carousel-team"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="container">
                    <div class="row align-items-center">
                      <div class="">
                        <div class="p-3">
                          <img
                            class="w-100 border-radius-md shadow-lg img-height"
                            src="https://www.softura.com/wp-content/uploads/2021/10/Group-256@2x.png"
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <div class=" me-lg-auto position-relative">
                        <h3 class="text-dark source-serif-4 text-normal">
                          UI / UX Design
                        </h3>
                        <p class="my-4">
                          <i>
                            " We excel in crafting intuitive UI/UX designs that
                            elevate user experiences. Our team blends creativity
                            with functionality to deliver visually stunning and
                            user-friendly designs that captivate and engage
                            audiences effectively."
                          </i>
                        </p>
                        <div class="w-25 ms-auto opacity-2 mt-n8">
                          <svg
                            width="110px"
                            height="110px"
                            viewBox="0 0 270 270"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xlink="http://www.w3.org/1999/xlink"
                          >
                            <title>quote-down</title>
                            <g
                              stroke="none"
                              stroke-width="1"
                              fill="none"
                              fill-rule="evenodd"
                            >
                              <path
                                d="M107.000381,49.033238 C111.792099,48.01429 115.761022,48.6892564 116.625294,50.9407629 C117.72393,53.8028077 113.174473,58.3219079 107.017635,60.982801 C107.011653,60.9853863 107.00567,60.9879683 106.999688,60.990547 C106.939902,61.0219589 106.879913,61.0439426 106.820031,61.0659514 C106.355389,61.2618887 105.888177,61.4371549 105.421944,61.5929594 C88.3985192,68.1467602 80.3242628,76.9161885 70.3525495,90.6906738 C60.0774843,104.884196 54.9399518,119.643717 54.9399518,134.969238 C54.9399518,138.278158 55.4624127,140.716309 56.5073346,142.283691 C57.2039492,143.328613 57.9876406,143.851074 58.8584088,143.851074 C59.7291771,143.851074 61.0353294,143.241536 62.7768659,142.022461 C68.3497825,138.016927 75.4030052,136.01416 83.9365338,136.01416 C93.8632916,136.01416 102.658051,140.063232 110.320811,148.161377 C117.983572,156.259521 121.814952,165.88151 121.814952,177.027344 C121.814952,188.695638 117.417572,198.970703 108.622813,207.852539 C99.828054,216.734375 89.1611432,221.175293 76.6220807,221.175293 C61.9931745,221.175293 49.3670351,215.166992 38.7436627,203.150391 C28.1202903,191.133789 22.8086041,175.024577 22.8086041,154.822754 C22.8086041,131.312012 30.0359804,110.239421 44.490733,91.6049805 C58.2196377,73.906272 74.3541002,59.8074126 102.443135,50.4450748 C102.615406,50.3748509 102.790055,50.3058192 102.966282,50.2381719 C104.199241,49.7648833 105.420135,49.3936487 106.596148,49.1227802 L107,49 Z M233.000381,49.033238 C237.792099,48.01429 241.761022,48.6892564 242.625294,50.9407629 C243.72393,53.8028077 239.174473,58.3219079 233.017635,60.982801 C233.011653,60.9853863 233.00567,60.9879683 232.999688,60.990547 C232.939902,61.0219589 232.879913,61.0439426 232.820031,61.0659514 C232.355389,61.2618887 231.888177,61.4371549 231.421944,61.5929594 C214.398519,68.1467602 206.324263,76.9161885 196.352549,90.6906738 C186.077484,104.884196 180.939952,119.643717 180.939952,134.969238 C180.939952,138.278158 181.462413,140.716309 182.507335,142.283691 C183.203949,143.328613 183.987641,143.851074 184.858409,143.851074 C185.729177,143.851074 187.035329,143.241536 188.776866,142.022461 C194.349783,138.016927 201.403005,136.01416 209.936534,136.01416 C219.863292,136.01416 228.658051,140.063232 236.320811,148.161377 C243.983572,156.259521 247.814952,165.88151 247.814952,177.027344 C247.814952,188.695638 243.417572,198.970703 234.622813,207.852539 C225.828054,216.734375 215.161143,221.175293 202.622081,221.175293 C187.993174,221.175293 175.367035,215.166992 164.743663,203.150391 C154.12029,191.133789 148.808604,175.024577 148.808604,154.822754 C148.808604,131.312012 156.03598,110.239421 170.490733,91.6049805 C184.219638,73.906272 200.3541,59.8074126 228.443135,50.4450748 C228.615406,50.3748509 228.790055,50.3058192 228.966282,50.2381719 C230.199241,49.7648833 231.420135,49.3936487 232.596148,49.1227802 L233,49 Z"
                                fill="#48484A"
                                fill-rule="nonzero"
                                transform="translate(135.311778, 134.872794) scale(-1, -1) translate(-135.311778, -134.872794) "
                              ></path>
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="container">
                    <div class="row align-items-center">
                      <div class="">
                        <div class="p-3">
                          <img
                            class="w-100 border-radius-md shadow img-height"
                            src="https://bridgentech.com/wp-content/uploads/2023/06/Cloud-Services.gif"
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <div class=" me-lg-auto">
                        <h3 class="text-dark source-serif-4 text-normal">
                          Devops & Cloud Services
                        </h3>
                        <p class="my-4">
                          <i>
                            "We committed to help organizations to accelerate
                            their digital transformation journey by adopting
                            modern DevOps practices and harnessing the power of
                            cloud computing technologies."
                          </i>
                        </p>
                        <div class="w-25 ms-auto opacity-2 mt-n8">
                          <svg
                            width="110px"
                            height="110px"
                            viewBox="0 0 270 270"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xlink="http://www.w3.org/1999/xlink"
                          >
                            <title>quote-down</title>
                            <g
                              stroke="none"
                              stroke-width="1"
                              fill="none"
                              fill-rule="evenodd"
                            >
                              <path
                                d="M107.000381,49.033238 C111.792099,48.01429 115.761022,48.6892564 116.625294,50.9407629 C117.72393,53.8028077 113.174473,58.3219079 107.017635,60.982801 C107.011653,60.9853863 107.00567,60.9879683 106.999688,60.990547 C106.939902,61.0219589 106.879913,61.0439426 106.820031,61.0659514 C106.355389,61.2618887 105.888177,61.4371549 105.421944,61.5929594 C88.3985192,68.1467602 80.3242628,76.9161885 70.3525495,90.6906738 C60.0774843,104.884196 54.9399518,119.643717 54.9399518,134.969238 C54.9399518,138.278158 55.4624127,140.716309 56.5073346,142.283691 C57.2039492,143.328613 57.9876406,143.851074 58.8584088,143.851074 C59.7291771,143.851074 61.0353294,143.241536 62.7768659,142.022461 C68.3497825,138.016927 75.4030052,136.01416 83.9365338,136.01416 C93.8632916,136.01416 102.658051,140.063232 110.320811,148.161377 C117.983572,156.259521 121.814952,165.88151 121.814952,177.027344 C121.814952,188.695638 117.417572,198.970703 108.622813,207.852539 C99.828054,216.734375 89.1611432,221.175293 76.6220807,221.175293 C61.9931745,221.175293 49.3670351,215.166992 38.7436627,203.150391 C28.1202903,191.133789 22.8086041,175.024577 22.8086041,154.822754 C22.8086041,131.312012 30.0359804,110.239421 44.490733,91.6049805 C58.2196377,73.906272 74.3541002,59.8074126 102.443135,50.4450748 C102.615406,50.3748509 102.790055,50.3058192 102.966282,50.2381719 C104.199241,49.7648833 105.420135,49.3936487 106.596148,49.1227802 L107,49 Z M233.000381,49.033238 C237.792099,48.01429 241.761022,48.6892564 242.625294,50.9407629 C243.72393,53.8028077 239.174473,58.3219079 233.017635,60.982801 C233.011653,60.9853863 233.00567,60.9879683 232.999688,60.990547 C232.939902,61.0219589 232.879913,61.0439426 232.820031,61.0659514 C232.355389,61.2618887 231.888177,61.4371549 231.421944,61.5929594 C214.398519,68.1467602 206.324263,76.9161885 196.352549,90.6906738 C186.077484,104.884196 180.939952,119.643717 180.939952,134.969238 C180.939952,138.278158 181.462413,140.716309 182.507335,142.283691 C183.203949,143.328613 183.987641,143.851074 184.858409,143.851074 C185.729177,143.851074 187.035329,143.241536 188.776866,142.022461 C194.349783,138.016927 201.403005,136.01416 209.936534,136.01416 C219.863292,136.01416 228.658051,140.063232 236.320811,148.161377 C243.983572,156.259521 247.814952,165.88151 247.814952,177.027344 C247.814952,188.695638 243.417572,198.970703 234.622813,207.852539 C225.828054,216.734375 215.161143,221.175293 202.622081,221.175293 C187.993174,221.175293 175.367035,215.166992 164.743663,203.150391 C154.12029,191.133789 148.808604,175.024577 148.808604,154.822754 C148.808604,131.312012 156.03598,110.239421 170.490733,91.6049805 C184.219638,73.906272 200.3541,59.8074126 228.443135,50.4450748 C228.615406,50.3748509 228.790055,50.3058192 228.966282,50.2381719 C230.199241,49.7648833 231.420135,49.3936487 232.596148,49.1227802 L233,49 Z"
                                fill="#48484A"
                                fill-rule="nonzero"
                                transform="translate(135.311778, 134.872794) scale(-1, -1) translate(-135.311778, -134.872794) "
                              ></path>
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="container">
                    <div class="row align-items-center">
                      <div class="">
                        <div class="p-3">
                          <img
                            class="w-100 border-radius-md shadow img-height"
                            src="https://www.ftxinfotech.com/wp-content/uploads/2020/03/hire-meanstack-image.png"
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <div class=" me-lg-auto">
                        <h3 class="text-dark source-serif-4 text-normal">
                          Web Apps - MERN/MEAN Stack
                        </h3>
                        <p class="my-4">
                          <i>
                            "We empower businesses with innovative tech
                            solutions using MERN,MEAN or Java/J2EE. We deliver
                            high-quality software to enhance efficiency, drive
                            growth and help clients achieve their goals."
                          </i>
                        </p>
                        <div class="w-25 ms-auto opacity-2 mt-n8">
                          <svg
                            width="110px"
                            height="110px"
                            viewBox="0 0 270 270"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xlink="http://www.w3.org/1999/xlink"
                          >
                            <title>quote-down</title>
                            <g
                              stroke="none"
                              stroke-width="1"
                              fill="none"
                              fill-rule="evenodd"
                            >
                              <path
                                d="M107.000381,49.033238 C111.792099,48.01429 115.761022,48.6892564 116.625294,50.9407629 C117.72393,53.8028077 113.174473,58.3219079 107.017635,60.982801 C107.011653,60.9853863 107.00567,60.9879683 106.999688,60.990547 C106.939902,61.0219589 106.879913,61.0439426 106.820031,61.0659514 C106.355389,61.2618887 105.888177,61.4371549 105.421944,61.5929594 C88.3985192,68.1467602 80.3242628,76.9161885 70.3525495,90.6906738 C60.0774843,104.884196 54.9399518,119.643717 54.9399518,134.969238 C54.9399518,138.278158 55.4624127,140.716309 56.5073346,142.283691 C57.2039492,143.328613 57.9876406,143.851074 58.8584088,143.851074 C59.7291771,143.851074 61.0353294,143.241536 62.7768659,142.022461 C68.3497825,138.016927 75.4030052,136.01416 83.9365338,136.01416 C93.8632916,136.01416 102.658051,140.063232 110.320811,148.161377 C117.983572,156.259521 121.814952,165.88151 121.814952,177.027344 C121.814952,188.695638 117.417572,198.970703 108.622813,207.852539 C99.828054,216.734375 89.1611432,221.175293 76.6220807,221.175293 C61.9931745,221.175293 49.3670351,215.166992 38.7436627,203.150391 C28.1202903,191.133789 22.8086041,175.024577 22.8086041,154.822754 C22.8086041,131.312012 30.0359804,110.239421 44.490733,91.6049805 C58.2196377,73.906272 74.3541002,59.8074126 102.443135,50.4450748 C102.615406,50.3748509 102.790055,50.3058192 102.966282,50.2381719 C104.199241,49.7648833 105.420135,49.3936487 106.596148,49.1227802 L107,49 Z M233.000381,49.033238 C237.792099,48.01429 241.761022,48.6892564 242.625294,50.9407629 C243.72393,53.8028077 239.174473,58.3219079 233.017635,60.982801 C233.011653,60.9853863 233.00567,60.9879683 232.999688,60.990547 C232.939902,61.0219589 232.879913,61.0439426 232.820031,61.0659514 C232.355389,61.2618887 231.888177,61.4371549 231.421944,61.5929594 C214.398519,68.1467602 206.324263,76.9161885 196.352549,90.6906738 C186.077484,104.884196 180.939952,119.643717 180.939952,134.969238 C180.939952,138.278158 181.462413,140.716309 182.507335,142.283691 C183.203949,143.328613 183.987641,143.851074 184.858409,143.851074 C185.729177,143.851074 187.035329,143.241536 188.776866,142.022461 C194.349783,138.016927 201.403005,136.01416 209.936534,136.01416 C219.863292,136.01416 228.658051,140.063232 236.320811,148.161377 C243.983572,156.259521 247.814952,165.88151 247.814952,177.027344 C247.814952,188.695638 243.417572,198.970703 234.622813,207.852539 C225.828054,216.734375 215.161143,221.175293 202.622081,221.175293 C187.993174,221.175293 175.367035,215.166992 164.743663,203.150391 C154.12029,191.133789 148.808604,175.024577 148.808604,154.822754 C148.808604,131.312012 156.03598,110.239421 170.490733,91.6049805 C184.219638,73.906272 200.3541,59.8074126 228.443135,50.4450748 C228.615406,50.3748509 228.790055,50.3058192 228.966282,50.2381719 C230.199241,49.7648833 231.420135,49.3936487 232.596148,49.1227802 L233,49 Z"
                                fill="#48484A"
                                fill-rule="nonzero"
                                transform="translate(135.311778, 134.872794) scale(-1, -1) translate(-135.311778, -134.872794) "
                              ></path>
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="container">
                    <div class="row align-items-center">
                      <div class="">
                        <div class="p-3">
                          <img
                            class="w-100 border-radius-md shadow img-height"
                            src="https://www.imaginetventures.com/wp-content/uploads/2023/09/flutter-app.png"
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <div class=" me-lg-auto">
                        <h3 class="text-dark source-serif-4 text-normal">
                          Mobile Apps with Flutter / Android / iOS
                        </h3>
                        <p class="my-4">
                          <i>
                            "We deliver high-quality, cross-platform Flutter
                            mobile solutions, providing seamless user
                            experiences and helping businesses achieve their
                            objectives through cutting-edge technology. We have
                            expertise in delivering the native mobile apps using
                            Android and iOS."
                          </i>
                        </p>
                        <div class="w-25 ms-auto opacity-2 mt-n8">
                          <svg
                            width="110px"
                            height="110px"
                            viewBox="0 0 270 270"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xlink="http://www.w3.org/1999/xlink"
                          >
                            <title>quote-down</title>
                            <g
                              stroke="none"
                              stroke-width="1"
                              fill="none"
                              fill-rule="evenodd"
                            >
                              <path
                                d="M107.000381,49.033238 C111.792099,48.01429 115.761022,48.6892564 116.625294,50.9407629 C117.72393,53.8028077 113.174473,58.3219079 107.017635,60.982801 C107.011653,60.9853863 107.00567,60.9879683 106.999688,60.990547 C106.939902,61.0219589 106.879913,61.0439426 106.820031,61.0659514 C106.355389,61.2618887 105.888177,61.4371549 105.421944,61.5929594 C88.3985192,68.1467602 80.3242628,76.9161885 70.3525495,90.6906738 C60.0774843,104.884196 54.9399518,119.643717 54.9399518,134.969238 C54.9399518,138.278158 55.4624127,140.716309 56.5073346,142.283691 C57.2039492,143.328613 57.9876406,143.851074 58.8584088,143.851074 C59.7291771,143.851074 61.0353294,143.241536 62.7768659,142.022461 C68.3497825,138.016927 75.4030052,136.01416 83.9365338,136.01416 C93.8632916,136.01416 102.658051,140.063232 110.320811,148.161377 C117.983572,156.259521 121.814952,165.88151 121.814952,177.027344 C121.814952,188.695638 117.417572,198.970703 108.622813,207.852539 C99.828054,216.734375 89.1611432,221.175293 76.6220807,221.175293 C61.9931745,221.175293 49.3670351,215.166992 38.7436627,203.150391 C28.1202903,191.133789 22.8086041,175.024577 22.8086041,154.822754 C22.8086041,131.312012 30.0359804,110.239421 44.490733,91.6049805 C58.2196377,73.906272 74.3541002,59.8074126 102.443135,50.4450748 C102.615406,50.3748509 102.790055,50.3058192 102.966282,50.2381719 C104.199241,49.7648833 105.420135,49.3936487 106.596148,49.1227802 L107,49 Z M233.000381,49.033238 C237.792099,48.01429 241.761022,48.6892564 242.625294,50.9407629 C243.72393,53.8028077 239.174473,58.3219079 233.017635,60.982801 C233.011653,60.9853863 233.00567,60.9879683 232.999688,60.990547 C232.939902,61.0219589 232.879913,61.0439426 232.820031,61.0659514 C232.355389,61.2618887 231.888177,61.4371549 231.421944,61.5929594 C214.398519,68.1467602 206.324263,76.9161885 196.352549,90.6906738 C186.077484,104.884196 180.939952,119.643717 180.939952,134.969238 C180.939952,138.278158 181.462413,140.716309 182.507335,142.283691 C183.203949,143.328613 183.987641,143.851074 184.858409,143.851074 C185.729177,143.851074 187.035329,143.241536 188.776866,142.022461 C194.349783,138.016927 201.403005,136.01416 209.936534,136.01416 C219.863292,136.01416 228.658051,140.063232 236.320811,148.161377 C243.983572,156.259521 247.814952,165.88151 247.814952,177.027344 C247.814952,188.695638 243.417572,198.970703 234.622813,207.852539 C225.828054,216.734375 215.161143,221.175293 202.622081,221.175293 C187.993174,221.175293 175.367035,215.166992 164.743663,203.150391 C154.12029,191.133789 148.808604,175.024577 148.808604,154.822754 C148.808604,131.312012 156.03598,110.239421 170.490733,91.6049805 C184.219638,73.906272 200.3541,59.8074126 228.443135,50.4450748 C228.615406,50.3748509 228.790055,50.3058192 228.966282,50.2381719 C230.199241,49.7648833 231.420135,49.3936487 232.596148,49.1227802 L233,49 Z"
                                fill="#48484A"
                                fill-rule="nonzero"
                                transform="translate(135.311778, 134.872794) scale(-1, -1) translate(-135.311778, -134.872794) "
                              ></path>
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="min-vh-65 position-absolute w-100 top-0">
                <a
                  class="carousel-control-prev text-dark text-lg"
                  href="#carousel-testimonial-pricing"
                  role="button"
                  data-bs-slide="prev"
                >
                  <i class="fas fa-chevron-left"></i>
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  class="carousel-control-next text-dark text-lg"
                  href="#carousel-testimonial-pricing"
                  role="button"
                  data-bs-slide="next"
                >
                  <i class="fas fa-chevron-right"></i>
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
      <MobileFooter/>
    </div>
  );
};

export default MobileLandingPage;
