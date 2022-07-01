let weather = {
    apiKey: "131af4e18122fb039ac7cfa81cfc5b21",
    fetchWeather: function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            + "&units=metric&appid=" 
            + this.apiKey
        ).then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const {name} = data;
        const {icon,description} = data.weather[0];
        const {temp,humidity} = data.main;
        const {speed} = data.wind;
        console.log(temp);
        document.querySelector(".city").innerText = " Weather in " + name;
        document.querySelector(".icon").src = 'https://openweathermap.org/img/wn/'+ icon + '.png'
        document.querySelector(".temp").innerText = Math.round(temp) + "°C";
        document.querySelector(".description").innerText = description;
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + "kmph";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')"
    },
    search: function(){
        this.fetchWeather(document.querySelector(".searchBar").value);
    }
}

document.querySelector(".search button").addEventListener("click", function(){
    weather.search();
})

document.querySelector(".searchBar").addEventListener("keyup" , function (event) {
    if(event.key=='Enter'){
        weather.search();
    }
})

weather.fetchWeather("Delhi");