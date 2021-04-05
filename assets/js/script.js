var button= document.querySelector("#button-search");
var historyEl= document.querySelector("#history-list");
var citySelected= document.querySelector(".form-control");
var currentName= document.querySelector("#current-city");
var currentDate= document.querySelector("#current-time");
var currentTemp= document.querySelector("#current-temp");
var currentHum= document.querySelector("#current-hum");
var currentWindSpeed= document.querySelector("#current-wind-speed");
var dayOneDate= document.querySelector("#day-one-date");
var dayOneIcon= document.querySelector("#day-one-icon");
var dayOneTemperature= document.querySelector("#day-one-temp");
var dayOneHumidity= document.querySelector("#day-one-hum");
var dayTwoDate= document.querySelector("#day-two-date");
var dayTwoHumidity= document.querySelector("#day-two-hum");
var dayTwoTemperature= document.querySelector("#day-two-temp");
var dayTwoIcon= document.querySelector("#day-two-icon");
var dayThreeDate= document.querySelector("#day-three-date");
var dayThreeIcon= document.querySelector("#day-three-icon");
var dayThreeTemperature= document.querySelector("#day-three-temp");
var dayThreeHumidity= document.querySelector("#day-three-hum");
var dayFourDate= document.querySelector("#day-four-date");
var dayFourIcon= document.querySelector("#day-four-icon");
var dayFourTemperature= document.querySelector("#day-four-temp");
var dayFourHumidity= document.querySelector("#day-four-hum");
var dayFiveDate= document.querySelector("#day-five-date");
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
    currentDate.textContent= moment().format("DD/MMM/YYYY");
    currentTemp.textContent= data.main.temp + ' °C';
    currentHum.textContent= data.main.humidity + '%';
    currentWindSpeed.textContent= Math.round(data.wind.speed*3.6) + ' km/h';

    // saving into local storage
    localStorage.setItem('currentName', currentName.textContent);
    localStorage.setItem('currentDate', moment().format("DD/MMM/YYYY"));
    localStorage.setItem('currentTemperature', currentTemp.textContent);
    localStorage.setItem('currentHumidity', currentHum.textContent);
    localStorage.setItem('currentWindSpeed', currentWindSpeed.textContent);

   
    
    
    // console.log(data.city.name);
}).catch(function(error) {
    console.log("Error");
    alert("City name NOT FOUND. Insert a valid city name!");
})



    fetch("https://api.openweathermap.org/data/2.5/forecast?q=" +citySelected.value+ "&units=metric&appid=5bb216c75f6edf82eda28a4bb30b0263").then(function(response) {
        return response.json();
    }).then(function(response) {
        console.log(response);
        dayOneDate.textContent= moment.unix(response.list[4].dt).format("DD/MMM/YYYY");
        dayOneTemperature.textContent= response.list[4].main.temp + ' °C';
        dayOneHumidity.textContent= response.list[4].main.humidity + ' %';
        dayTwoDate.textContent= moment.unix(response.list[12].dt).format("DD/MMM/YYYY");
        dayTwoTemperature.textContent= response.list[12].main.temp + ' °C';
        dayTwoHumidity.textContent= response.list[12].main.humidity + ' %';
        dayThreeDate.textContent= moment.unix(response.list[20].dt).format("DD/MMM/YYYY");
        dayThreeTemperature.textContent= response.list[20].main.temp + ' °C';
        dayThreeHumidity.textContent= response.list[20].main.humidity + ' %';
        dayFourDate.textContent= moment.unix(response.list[28].dt).format("DD/MMM/YYYY");
        dayFourTemperature.textContent= response.list[28].main.temp + ' °C';
        dayFourHumidity.textContent= response.list[28].main.humidity + ' %';
        dayFiveDate.textContent= moment.unix(response.list[36].dt).format("DD/MMM/YYYY");
        dayFiveTemperature.textContent= response.list[36].main.temp + ' °C';
        dayFiveHumidity.textContent= response.list[36].main.humidity + ' %';
    
    }).catch(function(error) {
        
    })
}); 

   


document.getElementById("current-city").innerHTML= localStorage.getItem("currentName");
document.getElementById("current-time").innerHTML= localStorage.getItem("currentDate");
document.getElementById("current-temp").innerHTML= localStorage.getItem("currentTemperature");
document.getElementById("current-hum").innerHTML= localStorage.getItem("currentHumidity");
document.getElementById("current-wind-speed").innerHTML= localStorage.getItem("currentWindSpeed");






 
    








// https://api.openweathermap.org/data/2.5/forecast?q=toronto&units=metric&appid=5bb216c75f6edf82eda28a4bb30b0263

