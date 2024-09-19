import React from 'react'
import MobileNavbar from './MobileNavbar'
import MobileFooter from './MobileFooter'

const MobileServices = () => {
  return (
    <div>
        <MobileNavbar/>
        <div className='container py-6'>
        <div class="row text-center justify-content-center">
            <div class="col-lg-8">
              <span class="badge rounded-pill badge-primary mb-2">
                Our Services
              </span>
              <h3 className="source-serif-4 text-normal font-weight-light">
                "Transforming ideas into impactful solutions with cutting-edge
                software services."{" "}
              </h3>
            </div>
          </div>
          <div class="container card pt-5 mb-4">
                <div class="card-header p-0 position-relative mt-n4 mx-2 z-index-2">
                  <a class="d-block blur-shadow-image">
                    <img
                      src="https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg"
                      alt="img-blur-shadow"
                      className="img-fluid shadow border-radius-lg services-images"
                      loading="lazy"
                    />
                  </a>
                </div>
                <div class="card-body">
                  <h5 class="font-weight-normal">UI/UX Designing</h5>
                  <small>
                    UI/UX design is more than aesthetics—it's about crafting
                    intuitive interfaces that enhance user satisfaction,
                    streamline interactions, and drive meaningful engagement. 
                  </small>
                  <div className="mt-3">
                    <button
                      class="btn btn-outline-dark btn-sm mb-0"
                      type="button"
                      name="button"
                      data-bs-toggle="modal"
                      data-bs-target="#uiModal"
                    >
                      More info
                    </button>
                  </div>
                </div>
              </div>
              <div class="container card mt-5 mb-4">
                <div class="card-header p-0 position-relative mt-n4 mx-2 z-index-2">
                  <a class="d-block blur-shadow-image">
                    <img
                      src="https://media.licdn.com/dms/image/D4D12AQFBJnUBxowKVQ/article-cover_image-shrink_720_1280/0/1653639113947?e=2147483647&v=beta&t=jdaKdNuCNgcQxvL9E-f1qOsyzQjRQA39QyXx4utTqtU"
                      alt="img-blur-shadow"
                      className="img-fluid shadow border-radius-lg services-images"
                      loading="lazy"
                    />
                  </a>
                </div>
                <div class="card-body">
                  <h5 class="font-weight-normal">Devops & Cloud Services</h5>
                  <small>
                    DevOps and Cloud Services accelerate innovation by
                    seamlessly integrating development, operations, and cloud
                    infrastructure. 
                  </small>
                  <div className="mt-3">
                    <button
                      class="btn btn-outline-dark btn-sm mb-0"
                      type="button"
                      name="button"
                      data-bs-toggle="modal"
                      data-bs-target="#devopsModal"
                    >
                      More info
                    </button>
                  </div>
                </div>
              </div>
              <div class="container mt-5 mb-4 card">
                <div class="card-header p-0 position-relative mt-n4 mx-2 z-index-2">
                  <a class="d-block blur-shadow-image">
                    <img
                      src="https://markovate.com/wp-content/uploads/2022/08/top-MERN-Stack.webp"
                      alt="img-blur-shadow"
                      className="img-fluid shadow border-radius-lg services-images"
                      loading="lazy"
                    />
                  </a>
                </div>
                <div class="card-body">
                  <h5 class="font-weight-normal">Web Apps - MERN/MEAN Stack</h5>
                  <small>
                    Web Apps built on MERN/MEAN Stack leverage the power of
                    MongoDB, Express.js, React (or Angular), and Node.js to
                    deliver dynamic, scalable, and responsive applications.
                  </small>
                  <div className="mt-3">
                    <button
                      class="btn btn-outline-dark btn-sm mb-0"
                      type="button"
                      name="button"
                      data-bs-toggle="modal"
                      data-bs-target="#mernModal"
                    >
                      More info
                    </button>
                  </div>
                </div>
              </div>
              <div class="container mb-4 card mt-5">
                <div class="card-header p-0 position-relative mt-n4 mx-2 z-index-2">
                  <a class="d-block blur-shadow-image">
                    <img
                      src="https://www.agilevision.io/content/images/size/w600/2024/04/17.png"
                      alt="img-blur-shadow"
                      className="img-fluid shadow border-radius-lg services-images"
                      loading="lazy"
                    />
                  </a>
                </div>
                <div class="card-body">
                  <h5 class="font-weight-normal">
                    Mobile Apps with Flutter / Android / iOS
                  </h5>
                  <small>
                    Mobile Apps crafted with Flutter for cross-platform
                    development or dedicated Android/iOS platforms combine sleek
                  </small>
                  <div className="mt-3">
                    <button
                      class="btn btn-outline-dark btn-sm mb-0"
                      type="button"
                      name="button"
                      data-bs-toggle="modal"
                      data-bs-target="#mobileAppsModal"
                    >
                      More info
                    </button>
                  </div>
                </div>
              </div>
              <div class="card mt-5 mb-4 container">
                <div class="card-header p-0 position-relative mt-n4 mx-2 z-index-2">
                  <a class="d-block blur-shadow-image">
                    <img
                      src="https://www.ashokitech.com/uploads/course/advanced-java-online-training.jpeg"
                      alt="img-blur-shadow"
                      className="img-fluid shadow border-radius-lg services-images"
                      loading="lazy"
                    />
                  </a>
                </div>
                <div class="card-body">
                  <h5 class="font-weight-normal"> Web Apps - JAVA/J2EE</h5>
                  <small>
                    Web Apps powered by Java/J2EE leverage robust frameworks and
                    libraries to deliver scalable, secure, and enterprise-grade
                    solutions. 
                  </small>
                  <div className="mt-3">
                    <button
                      class="btn btn-outline-dark btn-sm mb-0"
                      type="button"
                      name="button"
                      data-bs-toggle="modal"
                      data-bs-target="#javaWebAppModal"
                    >
                      More info
                    </button>
                  </div>
                </div>
              </div>
              <div class="card mt-5 container mb-4">
                <div class="card-header p-0 position-relative mt-n4 mx-2 z-index-2">
                  <a class="d-block blur-shadow-image">
                    <img
                      src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj6BLI6GAW3ayyUe46M5_H-A5mmoJJEbJQMudBu0ilcgS0qBEWSrS_yl9LiXuGFb-u6u4oIEVNeO_Z74I8YqbXKuguSNkDeDy-BuRnQyll1L8ulvpr3nlN3rrgp29oXg78lzNT7BOCm6tgIzkbaEJH7AGKn2DXl0GvRQpetQ7aLPKKhNCjbY-gSQiEhGtc/s1986/revlicate-prediction-lt3gwyjbgtdrg6qezkwdtempqy.jpg"
                      alt="img-blur-shadow"
                      className="img-fluid shadow border-radius-lg services-images"
                      loading="lazy"
                    />
                  </a>
                </div>
                <div class="card-body">
                  <h5 class="font-weight-normal">AI & ML Technologies</h5>
                  <small>
                    AI & ML technologies revolutionize industries by harnessing
                    data-driven insights to automate processes, predict trends,
                    and enhance decision-making. Leveraging advanced algorithms
                    and deep learning, these technologies empower businesses to
                    innovate, optimize operations, and deliver personalized
                    experiences.
                  </small>
                  <div className="mt-3">
                    <button
                      class="btn btn-outline-dark btn-sm mb-0"
                      type="button"
                      name="button"
                      data-bs-toggle="modal"
                      data-bs-target="#aimlModal"
                    >
                      More info
                    </button>
                  </div>
                </div>
              </div>
        </div>
         {/* UI/UX Design Modal */}
      <div
        class="modal fade"
        id="uiModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="uiModalLabel"
        aria-hidden="true"
      >
        <div
          class="modal-dialog modal-dialog-centered modal-xl"
          role="document"
        >
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="uiModalLabel">
                UI/UX Designing
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
                <h6 class="text-black text-normal">
                  UI/UX design bridges aesthetics with functionality to create
                  seamless user experiences.
                </h6>
                <div class="row align-items-center">
                <div class="col-md-5">
                    <div class=" p-0 border-radius-lg">
                      <div class="blur-shadow-image">
                        <img
                          src="https://www.ideatesystemsindia.com/wp-content/uploads/2021/09/ui-graphic-design-services-in-pune-1.png"
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
                          <h5>1. User-Centered Design:</h5>
                          <p>
                            Focuses on understanding user behaviors, needs, and
                            preferences to create intuitive and engaging
                            interfaces.
                          </p>
                        </div>
                      </div>
                      <div class="p-3 info-horizontal d-flex">
                        <div>
                          <h5>2. Aesthetic and Functional Balance:</h5>
                          <p>
                            Combines visual appeal with usability, ensuring
                            interfaces are both attractive and easy to navigate.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                 
                </div>
                <div class="row align-items-center">
                  <div class="col-md-5">
                    <div class=" p-0 border-radius-lg">
                      <div class="blur-shadow-image">
                        <img
                          src="https://d23lxg2o0ozuov.cloudfront.net/images/UI_UX.png"
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
                          <h5>3. Wireframing and Prototyping:</h5>
                          <p>
                            Utilizes wireframes and prototypes to iterate and
                            refine designs, optimizing user interactions and
                            flow.
                          </p>
                        </div>
                      </div>
                      <div class="p-3 info-horizontal d-flex">
                        <div>
                          <h5>4. Accessibility and Inclusivity:</h5>
                          <p>
                            Designs interfaces that are accessible to all users,
                            considering diverse abilities and ensuring
                            compliance with accessibility standards.
                          </p>
                        </div>
                      </div>
                      <div class="p-3 info-horizontal d-flex">
                        <div>
                          <h5>5. Responsive and Adaptive Design:</h5>
                          <p>
                            Ensures interfaces are responsive across different
                            devices and screen sizes, providing a seamless
                            experience on desktop, mobile, and tablet platforms.
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
                Devops & Cloud Services
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
                <h6 class="mb-2 text-black text-normal">
                  DevOps and Cloud Services streamline development, deployment,
                  and management of scalable applications in the cloud.
                </h6>
                <div class="row align-items-center">
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
                  <div class="col-md-7 mb-md-0 ">
                    <div class="col-md-12 ">
                      <div class="p-3 info-horizontal d-flex">
                        <div>
                          <h5>1. Scalability and Elasticity:</h5>
                          <p>
                            Utilizes cloud infrastructure to dynamically scale
                            resources based on demand, optimizing performance
                            and cost-efficiency.
                          </p>
                        </div>
                      </div>
                      <div class="p-3 info-horizontal d-flex">
                        <div>
                          <h5>2. Infrastructure as Code (IaC):</h5>
                          <p>
                            Enables provisioning and management of
                            infrastructure through code, ensuring consistency
                            and repeatability.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                
                </div>
                <div class="row align-items-center mt-4">
                  <div class="col-md-5">
                    <div class=" p-0 border-radius-lg">
                      <div class="blur-shadow-image">
                        <img
                          src="https://cloudanalogy.com/wp-content/uploads/2019/08/Devops@4x-min-768x590.png"
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
                        <h5>3. Monitoring and Logging:</h5>
                        <p>
                          Implements robust monitoring and logging mechanisms to
                          track performance, detect issues, and optimize
                          resource utilization.
                        </p>
                      </div>
                    </div>
                    <div class="p-3 info-horizontal d-flex">
                      <div>
                        <h5>4. Security and Compliance:</h5>
                        <p>
                          Integrates security best practices and compliance
                          frameworks into DevOps workflows to ensure data
                          protection and regulatory adherence.
                        </p>
                      </div>
                    </div>
                    <div class="p-3 info-horizontal d-flex">
                      <div>
                        <h5>5. Cost Management:</h5>
                        <p>
                          Optimizes cloud usage and costs through resource
                          allocation, scaling strategies, and cost-effective
                          cloud service selection.
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
      {/* Mern Modal */}
      <div
        class="modal fade"
        id="mernModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="mernModalLabel"
        aria-hidden="true"
      >
        <div
          class="modal-dialog modal-dialog-centered modal-xl"
          role="document"
        >
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="mernModalLabel">
                Web Apps - MERN/MEAN Stack
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
                <h6 class="mb-4 text-normal">
                  Web Apps built on the MERN/MEAN Stack harness modern
                  JavaScript frameworks for robust, scalable, and responsive
                  applications.
                </h6>
                <div class="row align-items-center">
                <div class="col-md-5">
                    <div class=" p-0 border-radius-lg">
                      <div class="blur-shadow-image">
                        <img
                          src="https://www.infomazeelite.com/wp-content/uploads/2022/12/MERN-Stack-Development.png"
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
                          <h5>1. Full-Stack JavaScript:</h5>
                          <p>
                            Utilizes JavaScript throughout the entire
                            application stack, promoting code reusability and
                            developer productivity.
                          </p>
                        </div>
                      </div>
                      <div class="p-3 info-horizontal d-flex">
                        <div>
                          <h5>2. Scalability and Performance:</h5>
                          <p>
                            Leverages Node.js for server-side logic and
                            asynchronous handling, enabling high-performance and
                            scalable applications.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
                <div class="row align-items-center mt-4">
                  <div class="col-md-5">
                    <div class=" p-0 border-radius-lg">
                      <div class="blur-shadow-image">
                        <img
                          src="https://www.rlogical.com/wp-content/themes/logical/images/Hire-MERN-Stack-Banner.webp"
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
                          <h5>3. Component-Based Architecture:</h5>
                          <p>
                            Employs component-based frameworks like React (MERN
                            Stack) or Angular (MEAN Stack) for modular,
                            maintainable, and reusable UI components.
                          </p>
                        </div>
                      </div>
                      <div class="p-3 info-horizontal d-flex">
                        <div>
                          <h5>4. NoSQL Database (MongoDB):</h5>
                          <p>
                            Uses MongoDB for flexible and scalable data storage,
                            supporting JSON-like document structures and
                            facilitating agile development.
                          </p>
                        </div>
                      </div>
                      <div class="p-3 info-horizontal d-flex">
                        <div>
                          <h5>5. Community Support and Ecosystem:</h5>
                          <p>
                            Benefits from a vibrant developer community,
                            extensive libraries, and third-party integrations
                            for rapid development and innovation.
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
      {/* Mobile Apps Modal */}
      <div
        class="modal fade"
        id="mobileAppsModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="mobileAppsModalLabel"
        aria-hidden="true"
      >
        <div
          class="modal-dialog modal-dialog-centered modal-xl"
          role="document"
        >
          <div class="modal-content">
            <div class="modal-header">
              <h6 class="modal-title" id="mobileAppsModalLabel">
                Mobile Apps with Flutter / Android / iOS
              </h6>
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
                  <h6 class="mb-2 text-black text-normal">
                    Build cross-platform mobile apps with Flutter for seamless
                    performance on Android and iOS platforms.
                  </h6>
                </div>
                <div class="row align-items-center">
                <div class="col-md-5">
                    <div class=" p-0 border-radius-lg">
                      <div class="blur-shadow-image">
                        <img
                          src="https://cdn.prod.website-files.com/646497e9af65ec660cdb5328/649d70154a37516c5761f0e2_62dffc4393fe42b7bc4d7dec_betterment.png"
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
                          <h5>1. Cross-Platform Development:</h5>
                          <p>
                            Flutter enables building high-performance apps for
                            both Android and iOS from a single codebase,
                            reducing development time and effort.
                          </p>
                        </div>
                      </div>
                      <div class="p-3 info-horizontal d-flex">
                        <div>
                          <h5>2. Native Performance:</h5>
                          <p>
                            Utilizes native compilation and optimized widgets in
                            Flutter for fast rendering and smooth performance on
                            various devices.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                 
                </div>
                <div class="row align-items-center mt-4">
                  <div class="col-md-5">
                    <div class=" p-0 border-radius-lg">
                      <div class="blur-shadow-image">
                        <img
                          src="https://webdigitalmediagroup.com/wp-content/uploads/2023/05/mobile-app-development-companies-in-dubai-3-1.png"
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
                          <h5>3. Access to Native Features:</h5>
                          <p>
                            Integrates seamlessly with platform-specific
                            features and APIs, providing access to device
                            hardware and functionalities.
                          </p>
                        </div>
                      </div>
                      <div class="p-3 info-horizontal d-flex">
                        <div>
                          <h5>4. Fast Development and Iteration:</h5>
                          <p>
                            Facilitates rapid prototyping, hot reload, and quick
                            iteration cycles, enhancing developer productivity
                            and time-to-market.
                          </p>
                        </div>
                      </div>
                      <div class="p-3 info-horizontal d-flex">
                        <div>
                          <h5>5. Platform-Specific Customization:</h5>
                          <p>
                            Allows customization of UI and behavior for specific
                            platform requirements while maintaining code sharing
                            and efficiency.
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
              <h6 class="modal-title" id="javaWebAppModalLabel">
                Web Apps - JAVA/J2EE
              </h6>
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
                  <h6 class="mb-2 text-black text-normal">
                    Java/J2EE powers robust and scalable web applications with
                    enterprise-grade reliability and performance.
                  </h6>
                </div>
                <div class="row align-items-center">
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
                  
                </div>
                <div class="row align-items-center">
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
              <h6 class="modal-title" id="aimlModalLabelLabel">
                AI & ML Technologies
              </h6>
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
                  <h6 class="mb-2 text-black text-normal">
                    AI & ML technologies harness data-driven insights to
                    automate processes, predict trends, and optimize
                    decision-making.
                  </h6>
                </div>
                <div class="row align-items-center">
                <div class="col-md-5 mt-4">
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
                  
                </div>
                <div class="row align-items-center">
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
      <MobileFooter/>
    </div>
  )
}

export default MobileServices