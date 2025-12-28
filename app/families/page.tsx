"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { getSupabaseClient } from "@/lib/supabase/client";

type AuthAction = "register" | "login" | "idle";

export default function FamiliesPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<AuthAction>("idle");
  const [error, setError] = useState<string | null>(null);

  const loading = status !== "idle";

  const handleAuth = async (mode: Exclude<AuthAction, "idle">) => {
    setStatus(mode);
    setError(null);

    try {
      const supabase = getSupabaseClient();

      const { error: authError } =
        mode === "register"
          ? await supabase.auth.signUp({ email, password })
          : await supabase.auth.signInWithPassword({ email, password });

      if (authError) {
        throw authError;
      }

      router.push("/families/onboarding");
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : "We couldn’t complete your request. Please try again.";
      setError(message);
    } finally {
      setStatus("idle");
    }
  };

  return (
    <section className="families-auth">
      <div className="families-auth-inner">
        <div className="families-hero">
          <p className="eyebrow">For shift-working families</p>
          <h1>Access ShiftSitter</h1>
          <p className="lead">
            Create a secure account with your email and password. Connect with
            nearby families who share your shift schedule, values, and care
            expectations.
          </p>
          <ul className="families-bullets">
            <li>Real Supabase Auth login (email + password).</li>
            <li>Needs &amp; values onboarding for precise matching.</li>
            <li>See only families that fit your area and availability.</li>
          </ul>
        </div>

        <div className="families-card">
          <div className="card-header">
            <h2>Create or log in</h2>
            <p className="muted">
              Real authentication—no fake logins. Use an email you check often.
            </p>
          </div>

          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="ss-input"
              disabled={loading}
            />
          </div>

          <div className="form-field">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="ss-input"
              disabled={loading}
            />
          </div>

          {error && <p className="form-error">{error}</p>}

          <div className="actions">
            <button
              onClick={() => handleAuth("register")}
              disabled={loading}
              className="ss-btn w-100"
            >
              {status === "register" ? "Creating account..." : "Create account"}
            </button>
            <button
              onClick={() => handleAuth("login")}
              className="ss-btn-outline w-100"
              disabled={loading}
            >
              {status === "login" ? "Signing in..." : "Sign in"}
            </button>
          </div>
          <p className="muted tiny">
            ShiftSitter uses Supabase Auth with ANON keys only. Passwords are
            never stored in plain text.
          </p>
        </div>
      </div>
    </section>
  );
}
