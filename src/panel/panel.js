import React from "react";
import "./panel.css";
import { Link, Outlet } from "react-router-dom";
import "./script";
import people from "../components/slider/data";
import { notices } from "../components/notice/notices.data";
import { events } from "../components/notice/event.data";
import { news } from "../components/notice/news.data";
import { testimonials } from "../components/flip-container/flipContainer.data";
import { partners } from "../components/partners/partner.data";
export function SlideController() {
  function SubmitForm(id) {
    const getFormByID = document.getElementById(id).children;
    const image = getFormByID[0].children;
    const name = getFormByID[1].children;
    const title = getFormByID[1].children;
    const quote = getFormByID[2].children;
    const visibility = getFormByID[3].children;
    let idValue;
    if (id === "addNew") {
      idValue = people.length + 1;
    } else {
      idValue = id.replace("B", "");
    }

    const formData = {
      id: Number(idValue),
      image: image[0].value,
      name: name[0].value,
      title: title[0].value,
      quote: quote[0].value,
      visibility: visibility[0].value,
    };
    people[idValue - 1] = formData;
    console.log(people);
  }
  return (
    <div class="container-fluids shadow">
      <div class="table-responsive">
        <div class="table-wrapper">
          <div class="table-title">
            <div class="row">
              <div class="col-sm-8">
                <h2>Slider Control Panel</h2>
              </div>
              <div class="col-sm-4">
                <button
                  type="button"
                  class="btn btn-info add-new"
                  onClick={() => {
                    let elem1 = document.getElementById("addNew");
                    elem1.classList.remove("collapse");
                  }}
                >
                  <i class="fa fa-plus"></i> Add New
                </button>
              </div>
            </div>
          </div>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>Upload</th>
                <th>Heading</th>
                <th>Discription</th>
                <th>Visibility</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr id="addNew" className="collapse">
                <td>
                  <input
                    className="upload_image"
                    type="file"
                    accept="image/png, image/jpeg"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Add Heading"
                    className="border border-0"
                  ></input>
                </td>
                <td>
                  {" "}
                  <input
                    type="text"
                    placeholder="Add Discription"
                    className="border border-0"
                  ></input>
                </td>
                <td>
                  <input type="checkbox"></input>
                </td>
                <td>
                  <Link
                    class=""
                    title="Add"
                    data-toggle="tooltip"
                    onClick={() => {
                      SubmitForm("addNew");
                    }}
                  >
                    <i class="material-icons">&#xE03B;</i>
                  </Link>
                  {/* <Link class="edit" title="Edit" data-toggle="tooltip">
                    <i class="material-icons">&#xE254;</i>
                  </Link> */}
                  <Link class="delete" title="Delete" data-toggle="tooltip">
                    <i class="material-icons">&#xE872;</i>
                  </Link>
                </td>
              </tr>
              {people.map((person) => (
                <>
                  {/* display normal on render */}
                  <tr id={`${person.id}A`} className="">
                    <td className="slider-data-show">
                      <button
                        style={{ fontSize: "12px" }}
                        className="border border-1 rounded p-1"
                      >
                        {person.name}
                      </button>
                    </td>
                    <td className="slider-data-show">{person.title}</td>
                    <td className="slider-data-show">{person.quote}</td>
                    <td className="slider-data-show">
                      {person.visibility ? (
                        <input type="checkbox" checked></input>
                      ) : (
                        <input type="checkbox"></input>
                      )}
                    </td>
                    <td>
                      <Link class="add" title="Add" data-toggle="tooltip">
                        <i class="material-icons">&#xE03B;</i>
                      </Link>
                      <Link
                        class="edit"
                        title="Edit"
                        data-toggle="tooltip"
                        onClick={() => {
                          let elem1 = document.getElementById(`${person.id}A`);
                          elem1.classList.add("collapse");
                          let elem2 = document.getElementById(`${person.id}B`);
                          elem2.classList.remove("collapse");
                        }}
                      >
                        <i class="material-icons">&#xE254;</i>
                      </Link>
                      <Link class="delete" title="Delete" data-toggle="tooltip">
                        <i class="material-icons">&#xE872;</i>
                      </Link>
                    </td>
                  </tr>

                  {/* this will display on edit */}
                  <tr id={`${person.id}B`} className="collapse">
                    <td>
                      <input
                        className="upload_image"
                        type="file"
                        accept="image/png, image/jpeg"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        placeholder={person.title}
                        className="border border-0"
                        defaultValue={person.title}
                      ></input>
                    </td>
                    <td>
                      {" "}
                      <textarea
                        type="text"
                        placeholder={person.quote}
                        className="border border-0"
                        defaultValue={person.quote}
                      ></textarea>
                    </td>
                    <td>
                      <input type="checkbox"></input>
                    </td>
                    <td>
                      <Link
                        class=""
                        title="Add"
                        data-toggle="tooltip"
                        onClick={() => {
                          SubmitForm(`${person.id}B`);
                          let elem2 = document.getElementById(`${person.id}A`);

                          elem2.classList.remove("collapse");
                          let elem1 = document.getElementById(`${person.id}B`);

                          elem1.classList.add("collapse");
                        }}
                      >
                        <i class="material-icons">&#xE03B;</i>
                      </Link>
                      {/* <Link class="add" title="Edit" data-toggle="tooltip">
                     <i class="material-icons">&#xE254;</i>
                   </Link> */}
                      <Link class="delete" title="Delete" data-toggle="tooltip">
                        <i class="material-icons">&#xE872;</i>
                      </Link>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export function NoticeController() {
  function SubmitForm(id) {
    const getFormByID = document.getElementById(id).children;
    const image = getFormByID[0].children;
    const name = getFormByID[1].children;
    const title = getFormByID[1].children;
    const quote = getFormByID[2].children;
    const visibility = getFormByID[3].children;
    let idValue;
    if (id === "addNewNotice") {
      idValue = notices.length + 1;
    } else {
      idValue = id.replace("B", "");
    }

    const formData = {
      id: Number(idValue),
      image: image[0].value,
      name: name[0].value,
      title: title[0].value,
      quote: quote[0].value,
      visibility: visibility[0].value,
    };
    notices[idValue - 1] = formData;
    console.log(notices);
  }
  return (
    <div class="container-fluids shadow">
      <div class="table-responsive">
        <div class="table-wrapper">
          <div class="table-title">
            <div class="row">
              <div class="col-sm-8">
                <h2>Notice Control Panel</h2>
              </div>
              <div class="col-sm-4">
                <button
                  type="button"
                  class="btn btn-info add-new"
                  onClick={() => {
                    let addNewNotice = document.getElementById("addNewNotice");
                    addNewNotice.classList.remove("collapse");
                  }}
                >
                  <i class="fa fa-plus"></i> Add New
                </button>
              </div>
            </div>
          </div>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>Upload File</th>
                <th>Date</th>
                <th>Heading</th>
                <th>Notice</th>
                <th>New</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr id="addNewNotice" className="collapse">
                <td>
                  <input
                    className="upload_image"
                    type="file"
                    accept="image/png, image/jpeg"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Add Heading"
                    className="border border-0"
                  ></input>
                </td>
                <td>
                  {" "}
                  <input
                    type="text"
                    placeholder="Add Discription"
                    className="border border-0"
                  ></input>
                </td>
                <td>
                  <input type="checkbox"></input>
                </td>
                <td>
                  <Link
                    class=""
                    title="Add"
                    data-toggle="tooltip"
                    onClick={() => {
                      SubmitForm("addNewNotice");
                    }}
                  >
                    <i class="material-icons">&#xE03B;</i>
                  </Link>
                  {/* <Link class="edit" title="Edit" data-toggle="tooltip">
                    <i class="material-icons">&#xE254;</i>
                  </Link> */}
                  <Link class="delete" title="Delete" data-toggle="tooltip">
                    <i class="material-icons">&#xE872;</i>
                  </Link>
                </td>
              </tr>
              {notices.map((notice) => (
                <>
                  {/* display normal on render */}
                  <tr id={`${notice.id}A`} className="">
                    <td className="slider-data-show">
                      <button
                        style={{ fontSize: "12px" }}
                        className="border border-1 rounded p-1"
                      >
                        {notice.noticeFile}
                      </button>
                    </td>
                    <td className="slider-data-show">{notice.noticeDate}</td>
                    <td className="slider-data-show">{notice.noticeHead}</td>
                    <td className="slider-data-show">{notice.notice}</td>
                    <td className="slider-data-show">
                      {notice.isNew ? (
                        <input type="checkbox" checked></input>
                      ) : (
                        <input type="checkbox"></input>
                      )}
                    </td>
                    <td>
                      <Link class="add" title="Add" data-toggle="tooltip">
                        <i class="material-icons">&#xE03B;</i>
                      </Link>
                      <Link
                        class="edit"
                        title="Edit"
                        data-toggle="tooltip"
                        onClick={() => {
                          let elem1 = document.getElementById(`${notice.id}A`);
                          elem1.classList.add("collapse");
                          let elem2 = document.getElementById(`${notice.id}B`);
                          elem2.classList.remove("collapse");
                        }}
                      >
                        <i class="material-icons">&#xE254;</i>
                      </Link>
                      <Link class="delete" title="Delete" data-toggle="tooltip">
                        <i class="material-icons">&#xE872;</i>
                      </Link>
                    </td>
                  </tr>

                  {/* this will display on edit */}
                  <tr id={`${notice.id}B`} className="collapse">
                    <td>
                      <input
                        className="upload_image"
                        type="file"
                        accept="image/png, image/jpeg"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        placeholder={notice.noticeDate}
                        className="border border-0"
                        defaultValue={notice.noticeDate}
                      ></input>
                    </td>
                    <td>
                      <input
                        type="text"
                        placeholder={notice.noticeHead}
                        className="border border-0"
                        defaultValue={notice.noticeHead}
                      ></input>
                    </td>
                    <td>
                      {" "}
                      <textarea
                        type="text"
                        placeholder={notice.notice}
                        className="border border-0"
                        defaultValue={notice.notice}
                      ></textarea>
                    </td>
                    <td>
                      <input type="checkbox"></input>
                    </td>
                    <td>
                      <Link
                        class=""
                        title="Add"
                        data-toggle="tooltip"
                        onClick={() => {
                          SubmitForm(`${notice.id}B`);
                          let elem2 = document.getElementById(`${notice.id}A`);

                          elem2.classList.remove("collapse");
                          let elem1 = document.getElementById(`${notice.id}B`);

                          elem1.classList.add("collapse");
                        }}
                      >
                        <i class="material-icons">&#xE03B;</i>
                      </Link>
                      {/* <Link class="add" title="Edit" data-toggle="tooltip">
                     <i class="material-icons">&#xE254;</i>
                   </Link> */}
                      <Link class="delete" title="Delete" data-toggle="tooltip">
                        <i class="material-icons">&#xE872;</i>
                      </Link>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export function NewsController() {
  function SubmitForm(id) {
    const getFormByID = document.getElementById(id).children;
    const image = getFormByID[0].children;
    const name = getFormByID[1].children;
    const title = getFormByID[1].children;
    const quote = getFormByID[2].children;
    const visibility = getFormByID[3].children;
    let idValue;
    if (id === "addNewNews") {
      idValue = news.length + 1;
    } else {
      idValue = id.replace("B", "");
    }

    const formData = {
      id: Number(idValue),
      image: image[0].value,
      name: name[0].value,
      title: title[0].value,
      quote: quote[0].value,
      visibility: visibility[0].value,
    };
    news[idValue - 1] = formData;
    console.log(news);
  }
  return (
    <div class="container-fluids">
      <div class="table-responsive">
        <div class="table-wrapper">
          <div class="table-title">
            <div class="row">
              <div class="col-sm-8">
                <h2>News Control Panel</h2>
              </div>
              <div class="col-sm-4">
                <button
                  type="button"
                  class="btn btn-info add-new"
                  onClick={() => {
                    let addNewNews = document.getElementById("addNewNews");
                    addNewNews.classList.remove("collapse");
                  }}
                >
                  <i class="fa fa-plus"></i> Add New News
                </button>
              </div>
            </div>
          </div>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>Target URL</th>
                <th>Date</th>
                <th>Heading</th>
                <th>News</th>
                <th>New</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr id="addNewNews" className="collapse">
                <td>
                  <input
                    className="upload_image"
                    type="file"
                    accept="image/png, image/jpeg"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Add Heading"
                    className="border border-0"
                  ></input>
                </td>
                <td>
                  {" "}
                  <input
                    type="text"
                    placeholder="Add Discription"
                    className="border border-0"
                  ></input>
                </td>
                <td>
                  <input type="checkbox"></input>
                </td>
                <td>
                  <Link
                    class=""
                    title="Add"
                    data-toggle="tooltip"
                    onClick={() => {
                      SubmitForm("addNewNews");
                    }}
                  >
                    <i class="material-icons">&#xE03B;</i>
                  </Link>
                  {/* <Link class="edit" title="Edit" data-toggle="tooltip">
                    <i class="material-icons">&#xE254;</i>
                  </Link> */}
                  <Link class="delete" title="Delete" data-toggle="tooltip">
                    <i class="material-icons">&#xE872;</i>
                  </Link>
                </td>
              </tr>
              {news.map((news) => (
                <>
                  {/* display normal on render */}
                  <tr id={`${news.id}A`} className="">
                    <td className="slider-data-show">
                      <button
                        style={{ fontSize: "12px" }}
                        className="border border-1 rounded p-1"
                      >
                        {news.target}
                      </button>
                    </td>
                    <td className="slider-data-show">{news.newsDate}</td>
                    <td className="slider-data-show">{news.newsHead}</td>
                    <td className="slider-data-show">{news.news}</td>
                    <td className="slider-data-show">
                      {news.isNew ? (
                        <input type="checkbox" checked></input>
                      ) : (
                        <input type="checkbox"></input>
                      )}
                    </td>
                    <td>
                      <Link class="add" title="Add" data-toggle="tooltip">
                        <i class="material-icons">&#xE03B;</i>
                      </Link>
                      <Link
                        class="edit"
                        title="Edit"
                        data-toggle="tooltip"
                        onClick={() => {
                          let elem1 = document.getElementById(`${news.id}A`);
                          elem1.classList.add("collapse");
                          let elem2 = document.getElementById(`${news.id}B`);
                          elem2.classList.remove("collapse");
                        }}
                      >
                        <i class="material-icons">&#xE254;</i>
                      </Link>
                      <Link class="delete" title="Delete" data-toggle="tooltip">
                        <i class="material-icons">&#xE872;</i>
                      </Link>
                    </td>
                  </tr>

                  {/* this will display on edit */}
                  <tr id={`${news.id}B`} className="collapse">
                    <td>
                      <input
                        className="upload_image"
                        type="file"
                        accept="image/png, image/jpeg"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        placeholder={news.newsDate}
                        className="border border-0"
                        defaultValue={news.newsDate}
                      ></input>
                    </td>
                    <td>
                      <input
                        type="text"
                        placeholder={news.newsHead}
                        className="border border-0"
                        defaultValue={news.newsHead}
                      ></input>
                    </td>
                    <td>
                      {" "}
                      <textarea
                        type="text"
                        placeholder={news.news}
                        className="border border-0"
                        defaultValue={news.news}
                      ></textarea>
                    </td>
                    <td>
                      <input type="checkbox"></input>
                    </td>
                    <td>
                      <Link
                        class=""
                        title="Add"
                        data-toggle="tooltip"
                        onClick={() => {
                          SubmitForm(`${news.id}B`);
                          let elem2 = document.getElementById(`${news.id}A`);

                          elem2.classList.remove("collapse");
                          let elem1 = document.getElementById(`${news.id}B`);

                          elem1.classList.add("collapse");
                        }}
                      >
                        <i class="material-icons">&#xE03B;</i>
                      </Link>
                      {/* <Link class="add" title="Edit" data-toggle="tooltip">
         <i class="material-icons">&#xE254;</i>
       </Link> */}
                      <Link class="delete" title="Delete" data-toggle="tooltip">
                        <i class="material-icons">&#xE872;</i>
                      </Link>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export function EventController() {
  function SubmitForm(id) {
    const getFormByID = document.getElementById(id).children;
    const image = getFormByID[0].children;
    const name = getFormByID[1].children;
    const title = getFormByID[1].children;
    const quote = getFormByID[2].children;
    const visibility = getFormByID[3].children;
    let idValue;
    if (id === "addNewEvent") {
      idValue = events.length + 1;
    } else {
      idValue = id.replace("B", "");
    }

    const formData = {
      id: Number(idValue),
      image: image[0].value,
      name: name[0].value,
      title: title[0].value,
      quote: quote[0].value,
      visibility: visibility[0].value,
    };
    events[idValue - 1] = formData;
    console.log(events);
  }
  return (
    <div class="container-fluids">
      <div class="table-responsive">
        <div class="table-wrapper">
          <div class="table-title">
            <div class="row">
              <div class="col-sm-8">
                <h2>Event Control Panel</h2>
              </div>
              <div class="col-sm-4">
                <button
                  type="button"
                  class="btn btn-info add-new"
                  onClick={() => {
                    let addNewEvent = document.getElementById("addNewEvent");
                    addNewEvent.classList.remove("collapse");
                  }}
                >
                  <i class="fa fa-plus"></i> Add New Event
                </button>
              </div>
            </div>
          </div>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>Upload File</th>
                <th>Date</th>
                <th>Heading</th>
                <th>Event</th>
                <th>New</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr id="addNewEvent" className="collapse">
                <td>
                  <input
                    className="upload_image"
                    type="file"
                    accept="image/png, image/jpeg"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Add Heading"
                    className="border border-0"
                  ></input>
                </td>
                <td>
                  {" "}
                  <input
                    type="text"
                    placeholder="Add Discription"
                    className="border border-0"
                  ></input>
                </td>
                <td>
                  <input type="checkbox"></input>
                </td>
                <td>
                  <Link
                    class=""
                    title="Add"
                    data-toggle="tooltip"
                    onClick={() => {
                      SubmitForm("addNewEvent");
                    }}
                  >
                    <i class="material-icons">&#xE03B;</i>
                  </Link>
                  {/* <Link class="edit" title="Edit" data-toggle="tooltip">
                    <i class="material-icons">&#xE254;</i>
                  </Link> */}
                  <Link class="delete" title="Delete" data-toggle="tooltip">
                    <i class="material-icons">&#xE872;</i>
                  </Link>
                </td>
              </tr>
              {events.map((event) => (
                <>
                  {/* display normal on render */}
                  <tr id={`${event.id}A`} className="">
                    <td className="slider-data-show">
                      <button
                        style={{ fontSize: "12px" }}
                        className="border border-1 rounded p-1"
                      >
                        {event.eventFile}
                      </button>
                    </td>
                    <td className="slider-data-show">{event.eventDate}</td>
                    <td className="slider-data-show">{event.eventHead}</td>
                    <td className="slider-data-show">{event.event}</td>
                    <td className="slider-data-show">
                      {event.isNew ? (
                        <input type="checkbox" checked></input>
                      ) : (
                        <input type="checkbox"></input>
                      )}
                    </td>
                    <td>
                      <Link class="add" title="Add" data-toggle="tooltip">
                        <i class="material-icons">&#xE03B;</i>
                      </Link>
                      <Link
                        class="edit"
                        title="Edit"
                        data-toggle="tooltip"
                        onClick={() => {
                          let elem1 = document.getElementById(`${event.id}A`);
                          elem1.classList.add("collapse");
                          let elem2 = document.getElementById(`${event.id}B`);
                          elem2.classList.remove("collapse");
                        }}
                      >
                        <i class="material-icons">&#xE254;</i>
                      </Link>
                      <Link class="delete" title="Delete" data-toggle="tooltip">
                        <i class="material-icons">&#xE872;</i>
                      </Link>
                    </td>
                  </tr>

                  {/* this will display on edit */}
                  <tr id={`${event.id}B`} className="collapse">
                    <td>
                      <input
                        className="upload_image"
                        type="file"
                        accept="image/png, image/jpeg"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        placeholder={event.eventDate}
                        className="border border-0"
                        defaultValue={event.eventDate}
                      ></input>
                    </td>
                    <td>
                      <input
                        type="text"
                        placeholder={event.eventHead}
                        className="border border-0"
                        defaultValue={event.eventHead}
                      ></input>
                    </td>
                    <td>
                      {" "}
                      <textarea
                        type="text"
                        placeholder={event.event}
                        className="border border-0"
                        defaultValue={event.event}
                      ></textarea>
                    </td>
                    <td>
                      <input type="checkbox"></input>
                    </td>
                    <td>
                      <Link
                        class=""
                        title="Add"
                        data-toggle="tooltip"
                        onClick={() => {
                          SubmitForm(`${event.id}B`);
                          let elem2 = document.getElementById(`${event.id}A`);

                          elem2.classList.remove("collapse");
                          let elem1 = document.getElementById(`${event.id}B`);

                          elem1.classList.add("collapse");
                        }}
                      >
                        <i class="material-icons">&#xE03B;</i>
                      </Link>
                      {/* <Link class="add" title="Edit" data-toggle="tooltip">
         <i class="material-icons">&#xE254;</i>
       </Link> */}
                      <Link class="delete" title="Delete" data-toggle="tooltip">
                        <i class="material-icons">&#xE872;</i>
                      </Link>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export function PartnerController() {
  function SubmitForm(id) {
    const getFormByID = document.getElementById(id).children;
    const image = getFormByID[0].children;
    const name = getFormByID[1].children;
    const title = getFormByID[1].children;
    const quote = getFormByID[2].children;
    const visibility = getFormByID[3].children;
    let idValue;
    if (id === "addNewPartner") {
      idValue = partners.length + 1;
    } else {
      idValue = id.replace("B", "");
    }

    const formData = {
      id: Number(idValue),
      image: image[0].value,
      name: name[0].value,
      title: title[0].value,
      quote: quote[0].value,
      visibility: visibility[0].value,
    };
    partners[idValue - 1] = formData;
    console.log(partners);
  }
  return (
    <div class="container-fluids">
      <div class="table-responsive">
        <div class="table-wrapper">
          <div class="table-title">
            <div class="row">
              <div class="col-sm-8">
                <h2>Partner Control Panel</h2>
              </div>
              <div class="col-sm-4">
                <button
                  type="button"
                  class="btn btn-info add-new"
                  onClick={() => {
                    let addNewPartner =
                      document.getElementById("addNewPartner");
                    addNewPartner.classList.remove("collapse");
                  }}
                >
                  <i class="fa fa-plus"></i> Add New Partner
                </button>
              </div>
            </div>
          </div>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>Upload File</th>
                <th>Partner</th>

                <th>Target URL</th>
                <th>Visibility</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr id="addNewPartner" className="collapse">
                <td>
                  <input
                    className="upload_image"
                    type="file"
                    accept="image/png, image/jpeg"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Add Heading"
                    className="border border-0"
                  ></input>
                </td>
                <td>
                  {" "}
                  <input
                    type="text"
                    placeholder="Add Discription"
                    className="border border-0"
                  ></input>
                </td>
                <td>
                  <input type="checkbox"></input>
                </td>
                <td>
                  <Link
                    class=""
                    title="Add"
                    data-toggle="tooltip"
                    onClick={() => {
                      SubmitForm("addNewPartner");
                    }}
                  >
                    <i class="material-icons">&#xE03B;</i>
                  </Link>
                  {/* <Link class="edit" title="Edit" data-toggle="tooltip">
                    <i class="material-icons">&#xE254;</i>
                  </Link> */}
                  <Link class="delete" title="Delete" data-toggle="tooltip">
                    <i class="material-icons">&#xE872;</i>
                  </Link>
                </td>
              </tr>
              {partners.map((partner) => (
                <>
                  {/* display normal on render */}
                  <tr id={`${partner.id}A`} className="">
                    <td className="slider-data-show">
                      <button
                        style={{ fontSize: "12px" }}
                        className="border border-1 rounded p-1"
                      >
                        {partner.partnerLogo}
                      </button>
                    </td>{" "}
                    <td className="slider-data-show">{partner.partner}</td>
                    <td className="slider-data-show">{partner.target}</td>
                    <td className="slider-data-show">
                      {partner.visibility ? (
                        <input type="checkbox" checked></input>
                      ) : (
                        <input type="checkbox"></input>
                      )}
                    </td>
                    <td>
                      <Link class="add" title="Add" data-toggle="tooltip">
                        <i class="material-icons">&#xE03B;</i>
                      </Link>
                      <Link
                        class="edit"
                        title="Edit"
                        data-toggle="tooltip"
                        onClick={() => {
                          let elem1 = document.getElementById(`${partner.id}A`);
                          elem1.classList.add("collapse");
                          let elem2 = document.getElementById(`${partner.id}B`);
                          elem2.classList.remove("collapse");
                        }}
                      >
                        <i class="material-icons">&#xE254;</i>
                      </Link>
                      <Link class="delete" title="Delete" data-toggle="tooltip">
                        <i class="material-icons">&#xE872;</i>
                      </Link>
                    </td>
                  </tr>

                  {/* this will display on edit */}
                  <tr id={`${partner.id}B`} className="collapse">
                    <td>
                      <input
                        className="upload_image"
                        type="file"
                        accept="image/png, image/jpeg"
                      />
                    </td>
                    <td>
                      <textarea
                        type="text"
                        placeholder={partner.partner}
                        className="border border-0"
                        defaultValue={partner.partner}
                      ></textarea>
                    </td>

                    <td>
                      {" "}
                      <textarea
                        type="text"
                        placeholder={partner.target}
                        className="border border-0"
                        defaultValue={partner.target}
                      ></textarea>
                    </td>
                    <td>
                      <input type="checkbox"></input>
                    </td>
                    <td>
                      <Link
                        class=""
                        title="Add"
                        data-toggle="tooltip"
                        onClick={() => {
                          SubmitForm(`${partner.id}B`);
                          let elem2 = document.getElementById(`${partner.id}A`);

                          elem2.classList.remove("collapse");
                          let elem1 = document.getElementById(`${partner.id}B`);

                          elem1.classList.add("collapse");
                        }}
                      >
                        <i class="material-icons">&#xE03B;</i>
                      </Link>
                      {/* <Link class="add" title="Edit" data-toggle="tooltip">
                     <i class="material-icons">&#xE254;</i>
                   </Link> */}
                      <Link class="delete" title="Delete" data-toggle="tooltip">
                        <i class="material-icons">&#xE872;</i>
                      </Link>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export function TestimonialController() {
  function SubmitForm(id) {
    const getFormByID = document.getElementById(id).children;
    const image = getFormByID[0].children;
    const name = getFormByID[1].children;
    const title = getFormByID[1].children;
    const quote = getFormByID[2].children;
    const visibility = getFormByID[3].children;
    let idValue;
    if (id === "addNewTestimonial") {
      idValue = testimonials.length + 1;
    } else {
      idValue = id.replace("B", "");
    }

    const formData = {
      id: Number(idValue),
      image: image[0].value,
      name: name[0].value,
      title: title[0].value,
      quote: quote[0].value,
      visibility: visibility[0].value,
    };
    testimonials[idValue - 1] = formData;
    console.log(testimonials);
  }
  return (
    <div class="container-fluids">
      <div class="table-responsive">
        <div class="table-wrapper">
          <div class="table-title">
            <div class="row">
              <div class="col-sm-8">
                <h2>Testimonial Control Panel</h2>
              </div>
              <div class="col-sm-4">
                <button
                  type="button"
                  class="btn btn-info add-new"
                  onClick={() => {
                    let addNewTestimonial =
                      document.getElementById("addNewTestimonial");
                    addNewTestimonial.classList.remove("collapse");
                  }}
                >
                  <i class="fa fa-plus"></i> Add New
                </button>
              </div>
            </div>
          </div>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>Upload File</th>
                <th>Name</th>
                <th>About</th>
                <th>Quote</th>
                <th>Visibility</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr id="addNewTestimonial" className="collapse">
                <td>
                  <input
                    className="upload_image"
                    type="file"
                    accept="image/png, image/jpeg"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Add Heading"
                    className="border border-0"
                  ></input>
                </td>
                <td>
                  {" "}
                  <input
                    type="text"
                    placeholder="Add Discription"
                    className="border border-0"
                  ></input>
                </td>
                <td>
                  <input type="checkbox"></input>
                </td>
                <td>
                  <Link
                    class=""
                    title="Add"
                    data-toggle="tooltip"
                    onClick={() => {
                      SubmitForm("addNewTestimonial");
                    }}
                  >
                    <i class="material-icons">&#xE03B;</i>
                  </Link>
                  {/* <Link class="edit" title="Edit" data-toggle="tooltip">
                    <i class="material-icons">&#xE254;</i>
                  </Link> */}
                  <Link class="delete" title="Delete" data-toggle="tooltip">
                    <i class="material-icons">&#xE872;</i>
                  </Link>
                </td>
              </tr>
              {testimonials.map((testimonial) => (
                <>
                  {/* display normal on render */}
                  <tr id={`${testimonial.id}A`} className="">
                    <td className="slider-data-show">
                      <button
                        style={{ fontSize: "12px" }}
                        className="border border-1 rounded p-1"
                      >
                        {testimonial.testimonialFile}
                      </button>
                    </td>
                    <td className="slider-data-show">{testimonial.name}</td>
                    <td className="slider-data-show">{testimonial.about}</td>
                    <td className="slider-data-show">{testimonial.quote}</td>
                    <td className="slider-data-show">
                      {testimonial.visibility ? (
                        <input type="checkbox" checked></input>
                      ) : (
                        <input type="checkbox"></input>
                      )}
                    </td>
                    <td>
                      <Link class="add" title="Add" data-toggle="tooltip">
                        <i class="material-icons">&#xE03B;</i>
                      </Link>
                      <Link
                        class="edit"
                        title="Edit"
                        data-toggle="tooltip"
                        onClick={() => {
                          let elem1 = document.getElementById(
                            `${testimonial.id}A`
                          );
                          elem1.classList.add("collapse");
                          let elem2 = document.getElementById(
                            `${testimonial.id}B`
                          );
                          elem2.classList.remove("collapse");
                        }}
                      >
                        <i class="material-icons">&#xE254;</i>
                      </Link>
                      <Link class="delete" title="Delete" data-toggle="tooltip">
                        <i class="material-icons">&#xE872;</i>
                      </Link>
                    </td>
                  </tr>

                  {/* this will display on edit */}
                  <tr id={`${testimonial.id}B`} className="collapse">
                    <td>
                      <input
                        className="upload_image"
                        type="file"
                        accept="image/png, image/jpeg"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        placeholder={testimonial.name}
                        className="border border-0"
                        defaultValue={testimonial.name}
                      ></input>
                    </td>
                    <td>
                      <input
                        type="text"
                        placeholder={testimonial.about}
                        className="border border-0"
                        defaultValue={testimonial.about}
                      ></input>
                    </td>
                    <td>
                      {" "}
                      <textarea
                        type="text"
                        placeholder={testimonial.quote}
                        className="border border-0"
                        defaultValue={testimonial.quote}
                      ></textarea>
                    </td>
                    <td>
                      <input type="checkbox"></input>
                    </td>
                    <td>
                      <Link
                        class=""
                        title="Add"
                        data-toggle="tooltip"
                        onClick={() => {
                          SubmitForm(`${testimonial.id}B`);
                          let elem2 = document.getElementById(
                            `${testimonial.id}A`
                          );

                          elem2.classList.remove("collapse");
                          let elem1 = document.getElementById(
                            `${testimonial.id}B`
                          );

                          elem1.classList.add("collapse");
                        }}
                      >
                        <i class="material-icons">&#xE03B;</i>
                      </Link>
                      {/* <Link class="add" title="Edit" data-toggle="tooltip">
                     <i class="material-icons">&#xE254;</i>
                   </Link> */}
                      <Link class="delete" title="Delete" data-toggle="tooltip">
                        <i class="material-icons">&#xE872;</i>
                      </Link>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export function PageController() {
  function SubmitForm(id) {
    const getFormByID = document.getElementById(id).children;
    const image = getFormByID[0].children;
    const name = getFormByID[1].children;
    const title = getFormByID[1].children;
    const quote = getFormByID[2].children;
    const visibility = getFormByID[3].children;
    let idValue;
    if (id === "addNew") {
      idValue = people.length + 1;
    } else {
      idValue = id.replace("B", "");
    }

    const formData = {
      id: Number(idValue),
      image: image[0].value,
      name: name[0].value,
      title: title[0].value,
      quote: quote[0].value,
      visibility: visibility[0].value,
    };
    people[idValue - 1] = formData;
    console.log(people);
  }
  return (
    <div class="container-fluids">
      <div class="table-responsive">
        <div class="table-wrapper">
          <div class="table-title">
            <div class="row">
              <div class="col-sm-8">
                <h2>Page Controller</h2>
              </div>
              <div class="col-sm-4">
                <button
                  type="button"
                  class="btn btn-info add-new"
                  onClick={() => {
                    let elem1 = document.getElementById("addNew");
                    elem1.classList.remove("collapse");
                  }}
                >
                  <i class="fa fa-plus"></i> Add New
                </button>
              </div>
            </div>
          </div>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>Upload</th>
                <th>Heading</th>
                <th>Discription</th>
                <th>Visibility</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr id="addNew" className="collapse">
                <td>
                  <input
                    className="upload_image"
                    type="file"
                    accept="image/png, image/jpeg"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Add Heading"
                    className="border border-0"
                  ></input>
                </td>
                <td>
                  {" "}
                  <input
                    type="text"
                    placeholder="Add Discription"
                    className="border border-0"
                  ></input>
                </td>
                <td>
                  <input type="checkbox"></input>
                </td>
                <td>
                  <Link
                    class=""
                    title="Add"
                    data-toggle="tooltip"
                    onClick={() => {
                      SubmitForm("addNew");
                    }}
                  >
                    <i class="material-icons">&#xE03B;</i>
                  </Link>
                  {/* <Link class="edit" title="Edit" data-toggle="tooltip">
                    <i class="material-icons">&#xE254;</i>
                  </Link> */}
                  <Link class="delete" title="Delete" data-toggle="tooltip">
                    <i class="material-icons">&#xE872;</i>
                  </Link>
                </td>
              </tr>
              {people.map((person) => (
                <>
                  {/* display normal on render */}
                  <tr id={`${person.id}A`} className="">
                    <td className="slider-data-show">
                      <button
                        style={{ fontSize: "12px" }}
                        className="border border-1 rounded p-1"
                      >
                        {person.name}
                      </button>
                    </td>
                    <td className="slider-data-show">{person.title}</td>
                    <td className="slider-data-show">{person.quote}</td>
                    <td className="slider-data-show">
                      {person.visibility ? (
                        <input type="checkbox" checked></input>
                      ) : (
                        <input type="checkbox"></input>
                      )}
                    </td>
                    <td>
                      <Link class="add" title="Add" data-toggle="tooltip">
                        <i class="material-icons">&#xE03B;</i>
                      </Link>
                      <Link
                        class="edit"
                        title="Edit"
                        data-toggle="tooltip"
                        onClick={() => {
                          let elem1 = document.getElementById(`${person.id}A`);
                          elem1.classList.add("collapse");
                          let elem2 = document.getElementById(`${person.id}B`);
                          elem2.classList.remove("collapse");
                        }}
                      >
                        <i class="material-icons">&#xE254;</i>
                      </Link>
                      <Link class="delete" title="Delete" data-toggle="tooltip">
                        <i class="material-icons">&#xE872;</i>
                      </Link>
                    </td>
                  </tr>

                  {/* this will display on edit */}
                  <tr id={`${person.id}B`} className="collapse">
                    <td>
                      <input
                        className="upload_image"
                        type="file"
                        accept="image/png, image/jpeg"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        placeholder={person.title}
                        className="border border-0"
                        defaultValue={person.title}
                      ></input>
                    </td>
                    <td>
                      {" "}
                      <textarea
                        type="text"
                        placeholder={person.quote}
                        className="border border-0"
                        defaultValue={person.quote}
                      ></textarea>
                    </td>
                    <td>
                      <input type="checkbox"></input>
                    </td>
                    <td>
                      <Link
                        class=""
                        title="Add"
                        data-toggle="tooltip"
                        onClick={() => {
                          SubmitForm(`${person.id}B`);
                          let elem2 = document.getElementById(`${person.id}A`);

                          elem2.classList.remove("collapse");
                          let elem1 = document.getElementById(`${person.id}B`);

                          elem1.classList.add("collapse");
                        }}
                      >
                        <i class="material-icons">&#xE03B;</i>
                      </Link>
                      {/* <Link class="add" title="Edit" data-toggle="tooltip">
                     <i class="material-icons">&#xE254;</i>
                   </Link> */}
                      <Link class="delete" title="Delete" data-toggle="tooltip">
                        <i class="material-icons">&#xE872;</i>
                      </Link>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
function Panel() {
  return (
    <div class="container-fluid ">
      <div class="row">
        <div class="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
          <div
            class="offcanvas-md offcanvas-end bg-body-tertiary"
            tabindex="-1"
            id="sidebarMenu"
            aria-labelledby="sidebarMenuLabel"
          >
            <div class="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
              <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
                <span>Components</span>
                <Link
                  class="link-secondary"
                  href="."
                  aria-label="Add a new report"
                >
                  <svg class="bi">
                    {/* <use xlink:href="#plus-circle"></use> */}
                  </svg>
                </Link>
              </h6>
              <ul class="nav flex-column">
                <li class="nav-item">
                  <Link
                    to="slider_control"
                    class="nav-link d-flex align-items-center gap-2 active"
                    aria-current="page"
                    href="."
                  >
                    <svg class="bi">{/* <use href="#house-fill"></use> */}</svg>
                    Slider
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    class="nav-link d-flex align-items-center gap-2"
                    to="notice_control"
                  >
                    <svg class="bi">
                      {/* <use xlink:href="#file-earmark"></use> */}
                    </svg>
                    Notices
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    class="nav-link d-flex align-items-center gap-2"
                    to="news_control"
                  >
                    <svg class="bi">{/* <use xlink:href="#cart"></use> */}</svg>
                    News
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    class="nav-link d-flex align-items-center gap-2"
                    to="event_control"
                  >
                    <svg class="bi">
                      {/* <use xlink:href="#people"></use> */}
                    </svg>
                    Events
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    class="nav-link d-flex align-items-center gap-2"
                    to="partner_control"
                  >
                    <svg class="bi">
                      {/* <use xlink:href="#graph-up"></use> */}
                    </svg>
                    Partners
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    class="nav-link d-flex align-items-center gap-2"
                    to="testimonial_control"
                  >
                    <svg class="bi">
                      {/* <use xlink:href="#puzzle"></use> */}
                    </svg>
                    Testimonials
                  </Link>
                </li>
              </ul>

              <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
                <span>Pages</span>
                <Link
                  class="link-secondary"
                  href="."
                  aria-label="Add a new report"
                >
                  <svg class="bi">
                    {/* <use xlink:href="#plus-circle"></use> */}
                  </svg>
                </Link>
              </h6>
              <ul class="nav flex-column mb-auto">
                <li class="nav-item">
                  <Link
                    class="nav-link d-flex align-items-center gap-2"
                    href="."
                  >
                    <svg class="bi">
                      {/* <use xlink:href="#file-earmark-text"></use> */}
                    </svg>
                    About Us
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    class="nav-link d-flex align-items-center gap-2"
                    href="."
                  >
                    <svg class="bi">
                      {/* <use xlink:href="#file-earmark-text"></use> */}
                    </svg>
                    What we do
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    class="nav-link d-flex align-items-center gap-2"
                    href="."
                  >
                    <svg class="bi">
                      {/* <use xlink:href="#file-earmark-text"></use> */}
                    </svg>
                    Projects
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    class="nav-link d-flex align-items-center gap-2"
                    href="."
                  >
                    <svg class="bi">
                      {/* <use xlink:href="#file-earmark-text"></use> */}
                    </svg>
                    Media Cornor
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    class="nav-link d-flex align-items-center gap-2"
                    href="."
                  >
                    <svg class="bi">
                      {/* <use xlink:href="#file-earmark-text"></use> */}
                    </svg>
                    Gallery
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    class="nav-link d-flex align-items-center gap-2"
                    href="."
                  >
                    <svg class="bi">
                      {/* <use xlink:href="#file-earmark-text"></use> */}
                    </svg>
                    Activities
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    class="nav-link d-flex align-items-center gap-2"
                    href="."
                  >
                    <svg class="bi">
                      {/* <use xlink:href="#file-earmark-text"></use> */}
                    </svg>
                    Join us
                  </Link>
                </li>
              </ul>

              <hr class="my-3" />

              <ul class="nav flex-column mb-auto">
                <li class="nav-item">
                  <Link
                    class="nav-link d-flex align-items-center gap-2"
                    href="."
                  >
                    <svg class="bi">
                      {/* <use xlink:href="#gear-wide-connected"></use> */}
                    </svg>
                    Settings
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    class="nav-link d-flex align-items-center gap-2"
                    href="."
                  >
                    <svg class="bi">
                      {/* <use xlink:href="#door-closed"></use> */}
                    </svg>
                    Sign out
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div class=" d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <Outlet />
          </div>

          <canvas
            class="my-4 w-100"
            id="myChart"
            width="1077"
            height="455"
            style={{
              display: "block",
              boxSizing: "border-box",
              height: "455px",
              width: "1077px",
            }}
          ></canvas>

          <h2>Section title</h2>
          <div class="table-responsive small">
            <table class="table table-striped table-sm">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Header</th>
                  <th scope="col">Header</th>
                  <th scope="col">Header</th>
                  <th scope="col">Header</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1,001</td>
                  <td>random</td>
                  <td>data</td>
                  <td>placeholder</td>
                  <td>text</td>
                </tr>
                <tr>
                  <td>1,002</td>
                  <td>placeholder</td>
                  <td>irrelevant</td>
                  <td>visual</td>
                  <td>layout</td>
                </tr>
                <tr>
                  <td>1,003</td>
                  <td>data</td>
                  <td>rich</td>
                  <td>dashboard</td>
                  <td>tabular</td>
                </tr>
                <tr>
                  <td>1,003</td>
                  <td>information</td>
                  <td>placeholder</td>
                  <td>illustrative</td>
                  <td>data</td>
                </tr>
                <tr>
                  <td>1,004</td>
                  <td>text</td>
                  <td>random</td>
                  <td>layout</td>
                  <td>dashboard</td>
                </tr>
                <tr>
                  <td>1,005</td>
                  <td>dashboard</td>
                  <td>irrelevant</td>
                  <td>text</td>
                  <td>placeholder</td>
                </tr>
                <tr>
                  <td>1,006</td>
                  <td>dashboard</td>
                  <td>illustrative</td>
                  <td>rich</td>
                  <td>data</td>
                </tr>
                <tr>
                  <td>1,007</td>
                  <td>placeholder</td>
                  <td>tabular</td>
                  <td>information</td>
                  <td>irrelevant</td>
                </tr>
                <tr>
                  <td>1,008</td>
                  <td>random</td>
                  <td>data</td>
                  <td>placeholder</td>
                  <td>text</td>
                </tr>
                <tr>
                  <td>1,009</td>
                  <td>placeholder</td>
                  <td>irrelevant</td>
                  <td>visual</td>
                  <td>layout</td>
                </tr>
                <tr>
                  <td>1,010</td>
                  <td>data</td>
                  <td>rich</td>
                  <td>dashboard</td>
                  <td>tabular</td>
                </tr>
                <tr>
                  <td>1,011</td>
                  <td>information</td>
                  <td>placeholder</td>
                  <td>illustrative</td>
                  <td>data</td>
                </tr>
                <tr>
                  <td>1,012</td>
                  <td>text</td>
                  <td>placeholder</td>
                  <td>layout</td>
                  <td>dashboard</td>
                </tr>
                <tr>
                  <td>1,013</td>
                  <td>dashboard</td>
                  <td>irrelevant</td>
                  <td>text</td>
                  <td>visual</td>
                </tr>
                <tr>
                  <td>1,014</td>
                  <td>dashboard</td>
                  <td>illustrative</td>
                  <td>rich</td>
                  <td>data</td>
                </tr>
                <tr>
                  <td>1,015</td>
                  <td>random</td>
                  <td>tabular</td>
                  <td>information</td>
                  <td>text</td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Panel;
