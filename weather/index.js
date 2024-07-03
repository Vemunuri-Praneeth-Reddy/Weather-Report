var inputvalue = document.querySelector('#cityinput');
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput');
var descrip = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');

var apik = "99255d3efa36e664be06ebd303bb8b68";

function convertion(val) {
    return (val - 273.15).toFixed(2); // Convert from Kelvin to Celsius and round to 2 decimal places
}

btn.addEventListener('click', function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&appid=' + apik)
    .then(res => res.json())
    .then(data => {
        var nameval = data['name'];
        var descripval = data['weather'][0]['description'];
        var temperature = data['main']['temp'];
        var wndspeed = data['wind']['speed'];

        city.innerHTML = `Weather of <span>${nameval}</span>`;
        temp.innerHTML = `Temperature: <span>${convertion(temperature)}°C</span>`;
        descrip.innerHTML = `Sky conditions: <span>${descripval}</span>`;
        wind.innerHTML = `Wind speed: <span>${wndspeed} m/s</span>`;
    })
    .catch(error => {
        console.error("Error fetching weather data:", error);
        city.innerHTML = "Error fetching weather data. Please try again.";
    });
});
``
