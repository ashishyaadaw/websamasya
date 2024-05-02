import React from "react";
export default function ClickToTop() {
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  }

  // Scroll to top smoothly
  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <div className="dropdown position-fixed bottom-0 end-0  me-3 bd-mode-toggle">
      <button
        id="scrollToTopBtn"
        onClick={() => {
          scrollToTop();
        }}
        style={{
          border: "none",
          display: "none",
          background: "none",
          paddingBottom: "50px",
          paddingRight: "20px",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          viewBox="0 -960 960 960"
          width="48"
        >
          <path d="M463-349h36v-200l86 87 24-24-128-127-129 127 24 24 87-87v200Zm16.716 233q-75.356 0-141.254-28.911-65.899-28.912-115.234-78.188-49.336-49.277-78.282-115.226Q116-404.274 116-479.826q0-75.446 28.97-141.882 28.971-66.435 78.534-116.043 49.563-49.608 115.151-77.928Q404.242-844 479.383-844q75.503 0 142.245 28.286 66.741 28.286 116.13 77.848 49.39 49.562 77.816 116.082Q844-555.264 844-479.632q0 75.632-28.286 141.029-28.286 65.397-77.834 114.995-49.549 49.598-116.051 78.603Q555.327-116 479.716-116Zm.284-35q136.513 0 232.756-96.244Q809-343.487 809-480t-96.244-232.756Q616.513-809 480-809t-232.756 96.244Q151-616.513 151-480t96.244 232.756Q343.487-151 480-151Zm0-329Z" />
        </svg>
      </button>{" "}
    </div>
  );
}
