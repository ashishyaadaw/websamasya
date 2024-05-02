import React from "react";
import "./sectionTeam.css";
function SectionTeam() {
  window.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY;

    // Change the color based on the scroll position
    if (scrollPosition < 2400) {
      document.getElementById("teamHelpPng").style.display = "none";

      document.getElementById("teamHelpPara").style.display = "none";
    }
    if (scrollPosition < 3300 && scrollPosition > 2399) {
      document.getElementById("teamHelpPng").style.display = "block";

      document.getElementById("teamHelpPara").style.display = "block";
    }
  });
  return (
    <section class="col team-help-col">
      <div class="container team-help">
        <div class="row flex-row-reverse" style={{ minHeight: "300px" }}>
          <div class="col container team-help-side ">
            <div class="row">
              <div class="col-md-6 hide-md hide-lg hide-xlg ">
                <div id="teamHelpPng" class="col image-team-help ease-right-in">
                  <img
                    style={{
                      position: "absolute",
                      zIndex: "1",
                      opacity: "0.1",
                    }}
                    src="./ready_to_help.png"
                    alt="ready_to_help"
                  />
                </div>
              </div>

              <div class="col-md-6  hide-sm hide-xsm ">
                <div id="teamHelpPng" class="colimage-team-help ease-right-in">
                  <img src="./ready_to_help.png" alt="ready_to_help" />
                </div>
              </div>
            </div>
          </div>
          <div class="col p-4 container team-help-text">
            <h1 class="ft-quicksand fw-bolder" style={{ position: "absolute" }}>
              Our Team is Here to Help You 24/7
            </h1>
            <div id="teamHelpPara" class="row pt-5 mt-4 easy-slide-up">
              <div class="col-1"></div>
              <div class="col">
                <span id="teamHelpPara1">
                  <svg
                    fill="green"
                    data-v-165629f9=""
                    data-v-850f6438=""
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 12 24"
                    aria-label="check"
                    role="presentation"
                    class="w-12px h-24px h-features-reviews-section__feature-check-icon h-icon-success"
                    data-v-677323dc=""
                    style={{ width: "12px" }}
                  >
                    <g data-v-165629f9="">
                      <path
                        data-v-165629f9=""
                        d="M12 8.758a.694.694 0 0 1-.217.515l-5.605 5.485-1.053 1.03A.725.725 0 0 1 4.6 16a.724.724 0 0 1-.527-.212l-1.053-1.03-2.803-2.743A.694.694 0 0 1 0 11.5c0-.202.072-.374.217-.515l1.053-1.03a.725.725 0 0 1 .526-.213c.207 0 .382.071.527.213L4.6 12.19l5.078-4.977c.14-.14.33-.216.527-.212.206 0 .382.07.526.212l1.053 1.03c.142.134.22.321.217.516Z"
                      ></path>
                    </g>
                  </svg>
                  &nbsp; Get help directly from the editor, thanks to our 24/7
                  live chat support.
                </span>
                <br />
                <span id="teamHelpPara2">
                  <svg
                    fill="green"
                    data-v-165629f9=""
                    data-v-850f6438=""
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 12 24"
                    aria-label="check"
                    role="presentation"
                    style={{ width: "12px" }}
                    class="w-12px h-24px h-features-reviews-section__feature-check-icon h-icon-success"
                    data-v-677323dc=""
                  >
                    <g data-v-165629f9="">
                      <path
                        data-v-165629f9=""
                        d="M12 8.758a.694.694 0 0 1-.217.515l-5.605 5.485-1.053 1.03A.725.725 0 0 1 4.6 16a.724.724 0 0 1-.527-.212l-1.053-1.03-2.803-2.743A.694.694 0 0 1 0 11.5c0-.202.072-.374.217-.515l1.053-1.03a.725.725 0 0 1 .526-.213c.207 0 .382.071.527.213L4.6 12.19l5.078-4.977c.14-.14.33-.216.527-.212.206 0 .382.07.526.212l1.053 1.03c.142.134.22.321.217.516Z"
                      ></path>
                    </g>
                  </svg>
                  &nbsp; Troubleshoot by yourself with our video walkthroughs
                  and guides.
                </span>
                <br />
                <span id="teamHelpPara3">
                  <svg
                    fill="green"
                    data-v-165629f9=""
                    data-v-850f6438=""
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 12 24"
                    aria-label="check"
                    role="presentation"
                    style={{ width: "12px" }}
                    class="width-12px height-24px h-features-reviews-section__feature-check-icon h-icon-success"
                    data-v-677323dc=""
                  >
                    <g data-v-165629f9="">
                      <path
                        data-v-165629f9=""
                        d="M12 8.758a.694.694 0 0 1-.217.515l-5.605 5.485-1.053 1.03A.725.725 0 0 1 4.6 16a.724.724 0 0 1-.527-.212l-1.053-1.03-2.803-2.743A.694.694 0 0 1 0 11.5c0-.202.072-.374.217-.515l1.053-1.03a.725.725 0 0 1 .526-.213c.207 0 .382.071.527.213L4.6 12.19l5.078-4.977c.14-.14.33-.216.527-.212.206 0 .382.07.526.212l1.053 1.03c.142.134.22.321.217.516Z"
                      ></path>
                    </g>
                  </svg>
                  &nbsp; Become a pro webmaster with our in-depth tutorials.
                </span>
                <br />{" "}
                <span id="teamHelpPara1">
                  <svg
                    fill="green"
                    data-v-165629f9=""
                    data-v-850f6438=""
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 12 24"
                    aria-label="check"
                    role="presentation"
                    class="w-12px h-24px h-features-reviews-section__feature-check-icon h-icon-success"
                    data-v-677323dc=""
                    style={{ width: "12px" }}
                  >
                    <g data-v-165629f9="">
                      <path
                        data-v-165629f9=""
                        d="M12 8.758a.694.694 0 0 1-.217.515l-5.605 5.485-1.053 1.03A.725.725 0 0 1 4.6 16a.724.724 0 0 1-.527-.212l-1.053-1.03-2.803-2.743A.694.694 0 0 1 0 11.5c0-.202.072-.374.217-.515l1.053-1.03a.725.725 0 0 1 .526-.213c.207 0 .382.071.527.213L4.6 12.19l5.078-4.977c.14-.14.33-.216.527-.212.206 0 .382.07.526.212l1.053 1.03c.142.134.22.321.217.516Z"
                      ></path>
                    </g>
                  </svg>
                  &nbsp; Get help directly from the editor, thanks to our 24/7
                  live chat support.
                </span>
                <br />
                <span id="teamHelpPara2">
                  <svg
                    fill="green"
                    data-v-165629f9=""
                    data-v-850f6438=""
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 12 24"
                    aria-label="check"
                    role="presentation"
                    style={{ width: "12px" }}
                    class="w-12px h-24px h-features-reviews-section__feature-check-icon h-icon-success"
                    data-v-677323dc=""
                  >
                    <g data-v-165629f9="">
                      <path
                        data-v-165629f9=""
                        d="M12 8.758a.694.694 0 0 1-.217.515l-5.605 5.485-1.053 1.03A.725.725 0 0 1 4.6 16a.724.724 0 0 1-.527-.212l-1.053-1.03-2.803-2.743A.694.694 0 0 1 0 11.5c0-.202.072-.374.217-.515l1.053-1.03a.725.725 0 0 1 .526-.213c.207 0 .382.071.527.213L4.6 12.19l5.078-4.977c.14-.14.33-.216.527-.212.206 0 .382.07.526.212l1.053 1.03c.142.134.22.321.217.516Z"
                      ></path>
                    </g>
                  </svg>
                  &nbsp; Troubleshoot by yourself with our video walkthroughs
                  and guides.
                </span>
                <br />
                <span id="teamHelpPara3">
                  <svg
                    fill="green"
                    data-v-165629f9=""
                    data-v-850f6438=""
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 12 24"
                    aria-label="check"
                    role="presentation"
                    style={{ width: "12px" }}
                    class="width-12px height-24px h-features-reviews-section__feature-check-icon h-icon-success"
                    data-v-677323dc=""
                  >
                    <g data-v-165629f9="">
                      <path
                        data-v-165629f9=""
                        d="M12 8.758a.694.694 0 0 1-.217.515l-5.605 5.485-1.053 1.03A.725.725 0 0 1 4.6 16a.724.724 0 0 1-.527-.212l-1.053-1.03-2.803-2.743A.694.694 0 0 1 0 11.5c0-.202.072-.374.217-.515l1.053-1.03a.725.725 0 0 1 .526-.213c.207 0 .382.071.527.213L4.6 12.19l5.078-4.977c.14-.14.33-.216.527-.212.206 0 .382.07.526.212l1.053 1.03c.142.134.22.321.217.516Z"
                      ></path>
                    </g>
                  </svg>
                  &nbsp; Become a pro webmaster with our in-depth tutorials.
                </span>
                <br />
              </div>
              <div class="col-1"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionTeam;
