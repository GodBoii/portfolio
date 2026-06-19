import type { Metadata } from "next";
import "./globals.css";
import { AppShell } from "@/components/AppShell";

export const metadata: Metadata = {
  title: "Godboy Digital Studio | AI Systems, Motion & Frontend",
  description:
    "A motion-rich editorial portfolio for Prajwal, building AI systems, agentic infrastructure, web experiences, and creative frontend work.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
