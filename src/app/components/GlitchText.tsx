"use client";

import { useEffect, useState, useRef } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;':\",./<>?";

export default function GlitchText({
  text,
  className = "",
  trigger = true,
}: {
  text: string;
  className?: string;
  trigger?: boolean;
}) {
  const [display, setDisplay] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval>>(undefined);

  useEffect(() => {
    if (!trigger) return;

    const glitch = () => {
      setIsGlitching(true);
      let iterations = 0;
      const maxIterations = text.length;

      intervalRef.current = setInterval(() => {
        setDisplay(
          text
            .split("")
            .map((char, i) => {
              if (i < iterations) return text[i];
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join("")
        );

        iterations += 1 / 2;

        if (iterations >= maxIterations) {
          clearInterval(intervalRef.current);
          setDisplay(text);
          setIsGlitching(false);
        }
      }, 30);
    };

    // Initial glitch
    const timer = setTimeout(glitch, 200);

    // Periodic subtle glitch
    const periodicTimer = setInterval(() => {
      if (!isGlitching) glitch();
    }, 8000);

    return () => {
      clearTimeout(timer);
      clearInterval(periodicTimer);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [text, trigger]);

  return (
    <span className={`font-mono ${className}`}>
      {display}
    </span>
  );
}
