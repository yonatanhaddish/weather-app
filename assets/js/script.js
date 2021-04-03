var button= document.querySelector("#button-search");
var citySelected= document.querySelector(".form-control");

button.addEventListener('click',function() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" +citySelected.value+ "&units=metric&appid=5bb216c75f6edf82eda28a4bb30b0263").then(function(response) {
    return response.json();
}).then(function(data) {
    console.log(data);
    // console.log(data.city.name);
}).catch(function(error) {
    console.log("Error");
})
});




// https://api.openweathermap.org/data/2.5/forecast?q=toronto&units=metric&appid=5bb216c75f6edf82eda28a4bb30b0263

