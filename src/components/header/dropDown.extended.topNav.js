import React from "react";
export default function DropDownExtended({ id, className, ListID, children }) {
  return (
    <div
      id={id}
      className={className}
    >
      <ul
        id="extendedDataFetchDOM"
        className="list-group rounded list-group-flush fs-16 ft-fanwood fw-bold card"
      >
        {children}
      </ul>
    </div>
  );
}
