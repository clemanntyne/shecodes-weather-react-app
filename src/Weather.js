import React from "react";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="weather">
      <ul>
        <li>New York</li>
        <li>Last Updated: Today 3:49 pm</li>
        <li>Clouds</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <span>img</span>
          <span>50</span>
          <span>°F | °C</span>
        </div>
        <div className="col-6">
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
