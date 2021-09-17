class Weather {
  constructor(city, country) {
    this.apiKey = 'e7fc0c5598d9612051e0f8e82b7486e5';
    this.city = city;
    this.country = country;
  }

  // Fetch Weather from api
  async getWeather() {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${this.city},${this.country}&appid=${this.apiKey}`);

    const responseData = await response.json();

    return responseData;
  }

  // Change the Weather location
  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }

}