const url =
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "ca5a53295amsh019091ccecb61e4p1e0902jsn672558be4adb",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const weather = (city) => {
  cityname.innerHTML = city;
  fetch(url+city, options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      wind_speed.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      temp.innerHTML = response.temp;
      humidity.innerHTML = response.humidity;
      sunset.innerHTML = response.sunset;
      min_temp.innerHTML = response.min_temp;
      cloud_pct.innerHTML = response.cloud_pct;
      feels_like.innerHTML = response.feels_like;
      sunrise.innerHTML = response.sunrise;
      max_temp.innerHTML = response.max_temp;
    })
    .catch((err) => console.log(err));
  // const response = await fetch(url, options);
  // const result = await response.text();
  // console.log(result);
};
submit.addEventListener("click", (e) => {
  e.preventDefault()
  weather(city.value);
});

weather("Rajkot");
