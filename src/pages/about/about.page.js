export default function AboutPage() {
  return (
    <>
      <div className="container my-5">
        <div className="p-5 text-center bg-body-tertiary rounded-3">
          <img
            src="logo_ypa.webp"
            className=" mt-5 mb-3"
            width="100"
            height="100"
            alt="logo here"
          />
          <h1 className="text-body-emphasis">Jumbotron with icon</h1>
          <p className="col-lg-8 mx-auto fs-5 text-muted">
            This is a custom jumbotron featuring an SVG image at the top, some
            longer text that wraps early thanks to a responsive{" "}
            <code>.col-*</code> className, and a customized call to action.
          </p>
          <div className="d-inline-flex gap-2 mb-5">
            <button
              className="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill"
              type="button"
            >
              Call to action
              <svg className="bi ms-2" width="24" height="24">
                {/* <use xlink:href="#arrow-right-short"></use> */}
              </svg>
            </button>
            <button
              className="btn btn-outline-secondary btn-lg px-4 rounded-pill"
              type="button"
            >
              Secondary link
            </button>
          </div>
        </div>
      </div>

      <div className="b-example-divider"></div>

      <div className="container my-5">
        <div className="position-relative p-5 text-center text-muted bg-body border border-dashed rounded-5">
          <button
            type="button"
            className="position-absolute top-0 end-0 p-3 m-3 btn-close bg-secondary bg-opacity-10 rounded-pill"
            aria-label="Close"
          ></button>

          {/* <use xlink:href="#check2-circle"></use> */}

          <h1 className="text-body-emphasis">Placeholder jumbotron</h1>
          <p className="col-lg-6 mx-auto mb-4">
            This faded back jumbotron is useful for placeholder content. It's
            also a great way to add a bit of context to a page or section when
            no content is available and to encourage visitors to take a specific
            action.
          </p>
          <button className="btn btn-primary px-5 mb-5" type="button">
            Call to action
          </button>
        </div>
      </div>

      <div className="b-example-divider"></div>

      <div className="my-5">
        <div className="p-5 text-center bg-body-tertiary">
          <div className="container py-5">
            <h1 className="text-body-emphasis">Full-width jumbotron</h1>
            <p className="col-lg-8 mx-auto lead">
              This takes the basic jumbotron above and makes its background
              edge-to-edge with a <code>.container</code> inside to align
              content. Similar to above, it's been recreated with built-in grid
              and utility classNamees.
            </p>
          </div>
        </div>
      </div>

      <div className="b-example-divider"></div>

      <div className="container my-5">
        <div className="p-5 text-center bg-body-tertiary rounded-3">
          <h1 className="text-body-emphasis">Basic jumbotron</h1>
          <p className="lead">
            This is a simple Bootstrap jumbotron that sits within a{" "}
            <code>.container</code>, recreated with built-in utility
            classNamees.
          </p>
        </div>
      </div>

      <div className="b-example-divider"></div>
    </>
  );
}
