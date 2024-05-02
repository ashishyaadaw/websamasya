import React from "react";
import "./chatBot.css";
export default function ChatBot() {
  function callbackRequestFormOpen() {
    document.getElementById("callback-form-toogle").style.display = "block";
    document.getElementById("callback_requested").style.display = "block";
  }
  function callbackRequestFormClose() {
    document.getElementById("callback-form-toogle").style.display = "none";
    document.getElementById("callback_request").style.display = "block";
    document.getElementById("callback_requested").style.display = "none";
  }
  return (
    <div className="dropdown position-fixed bottom-0 start-0 mb-3 me-3 bd-mode-toggle">
      <div style={{ border: "none", background: "none" }}>
        <img
          onClick={() => {
            if (
              document.getElementById("callback_requested").style.display ==
              "none"
            ) {
              callbackRequestFormOpen();
            } else {
              callbackRequestFormClose();
            }
          }}
          onMouseEnter={callbackRequestFormOpen}
          id="callback_request"
          height={58}
          src="./request callback.png"
        ></img>
        <div id="callback-form-toogle" className="callback-form-toggle">
          <img
            onClick={callbackRequestFormClose}
            id="callback_requested"
            height={28}
            src="./Cancel.png"
          ></img>
          <div className="top-head-callback-toddle"></div>
          <div style={{ width: "300px" }} className="container">
            <form
              style={{ paddingTop: "30px" }}
              action="submitRequestCallBack.php"
              method="POST"
            >
              <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="form-group ">
                  <input
                    name="ctl00$txtname_top"
                    type="text"
                    id="txtname_top"
                    class="form-control"
                    placeholder="Name*"
                  />
                </div>
              </div>
              <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="form-group ">
                  <input
                    name="ctl00$txtname_top"
                    type="text"
                    id="txtname_top"
                    class="form-control"
                    placeholder="Mobile*"
                  />
                </div>
              </div>
              <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="form-group ">
                  <input
                    name="ctl00$txtname_top"
                    type="text"
                    id="txtname_top"
                    class="form-control"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="form-group ">
                  <input
                    name="ctl00$txtname_top"
                    type="text"
                    id="txtname_top"
                    class="form-control"
                    placeholder="Your Business Name"
                  />
                </div>
              </div>

              <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="form-group ">
                  <button className="btn websamasya-primary-btn">
                    {" "}
                    Request
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
