"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getSupabaseClient } from "@/lib/supabase/client";

export default function FamiliesOnboardingPage() {
  const router = useRouter();
  const [checkingSession, setCheckingSession] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const supabase = getSupabaseClient();
    let active = true;

    const syncSession = async () => {
      const { data, error: sessionError } = await supabase.auth.getSession();

      if (!active) return;

      if (sessionError) {
        setError(
          "We could not validate your session. Reload the page or sign in again."
        );
        setCheckingSession(false);
        return;
      }

      if (!data.session) {
        router.replace("/families");
        return;
      }

      setCheckingSession(false);
    };

    syncSession();

    const {
      data: authListener,
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        router.replace("/families");
      }
    });

    return () => {
      active = false;
      authListener?.subscription.unsubscribe();
    };
  }, [router]);

  const handleSignOut = async () => {
    setError(null);
    try {
      const supabase = getSupabaseClient();
      const { error: signOutError } = await supabase.auth.signOut();
      if (signOutError) throw signOutError;
      router.replace("/families");
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : "We couldn’t sign you out. Please try again.";
      setError(message);
    }
  };

  const handleContinue = () => {
    router.push("/families/onboarding?step=profile");
  };

  if (checkingSession) {
    return (
      <section className="families-auth">
        <div className="families-auth-inner">
          <p className="muted">Validating your session...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="families-auth">
      <div className="families-auth-inner">
        <div className="families-hero">
          <p className="eyebrow">Onboarding</p>
          <h1>Complete your family profile</h1>
          <p className="lead">
            Confirm your availability, define your care values, and share what
            you need to cover shifts, nights, or weekends. We use this to show
            you only families that truly align with you.
          </p>
          <ul className="families-bullets">
            <li>Granular availability by day and shift.</li>
            <li>Clear care preferences and expectations.</li>
            <li>Continuous validation: if your session expires, we redirect you to sign in.</li>
          </ul>
        </div>

        <div className="families-card">
          <div className="card-header">
            <h2>Your next step</h2>
            <p className="muted">
              Complete Needs + Values to begin safe matching with other
              families.
            </p>
          </div>

          {error && <p className="form-error">{error}</p>}

          <div className="actions">
            <button onClick={handleContinue} className="ss-btn w-100">
              Continue
            </button>
            <button onClick={handleSignOut} className="ss-btn-outline w-100">
              Sign out
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
