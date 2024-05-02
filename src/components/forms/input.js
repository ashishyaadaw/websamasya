import React from "react";
export default function Input({ id, type, value, className, placeholder }) {
  return (
    <input
      id={id}
      value={value}
      type={type}
      className={className}
      placeholder={placeholder}
    ></input>
  );
}
