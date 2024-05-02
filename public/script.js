// for large screen
function productClick() {
  var productExpand = document.getElementById("productExpand");
  var product = document.getElementById("product");
  var productList = document.getElementById("productList");
  var state2 = productList.style.display;

  if (state2 == "block") {
    productList.style.display = "none";
    productExpand.style.transform = "rotate(0deg)";
    product.style.color = "white";
    productExpand.style.fill = "white";
    console.log("Product list window closed!");
  } else {
    productList.style.display = "block";
    productExpand.style.transform = "rotate(180deg)";
    product.style.color = "orange";
    productExpand.style.fill = "orange";
    console.log("Product list window opened!");
  }
  var serviceExpand = document.getElementById("serviceExpand");
  var service = document.getElementById("service");
  var serviceList = document.getElementById("serviceList");
  var state1 = serviceList.style.display;

  if (state1 == "block") {
    serviceList.style.display = "none";
    serviceExpand.style.transform = "rotate(0deg)";
    service.style.color = "white";
    serviceExpand.style.fill = "white";
    console.log("Service list window closed!");
  }
}

function serviceClick() {
  var serviceExpand = document.getElementById("serviceExpand");
  var service = document.getElementById("service");
  var serviceList = document.getElementById("serviceList");
  var state1 = serviceList.style.display;

  if (state1 == "block") {
    serviceList.style.display = "none";
    serviceExpand.style.transform = "rotate(0deg)";
    service.style.color = "white";
    serviceExpand.style.fill = "white";
    console.log("Service list window closed!");
  } else {
    serviceList.style.display = "block";
    serviceExpand.style.transform = "rotate(180deg)";
    service.style.color = "orange";
    serviceExpand.style.fill = "orange";
    console.log("Service list window opened!");
  }
  var productExpand = document.getElementById("productExpand");
  var product = document.getElementById("product");
  var productList = document.getElementById("productList");
  var state2 = productList.style.display;

  if (state2 == "block") {
    productList.style.display = "none";
    productExpand.style.transform = "rotate(0deg)";
    product.style.color = "white";
    productExpand.style.fill = "white";
    console.log("Product list window closed!");
  }
}
// for small screen

function productClickSmall() {
  var productExpandSmall = document.getElementById("productExpandSmall");
  var productSmall = document.getElementById("productSmall");
  var productListSmall = document.getElementById("productListSmall");
  var state2 = productListSmall.style.display;

  if (state2 == "block") {
    productListSmall.style.display = "none";
    productExpandSmall.style.transform = "rotate(0deg)";
    productSmall.style.color = "white";
    productExpandSmall.style.fill = "white";
    console.log("productSmall ListSmall window closed!");
  } else {
    productListSmall.style.display = "block";
    productExpandSmall.style.transform = "rotate(180deg)";
    productSmall.style.color = "orange";
    productExpandSmall.style.fill = "orange";
    console.log("productSmall ListSmall window opened!");
  }
  var serviceExpandSmall = document.getElementById("serviceExpandSmall");
  var serviceSmall = document.getElementById("serviceSmall");
  var serviceListSmall = document.getElementById("serviceListSmall");
  var state1 = serviceListSmall.style.display;

  if (state1 == "block") {
    serviceListSmall.style.display = "none";
    serviceExpandSmall.style.transform = "rotate(0deg)";
    serviceSmall.style.color = "white";
    serviceExpandSmall.style.fill = "white";
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
    serviceExpandSmall.style.fill = "white";
    serviceSmall.style.color = "white";
    console.log("Service ListSmall window closed!");
  } else {
    serviceListSmall.style.display = "block";
    serviceExpandSmall.style.transform = "rotate(180deg)";
    serviceSmall.style.color = "orange";
    serviceExpandSmall.style.fill = "orange";
    console.log("Service ListSmall window opened!");
  }

  var productExpandSmall = document.getElementById("productExpandSmall");
  var productSmall = document.getElementById("productSmall");
  var productListSmall = document.getElementById("productListSmall");
  var state2 = productListSmall.style.display;

  if (state2 == "block") {
    productListSmall.style.display = "none";
    productExpandSmall.style.transform = "rotate(0deg)";
    productExpandSmall.style.fill = "white";
    productSmall.style.color = "white";
    console.log("productSmall ListSmall window closed!");
  }
}

// for mobile screen

