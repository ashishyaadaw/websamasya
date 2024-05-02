function productClickSmall() {
  var productExpandSmall = document.getElementById("productExpandSmall");
  var productSmall = document.getElementById("productSmall");
  var productListSmall = document.getElementById("productListSmall");
  var state2 = productListSmall.style.display;

  if (state2 == "block") {
    productListSmall.style.display = "none";
    productExpandSmall.style.transform = "rotate(0deg)";
    productSmall.style.color = "black";
    console.log("productSmall ListSmall window closed!");
  } else {
    productListSmall.style.display = "block";
    productExpandSmall.style.transform = "rotate(180deg)";
    productSmall.style.color = "blue";
    console.log("productSmall ListSmall window opened!");
  }
  var serviceExpandSmall = document.getElementById("serviceExpandSmall");
  var serviceSmall = document.getElementById("serviceSmall");
  var serviceListSmall = document.getElementById("serviceListSmall");
  var state1 = serviceListSmall.style.display;

  if (state1 == "block") {
    serviceListSmall.style.display = "none";
    serviceExpandSmall.style.transform = "rotate(0deg)";
    serviceSmall.style.color = "black";
    console.log("Service ListSmall window closed!");
  }
}

function serviceClickSmall() {
  var serviceExpandSmall = document.getElementById("serviceExpandSmall");
  var serviceSmall = document.getElementById("serviceSmall");
  var serviceListSmall = document.getElementById("serviceListSmall");
  var state1 = serviceListSmall.style.display;

  if (state1 == "block") {
    serviceListSmall.style.display = "none";
    serviceExpandSmall.style.transform = "rotate(0deg)";
    serviceSmall.style.color = "black";
    console.log("Service ListSmall window closed!");
  } else {
    serviceListSmall.style.display = "block";
    serviceExpandSmall.style.transform = "rotate(180deg)";
    serviceSmall.style.color = "blue";
    console.log("Service ListSmall window opened!");
  }
  var productExpandSmall = document.getElementById("productExpandSmall");
  var productSmall = document.getElementById("productSmall");
  var productListSmall = document.getElementById("productListSmall");
  var state2 = productListSmall.style.display;

  if (state2 == "block") {
    productListSmall.style.display = "none";
    productExpandSmall.style.transform = "rotate(0deg)";
    productSmall.style.color = "black";
    console.log("productSmall ListSmall window closed!");
  }
}
function closeClick() {
  var serviceExpandSmall = document.getElementById("serviceExpandSmall");
  var serviceSmall = document.getElementById("serviceSmall");
  var serviceListSmall = document.getElementById("serviceListSmall");
  var state1 = serviceListSmall.style.display;

  if (state1 == "block") {
    serviceListSmall.style.display = "none";
    serviceExpandSmall.style.transform = "rotate(0deg)";
    serviceSmall.style.color = "black";
    console.log("Service ListSmall window closed!");
  }
  var productExpandSmall = document.getElementById("productExpandSmall");
  var productSmall = document.getElementById("productSmall");
  var productListSmall = document.getElementById("productListSmall");
  var state2 = productListSmall.style.display;

  if (state2 == "block") {
    productListSmall.style.display = "none";
    productExpandSmall.style.transform = "rotate(0deg)";
    productSmall.style.color = "black";
    console.log("productSmall ListSmall window closed!");
  }
}
function displayBlock(className) {
  var getID = document.getElementById(className);
  getID.style.display = "block";
  document.getElementById("detailDefault").style.display = "none";
}
function displayNone(className) {
  var getID = document.getElementById(className);
  getID.style.display = "none";

  document.getElementById("detailDefault").style.display = "block";
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

function showBigHeader() {
  document.getElementById("bigScreenHeader").style.display = "block";
  document.getElementById("smallScreenHeader").style.display = "none";
}

function showSmallHeader() {
  document.getElementById("bigScreenHeader").style.display = "none";
  document.getElementById("smallScreenHeader").style.display = "block";
}
