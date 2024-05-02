import React, { useEffect, useState } from "react";
// importing slider data
import { closeSideBar, getScrollPosition } from "../script/ypa";
import CraftingWebsiteForAll from "../components/craftingWebsiteForAll/craftingWebsiteForAll";
import SectionCard from "../components/section/SectionCard";
import ReviewByUsers from "../components/section/reviewByUsers";
import SectionTeam from "../components/section/sectionTeam";
import "../script/ypa";
import Partner from "../components/partners/partners";
export default function Home({ children }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 10000);
    showSlide(index);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  function showSlide(index) {
    const slider = document.getElementById("slider");
    const slides = document.getElementsByClassName("slide");
    if (index >= slides.length) {
      setIndex(0);
    } else if (index < 0) {
      setIndex(slides.length - 1);
    } else {
      clearInterval(slider);
    }
    slider.style.transform = `translateX(${-index * 100}%)`;
  }

  function nextSlide() {
    showSlide(index + 1);
  }

  function prevSlide() {
    showSlide(index - 1);
  }
  function getWidth() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );
  }
  window.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY;
    var screenWidth = getWidth();
    // this is for large devices
    if (screenWidth > 1000) {
      // Appear of section based on the scroll position
      if (scrollPosition < 50) {
        document
          .getElementById("websamasyaContainer")
          .classList.remove("fade-out");
        document.getElementById("websamasyaContainer").style.display = "none";

        document.getElementById("websamasyaContainer").style.opacity = "0";
      }
      if (scrollPosition < 500 && scrollPosition > 49) {
        document.getElementById("websamasyaContainer").style.display = "block";

        document.getElementById("websamasyaContainer").style.opacity = "1";

        document
          .getElementById("websamasyaContainer")
          .classList.remove("fade-out");
      }
      if (scrollPosition < 1270 && scrollPosition > 499) {
        document
          .getElementById("websamasyaContainer")
          .classList.add("fade-out");
        document.getElementById("websamasyaContainer").style.opacity = "0";
      }
    }
    // this is for medium devices
    if (screenWidth < 1001 && screenWidth > 576) {
      // Appear of section based on the scroll position
      if (scrollPosition < 150) {
        document
          .getElementById("websamasyaContainer")
          .classList.remove("fade-out");
        document.getElementById("websamasyaContainer").style.display = "none";

        document.getElementById("websamasyaContainer").style.opacity = "0";
      }
      if (scrollPosition < 500 && scrollPosition > 149) {
        document.getElementById("websamasyaContainer").style.display = "block";

        document.getElementById("websamasyaContainer").style.opacity = "1";

        document
          .getElementById("websamasyaContainer")
          .classList.remove("fade-out");
      }
      if (scrollPosition < 1270 && scrollPosition > 499) {
        document
          .getElementById("websamasyaContainer")
          .classList.add("fade-out");
        document.getElementById("websamasyaContainer").style.opacity = "0";
      }
    }
  });
  return (
    <>
      <div id="main" className="bg-ws-primary main" onClick={closeSideBar}>
        {/* inject the components */}
        {/* section slider */}
        {/* slider container */}
        {/* add more div with image to add more slide */}

        <div id="slider-container">
          <div id="slider">
            <div class="slide">
              <div className="row mt-5 text-center">
                <h1
                  style={{ position: "absolute" }}
                  className="display-3 hide-sm hide-xsm text-light fw-bolder ft-poppins p-5 mt-5"
                >
                  Build custom apps and website for your business, fast.
                  <br></br> <br></br>{" "}
                  <span className="bg-warning ft-quicksand"> Consult </span>
                  <span className="bg-primary ft-quicksand"> Design</span>
                  <br></br>
                  <a href="." className="get-start-btn ">
                    Get Started
                  </a>
                </h1>
                <h1
                  style={{ position: "absolute" }}
                  className="display-5 hide-lg hide-md hide-xlg text-light fw-bolder ft-poppins p-5 mt-5"
                >
                  Build custom apps and website for your business, fast.
                  <br></br> <br></br>{" "}
                  <span className="bg-warning fs-3 ft-quicksand">
                    {" "}
                    Consult{" "}
                  </span>
                  <span className="bg-primary fs-3 ft-quicksand"> Design</span>
                  <br></br>
                  <br></br>
                  <a href="." className="get-start-btn ">
                    Get Started
                  </a>
                </h1>

                <img
                  className="img-fluid"
                  // height={700}
                  src="screen.png"
                  alt="Slide 1"
                />
              </div>
            </div>
            <div class="slide">
              <div className="row mt-5 text-center">
                <h1
                  style={{ position: "absolute" }}
                  className="display-3 hide-sm hide-xsm text-light fw-bolder ft-poppins p-5 mt-5"
                >
                  Websamasya Marketing Team can help your growth. <br></br>
                  <br></br>
                  <span className="bg-warning mb-2 ft-quicksand">
                    {" "}
                    Social Media{" "}
                  </span>
                  <span className="bg-primary mb-2 ft-quicksand"> Post </span>
                  <span className="bg-danger mb-2 ft-quicksand"> Ads </span>
                  <span className="bg-success mb-2 ft-quicksand"> SEO </span>
                  <br></br>
                  <a href="." className="get-start-btn ">
                    Get Started
                  </a>
                </h1>
                <h1
                  style={{ position: "absolute" }}
                  className="display-5 hide-md hide-lg hide-xlg text-light fw-bolder ft-poppins p-5 mt-5"
                >
                  Websamasya Marketing Team can help your growth. <br></br>
                  <br></br>
                  <span className="bg-warning fs-2 ft-quicksand">
                    {" "}
                    Social Media{" "}
                  </span>
                  <span className="bg-primary fs-2 ft-quicksand"> Post </span>
                  <span className="bg-danger fs-2 ft-quicksand"> Ads </span>
                  <span className="bg-success fs-2 ft-quicksand"> SEO </span>
                  <br></br>
                  <br></br>
                  <a href="." className="get-start-btn ">
                    Get Started
                  </a>
                </h1>
                <img className="img-fluid" src="screen.png" alt="Slide 1" />
              </div>
            </div>
            <div class="slide">
              <div className="row mt-5 text-center">
                <h1
                  style={{ position: "absolute" }}
                  className="display-3 hide-sm hide-xsm text-light fw-bolder ft-poppins p-5 mt-5"
                >
                  Explore our tools and tips .<br></br> <br></br>
                  <span className="bg-warning ft-quicksand"> Tutorials </span>
                  <span className="bg-primary ft-quicksand"> Editor </span>
                  <span className="bg-danger ft-quicksand"> Maker </span>
                  <br></br>
                  <br></br>
                  <a href="." className="get-start-btn">
                    Get Started
                  </a>
                </h1>
                <h1
                  style={{ position: "absolute" }}
                  className="display-5 hide-md hide-lg hide-xlg text-light fw-bolder ft-poppins p-5 mt-5"
                >
                  Explore our tools and tips .<br></br> <br></br>
                  <span className="bg-warning fs-2 ft-quicksand">
                    {" "}
                    Tutorials{" "}
                  </span>
                  <span className="bg-primary fs-2 ft-quicksand"> Editor </span>
                  <span className="bg-danger fs-2 ft-quicksand"> Maker </span>
                  <br></br>
                  <br></br>
                  <a href="." className="get-start-btn ">
                    Get Started
                  </a>
                </h1>
                <img className="img-fluid" src="screen.png" alt="Slide 1" />
              </div>
            </div>
            {/* <!-- Add more slides as needed --> */}
          </div>
        </div>

        {/* section scale up container */}

        <div
          id="websamasyaContainer"
          style={{ display: "none" }}
          className="websamasya-container hide-md hide-sm hide-xsm   mt-3 mb-3 rounded "
        >
          <div className="websamasya-section-container shadow animation-fade-in-slide-up ">
            <div class="container">
              <span></span>
              <img className="img-fluid " src="./section4.png" />
            </div>
          </div>
        </div>

        <div className="text-center mt-5 container bg-ws-primary">
          <div class="row mt-5 pt-4 justify-content-around">
            <div className="col-md-6">
              {" "}
              <h1 className="display-2 hide-sm hide-xsm pb-4 text-light ft-quicksand fw-bolder">
                Want to create responsive Website ?
              </h1>
              <h1 className="display-4 hide-md hide-lg hide-xlg pb-4 pt-5 m-5 text-light ft-quicksand fw-bolder">
                Want to create responsive Website ?
              </h1>
            </div>
            <div className="col-md-6">
              <img
                className="img-fluid hide-sm hide-xsm"
                src="./responsive-website.png"
              ></img>
              <div className="container p-3 hide-md hide-lg hide-xlg">
                <img
                  className="img-fluid "
                  src="./responsive-website.png"
                ></img>
              </div>
            </div>
          </div>
        </div>
        <CraftingWebsiteForAll />
        <div
          style={{ height: "auto", minHeight: "450" }}
          className="reviewbyuser pd-3 pt-3 text-light mt-2 gridContainer"
        >
          <ReviewByUsers />
          <div>
            &nbsp; <br></br>
          </div>

          {/* <!-- Services menu list --> */}
          <div className="col">
            <img src="\services.png" className="img-fluid" alt="no text" />
          </div>
          <SectionTeam />
          <div
            style={{ height: "auto" }}
            className="pd-3 pt-3 text-light mt-2 gridContainer"
          >
            &nbsp;
            <SectionCard />
            <div>
              &nbsp; <br></br>
            </div>
            <div>
              &nbsp; <br></br>
            </div>
            <div>
              &nbsp; <br></br>
            </div>
          </div>
        </div>
        <div id="request_call_back">phone</div>
        <div className="row pt-5 bg-light">
          <div className="col-lg-6 hide-sm hide-xsm hide-md">
            <svg
              id="sw-js-blob-svg"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              {" "}
              <defs>
                {" "}
                <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                  {" "}
                  <stop
                    id="stop1"
                    stop-color="rgba(20, 85, 137, 1)"
                    offset="0%"
                  ></stop>{" "}
                  <stop
                    id="stop2"
                    stop-color="rgba(169.692, 27.843, 143.464, 0.3333333333333333)"
                    offset="100%"
                  ></stop>{" "}
                </linearGradient>{" "}
              </defs>{" "}
              <path
                fill="url(#sw-gradient)"
                d="M24.4,-21.6C31,-17.8,35.4,-8.9,36.2,0.8C37,10.5,34.2,20.9,27.6,25.4C20.9,29.8,10.5,28.1,-0.6,28.7C-11.7,29.4,-23.4,32.2,-31.7,27.8C-40,23.4,-45,11.7,-44.6,0.4C-44.2,-10.9,-38.4,-21.7,-30,-25.6C-21.7,-29.4,-10.9,-26.3,-1,-25.3C8.9,-24.3,17.8,-25.5,24.4,-21.6Z"
                width="100%"
                height="100%"
                transform="translate(50 50)"
                stroke-width="0"
                style={{ transition: "all 0.3s ease 0s" }}
                stroke="url(#sw-gradient)"
              ></path>{" "}
            </svg>
          </div>
          <div className="col-lg-6 z-1 text-center ">
            <span className="display-5 fw-bolder ft-quicksand">
              Simple and easy step go Online.
            </span>
            <br></br>
            <div className="row text-start ft-quicksand p-5">
              <div className="col-6">
                <strong className="fs-5">
                  <span className="text-danger fs-4 fw-bolder ">1.</span> Bring
                  your idea.
                </strong>
                <br></br>
                <p>
                  Have a revolutionary idea? Need technology and capital to make
                  it into reality?
                </p>
              </div>

              <div className="col-6">
                <strong className="fs-5">
                  <span className="text-danger fs-4 fw-bolder ">2.</span> Design
                  and build your tech
                </strong>
                <br></br>
                <p>
                  Consult your design with our team or explore best suit design
                  templates for your enterprise.
                </p>
              </div>
              <div className="col-6">
                <strong className="fs-5">
                  <span className="text-danger fs-4 fw-bolder ">3.</span> Get
                  your website ready
                </strong>
                <br></br>
                <p>
                  After successfull payments your will get your website panel &
                  dashboard control and manual.
                </p>
              </div>
              <div className="col-6">
                <strong className="fs-5">
                  <span className="text-danger fs-4 fw-bolder ">4.</span> Launch
                  your website
                </strong>
                <br></br>
                <p>
                  We are glad to see you online.Explore more services and tools
                </p>
              </div>
              <div className="row">
                <button className="btn btn-warning">Contact Team</button>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex mt-5 mb-3 collapse row">
          <Partner />
        </div>
      </div>
    </>
  );
}
