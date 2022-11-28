"use strict";

let closed = true;
const hamburger = document.querySelector(".hamburger");
const hamburgerElements = document.querySelector(".hamburger-elements");
// landing images
const backGroundImage = document.querySelector(".py-heading");
const changingText = document.querySelector(".changing-text");
const image = document.querySelector(".bg-img");
console.log(hamburgerElements);

let arr = ["New York", "Los Angeles", "Chicago"];
let arr2 = [
  "The atmosphere in New York is lorem ipsum.",
  "Thank you, Chicago - A night we won't forget.",
  "We had the best time playing at Venice Beach!",
];
let arr3 = ["img/ny.jpg", "img/la.jpg", "img/chicago.jpg"];
let i = 1;
setInterval(function () {
  if (i < arr.length) {
    backGroundImage.textContent = arr[i];
    changingText.textContent = arr2[i];
    image.style.backgroundImage = `url(${arr3[i]})`;
    i++;
  }
  if (i === arr.length) {
    i = 0;
  }
}, 4000);

// hamburger elemenst

// problem sa stisnutim botunom
hamburger.addEventListener("click", function (e) {
  e.preventDefault();

  if (closed) {
    hamburgerElements.style.display = "block";

    closed = false;
  } else if (!closed) {
    hamburgerElements.style.display = "none";
    closed = true;
  }
});
