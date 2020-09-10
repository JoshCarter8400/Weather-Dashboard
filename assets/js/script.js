var searchInput = document.querySelector("#search-input")
var findCity = document.querySelector("#search-btn")
var listItemE1 = document.querySelector(".list-group")
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
    event.preventDefault();
    // get value from input element
    var searchInput = document.querySelector("#search-input")
    var weather = searchInput.value.trim();
    console.log(weather)
    if (weather) {
        getWeatherInfo(weather);
        searchInput.value = "";
    } else {
        alert("Please select a City")
    }
}


var displayWeather = function(weather, searchInput) {

    // clear old content 
    cityCard.textContent = "";
    searchInput.textContent = searchInput;

    // loop over weather days 
    for (var i = 0; i < conditions.length; i + 8) {
        var currentConditions = conditions[i].place.login + "/" + conditions[i].name;

        //create a container for weather
        var showWeather = document.querySelector(".weather-date-location");
        showWeather.innerHTML = "<h3 class='today-weather'</h3>" + currentConditions;

    }
    console.log(weather)

}

var cityHistory = function(cityList, showCity) {
    // clear old search
    cityCard.textContent = "";
    searchInput.textContent = showCity

    // create list item for each city
    var historyOne = document.createElement("li")
    historyOne.classList = ("list-group-item")
    historyOne.querySelector(".list-group").innerHTML = searchInput


    searchInput.appendChild(cityCard)
}
findCity.addEventListener("click", searchHandler);