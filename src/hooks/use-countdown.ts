import { useEffect, useState } from "react";

export function useCountdown(targetDate: string) {
  const [timeLeft, setTimeLeft] = useState(() =>
    formatTime(calculateTimeLeft(targetDate)),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(formatTime(calculateTimeLeft(targetDate)));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
}

function formatTime(time: {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}) {
  return {
    days: pad(time.days),
    hours: pad(time.hours),
    minutes: pad(time.minutes),
    seconds: pad(time.seconds),
  };
}

function pad(value: number) {
  return String(value).padStart(2, "0");
}

function calculateTimeLeft(targetDate: string) {
  const diff = +new Date(targetDate) - +new Date();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / 1000 / 60) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}
