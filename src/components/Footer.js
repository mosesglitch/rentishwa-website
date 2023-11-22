import { Link } from "react-router-dom";
import { MDBIcon } from "mdb-react-ui-kit";
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="side1">
            <div className="row">
              <div className="col-md-6">
                <h1 className=" footer-title ">Rentishwa</h1>
                <p className="footer-text">
                  At Rentishwa, we understand that finding the right place to
                  live or work is a significant decision.Our mission is to make
                  the process as easy and convenient as possible.
                </p>
              </div>
              <div className="col-md-6">
                <p className="footer-title ">Go to</p>
                <ul>
                  <li className="">
                    <Link to="/"> Home </Link>
                  </li>
                  {/* <li>
                    <Link
                      to="services"
                      // spy={true}
                      // smooth={true}
                      // duration={1000}
                    >
                      {" "}
                      Services{" "}
                    </Link>
                  </li> */}
                  <li className="">
                    <Link to="/about">About Us </Link>
                  </li>
                  <li className="">
                    <Link to="/contact"> Contact </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="side2">
            <div className="row">
              <div className="col-md-6">
                <p className="footer-title ">Contact</p>
                <ul>
                  <li className="">
                    <MDBIcon fas icon="envelope" className="mr-2" />
                    <Link to="#">annaphotos2222@gmail.com</Link>
                  </li>
                  <li className="">
                    <MDBIcon fas icon="comment-alt" className="mr-2" />
                    <Link to="#"> Ann Mwangi</Link>
                  </li>
                  <li className="">
                    <MDBIcon fas icon="phone" className="mr-2" />

                    <Link to="#">+254727452002</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <p className="footer-title ">Social Media</p>
                <ul className="">
                  <li>
                    <MDBIcon fab icon="github" />
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href=".https://github.com/AnnaMwangi"
                    >
                      {" "}
                      Github
                    </a>
                  </li>
                  <li>
                    <MDBIcon fab icon="twitter" />
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href=" https://x.com/MwangiAnn321?t=9XQNgvI8rwDs36Aq01rUog&s=09"
                    >
                      {" "}
                      Twitter
                    </a>
                  </li>
                  <li>
                    <MDBIcon fab icon="linkedin" />
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.linkedin.com/in/ann-mwangi-4ab118264"
                    >
                      {" "}
                      Linkedin
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <button onClick={() => scroll.scrollToTop(2500)} src="" className="gotop">
        <i className="fas fa-level-up-alt"></i>
      </button> */}
    </footer>
  );
}
export default Footer;
