import React, { useState, useRef } from 'react';
import {Input, Button} from 'antd';
import './Countdown.css';

function CountDown() {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const timerRef = useRef(null);

    const inputHandler = (e, setter) => {
        const value = parseInt(e.target.value, 10) || 0;
        setter(value);
    }

    const convertToSeconds = ( hours, minutes,seconds) => {
        return seconds + minutes * 60 + hours * 60 * 60;
    }

    const startTimer = () => {
        let totalSeconds = convertToSeconds(hours, minutes, seconds);
        timerRef.current = setInterval(() => {
            if (totalSeconds > 0) {
                setSeconds(totalSeconds % 60);
                setMinutes(Math.floor(totalSeconds / 60) % 60);
                setHours(Math.floor(totalSeconds / 60 / 60));
                totalSeconds--;
            } else {
                clearInterval(timerRef.current);
            }
        }, 1000);
    }

    const stopTimer = () => {
        clearInterval(timerRef.current);
    }

    const resetTimer = () => {
        clearInterval(timerRef.current);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
    }

  return (
    <div className='countdown-app'>
        <div>
            <p style={{ fontSize: "4rem" }}>{hours}:{minutes}:{seconds}</p> 
        </div>

        <div className='countdown-inputs'>
            <Input placeholder="Enter time in seconds" style={{ width: 50, marginBottom: 16 }} onChange={(e) => inputHandler(e, setHours)}/>
            <Input placeholder="Enter time in seconds" style={{ width: 50, marginBottom: 16 }} onChange={(e) => inputHandler(e, setMinutes)}/>
            <Input placeholder="Enter time in seconds" style={{ width: 50, marginBottom: 16 }} onChange={(e) => inputHandler(e, setSeconds)}/>
        </div>

        <div className='countdown-buttons'>
            <Button type="primary" style={{ width: 50, marginBottom: 16 }} onClick={startTimer}>Start</Button>
            <Button type="primary" style={{ width: 50, marginBottom: 16 }} onClick={stopTimer}>Pause</Button>
            <Button type="primary" style={{ width: 50, marginBottom: 16 }} onClick={resetTimer}>Reset</Button>
        </div>
    </div>
  );
}

export default CountDown;