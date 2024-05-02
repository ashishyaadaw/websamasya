import React from "react";
import "./App.css";
import Layout from "./Layout";
import Home from "./pages/home.page";
import Blogs from "./pages/blog/blogs";
import Contact from "./pages/contact/contact.page";
import NoPage from "./pages/page error/NoPage";
import Login from "./pages/login/login.page";
import Register from "./pages/register/register.page";
import About from "./pages/about/about.page";
import Gallery from "./pages/gallery/gallery";
import Media from "./pages/media/media";
import Work from "./pages/what we do/whatWeDo";
import Join from "./pages/join us/joinus";
import User from "./user";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Panel, {
  EventController,
  NewsController,
  NoticeController,
  PartnerController,
  SlideController,
  TestimonialController,
} from "./panel/panel";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about_us",
        element: <About />,
      },
      {
        path: "/what_we_do",
        element: <Work />,
      },
      {
        path: "/projects",
        element: <NoPage />,
      },
      {
        path: "/media_corner",
        element: <Media />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/activities",
        element: <NoPage />,
      },
      {
        path: "/join_us",
        element: <Join />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/blogs & articles",
        element: <Blogs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <NoPage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/user/:userid",
        element: <User />,
      },
      {
        path: "/panel",
        element: <Panel />,
        children: [
          {
            path: "",
            element: <NoPage />,
          },
          {
            path: "slider_control",
            element: <SlideController />,
          },
          {
            path: "notice_control",
            element: <NoticeController />,
          },
          {
            path: "event_control",
            element: <EventController />,
          },
          {
            path: "news_control",
            element: <NewsController />,
          },
          {
            path: "partner_control",
            element: <PartnerController />,
          },
          {
            path: "testimonial_control",
            element: <TestimonialController />,
          },
        ],
      },
    ],
  },
]);

export default function App() {
  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}
