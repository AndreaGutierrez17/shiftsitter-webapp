// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ShiftSitter — Smart, verified childcare for shift-working families",
  description:
    "B2B-first childcare platform for shift-working teams. Reciprocal, trust-based matching between families, built for real-world schedules.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="ss-header">
          <div className="ss-header-inner">
            {/* Marca + logo */}
            <div className="ss-brand">
              <div className="ss-brand-logo">
                <img src="/logo-shiftsitter.png" alt="ShiftSitter logo" />
              </div>
              <span className="ss-brand-text">ShiftSitter</span>
            </div>

            {/* Navegación DESKTOP */}
            <nav className="ss-nav ss-nav-desktop">
              <a href="/" className="ss-nav-link">
                Home
              </a>
              <a href="/#how-it-works" className="ss-nav-link">
                How it works
              </a>
              <a href="/#employers" className="ss-nav-link">
                For employers
              </a>
              <a href="/#families" className="ss-nav-link">
                For families
              </a>
            </nav>

            {/* Acciones DESKTOP */}
            <div className="ss-header-actions ss-nav-desktop">
              <a href="/login" className="ss-btn-outline ss-nav-btn">
                Log in
              </a>
              <a href="/signup" className="ss-btn ss-nav-btn">
                Get started
              </a>
            </div>
          </div>
        </header>

        <main className="ss-main">{children}</main>
      </body>
    </html>
  );
}