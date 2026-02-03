"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "@/lib/firebase/client";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  async function signWithOAuth(provider: "google" | "facebook") {
    setMsg(null);
    setBusy(true);

    try {
      const selectedProvider =
        provider === "google"
          ? new GoogleAuthProvider()
          : new FacebookAuthProvider();

      await signInWithPopup(auth, selectedProvider);

      router.push("/families/onboarding");
    } catch (e: any) {
      setMsg(e?.message ?? "Login failed");
    } finally {
      setBusy(false);
    }
  }

  async function handleLogin() {
    setMsg(null);
    setBusy(true);

    try {
      if (!email || !password) {
        setMsg("Enter email and password");
        return;
      }

      await signInWithEmailAndPassword(auth, email, password);

      router.push("/families/onboarding");
    } catch (e: any) {
      setMsg("Invalid credentials");
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="auth-split">
      <section className="auth-left">
        <div className="auth-left-inner">
          <p className="eyebrow">Welcome back</p>

          <h1 className="auth-title">
            Continue your <span>matching journey.</span>
          </h1>

          <p className="auth-lead">
            Log in and pick up right where you left off.
          </p>
        </div>
      </section>

      <section className="auth-right">
        <div className="auth-card">
          <div className="auth-card-head">
            <h2>Log in</h2>
            <p className="muted">
              Sign in with email or a trusted provider.
            </p>
          </div>

          <div className="oauth-row">
            <button
              className="oauth-btn"
              onClick={() => signWithOAuth("google")}
              disabled={busy}
            >
              <GoogleG /> Continue with Google
            </button>

            <button
              className="oauth-btn"
              onClick={() => signWithOAuth("facebook")}
              disabled={busy}
            >
              <FacebookF /> Continue with Facebook
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
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={busy}
            />
          </div>

          <div className="form-field">
            <label>Password</label>

            <div className="password-wrap">
              <input
                className="ss-input"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={busy}
              />

              <button
                type="button"
                className="pw-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                <i className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`} />
              </button>
            </div>
          </div>

          {msg && <div className="auth-msg">{msg}</div>}

          <button
            className="ss-btn w-100 auth-primary"
            onClick={handleLogin}
            disabled={busy}
          >
            {busy ? "Please wait…" : "Log in"}
          </button>

          <button
            className="ss-btn-outline w-100 auth-secondary"
            onClick={() => router.push("/signup")}
          >
            Create new account
          </button>
        </div>
      </section>
    </main>
  );
}

function GoogleG() {
  return (
    <img
      src="https://www.svgrepo.com/show/475656/google-color.svg"
      width="18"
    />
  );
}

function FacebookF() {
  return (
    <img
      src="https://www.svgrepo.com/show/475647/facebook-color.svg"
      width="18"
    />
  );
}
