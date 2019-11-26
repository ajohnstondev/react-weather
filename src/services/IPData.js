class IPData {

  constructor() {
    this.URL = 'https://api.ipdata.co/?api-key=';
    this.key = process.env.REACT_APP_IP_DATA_API_KEY;
  }

  async getData() {
    const response = await fetch(`${this.URL}${this.key}`);
    const data = await response.json();

    return data;
  }
}

export default IPData;
