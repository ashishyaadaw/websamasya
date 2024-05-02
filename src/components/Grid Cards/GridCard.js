import React from "react";
import "../Grid Cards/gridStyle.css";
function GridCard() {
  return (
    <div class="gridCards ">
      <div class="gridCard gridCard1 ">
        <div class="gridContainer ">
          <img src="/slide_images/street_play.jpg" alt="las vegas" />
        </div>
        <div class="details">
          <h3>Street Play</h3>
          <p>
            Street Play artist perform activities to aware people about
            healthcare, hygine and environment protection.
          </p>
        </div>
      </div>

      <div class="gridCard gridCard2">
        <div class="gridContainer">
          <img src="/slide_images/plantation_ypa.jpg" alt="New York" />
        </div>
        <div class="details">
          <h3>Plantation </h3>
          <p>
            In the series of Environment Protection Plantation is main
            Activities that YPA's Youth Do
          </p>
        </div>
      </div>
      <div class="gridCard gridCard3">
        <div class="gridContainer">
          <img
            src="/slide_images/certificate_distribution_30_days_workshops.jpg"
            alt="Singapore"
          />
        </div>
        <div class="details">
          <h3>Workshop</h3>
          <p>
            Many workshop held by Youth Power Association in Youth Development
          </p>
        </div>
      </div>
    </div>
  );
}

export default GridCard;
