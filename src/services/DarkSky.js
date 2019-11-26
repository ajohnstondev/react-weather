class DarkSky {
  constructor() {
    this.URL =
      'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/';
    this.key = process.env.REACT_APP_DARK_SKY_API_KEY;
  }

  async getData(ipdata) {
    const response = await fetch(
      `${this.URL}${this.key}/${ipdata.latitude},${ipdata.longitude}`
    );
    const data = await response.json();

    return data;
  }
}

export default DarkSky;
