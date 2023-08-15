const url = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "ca5a53295amsh019091ccecb61e4p1e0902jsn672558be4adb",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const weather = (city) => {
  cityname.innerHTML = city;
  fetch(url + city, options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      wind_speed.innerHTML = Math.floor(response.wind_speed*3.6);
      wind_degrees.innerHTML = response.wind_degrees;
      temp.innerHTML = response.temp;
      humidity.innerHTML = response.humidity;

      

      min_temp.innerHTML = response.min_temp;
      cloud_pct.innerHTML = response.cloud_pct;
      feels_like.innerHTML = response.feels_like;

      

      max_temp.innerHTML = response.max_temp;
    })
    .catch((err) => console.log(err));
};
submit.addEventListener("click", (e) => {
  e.preventDefault();
  weather(city.value);
  dimension(city.value);
  delayedExecution();
});

weather("Rajkot");
dimension(city.value);
delayedExecution();

async function dimension() {
  const cityName = cityname.innerHTML;

  const apiKey =
    "pk.eyJ1IjoibWpyb2NrIiwiYSI6ImNsbGJkY2pscDA4MzIzZnRjd2pvY21ld24ifQ.-suQLYpOHj2nRNFb3iR1gQ";

  const apiUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    cityName
  )}.json?access_token=${apiKey}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const coordinates = data.features[0].center; // [longitude, latitude]
      window.longitude = coordinates[0];
      window.latitude = coordinates[1];

      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    })
    .catch((error) => {
      console.error("Error fetching coordinates:", error);
    });
}

function sun() {
  const sunURL = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=sunrise,sunset&timezone=auto&forecast_days=1`;

  fetch(sunURL)
    .then((res) => res.json())
    .then((res) => {
      sunrise.innerHTML = datetimearray(res.daily.sunrise);
      sunset.innerHTML = datetimearray(res.daily.sunset);
      console.log(res)
      
    })
    .catch((err) => console.log(err));
}



function delayedExecution() {
  setTimeout(sun, 1000);
}



function datetimearray(arr) {
  const dateTimeArray = arr;

  const extractedTime = new Date(dateTimeArray[0]).toLocaleTimeString();

  return extractedTime;
}
