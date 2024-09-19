import React from "react";

const Career = () => {
  return (
    <div name="career">
      <section class="py-7">
        <div class="container">
          <div class="row d-flex align-items-center">
            <div class="col-lg-6 justify-content-start text-center">
              <div class="">
                <h3 className="source-serif-4 font-weight-lighter fs-2 text-primary">
                  We're more than a workplace.
                </h3>
                <h3 className="source-serif-4 font-weight-lighter fs-4 text-success">
                  We're a family.
                </h3>
                <p className="text-black fs-6">
                  We know that finding a meaningful and rewarding career can be
                  a long journey.
                </p>
              </div>
              <div class="card card-plain">
                <form id="contact-form"action="https://getform.io/f/bolgqwka" method="post" autocomplete="off">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="input-group input-group-outline mb-4">
                          <label class="form-label">First Name</label>
                          <input class="form-control" type="text" name="Firstname" required/>
                        </div>
                      </div>
                      <div class="col-md-6 ps-md-2">
                        <div class="input-group input-group-outline">
                          <label class="form-label">Last Name</label>
                          <input type="text" class="form-control" name="Lastname" required/>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-12 mb-4">
                      <div class="input-group input-group-outline">
                        <label class="form-label">Email</label>
                        <input type="text" class="form-control" name="Email" required/>
                      </div>
                    </div>
                    <div class="col-md-12 mb-4">
                      <div class="input-group input-group-outline">
                        <label class="form-label">Phone Number</label>
                        <input type="text" class="form-control" name="Phone Number" required/>
                      </div>
                    </div>
                    <div class="col-md-12 mb-4">
                    <label for="photo">Choose a photo:</label>
                      <div class="input-group input-group-outline">
                      
                      <input type="file" id="image" class="form-control" name="image" accept="image/*" capture="environment" required/>
                      </div>
                    </div>
                    <div class="col-md-12 mb-4">
                      <div class="input-group input-group-outline">
                        <label class="form-label">Year of Graduation</label>
                        <input type="text" class="form-control" name="Year of Graduation" required/>
                      </div>
                    </div>
                    <div class="col-md-12 mb-4">
                      <div class="input-group input-group-outline">
                        <label class="form-label">Qualification</label>
                        <input type="text" class="form-control" name="Qualification" required/>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="input-group input-group-outline mb-4 ">
                          <select
                            class="form-control"
                            id="exampleFormControlSelect1"
                            name="Gender" required
                          >
                            <option>Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Others</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md-6 ps-md-2">
                        <div class="input-group input-group-outline mb-4">
                          <select
                            class="form-control"
                            id="exampleFormControlSelect1"
                            name="YearsOfExperience" required
                          >
                            <option>Years of Experience</option>
                            <option>Fresher</option>
                            <option>0-1 Year</option>
                            <option>1-3 Years</option>
                            <option>3-5 Years</option>
                            <option>5+ Years</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-12 mb-4">
                      <div class="input-group input-group-outline">
                        <label class="form-label">Current Location</label>
                        <input type="text" class="form-control" name="Current Location" required/>
                      </div>
                    </div>
                    <div class="col-md-12 mb-4">
                      <div class="input-group input-group-outline">
                        <select
                          class="form-control"
                          id="exampleFormControlSelect1"
                          name="Skills" required
                        >
                          <option>Skills</option>
                          <option>Software Developer</option>
                          <option>Full Stack Developers</option>
                          <option>Front-End Developers</option>
                          <option>Back-End Developers</option>
                          <option>API Developers</option>
                          <option>Quality Testing</option>
                          <option>Manual Testing</option>
                          <option>UI/UX Designer</option>
                          <option>Graphic Designer</option>
                        </select>
                      </div>
                    </div>
                    <label class="form-label" >Upload CV/Resume</label>
                    <div class="input-group input-group-outline mb-4 mt-md-0 mt-4">
                      <label class="form-label"></label>
                      <input type="file" class="form-control" name="Resume/CV" placeholder="Upload CV/Resume" required/>


                    </div>
                    <div class="input-group input-group-outline mb-4 mt-md-0 mt-4">
                      <label class="form-label">Message</label>
                      <textarea
                        name="message"
                        class="form-control"
                        id="message"
                        rows="5"
                      ></textarea>
                    </div>
                    <div class="row">
                      <div class="col-md-12 text-center">
                        <button
                          type="submit"
                          class="btn bg-gradient-primary mt-0"
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-4">
            <img src="../../assets/imgs/allcourses.webp" alt="" />

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;
