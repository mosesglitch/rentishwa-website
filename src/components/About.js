// BsCheck2Square
import { BsCheck2Square } from "react-icons/bs";
import { theTeam } from "./Data";
function About() {
  return (
    <>
      <div className="mx-3">
        <div className="row">
          <div
            className="p-5 text-center bg-image text-black mt-3"
            style={{
              backgroundImage:
                "url('https://images.adsttc.com/media/images/5f67/b382/63c0/17b3/2900/0002/newsletter/yasuhiro_nakayama.jpg?1600631676')",
              height: "400px",
              fontWeight: "500",
              fontSize: "20px",
              opacity: "0.9",
            }}
          >
            <div
              style={{
                backgroundColor: "black",
                opacity: "0.7",
                color: "white",
                padding: "4px",
              }}
            >
              <h3
                style={{
                  fontWeight: "700",
                  fontSize: "27px",
                  opacity: "1",
                }}
              >
                Welcome to Rentishwa
              </h3>
              <p>
                We are your go-to platform for finding the perfect rental
                property. Whether you're searching for your dream home, a cozy
                apartment, or a commercial space, we've got you covered.
              </p>
            </div>
          </div>
          <div className="my-5" style={{ backgroundColor: "#f1f1f1" }}>
            <div className="container mb-4 mt-5 d-flex flex-column justify-content-center align-items-center">
              <div>
                <h4 className=" about-h6 text-center">Why Us</h4>
                <div className="d-flex flex-row mt-2">
                  <ul
                    style={{ textDecoration: "none", listStyleType: "none" }}
                    className="mx-auto"
                  >
                    <li>
                      {" "}
                      <BsCheck2Square className="mr-2" />
                      Safety
                    </li>
                    <li>
                      <BsCheck2Square className="mr-2" />
                      Intergrity
                    </li>
                    <li>
                      <BsCheck2Square className="mr-2" />
                      Excellence
                    </li>
                    <li>
                      <BsCheck2Square className="mr-2" />
                      Innovation
                    </li>
                    <li>
                      <BsCheck2Square className="mr-2" />
                      Customer focused
                    </li>
                    <li>
                      <BsCheck2Square className="mr-2" />
                      Mentorship
                    </li>
                    <li>
                      <BsCheck2Square className="mr-2" />
                      Systematic growth
                    </li>
                    <li>
                      <BsCheck2Square className="mr-2" />
                      Cost conscious
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="my-5 " style={{ backgroundColor: "#f1f1f1" }}>
            <h4 className=" about-h6 text-center">Our team</h4>
            <p className="text-center">
              Our dedicated team is committed to helping you find the perfect
              rental property that suits your needs. Whether you're looking for
              a short-term stay or a long-term commitment, Rentishwa has
              something for everyone.
            </p>
            <div className="d-flex flex-row flex-wrap justify-content-center align-items-center">
              {theTeam.map((emp) => {
                return (
                  <div style={{ position: "relative", margin: "3px" }}>
                    <img
                      src={emp.image}
                      style={{
                        width: "400px",
                        maxWidth: "100%",
                        height: "400px",
                        objectFit: "cover",
                        border: "2px solid #f1f1f1",
                        borderRadius: "5px",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        bottom: "3px",
                        left: "0",
                        color: "white",
                        backgroundColor: "black",
                        opacity: "0.8",
                        fontWeight: "600",
                        padding: "3px",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "21px",
                        }}
                      >
                        {emp.name}
                      </div>

                      <div>{emp.role}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
