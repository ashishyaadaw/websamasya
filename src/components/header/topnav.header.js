import React from "react";
import "./header.component.css";
import { Link } from "react-router-dom";
import DropDownList from "./dropDownList";
import "./dropDowndata";
import {
  abouts,
  activities,
  gallery,
  join,
  media,
  project,
  works,
} from "./dropDowndata";
export default function Topnav() {
  // this part call directly

  // this part is call Back functions
  function setNone(id) {
    document.getElementById(id).style.display = "none";
  }
  function setBlock(id) {
    document.getElementById(id).style.display = "block";
  }
  function displayByID(id, menuId) {
    const a = menuId;
    const elem = document.getElementById("topNavUL").children[a];
    elem.style.color = "blue";
    document.getElementById(id).style.display = "block";
  }
  function displayNoneById(id, menuId) {
    const a = menuId;
    const elem = document.getElementById("topNavUL").children[a];
    elem.style.color = "black";
    document.getElementById(id).style.display = "none";
  }
  function onMouseOver() {
    setNone("team");
    displayNoneById("aboutListGroup", 1);
    displayNoneById("whatWeDo", 2);
    displayNoneById("project", 3);
    displayNoneById("mediaCorner", 4);
    displayNoneById("activities", 5);
    displayNoneById("gallery", 6);
    displayNoneById("joinUs", 7);
  }
  return (
    <>
      <div className="mt-2 top-nav w-100 justify-content-end float-end ">
        <ul
          id="topNavUL"
          className="list-group list-group-horizontal fs-18 ft-andika fw-bold"
        >
          <li
            menuId={0}
            className="list-group-item home"
            onMouseOver={() => {
              onMouseOver();
            }}
          >
            <Link to={"home"}>
              <span>Home</span>
            </Link>
          </li>
          <li
            className="list-group-item "
            onMouseOver={() => {
              onMouseOver();
              displayByID("aboutListGroup", 1);
            }}
          >
            <Link to={"about_us"}>Creation</Link>
          </li>
          <li
            className="list-group-item"
            onMouseOver={() => {
              onMouseOver();
              displayByID("whatWeDo", 2);
            }}
          >
            <Link to={"what_we_do"}>About us</Link>
          </li>
          <li
            className="list-group-item"
            onMouseOver={() => {
              onMouseOver();
              displayByID("project", 3);
            }}
          >
            <Link to={"projects"}>Services</Link>
          </li>
          <li
            className="list-group-item"
            onMouseOver={() => {
              onMouseOver();
              displayByID("mediaCorner", 4);
            }}
          >
            <Link to={"media_corner"}>Pricing</Link>
          </li>
          <li
            className="list-group-item"
            onMouseOver={() => {
              onMouseOver();
              displayByID("gallery", 5);
            }}
          >
            <Link to={"gallery"}>Support </Link>
          </li>
          <li
            className="list-group-item collapse"
            onMouseOver={() => {
              onMouseOver();
              displayByID("activities", 6);
            }}
          >
            <Link to={"activities"}>Activities </Link>
          </li>
          <li
            className="list-group-item collapse"
            onMouseOver={() => {
              onMouseOver();
              displayByID("joinUs", 7);
            }}
          >
            <Link to={"join_us"}>Join us </Link>
          </li>
        </ul>
      </div>
      {/* this div to display render data of link that hoveered */}
      <div id="customRoot">
        {/* about us */}
        <DropDownList
          id={"aboutListGroup"}
          menuId={1}
          className={"about-list-group"}
        >
          {abouts.map((list) => (
            <li
              key={list.id}
              onMouseOver={() => {
                list === "Team" ? setBlock("team") : setNone("team");
              }}
              className="list-group-item hover"
            >
              <Link className="font-black-7" to={list.replaceAll(" ", "_")}>
                {list}
              </Link>
            </li>
          ))}
        </DropDownList>
        {/* what we do */}
        <DropDownList
          id={"whatWeDo"}
          menuId={2}
          className={"what-we-do-list-group"}
        >
          {works.map((list) => (
            <li
              key={list.id}
              onMouseOver={() => {
                setNone("team");
              }}
              className="list-group-item hover"
            >
              <Link className="font-black-7" to={list.replaceAll(" ", "_")}>
                {list}
              </Link>
            </li>
          ))}
        </DropDownList>
        <DropDownList
          id={"project"}
          menuId={3}
          className={"project-list-group"}
        >
          {project.map((list) => (
            <li
              key={list.id}
              onMouseOver={() => {
                setNone("team");
              }}
              className="list-group-item hover"
            >
              <Link className="font-black-7" to={list.replaceAll(" ", "_")}>
                {list}
              </Link>
            </li>
          ))}
        </DropDownList>
        <DropDownList
          id={"mediaCorner"}
          menuId={4}
          className={"media-corner-list-group"}
        >
          {media.map((list) => (
            <li
              key={list.id}
              onMouseOver={() => {
                setNone("team");
              }}
              className="list-group-item hover"
            >
              <Link className="font-black-7" to={list.replaceAll(" ", "_")}>
                {list}
              </Link>
            </li>
          ))}
        </DropDownList>
        <DropDownList
          id={"gallery"}
          menuId={5}
          className={"gallery-list-group"}
        >
          {gallery.map((list) => (
            <li
              key={list.id}
              onMouseOver={() => {
                setNone("team");
              }}
              className="list-group-item hover"
            >
              <Link className="font-black-7" to={list.replaceAll(" ", "_")}>
                {list}
              </Link>
            </li>
          ))}
        </DropDownList>
        <DropDownList
          id={"activities"}
          menuId={6}
          className={"activities-list-group"}
        >
          {activities.map((list) => (
            <li
              key={list.id}
              onMouseOver={() => {
                setNone("team");
              }}
              className="list-group-item hover"
            >
              <Link className="font-black-7" to={list.replaceAll(" ", "_")}>
                {list}
              </Link>
            </li>
          ))}
        </DropDownList>
        <DropDownList
          id={"joinUs"}
          menuId={7}
          className={"join-us-list-group row"}
        >
          {join.map((list) => (
            <li
              key={list.id}
              onMouseOver={() => {
                setNone("team");
              }}
              className="list-group-item hover"
            >
              <Link className="font-black-7" to={list.replaceAll(" ", "_")}>
                {list}
              </Link>
            </li>
          ))}
        </DropDownList>
      </div>
      
      {/* <div id="extendedRoot"></div> */}
    </>
  );
}
