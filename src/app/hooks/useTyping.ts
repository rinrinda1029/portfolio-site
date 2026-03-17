"use client";

import { useEffect, useState } from "react";

export function useTyping(text: string, speed = 80, start = true) {
  const [displayed, setDisplayed] = useState("");
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (!start) {
      setDisplayed("");
      setIsDone(false);
      return;
    }

    let i = 0;
    setDisplayed("");
    setIsDone(false);

    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(interval);
        setIsDone(true);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, start]);

  return { displayed, isDone };
}
