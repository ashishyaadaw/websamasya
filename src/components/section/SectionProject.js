import React from 'react'

function SectionProject() {
  return (
    <section id="PROJECTS" className="projects_section bg-body-tertiary">
    <div className="position-relative  overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
      <div className="col-md-6 p-lg-3 mx-auto baap my-5">
        <h1 className="display-3 fw-bold">Our Projects</h1>
        <h3 className="fw-normal text-muted mb-3">
          Build anything you want with Aperture
        </h3>
        {/* <div className="d-flex gap-3 justify-content-center lead fw-normal">
        <a className="icon-link" href=".">
          Learn more
          <svg className="bi"></svg>
        </a>
        <a className="icon-link" href=".">
          Buy
          <svg className="bi"></svg>
        </a>
      </div> */}
      </div>
      <div className="product-device  shadow-sm d-none d-md-block"></div>
      <div className="product-device  product-device-2 shadow-sm d-none d-md-block"></div>
      <div className=" bg-body-tertiary parent">
        <div class="child">
          <div class=" ">
            <div class="gridCard gridCard1 ">
              <div class="gridContainer ypa-gridContainer ">
                <img
                  src="https://th.bing.com/th/id/OIP.-KFqfjxZRSwhJtqoojth7QHaE8?w=226&h=180&c=7&r=0&o=5&pid=1.7"
                  alt="las vegas"
                />
              </div>
              <div class="details">
                <h3 style={{ padding: "20px" }}>Jal Rakshak</h3>
              </div>
            </div>
          </div>
        </div>
        <div class="child">
          <div class=" ">
            <div class="gridCard gridCard1 ">
              <div class="gridContainer ypa-gridContainer ">
                <img
                  src="https://lekhapora.org/wp-content/uploads/2019/04/Unity-Is-Strength-Story-300x200.jpg"
                  alt="las vegas"
                />
              </div>
              <div class="details">
                <h3 style={{ padding: "20px" }}>Gram Chaupal</h3>
              </div>
            </div>
          </div>
        </div>{" "}
        <div class="child">
          <div class=" ">
            <div class="gridCard gridCard1 ">
              <div class="gridContainer ypa-gridContainer ">
                <img
                  src="https://th.bing.com/th/id/OIP.ZJPuJ5MnAshD1GI_woPKuQHaDt?pid=ImgDet&rs=1"
                  alt="las vegas"
                />
              </div>
              <div class="details">
                <h3 style={{ padding: "20px" }}>Shramdan Abhiyan</h3>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  </section>
  )
}

export default SectionProject