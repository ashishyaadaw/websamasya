import React from "react";

import "./footer.component.css";
import { closeSideBar } from "../../script/ypa";
export default function Footer() {
  const footer_quick_links = [
    {
      title: "Management Apps",
      sublinks: [
        {
          title: "Restaurant Management",
          href: "#",
        },
        {
          title: "School Management",
          href: "#",
        },
        {
          title: "Hospital Management",
          href: "#",
        },
        {
          title: "Library Management",
          href: "#",
        },
        {
          title: "Office Management",
          href: "#",
        },
      ],
    },
    {
      title: "Marketing Tools",
      sublinks: [
        {
          title: "Social Media Marketing",
          href: "#",
        },
        {
          title: "Search Engine Optimisation",
          href: "#",
        },
      ],
    },
    {
      title: "Design & Creations",
      sublinks: [
        {
          title: "Logo Design",
          href: "#",
        },
        {
          title: "Business Card",
          href: "#",
        },
        {
          title: "Invitation Card",
          href: "#",
        },
        {
          title: "Social Media Post",
          href: "#",
        },
      ],
    },
    {
      title: "Digital Tools",
      sublinks: [
        {
          title: "PDF Maker",
          href: "#",
        },
        {
          title: "Photo Enhancer",
          href: "#",
        },
      ],
    },
    {
      title: "Upgradation Website",
      sublinks: [
        {
          title: "Add Custom Feature",
          href: "#",
        },
        {
          title: "Add Slider",
          href: "#",
        },
        {
          title: "Add Notice",
          href: "#",
        },
        {
          title: "Add Page",
          href: "#",
        },
      ],
    },
  ];
  return (
    <div onClick={closeSideBar}>
      <footer id="footer" class="footer ">
        <div class="dont-know text-center">
          <div class="dont-know-text">
            <h1 className="ft-quicksand display-4">
              Don't Know where to Start ?
            </h1>
            <span class="font-andika">
              Click get started to start the exploring
            </span>
          </div>
          <div class="row">
            <div class="col"></div>
            <div id="get-start-btn" class="get-start-btn col-6">
              Get Started
            </div>
            <div class="col"></div>
          </div>
        </div>
        <div class="quick-links">
          <div class="row flex-row text-center">
            {footer_quick_links.map((menu, index) => (
              <div class="col min-width-quick-links">
                <ul class="quick-links">
                  <span>{menu.title}</span>
                  {menu.sublinks.map((list, index) => (
                    <li>
                      <a href={list.href}>{list.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div class="social-links">
          <ul>
            <li>
              <a href="#">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/733/733579.png"
                  alt="Twitter"
                  title="Twitter"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png"
                  alt="Facebook"
                  title="Facebook"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
                  alt="Youtube"
                  title="Youtube"
                  style={{ height: "32px" }}
                />
              </a>
            </li>

            <li>
              <a href="#">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/733/733585.png"
                  alt="Whatsapp"
                  title="Whatsapp"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1384/1384063.png"
                  alt="Instagram"
                  title="Instagram"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png"
                  alt="LinkedIn"
                  title="LinkedIn"
                />
              </a>
            </li>
          </ul>
        </div>
        <div class="text-center some-links">
          <ul>
            <li> &nbsp; Home</li>
            <li> &nbsp; Contact us</li>
            <li> &nbsp; Abouts</li>
            <li> &nbsp; Products</li>
            <li> &nbsp; Services</li>
            <li> &nbsp; More</li>
            <li> &nbsp; link here</li>
          </ul>
        </div>
        <div class="copyright-company text-center">
          <div class="container">
            <a class="">
              <img class="footer-logo" src="/logoHere.png" alt="logoHERE" />
            </a>
          </div>
          <div class="container">
            <span class="copyright-text">
              <span className="ft-quicksand ">
                © 2023-24 all right reserved - websamasya pvt. ltd.
              </span>
            </span>
          </div>
          <span className="btn btn-light ft-roboto fw-bolder">
            created by &nbsp; &nbsp;
            <img
              src="./logoHere.png"
              style={{ position: "absolute", marginTop: "-5px" }}
              height={34}
              alt="no text"
            />
            &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
          </span>
        </div>
      </footer>
    </div>
  );
}
