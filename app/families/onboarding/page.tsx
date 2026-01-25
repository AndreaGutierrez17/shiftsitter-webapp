"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { getSupabaseClient } from "@/lib/supabase/client";

export default function FamiliesOnboardingPage() {
  const router = useRouter();
  const supabase = useMemo(() => getSupabaseClient(), []);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const guard = async () => {
      const { data } = await supabase.auth.getSession();
      if (!data.session) {
        router.replace("/families");
        return;
      }
      setChecking(false);
    };
    guard();

    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) router.replace("/families");
    });

    return () => sub.subscription.unsubscribe();
  }, [router, supabase]);

  async function logout() {
    await supabase.auth.signOut();
    router.replace("/families");
  }

  if (checking) {
    return (
      <main className="auth-shell">
        <div className="auth-card">
          <div className="auth-card-head">
            <h1>Preparing your onboarding…</h1>
            <p className="muted">
              Securing your session and loading your next step.
            </p>
          </div>
          <div className="auth-loader" aria-hidden="true" />
        </div>
      </main>
    );
  }

  return (
    <main className="onb-shell">
      <div className="onb-card">
        <div className="onb-head">
          <div className="onb-badge">
            <i className="bi bi-heart-pulse" />
            Needs + Values onboarding
          </div>
          <h1>Tell us what “covered” looks like for your family.</h1>
          <p className="muted">
            This takes 3–5 minutes. Your answers power your match score and show
            you exactly why someone is compatible.
          </p>
        </div>

        <div className="onb-grid">
          <div className="onb-item">
            <i className="bi bi-geo-alt" />
            <div>
              <strong>Location & distance</strong>
              <div className="muted">So matches stay practical, not theoretical.</div>
            </div>
          </div>

          <div className="onb-item">
            <i className="bi bi-calendar2-week" />
            <div>
              <strong>Shift schedule</strong>
              <div className="muted">Nights, weekends, rotating hours — we account for it.</div>
            </div>
          </div>

          <div className="onb-item">
            <i className="bi bi-people" />
            <div>
              <strong>Children & routines</strong>
              <div className="muted">Ages, bedtime, pickup windows, comfort needs.</div>
            </div>
          </div>

          <div className="onb-item">
            <i className="bi bi-shield-check" />
            <div>
              <strong>Trust & boundaries</strong>
              <div className="muted">Safety expectations and agreement preferences.</div>
            </div>
          </div>
        </div>

        <div className="onb-actions">
          <button
            className="ss-btn"
            onClick={() => router.push("/families/onboarding/questions")}
          >
            Continue to questions <i className="bi bi-arrow-right ms-2" />
          </button>

          <button className="ss-btn-outline" onClick={logout}>
            Log out
          </button>
        </div>
      </div>
    </main>
  );
}
