// Init Weather Object
const weather = new Weather('London', 'uk');

// Init UI Class
const ui = new UI;

// get weather load
document.addEventListener('DOMContentLoaded', getWeather);

function getWeather() {
  weather.getWeather()
  .then(results => {
    ui.paint(results);
    console.log(results)
  })
  .catch(err => console.log(err));
}