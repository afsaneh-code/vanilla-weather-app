function displayTemperature (response){
console.log(Response.data);
let temperatureElement=document.querySelector("#temperature");
let cityElement=document.querySelector("#city");
let descriptionElement=document.querySelector("#description");
let humidityElement=document.querySelector("#humidity");
temperatureElement.innerHTML=Math.round
(Response.data,main.temp);
cityElement.innerHTML=response.data.name;
descriptionElement.innerHTML=response.data.weather[0].description;
}
let apiKey="a80bc9ac92c9d9bb92139716051fba9a";
let apiUrl="https://api.openweathermap.org/data/2.5/weather?q=London&appid={API key}";
console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);