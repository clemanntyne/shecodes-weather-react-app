import "./App.css";
import Weather from "./Weather";
import Search from "./Search";
import Forecast from "./Forecast";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Search />
      <Weather />
      <Forecast />
      <p className="ms-3 mt-3">
        <a href="https://github.com/clemanntyne/shecodes-weather-react-app">
          Open-Source code
        </a>
        , by <a href="https://friendly-yonath-678f14.netlify.app">Stephanie</a>{" "}
        from She Codes
      </p>
    </div>
  );
}

export default App;
