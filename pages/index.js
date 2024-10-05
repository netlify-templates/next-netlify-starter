import Head from 'next/head';
import React from 'react';
import { useState } from 'react';

export default function Home() {
  const [counterCompleted, setCounterCompleted] = useState(false);
  const targetTime = new Date(`Oct 6, 2024 00:00:00`).getTime();

  const generateTimeDisplay = () => {
    const rightJustNow = new Date().getTime();
    const runway = targetTime - rightJustNow;
    const hours = Math.floor(
      (runway % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((runway % (1000 * 60 * 60)) / (1000 * 60));
    const sec = Math.floor((runway % (1000 * 60)) / 1000);
    const stateObj = {
      hours: hours < 0 ? 0 : hours,
      minutes: minutes < 0 ? 0 : minutes,
      seconds: sec < 0 ? 0 : sec,
    };
    return stateObj;
  };

  const [timeDisplay, setTimeDisplay] = React.useState(generateTimeDisplay);
  const updateCounters = () => setTimeDisplay(generateTimeDisplay);

  React.useEffect(() => {
    setInterval(() => setTimeDisplay(generateTimeDisplay), 1000);
  }, []);

  const CounterUtil = ({ displayValue, label }) => (
    <div className="counter">
      <h2 className="counter-h2">{label}</h2>
      {displayValue}
    </div>
  );

  document.documentElement.style.setProperty('--color-bg', '#22262E');
  document.documentElement.style.setProperty('--color-heading', '#798EB0');
  document.documentElement.style.setProperty('--color-counter', '#8973FD');
  document.documentElement.style.setProperty('--font-family-heading', 'Mukta');

  const CounterMain = () => (
    <div className="app">
      <section className="container">
        <div className="date">
          <h1 className="date-h1">🎉 Celebrations in 🎉</h1>
        </div>
        <div className="wrapped">
          <CounterUtil displayValue={timeDisplay.hours} label={'Hours'} />
          <CounterUtil displayValue={timeDisplay.minutes} label={'Minutes'} />
          <CounterUtil displayValue={timeDisplay.seconds} label={'Seconds'} />
        </div>
        {timeDisplay.hours == 0 &&
          timeDisplay.minutes == 0 &&
          timeDisplay.seconds == 0 && (
            <div className="date">
              <button
                className="date-button"
                onClick={() => setCounterCompleted(true)}
              >
                {' '}
                Start{' '}
              </button>
            </div>
          )}
      </section>
    </div>
  );

  return (
    <>
      {!counterCompleted && <CounterMain />}
      {counterCompleted && <p> Hello </p>}
    </>
  );
}
