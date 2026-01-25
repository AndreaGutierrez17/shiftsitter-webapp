"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { getSupabaseClient } from "@/lib/supabase/client";

type Mode = "signup" | "login";

export default function FamiliesPage() {
  const router = useRouter();
  const supabase = useMemo(() => getSupabaseClient(), []);

  const [mode, setMode] = useState<Mode>("signup");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  const callbackUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}/auth/callback`
      : "";

  async function signWithOAuth(provider: "google" | "facebook") {
    setMsg(null);
    setBusy(true);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: callbackUrl,
        },
      });
      if (error) throw error;
    } catch (e: any) {
      setMsg(e?.message ?? "Something went wrong. Please try again.");
      setBusy(false);
    }
  }

  async function handleEmailAuth() {
    setMsg(null);
    setBusy(true);

    try {
      if (!email || !password) {
        setMsg("Please enter your email and password.");
        setBusy(false);
        return;
      }

      if (mode === "signup") {
        const { data, error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;

        if (data.session) {
          router.push("/families/onboarding");
          return;
        }

        setMsg(
          "Account created. Please check your email to confirm your address, then return to log in."
        );
      } else {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;

        if (data.session) router.push("/families/onboarding");
      }
    } catch (e: any) {
      setMsg(e?.message ?? "We couldn’t complete your request. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="auth-split">
      <section className="auth-left">
        <div className="auth-left-inner">
          <p className="eyebrow">
            <i className="bi bi-stars me-2" />
            For shift-working families
          </p>

          <h1 className="auth-title">
            Find trusted, reciprocal childcare that fits{" "}
            <span>real shift schedules.</span>
          </h1>

          <p className="auth-lead">
            Create your account, complete a short onboarding, then start swiping
            through compatible families — with clear match reasons, not guesswork.
          </p>

          <ul className="auth-points">
            <li>
              <i className="bi bi-shield-check" /> Verified-first approach
            </li>
            <li>
              <i className="bi bi-clock-history" /> Built for nights, weekends, rotating shifts
            </li>
            <li>
              <i className="bi bi-people" /> Parents supporting parents — with agreements
            </li>
          </ul>
        </div>
      </section>

      <section className="auth-right">
        <div className="auth-card">
          <div className="auth-card-head">
            <h2>{mode === "signup" ? "Create your account" : "Welcome back"}</h2>
            <p className="muted">
              {mode === "signup"
                ? "Use email/password or continue with a trusted provider."
                : "Sign in to continue your matching flow."}
            </p>
          </div>

          <div className="oauth-row">
            <button
              type="button"
              className="oauth-btn"
              onClick={() => signWithOAuth("google")}
              disabled={busy}
            >
              <i className="bi bi-google" />
              Continue with Google
            </button>

            <button
              type="button"
              className="oauth-btn"
              onClick={() => signWithOAuth("facebook")}
              disabled={busy}
            >
              <i className="bi bi-facebook" />
              Continue with Facebook
            </button>
          </div>

          <div className="divider">
            <span>or</span>
          </div>

          <div className="form-field">
            <label>Email</label>
            <input
              className="ss-input"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={busy}
            />
          </div>

          <div className="form-field">
            <label>Password</label>
            <input
              className="ss-input"
              type="password"
              autoComplete={mode === "signup" ? "new-password" : "current-password"}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={busy}
            />
          </div>

          {msg && <div className="auth-msg">{msg}</div>}

          <button
            type="button"
            className="ss-btn w-100 auth-primary"
            onClick={handleEmailAuth}
            disabled={busy}
          >
            {busy
              ? "Please wait…"
              : mode === "signup"
              ? "Create account"
              : "Sign in"}
          </button>

          <button
            type="button"
            className="ss-btn-outline w-100 auth-secondary"
            onClick={() => setMode(mode === "signup" ? "login" : "signup")}
            disabled={busy}
          >
            {mode === "signup"
              ? "I already have an account"
              : "Create a new account"}
          </button>

          <p className="auth-footnote">
            By continuing, you agree to ShiftSitter’s Terms & Privacy Policy.
          </p>
        </div>
      </section>
    </main>
  );
}
