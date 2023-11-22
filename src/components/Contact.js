import { MDBBtn } from "mdb-react-ui-kit";

function Contact() {
  return (
    <div className="container contact">
      <div className="ContactForm">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="contactForm c-card mt-4">
                <h2 className="main-title text-center">CONTACT US</h2>
                <form id="contact-form" noValidate>
                  {/* Row 1 of form */}
                  <div className="mb-2">
                    <input
                      type="text"
                      name="name"
                      className="form-control formInput"
                      placeholder="Name"
                    ></input>
                  </div>
                  <div className="mb-2">
                    <input
                      type="email"
                      name="email"
                      className="form-control formInput"
                      placeholder="Email address"
                    ></input>
                  </div>
                  <div className="mb-2">
                    <input
                      type="email"
                      name="email"
                      className="form-control formInput"
                      placeholder="Contact"
                    ></input>
                  </div>
                  {/* Row 2 of form */}

                  <div className="col">
                    <input
                      type="text"
                      name="subject"
                      className="form-control formInput"
                      placeholder="Subject"
                    ></input>
                  </div>

                  {/* Row 3 of form */}

                  <div className="col my-3">
                    <textarea
                      rows={3}
                      name="message"
                      className="form-control formInput"
                      placeholder="Message"
                    ></textarea>
                  </div>

                  <MDBBtn className="me-1 w-60">Submit</MDBBtn>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="google-map-code col-md-12 col-lg-12 col-sm-12 mt-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15883.131055123344!2d36.82187099473216!3d-1.2920659744657452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f0a763347cfb4d%3A0xe3e5619c3cf477d3!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1en!2sin"
          width="100%"
          height="450"
          frameborder="0"
          style={{ border: 0 }}
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </div>
    </div>
  );
}
export default Contact;
