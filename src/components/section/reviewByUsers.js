import React from "react";

function ReviewByUsers() {
  window.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY;
    if (scrollPosition < 2000) {
      document.getElementById("rwforall1").style.display = "none";
    }
    if (scrollPosition > 1999) {
      document.getElementById("rwforall1").style.display = "block";
    }
    if (scrollPosition < 2100) {
      document.getElementById("rwforall2").style.display = "none";
    }
    if (scrollPosition > 2099) {
      document.getElementById("rwforall2").style.display = "block";
    }
  });

  const services_details1 = [
    {
      title: "Add Page",
      src: "https://img.icons8.com/material-rounded/24/ffffff/new-by-copy.png",
      paragraph: `   Are you want to only add new page with features like form, table ,
              search bar, etc. No worry our certified web developers are ready.
          `,
    },
    {
      title: "Add Component",
      src: "https://img.icons8.com/material-rounded/24/ffffff/add-property.png",
      paragraph: `Add component like visitor's counter, image slider, customised notice section inside your webpage.
          `,
    },
    {
      title: "Migrate Website",
      src: "https://img.icons8.com/metro/26/ffffff/trekking.png",
      paragraph: `If want to switch your Hosting Provider, Domain registrar feel free to consult us.
          `,
    },
  ];
  const services_details2 = [
    {
      title: "Connections",
      src: "https://img.icons8.com/material-rounded/24/ffffff/coordinate-system.png",
      paragraph: `Create a eco connection system at every Social Media Platform. For Example a company named 'AlphaXYZ' can be accessible with similar username and having its unique representation .
          `,
    },
    {
      title: "Hire a Professional",
      src: "https://img.icons8.com/material-rounded/24/ffffff/send-job-list--v2.png",
      paragraph: `We campaign for you and sheldule interview, for your jobs opening. For example if a you need a graphics designer we reach out to best graphics designer in your budget.
          `,
    },
    {
      title: "Consultations",
      src: "https://img.icons8.com/fluency-systems-filled/48/ffffff/consultation.png",
      paragraph: `Currently we providing free consultations on services we listed in services section.So feel free to consult your requirement to make a consultation request try out our contacts.
          `,
    },
  ];
  return (
    <div>
      <section id="rwforall1" class="container ">
        <div class="row easy-slide-up">
          {/* <!-- comment component --> */}
          {services_details1.map((item, index) => (
            <div class="col comment-card ">
              <h6>
                <img width="24" height="24" src={item.src} alt={item.title} />
                &nbsp; {item.title}
              </h6>
              <p>{item.paragraph}</p>
            </div>
          ))}
        </div>
      </section>
      <section id="rwforall2" class="container ">
        <div class="row easy-slide-up">
          {/* <!-- comment component --> */}
          {services_details2.map((item, index) => (
            <div class="col comment-card ">
              <h6>
                <img width="24" height="24" src={item.src} alt={item.title} />
                &nbsp; {item.title}
              </h6>
              <p>{item.paragraph}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
export default ReviewByUsers;
