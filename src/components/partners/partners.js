import React, { useEffect, useState } from "react";
import "./partner.css";

import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";
export default function Partner() {
  // fecth json file
  let jsonFile = "/assets/json/partner/partners.json";

  const [partners, setPartner] = useState([
    {
      nmae: "Madhyamik Shiksha Parisad Uttar Pradesh",
      imageSrc: "/auth/upload/our-partner/Up.png",
      href: "/",
      visibility: true,
    },
  ]);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    fetch(jsonFile)
      .then((res) => {
        return res.json();
      })
      .then((myJson) => {
        setPartner(myJson);
        setIndex(myJson.length);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const lastIndex = partners.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, partners]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
      updateSlider();
    }, 2000);

    return () => {
      clearInterval(slider);
    };
  }, [index]);

  const totalSlides = partners.length + 2;

  function updateSlider() {
    // const slideWidth = document.querySelector(".slide").clientWidth;
    const offset = -index * 260;
    const slider_partner = document.getElementById("slider-partner");
    slider_partner.style.transform = `translateX(${offset}px)`;
  }

  function nextSlideP() {
    if (index < totalSlides - 1) {
      setIndex(index + 1);
    } else {
      index = 0;
    }
    updateSlider();
  }

  function prevSlideP() {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(totalSlides);
    }
    updateSlider();
  }

  // To stop the interval after 5 seconds

  return (
    <section className="section-partners ">
      <section className="testimonials text-center p-2 mb-3 ft-quicksand fw-bolder">
        <h2 className="fs-1 fw-bolder">Our Clients</h2>
      </section>

      <div class="slider-partner-section container">
        <div class="slider-partner-container " id="slider-partner">
          {partners.map((person) => {
            return (
              <>
                <div key={person} class="slide-partner">
                  <img
                    height="100px"
                    width=""
                    src={person.imageSrc}
                    alt={person.name}
                  />
                </div>
              </>
            );
          })}
        </div>
        <div class="controls-partner">
          <button
            className=" prev-partner"
            onClick={() => {
              nextSlideP();
            }}
          >
            <FiChevronsLeft />
          </button>
          <button
            className=" next-partner"
            onClick={() => {
              prevSlideP();
            }}
          >
            <FiChevronsRight />
          </button>
        </div>
      </div>
    </section>
  );
}
