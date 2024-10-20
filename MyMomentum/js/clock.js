
const $date = $clockForm.querySelector('div.date h2');
const $clock = $clockForm.querySelector('div.clock h1');
let mainHour;
let mainPeriod;

function getClock() {
  const currentTime = new Date();
  const year = String(currentTime.getFullYear());
  const month = String(currentTime.getMonth()).padStart(2, 0);
  const day = String(currentTime.getDate()).padStart(2, 0);
  let hour = String(currentTime.getHours()).padStart(2, 0);
  const minute = String(currentTime.getMinutes()).padStart(2, 0);
  const second = String(currentTime.getMinutes()).padStart(2, 0);
  let period;
  if (parseInt(hour) < 12) {
    period = 'AM';
  } else {
    period = 'PM';
    hour = String(parseInt(hour) - 12).padStart(2, 0);
  }
  $date.textContent = `${year}. ${month}. ${day}`;
  $clock.textContent = `${hour} : ${minute} ${period}`;
  mainHour = hour;
  mainPeriod = period;
}

getClock;
setInterval(getClock, 1000);
