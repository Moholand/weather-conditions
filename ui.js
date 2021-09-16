class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feels = document.getElementById('w-feels');
    this.pressure = document.getElementById('w-pressure');
    this.wind = document.getElementById('w-wind');
  }

  paint(weather) {
    this.location.textContent = weather.city.name + ' - ' + weather.city.country;
    this.desc.textContent = weather.list[0].weather[0].description;
    this.string.textContent = weather.list[0].main.temp + ' °K';
    this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weather.list[0].weather[0].icon}@2x.png`);
    this.humidity.textContent = `Relative Humidity: ${weather.list[0].main.humidity}`+ '%';
    this.feels.textContent = `Feels Like: ${weather.list[0].main.feels_like}`+ ' [°K]';
    this.pressure.textContent = `Pressure: ${weather.list[0].main.pressure}`+ ' [mBar]';
    this.wind.textContent = `Wind Speed: ${weather.list[0].wind.speed}`+ ' [Km/h]';
  }
}