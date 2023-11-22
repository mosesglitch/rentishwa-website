import React, { useState, useEffect } from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { Properties } from "./Data";

function Header() {
  const [text, setText] = useState("");
  const [fullText, setFullText] = useState("Welcome to Rentishwa");
  const [index, setIndex] = useState(0);
  const [done, setDone] = useState(true);
  const [istart, setIstart] = useState(0);
  const [iend, setIend] = useState(3);

  let navigate = useNavigate();
  useEffect(() => {
    if (index < fullText.length && done) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 40);
    }
    // setDone(false);
    if (fullText.length === text.length) {
      setDone(false);
    }
    if (index > fullText.length && !done) {
      setTimeout(() => {
        setIndex(-1);
        setText(text.slice(0, index));
        setIndex(index - 1);
      }, 40);
    }
    // debouncedFetchData();
  }, [index]);

  return (
    <>
      <div className="my-3 bg-gray">
        <div className=" multicolor mx-auto">
          <div className="autowrite " style={{ textAlign: "center" }}>
            {text}
          </div>
        </div>
        <MDBCarousel showIndicators showControls fade className="bg-gray">
          {Properties?.map((item) => {
            return (
              <MDBCarouselItem
                className="w-100 d-block"
                itemId={3}
                src={item.image}
                alt="..."
                style={{ objectFit: "contain" }}
                onClick={() => navigate(`/property/${item.id}`)}
              >
                {/* <CImage
                className="d-block w-100"
                src={item.image}
                alt="slide 1"
                style={{
                  height: "600px",
                  minWidth: "100vw",
                  objectFit: "cover",
                }}
              />
              <CCarouselCaption
                className="d-none d-md-block "
                style={{
                  backgroundColor: "black",
                  opacity: "0.7",
                  padding: "10px",
                }}
              > */}
                <h5>{item.title}</h5>
                <p>{item.description}</p>
                <div className="mx-auto">
                  <div
                    style={{
                      backgroundColor: "greenyellow",
                      padding: "4px",
                      marginBlock: "10px",
                      borderRadius: "5px",
                      color: "black",
                    }}
                    onClick={() => navigate(`/property/${item.id}`)}
                  >
                    Learn More
                  </div>
                </div>
              </MDBCarouselItem>
            );
          })}
        </MDBCarousel>
      </div>
    </>
  );
}
export default Header;
