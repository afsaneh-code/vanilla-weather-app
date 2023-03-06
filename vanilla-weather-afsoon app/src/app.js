function formatDate(timestamp){
    let date= new Date(timestamp);
    let hours= date.getHours();
    let minutes= date.getMinutes();
    let days= ["Sunday","Monday","Tuesday" ,"Wednesday" ,"Thursday","Friday","Saturday"
];
    let day=days[date.getDay()];
    return `${day} ${hours} : ${minutes}`;
}
function displayTemperature (response){
console.log(response.data);
let temperatureElement=document.querySelector("#temperature");
let cityElement=document.querySelector("#city");
let descriptionElement=document.querySelector("#description");
let humidityElement=document.querySelector("#humidity");
let windElement=document.querySelector("#wind");
let dateElement=document.querySelector("#date");
let iconElement=document.querySelector("#icon");
temperatureElement.innerHTML=Math.round
(response.data.main.temp);
cityElement.innerHTML=response.data.name;
descriptionElement.innerHTML=response.data.weather[0].description;
humidityElement.innerHTML=response.data.main.humidity;
windElement.innerHTML=Math.round(response.data.wind.speed);
dateElement.innerHTML=formatdata(response.date.dt * 1000);
iconElement.setAttribute("src",`https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
iconElement.setAttribute("alt", response.data.weather[0].description);

}
let apiKey="a80bc9ac92c9d9bb92139716051fba9a";
console.log(apiKey)
let city="London"
let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city},uk&appid=${apiKey}&units=metric`;
console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);