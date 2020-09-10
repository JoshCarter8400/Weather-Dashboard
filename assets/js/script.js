var searchInput = document.querySelector("#search-input")
var findCity = document.querySelector("#search-btn")
var listItemE1 = document.querySelector(".list-group-item")
var cityCard = document.querySelector("#city-container")


var getWeatherInfo = function(user) {

    // format the github api url
    var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + user + "&appid=8d1c76621b3c56e2c6ba4131cbdbfec9";

    // make a repo request to the url
    fetch(apiUrl).then(function(repsonse) {
        repsonse.json().then(function(data) {
            // displayWeather(data, user);
            console.log(data)
        });
    });
};



var searchHandler = function(event) {
    var weather = searchInput.value.trim();
    console.log(weather)
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

var cityHistory = function(cityList, showCity) {
    // clear old search
    cityCard.textContent = "";
    searchInput.textContent = showCity

    listItemE1.appendChild(cityCard)
}
findCity.addEventListener("click", searchHandler);