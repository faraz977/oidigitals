"use client";

import { useEffect, useRef, useState } from "react";

type Piece = { col: number; y: number; kind: "cone" | "crate" };

const COLS = 3;
const ROWS = 3;
const STORAGE = "oi-dock-run-best";

export function HomeGame() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [speedShow, setSpeedShow] = useState(1);
  const [phase, setPhase] = useState<"ready" | "run" | "over">("ready");
  const phaseRef = useRef(phase);
  const startRef = useRef<() => void>(() => {});

  useEffect(() => {
    phaseRef.current = phase;
  }, [phase]);

  useEffect(() => {
    const stored = Number(window.localStorage.getItem(STORAGE) ?? 0);
    if (Number.isFinite(stored)) setBest(stored);
  }, []);

  useEffect(() => {
    const raw = canvas.current;
    if (!raw) return;
    const maybeCtx = raw.getContext("2d");
    if (!maybeCtx) return;
    const el: HTMLCanvasElement = raw;
    const ctx: CanvasRenderingContext2D = maybeCtx;

    let col = 1;
    let row = 2;
    let pieces: Piece[] = [];
    let spawn = 0;
    let speed = 3.4;
    let points = 0;
    let frame = 0;
    let raf = 0;
    let running = false;

    function size() {
      const node = canvas.current;
      if (!node) return { width: 560, height: 403 };
      const parent = node.parentElement;
      const width = Math.min(parent?.clientWidth ?? 560, 640);
      const height = Math.round(width * 0.72);
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      node.width = width * dpr;
      node.height = height * dpr;
      node.style.width = `${width}px`;
      node.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      return { width, height };
    }

    let { width, height } = size();

    function colX(index: number) {
      const pad = width * 0.14;
      const inner = width - pad * 2;
      return pad + (inner / COLS) * (index + 0.5);
    }

    function rowY(index: number) {
      const top = height * 0.22;
      const span = height * 0.62;
      return top + (span / (ROWS - 1)) * index;
    }

    function reset() {
      col = 1;
      row = 2;
      pieces = [];
      spawn = 20;
      speed = 2.2;
      points = 0;
      frame = 0;
      setScore(0);
      setSpeedShow(1);
    }

    function start() {
      if (running) return;
      reset();
      running = true;
      setPhase("run");
      loop();
    }
    startRef.current = start;

    function end() {
      running = false;
      setPhase("over");
      setBest((prev) => {
        const next = Math.max(prev, points);
        window.localStorage.setItem(STORAGE, String(next));
        return next;
      });
    }

    function between(value: number, a: number, b: number, pad: number) {
      const lo = Math.min(a, b) - pad;
      const hi = Math.max(a, b) + pad;
      return value >= lo && value <= hi;
    }

    function apply(p: Piece) {
      if (p.kind === "cone") {
        end();
        return true;
      }
      points += 1;
      setScore(points);
      return true;
    }

    function hitOnFall(p: Piece, prevY: number, truckY: number) {
      if (p.col !== col) return false;
      if (Math.abs(p.y - truckY) < 26 || between(truckY, prevY, p.y, 16)) {
        return apply(p);
      }
      return false;
    }

    function hitOnJump(p: Piece, fromY: number, toY: number) {
      if (p.col !== col) return false;
      if (Math.abs(p.y - toY) < 26 || between(p.y, fromY, toY, 18)) {
        return apply(p);
      }
      return false;
    }

    function loop() {
      if (!running) return;
      frame += 1;
      speed = Math.min(14, 2.2 + frame * 0.003);
      if (frame % 8 === 0) {
        setSpeedShow(Math.round((speed / 2.2) * 10) / 10);
      }
      spawn += 1;
      const gap = Math.max(26, 52 - Math.floor(frame / 90));
      if (spawn > gap) {
        spawn = 0;
        const burst = frame > 1200 && Math.random() < 0.28 ? 2 : 1;
        const used = new Set<number>();
        for (let i = 0; i < burst; i += 1) {
          let nextCol = Math.floor(Math.random() * COLS);
          if (used.has(nextCol)) nextCol = (nextCol + 1) % COLS;
          used.add(nextCol);
          const kind = Math.random() < 0.58 ? "cone" : "crate";
          pieces.push({ col: nextCol, y: -36, kind });
        }
      }

      const truckY = rowY(row);
      pieces = pieces.filter((p) => {
        const prevY = p.y;
        p.y += speed;
        if (p.y > height + 40) return false;
        if (hitOnFall(p, prevY, truckY)) return false;
        return true;
      });

      draw(truckY);
      raf = window.requestAnimationFrame(loop);
    }

    function draw(truckY: number) {
      ctx.clearRect(0, 0, width, height);
      const sky = ctx.createLinearGradient(0, 0, 0, height);
      sky.addColorStop(0, "#0b1220");
      sky.addColorStop(1, "#12101c");
      ctx.fillStyle = sky;
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = "#1a2438";
      ctx.fillRect(width * 0.1, 0, width * 0.8, height);
      ctx.strokeStyle = "rgba(255,255,255,0.1)";
      ctx.setLineDash([10, 14]);
      ctx.lineWidth = 2;
      for (let i = 1; i < COLS; i += 1) {
        const x = width * 0.1 + (width * 0.8 * i) / COLS;
        ctx.beginPath();
        ctx.moveTo(x, (frame * speed) % 24);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      ctx.setLineDash([4, 18]);
      ctx.strokeStyle = "rgba(167,139,250,0.18)";
      for (let r = 0; r < ROWS; r += 1) {
        const y = rowY(r);
        ctx.beginPath();
        ctx.moveTo(width * 0.12, y);
        ctx.lineTo(width * 0.88, y);
        ctx.stroke();
      }
      ctx.setLineDash([]);

      for (const p of pieces) {
        const x = colX(p.col);
        if (p.kind === "cone") {
          ctx.fillStyle = "#f59e0b";
          ctx.beginPath();
          ctx.moveTo(x, p.y - 16);
          ctx.lineTo(x + 14, p.y + 16);
          ctx.lineTo(x - 14, p.y + 16);
          ctx.closePath();
          ctx.fill();
          ctx.fillStyle = "#111";
          ctx.fillRect(x - 10, p.y + 2, 20, 5);
        } else {
          ctx.fillStyle = "#22d3ee";
          ctx.fillRect(x - 13, p.y - 10, 26, 22);
          ctx.strokeStyle = "#083344";
          ctx.strokeRect(x - 13, p.y - 10, 26, 22);
        }
      }

      const x = colX(col);
      ctx.fillStyle = "#67e8f9";
      ctx.fillRect(x - 16, truckY - 18, 32, 40);
      ctx.fillStyle = "#0f172a";
      ctx.fillRect(x - 10, truckY - 10, 20, 12);
      ctx.fillStyle = "#a78bfa";
      ctx.fillRect(x - 14, truckY + 14, 8, 7);
      ctx.fillRect(x + 6, truckY + 14, 8, 7);
    }

    function shift(dc: number, dr: number) {
      if (phaseRef.current !== "run") return;
      const fromY = rowY(row);
      col = Math.max(0, Math.min(COLS - 1, col + dc));
      row = Math.max(0, Math.min(ROWS - 1, row + dr));
      const toY = rowY(row);
      pieces = pieces.filter((p) => !hitOnJump(p, fromY, toY));
    }

    function onKey(e: KeyboardEvent) {
      const target = e.target;
      if (target instanceof HTMLElement) {
        const tag = target.tagName;
        if (
          tag === "INPUT" ||
          tag === "TEXTAREA" ||
          tag === "SELECT" ||
          target.isContentEditable
        ) {
          return;
        }
      }
      if (e.key === "ArrowLeft" || e.key === "a" || e.key === "A") {
        e.preventDefault();
        shift(-1, 0);
      }
      if (e.key === "ArrowRight" || e.key === "d" || e.key === "D") {
        e.preventDefault();
        shift(1, 0);
      }
      if (e.key === "ArrowUp" || e.key === "w" || e.key === "W") {
        e.preventDefault();
        shift(0, -1);
      }
      if (e.key === "ArrowDown" || e.key === "s" || e.key === "S") {
        e.preventDefault();
        shift(0, 1);
      }
      if ((e.key === " " || e.key === "Enter") && phaseRef.current !== "run") {
        e.preventDefault();
        start();
      }
    }

    function onClick(e: MouseEvent) {
      const box = el.getBoundingClientRect();
      if (phaseRef.current !== "run") {
        start();
        return;
      }
      const x = (e.clientX - box.left) / box.width;
      const y = (e.clientY - box.top) / box.height;
      if (y < 0.38) shift(0, -1);
      else if (y > 0.72) shift(0, 1);
      else if (x < 0.4) shift(-1, 0);
      else if (x > 0.6) shift(1, 0);
    }

    function onResize() {
      ({ width, height } = size());
      draw(rowY(row));
    }

    draw(rowY(row));
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    el.addEventListener("click", onClick);

    return () => {
      running = false;
      window.cancelAnimationFrame(raf);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
      el.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0b1220] shadow-[0_0_80px_rgba(34,211,238,0.12)]">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
        <div>
          <p className="text-sm text-white">Dock Run</p>
          <p className="text-xs text-cyan-200/70">
            Four directions. Speed climbs with time.
          </p>
        </div>
        <div className="text-right text-sm">
          <p className="text-cyan-300">
            {speedShow.toFixed(1)}x{" "}
            <span className="text-zinc-500">speed</span>
          </p>
          <p className="text-zinc-400">
            {score} <span className="text-zinc-600">/ best {best}</span>
          </p>
        </div>
      </div>
      <div className="relative">
        <canvas ref={canvas} className="block w-full touch-none" />
        {phase !== "run" ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0b1220]/55 px-6 text-center">
            <p className="text-lg text-white">
              {phase === "over" ? "Run over" : "Dock Run"}
            </p>
            <p className="mt-2 max-w-xs text-sm text-zinc-400">
              Arrow keys or WASD. Tap up, down, left, or right on the road.
            </p>
            <button
              type="button"
              onClick={() => startRef.current()}
              className="mt-5 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400 px-5 py-2.5 text-sm font-medium text-zinc-950"
            >
              {phase === "over" ? "Play again" : "Play Dock Run"}
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
