import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from "../components/chart";



class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const tempsC = temps.map(entry => entry - 273.15);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);

    return(
      <tr className="country" key={name}>
        <td>{name}</td>
        <td><Chart data={tempsC} color="blue" units="C"/></td>
        <td><Chart data={pressures} color="white" units="hPa"/></td>
        <td><Chart data={humidities} color="red" units="%"/></td>
      </tr>
    );
  }

  render() {
    return(
      <table className="table">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

// {weather} === state.weather
function mapStateToProps({weather}) {
  return { weather }; // {weather} === {weather: weather}
}

export default connect(mapStateToProps)(WeatherList);
