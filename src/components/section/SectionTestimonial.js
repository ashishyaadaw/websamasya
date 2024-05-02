import React from 'react'
import FlipContainer from '../flip-container/flipContainer'
import { testimonials } from "../flip-container/flipContainer.data";
function SectionTestimonial() {
  return (
    <section>
    <div className="row">
            <section className="section-partners">
              <h3>Testimonials</h3>
            </section>
          </div>
          <div className="tech-slideshow">
            <div className="mover">
              <div className="row">
                <div className="row bg-body-tertiary">
                  {testimonials.map((person) => (
                    <FlipContainer
                      key={person.id}
                      name={person.name}
                      about={person.about}
                      quote={person.quote}
                      src={person.img_url}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
  
    </section>
  )
}

export default SectionTestimonial