import React from "react";

const Contact = () => {
  return (
    <div className="container my-5">
         <h3 className="text-center">CONTACT US</h3>
          <p className="text-center text-secondary">
            Our team is happy to answer your questions. Fill out the form and
            we’ll be in touch as soon as possible.
          </p>
      <div className="row my-5 justify-content-center">
        <div className="col-md-6">

          {/* contact form part */}
          <div className="card border-20 shadow-lg border-0 p-2 row g-4">
            <div className="col">
              <input
                class="form-control border-15 p-2 border-0 bg-light"
                type="text"
                placeholder="Your Name"
              />
            </div>{" "}
            <div className="col">
              <input
                class="form-control border-15 p-2 border-0 bg-light"
                type="email"
                placeholder="Your Email"
              />
            </div>{" "}
            <div className="col">
              <input
                class="form-control border-15 p-2 border-0 bg-light"
                type="text"
                placeholder="Subject"
              />
            </div>{" "}
            <div className="col">
              <textarea
                class="form-control border-15 p-2 border-0 bg-light"
                type="text"
                placeholder="Message"
              />
            </div>
            <button class="btn btn-success border-15 px-5 py-2">Send</button>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Contact;
