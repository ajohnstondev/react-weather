import React, { Component } from 'react';

import IPData from './services/IPData';
import OpenWeather from './services/OpenWeather';

import City from './components/City';
import Description from './components/Description';
import Detail from './components/Detail';
import Loader from './components/Loader';
import Temperature from './components/Temperature';

import './App.css';

class App extends Component {

  constructor() {
    super();

    this.IPData = new IPData();
    this.OpenWeather = new OpenWeather();

    this.state= {
      isLoading: true
    };
  }

  componentDidMount() {
    this.init();
  }

  async init() {
    const ipdata = await this.IPData.getData();
    const weather = await this.OpenWeather.getData(ipdata);

    setTimeout(() => {
      this.setState({
        isLoading: false,
        ipdata: ipdata,
        weather: weather
      });

      console.log(this.state);
    }, 1000);
  }

  getIPData() {
    return this.IPData.getData();
  }

  getWeather() {
    return this.OpenWeather.getData();
  }

  render() {
    return (
      <div className="App">
        {
          this.state.isLoading ? <Loader /> : 
          <>
            <Description description={this.state.weather.weather[0].description} />
            <City city={this.state.ipdata.city} />
            <Temperature temperature={this.state.weather.main.temp} />
            <div className="details">
              <Detail title="Humidity" value={this.state.weather.main.humidity} />
              <Detail title="Wind" value={this.state.weather.wind.speed} />
            </div>
          </>
        }
      </div>
    )
  }
}

export default App;
