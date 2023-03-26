"use strict"
// визначаємо елементи для таймера
let days = document.querySelector('.timer--days');
let hours = document.querySelector('.timer--hours');
let minutes = document.querySelector('.timer--minutes');
let secundes = document.querySelector('.timer--secundes');
// визначаємо сьогоднішню дату та дату весілля
let now = new Date();
let widding = new Date(2023, 4, 13, 14);
let diff = (widding - now) / 1000;
// визначаємо дільники
let daysdiff = 60 * 60 * 24;
let hoursdiff = 60 * 60;
let minutesdiff = 60;
// визначаємо таймер оновлення 
setInterval(function () {
  days.innerHTML = Math.floor(diff / daysdiff);
  hours.innerHTML = Math.floor((diff % daysdiff) / hoursdiff);
  minutes.innerHTML = Math.floor(((diff % daysdiff) % hoursdiff) / minutesdiff);
  secundes.innerHTML = Math.floor((((diff % daysdiff) % hoursdiff) % minutesdiff));
  now = new Date();
  diff = (widding - now) / 1000;
}, 1000);


// визначення кнопок деталей
let drawingBtn = document.querySelector('.drawing-btn');
let widdingBtn = document.querySelector('.widding-btn');
// функції деталей
drawingBtn.addEventListener('click', function () {
  window.open("https://goo.gl/maps/4MaiX3zY9ejhJwjn8");
})
widdingBtn.addEventListener('click', function () {
  window.open("hhttps://goo.gl/maps/LfTLfXuKWY9sv5Mr6");
})