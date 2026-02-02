"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { getSupabaseClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const router = useRouter();
  const supabase = useMemo(() => getSupabaseClient(), []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [oauthLoading, setOauthLoading] = useState<null | "google" | "facebook">(null);
  const [error, setError] = useState<string | null>(null);

  // ✅ If already logged in -> go to /families
  useEffect(() => {
    const boot = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) router.replace("/families");
    };
    boot();
  }, [router, supabase]);

  const signInPassword = async () => {
    setError(null);
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    router.replace("/families");
  };

  const signInOAuth = async (provider: "google" | "facebook") => {
    setError(null);
    setOauthLoading(provider);

    // IMPORTANT: this must be allowed in Supabase Auth redirect URLs
    const redirectTo =
      typeof window !== "undefined" ? `${window.location.origin}/auth/callback` : undefined;

    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: { redirectTo },
    });

    setOauthLoading(null);

    if (error) setError(error.message);
    // If no error, Supabase redirects.
  };

  return (
    <main className="wrap">
      <section className="card">
        <h1 className="title">Log in</h1>
        <p className="subtitle">Access your ShiftSitter account</p>

        <div className="oauth">
          <button
            className="oauthBtn"
            type="button"
            onClick={() => signInOAuth("google")}
            disabled={!!oauthLoading || loading}
          >
            <span className="oauthIcon" aria-hidden>G</span>
            {oauthLoading === "google" ? "Connecting…" : "Continue with Google"}
          </button>

          <button
            className="oauthBtn"
            type="button"
            onClick={() => signInOAuth("facebook")}
            disabled={!!oauthLoading || loading}
          >
            <span className="oauthIcon" aria-hidden>f</span>
            {oauthLoading === "facebook" ? "Connecting…" : "Continue with Facebook"}
          </button>
        </div>

        <div className="divider">
          <span />
          <em>or</em>
          <span />
        </div>

        <label className="label">
          Email
          <input
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            autoComplete="email"
            inputMode="email"
          />
        </label>

        <label className="label">
          Password
          <input
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            type="password"
            autoComplete="current-password"
          />
        </label>

        {error ? <div className="error">{error}</div> : null}

        <button className="primary" type="button" onClick={signInPassword} disabled={loading}>
          {loading ? "Logging in…" : "Log in"}
        </button>

        <button
          className="secondary"
          type="button"
          onClick={() => router.push("/signup")}
          disabled={loading || !!oauthLoading}
        >
          Create account
        </button>

        <p className="fineprint">
          By continuing, you agree to our <a href="#" onClick={(e) => e.preventDefault()}>Terms</a> and{" "}
          <a href="#" onClick={(e) => e.preventDefault()}>Privacy Policy</a>.
        </p>
      </section>

      <style jsx>{`
        .wrap {
          min-height: 100vh;
          display: grid;
          place-items: center;
          padding: 28px 16px;
          background: radial-gradient(1200px 600px at 20% 0%, rgba(31, 182, 170, 0.14), transparent 55%),
            radial-gradient(900px 500px at 80% 10%, rgba(20, 61, 106, 0.10), transparent 55%),
            #fbf6ef;
        }

        .card {
          width: 100%;
          max-width: 420px;
          background: #fff;
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 26px;
          padding: 22px;
          box-shadow: 0 18px 50px rgba(0, 0, 0, 0.07);
        }

        .title {
          margin: 0;
          font-size: 40px;
          line-height: 1.05;
          letter-spacing: -0.02em;
          color: #1d2b3a;
          font-weight: 900;
        }

        .subtitle {
          margin: 10px 0 16px;
          color: rgba(29, 43, 58, 0.68);
          font-weight: 700;
        }

        .oauth {
          display: grid;
          gap: 12px;
          margin-top: 10px;
        }

        .oauthBtn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 14px 14px;
          border-radius: 16px;
          border: 1px solid rgba(0, 0, 0, 0.10);
          background: #fff;
          cursor: pointer;
          font-weight: 900;
          color: #1d2b3a;
        }

        .oauthBtn:disabled {
          opacity: 0.65;
          cursor: not-allowed;
        }

        .oauthIcon {
          width: 28px;
          height: 28px;
          border-radius: 10px;
          display: grid;
          place-items: center;
          font-weight: 1000;
          background: rgba(0, 0, 0, 0.06);
        }

        .divider {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          gap: 12px;
          margin: 16px 0;
          color: rgba(29, 43, 58, 0.55);
          font-weight: 900;
          letter-spacing: 0.02em;
        }
        .divider span {
          height: 1px;
          background: rgba(0, 0, 0, 0.10);
        }
        .divider em {
          font-style: normal;
        }

        .label {
          display: grid;
          gap: 8px;
          font-weight: 900;
          color: #1d2b3a;
          margin-bottom: 12px;
        }

        .input {
          width: 100%;
          padding: 14px 14px;
          border-radius: 16px;
          border: 1px solid rgba(0, 0, 0, 0.12);
          outline: none;
          font-weight: 800;
          color: #1d2b3a;
          background: #fff;
        }

        .input:focus {
          border-color: rgba(31, 182, 170, 0.65);
          box-shadow: 0 0 0 4px rgba(31, 182, 170, 0.14);
        }

        .error {
          margin: 10px 0 14px;
          background: rgba(255, 0, 0, 0.06);
          border: 1px solid rgba(255, 0, 0, 0.20);
          padding: 10px 12px;
          border-radius: 14px;
          font-weight: 900;
          color: #7a1d1d;
        }

        .primary {
          width: 100%;
          padding: 14px 16px;
          border-radius: 18px;
          border: 0;
          background: #1fb6aa;
          color: #fff;
          font-weight: 1000;
          cursor: pointer;
          margin-top: 6px;
          box-shadow: 0 14px 32px rgba(31, 182, 170, 0.25);
        }

        .primary:disabled {
          opacity: 0.75;
          cursor: not-allowed;
        }

        .secondary {
          width: 100%;
          padding: 14px 16px;
          border-radius: 18px;
          border: 2px solid rgba(29, 43, 58, 0.45);
          background: #fff;
          color: #1d2b3a;
          font-weight: 1000;
          cursor: pointer;
          margin-top: 12px;
        }

        .secondary:disabled {
          opacity: 0.65;
          cursor: not-allowed;
        }

        .fineprint {
          margin: 14px 2px 0;
          color: rgba(29, 43, 58, 0.55);
          font-weight: 700;
          font-size: 12px;
          line-height: 1.35;
        }

        .fineprint a {
          color: rgba(29, 43, 58, 0.85);
          text-decoration: underline;
        }
      `}</style>
    </main>
  );
}