import { useState, useEffect } from "react";

export default function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // Function to calculate time left until target date
  function calculateTimeLeft() {
    const difference = new Date(targetDate) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  // Update the countdown every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup timer on component unmount
  }, [calculateTimeLeft]);

  // Format the countdown for display
  const timerComponents = Object.keys(timeLeft).map(
    (interval, index, array) => (
      <div key={interval} className="flex items-center xs:gap-4 ">
        <div >
          <span className="text-sm  xs:font-semibold">
            {interval.charAt(0).toUpperCase() + interval.slice(1)}
          </span>

          <p className="xs:text-3xl xs:font-bold">
            {timeLeft[interval]?.toString().padStart(2, "0") || "00"}
          </p>
        </div>
        {index < array.length - 1 && (
          <span className="xs:text-2xl font-bold text-red-200">:</span>
        )}
      </div>
    )
  );

  return (
    <div className="flex items-center justify-center gap-4">
      {timerComponents.length > 0 ? (
        timerComponents
      ) : (
        <p className="text-center text-lg font-medium">Time's up!</p>
      )}
    </div>
  );
}
