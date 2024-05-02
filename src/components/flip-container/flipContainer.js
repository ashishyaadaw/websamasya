import React from "react";
import "./flipContainer.css";
export default function FlipContainer({ name, src, quote, about }) {
  return (
    <div className="flip-container card">
      <div className="flipper ">
        <div className="front">
          <div className="testimonial-card ">
            <div className="testimonial-image">
              <img className="testimonial-photo" src={src} alt="no" />
            </div>
            <div className="testimonial-detail">
              <h4 className="">{name}</h4>
              <p className="">{about}</p>
            </div>
          </div>
        </div>
        <div className="back">
          <div className=" flex">
            <div className="col  testimonial-profile-photo">
              <img className="testimonial-profile-photo" src={src} alt="no" />
            </div>
            <div className="col testimonial-profile-detail">
              <h4 className="">{name}</h4>
              <p className="">{about}</p>
            </div>
          </div>
          <div className="paragraph container">
            {" "}
            <p>{quote}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
