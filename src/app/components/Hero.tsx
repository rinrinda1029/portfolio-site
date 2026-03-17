"use client";

import { useState, useEffect } from "react";
import { useTyping } from "../hooks/useTyping";
import GlitchText from "./GlitchText";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const { displayed, isDone } = useTyping("経営とマーケティングで価値を創る", 100, mounted);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center px-8 lg:pr-72 z-10">
      <div className="max-w-3xl">
        {/* Hacker-style subtitle */}
        <div
          className={`mb-10 transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-muted font-mono">
            <GlitchText text="CEO & MARKETER / BUSINESS STRATEGY / DIGITAL MARKETING" trigger={mounted} />
          </p>
        </div>

        <h1 className="text-5xl md:text-7xl font-medium tracking-tight leading-[1.1] mb-8 min-h-[180px]">
          {displayed.split("").map((char, i) => {
            const isHighlight =
              (i >= 0 && i <= 1) || // 経営
              (i >= 2 && i <= 8); // マーケティング
            return (
              <span
                key={i}
                className={isHighlight ? "bg-accent text-accent-text px-0.5" : ""}
              >
                {char === "で" && i === 9 ? (
                  <>
                    <br />
                    <span className="text-4xl md:text-5xl font-normal mt-4 inline-block">で</span>
                  </>
                ) : i > 9 ? (
                  <span className="text-4xl md:text-5xl font-normal">{char}</span>
                ) : (
                  char
                )}
              </span>
            );
          })}
          <span
            className={`inline-block w-[3px] h-12 bg-accent ml-1 align-middle ${
              isDone ? "animate-pulse" : ""
            }`}
          />
        </h1>

        <div
          className={`transition-all duration-700 delay-100 ${
            isDone ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-base leading-relaxed text-foreground mb-2">
            一からビジネスをデザインする
          </p>
          <p className="text-base leading-relaxed text-foreground mb-1">
            経営者・マーケッター
          </p>
          <p className="text-lg font-bold tracking-[0.1em] mt-4 font-mono">
            <GlitchText text="HAYASHIDA SHOGO" trigger={isDone} />
          </p>

          {/* Status line */}
          <div className="mt-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[11px] text-muted font-mono tracking-wider">
              SYSTEM ACTIVE — PANAMA
            </span>
          </div>

          <div className="mt-10">
            <a
              href="#contact"
              className="inline-block border border-foreground px-8 py-3 text-sm tracking-[0.1em] font-medium hover:bg-foreground hover:text-background transition-colors"
            >
              お問い合わせ
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
