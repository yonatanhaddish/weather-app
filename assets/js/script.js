var button= document.querySelector("#button-search");
var citySelected= document.querySelector(".form-control");
var currentName= document.querySelector("#current-city");
var currentTemp= document.querySelector("#current-temp");
var currentHum= document.querySelector("#current-hum");
var currentWindSpeed= document.querySelector("#current-wind-speed");

button.addEventListener('click',function() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" +citySelected.value+ "&units=metric&appid=5bb216c75f6edf82eda28a4bb30b0263").then(function(response) {
    return response.json();
}).then(function(data) {
    console.log(data);
    currentName.textContent= data.name;
    currentTemp.textContent= data.main.temp + ' °C';
    currentHum.textContent= data.main.humidity + ' %';
    currentWindSpeed.textContent= Math.round(data.wind.speed*3.6) + ' km/h';

    
    // console.log(data.city.name);
}).catch(function(error) {
    console.log("Error");
    alert("City name NOT FOUND. Insert a valid city name!");
})

    fetch("https://api.openweathermap.org/data/2.5/forecast?q=" +citySelected.value+ "&units=metric&appid=5bb216c75f6edf82eda28a4bb30b0263").then(function(response) {
        return response.json();
    }).then(function(response) {
        console.log(response);
    })

});




// https://api.openweathermap.org/data/2.5/forecast?q=toronto&units=metric&appid=5bb216c75f6edf82eda28a4bb30b0263

