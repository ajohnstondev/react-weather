class DarkSky {
  constructor() {
    this.URL =
      'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/';
    this.key = process.env.REACT_APP_DARK_SKY_API_KEY;
  }

  async getData(ipdata) {
    const url = new URL(
      `${this.URL}${this.key}/${ipdata.latitude},${ipdata.longitude}`
    );
    const params = {
      units: 'auto',
      exclude: ['minutely', 'hourly', 'alerts', 'flags'],
    };

    Object.keys(params).forEach(key =>
      url.searchParams.append(key, params[key])
    );

    const response = await fetch(url);
    const data = await response.json();

    return data;
  }
}

export default DarkSky;
