const weather_form = document.getElementById("weather-form");
const city = document.getElementById("city")
const message = document.getElementById("message")

weather_form.addEventListener('submit', function(event){
    event.preventDefault();

    const cityName = city.value.trim();

    if(!cityName){
        message.innerText = 'Please enter a city';
    }else{
        message.innerText = `Searching for ${cityName}...`
    }
})