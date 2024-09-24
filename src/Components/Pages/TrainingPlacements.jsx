import React from "react";

const TrainingPlacements = () => {
  
  const handleMouseEnter = (e) => {
    const youtubeIcon = e.currentTarget.querySelector('.youtube-icon');
    youtubeIcon.style.display = 'block';
  };

  const handleMouseLeave = (e) => {
    const youtubeIcon = e.currentTarget.querySelector('.youtube-icon');
    youtubeIcon.style.display = 'none';
  };

  return (
    // <div>
    //   <header>
    //     <div class="page-header align-items-start min-vh-100">
    //     <video
    //           playsinline="playsinline"
    //           autoplay="autoplay"
    //           muted="muted"
    //           loop="loop"
    //           loading="lazy"
    //         >
    //           <source src="../../assets/Videos/commingsoon.mp4" type="video/mp4" />
    //         </video>
    //         <div class="container my-auto">
    //   <div class="row">
    //     <div class="col-lg-12 m-auto text-center">
    //       <h1 class="display-1 text-bolder text-white">Coming Soon</h1>
    //       <h2 class="text-white">Exciting Updates Are on the Horizon – Stay Tuned!</h2>
    //       <p class="lead text-white">Indicating a new website or feature that will be launched shortly.</p>

    //     </div>
    //   </div>
    // </div>
    //     </div>
    //   </header>
    // </div>
    <div

      className="  bg-gradient-to-b from-black via-black to-sky-800 pt-7"
    >

      <div class="container w-80">
        <div class="row">

          <div class="col-lg-8 col-10 d-flex justify-content-center flex-column mx-auto text-lg-start text-center ">
            <h2 class="mb-0 mt-lg-0 mt-4 text-gradient text-info">
              Building skills, Shaping futures
            </h2>
            <p class="lead mt-4">
              We turn ambition into achievement. Our cutting-edge training programs are designed to give you the skills that top employers are looking for, while our dynamic placement services connect you with exciting career opportunities. Whether you're aiming to enhance your expertise or land your dream job, we’re here to guide you every step of the way. Start your journey to career success with us today!{" "}
            </p>
            <p class="lead">

            </p>
          </div>
          <div class="col-lg-4 col-6 mx-lg-0 mx-auto px-lg-0 px-md-0 my-auto">
            <img
              class="w-100 border-radius-lg "
              src="../../assets/img/logo.png"
              alt="heftibaimg"
            />
          </div>
        </div>

      </div>

      <div class="container w-80">
        <div class="row">
          <div class="col-lg-4 col-6 mx-lg-0 mx-auto px-lg-0 px-md-0 my-auto">
            <img
              class="w-80 border-radius-lg shadow"
              src="../../assets/img/toa-heftiba.jpg"
              alt="heftibaimg"
            />
          </div>
          <div class="col-lg-8 col-10 d-flex justify-content-center flex-column mx-auto text-lg-start text-center">
            <h2 class="mb-0 mt-lg-0 mt-4 text-gradient text-info">
              About the courses
            </h2>
            <p class="lead mt-4 text-black">
              <b> Pack 1 :</b> JAVA BACKEND DEVELOPER
            </p>
            <p class="lead text-black">
              <b> Pack 2 :</b> REALTIME TOOLS
            </p>
            <p class="lead text-black ">
              <b> Pack 3 :</b> WEB DEVELOPMENT COURSES REACTJS
            </p>
            <p class="lead text-black">
              <b> Pack 4 :</b> JAVA FULL STACK DEVELOPER COURSE (COMBO PACK)
            </p>
            <p class="lead text-black">
              <b> Pack 5 :</b> JAVA AUTOMATION TESTING
            </p>
            <p class="lead text-black">
              <b> Pack 6 :</b> AWS CICD PIPELINES (DEVOPS)
            </p>

          </div>
        </div>
      </div>
      <div className="py-6">
        <section class="features-3">
          <div class="container">
            <div class="row text-center justify-content-center">
              <div class="col-lg-8">
                <span class="badge rounded-pill badge-primary mb-2 text-2xl ">
                  Courses Offering
                </span>
                <h2 className="source-serif-4 text-normal font-weight-light">
                  "It's not just course, it's an experience
                </h2>
              </div>
            </div>
            <div class="row mt-5 ">
              <div class="col-lg-4 mb-lg-0 mb-4 ">
                <div class="card ">
                  <div class="card-header p-0 position-relative mt-n4 mx-2 z-index-2 ">
                    <a class="d-block blur-shadow-image">
                      <img
                        src="../../assets/imgs/uiuximg"
                        alt="img-blur-shadow"
                        className="img-fluid shadow border-radius-lg services-images"
                        loading="lazy"
                      />
                    </a>
                  </div>
                  <div class="card-body">
                    <h4 class=" mb-0 mt-lg-0 mt-4 text-gradient text-info "><b>Pack 1 Content</b></h4>
                    <p class="text-black">
                      <b> JAVA 22 VERSION, SPRINGBOOT,SPRING JPA, MYSQL, HTML 5, JAVASCRIPT, CSS, MICROSERVICE, ECLIPSE OR STS, MAVEN
                      </b> </p>

                  </div>
                </div>
                <div class="card mt-5">
                  <div class="card-header p-0 position-relative mt-n4 mx-2 z-index-2">
                    <a class="d-block blur-shadow-image">
                      <img
                        src="./../assets/imgs/mobilecloud.jfif"
                        alt="img-blur-shadow"
                        className="img-fluid shadow border-radius-lg services-images"
                        loading="lazy"
                      />
                    </a>
                  </div>
                  <div class="card-body">
                    <h4 class=" mb-0 mt-lg-0 mt-4 text-gradient text-info "><b>Pack 4 Content</b></h4>
                    <p class="text-black">
                      <b>
                        Pack 1 + Pack 2 + Pack3


                      </b>
                    </p>
                    <div className="mt-3">
                      <button
                        class="btn btn-outline-dark btn-sm mb-0"
                        type="button"
                        name="button"
                        data-bs-toggle="modal"
                        data-bs-target="#devopsModal"
                      >
                        More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 mb-lg-0 mb-4">
                <div class="card">
                  <div class="card-header p-0 position-relative mt-n4 mx-2 z-index-2">
                    <a class="d-block blur-shadow-image">
                      <img
                        src="../../assets/imgs/advjava.jpeg"
                        alt="img-blur-shadow"
                        className="img-fluid shadow border-radius-lg services-images"
                        loading="lazy"
                      />
                    </a>
                  </div>
                  <div class="card-body">
                    <h4 class=" mb-0 mt-lg-0 mt-4 text-gradient text-info "><b>Pack 2 Content</b></h4>
                    <p class="text-black"><b>
                      GITHUB, JUNITS, SPRING, MOCKITO LOG4J-SLF4J, GRADLE, POSTMAN, INTELIJ, AGILE METHODOLOGY, SDLC, JAVA 17,21,22 FEATURES, MONGODB, DESIGN PATTERNS
                    </b> </p>

                  </div>
                </div>
                <div class="card mt-5">
                  <div class="card-header p-0 position-relative mt-n4 mx-2 z-index-2">
                    <a class="d-block blur-shadow-image">
                      <img
                        src="../../assets/imgs/advjava.jpeg"
                        alt="img-blur-shadow"
                        className="img-fluid shadow border-radius-lg services-images"
                        loading="lazy"
                      />
                    </a>
                  </div>
                  <div class="card-body">
                    <h4 class=" mb-0 mt-lg-0 mt-4 text-gradient text-info "><b>Pack 5 Content</b></h4>
                    <p class="text-black">      <b>
                      CORE JAVA, SELENIUM AUTOMATION, PAGE OBJECT MODEL DESIGN PATTERN, TESTING & BDD FRAMEWORK, MAVEN, GITHUB, ECLIPSE</b>
                    </p>

                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="card ">
                  <div class="card-header p-0 position-relative mt-n4 mx-2 z-index-2 ">
                    <a class="d-block blur-shadow-image">
                      <img
                        src="../../assets/imgs/uiuximg"
                        alt="img-blur-shadow"
                        className="img-fluid shadow border-radius-lg services-images"
                        loading="lazy"
                      />
                    </a>
                  </div>
                  <div class="card-body">
                    <h4 class=" mb-0 mt-lg-0 mt-4 text-gradient text-info "><b>Pack 3 Content</b></h4>
                    <p class="text-black">      <b>
                      HTML 5, JAVASCRIPT, CSS3, REACTJS, REALTIME PROJECT DEVELOPMENT</b>
                    </p>

                  </div>
                </div>
                <div class="card mt-5">
                  <div class="card-header p-0 position-relative mt-n4 mx-2 z-index-2">
                    <a class="d-block blur-shadow-image">
                      <img
                        src="../../assets/imgs/robot.jpg"
                        alt="img-blur-shadow"
                        className="img-fluid shadow border-radius-lg services-images"
                        loading="lazy"
                      />
                    </a>
                  </div>
                  <div class="card-body">
                    <h4 class=" mb-0 mt-lg-0 mt-4 text-gradient text-info "><b>Pack 6 Content</b></h4>
                    <p class="text-black">      <b>
                      AWS SS3 BUCKET, EC2 ECS,, CICD PIPELINES, DOCKER IMAGE</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* UI/UX Design Modal */}

        {/* Devops Modal */}
        <div
          class="modal fade"
          id="devopsModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="devopsModalLabel"
          aria-hidden="true"
        >
          <div
            class="modal-dialog modal-dialog-centered modal-xl"
            role="document"
          >
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="devopsModalLabel">
                  <b>
                    Pack 4 Content </b>
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i class="fa fa-times text-dark" aria-hidden="true"></i>
                </button>
              </div>
              <div class="modal-body">
                <div class="container-fluid">
                  <h4 class="mb-2 text-rose text-normal "><b>
                    Pack 1 + Pack2 + Pack3</b>
                  </h4>
                  <div class="row align-items-center">
                    <div class="col-md-7 mb-md-0 ">
                      <div class="col-md-12 ">
                        <div class="p-3 info-horizontal d-flex">
                          <div>
                            <h4 class=" mb-0 mt-lg-0 mt-4 text-gradient text-info "><b>Pack 1 Content</b></h4>
                            <p class="text-black">
                              <b> JAVA 22 VERSION, SPRINGBOOT,SPRING JPA, MYSQL, HTML 5, JAVASCRIPT, CSS, MICROSERVICE, ECLIPSE OR STS, MAVEN
                              </b> </p>
                          </div>
                        </div>
                        <div class="p-3 info-horizontal d-flex">
                          <div>
                            <h4 class=" mb-0 mt-lg-0 mt-4 text-gradient text-info "><b>Pack 2 Content</b></h4>
                            <p class="text-black"><b>
                              GITHUB, JUNITS, SPRING, MOCKITO LOG4J-SLF4J, GRADLE, POSTMAN, INTELIJ, AGILE METHODOLOGY, SDLC, JAVA 17,21,22 FEATURES, MONGODB, DESIGN PATTERNS
                            </b> </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-5">
                      <div class=" p-0 border-radius-lg">
                        <div class="blur-shadow-image">
                          <img
                            src="https://singlepointsol.com/assets/img/Cloud-DevOps.png"
                            alt="img-blur-shadow"
                            class="img-fluid border-radius-lg"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row align-items-center mt-4">
                    <div class="col-md-5">
                      <div class=" p-0 border-radius-lg">
                        <div class="blur-shadow-image">
                          <img
                            src="../../assets/imgs/advjava.jpeg"
                            alt="img-blur-shadow"
                            class="img-fluid border-radius-lg"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-md-7 mb-md-0 ">
                      <div class="p-3 info-horizontal d-flex">
                        <div>
                          <h4 class=" mb-0 mt-lg-0 mt-4 text-gradient text-info "><b>Pack 3 Content</b></h4>
                          <p class="text-black">      <b>
                            HTML 5, JAVASCRIPT, CSS3, REACTJS, REALTIME PROJECT DEVELOPMENT</b>
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
        {/* WebApps Modal */}
        <div
          class="modal fade"
          id="javaWebAppModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="javaWebAppModalLabel"
          aria-hidden="true"
        >
          <div
            class="modal-dialog modal-dialog-centered modal-xl"
            role="document"
          >
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="javaWebAppModalLabel">
                  Web Apps - JAVA/J2EE
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i class="fa fa-times text-dark" aria-hidden="true"></i>
                </button>
              </div>
              <div class="modal-body">
                <div class="container-fluid">
                  <div>
                    <h4 class="mb-2 text-black text-normal">
                      Java/J2EE powers robust and scalable web applications with
                      enterprise-grade reliability and performance.
                    </h4>
                  </div>
                  <div class="row align-items-center">
                    <div class="col-md-7 mb-md-0 ">
                      <div class="col-md-12 ">
                        <div class="p-3 info-horizontal d-flex">
                          <div>
                            <h5>1. Enterprise-Grade Scalability:</h5>
                            <p>
                              Java/J2EE architecture supports scalable
                              applications that handle high traffic and large
                              volumes of data reliably.
                            </p>
                          </div>
                        </div>
                        <div class="p-3 info-horizontal d-flex">
                          <div>
                            <h5>2. Security:</h5>
                            <p>
                              Built-in security features and frameworks ensure
                              robust protection against vulnerabilities and data
                              breaches.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-5">
                      <div class=" p-0 border-radius-lg">
                        <div class="blur-shadow-image">
                          <img
                            src="https://www.spec-india.com/wp-content/uploads/2022/08/Java_web_development_Banner_graphic1.png"
                            alt="img-blur-shadow"
                            class="img-fluid border-radius-lg"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row align-items-center mt-4">
                    <div class="col-md-5">
                      <div class=" p-0 border-radius-lg">
                        <div class="blur-shadow-image">
                          <img
                            src="https://d3puhl2t51lebl.cloudfront.net/uploads/2022/01/java-1.png"
                            alt="img-blur-shadow"
                            class="img-fluid border-radius-lg"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-md-7 mb-md-0 ">
                      <div class="col-md-12 ">
                        <div class="p-3 info-horizontal d-flex">
                          <div>
                            <h5>3. Rich Ecosystem:</h5>
                            <p>
                              Extensive libraries, frameworks (e.g., Spring,
                              Hibernate), and tools support rapid development and
                              maintenance of complex web applications.
                            </p>
                          </div>
                        </div>
                        <div class="p-3 info-horizontal d-flex">
                          <div>
                            <h5>4. Integration Capabilities:</h5>
                            <p>
                              Seamless integration with other enterprise systems
                              and APIs, facilitating interoperability and data
                              exchange.
                            </p>
                          </div>
                        </div>
                        <div class="p-3 info-horizontal d-flex">
                          <div>
                            <h5>5. Scalability:</h5>
                            <p>
                              Easily scale horizontally or vertically to meet
                              increasing user demands and business growth
                              requirements.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* AI & ML Technologies Modal */}
        <div
          class="modal fade"
          id="aimlModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="aimlModalLabel"
          aria-hidden="true"
        >
          <div
            class="modal-dialog modal-dialog-centered modal-xl"
            role="document"
          >
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="aimlModalLabelLabel">
                  AI & ML Technologies
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i class="fa fa-times text-dark" aria-hidden="true"></i>
                </button>
              </div>
              <div class="modal-body">
                <div class="container-fluid">
                  <div>
                    <h4 class="mb-2 text-black text-normal">
                      AI & ML technologies harness data-driven insights to
                      automate processes, predict trends, and optimize
                      decision-making.
                    </h4>
                  </div>
                  <div class="row align-items-center">
                    <div class="col-md-7 mb-md-0 ">
                      <div class="col-md-12 ">
                        <div class="p-3 info-horizontal d-flex">
                          <div>
                            <h5>1. Data-Driven Insights:</h5>
                            <p>
                              AI & ML analyze large datasets to uncover patterns,
                              trends, and correlations that drive informed
                              decision-making.
                            </p>
                          </div>
                        </div>
                        <div class="p-3 info-horizontal d-flex">
                          <div>
                            <h5>2. Automation:</h5>
                            <p>
                              Automates repetitive tasks and processes, increasing
                              efficiency and allowing human resources to focus on
                              higher-value activities.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-5">
                      <div class=" p-0 border-radius-lg">
                        <div class="blur-shadow-image">
                          <img
                            src="https://static.wixstatic.com/media/db6335_3e33423bbe1a453da55e5e50fdaaaa83~mv2.png/v1/crop/x_72,y_36,w_756,h_600/fill/w_592,h_474,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/IA%20ML%20ilustra.png"
                            alt="img-blur-shadow"
                            class="img-fluid border-radius-lg"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row align-items-center mt-4">
                    <div class="col-md-5">
                      <div class=" p-0 border-radius-lg">
                        <div class="blur-shadow-image">
                          <img
                            src="https://png.pngtree.com/png-vector/20230912/ourmid/pngtree-business-team-creating-artificial-intelligence-machine-learning-and-artificial-intelligence-concept-png-image_10027729.png"
                            alt="img-blur-shadow"
                            class="img-fluid border-radius-lg"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-md-7 mb-md-0 ">
                      <div class="col-md-12 ">
                        <div class="p-3 info-horizontal d-flex">
                          <div>
                            <h5>3. Predictive Capabilities:</h5>
                            <p>
                              Predicts outcomes and trends by learning from
                              historical data, enhancing forecasting accuracy and
                              proactive decision-making.
                            </p>
                          </div>
                        </div>
                        <div class="p-3 info-horizontal d-flex">
                          <div>
                            <h5>4. Natural Language Processing (NLP):</h5>
                            <p>
                              Enables machines to understand, interpret, and
                              generate human language, facilitating chatbots,
                              virtual assistants, and sentiment analysis.
                            </p>
                          </div>
                        </div>
                        <div class="p-3 info-horizontal d-flex">
                          <div>
                            <h5>5. Ethical Considerations:</h5>
                            <p>
                              Addresses ethical and regulatory challenges
                              surrounding AI & ML deployment, ensuring fairness,
                              transparency, and responsible use of technology.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
                OUR TRAINERS
              </h4>
            </div>
          </div>
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active ">
                <div class="row container mt-lg-5 mt-4 ">
                  <div class="col-lg-4 col-sm-6 mb-4">
                    <div class="card card-body">
                      <div class="row">
                        <div class="col-lg-9">
                          <h5 class="mb-2 text-rose ">KESHAVULU A</h5>
                          <h6>
                            <small>
                              M.Tech(CSE)
                            </small>
                            <br />
                            <b>

                              EXPERIENCE:
                            </b>
                            <br />
                            15+ Years (Realtime)
                            <br />
                            10+ Years (Training)
                            {" "}

                          </h6>
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

                  <div class="col-lg-4 col-sm-6">
                    <div class="card card-body">
                      <div class="row">
                        <div class="col-lg-9">
                          <h5 class=" text-rose">DHANYAVANI A</h5>

                          <h6>
                            <small>
                              M.Tech(PE)
                            </small>
                            <br />


                            <b>

                              EXPERIENCE:
                            </b>
                            <br />
                            12+ Years (Realtime)
                            <br />
                            9+ Years (Training)
                            {" "}

                          </h6>
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

                  <div class="col-lg-4 col-sm-6">
                    <div class="card card-body">
                      <div class="row">
                        <div class="col-lg-9">
                          <h5 class=" text-rose">LELLA VINOD G</h5>

                          <h6>
                            <small>
                              MCA
                            </small>
                            <br />


                            <b>

                              EXPERIENCE:
                            </b>
                            <br />
                            12+ Years (Realtime)
                            <br />
                            5+ Years (Training)
                            {" "}

                          </h6>
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
                  <div class="col-lg-4 col-sm-6">
                    <div class="card card-body">
                      <div class="row">
                        <div class="col-lg-9">
                          <h5 class=" text-rose">THULASI KUMAR A</h5>

                          <h6>
                            <small>
                              M.Tech(PE)
                            </small>
                            <br />


                            <b>

                              EXPERIENCE:
                            </b>
                            <br />
                            12+ Years (Realtime)
                            <br />
                            9+ Years (Training)
                            {" "}

                          </h6>
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

                  <div class="col-lg-4 col-sm-6">
                    <div class="card card-body">
                      <div class="row">
                        <div class="col-lg-9">
                          <h5 class=" text-rose">UDAY RAJ SINGH</h5>

                          <h6>
                            <small>
                              B.Tech(CSE)
                            </small>
                            <br />


                            <b>

                              EXPERIENCE:
                            </b>
                            <br />
                            16+ Years (Realtime)
                            <br />
                            10+ Years (Training)
                            {" "}

                          </h6>
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
              class="carousel-control-next "
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


      <section className="py-5 fadeIn1 fadeInBottom">
  <div className="container">
    <div className="row">
      <div className="col-md-8 mx-auto text-center">
        <h4 className="text-gradient text-primary text-border font-monospace">
          STUDENT FEEDBACK
        </h4>
      </div>
    </div>
    <div id="carouselStudentFeedback" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {Array.from({ length: Math.ceil(8 / 3) }).map((_, carouselIndex) => (
          <div className={`carousel-item ${carouselIndex === 0 ? 'active' : ''}`} key={carouselIndex}>
            <div className="row container mt-lg-5 mt-4">
              {[
                {
                  name: "Student Name 1",
                  feedback: "Great training! It helped me a lot in my career.",
                  image: "../../assets/img/team-4.jpg",
                  videoLink: "https://www.youtube.com/watch?v=example1",
                },
                {
                  name: "Student Name 2",
                  feedback: "The best experience I've ever had. Highly recommend!",
                  image: "../../assets/img/team-4.jpg",
                  videoLink: "https://www.youtube.com/watch?v=example2",
                },
                {
                  name: "Student Name 3",
                  feedback: "I learned so much! The trainers are very experienced.",
                  image: "../../assets/img/team-4.jpg",
                  videoLink: "https://www.youtube.com/watch?v=example3",
                },
                {
                  name: "Student Name 4",
                  feedback: "An amazing experience! I gained a lot of practical knowledge.",
                  image: "../../assets/img/team-4.jpg",
                  videoLink: "https://www.youtube.com/watch?v=example4",
                },
                {
                  name: "Student Name 5",
                  feedback: "The trainers were very helpful and knowledgeable.",
                  image: "../../assets/img/team-4.jpg",
                  videoLink: "https://www.youtube.com/watch?v=example5",
                },
                {
                  name: "Student Name 6",
                  feedback: "Highly informative and practical sessions.",
                  image: "../../assets/img/team-4.jpg",
                  videoLink: "https://www.youtube.com/watch?v=example6",
                },
                {
                  name: "Student Name 7",
                  feedback: "I am more confident in my skills now. Thank you!",
                  image: "../../assets/img/team-4.jpg",
                  videoLink: "https://www.youtube.com/watch?v=example7",
                },
                {
                  name: "Student Name 8",
                  feedback: "The course was fantastic and very engaging.",
                  image: "../../assets/img/team-4.jpg",
                  videoLink: "https://youtu.be/DjYZk8nrXVY?si=FARPr2NwfZXguZQn",
                },
              ]
              .slice(carouselIndex * 3, carouselIndex * 3 + 3) // Display 3 cards per slide
              .map((student, index) => (
                <div className="col-lg-4 col-sm-6 mb-4" key={index}>
                  <div
                    className="card"
                    style={{
                      position: 'relative',
                      overflow: 'hidden', // Prevent overflow for opacity effect
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.opacity = 0.7; // Change opacity on hover
                      const overlay = e.currentTarget.querySelector('.overlay');
                      overlay.style.opacity = 1; // Show overlay text
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = 1; // Reset opacity on leave
                      const overlay = e.currentTarget.querySelector('.overlay');
                      overlay.style.opacity = 0; // Hide overlay text
                    }}
                  >
                    <img
                      className="card-img-top"
                      src={student.image}
                      alt={student.name}
                      style={{ width: '100%', height: 'auto' }}
                    />
                    <div className="card-body text-center">
                      <h5 className="text-rose">{student.name}</h5>
                      <p>“{student.feedback}”</p>
                      <div className="overlay" style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: 'white',
                        opacity: 0,
                        transition: 'opacity 0.3s',
                        pointerEvents: 'none', // Disable pointer events on overlay by default
                      }}>
                        <a 
                          href={student.videoLink} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          style={{ 
                            color: 'white', 
                            fontSize: '1.2rem', 
                            textDecoration: 'none', 
                            pointerEvents: 'auto' // Enable pointer events for the link
                          }} 
                        >
                          Watch Video
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselStudentFeedback"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselStudentFeedback"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</section>


    </div>
  );
};

export default TrainingPlacements;
