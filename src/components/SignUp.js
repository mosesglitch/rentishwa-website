import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import { Icon } from "react-icons-kit";
import { useNavigate } from "react-router-dom";

const SignUp = ({
  getRegistrationDetails,
  setIsLoading,
  isLoading,
  handleJustifyClick,
  handleClick,
}) => {
  const [userRole, setUserRole] = useState(true);

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    about: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    about: "",

    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });
  const [phoneContact, setPhoneContact] = useState(null);
  const [countryIp, setCountryIp] = useState("ke");
  const [type, setType] = useState("password");
  const [isnotvalidPhoneNumber, setIsnotvalidPhoneNumber] = useState(false);
  const [isFocused, setIsFocused] = useState({
    firstName: false,
    password: false,
    confirmPassword: false,
  });
  const [phoneFocus, setphoneFocus] = useState(false);
  const navigate = useNavigate();

  const renderInputField = (inputName, label, type) => {
    console.log(values[inputName], "inpppp", inputName);
    return (
      <div
        className={`float-label-field ${
          values[inputName]?.length > 0 || isFocused[inputName]
            ? "float focus"
            : ""
        }`}
      >
        <fieldset className="float-label-field">
          <label htmlFor={inputName}>{label}</label>
          <input
            id={inputName}
            name={inputName}
            type={type}
            // value={values[inputName]}
          />
          {(inputName === "password" || inputName === "confirmPassword") && (
            <span
              className="flex justify-around items-center"
              style={{
                position: "absolute",
                top: "5px",
                right: "9px",
                marginLeft: "3px",
              }}
            >
              {/* <Icon size={15} className="text-muted mr-10" /> */}
            </span>
          )}
          {/* {inputName === "password" && errors.password && (
            <div className="text-danger">{errors.password}</div>
          )}
          {inputName === "confirmPassword" && errors.confirmPassword && (
            <div className="text-danger">{errors.confirmPassword}</div>
          )}
          {inputName === "firstName" && errors.firstName && (
            <div className="text-danger">{errors.firstName}</div>
          )} */}
        </fieldset>
      </div>
    );
  };

  return (
    <>
      <div className="text-center mb-3"></div>

      <div className="row mb-4">
        <div className="col multipanel">
          <div className="form-outline">
            <form>
              <div className="form-group">
                <div className="mt-4">
                  {renderInputField("firstName", "Full name ", "text")}
                  {renderInputField("email", "Email", "text")}

                  {renderInputField("password", "Password", type)}
                  {renderInputField(
                    "confirmPassword",
                    "Confirm Password",
                    type
                  )}
                </div>
                {/* <p className="pt-1  labelled">Name</p> */}

                {/* <div className="d-flex flex-column justify-content-center mb-4 ml-3">
                  <div>
                    {!values.acceptTerms && (
                      <div className="text-danger">{errors.acceptTerms}</div>
                    )}
                  </div>
                </div> */}
                <button
                  className="btn mb-4 w-100 bg-primary"
                  type="submit"
                  style={{
                    backgroundColor: "",
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
              </div>
              <p className="text-center">
                Already a member?{" "}
                <a href="#!" onClick={() => handleJustifyClick(1)}>
                  Login
                </a>
              </p>
              {/* <div
                className="mx-auto "
                style={{
                  textAlign: "center",
                  fontWeight: "600",
                  fontSize: "17px",
                }}
              >
                or
              </div> */}
              {/* <div
                onClick={(e) => handleClick(e)}
                className="login mx-auto mb-4"
                id="customBtn"
              >
                <img
                  className="google-Image"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                  alt="Google Logo"
                />
                SignUp with Google
              </div> */}
              <div>
                By creating an account, You accept Savilinks
                <a href="#!"> terms and conditions</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
