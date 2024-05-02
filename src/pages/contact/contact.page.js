import React from "react";
export default function Contact({ children }) {
  return (
    <div className=" main">
      {children}
      <div className="container text-center rounded text-white pt-5 pb-5 bg-secondary">
        <h1> Contacts</h1>
      </div>
    </div>
  );
}
