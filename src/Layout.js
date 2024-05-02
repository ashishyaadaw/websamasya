import React from "react";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import { Outlet } from "react-router-dom";
import { closeSideBar } from "./script/ypa";
import ClickToTop from "./components/alwaysonscreen/clickToTop";
import ChatBot from "./components/alwaysonscreen/chatBot";

function Layout() {
  return (
    <>
      <Header />
      <div id="details" onClick={closeSideBar}>
        <Outlet />
      </div>
      <ClickToTop />
      <ChatBot />
      <Footer />
    </>
  );
}

export default Layout;
