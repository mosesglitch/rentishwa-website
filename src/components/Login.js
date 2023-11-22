import { useState } from "react";
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from "mdb-react-ui-kit";
// import { m } from "framer-motion";
import SignUp from "./SignUp";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useNavigate } from "react-router-dom";
// // import GoogleLogin from "react-google-login";
// import { Icon } from "react-icons-kit";

function Login() {
  const [justifyActive, setJustifyActive] = useState(0);
  const [phoneContact, setPhoneContact] = useState(null);
  const navigate = useNavigate();
  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }
    setJustifyActive(value);
  };
  return (
    <MDBContainer
      className="p-3 my-5 d-flex col-lg-4 col-md-5 col-sm-8 flex-column "
      style={{
        marginTop: "8rem",
        backgroundColor: "white",
        borderRadius: "20px",
        height: "90vh",
      }}
    >
      {/* <div id="customBtn" class="customGPlusSignIn">
        <span class="icon"></span>
        <span class="buttonText">Google</span>
      </div> */}
      <MDBTabs
        pills
        justify
        className="mb-3 d-flex flex-row justify-content-between"
      >
        <MDBTabsItem>
          <MDBTabsLink
            active={justifyActive === 0}
            className={
              justifyActive === 0
                ? "mdbtabslink-active"
                : "mdbtabslink-not-active"
            }
            style={{
              fontWeight: "800",
              fontSize: "14px",
            }}
            onClick={() => handleJustifyClick(0)}
          >
            Register
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            active={justifyActive === 1}
            className={
              justifyActive === 1
                ? "mdbtabslink-active"
                : "mdbtabslink-not-active"
            }
            style={{
              fontWeight: "800",
              fontSize: "14px",
            }}
            onClick={() => handleJustifyClick(1)}
          >
            Login
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={justifyActive === 1} className="multipanel ">
          <form className="mt-3">
            <div className={`float-label-field ${1 > 2 ? "float focus" : ""}`}>
              <fieldset className="float-label-field-contact">
                <label htmlFor="contact">Phone number</label>

                <PhoneInput
                  className="w-100 "
                  id="contact"
                  value={phoneContact}
                  onChange={(phone) => {
                    setPhoneContact(phone);
                  }}
                />
              </fieldset>
            </div>

            <div className={`float-label-field `}>
              <fieldset className="float-label-field">
                <label
                  htmlFor="pass1"
                  // onClick={() => setpasswordFocus(true)}
                >
                  Password
                </label>
                <input
                  name="password"
                  label="Password"
                  id="pass1"
                  className=""
                />
                <span
                  class="flex justify-around items-center"
                  style={{
                    position: "absolute",
                    top: "5px",
                    right: "9px",
                    marginLeft: "3px",
                  }}
                >
                  {/* <Icon class=" mr-10" size={15} className="text-muted" /> */}
                </span>
              </fieldset>
            </div>

            <div className="d-flex justify-content-between mx-1 mb-3">
              <a href="!#">Forgot password?</a>
            </div>

            <button
              className="btn mb-4 w-100 bg-primary"
              type="submit"
              style={{
                fontSize: "14px",
                color: "white",
                fontWeight: "600",
              }}
              onClick={() => {
                navigate("/");
              }}
            >
              Continue
            </button>
          </form>

          <p className="text-center">
            Not a member? <a href="#!">Register</a>
          </p>
          {/* <div
            className="mx-auto mt-3"
            style={{
              textAlign: "center",
              fontWeight: "600",
              fontSize: "17px",
            }}
          >
            or
          </div>
          <div className="login" id="customBtn">
            <img
              className="google-Image"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
              alt="Google Logo"
            />
            Log in with Google
          </div> */}
        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === 0}>
          <div>
            <SignUp handleJustifyClick={handleJustifyClick} />
          </div>
        </MDBTabsPane>
      </MDBTabsContent>
    </MDBContainer>
  );
}

export default Login;
