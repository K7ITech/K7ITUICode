import React from "react";
import Mobile from "./Mobile/Mobile";
import { FaBook, FaHeartbeat, FaHospital, FaShoppingCart, FaTruck } from "react-icons/fa";
import { FaUniversalAccess } from "react-icons/fa6";


const LandingPage = () => {
  return (
    <div>
      <div className="display">
        <header class="header-rounded-images mb-0">
          <div class="page-header2 min-vh-95">
            <video
              playsinline="playsinline"
              autoplay="autoplay"
              muted="muted"
              loop="loop"
              loading="lazy"
              className="position-absolute vid-fit fixed-top ms-auto w-100 h-100 z-index-0 "
            >
              <source src="../../assets/Videos/landing.mp4" type="video/mp4" />
            </video>
            <div>
              <div class="row">
                <div class="col-lg-5 d-flex">
                  <div class=" text-md-start px-sm-5  mt-sm-4 py-sm-5">
                    <img
                      src="./assets/img/logo.png"
                      className="w-50 fadeIn2 fadeInBottom"
                      alt=""
                    />

                    <h1 class=" text-dark source-serif-4 text-normal fadeIn1 fadeInBottom mt-4">
                      Launch your IT career with K7 Infotech
                    </h1>
                    <p class="lead mb-5 fadeIn3 fadeInBottom text-dark">
                      We provide full-cycle software development service, web
                      development, backend development, design and prototying,
                      software development, testing, development and application
                      maintenance
                    </p>
                    
                    <div class="buttons fadeIn2 fadeInBottom">
                      
                      <button type="button" class="btn bg-gradient-info">
                        Contact Us
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="position-absolute w-100 z-index-1 bottom-0 mt-n5">
              <svg
                class="waves"
                xlink="http://www.w3.org/2000/svg"
                viewBox="0 24 150 40"
                preserveAspectRatio="none"
                shape-rendering="auto"
              >
                <defs>
                  <path
                    id="gentle-wave"
                    d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                  />
                </defs>
                <g class="moving-waves">
                  <use
                    href="#gentle-wave"
                    x="48"
                    y="-1"
                    fill="rgba(255,255,255,0.40"
                  />
                  <use
                    href="#gentle-wave"
                    x="48"
                    y="3"
                    fill="rgba(255,255,255,0.35)"
                  />
                  <use
                    href="#gentle-wave"
                    x="48"
                    y="5"
                    fill="rgba(255,255,255,0.25)"
                  />
                  <use
                    href="#gentle-wave"
                    x="48"
                    y="8"
                    fill="rgba(255,255,255,0.20)"
                  />
                  <use
                    href="#gentle-wave"
                    x="48"
                    y="13"
                    fill="rgba(255,255,255,0.15)"
                  />
                  <use
                    href="#gentle-wave"
                    x="48"
                    y="16"
                    fill="rgba(255,255,255,1"
                  />
                </g>
              </svg>
            </div>
          </div>
        </header>
        <div class="container mb-4 pt-5">
          <div class="row justify-content-center">
            <h1 class="text-gradient text-dark mb-0 text-normal source-serif-4 text-center mb-4 w-50">
              Redefining software excellence with every project
            </h1>
            <p className="text-gradient text-dark mb-0 fs-5 text-normal source-serif-4 text-center mb-4">
              Driven by innovation, we craft cutting-edge solutions that empower
              businesses to thrive in the digital age.
            </p>
            <div class="col-lg-12 mx-auto text-center">
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
        <section
          class="py-7 fadeIn1 fadeInBottom"
          style={{ background: "aliceblue" }}
        >
          <div class="container">
            <div class="row mb-3">
              <div class="col-lg-6 col-md-8 order-2 order-md-2 order-lg-1">
                <div class="position-relative ms-md-5 mb-0 mb-md-5 mb-lg-0 d-none d-md-block d-lg-block d-xl-block h-75">
                  <div
                    class="bg-gradient-light w-100 h-100 border-radius-xl position-absolute"
                    alt=""
                  ></div>
                  <img
                    src="https://hearst-images.s3.amazonaws.com/getty/f72bf609847445babe66dcf1dc384cd9.jpg"
                    class="w-100 border-radius-xl mt-6 ms-7 position-absolute"
                    alt=""
                  />
                </div>
              </div>
              <div class="col-lg-5 col-md-12 ms-auto order-1 order-md-1 order-lg-1">
                <div class="p-3 pt-0">
                  <div class="icon icon-shape bg-gradient-info rounded-circle shadow text-center mb-0">
                    <i class="ni ni-building"></i>
                  </div>
                  <h2 class="text-gradient text-info mb-0 text-normal font-monospace mb-4">
                    About Us
                  </h2>
                  <b className="fs-5 text-dark text-normal">
                    K7 Infotech where innovation meets excellence in software
                    solutions. Established with a passion for harnessing
                    technology to drive business success, we specialize in
                    developing bespoke software that transforms ideas into
                    reality. Our dedicated team of tech enthusiasts and industry
                    experts collaborates seamlessly to deliver cutting-edge
                    applications tailored to meet the unique needs of our
                    clients across various sectors.
                  </b>
                  <div></div>
                </div>
                <a href="/Aboutus" class="text-primary icon-move-right">
                  More about us
                  <i class="fas fa-arrow-right text-sm ms-1"></i>
                </a>
              </div>
            </div>
          </div>
        </section>
        <div>
          <section class="container py-7 position-relative">
            <div class="row text-center justify-content-center pt-4">
              <div class="col-lg-10">
                <span class="badge rounded-pill badge-primary mb-2">
                  What We Do
                </span>
                <h2 className="source-serif-4 text-normal text-black">
                  Our Business Lines
                </h2>
                <p className="text-gradient text-dark mb-0 fs-5 text-normal source-serif-4 text-center mb-4">
                  Empowering businesses through transformative software
                  solutions.
                </p>
              </div>
            </div>
            <div
              id="carousel-testimonials"
              class="carousel slide carousel-team pt-3"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="container">
                    <div class="row align-items-center">
                      <div class="col-md-5 me-lg-auto position-relative">
                        <h1 class="text-dark display-3 font-weight-bolder fadeIn2 source-serif-4 text-normal fadeInBottom">
                          Banking
                        </h1>
                        <p class="my-4 lead text-dark fadeIn2 fadeInBottom">
                          Banking is moving beyond banks. As banking services
                          become embedded in other sectors, firms are pushing
                          their traditional boundaries to build cross-industry
                          ecosystems and create value at every stage of the
                          customer journey.
                        </p>
                        <a
                          href="/Industries"
                          class="text-primary icon-move-right "
                        >
                          Read More
                          <i class="fas fa-arrow-right text-sm ms-1"></i>
                        </a>
                      </div>
                      <div class="col-md-5 ms-lg-auto">
                        <div class="p-3">
                          <img
                            class="w-100 border-radius-md max-height-600 fadeIn2 fadeInBottom img-fit"
                            src="https://www.shutterstock.com/image-photo/vertical-view-happy-businessman-formalwear-600nw-1800744955.jpg"
                            alt="First slide"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="container">
                    <div class="row align-items-center">
                      <div class="col-md-5 me-lg-auto position-relative">
                        <h1 class="text-dark display-3 font-weight-bolder fadeIn2 source-serif-4 text-normal fadeInBottom">
                          Health Care
                        </h1>
                        <p class="my-4 lead text-dark fadeIn2 fadeInBottom">
                          Patients seek high-quality care services anytime,
                          anywhere, and at affordable costs. This calls for a
                          connected, always-on, patient-centric delivery model,
                          which is driving healthcare players to rewire their
                          operations and build cross-industry ecosystems.
                        </p>
                        <a
                          href="/Industries"
                          class="text-primary icon-move-right "
                        >
                          Read More
                          <i class="fas fa-arrow-right text-sm ms-1"></i>
                        </a>
                      </div>
                      <div class="col-md-5 ms-lg-auto">
                        <div class="p-3">
                          <img
                            class="w-100 border-radius-md max-height-600 fadeIn2 fadeInBottom img-fit"
                            src="https://www.shutterstock.com/image-photo/serious-caring-pediatrician-woman-white-600nw-2261002251.jpg"
                            alt="Second slide"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="container">
                    <div class="row align-items-center">
                      <div class="col-md-5 me-lg-auto position-relative">
                        <h1 class="text-dark display-3 font-weight-bolder fadeIn2 source-serif-4 text-normal fadeInBottom">
                          Education
                        </h1>
                        <p class="my-4 lead text-dark fadeIn2 fadeInBottom">
                          The 21st century brought about a revolution in the
                          education industry, with the internet as an instant
                          and always-on source of learning. Market disruptions
                          today have amplified the need for learning technology
                          solutions for blended learning experiences.
                        </p>
                        <a
                          href="/Industries"
                          class="text-primary icon-move-right "
                        >
                          Read More
                          <i class="fas fa-arrow-right text-sm ms-1"></i>
                        </a>
                      </div>
                      <div class="col-md-5 ms-lg-auto">
                        <div class="p-3">
                          <img
                            class="w-100 border-radius-md max-height-600 fadeIn2 fadeInBottom img-fit"
                            src="https://media.istockphoto.com/id/638237036/photo/stack-of-hands-symbolizing-trust-and-cooperation.jpg?s=612x612&w=0&k=20&c=sj0zbFE0B0GhH9cxP6QDPVAYlBznNvQz6AiAwaeAi04="
                            alt="Second slide"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="container">
                    <div class="row align-items-center">
                      <div class="col-md-5 me-lg-auto position-relative">
                        <h1 class="text-dark display-3 font-weight-bolder fadeIn2 source-serif-4 text-normal fadeInBottom">
                          Travel and Logistics
                        </h1>
                        <p class="my-4 lead text-dark fadeIn2 fadeInBottom">
                          Whether they are transporting people or parcels,
                          travel and logistics companies are building robust
                          ecosystems that facilitate safe, flexible, and
                          convenient journeys for their customers. By building
                          partnerships and developing digital marketplaces
                          supported by technology platforms, they are creating
                          innovative and personalized offerings.
                        </p>
                        <a
                          href="/Industries"
                          class="text-primary icon-move-right "
                        >
                          Read More
                          <i class="fas fa-arrow-right text-sm ms-1"></i>
                        </a>
                      </div>
                      <div class="col-md-5 ms-lg-auto">
                        <div class="p-3">
                          <img
                            class="w-100 border-radius-md max-height-600 fadeIn2 fadeInBottom img-fit"
                            src="https://media.istockphoto.com/id/1303374978/photo/airplane-flying-above-container-port.jpg?s=612x612&w=0&k=20&c=-qMae6sKSkWmmoa4-IjSKpzEXky_sLXf-BdUvhjyMHI="
                            alt="Second slide"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="position-relative mt-n6">
                <a
                  class="carousel-control-prev text-dark position-absolute bottom-0 start-0"
                  href="#carousel-testimonials"
                  role="button"
                  data-bs-slide="prev"
                >
                  <i class="fas fa-2x fa-chevron-left position-absolute start-0 ms-3"></i>
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  class="carousel-control-next text-dark position-absolute bottom-0 start-0 ms-4"
                  href="#carousel-testimonials"
                  role="button"
                  data-bs-slide="next"
                >
                  <i class="fas fa-2x fa-chevron-right"></i>
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>
          </section>
        </div>
        <section class="features-3 py-7 fadeIn1 fadeInBottom">
          <div class="container-fluid w-80">
            <div class="row text-center justify-content-center pt-4">
              <div class="col-lg-10">
                <span class="badge rounded-pill badge-primary mb-2">
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
            <div class="row mt-5">
              <div class="col-lg-4 mb-lg-0 mb-4">
                <a href="/Services">
                  <div class="card card-background move-on-hover mb-4">
                    <div
                      class="full-background"
                      style={{
                        backgroundImage:
                          "url('https://miro.medium.com/v2/resize:fit:1400/0*2bkSLC_swcn5KX8A')",
                      }}
                    ></div>

                    <div class="card-body pt-12">
                      <h4 class="text-white source-serif-4 text-normal fw-bold">
                        UI/UX Designing
                      </h4>
                      <p>
                        We excel in crafting intuitive UI/UX designs that
                        elevate user experiences. Our team blends creativity
                        with functionality to deliver visually stunning and
                        user-friendly designs that captivate and engage
                        audiences effectively.
                      </p>
                    </div>
                  </div>
                </a>
                <a href="/Services">
                  <div class="card card-background move-on-hover">
                    <div
                      class="full-background"
                      style={{
                        backgroundImage:
                          "url('https://wallpaperaccess.com/full/2648921.jpg')",
                      }}
                    ></div>
                    <div class="card-body pt-12">
                      <h4 class="text-white source-serif-4 text-normal fw-bold">
                        Devops & Cloud Services
                      </h4>
                      <p>
                        We committed to help organizations to accelerate their
                        digital transformation journey by adopting modern DevOps
                        practices and harnessing the power of cloud computing
                        technologies.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div class="col-lg-4 mb-lg-0 mb-4">
                <a href="/Services">
                  <div class="card card-background move-on-hover mb-4">
                    <div
                      class="full-background"
                      style={{
                        backgroundImage:
                          "url('https://img.freepik.com/premium-photo/ui-ux-design-8k-dynamic-background-uses-gradient-color_579873-18902.jpg')",
                      }}
                    ></div>
                    <div class="card-body pt-12">
                      <h4 class="text-white source-serif-4 text-normal fw-bold">
                        Web Apps - MERN/MEAN Stack
                      </h4>
                      <p>
                        We empower businesses with innovative tech solutions
                        using MERN,MEAN or Java/J2EE. We deliver high-quality
                        software to enhance efficiency, drive growth and help
                        clients achieve their goals.
                      </p>
                    </div>
                  </div>
                </a>
                <a href="/Services">
                  <div class="card card-background move-on-hover">
                    <div
                      class="full-background"
                      style={{
                        backgroundImage:
                          "url('https://i.pinimg.com/736x/0c/c1/cd/0cc1cd035790f236b7ae0cc43b1312e2.jpg')",
                      }}
                    ></div>
                    <div class="card-body pt-12">
                      <h4 class="text-white source-serif-4 text-normal fw-bold">
                        Mobile Apps with Flutter / Android / iOS
                      </h4>
                      <p>
                        We deliver high-quality, cross-platform Flutter mobile
                        solutions, providing seamless user experiences and
                        helping businesses achieve their objectives through
                        cutting-edge technology. We have expertise in delivering
                        the native mobile apps using Android and iOS.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div class="col-lg-4">
                <a href="/Services">
                  <div class="card card-background move-on-hover mb-4">
                    <div
                      class="full-background"
                      style={{
                        backgroundImage:
                          "url('https://sboost.ma/wp-content/uploads/2021/12/depositphotos_75664409-stock-photo-programming-concept.webp')",
                      }}
                    ></div>
                    <div class="card-body pt-12">
                      <h4 class="text-white source-serif-4 text-normal fw-bold">
                        Web Apps - JAVA/J2EE
                      </h4>
                      <p>
                        By integrating blockchain, we offer decentralized,
                        secure and transparent solutions that redefine
                        operations, from smart contracts to supply chain
                        optimizations, fostering trust and integrity in every
                        transaction.
                      </p>
                    </div>
                  </div>
                </a>
                <a href="/Services">
                  <div class="card card-background move-on-hover">
                    <div
                      class="full-background"
                      style={{
                        backgroundImage:
                          "url('https://cdn.windowsreport.com/wp-content/uploads/2017/07/Best-artificial-intelligence-antivirus-programs.jpg')",
                      }}
                    ></div>
                    <div class="card-body pt-12">
                      <h4 class="text-white source-serif-4 text-normal fw-bold">
                        AI & ML Technologies
                      </h4>
                      <p>
                        We leverage artificial intelligence and machine learning
                        algorithms to create intelligent systems that predict,
                        adapt and respond, unlocking new dimensions of
                        efficiency and insights for businesses.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <div class="container-fluid mt-sm-2 fadeIn1 fadeInBottom">
          <div
            class="page-header min-vh-50 my-sm-3 mb-5 border-radius-xl"
            style={{
              backgroundImage:
                "url('https://images6.alphacoders.com/819/819282.png')",
            }}
          >
            <span class="mask bg-gradient-dark"></span>
            <div class="container ">
              <div class="row">
                <div class="col-lg-6 ms-lg-5 mt-5">
                  <h1 class="text-white">
                    We’re Always Try To Dedicated Good Service
                  </h1>
                  <p class="lead text-white opacity-8">
                    K7InfoTech is a provider of IT consulting and software
                    development services. We have helped organizations and
                    companies improve business performance.
                  </p>
                  <div class=" justify-content-start d-flex gap-4 mt-4 mb-4">
                    <div>
                      <div class="p-3 text-center">
                        <div class="icon icon-shape icon-md bg-gradient-danger shadow-danger mx-auto rounded-circle">
                          <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                          
                        </div>
                        <p class="mt-4 text-white text-normal">E-Commerce</p>
                      </div>
                    </div>
                    <div>
                      <div class="p-3 text-center">
                        <div class="icon icon-shape icon-md bg-gradient-danger shadow-danger mx-auto rounded-circle">
                          <i class="fa fa-heartbeat" aria-hidden="true"></i>
                        
                        </div>
                        <p class="mt-4 text-white text-normal">Health Care</p>
                      </div>
                    </div>
                    <div>
                      <div class="p-3 text-center">
                        <div class="icon icon-shape icon-md bg-gradient-danger shadow-danger mx-auto rounded-circle">
                          <i class="fa fa-book" aria-hidden="true"></i>
                          
                        </div>
                        <p class="mt-4 text-white text-normal">Education</p>
                      </div>
                    </div>
                    <div>
                      <div class="p-3 text-center">
                        <div class="icon icon-shape icon-md bg-gradient-danger shadow-danger mx-auto rounded-circle">
                          <i class="fa fa-university" aria-hidden="true"></i>
                          
                        </div>
                        <p class="mt-4 text-white text-normal">Banking</p>
                      </div>
                    </div>
                    <div>
                      <div class="p-3 text-center">
                        <div class="icon icon-shape icon-md bg-gradient-danger shadow-danger mx-auto rounded-circle">
                          <i class="fa fa-truck" aria-hidden="true"></i>
                        
                        </div>
                        <p class="mt-4 text-white text-normal">Retail</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 ms-lg-12 text-end justify-content-end">
                  <img class="w-100 mt-2" src="../../assets/img/phones.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="py-5 fadeIn1 fadeInBottom">
          <div class="container">
            <div class="row">
              <div class="col-md-8 mx-auto text-center">
                <h4 class="text-gradient text-primary text-border font-monospace">
                  TESTIMONIALS
                </h4>
              </div>
            </div>
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="row container mt-lg-5 mt-4">
                    <div class="col-lg-4 col-sm-6 mb-4">
                      <div class="card card-body">
                        <div class="row">
                          <div class="col-lg-9">
                            <h5 class="mb-2">Ramesh </h5>
                            <small>
                              <i
                                class="fa fa-quote-left"
                                aria-hidden="true"
                              ></i>{" "}
                              Lorem ipsum dolor sit amet consectetur,
                              adipisicing elit. Modi architecto voluptates,
                              officiis harum impedit molestias dolorum dolores.{" "}
                              <i
                                class="fa fa-quote-right"
                                aria-hidden="true"
                              ></i>
                            </small>
                          </div>
                          <div class="col-lg-3 text-end my-auto">
                            <img
                              class="avatar avatar-xl"
                              src="../../assets/img/team-1.jpg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-4 col-sm-6 mb-4">
                      <div class="card card-body">
                        <div class="row">
                          <div class="col-lg-9">
                            <h5 class="mb-2">Kranthi Kumar</h5>
                            <small>
                              <i
                                class="fa fa-quote-left"
                                aria-hidden="true"
                              ></i>{" "}
                              Lorem ipsum dolor sit amet consectetur,
                              adipisicing elit. Modi architecto voluptates,
                              officiis harum impedit molestias dolorum dolores.{" "}
                              <i
                                class="fa fa-quote-right"
                                aria-hidden="true"
                              ></i>
                            </small>
                            <br />
                          </div>
                          <div class="col-lg-3 text-end my-auto">
                            <img
                              class="avatar avatar-xl"
                              src="../../assets/img/team-2.jpg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-4 col-sm-6 mb-4">
                      <div class="card card-body">
                        <div class="row">
                          <div class="col-lg-9">
                            <h5 class="mb-2">Vijay Durga</h5>
                            <small>
                              <i
                                class="fa fa-quote-left"
                                aria-hidden="true"
                              ></i>{" "}
                              Lorem ipsum dolor sit amet consectetur,
                              adipisicing elit. Modi architecto voluptates,
                              officiis harum impedit molestias dolorum dolores.{" "}
                              <i
                                class="fa fa-quote-right"
                                aria-hidden="true"
                              ></i>
                            </small>
                            <br />
                          </div>
                          <div class="col-lg-3 text-end my-auto">
                            <img
                              class="avatar avatar-xl"
                              src="../../assets/img/team-3.jpg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="row container mt-lg-5 mt-4">
                    <div class="col-lg-4 col-sm-6 mb-4">
                      <div class="card card-body">
                        <div class="row">
                          <div class="col-lg-9">
                            <h5 class="mb-2">Maheshwari</h5>
                            <small>
                              <i
                                class="fa fa-quote-left"
                                aria-hidden="true"
                              ></i>{" "}
                              Lorem ipsum dolor sit amet consectetur,
                              adipisicing elit. Modi architecto voluptates,
                              officiis harum impedit molestias dolorum dolores.{" "}
                              <i
                                class="fa fa-quote-right"
                                aria-hidden="true"
                              ></i>
                            </small>
                          </div>
                          <div class="col-lg-3 text-end my-auto">
                            <img
                              class="avatar avatar-xl"
                              src="../../assets/img/team-4.jpg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-4 col-sm-6 mb-4">
                      <div class="card card-body">
                        <div class="row">
                          <div class="col-lg-9">
                            <h5 class="mb-2">Srinivasa Rao</h5>
                            <small>
                              <i
                                class="fa fa-quote-left"
                                aria-hidden="true"
                              ></i>{" "}
                              Lorem ipsum dolor sit amet consectetur,
                              adipisicing elit. Modi architecto voluptates,
                              officiis harum impedit molestias dolorum dolores.{" "}
                              <i
                                class="fa fa-quote-right"
                                aria-hidden="true"
                              ></i>
                            </small>
                            <br />
                          </div>
                          <div class="col-lg-3 text-end my-auto">
                            <img
                              class="avatar avatar-xl"
                              src="../../assets/img/team-5.jpg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-4 col-sm-6 mb-4">
                      <div class="card card-body">
                        <div class="row">
                          <div class="col-lg-9">
                            <h5 class="mb-2">Venkatesh</h5>
                            <small>
                              <i
                                class="fa fa-quote-left"
                                aria-hidden="true"
                              ></i>{" "}
                              Lorem ipsum dolor sit amet consectetur,
                              adipisicing elit. Modi architecto voluptates,
                              officiis harum impedit molestias dolorum dolores.{" "}
                              <i
                                class="fa fa-quote-right"
                                aria-hidden="true"
                              ></i>
                            </small>
                            <br />
                          </div>
                          <div class="col-lg-3 text-end my-auto">
                            <img
                              class="avatar avatar-xl"
                              src="../../assets/img/team-1.jpg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="row container mt-lg-5 mt-4">
                    <div class="col-lg-4 col-sm-6 mb-4">
                      <div class="card card-body">
                        <div class="row">
                          <div class="col-lg-9">
                            <h5 class="mb-2">Lakshmi Narayanan</h5>
                            <small>
                              <i
                                class="fa fa-quote-left"
                                aria-hidden="true"
                              ></i>{" "}
                              Lorem ipsum dolor sit amet consectetur,
                              adipisicing elit. Modi architecto voluptates,
                              officiis harum impedit molestias dolorum dolores.{" "}
                              <i
                                class="fa fa-quote-right"
                                aria-hidden="true"
                              ></i>
                            </small>
                          </div>
                          <div class="col-lg-3 text-end my-auto">
                            <img
                              class="avatar avatar-xl"
                              src="../../assets/img/team-2.jpg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-4 col-sm-6 mb-4">
                      <div class="card card-body">
                        <div class="row">
                          <div class="col-lg-9">
                            <h5 class="mb-2">Sudharshan Kumar</h5>
                            <small>
                              <i
                                class="fa fa-quote-left"
                                aria-hidden="true"
                              ></i>{" "}
                              Lorem ipsum dolor sit amet consectetur,
                              adipisicing elit. Modi architecto voluptates,
                              officiis harum impedit molestias dolorum dolores.{" "}
                              <i
                                class="fa fa-quote-right"
                                aria-hidden="true"
                              ></i>
                            </small>
                            <br />
                          </div>
                          <div class="col-lg-3 text-end my-auto">
                            <img
                              class="avatar avatar-xl"
                              src="../../assets/img/team-3.jpg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-4 col-sm-6 mb-4">
                      <div class="card card-body">
                        <div class="row">
                          <div class="col-lg-9">
                            <h5 class="mb-2">Sunill Kumar</h5>
                            <small>
                              <i
                                class="fa fa-quote-left"
                                aria-hidden="true"
                              ></i>{" "}
                              Lorem ipsum dolor sit amet consectetur,
                              adipisicing elit. Modi architecto voluptates,
                              officiis harum impedit molestias dolorum dolores.{" "}
                              <i
                                class="fa fa-quote-right"
                                aria-hidden="true"
                              ></i>
                            </small>
                            <br />
                          </div>
                          <div class="col-lg-3 text-end my-auto">
                            <img
                              class="avatar avatar-xl"
                              src="../../assets/img/team-4.jpg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </section>
      </div>
      <div className="display-full">
        <Mobile />
      </div>
    </div>
  );
};

export default LandingPage;