function closeClick() {
  displayBlock("mbOpenMenu");
  displayNone("mbMenuList");
  displayNone("mbCloseMenu");
  // closeClick for mobile screen Header

  // closeClick for small screen heacder
  // below code use to close serviceMenu if opened
  var serviceExpandSmall = document.getElementById("serviceExpandSmall");
  var serviceSmall = document.getElementById("serviceSmall");
  var serviceListSmall = document.getElementById("serviceListSmall");
  var state1 = serviceListSmall.style.display;

  if (state1 == "block") {
    serviceListSmall.style.display = "none";
    serviceExpandSmall.style.transform = "rotate(0deg)";
    serviceSmall.style.color = "white";
    serviceExpandSmall.style.fill = "white";
    console.log("Service ListSmall window closed!");
  }
  // below code is use to close product menu if opened

  var productExpandSmall = document.getElementById("productExpandSmall");
  var productSmall = document.getElementById("productSmall");
  var productListSmall = document.getElementById("productListSmall");
  var state2 = productListSmall.style.display;

  if (state2 == "block") {
    productListSmall.style.display = "none";
    productExpandSmall.style.transform = "rotate(0deg)";
    productSmall.style.color = "white";
    productExpandSmall.style.fill = "white";
    console.log("productSmall ListSmall window closed!");
  }

  var serviceExpand = document.getElementById("serviceExpand");
  var service = document.getElementById("service");
  var serviceList = document.getElementById("serviceList");
  var state1 = serviceList.style.display;

  if (state1 == "block") {
    serviceList.style.display = "none";
    serviceExpand.style.transform = "rotate(0deg)";
    service.style.color = "white";
    serviceExpand.style.fill = "white";
    console.log("Service list window closed!");
  }
  var productExpand = document.getElementById("productExpand");
  var product = document.getElementById("product");
  var productList = document.getElementById("productList");
  var state2 = productList.style.display;

  if (state2 == "block") {
    productList.style.display = "none";
    productExpand.style.transform = "rotate(0deg)";
    product.style.color = "white";
    productExpand.style.fill = "white";
    console.log("Product list window closed!");
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
function getScrollPosition() {
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

function showBigHeader() {
  document.getElementById("bigScreenHeader").style.display = "block";
  document.getElementById("smallScreenHeader").style.display = "none";
  document.getElementById("mobileScreenHeader").style.display = "none";
}

function showSmallHeader() {
  document.getElementById("bigScreenHeader").style.display = "none";
  document.getElementById("smallScreenHeader").style.display = "block";
  document.getElementById("mobileScreenHeader").style.display = "none";
}
function showMobileHeader() {
  document.getElementById("bigScreenHeader").style.display = "none";
  document.getElementById("smallScreenHeader").style.display = "none";
  document.getElementById("mobileScreenHeader").style.display = "block";
}
function changeHeader() {
  var windowWidth = window.innerWidth;
  if (windowWidth <= 1130 && windowWidth >= 830) {
    showSmallHeader();
  } else if (windowWidth <= 829) {
    showMobileHeader();
  } else {
    showBigHeader();
  }
  closeClick();
  console.log("Window width:", windowWidth);
}

// animations

$(document).ready(function () {
  var canvas = $("#canvas")[0];
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");
    var w = canvas.width;
    var h = canvas.height;
    ctx.strokeStyle = "rgba(174,194,224,0.5)";
    ctx.lineWidth = 1;
    ctx.lineCap = "round";

    var init = [];
    var maxParts = 1000;
    for (var a = 0; a < maxParts; a++) {
      init.push({
        x: Math.random() * w,
        y: Math.random() * h,
        l: Math.random() * 1,
        xs: -4 + Math.random() * 4 + 2,
        ys: Math.random() * 10 + 10,
      });
    }

    var particles = [];
    for (var b = 0; b < maxParts; b++) {
      particles[b] = init[b];
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      for (var c = 0; c < particles.length; c++) {
        var p = particles[c];
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
        ctx.stroke();
      }
      move();
    }

    function move() {
      for (var b = 0; b < particles.length; b++) {
        var p = particles[b];
        p.x += p.xs;
        p.y += p.ys;
        if (p.x > w || p.y > h) {
          p.x = Math.random() * w;
          p.y = -20;
        }
      }
    }

    setInterval(draw, 30);
  }
});
