let weather = {
    "apikey":"af0f409dae81e674f47b8e5135a49c50",
    fetchweather: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            +  city
            + "&appid="
            + this.apikey
            )
            .then((response) => response.json())
            .then((data) => this.displayweather(data));
    },
    displayweather: function(data){
        const { name } = data;
        const { icon,description }= data.weather[0];
        const { temp,humidity }= data.main;
        const  { speed }= data.wind;
        
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = " Humidity : " + humidity + "%";
        document.querySelector(".wind").innerText = "wind speed :" + speed +"km/hr";
        document.querySelector(".weather").classList.remove("loading");

    },
    search: function() {
        this.fetchweather(document.querySelector(".search-bar").value);
    }
};
document.querySelector(".search button").addEventListener("click", function() {
weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function(event) {
    if (event.key == "Event") {
        weather.search();
    }
});
weather.fetchweather("Delhi");


