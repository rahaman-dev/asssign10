/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(3600);

  useEffect(() => {
    if (!timeLeft) return;

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <h1 className="clsHanding">Hours</h1>
          <h1 className="cls">{hours.toString().padStart(2, "0")}:</h1>
        </div>
        <div>
          <h1 className="clsHanding">Minutes</h1>
          <h1 className="cls">{minutes.toString().padStart(2, "0")}:</h1>
        </div>
        <div>
          <h1 className="clsHanding">Second</h1>
          <h1 className="cls">{seconds.toString().padStart(2, "0")}</h1>
        </div>
      </div>
    </div>
  );
}

export default CountdownTimer;
