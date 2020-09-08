var getWeatherInfo = function(user) {
    // format the github api url
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?id=6167865&appid=8d1c76621b3c56e2c6ba4131cbdbfec9";

    // make a repo request to the url
    fetch(apiUrl).then(function(repsonse) {
        repsonse.json().then(function(data) {
            console.log(data)
        });
    });
}
getWeatherInfo()