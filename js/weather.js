const apikey = "72ab1afb9de97bf30384fd74fdef582e";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weatherSpans = document.querySelectorAll("#weather span");
      const weather = weatherSpans[0];
      const city = weatherSpans[1]; 
      let img = document.querySelector("#weather img")


      img.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
      img.alt = data.weather[0].main;
      weather.innerText = `${data.main.temp.toFixed(1)}°C`;
      city.innerText = data.name;
    });
}
function onGeoError() {
  alert("Can`t find you, No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);