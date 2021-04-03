var button= document.querySelector("#button-search");
var historyEl= document.querySelector("#history-list");
var citySelected= document.querySelector(".form-control");
var currentName= document.querySelector("#current-city");
var currentTemp= document.querySelector("#current-temp");
var currentHum= document.querySelector("#current-hum");
var currentWindSpeed= document.querySelector("#current-wind-speed");
var dayOneIcon= document.querySelector("#day-one-icon");
var dayOneTemperature= document.querySelector("#day-one-temp");
var dayOneHumidity= document.querySelector("#day-one-hum");
var dayTwoHumidity= document.querySelector("#day-two-hum");
var dayTwoTemperature= document.querySelector("#day-two-temp");
var dayTwoIcon= document.querySelector("#day-two-icon");
var dayThreeIcon= document.querySelector("#day-three-icon");
var dayThreeTemperature= document.querySelector("#day-three-temp");
var dayThreeHumidity= document.querySelector("#day-three-hum");
var dayFourIcon= document.querySelector("#day-four-icon");
var dayFourTemperature= document.querySelector("#day-four-temp");
var dayFourHumidity= document.querySelector("#day-four-hum");
var dayFiveIcon= document.querySelector("#day-five-icon");
var dayFiveTemperature= document.querySelector("#day-five-temp");
var dayFivehumidity= document.querySelector("#day-five-hum");




button.addEventListener('click',function(event) {
    event.preventDefault();


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
        dayOneTemperature.textContent= response.list[4].main.temp + ' °C';
        dayOneHumidity.textContent= response.list[4].main.humidity + ' %';
        dayTwoTemperature.textContent= response.list[12].main.temp + ' °C';
        dayTwoHumidity.textContent= response.list[12].main.humidity + ' %';
        dayThreeTemperature.textContent= response.list[20].main.temp + ' °C';
        dayThreeHumidity.textContent= response.list[20].main.humidity + ' %';
        dayFourTemperature.textContent= response.list[28].main.temp + ' °C';
        dayFourHumidity.textContent= response.list[28].main.humidity + ' %';
        dayFiveTemperature.textContent= response.list[36].main.temp + ' °C';
        dayFiveHumidity.textContent= response.list[36].main.humidity + ' %';

        
    }).catch(function(error) {
        
    })
    
    var cityEl= document.createElement("li");
    // cityEl.classList= ""
    // cityEl.setAttribute= "history-list";

    

    citySelected.value= "";


   

}); 
 
    








// https://api.openweathermap.org/data/2.5/forecast?q=toronto&units=metric&appid=5bb216c75f6edf82eda28a4bb30b0263

