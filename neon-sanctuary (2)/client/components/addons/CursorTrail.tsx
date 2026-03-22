import { useEffect, useRef } from "react";

export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointsRef = useRef<{ x: number; y: number; life: number }[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      pointsRef.current.push({ x: e.clientX, y: e.clientY, life: 1 });
    };
    window.addEventListener("mousemove", onMove);

    let raf = 0;
    const loop = () => {
      raf = requestAnimationFrame(loop);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const pts = pointsRef.current;
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        const alpha = p.life;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(124, 58, 237, ${alpha})`;
        ctx.fill();
        p.life -= 0.02;
      }
      pointsRef.current = pts.filter((p) => p.life > 0);
    };
    loop();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-10"
    />
  );
}
