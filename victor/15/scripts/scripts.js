"use strict"
// визначаємо елементи для таймера
let days = document.querySelector('.timer--days');
let hours = document.querySelector('.timer--hours');
let minutes = document.querySelector('.timer--minutes');
let secundes = document.querySelector('.timer--secundes');
let timerText = document.querySelector('.timer--text');
// визначаємо сьогоднішню дату та дату весілля
let now = new Date();
let widding = new Date(2023, 4, 13, 14);
let diff = (widding - now) / 1000;
// визначаємо дільники
let daysdiff = 60 * 60 * 24;
let hoursdiff = 60 * 60;
let minutesdiff = 60;
// визначаємо таймер оновлення 
if (diff >= 0) {
  setInterval(function () {
    days.innerHTML = Math.floor(diff / daysdiff);
    hours.innerHTML = Math.floor((diff % daysdiff) / hoursdiff);
    minutes.innerHTML = Math.floor(((diff % daysdiff) % hoursdiff) / minutesdiff);
    secundes.innerHTML = Math.floor((((diff % daysdiff) % hoursdiff) % minutesdiff));
    now = new Date();
    diff = (widding - now) / 1000;
  }, 1000);
} else {
  let diff2 = (now - widding) / 1000;
  setInterval(function () {
    days.innerHTML = Math.floor(diff2 / daysdiff);
    hours.innerHTML = Math.floor((diff2 % daysdiff) / hoursdiff);
    minutes.innerHTML = Math.floor(((diff2 % daysdiff) % hoursdiff) / minutesdiff);
    secundes.innerHTML = Math.floor((((diff2 % daysdiff) % hoursdiff) % minutesdiff));
    now = new Date();
    diff2 = (now - widding) / 1000;
  }, 1000);
  timerText.innerHTML = 'ми вже одружені)'
}



// визначення кнопок деталей
let drawingBtn = document.querySelector('.drawing-btn');
let widdingBtn = document.querySelector('.widding-btn');
let telegram = document.querySelector('.telegram-btn');
let banquetBtn = document.querySelector('.banquet');
let questionBtn = document.querySelector('.questionsBtn')
// функції деталей
widdingBtn.addEventListener('click', function () {
  window.open("https://goo.gl/maps/LfTLfXuKWY9sv5Mr6");
});
telegram.addEventListener('click', function () {
  window.open("https://t.me/+8Oye6XAb4-wxYmIy");
});
banquetBtn.addEventListener('click', function () {
  window.open("https://goo.gl/maps/iPjYpiTcjZLnmptQ6");
});
questionBtn.addEventListener('click', function () {
  window.open("https://forms.gle/Y4phDJkBiHZkYBe48");
})