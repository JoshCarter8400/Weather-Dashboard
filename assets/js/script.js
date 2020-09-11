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
            displayWeather(data, city);
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


var displayWeather = function(data, city) {

    // clear content
    document.querySelector(".weather-data").textContent = "";
    document.querySelector(".card-deck").innerHTML = "";
    console.log(city)
    var conditions = data.list[0];
    console.log(conditions)
    var currentTemp = data.list[0].main.temp;
    console.log(currentTemp)
    var currentHumid = data.list[0].main.humidity;
    console.log(currentHumid)
    var currentWind = data.list[0].wind.speed;
    console.log(currentWind)

    var currentDate = moment().format("M/D/YYYY")

    var iconDisplay = "<img src= 'http://openweathermap.org/img/wn/" + data.list[0].weather[0].icon + "@2x.png' />"
        // console.log(iconDisplay)
        // console.log(currentDate)
    var cityLocation = document.createElement("h2")
    cityLocation.classList = "bold-city"
    cityLocation.innerHTML = city + ": " + currentDate + iconDisplay

    var cityTemp = document.querySelector(".weather-data")
    var showConditions = document.createElement("h5")
    showConditions.classList = "temp"
    showConditions.innerHTML = "<h3> Temprature: " + currentTemp + "</h3>";




    var showHumidity = document.createElement("h5")
    showHumidity.classList = "humid"
    showHumidity.innerHTML = "<h3> Humidity: " + currentHumid + "</h3>";

    var showWind = document.createElement("h5")
    showWind.classList = "wind"
    showWind.innerHTML = "<h3> Wind Speed: " + currentWind + "<h3>";

    cityTemp.appendChild(cityLocation)
    cityTemp.appendChild(showConditions)
    cityTemp.appendChild(showHumidity)
    cityTemp.appendChild(showWind)

    var cardDeck = document.querySelector(".card-deck")


    for (var i = 0; i < data.list.length; i += 8) {
        var fiveDay = (data.list[i])
        var dayDate = moment.unix(fiveDay.dt).format("M/D/YYYY")
        var card = document.createElement("div")
        card.classList = "card bg-primary"
        var cardBody = document.createElement("div")
        cardBody.classList = "card-body"
        var dateDisplay = "<p>" + dayDate + "</p>"
        var iconDisplay = "<img src= 'http://openweathermap.org/img/wn/" + fiveDay.weather[0].icon + "@2x.png' />"
        console.log(iconDisplay)
        var tempDisplay = "<p> Temp: " + Math.floor(fiveDay.main.temp) + "</p>"
        var humidityDisplay = "<p> Humidity: " + fiveDay.main.humidity + "</p>"
        cardBody.innerHTML = dateDisplay + iconDisplay + tempDisplay + humidityDisplay
        card.appendChild(cardBody)
        cardDeck.appendChild(card)


    }
}
var cityHistory = function(showCity) {


    // create list item for each city
    var historyOne = document.createElement("li")
    historyOne.classList = "list-group-item"
    historyOne.textContent = showCity + "";


    cityCard.appendChild(historyOne)
}

findCity.addEventListener("click", searchHandler);