import React from "react";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="weather">
      <ul className="ms-3">
        <li className="city">New York</li>
        <li>Last Updated: Today 3:49 pm</li>
        <li>Clouds</li>
      </ul>
      <div className="row ms-2">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
            alt="cloudy"
            className="img"
          />
          <span className="temperature">50</span>
          <span className="units">
            <a href="#">°F</a> | <a href="#">°C</a>
          </span>
        </div>
        <div className="col-6 conditions">
          <ul>
            <li>Clouds: 42%</li>
            <li>Wind: 2mph</li>
            <li>Humidity: 85%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
