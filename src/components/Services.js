import Card from "./Card";
import { Properties } from "./Data";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { IoIosPricetag } from "react-icons/io";
import { HiLocationMarker } from "react-icons/hi";

function Services() {
  const { houseId } = useParams();
  let navigate = useNavigate();

  console.log(houseId, "hiddddd");
  return (
    <div className="my-5 services mt-4">
      <div className="card-cover">
        <div className="col-md-12">
          <div className="row">
            {Properties?.filter((house) => house.id === houseId).map((item) => {
              return (
                <div className="mb-2">
                  <Card
                    title={item.title}
                    img={item.image}
                    text={item.description}
                    features={item.features}
                    imgGallery={item.imgGallery}
                    price={item.price}
                    location={item.location}
                    bed={item.bed}
                    coord={item.coord}
                    bathroom={item.bathroom}
                  />
                  {console.log(item.bed, "bedika")}
                </div>
              );
            })}
          </div>
          <div>
            <h3 className="my-5">Similar Properties</h3>
            {Properties?.filter((house) => house.id !== houseId).map((item) => {
              return (
                <div
                  className="mb-2 c-card"
                  onClick={() => {
                    navigate(`/property/${item.id}`);
                    window.scrollTo({
                      top: 0, // Scroll to the top of the page
                      behavior: "smooth", // Optionally, use smooth scrolling
                    });
                  }}
                >
                  <div className="d-flex">
                    <img
                      src={item.image}
                      style={{
                        minWidth: "150px",
                        maxWidth: "150px",
                        height: "150px",
                        objectFit: "cover",
                        borderRadius: "10px",
                      }}
                    />
                    <div className="" style={{ marginLeft: "9px" }}>
                      <div
                        className=""
                        style={{ fontSize: "23px", fontWeight: "500" }}
                      >
                        {item.title}
                      </div>
                      <div
                        className="my-2 text-muted"
                        style={{
                          fontSize: "18px",
                          height: "46px", // Set to 2 lines of text (2 * line height)
                          lineHeight: "23px",
                          // whiteSpace: "nowrap", // Prevent text from wrapping
                          overflow: "hidden", // Hide any overflow
                          textOverflow: "ellipsis", // Display an ellipsis when text overflows
                        }}
                      >
                        {item.description}
                      </div>
                      <div
                        style={{ fontSize: "18px" }}
                        className="mt-2 text-muted"
                      >
                        <HiLocationMarker className="mr-2 mb-1" size={20} />
                        {item.location}
                      </div>
                      <div
                        style={{ fontSize: "20px" }}
                        className="mt-2 text-muted"
                      >
                        <IoIosPricetag className="mr-2 " size={20} />
                        {item.price}
                      </div>
                    </div>
                  </div>
                  {/* <Card
                    title={item.title}
                    img={item.image}
                    text={item.description}
                    features={item.features}
                    imgGallery={item.imgGallery}
                  /> */}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Services;
