import "./App.css";
import Weather from "./Weather";
import Search from "./Search";
import Forecast from "./Forecast";
import OpenSource from "./OpenSource";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />
        <Weather />
        <Forecast />
      </div>
      <div>
        <OpenSource />
      </div>
    </div>
  );
}

export default App;
