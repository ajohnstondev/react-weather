class OpenWeather {
  constructor() {
    this.URL = 'https://api.openweathermap.org/data/2.5/weather';
    this.key = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
    this.data = {};
  }

  async getData(ipdata) {
    const url = new URL(this.URL);
    const params = {
      lat: ipdata.latitude,
      lon: ipdata.longitude,
      units: 'metric',
      appid: this.key,
    };

    Object.keys(params).forEach(key =>
      url.searchParams.append(key, params[key])
    );

    const response = await fetch(url);
    const data = await response.json();

    return data;
  }
}

export default OpenWeather;
