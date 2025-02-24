const apiKey ="2561cfabd6a0a21fc58be5357938c983";
const apiURL= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const input = document.querySelector(".search input");
const btn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const weather = document.querySelector(".weather");

// function to check weather
async function checkWeather(place){
const response = await fetch(apiURL + place + `&appid=${apiKey}`);
if(response.status==404){
    document.querySelector(".error").style.display="block";
    document.querySelector(".weather").style.display="none";
}else{
    const data = await response.json();
    console.log(data);
    
    // accessing html elements
    const temp = document.querySelector(".temp");
    const city = document.querySelector(".city");
    const humidity = document.querySelector(".Humidity");
    const wind = document.querySelector(".Wind");
    
    
    // inserting real time values from api into html elts.
    city.innerHTML=data.name ;
    temp.innerHTML=data.main.temp +"°C";
    humidity.innerHTML=data.main.humidity +" %";
    wind.innerHTML=data.wind.speed +" km/h";
    
    // changing weather icons for diff cities
    if(data.weather[0].main=="Mist"){
        weatherIcon.src="images/fog.png";
    }else if(data.weather[0].main=="Rain"){
        weatherIcon.src="images/Rain.png";
    }else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="images/drizzle.png";
    }else if(data.weather[0].main=="Snow"){
        weatherIcon.src="images/snow.png";
    }else if(data.weather[0].main=="Clouds"){
        weatherIcon.src="images/cloudy.png";
    }else if(data.weather[0].main=="Clear"){
        weatherIcon.src="images/sunny.png";
    }
    
    // displaying weather after enterring the city name
    document.querySelector(".error").style.display="none";
    weather.style.display="block";
    
}

}
btn.onclick=()=>{
    checkWeather(input.value);
}