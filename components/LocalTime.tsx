"use client";

import { useEffect, useState } from "react";

/** Live local time, set after mount so server and client HTML match. */
export default function LocalTime() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () =>
      setTime(
        new Date()
          .toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })
          .toLowerCase(),
      );
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);
  return <span suppressHydrationWarning>{time}</span>;
}
