
const $weatherImage = $weatherForm.querySelector('div.temporature img');
const $temporature = $weatherForm.querySelector('div.temporature span');
const $location = $weatherForm.querySelector('div.location');



function onGeoOk(event) {
  const lat = event.coords.latitude;
  const lon = event.coords.longitude;
  const urlString = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherKey}&units=metric`;
  fetch(urlString)
    .then((response) => response.json())
    .then((data) => {
      const currentLocation = data.name; // 현 위치의 도시(구단위)명
      const temporature = `${Math.round(data.main.temp)}℃`; // 현재 기온
      const weatherImageStr = data.weather[0].icon; // 날씨 이미지 키워드
      
      $weatherImage.src = `images/weather/${weatherImageStr}@2x.png`;
      $temporature.textContent = temporature;
      $location.textContent = currentLocation;
    });
}

function onGeoError() {
  alert(`Can't find where you are.`);
}

function fetchingWeather() {
  if ($weatherForm.classList.contains('hidden')) {
    return
  } else {
    navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
  }
}

setInterval(fetchingWeather, 3000);

