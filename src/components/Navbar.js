import React, { useState, useRef, useEffect } from "react";
import { SidebarData } from "./SideBarData";
import { Properties } from "./Data";
import { Link, useNavigate, useLocation, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { TbHomeSearch } from "react-icons/tb";
import { Hamburger } from "./Hamburger";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBCollapse,
} from "mdb-react-ui-kit";
function NavBar() {
  const [visible, setVisible] = useState(false);
  const [sideBarOpen, setSidebarOpen] = useState(false);
  const [showBasic, setShowBasic] = useState(false);
  let navigate = useNavigate();
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  // document.addEventListener("scroll", function (e) {
  //   if (window.screen.width < 768 && window.scrollY > 690) {
  //     const gotop = document.querySelector(".gotop");
  //     gotop.classList.add("display");

  //     const nav = document.querySelector(".navbar");

  //     nav.classList.add("navopened");
  //   } else if (window.screen.width > 768 && window.scrollY > 220) {
  //     const gotop = document.querySelector(".gotop");
  //     gotop.classList.add("display");

  //     const nav = document.querySelector(".navbar");

  //     nav.classList.add("navopened");
  //   } else {
  //     const nav = document.querySelector(".navbar");
  //     const gotop = document.querySelector(".gotop");
  //     gotop.classList.remove("display");
  //     nav.classList.remove("navopened");
  //   }
  // });
  // function openBar() {
  //   const bar = document.querySelector(".bar");

  //   bar.classList.toggle("opened");
  // }

  return (
    <nav className="navbarn">
      <div className="containern">
        <div className="logo" onClick={() => navigate("/")}>
          <TbHomeSearch className="mb-2 mr-2" size={24} />
          <span style={{ fontSize: "23px", fontWeight: "600" }}>Rentishwa</span>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            {SidebarData.map((item, index) => {
              return (
                <li onClick={handleShowNavbar}>
                  <NavLink to={item.path}>{item.title}</NavLink>
                </li>
              );
            })}
            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle
                  tag="a"
                  className="nav-link text-dark"
                  role="button"
                  onClick={() => {
                    navigate(`/about`);
                    // handleShowNavbar();
                  }}
                >
                  About
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  {["Booking", "Enquiry", "Notification"].map((house) => (
                    <>
                      <MDBDropdownItem
                        onClick={() => {
                          navigate(`/about`);
                          handleShowNavbar();
                        }}
                        className="ml-2"
                        style={{ fontSize: "16px" }}
                      >
                        {house}
                      </MDBDropdownItem>
                    </>
                  ))}
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle
                  tag="a"
                  className="nav-link text-dark"
                  role="button"
                >
                  Properties
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  {Properties.map((house) => (
                    <>
                      <MDBDropdownItem
                        onClick={() => {
                          navigate(`property/${house.id}`);
                          handleShowNavbar();
                        }}
                        className="ml-2"
                        style={{ fontSize: "16px" }}
                      >
                        {house.title}
                      </MDBDropdownItem>
                    </>
                  ))}
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
          </ul>
        </div>
      </div>
    </nav>
    // <MDBNavbar expand="lg" light bgColor="light">
    //   <MDBContainer>
    //     <MDBNavbarBrand href="#">
    //       <TbHomeSearch className="mb-2 mr-2" size={25} />
    //       <span style={{ fontSize: "23px", fontWeight: "600" }}>Rentishwa</span>
    //     </MDBNavbarBrand>

    //     <MDBNavbarToggler
    //       aria-controls="navbarSupportedContent"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //       onClick={() => setShowBasic(!showBasic)}
    //     >
    //       <MDBIcon icon="bars" fas />
    //     </MDBNavbarToggler>

    //     <MDBCollapse navbar show={showBasic}>
    //       <MDBNavbarNav className="mr-auto mb-2 mb-lg-0 data-mdb-toggle">
    //         {SidebarData.map((item, index) => {
    //           return (
    //             <MDBNavbarItem key={index} className="data-mdb-toggle">
    //               <MDBNavbarLink active aria-current="page" href="#">
    //                 <Link to={item.path} active>
    //                   <span className="pl-2 text-black">{item.title}</span>
    //                 </Link>
    //               </MDBNavbarLink>
    //             </MDBNavbarItem>
    //           );
    //         })}

    //       </MDBNavbarNav>
    //     </MDBCollapse>
    //   </MDBContainer>
    // </MDBNavbar>
  );
}
export default NavBar;
