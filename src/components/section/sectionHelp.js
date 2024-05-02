import React from 'react'

function SectionHelp() {
  window.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY;
    if (scrollPosition < 1420) {
      document.getElementById("cwforall").style.display = "none";
    }
    if (scrollPosition > 1419) {
      document.getElementById("cwforall").style.display = "block";
    }
  });
  return (
    <section class="container-fluid help-support">
    <div class="container">
      <div class="row help-support-text">
        <span>We're here for you</span>
      </div>
      <div class="row help-support-menu">
        <div class="col-3 help-support-box">
          <span>Get answers</span>
          <p>
            Watch tutorials and read detailed articles in the Wix Help
            Center.
          </p>
          <a href="#">
            Go to Help Center&nbsp;
            <svg
              data-bbox="0.4 0.3 17.5 11.7"
              viewBox="0 0 18 12"
              xmlns="http://www.w3.org/2000/svg"
              data-type="shape"
            >
              <g>
                <path
                  d="M11.8 12H9.3l5.2-5H.4V5.3h14.1L9.3.3h2.5l6.1 5.9-6.1 5.8z"
                ></path>
              </g>
            </svg>
          </a>
        </div>
        <div class="col-3 help-support-box">
          <span>Hire a pro</span>
          <p>Get help at any stage—from site creation to online growth.</p>
          <a href="#">
            Browse All Services&nbsp;
            <svg
              data-bbox="0.4 0.3 17.5 11.7"
              viewBox="0 0 18 12"
              xmlns="http://www.w3.org/2000/svg"
              data-type="shape"
            >
              <g>
                <path
                  d="M11.8 12H9.3l5.2-5H.4V5.3h14.1L9.3.3h2.5l6.1 5.9-6.1 5.8z"
                ></path>
              </g>
            </svg>
          </a>
        </div>
        <div class="col-4 help-support-box">
          <span>Contact us</span>
          <p>
            Get support by chat or schedule a call with a Customer Care
            Expert
          </p>
          <a href="#">
            Chat with Us&nbsp;
            <svg
              data-bbox="0.4 0.3 17.5 11.7"
              viewBox="0 0 18 12"
              xmlns="http://www.w3.org/2000/svg"
              data-type="shape"
            >
              <g>
                <path
                  d="M11.8 12H9.3l5.2-5H.4V5.3h14.1L9.3.3h2.5l6.1 5.9-6.1 5.8z"
                ></path>
              </g>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
  )
}

export default SectionHelp