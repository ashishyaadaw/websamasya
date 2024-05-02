// call to close sidebar
export function closeSideBar() {
  const toddleCross = document.getElementById("toddle-cross");
  const toddleMenu = document.getElementById("toddle-menu");
  const mobileHeader = document.getElementById("mobileHeader");
  // if (toddleCross.style.display === "none") {
  //   toddleMenu.style.display = "none";
  //   toddleCross.style.display = "block";
  //   mobileHeader.style.display = "block";
  // } else {
  toddleCross.style.display = "none";
  toddleMenu.style.display = "block";
  mobileHeader.style.display = "none";
  // }
}

// change the div scroll postion on body scrollY change
function displayBlock(className) {
  var getID = document.getElementById(className);
  getID.style.display = "block";
}
function displayNone(className) {
  var getID = document.getElementById(className);
  getID.style.display = "none";
}
function rotate(className, degree) {
  var getID = document.getElementById(className).style;

  getID.transform = degree;
}
function getWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}

// Function to get the scroll position
export function getScrollPosition() {
  // Get the scroll position in the vertical direction
  const scrollPositionY = window.scrollY;
  var a = Math.round(scrollPositionY);
  return a;
  // Display the scroll position in the console (you can use any other way to show it on the page)
  console.log("Scroll Position (Y):", scrollPositionY);
}

function getHeight() {
  return Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.documentElement.clientHeight
  );
}

console.log("Width:  " + getWidth());
console.log("Height: " + getHeight());

console.log("Height: " + getScrollPosition());
