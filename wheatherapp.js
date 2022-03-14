let weather = {
    apiKey: "bb37554bb8c5db80429a68ed8f18c97c",
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=metric&appid=" +
          this.apiKey
      )
        .then((response) => {
          if (!response.ok) {
            alert("No weather found.");
            throw new Error("No weather found.");
          }
          return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
      let { name } = data;
      let { icon, description } = data.weather[0];
      let { temp, humidity } = data.main;
      let { speed } = data.wind;
      document.querySelector(".city").innerText = name;
      document.querySelector(".weather-img").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".weather-description").innerText = description;
      document.querySelector(".temp").innerText = temp + "°C";
      document.querySelector(".humidity").innerText =
        "Humidity: " + humidity + "%";
      document.querySelector(".wind").innerText =
        "Wind speed: " + speed + " km/h";
      document.querySelector(".weather-informations").classList.remove("loading");
    //   document.body.style.backgroundImage =
    //     "url('https://source.unsplash.com/1600x900/?" + name + "')";
    },
    search: function () {
      this.fetchWeather(document.querySelector(".search-bar").value);
    },
  };
  
  document.querySelector("#search-icon").addEventListener("click", function () {
    weather.search();
  });
  
  document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        weather.search();
      }
    });
  
  weather.fetchWeather("Pitesti");

//   window.addEventListener("load", function () {
//     const loader = document.querySelector(".loader");
//     loader.className += " hidden";
// });