//Mouse On Events (mouse pointer is moved over the div element)---------------------
var colorChange = document.getElementById("change");

colorChange.addEventListener("mouseenter", function () {
  colorChange.style = "color:green";
});

var colorChang = document.getElementById("change1");

colorChang.addEventListener("mouseover", function () {
  colorChang.style = "color:green";
});

var colorChan = document.getElementById("change2");

colorChan.addEventListener("mouseover", function () {
  colorChan.style = "color:green";
});

var colorCha = document.getElementsByTagName("ul")[0];

colorCha.addEventListener("mouseover", function () {
  colorCha.style = "color:green";
});

var colorCh = document.getElementsByTagName("ul")[1];

colorCh.addEventListener("mouseover", function () {
  colorCh.style = "color:green; border: 3px solid green";
});

var colorC = document.getElementsByTagName("p")[0];

colorC.addEventListener("mouseover", function () {
  colorC.style = "color:green";
});

var color = document.getElementsByTagName("h3")[0];

color.addEventListener("mouseover", function () {
  color.style =
    "color:green; text-decoration:underline; border: 3px solid green";
});

//Mouse Leave Events (only triggered when the mouse pointer leaves the selected element)---------------------
var colorChange = document.getElementById("change");

colorChange.addEventListener("mouseleave", function () {
  colorChange.style = "color:black";
});

var colorChang = document.getElementById("change1");

colorChang.addEventListener("mouseleave", function () {
  colorChang.style = "color:black";
});

var colorChan = document.getElementById("change2");

colorChan.addEventListener("mouseleave", function () {
  colorChan.style = "color:black";
});

var colorCha = document.getElementsByTagName("ul")[0];

colorCha.addEventListener("mouseleave", function () {
  colorCha.style = "color:black";
});

var colorCh = document.getElementsByTagName("ul")[1];

colorCh.addEventListener("mouseleave", function () {
  colorCh.style = "color:black";
});

var colorC = document.getElementsByTagName("p")[0];

colorC.addEventListener("mouseleave", function () {
  colorC.style = "color:black";
});

var color = document.getElementsByTagName("h3")[0];

color.addEventListener("mouseleave", function () {
  color.style = "color:black";
});
