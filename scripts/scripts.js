"use strict"
let days = document.querySelector('.timer--days');
let hours = document.querySelector('.timer--hours');
let minutes = document.querySelector('.timer--minutes');
let secundes = document.querySelector('.timer--secundes');
let now = new Date();
let widding = new Date(2023, 4, 13, 14);
let diff = (widding - now) / 1000;

let daysdiff = 60 * 60 * 24;
let hoursdiff = 60 * 60;
let minutesdiff = 60;

setInterval(function () {
  days.innerHTML = Math.floor(diff / daysdiff);
  hours.innerHTML = Math.floor((diff % daysdiff) / hoursdiff);
  minutes.innerHTML = Math.floor(((diff % daysdiff) % hoursdiff) / minutesdiff);
  secundes.innerHTML = Math.floor((((diff % daysdiff) % hoursdiff) % minutesdiff));
  now = new Date();
  diff = (widding - now) / 1000;
}, 1000);
  // days.innerHTML = Math.floor(diff / daysdiff);
  // hours.innerHTML = Math.floor((diff % daysdiff) / hoursdiff);
  // minutes.innerHTML = Math.floor(((diff % daysdiff) % hoursdiff) / minutesdiff);
  // secundes.innerHTML = Math.floor((((diff % daysdiff) % hoursdiff) % minutesdiff));
  // now = new Date();

