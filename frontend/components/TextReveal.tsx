"use client";

import { ElementType, ReactNode, useEffect, useRef } from "react";
import { gsap } from "gsap";

export function TextReveal({
  children,
  as: Tag = "div",
  className,
  delay = 0,
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const items = ref.current.querySelectorAll("[data-line]");
    gsap.fromTo(
      items,
      { yPercent: 115 },
      { yPercent: 0, duration: 1, delay, stagger: 0.075, ease: "expo.out" }
    );
  }, [delay]);

  return (
    <Tag ref={ref as never} className={className}>
      {String(children)
        .split("\n")
        .map((line, index) => (
          <span className="line-mask" key={index}>
            <span data-line>{line}</span>
          </span>
        ))}
    </Tag>
  );
}
