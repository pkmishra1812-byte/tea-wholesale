// src/components/company/Reveal.jsx
import { useEffect, useRef, useState } from "react";

export default function Reveal({
  children,
  delay = 0,
  x = 0,
  y = 40,
  duration = 800,
  className = "",
  style = {},
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return undefined;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: visible ? 1 : 0,
        transform: visible ? "translate(0,0)" : `translate(${x}px, ${y}px)`,
        transition: `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms cubic-bezier(.22,.61,.36,1) ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
