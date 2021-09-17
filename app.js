// Init Storage
const storage = new Storage;

// Get stored location data
const weatherLocation = storage.getLocationData();

// Init Weather Object
const weather = new Weather(weatherLocation.city, weatherLocation.country);

// Init UI Class
const ui = new UI;

// get weather load
document.addEventListener('DOMContentLoaded', getWeather);

// Change Location Event
document.getElementById('change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value; 
  const country = document.getElementById('country').value; 

  weather.changeLocation(city, country);

  storage.setLocationData(city, country);

  // Get and display weather
  getWeather();

  // Close Modal
  $('#locModal').modal('hide');
});

function getWeather() {
  weather.getWeather()
  .then(results => {
    ui.paint(results);
  })
  .catch(err => console.log(err));
}