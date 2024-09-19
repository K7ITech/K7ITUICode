import React from "react";

const Aboutus = () => {
  return (
    <div className="py-3">
      <header>
        <div class="page-header min-vh-85">
          <div>
            <img
              class="position-absolute fixed-top ms-auto w-50 h-100 z-index-0 d-none d-sm-none img-fit d-md-block border-radius-section border-top-end-radius-0 border-top-start-radius-0 border-bottom-end-radius-0"
              src="https://fellow.app/wp-content/uploads/2022/04/feedback.jpg"
              alt="feedbackimg"
              loading="lazy"
            />
          </div>
          <div class="container">
            <div class="row">
              <div class="col-lg-7 d-flex">
                <div class="card card-body blur text-md-start text-center px-sm-5 shadow-lg mt-sm-5 py-sm-5">
                  <h2 class="text-dark mb-0 source-serif-4">About Us</h2>
                  <p class="lead text-dark pe-md-5 me-md-5 mt-4">
                    K7InfoTech, where innovation meets excellence in software
                    solutions. Established with a passion for harnessing
                    technology to drive business success, we specialize in
                    developing bespoke software that transforms ideas into
                    reality. Our dedicated team of tech enthusiasts and industry
                    experts collaborates seamlessly to deliver cutting-edge
                    applications tailored to meet the unique needs of our
                    clients across various sectors.
                  </p>
                  <div class="buttons">
                    <button
                      type="button"
                      class="btn btn-rounded btn-outline-success mt-4"
                    >
                      Contact K7 Infotech
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section class="py-8">
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
                Read more about us
              </h2>
              <p class="lead mt-4">
                K7 Infotech is a distinguished Software Development &
                Outsourcing company headquartered in Bangalore, India. With a
                relentless commitment to excellence and innovation, we provide
                comprehensive software solutions tailored to meet the diverse
                needs of our clients worldwide.{" "}
              </p>
              <p class="lead">
                Driven by a passion for technology and a customer-centric
                approach, we have earned a reputation as one of the most
                reliable and trusted software development companies in the
                industry. Our expertise spans across a wide spectrum of domains,
                including Web Development, Java Development, App Development,
                Full Stack Development, Backend Development, Frontend
                Development, UI/UX Design, API Development, and Custom Software
                Development.
              </p>
            </div>
          </div>
          <div className="py-5">
            <div class="row">
              <div class="col-lg-8 col-10 d-flex justify-content-center flex-column mx-auto text-lg-start text-center">
                <p class="lead">
                  At K7 Infotech, we understand that every project is unique,
                  and we approach each assignment with dedication and
                  professionalism. Whether it's a simple Website Development or
                  a complex Web Application such as CRM, E-commerce Development,
                  or Android/iPhone App Development, we possess the skills and
                  experience to deliver exceptional results that exceed our
                  clients' expectations.
                </p>
                <p class="lead">
                  Quality is at the forefront of everything we do. We firmly
                  believe that quality speaks louder than words, and we are
                  committed to delivering state-of-the-art technology solutions
                  that not only meet but exceed industry standards. Our team of
                  highly skilled professionals leverages the latest tools,
                  methodologies, and best practices to ensure the highest
                  quality deliverables.
                </p>
                <p class="lead">
                  Our client base is diverse, ranging from small businesses and
                  startups to individuals and Fortune 100+ companies. Regardless
                  of the size or complexity of the project, we approach each
                  client with the same level of dedication and commitment,
                  striving to build long-lasting partnerships based on trust,
                  integrity, and mutual success.
                </p>
              </div>
              <div class="col-lg-4 col-6 mx-lg-0 mx-auto px-lg-0 px-md-0 my-auto">
                <img
                  class="w-100 border-radius-lg shadow rounded-circle"
                  src="https://st.depositphotos.com/1594308/3681/i/450/depositphotos_36816545-stock-photo-successful-employee.jpg"
                  alt="successfulempimg"
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6 col-md-8 order-2 order-md-2 order-lg-1">
              <div class="position-relative ms-md-5 mb-0 mb-md-5 mb-lg-0 d-none d-md-block d-lg-block d-xl-block h-75">
                <div
                  class="bg-gradient-warning w-100 h-100 border-radius-xl position-absolute"
                  alt=""
                ></div>
                <img
                  src="https://img.freepik.com/premium-photo/side-view-business-colleagues-working-office_1048944-28268841.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1719187200&semt=ais_user"
                  class="w-100 border-radius-xl mt-6 ms-7 position-absolute"
                  alt=""
                />
              </div>
            </div>
            <div class="col-lg-5 col-md-12 ms-auto order-1 order-md-1 order-lg-1">
              <div class="p-3 pt-4">
                <p class="lead">
                  As a top Software Development company in Bangalore, we take
                  pride in our ability to deliver results that drive business
                  growth and success. Our track record of successful projects
                  and satisfied clients is a testament to our expertise,
                  professionalism, and dedication to excellence.
                  <br />
                  <br />{" "}
                  <p class="lead">
                    Whether you're looking to develop a new software solution,
                    enhance an existing application, or outsource your software
                    development needs, K7 Infotech is your trusted partner for
                    success. Contact us today to learn more about how we can
                    help you achieve your goals and propel your business to new
                    heights.
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aboutus;
