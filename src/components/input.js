import React from "react";
export default function Input({ id, type, className, placeholder }) {
  return (
    <>
      <input
        id={id}
        type={type}
        className={className}
        placeholder={placeholder}
      ></input>
    </>
  );
}
