var searchInput = document.querySelector("#search-input")
var findCity = document.querySelector("#search-btn")
var listItemE1 = document.querySelector(".list-group")
var cityCard = document.querySelector("#city-container")



var getWeatherInfo = function(city) {

    // format the github api url
    var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=8d1c76621b3c56e2c6ba4131cbdbfec9";

    // make a repo request to the url
    fetch(apiUrl).then(function(repsonse) {
        repsonse.json().then(function(data) {
            displayWeather(data);
            console.log(data)
            var lat = 90
            var long = 90
        });
        // .then(function(response) {
        //     response.json().then(function(data) {
        //         displayUvIndex(data)
        //     })
        // })
    });


};



var searchHandler = function(event) {
    event.preventDefault();
    // get value from input element
    var searchInput = document.querySelector("#search-input")
    var city = searchInput.value.trim();
    console.log(city)
    if (city) {
        getWeatherInfo(city);
        cityHistory(city)
        searchInput.value = "";
    } else {
        alert("Please select a City")
    }
}


var displayWeather = function(data) {
    var conditions = data.list[0];
    console.log(conditions)
    var currentTemp = data.list[0].main.temp
    console.log(currentTemp)
    var currentHumid = data.list[0].main.humidity
    console.log(currentHumid)


}

var cityHistory = function(showCity) {
    // // clear old search
    // cityCard.textContent = "";
    // showCity.textContent = searchInput

    // create list item for each city
    var historyOne = document.createElement("li")
    historyOne.classList = "list-group-item"
    historyOne.textContent = showCity + "";


    cityCard.appendChild(historyOne)
}

findCity.addEventListener("click", searchHandler);