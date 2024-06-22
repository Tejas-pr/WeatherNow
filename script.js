let weather = {
    apiKey: "a395ec086e9b1a9039ab771490521b4d",
    fetchWeather: function(city) { 
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" +
            city +
            "&units=metric&appid=" +
            this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data){
        // https://api.openweathermap.org/data/2.5/weather?q=Denver&units=metric&appid=a395ec086e9b1a9039ab771490521b4d 
        // all the below data is taken from above description
        // data from object is taken to variable 
        //weather is in the array so we have to mentio in whivh length of array i need to get data
        const{name} = data;
        const{ icon, description} = data.weather[0];
        const{temp,humidity} = data.main;
        const{speed} = data.wind;
        // console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".city").innerHTML = "Weather in "+ name +"!";
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+icon+"@2x.png"
        document.querySelector(".description").innerHTML = description;
        document.querySelector(".temp").innerHTML = temp +"°C";
        document.querySelector(".humidity").innerHTML = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerHTML = "Wind speed: " + speed +"km/h";
        document.querySelector(".weather").classList.remove("loading");
        // document.body.style.backgroundImage ="url('https://source.unsplash.com/1600x900/?" + name + "')";
    },
    search: function(){
        searchboxData = document.querySelector(".search-bar").value // this will get the data from the search box
        this.fetchWeather(searchboxData);
    }
};
// if we press search button, it should search
document
    .querySelector(".search button")
    .addEventListener("click", function(){
        weather.search();
    });
    // if we press enter key, it should search
document
    .querySelector(".search-bar")
    .addEventListener("keyup", function(event){
        if(event.key == "Enter"){
            weather.search();
        }
    });

weather.fetchWeather("");