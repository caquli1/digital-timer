import React, { useState, useEffect } from "react";
import { Button } from "antd";
import './Stopwatch.css';

function Stopwatch() {
  const [stopwatchTime, setStopwatchTime] = useState(0);
  const [isStopwatchRunning, setIsStopwatchRunning] = useState(0);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60).toString().padStart(2, "0");
    const seconds = (time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  useEffect(() => {
    let stopwatchInterval;
    if (isStopwatchRunning) {
      stopwatchInterval = setInterval(() => {
        setStopwatchTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(stopwatchInterval);
    }
    return () => clearInterval(stopwatchInterval);
  }, [isStopwatchRunning]);
  
    return (
      <div className="stopwatch-app">
        <p style={{ fontSize: "4rem" }}>{formatTime(stopwatchTime)}</p>

        <div className="stopwatch-buttons">
          <Button type="primary" style={{ width: 50, marginBottom: 16 }} onClick={() => setIsStopwatchRunning(true)}>Start</Button>
          <Button type="primary" style={{ width: 50, marginBottom: 16 }} onClick={() => setIsStopwatchRunning(false)}>Stop</Button>
          <Button type="primary" style={{ width: 50, marginBottom: 16 }} onClick={() => setStopwatchTime(0)}>Reset</Button>
        </div>
      </div>
    );
  }
  
  export default Stopwatch;