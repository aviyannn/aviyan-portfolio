import { useEffect, useState } from "react";

export const HOME_ZONE = "America/Chicago"; // San Marcos, TX

export const timeIn = (zone: string, now: Date) => {
  const time = new Intl.DateTimeFormat("en-US", {
    timeZone: zone,
    hour: "numeric",
    minute: "2-digit",
  }).format(now);
  const hour = Number(
    new Intl.DateTimeFormat("en-US", { timeZone: zone, hour: "numeric", hourCycle: "h23" }).format(
      now
    )
  );
  return { time, hour, day: hour >= 6 && hour < 18 };
};

// Current time, refreshed every 30 seconds.
export const useNow = () => {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(id);
  }, []);
  return now;
};
