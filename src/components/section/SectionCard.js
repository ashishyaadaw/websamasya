import { post } from "jquery";
import React from "react";

function SectionCard() {
  window.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY;

    // Change the color based on the scroll position
    if (scrollPosition < 3100) {
      document.getElementById("sectionCardAppear").style.display = "none";
    }
    if (scrollPosition < 4000 && scrollPosition > 3099) {
      document.getElementById("sectionCardAppear").style.display = "block";
    }
  });
  const rating_card = [
    {
      title: "Mr. Shiv Prasad Shukla",
      post: "President Youth Power Association(NGO)",
      paragraph: `Easy to use, intuitive and fluid interface, support always willing
            to assist in problems that may appear.`,
    },
    {
      title: "Smt. Urmilla Singh",
      post: "Salon Owner",
      paragraph: `Customisation is next level , service budget to services every thing is remarkable.`,
    },
    {
      title: "Dr. Chandra Shukla",
      post: "Doctor",
      paragraph: `Thanks for turning my idea into a product. It's helps not only the patient but me also .`,
    },
  ];
  return (
    <section id="sectionCardAppear" class="container easy-slide-up">
      <div class="row ">
        {/* <!-- comment component --> */}
        {rating_card.map((item, index) => (
          <div class="col comment-card">
            <h6>{item.title}</h6>
            <small className="font-mono text-secondary ">{item.post}</small>
            <p>"{item.paragraph}"</p>

            <ul
              style={{
                textDecoration: "none",
                flexDirection: "row-reverse",
                listStyle: "none",
              }}
              className="list-group-horizontal list-group"
            >
              <li>
                {" "}
                <a href="#">
                  <svg
                    data-v-165629f9=""
                    data-v-0242f588=""
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    aria-label="arrow-right"
                    role="presentation"
                    class="h-icon-primary"
                    height="32"
                    fill="white"
                    // style={{width:"24px"}}
                  >
                    <g data-v-165629f9="">
                      <path
                        data-v-165629f9=""
                        d="M8.29498 16.885L12.875 12.295L8.29498 7.705L9.70498 6.295L15.705 12.295L9.70498 18.295L8.29498 16.885Z"
                      ></path>
                    </g>
                  </svg>
                </a>
              </li>
              <li id="star1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ fill: "darkorange" }}
                  height="32"
                  className="star"
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path d="m233-80 65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Z" />
                </svg>
              </li>
              <li id="star2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ fill: "darkorange" }}
                  height="32"
                  className="star"
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path d="m233-80 65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Z" />
                </svg>
              </li>
              <li id="star3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ fill: "darkorange" }}
                  height="32"
                  className="star"
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path d="m233-80 65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Z" />
                </svg>
              </li>
              <li id="star4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ fill: "darkorange" }}
                  height="32"
                  className="star"
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path d="m233-80 65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Z" />
                </svg>
              </li>
              <li id="star5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ fill: "darkorange" }}
                  height="32"
                  className="star"
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path d="m233-80 65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Z" />
                </svg>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SectionCard;
