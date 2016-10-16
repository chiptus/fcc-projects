const API_KEY = "dc3c464238613cd84b170cf14cb8c700";
/*
openweathermap response example:
  
{"coord":{"lon":77.17,"lat":31.1},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"base":"stations","main":{"temp":19.09,"pressure":814.76,"humidity":64,"temp_min":19.09,"temp_max":19.09,"sea_level":1018.14,"grnd_level":814.76},"wind":{"speed":0.86,"deg":240.001},"clouds":{"all":36},"dt":1474627458,"sys":{"message":0.0072,"country":"IN","sunrise":1474591230,"sunset":1474634758},"id":1256237,"name":"Shimla","cod":200}
*/


$(document).ready(() => {
  getCurrentWeather();
  $("#imperial-btn").hide();

  $("#metric-btn").click(function () {
    getCurrentWeather(() => {
      $(this).hide();
      $("#imperial-btn").show();
    }, "imperial");
  });

  $("#imperial-btn").click(function () {
    getCurrentWeather(() => {
      $(this).hide();
      $("#metric-btn").show();
    });
  });
})

function getCurrentWeather(callback = function () { }, units = "metric") {
  navigator.geolocation.getCurrentPosition(({coords: {latitude: lat, longitude: lon}}) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&APPID=${API_KEY}`;
    $.getJSON(url, data => {
      if (!data || data.cod && data.cod === "404") {
        return setTimeout(() => getCurrentWeather(units), 1000);
      }
      $("#location").html(data.name);
      $("#temp").html(data.main.temp);
      $("#w-icon").attr("src", `http://openweathermap.org/img/w/${data.weather[0].icon}.png`)
        .attr("alt", data.weather[0].main)
        .attr("title", data.weather[0].main);
      callback();
    });
  }, error => console.log(error));
}