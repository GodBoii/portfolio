"use client";

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import { gsap } from "gsap";
import { Loader } from "@/components/Loader";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Grain } from "@/components/Grain";

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [transitioning, setTransitioning] = useState(false);
  const [transitionNumber, setTransitionNumber] = useState(0);

  useEffect(() => {
    if (loading) return;
    gsap.fromTo(
      "[data-route]",
      { y: 40, opacity: 0, clipPath: "inset(8% 0 0 0)" },
      { y: 0, opacity: 1, clipPath: "inset(0% 0 0 0)", duration: 1.15, ease: "expo.out" }
    );
  }, [pathname, loading]);

  useEffect(() => {
    if (loading) return;
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const target = event.target as Element | null;
      const anchor = target?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!anchor || anchor.target || anchor.hasAttribute("download")) return;
      const url = new URL(anchor.href);
      if (url.origin !== window.location.origin || url.pathname === window.location.pathname) return;
      event.preventDefault();
      setTransitioning(true);
      setTransitionNumber(0);
      const counter = { value: 0 };
      gsap.to("[data-route]", { y: -36, opacity: 0, clipPath: "inset(0 0 8% 0)", duration: 0.48, ease: "power4.inOut" });
      gsap.to(counter, {
        value: 100,
        duration: 0.72,
        ease: "power4.inOut",
        onUpdate: () => setTransitionNumber(Math.round(counter.value)),
      });
      window.setTimeout(() => {
        router.push(url.pathname + url.search + url.hash);
        window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
      }, 520);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [loading, router]);

  useEffect(() => {
    if (!transitioning) return;
    const timeout = window.setTimeout(() => setTransitioning(false), 780);
    return () => window.clearTimeout(timeout);
  }, [pathname, transitioning]);

  return (
    <>
      <Loader onDone={() => setLoading(false)} />
      <CustomCursor />
      <SmoothScroll disabled={loading} />
      <Grain />
      <div className={`route-transition ${transitioning ? "is-active" : ""}`} aria-hidden="true">
        <span>{transitionNumber}</span>
      </div>
      <Navigation />
      <div data-route key={pathname}>
        {children}
      </div>
      <Footer />
    </>
  );
}

function CustomCursor() {
  useEffect(() => {
    const dot = document.querySelector<HTMLElement>(".cursor-dot");
    const ring = document.querySelector<HTMLElement>(".cursor-ring");
    if (!dot || !ring || !window.matchMedia("(pointer: fine)").matches) return;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let rx = x;
    let ry = y;
    let raf = 0;
    const move = (event: MouseEvent) => {
      x = event.clientX;
      y = event.clientY;
      dot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };
    const tick = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      raf = requestAnimationFrame(tick);
    };
    const over = (event: Event) => {
      if ((event.target as Element)?.closest("a,button,label,input,textarea")) document.body.classList.add("cursor-active");
    };
    const out = () => document.body.classList.remove("cursor-active");
    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);
    document.addEventListener("mouseout", out);
    tick();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mouseout", out);
    };
  }, []);

  return (
    <>
      <span className="cursor-dot" aria-hidden="true" />
      <span className="cursor-ring" aria-hidden="true" />
    </>
  );
}
