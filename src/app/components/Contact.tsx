"use client";

import { useState, type FormEvent } from "react";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-32 px-8 lg:pr-72">
      <div className="max-w-3xl">
        {/* Section Heading */}
        <ScrollReveal>
          <div className="mb-16">
            <h2 className="text-sm font-bold tracking-[0.2em]">CONTACT</h2>
            <span className="text-[11px] text-muted ml-1">お問い合わせ</span>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-sm leading-[2] mb-10">
            お気軽にお問い合わせください。通常2営業日以内にご返信いたします。
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Form */}
          <ScrollReveal direction="left" className="md:col-span-3">
            {submitted ? (
              <div className="border border-foreground p-10 text-center">
                <p className="text-lg font-bold mb-2">送信ありがとうございます</p>
                <p className="text-xs text-muted">
                  内容を確認の上、折り返しご連絡いたします。
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-bold tracking-[0.1em] mb-2"
                  >
                    お名前
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full border-b border-foreground/30 bg-transparent py-3 text-sm outline-none focus:border-foreground transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-bold tracking-[0.1em] mb-2"
                  >
                    メールアドレス
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full border-b border-foreground/30 bg-transparent py-3 text-sm outline-none focus:border-foreground transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-bold tracking-[0.1em] mb-2"
                  >
                    メッセージ
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full border-b border-foreground/30 bg-transparent py-3 text-sm outline-none focus:border-foreground transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-block border border-foreground px-10 py-3 text-sm tracking-[0.1em] font-medium hover:bg-foreground hover:text-background transition-colors"
                >
                  送信する
                </button>
              </form>
            )}
          </ScrollReveal>

          {/* SNS */}
          <ScrollReveal direction="right" delay={200} className="md:col-span-2">
            <h3 className="text-xs font-bold tracking-[0.2em] mb-6">SNS</h3>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm tracking-[0.15em] underline underline-offset-4 hover:text-muted transition-colors"
            >
              INSTAGRAM
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
