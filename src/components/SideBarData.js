import React from "react";
import { FaAddressBook, FaUsers } from "react-icons/fa";
import { MdOutlineImageSearch } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { FaEdit, FaHandsHelping, FaUser } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";

export const SidebarData = [
  {
    title: "Homes",
    path: "/",
    icon: <FaUser />,
    cName: "nav-text",
  },
  // {
  //   title: "Properties",
  //   path: "/properties",
  //   icon: <FaUser />,
  //   cName: "nav-text",
  // },
  {
    title: "About",
    path: "/about",
    icon: <FaEdit />,
    cName: "nav-text",
  },

  {
    title: "Contact",
    path: "/contact",
    icon: <FaHandsHelping />,
    cName: "nav-text",
  },
  {
    title: "Login",
    path: "/login",
    icon: <FaHandsHelping />,
    cName: "nav-text",
  },
];
