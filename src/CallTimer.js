import React, { useState } from 'react';
import './CallTimer.css';

const ResetCall = () => {
    const onClick = () => window.location.reload();

    return <button className="call-timer__button call-timer__button--reset" onClick={onClick}><div className="call-timer__icon">↻</div></button>;
};

let intervalId;

export const CallTimer = () => {
    const [isRunning, setIsRunning] = useState(false);
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);
    const getCurrentTime = () => new Date().getTime();

    const startTimer = () => {
        setIsRunning(true);
        setStartTime(getCurrentTime());
        setEndTime(null);
        intervalId = setInterval(() => setEndTime(getCurrentTime()), 1000);
    };

    const endTimer = () => {
        clearInterval(intervalId);
        setEndTime(getCurrentTime());
        setIsRunning(false);
    }

    const runningTime = startTime && endTime ? endTime - startTime : (startTime ? getCurrentTime() - startTime : 0);

    const formatTime = milliseconds => {
        const seconds = Math.floor(milliseconds / 1000);
        const padStart = value => {
            const padded = `00${value}`;
            return padded.substring(padded.length - 2);
        }

        return `${padStart(Math.floor(seconds / 60))}:${padStart(seconds % 60)}`;
    }

    return <div className="call-timer">
        <div className="call-timer__timer">{formatTime(runningTime)}</div>
        {!isRunning && <button className="call-timer__button call-timer__button--start" onClick={startTimer}><div className="call-timer__icon">🕽</div></button>}
        {isRunning && <button className="call-timer__button call-timer__button--end" onClick={endTimer}><div className="call-timer__icon">🕽</div></button>}
        <ResetCall />
    </div>;
}
