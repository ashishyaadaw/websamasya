import React from "react";
import "../components/notice/noticeBox";
import { Link } from "react-router-dom";
// for create
// for create  image frame that hightlight on hover
export function HighlightHoverImage() {
  return (
    <div class="row align-items-center image-container">
      <div class="col image-div rounded photo1">
        <img src="/workshop_article.jpg" alt="about pics 1" />
      </div>
      <div class="col image-div rounded photo2">
        <img src="/workshop_notice.jpg" alt="about pics 3" />
      </div>
    </div>
  );
}

// for create a container having flex row
// put code in children
// className
export function ContainerFlex({ children, className }) {
  return (
    <div className={className + "container col-xxl-8 px-4 py-5"}>
      <div className="row flex-lg-row align-items-center g-5 py-5">
        {/* put a right column here */}
        {children}
        {/* put left column here */}
      </div>
    </div>
  );
}

// for create a container with a
// logo on top ,
//  heading ,
//  paragraph ,
// link1
// link 2
//  image src,
// image height,
//  image width,
// children
export function ContainerType1({
  src,
  height,
  width,
  heading,
  paragraph,
  link1,
  link2,
}) {
  return (
    <div className="container my-5">
      <div className="p-5 text-center bg-body-tertiary rounded-3">
        <img
          src={src}
          className=" mt-5 mb-3"
          width={width}
          height={height}
          alt="logo here"
        />
        <h1 className="text-body-emphasis">{heading}</h1>
        <p className="col-lg-8 mx-auto fs-5 text-muted">{paragraph}</p>
        <div className="d-inline-flex gap-2 mb-5">
          <button
            className="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill"
            type="button">
            Call to action
            <svg className="bi ms-2" width="24" height="24"></svg>
          </button>
          <button
            className="btn btn-outline-secondary btn-lg px-4 rounded-pill"
            type="button">
            Secondary link
          </button>
        </div>
      </div>
    </div>
  );
}
// for create a container with
// heading,
// paragraph,
// link
export function ContainerType2({ heading, paragraph, link }) {
  return (
    <div className="container my-5">
      <div className="position-relative p-5 text-center text-muted bg-body border border-dashed rounded-5">
        <h1 className="text-body-emphasis">Placeholder jumbotron</h1>
        <p className="col-lg-6 mx-auto mb-4">
          This faded back jumbotron is useful for placeholder content. It's also
          a great way to add a bit of context to a page or section when no
          content is available and to encourage visitors to take a specific
          action.
        </p>
        <button className="btn btn-primary px-5 mb-5" type="button">
          Call to action
        </button>
      </div>
    </div>
  );
}
// for create a container with
// heading
// paragraph
export function ContainerType3({ heading, paragraph }) {
  return (
    <div className="p-5 text-center bg-body-tertiary">
      <div className="container py-5">
        <h1 className="text-body-emphasis">{heading}</h1>
        <p className="col-lg-8 mx-auto lead">{paragraph}</p>
      </div>
    </div>
  );
}
// for create a container having
// heading
// paragraph
// buttonText
// pathname
// className
export function ContainerType4({
  heading,
  paragraph,
  buttonText,
  pathname,
  className,
}) {
  return (
    <div className={className}>
      <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
        {heading}
      </h1>
      <p className="lead">{paragraph} </p>
      <div className="d-grid gap-2 d-md-flex justify-content-md-start">
        <button
          type="button"
          className="btn btn-outline-primary btn-lg px-4"
          onClick={() => {
            window.location.pathname = `${pathname}`;
          }}>
          {buttonText}
        </button>
      </div>
    </div>
  );
}
// for create a container having
// image src
// image alt
export function ContainerType5({ src, alt, className, width, height }) {
  return (
    <div className="col-10 col-sm-8 col-lg-6">
      <img
        src={src}
        className={className + "d-block mx-lg-auto img-fluid"}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
      />
    </div>
  );
}
// for create a notice link
export function AddNotice({
  targetLink,
  noticeHead,
  notice,
  noticeDate,
  isNew,
}) {
  return (
    <Link
      to={targetLink}
      target="_black"
      href="."
      className="list-group-item list-group-item-action  py-3 lh-sm"
      aria-current="true">
      <div className="d-flex w-100 align-items-center justify-content-between">
        <strong className="mb-1">
          {noticeHead}
          &nbsp;
          <span
            className={`badge ${
              !isNew ? "collapse" : ""
            } bg-warning-subtle border border-danger-subtle text-warning-emphasis rounded-pill`}>
            New
          </span>
        </strong>
        <small>
          <code>{noticeDate}</code>
        </small>
      </div>
      <div className=" mb-1 small">{notice}</div>
    </Link>
  );
}
// for create a events link
export function AddEvent({ targetLink, eventHead, event, eventDate, isNew }) {
  return (
    <Link
      to={targetLink}
      href="."
      className="list-group-item list-group-item-action  py-3 lh-sm"
      aria-current="true">
      <div className="d-flex w-100 align-items-center justify-content-between">
        <strong className="mb-1">
          {eventHead}
          &nbsp;
          <span
            className={`badge ${
              !isNew ? "collapse" : ""
            } bg-warning-subtle border border-danger-subtle text-warning-emphasis rounded-pill`}>
            New
          </span>
        </strong>
        <small>
          <code>{eventDate}</code>
        </small>
      </div>
      <div className=" mb-1 small">{event}</div>
    </Link>
  );
}
// for create a News link
export function AddNews({ targetLink, newsHead, news, newsDate, isNew }) {
  return (
    <Link
      to={targetLink}
      href="."
      className="list-group-item list-group-item-action  py-3 lh-sm"
      aria-current="true">
      <div className="d-flex w-100 align-items-center justify-content-between">
        <strong className="mb-1">
          {newsHead}
          &nbsp;
          <span
            className={`badge ${
              !isNew ? "collapse" : ""
            } bg-warning-subtle border border-danger-subtle text-warning-emphasis rounded-pill`}>
            New
          </span>
        </strong>
        <small>
          <code>{newsDate}</code>
        </small>
      </div>
      <div className=" mb-1 small">{news}</div>
    </Link>
  );
}
export function Card() {
  return (
    <div
      style={{ minWidth: "250px" }}
      className="container text-center p-5 col">
      <img
        src="./sample.png"
        height={100}
        style={{ border: "1px solid transparent", borderRadius: "50px" }}
        className="circle mx-auto d-block mb-4"
      />

      <h3 className="fw-semibold ft-andika">Har Har Gange</h3>
      <p className="fw-medium fs-4">
        This is section of big services that is provbided by websamasya
      </p>
    </div>
  );
}
export default function Component() {
  return;
}
