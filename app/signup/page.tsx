"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import "./signup.css";
import { getSupabaseClient } from "@/lib/supabase/client";

export default function SignupPage() {
  const router = useRouter();
  const supabase = useMemo(() => getSupabaseClient(), []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);

    const origin =
      typeof window !== "undefined" ? window.location.origin : "";

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
       
        emailRedirectTo: `${origin}/auth/callback`,
        data: {
          role: "parent",
        },
      },
    });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    // Si confirm email está ON, no habrá session aún.
    if (!data.session) {
      setSuccess("Check your email to confirm your account.");
      return;
    }

    router.push("/families/onboarding/questions");
  }

  async function signInWithProvider(provider: "google" | "facebook") {
    setError(null);
    setSuccess(null);

    const origin =
      typeof window !== "undefined" ? window.location.origin : "";

    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${origin}/auth/callback`,
      },
    });

    if (error) setError(error.message);
  }

  return (
    <main className="ss-auth">
      <section className="ss-card">
        <h1 className="ss-title">Create your account</h1>
        <p className="ss-subtitle">
          Use email/password or continue with a trusted provider.
        </p>

        <div className="ss-providerRow">
          <button
            className="ss-providerBtn"
            type="button"
            onClick={() => signInWithProvider("google")}
          >
            <span className="ss-providerIcon" aria-hidden="true">G</span>
            Continue with Google
          </button>

          <button
            className="ss-providerBtn"
            type="button"
            onClick={() => signInWithProvider("facebook")}
          >
            <span className="ss-providerIcon" aria-hidden="true">f</span>
            Continue with Facebook
          </button>
        </div>

        <div className="ss-divider">OR</div>

        <form onSubmit={handleSignup}>
          <label className="ss-label" htmlFor="email">
            Email
          </label>
          <input
            className="ss-input"
            id="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className="ss-label" htmlFor="password">
            Password
          </label>

          <div className="ss-passRow">
            <input
              className="ss-input"
              id="password"
              type={showPass ? "text" : "password"}
              autoComplete="new-password"
              placeholder="Minimum 6 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
            />
            <button
              type="button"
              className="ss-passToggle"
              onClick={() => setShowPass((v) => !v)}
              aria-label={showPass ? "Hide password" : "Show password"}
            >
              {showPass ? "Hide" : "Show"}
            </button>
          </div>

          {error ? <p className="ss-error">{error}</p> : null}
          {success ? <p className="ss-success">{success}</p> : null}

          <button className="ss-cta" type="submit" disabled={loading}>
            {loading ? "Creating..." : "Create an account"}
          </button>
        </form>
      </section>
    </main>
  );
}