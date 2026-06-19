"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, socials } from "@/data/site";
import { cx } from "@/lib/utils";

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-nav">
      <div className="wrap nav-grid">
        <Link href="/" className="brand" onClick={() => setOpen(false)} aria-label="Studio home">
          godboy®
        </Link>
        <span className="nav-label">digital studio</span>
        <nav className={cx("nav-links", open && "is-open")} aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cx(pathname === link.href && "active")}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <nav className="nav-social" aria-label="Social links">
          {socials.slice(0, 2).map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </nav>
        <span className="nav-location">india / remote</span>
        <button className="menu-button" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
    </header>
  );
}
