import Timer from "./components/Stopwatch/Stopwatch.js";
import CountDown from "./components/Timer/Countdown.js";
import './App.css';

function App() {
  return (
    <div className="flexer-container">
      <Timer />
      <CountDown />
    </div>
  );
}

export default App;
