import Script from "next/script";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ShiftSitter - Smart, verified childcare for shift-working families",
  description:
    "B2B-first childcare platform for shift-working teams. Reciprocal, trust-based matching between families, built for real-world schedules.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        />
      </head>

      <body>
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          strategy="beforeInteractive"
        />

        <header className="ss-header">
          <div className="ss-header-inner">
            <div className="ss-brand">
              <div className="ss-brand-logo">
                <img src="/logo-shiftsitter.png" alt="ShiftSitter logo" />
              </div>
              <span className="ss-brand-text">ShiftSitter</span>
            </div>

            <nav className="ss-nav ss-nav-desktop">
              <a href="/" className="ss-nav-link">Home</a>
              <a href="/#how" className="ss-nav-link">How it works</a>
              <a href="/#features" className="ss-nav-link">Features</a>
              <a href="/#partners" className="ss-nav-link">Partners</a>
              <a href="/employers" className="ss-nav-link">For employers</a>
              <a href="/families" className="ss-nav-link">For families</a>
            </nav>

            <div className="ss-header-actions ss-nav-desktop">
              <a href="/login" className="ss-btn-outline ss-nav-btn">Log in</a>
              <a href="/signup" className="ss-btn ss-nav-btn">Get started</a>
            </div>
          </div>
        </header>

        <main className="ss-main">{children}</main>
      </body>
    </html>
  );
}
