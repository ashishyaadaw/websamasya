import React from "react";

import { Link } from "react-router-dom";
import DropDownExtended from "./dropDown.extended.topNav";
import { department, team } from "./dropDowndata";
export default function DropDownList({ id, className, menuId, children }) {
  // this part call directly

  // this part is call Back functions
  function ShowExtendedPart() {
    const elements = document.getElementsByClassName(
      "variousDepartmentAndCell"
    );

    for (let i = 0; i < elements.length; i++) {
      elements[i].style.display = "block";
    }
  }
  function HideExtendedPart() {
    let elements = document.getElementsByClassName("variousDepartmentAndCell");

    for (let i = 0; i < elements.length; i++) {
      elements[i].style.display = "none";
    }
  }

  function setBlock(id, menuId) {
    const a = menuId;
    const elem = document.getElementById("topNavUL").children[a];
    elem.style.color = "blue";
    document.getElementById(id).style.display = "block";
  }
  function setNone(id, menuId) {
    const a = menuId;
    const elem = document.getElementById("topNavUL").children[a];
    elem.style.color = "black";
    document.getElementById(id).style.display = "none";
  }
  return (
    <>
      <div
        id={id}
        className={className}
        onMouseOver={() => setBlock(id, menuId)}
        onMouseOut={() => setNone(id, menuId)}
      >
        <div className="col">
          <div>
            <ul
              id="dataFetchDOM"
              className="list-group rounded list-group-flush fs-16 ft-fanwood fw-bold card"
            >
              {children}
            </ul>
          </div>
        </div>
        <div className="col">
          <DropDownExtended
            id={"team"}
            ListID={3}
            className={"data-list-group"}
          >
            {team.map((list) => (
              <li
                key={list.id}
                onMouseOver={() => {
                  list === "Various department & Cell"
                    ? ShowExtendedPart()
                    : HideExtendedPart();
                }}
                onClick={() => {
                  list === "Various department & Cell"
                    ? ShowExtendedPart()
                    : HideExtendedPart();
                }}
                className="list-group-item hover"
              >
                <Link className="font-black-7" to={list}>
                  {list}
                </Link>
              </li>
            ))}

            {/* after clicking this part will render */}
            {department.map((list) => (
              <li
                key={list.id}
                className={"variousDepartmentAndCell  extend-extend-list"}
              >
                <Link className="font-black-7" to={list}>
                  {list}
                </Link>
              </li>
            ))}
          </DropDownExtended>
        </div>
      </div>
    </>
  );
}
