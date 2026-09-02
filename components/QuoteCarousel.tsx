"use client";

import { useEffect, useState } from "react";

const QUOTES = [
  {
    text: "The only way to do great work is to love what you do.",
    name: "Steve Jobs",
    org: "Apple",
    src: "/quotes/quote-steve-jobs.png",
  },
  {
    text: "Your most unhappy customers are your greatest source of learning.",
    name: "Bill Gates",
    org: "Microsoft",
    src: "/quotes/quote-bill-gates.png",
  },
  {
    text: "Never trust a computer you can't throw out a window.",
    name: "Steve Wozniak",
    org: "Apple",
    src: "/quotes/quote-steve-wozniak.png",
  },
  {
    text: "The most dangerous phrase in the language is we've always done it this way.",
    name: "Grace Hopper",
    org: "COBOL and the compiler",
    src: "/quotes/quote-grace-hopper.png",
  },
  {
    text: "UNIX is basically a simple operating system, but you have to be a genius to understand the simplicity.",
    name: "Dennis Ritchie",
    org: "C and Unix",
    src: "/quotes/quote-dennis-ritchie.png",
  },
  {
    text: "The Web as I envisaged it, we have not seen it yet. The future is still so much bigger than the past.",
    name: "Tim Berners-Lee",
    org: "World Wide Web",
    src: "/quotes/quote-tim-berners-lee.png",
  },
];

export function QuoteCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % QUOTES.length);
    }, 6500);
    return () => window.clearInterval(id);
  }, []);

  const item = QUOTES[index];

  return (
    <section className="border-y border-white/10 bg-white/[0.02]">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20">
        <p className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">
          How the best think
        </p>
        <div className="mt-10 grid items-center gap-10 lg:grid-cols-[200px_1fr] lg:gap-14">
          <img
            key={item.src}
            src={item.src}
            alt=""
            className="mx-auto size-40 rounded-full object-cover ring-1 ring-white/15 sm:size-48 lg:mx-0"
          />
          <figure>
            <blockquote className="max-w-3xl text-2xl font-medium leading-snug tracking-tight text-white sm:text-3xl sm:leading-snug">
              {item.text}
            </blockquote>
            <figcaption className="mt-6 text-sm text-zinc-400">
              <span className="text-white">{item.name}</span>
              <span className="mx-2 text-zinc-600">·</span>
              {item.org}
            </figcaption>
          </figure>
        </div>
        <div className="mt-10 flex justify-center gap-2 lg:justify-start">
          {QUOTES.map((q, i) => (
            <button
              key={q.name}
              type="button"
              aria-label={q.name}
              onClick={() => setIndex(i)}
              className={
                i === index
                  ? "h-1.5 w-8 rounded-full bg-white"
                  : "h-1.5 w-3 rounded-full bg-white/20 hover:bg-white/40"
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
