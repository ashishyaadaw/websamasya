import React from 'react'

function SectionWhatweDo() {
  return (
    <section id="WHATWEDOSECTION" className="what_we_section container-xxl">
    <ContainerFlex className={"bg-white"}>
      <div className="col-lg-4">
        {/* <HighlightHoverImage /> */}
        <div class="text-center rounded zoom-div ">
          <img
            src="./youth.png"
            style={{ maxHeight: "500px" }}
            class="img-fluid"
            alt="..."
          ></img>
        </div>
      </div>
      <ContainerType4
        heading={"What we do"}
        className={"col-lg-7 z-1"}
        paragraph={`Youth Power Association is an NGO working in the field of youth development and empowerment, environment conservation and sustainable development, and water conservation. Along with it, YPA, in co-operation with common people and district administration also works for rectifying other social issues and making people aware of them through public awareness programs. YPA is actively dedicated to get lots of development projects implemented. Youth Power Association is making efforts for the implementation of some development projects for water conservation, environment conservation and sustainable development, and youth development and empowerment supported by some local sponsors and District Administration. These development projects set a hallmark of integration, local information, substantial approach and urban resilience.`}
        buttonText={"Read More..."}
        pathname={"about_us"}
      />
      <div id="parentScroll" className="bg-antiquewhite container parent">
        <div class="child">
          <div class=" ">
            <div class="gridCard gridCard1 ">
              <div class="gridContainer ypa-gridContainer ">
                <img
                  src="/slide_images/cancer_screening_tandon_maam.jpg"
                  alt="Cancer Screening"
                />
              </div>
              <div class="details">
                <h3 style={{ padding: "20px", fontSize: "16px" }}>
                  Health Awareness Drive
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div class="child">
          <div class=" ">
            <div class="gridCard gridCard1 ">
              <div class="gridContainer ypa-gridContainer ">
                <img
                  src="/slide_images/workshop_day.jpg"
                  alt="workshop"
                />
              </div>
              <div class="details">
                <h3 style={{ padding: "20px" }}>Workshop</h3>
              </div>
            </div>
          </div>
        </div>{" "}
        <div class="child">
          <div class=" ">
            <div class="gridCard gridCard1 ">
              <div class="gridContainer ypa-gridContainer ">
                <img
                  src="/slide_images/plantation_ypa.jpg"
                  alt="Plantations"
                />
              </div>
              <div class="details">
                <h3 style={{ padding: "20px" }}>Plantation</h3>
              </div>
            </div>
          </div>
        </div>{" "}
        <div class="child">
          <div class=" ">
            <div class="gridCard gridCard1 ">
              <div class="gridContainer ypa-gridContainer ">
                <img
                  src="/slide_images/street_play.jpg"
                  alt="Street Play"
                />
              </div>
              <div class="details">
                <h3 style={{ padding: "20px" }}>Street Play</h3>
              </div>
            </div>
          </div>
        </div>{" "}
        <div class="child">
          <div class=" ">
            <div class="gridCard gridCard1 ">
              <div class="gridContainer ypa-gridContainer ">
                <img
                  src="/slide_images/jal_rakshak_event.webp"
                  alt="las vegas"
                />
              </div>
              <div class="details">
                <h3 style={{ padding: "20px" }}>Jal Rakshak</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContainerFlex>
  </section>
  )
}

export default SectionWhatweDo