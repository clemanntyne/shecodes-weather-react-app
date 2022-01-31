import React from "react";

import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="forecast row">
      <div class="col-2">
        <ul>
          <li>Mon</li>
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
            alt="cloudy"
            className="img"
          />
          <li>4°</li>
        </ul>
      </div>
      <div class="col-2">
        <ul>
          <li>Tues</li>
          <li>
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
              alt="cloudy"
              className="img"
            />
          </li>
          <li>4°</li>
        </ul>
      </div>
      <div class="col-2">
        <ul>
          <li>Wed</li>
          <li>
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
              alt="cloudy"
              className="img"
            />
          </li>
          <li>4°</li>
        </ul>
      </div>
      <div class="col-2">
        <ul>
          <li>Thur</li>
          <li>
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
              alt="cloudy"
              className="img"
            />
          </li>
          <li>4°</li>
        </ul>
      </div>
      <div class="col-2">
        <ul>
          <li>Fri</li>
          <li>
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
              alt="cloudy"
              className="img"
            />
          </li>
          <li>4°</li>
        </ul>
      </div>
      <div class="col-2">
        <ul>
          <li>Sat</li>
          <li>
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
              alt="cloudy"
              className="img"
            />
          </li>
          <li>4°</li>
        </ul>
      </div>
    </div>
  );
}
