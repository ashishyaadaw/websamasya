import React from "react";

import { Link } from "react-router-dom";
import "./header.component.css";
import Topnav from "./topnav.header";
import Sidebar from "../sidebars/sidebar";
import ControlNav from "../controlNav/controlNav";
export default function Header() {
  function openSideBar() {
    const toddleCross = document.getElementById("toddle-cross");
    const toddleMenu = document.getElementById("toddle-menu");
    const mobileHeader = document.getElementById("mobileHeader");
    if (toddleCross.style.display === "none") {
      toddleMenu.style.display = "none";
      toddleCross.style.display = "block";
      mobileHeader.style.display = "block";
    } else {
      toddleCross.style.display = "none";
      toddleMenu.style.display = "block";
      mobileHeader.style.display = "none";
    }
  }
  return <></>;
}
