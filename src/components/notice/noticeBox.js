import React, { useState } from "react";
import "./noticeBox.css";
import { AddEvent, AddNews, AddNotice } from "../component";
import "./notices.data";
import { notices } from "./notices.data";
import { events } from "./event.data";
import { news } from "./news.data";
export default function Notice() {
  // for shifting menu from notice bar
  function jumptopage() {
    const news = document.getElementById("news_lists");
    const event = document.getElementById("events_lists");

    if (news.style.display === "block") {
      window.location.href = "/news";
    } else if (event.style.display === "block") {
      window.location.href = "/event";
    } else {
      window.location.href = "/notice";
    }
  }
  const [count, setCount] = useState(0);

  function scrollerUp() {
    setCount(count - 20);
    const elem = document.getElementById("scroller");
    elem.style.marginTop = `${count}px`;
    elem.style.animation = "none";
  }
  function scrollerDown() {
    setCount(count + 20);
    const elem = document.getElementById("scroller");
    elem.style.marginTop = `${count}px`;

    elem.style.animation = "none";
  }
  function setBlock(id, btnID) {
    document.getElementById(id).style.display = "block";
    document.getElementById(btnID).classList.add("active");
    document.getElementById("scroller").style.animation =
      "slideUp 12s linear infinite";
  }
  function setNone(id, btnID) {
    document.getElementById(id).style.display = "none";

    document.getElementById(btnID).classList.remove("active");
  }
  return (
    <>
      {/* put the notice section code here */}
      <div className=" notice-box  rounded">
        <div className="row pt-1 justify-content-md-center">
          <div className="col">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <button
                  id="noticeBtn"
                  className="nav-link active white"
                  aria-current="page"
                  onClick={() => {
                    setNone("news_lists", "newsBtn");
                    setNone("events_lists", "eventBtn");
                    setBlock("notice_lists", "noticeBtn");
                  }}
                >
                  Notice &nbsp;
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-pin-angle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a5.927 5.927 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707-.195-.195.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a5.922 5.922 0 0 1 1.013.16l3.134-3.133a2.772 2.772 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146zm.122 2.112v-.002.002zm0-.002v.002a.5.5 0 0 1-.122.51L6.293 6.878a.5.5 0 0 1-.511.12H5.78l-.014-.004a4.507 4.507 0 0 0-.288-.076 4.922 4.922 0 0 0-.765-.116c-.422-.028-.836.008-1.175.15l5.51 5.509c.141-.34.177-.753.149-1.175a4.924 4.924 0 0 0-.192-1.054l-.004-.013v-.001a.5.5 0 0 1 .12-.512l3.536-3.535a.5.5 0 0 1 .532-.115l.096.022c.087.017.208.034.344.034.114 0 .23-.011.343-.04L9.927 2.028c-.029.113-.04.23-.04.343a1.779 1.779 0 0 0 .062.46z" />
                  </svg>
                </button>
              </li>
              <li className="nav-item">
                <button
                  id="newsBtn"
                  className="nav-link white "
                  onClick={() => {
                    setNone("notice_lists", "noticeBtn");
                    setNone("events_lists", "eventBtn");
                    setBlock("news_lists", "newsBtn");
                  }}
                >
                  News &nbsp;
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-newspaper"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z" />
                    <path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z" />
                  </svg>
                </button>
              </li>
              <li className="nav-item ">
                <button
                  id="eventBtn"
                  className="nav-link white"
                  onClick={() => {
                    setNone("notice_lists", "noticeBtn");
                    setNone("news_lists", "newsBtn");
                    setBlock("events_lists", "eventBtn");
                  }}
                >
                  Event &nbsp;
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-bell-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                  </svg>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="column list-displayer">
          <div id="scroller">
            {/* this is notice box */}
            <div id="notice_lists" className=" ">
              <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-body-tertiary">
                <div className="list-group list-group-flush border-bottom scrollarea">
                  {notices.map((notice) => (
                    <AddNotice
                      key={notice.id}
                      isNew={notice.isNew}
                      targetLink={notice.noticeFile}
                      noticeHead={notice.noticeHead}
                      notice={notice.notice}
                      noticeDate={notice.noticeDate}
                    />
                  ))}
                </div>
              </div>
            </div>
            {/* this is news box' */}
            <div id="news_lists" className=" ">
              <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-body-tertiary">
                <div className="list-group list-group-flush border-bottom scrollarea">
                  {news.map((getNews) => (
                    <AddNews
                      key={getNews.id}
                      isNew={getNews.isNew}
                      newsID={getNews.id}
                      newsHead={getNews.newsHead}
                      news={getNews.news}
                      newsDate={getNews.newsDate}
                    />
                  ))}
                </div>
              </div>
            </div>
            {/* this is events box */}
            <div id="events_lists" className=" ">
              <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-body-tertiary">
                <div className="list-group list-group-flush border-bottom scrollarea">
                  {events.map((event) => (
                    <AddEvent
                      key={event.id}
                      isNew={event.isNew}
                      eventID={event.id}
                      eventHead={event.eventHead}
                      event={event.event}
                      eventDate={event.eventDate}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* this is control for notice */}
        <div className=" row control-notice rounded">
          <div className="col">
            <ul className="nav nav- ">
              <li className="nav-item ">
                <button
                  className="nav-link white"
                  aria-current="page"
                  onClick={scrollerUp}
                >
                  Up &nbsp;
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-caret-up-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                  </svg>
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link white " onClick={scrollerDown}>
                  Down &nbsp;
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-caret-down-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                  </svg>
                </button>
              </li>
              <li className="nav-item ">
                <button className="nav-link white" onClick={jumptopage}>
                  More ... &nbsp;
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
