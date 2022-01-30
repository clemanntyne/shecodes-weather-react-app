import React from "react";

export default function Weather() {
  return (
    <div className="weather">
      <form>
        <input type="search" placeholder="City.." />
        <button type="submit">Search</button>
      </form>
      <ul>
        <li>New York</li>
        <li>Last Updated: Today 3:49 pm</li>
        <li>Clouds</li>
      </ul>
    </div>
  );
}
