"use client";

import { useState } from "react";
import { getSupabaseClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function FamiliesPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleRegister = async () => {
    const supabase = getSupabaseClient();
    if (!supabase) {
      setError("Falta configurar NEXT_PUBLIC_SUPABASE_URL y NEXT_PUBLIC_SUPABASE_ANON_KEY.");
      return;
    }

    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    router.push("/families/onboarding");
  };

  const handleLogin = async () => {
    const supabase = getSupabaseClient();
    if (!supabase) {
      setError("Falta configurar NEXT_PUBLIC_SUPABASE_URL y NEXT_PUBLIC_SUPABASE_ANON_KEY.");
      return;
    }

    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    router.push("/families/onboarding");
  };

  return (
    <section className="families-auth">
      <div className="families-auth-inner">
        <div className="families-hero">
          <p className="eyebrow">For families</p>
          <h1>Join ShiftSitter</h1>
          <p className="lead">
            Create your account, share your availability, and get reciprocal
            matches with nearby families that fit your shift schedule and location.
          </p>
          <ul className="families-bullets">
            <li>Email + password access with future SSO options.</li>
            <li>Needs & values onboarding to align expectations and reciprocity.</li>
            <li>Matches only when zone, shifts, and preferences align.</li>
          </ul>
        </div>

        <div className="families-card">
          <h2>Create your account</h2>
          <p className="muted">Use a trusted email; you can update profile details anytime.</p>

          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="ss-input"
            />
          </div>

          <div className="form-field">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="ss-input"
            />
          </div>

          {error && <p className="form-error">{error}</p>}

          <div className="actions">
            <button onClick={handleRegister} disabled={loading} className="ss-btn w-100">
              Create account
            </button>
            <button
              onClick={handleLogin}
              className="ss-btn-outline w-100"
              disabled={loading}
            >
              Log in
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
