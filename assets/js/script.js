var searchInput = document.querySelector("#search-input")
var findCity = document.querySelector("#search-btn")
var listItemE1 = document.querySelector(".list-group")
var cityCard = document.querySelector("#city-container")



var getWeatherInfo = function(city) {
    var uvi = document.querySelector("#uvi")
        // format the github api url
    var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=8d1c76621b3c56e2c6ba4131cbdbfec9";

    // make a repo request to the url
    fetch(apiUrl).then(function(repsonse) {
        repsonse.json().then(function(data) {
            displayWeather(data);
            console.log(data)
                // var lat = 90
                // var long = 91
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
    var currentTemp = data.list[0].main.temp;
    console.log(currentTemp)
    var currentHumid = data.list[0].main.humidity;
    console.log(currentHumid)
    var currentWind = data.list[0].wind;
    console.log(currentWind)
    currentTime = data.list[0].city;
    console.log(currentTime)

    var cityTemp = document.querySelector(".weather-data")
    var showConditions = document.createElement("h5")
    showConditions.classList = "temp"
    showConditions.textContent = currentTemp;



    var cityTemp = document.querySelector(".weather-data")
    var showConditions = document.createElement("h5")
    showHumidity.classList = "humid"
    showHumidity.textContent = currentHumid;

    cityTemp.appendChild(showConditions)
    cityTemp.appendChild(showHumidity)




}

var cityHistory = function(showCity) {


    // create list item for each city
    var historyOne = document.createElement("li")
    historyOne.classList = "list-group-item"
    historyOne.textContent = showCity + "";


    cityCard.appendChild(historyOne)
}

findCity.addEventListener("click", searchHandler);