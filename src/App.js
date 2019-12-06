import React, { Component } from 'react';

import DarkSky from './services/DarkSky';
import IPData from './services/IPData';

import City from './components/City';
import Description from './components/Description';
import Detail from './components/Detail';
import Icon from './components/Icon';
import Loader from './components/Loader';
import Temperature from './components/Temperature';

import './App.scss';
import NextDays from './components/NextDays';

import LocationIcon from './svg/location.svg';

class App extends Component {
  constructor() {
    super();

    this.DarkSky = new DarkSky();
    this.IPData = new IPData();

    this.state = {
      isLoading: true,
      ipdata: {},
      weather: {},
    };
  }

  componentDidMount() {
    this.init();
  }

  async init() {
    const ipdata = await this.IPData.getData();
    const weather = await this.DarkSky.getData(ipdata);

    setTimeout(() => {
      weather.daily.data = weather.daily.data.slice(1, 4);

      this.setState({
        isLoading: false,
        ipdata: ipdata,
        weather: weather,
      });
    }, 1000);
  }

  getIPData() {
    return this.IPData.getData();
  }

  getWeather() {
    return this.OpenWeather.getData();
  }

  render() {
    const ipdata = this.state.ipdata;
    const weather = this.state.weather;
    console.log(ipdata, weather);

    return (
      <div className="App">
        {this.state.isLoading ? (
          <Loader />
        ) : (
          <>
            <div className="location">
              <img src={LocationIcon} alt="Location Icon" />
              <City city={ipdata.city} />
            </div>
            <Description description={weather.currently.summary} />
            <div className="iconAndTemperature">
              <Icon icon={weather.currently.icon} />
              <Temperature temperature={weather.currently.temperature} />
            </div>
            <div className="details">
              <Detail
                title="Humidity"
                value={weather.currently.humidity * 100}
                unit="%"
              />
              <Detail
                title="Wind"
                value={Math.round(weather.currently.windSpeed)}
                unit="km/h"
              />
              <Detail
                title="Rain"
                value={weather.currently.precipProbability * 100}
                unit="%"
              />
            </div>
            <NextDays days={weather.daily.data} />
          </>
        )}
      </div>
    );
  }
}

export default App;
