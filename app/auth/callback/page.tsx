"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getSupabaseClient } from "@/lib/supabase/client";

export default function AuthCallbackPage() {
  const router = useRouter();

  useEffect(() => {
    const run = async () => {
      const supabase = getSupabaseClient();

      const { data } = await supabase.auth.getSession();
      if (data.session) {
        router.replace("/families/onboarding");
      } else {
        router.replace("/families");
      }
    };

    run();
  }, [router]);

  return (
    <main className="auth-shell">
      <div className="auth-card">
        <div className="auth-card-head">
          <h1>Signing you in…</h1>
          <p className="muted">
            Just a moment while we securely complete authentication.
          </p>
        </div>
        <div className="auth-loader" aria-hidden="true" />
      </div>
    </main>
  );
}
