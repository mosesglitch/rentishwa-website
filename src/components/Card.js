import { GrGallery } from "react-icons/gr";
import { AiOutlineCheckSquare } from "react-icons/ai";
import { MdOutlineBathroom, MdOutlineBedroomParent } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";

function Card(props) {
  return (
    <div className="card" style={{ padding: "25px" }}>
      <br />
      <div style={{ backgroundColor: "#f1f1f1", padding: "6px" }}>
        <div className="d-flex flex-row justify-content-between mx-3 ">
          <h3 className="card-title" style={{ fontWeight: "800" }}>
            {props.title}
          </h3>
          <h3 className="card-title" style={{ fontWeight: "800" }}>
            {props.price}
          </h3>
        </div>
      </div>
      <br />
      <div className="text-center">
        <img
          alt="card-img"
          src={props.img}
          className="text-center img-fluid"
          style={{ borderRadius: "10px" }}
        />
      </div>
      <div
        className="mt-3"
        style={{
          backgroundColor: "#f1f1f1",
          padding: "10px",
          borderRadius: "7px",
        }}
      >
        <div style={{ fontSize: "18px" }} className="mt-2 text-muted p-3">
          <HiLocationMarker
            className="mr-2 "
            style={{ marginBottom: "8px" }}
            size={20}
          />
          {props.location}
        </div>
        <div className="px-3">
          <span style={{ marginRight: "30px" }}>
            <MdOutlineBathroom size={25} className="text-muted" />{" "}
            {props.bathroom}
          </span>
          {/* </div>
      <div> */}
          <MdOutlineBedroomParent size={25} className="text-muted" />{" "}
          {props.bed}
        </div>
        <div className="p-3">
          <p className="card-text text-muted">{props.text}</p>
        </div>
      </div>
      <div className="text-center mt-3">
        <h5>Features</h5>
        <div className="p-3 d-flex flex-wrap justify-content-center align-items-center">
          {props.features.map((item) => (
            <li
              style={{
                textDecoration: "none",
                listStyleType: "none",
                marginLeft: "15px",
              }}
            >
              <AiOutlineCheckSquare /> {item}
            </li>
          ))}
        </div>
      </div>
      <div
        className="mt-4"
        style={{
          backgroundColor: "#f1f1f1",
          padding: "10px",
          borderRadius: "7px",
        }}
      >
        <h5 className="my-3 text-muted" style={{ fontWeight: "700" }}>
          <GrGallery size={18} className=" text-muted" /> Gallery
        </h5>
        <div className="row">
          {props.imgGallery.map((item) => (
            <img
              src={item}
              style={{
                height: "150px",
                width: "150px",
                objectFit: "cover",
                border: "1px solid grey",
              }}
            />
          ))}
        </div>
        <div className="google-map-code col-md-12 col-lg-12 col-sm-12 mt-4">
          <iframe
            title={`Map of ${props.title}`}
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15883.131055123344!2d${props.coord.Longitude}!3d${props.coord.Latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f0a763347cfb4d%3A0xe3e5619c3cf477d3!2sNairobi%2C%20Kenya!5e0!3m2!1en!2sin!4v1587818542745!5m2!1en!2sin&q=${props.title}@${props.coord.Latitude},${props.coord.Longitude}`}
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
    </div>
  );
}
export default Card;
