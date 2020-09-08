var searchInput = document.querySelector("#search-input")
var findCity = document.querySelector("#search-btn")



var getWeatherInfo = function(user) {

    // format the github api url
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?id=6167865&appid=8d1c76621b3c56e2c6ba4131cbdbfec9";

    // make a repo request to the url
    fetch(apiUrl).then(function(repsonse) {
        repsonse.json().then(function(data) {
            displayWeather(data, user);
        });
    });
};
getWeatherInfo();


var searchHandler = function(event) {
    var weather = searchInput.value.trim();

    if (weather) {
        getWeatherInfo(weather);
        searchInput.value = "";
    } else {
        alert("Please select a City")
    }
}


var displayWeather = function(weather, searchInfo) {
    console.log(weather)
    console.log(searchInfo)
}
findCity.addEventListener("click", searchHandler);