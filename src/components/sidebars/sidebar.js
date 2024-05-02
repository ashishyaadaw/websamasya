import React from "react";
// import "./sidebars";
import "./sidebars.css";
import { Link } from "react-router-dom";
import {
  abouts,
  activities,
  gallery,
  join,
  media,
  project,
  works,
} from "../header/dropDowndata";
import { closeSideBar } from "../../script/ypa";
import ControlNav from "../controlNav/controlNav";
import SocialLink from "../socialLinks.component";

export default function Sidebar() {
  function closer(id) {
    const menu = [
      "aboutus-collapse",
      "whatwedo-collapse",
      "projects-collapse",
      "mediaCorner-collapse",
      "gallery-collapse",
      "activities-collapse",
      "joinus-collapse",
    ];
    for (let i = 0; i < menu.length; i++) {
      const elem = document.getElementById(menu[i]);
      if (id === menu[i]) {
        // elem.parentElement.setAttribute("aria-expanded", true);
        // elem.classList.add("show");
      } else {
        elem.classList.remove("show");
        elem.parentElement.setAttribute("aria-expanded", false);
      }
    }
  }
  function opener(id) {
    closer(id);
    const elem = document.getElementById(id);
    if (elem.parentElement.getAttribute("aria-expanded") === "true") {
      elem.classList.remove("show");
      elem.parentElement.setAttribute("aria-expanded", false);
    } else {
      elem.parentElement.setAttribute("aria-expanded", true);
      elem.classList.add("show");
    }
  }

  return (
    <>
      <div className="flex-shrink-0 p-3" style={{ width: "280px" }}>
        <ul className="list-unstyled ps-0">
          <li className="mb-1">
            <button
              className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#aboutus-collapse"
              aria-expanded="false"
              onClick={() => {
                opener("aboutus-collapse");
              }}>
              About us
            </button>
            <div className="collapse " id="aboutus-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                {abouts.map((list) => (
                  <li key={list.id} className="list-group-item hover">
                    <Link
                      className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                      to={list.replaceAll(" ", "_")}
                      onClick={closeSideBar}>
                      {list}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li className="mb-1">
            <button
              className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#whatwedo-collapse"
              aria-expanded="false"
              onClick={() => {
                opener("whatwedo-collapse");
              }}>
              What we do
            </button>
            <div className="collapse" id="whatwedo-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                {works.map((list) => (
                  <li key={list.id} className="list-group-item hover">
                    <Link
                      className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                      to={list.replaceAll(" ", "_")}
                      onClick={closeSideBar}>
                      {list}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li className="mb-1">
            <button
              className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#projects-collapse"
              aria-expanded="false"
              onClick={() => {
                opener("projects-collapse");
              }}>
              Projects
            </button>
            <div className="collapse" id="projects-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                {project.map((list) => (
                  <li key={list.id} className="list-group-item hover">
                    <Link
                      className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                      to={list.replaceAll(" ", "_")}
                      onClick={closeSideBar}>
                      {list}
                    </Link>
                  </li>
                ))}{" "}
              </ul>
            </div>
          </li>
          <li className="mb-1">
            <button
              className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#mediaCorner-collapse"
              aria-expanded="false"
              onClick={() => {
                opener("mediaCorner-collapse");
              }}>
              Media Corner
            </button>
            <div className="collapse" id="mediaCorner-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                {media.map((list) => (
                  <li key={list.id} className="list-group-item hover">
                    <Link
                      className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                      to={list.replaceAll(" ", "_")}
                      onClick={closeSideBar}>
                      {list}
                    </Link>
                  </li>
                ))}{" "}
              </ul>
            </div>
          </li>
          <li className="mb-1">
            <button
              className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#gallery-collapse"
              aria-expanded="false"
              onClick={() => {
                opener("gallery-collapse");
              }}>
              Gallery
            </button>
            <div className="collapse" id="gallery-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                {gallery.map((list) => (
                  <li key={list.id} className="list-group-item hover">
                    <Link
                      className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                      to={list.replaceAll(" ", "_")}
                      onClick={closeSideBar}>
                      {list}
                    </Link>
                  </li>
                ))}{" "}
              </ul>
            </div>
          </li>
          <li className="mb-1">
            <button
              className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#activities-collapse"
              aria-expanded="false"
              onClick={() => {
                opener("activities-collapse");
              }}>
              Activities
            </button>
            <div className="collapse" id="activities-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                {activities.map((list) => (
                  <li key={list.id} className="list-group-item hover">
                    <Link
                      className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                      to={list.replaceAll(" ", "_")}
                      onClick={closeSideBar}>
                      {list}
                    </Link>
                  </li>
                ))}{" "}
              </ul>
            </div>
          </li>
          <li className="mb-1">
            <button
              className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#joinus-collapse"
              aria-expanded="false"
              onClick={() => {
                opener("joinus-collapse");
              }}>
              Join us
            </button>
            <div className="collapse" id="joinus-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                {join.map((list) => (
                  <li key={list.id} className="list-group-item hover">
                    <Link
                      className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                      to={list.replaceAll(" ", "_")}
                      onClick={closeSideBar}>
                      {list}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div className="text-center border pb-3 pt-2">
        <ControlNav />
      </div>
      <div
        style={{ background: "black", width: "100%", margin: "0" }}
        className="text-center d-flex row overflow-hidden">
        <div className="col "></div>
        <div className="col">
          <SocialLink className="list-unstyled d-flex text-center " />
        </div>
        <div className="col"></div>
      </div>
    </>
  );
}
