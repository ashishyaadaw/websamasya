import React from 'react'
import GridCard from '../Grid Cards/GridCard'

function SectionActivities() {
  return (
    <section id="ACTIVITIES" className="projects_section bg-body-tertiary">
    <div className="position-relative  overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
      <div className="col-md-6 p-lg-3 mx-auto my-5">
        <h1 className="display-3 fw-bold">Activities</h1>
        <h3 className="fw-normal text-muted mb-3">
          Fun, Events and Activities at YPA
        </h3>
      </div>
      <div className="product-device shadow-sm d-none d-md-block scrollDiv"></div>
      <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      <div className=" bg-body-tertiary">
        <div className="image-conatiner">
        <GridCard />
        </div>
      </div>
    </div>
  </section>
  )
}

export default SectionActivities