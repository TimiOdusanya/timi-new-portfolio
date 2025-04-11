"use client";

import { useEffect, useRef } from "react";

interface Point {
  x: number;
  y: number;
  dx: number;
  dy: number;
}

export function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerRef = useRef({ x: 0, y: 0 });
  const mouseMovedRef = useRef(false);
  const trailRef = useRef<Point[]>([]);

  const params = {
    pointsNumber: 40,
    widthFactor: 1,
    mouseThreshold: 1,
    spring: 0.4,
    friction: 0.5,
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    function initializeTrail() {
      trailRef.current = new Array(params.pointsNumber).fill(null).map(() => ({
        x: canvas!.width / 2,
        y: canvas!.height / 2,
        dx: 0,
        dy: 0,
      }));
    }

    function updateMousePosition(eX: number, eY: number) {
      const rect = canvas!.getBoundingClientRect();
      pointerRef.current.x = eX - rect.left;
      pointerRef.current.y = eY - rect.top;
    }

    function setupCanvas() {
      canvas!.width = canvas!.clientWidth;
      canvas!.height = canvas!.clientHeight;
      initializeTrail();
    }

    function update(t: number) {
      if (!mouseMovedRef.current) {
        pointerRef.current.x =
          (0.5 + 0.3 * Math.cos(0.002 * t) * Math.sin(0.005 * t)) *
          canvas!.width;
        pointerRef.current.y =
          (0.5 + 0.2 * Math.cos(0.005 * t) + 0.1 * Math.cos(0.01 * t)) *
          canvas!.height;
      }

      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);

      trailRef.current.forEach((p, pIdx) => {
        const prev =
          pIdx === 0 ? pointerRef.current : trailRef.current[pIdx - 1];
        const spring = pIdx === 0 ? 0.4 * params.spring : params.spring;
        p.dx += (prev.x - p.x) * spring;
        p.dy += (prev.y - p.y) * spring;
        p.dx *= params.friction;
        p.dy *= params.friction;
        p.x += p.dx;
        p.y += p.dy;
      });

      // const gradient = ctx.createLinearGradient(
      //   0,
      //   0,
      //   canvas.width,
      //   canvas.height
      // );

      // gradient.addColorStop(0, "rgba(160, 93, 134, 1)");
      // gradient.addColorStop(1, "rgba(57, 34, 115, 1)");

      ctx!.strokeStyle = "rgba(255, 255, 255, 1)";
      ctx!.lineCap = "round";
      ctx!.beginPath();
      ctx!.moveTo(trailRef.current[0].x, trailRef.current[0].y);

      for (let i = 1; i < trailRef.current.length - 1; i++) {
        const xc = 0.5 * (trailRef.current[i].x + trailRef.current[i + 1].x);
        const yc = 0.5 * (trailRef.current[i].y + trailRef.current[i + 1].y);
        ctx!.quadraticCurveTo(
          trailRef.current[i].x,
          trailRef.current[i].y,
          xc,
          yc
        );
        ctx!.lineWidth = params.widthFactor * (params.pointsNumber - i);
        ctx!.stroke();
      }
      ctx!.lineTo(
        trailRef.current[trailRef.current.length - 1].x,
        trailRef.current[trailRef.current.length - 1].y
      );
      ctx!.stroke();
      window.requestAnimationFrame(update);
    }

    function handleMouseMove(e: MouseEvent) {
      mouseMovedRef.current = true;
      updateMousePosition(e.clientX, e.clientY);
    }

    function handleTouchMove(e: TouchEvent) {
      mouseMovedRef.current = true;
      updateMousePosition(e.touches[0].clientX, e.touches[0].clientY);
    }

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("resize", setupCanvas);

    setupCanvas();
    window.requestAnimationFrame(update);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("resize", setupCanvas);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <div className="glass-overlay fixed inset-0 bg-white/[0.01] pointer-events-none " />
    </>
  );
}
