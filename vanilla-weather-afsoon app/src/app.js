function displayTemperature any[]:void
console.log(Response.data);
let temperatureElement=document.querySelector("#temperature");
let cityElement=document.querySelector("#city");
temperatureElement.innerHTML=Math.round
(Response.data,main.temp);
cityElement.innerHTML=response.data.name;
}
let apiKey="";
let apiUrl="";
axios.get(apiUrl).then(displayTemperature);