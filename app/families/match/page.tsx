"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { getSupabaseClient } from "@/lib/supabase/client";

type Match = {
  id: string;
  name: string;
  distance: string;
  matchScore: number;
  highlights: { label: string; score: number }[];
};

const DEMO_MATCHES: Match[] = [
  {
    id: "m1",
    name: "Jordan & Family",
    distance: "3.2 mi",
    matchScore: 92,
    highlights: [
      { label: "Distance", score: 95 },
      { label: "Schedule", score: 90 },
      { label: "Children ages", score: 88 },
      { label: "Values", score: 94 },
    ],
  },
  {
    id: "m2",
    name: "Avery & Family",
    distance: "5.8 mi",
    matchScore: 86,
    highlights: [
      { label: "Distance", score: 80 },
      { label: "Schedule", score: 92 },
      { label: "Children ages", score: 84 },
      { label: "Values", score: 88 },
    ],
  },
  {
    id: "m3",
    name: "Morgan & Family",
    distance: "2.1 mi",
    matchScore: 89,
    highlights: [
      { label: "Distance", score: 98 },
      { label: "Schedule", score: 82 },
      { label: "Children ages", score: 85 },
      { label: "Values", score: 91 },
    ],
  },
];

export default function FamiliesMatchPage() {
  const router = useRouter();
  const supabase = useMemo(() => getSupabaseClient(), []);
  const [ready, setReady] = useState(false);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const guard = async () => {
      const { data } = await supabase.auth.getSession();
      if (!data.session) {
        router.replace("/families");
        return;
      }
      setReady(true);
    };
    guard();
  }, [router, supabase]);

  const current = DEMO_MATCHES[index];

  if (!ready) {
    return (
      <main className="auth-shell">
        <div className="auth-card">
          <div className="auth-card-head">
            <h1>Loading matches…</h1>
            <p className="muted">Preparing your match feed.</p>
          </div>
          <div className="auth-loader" aria-hidden="true" />
        </div>
      </main>
    );
  }

  if (!current) {
    return (
      <main className="onb-shell">
        <div className="onb-card">
          <h1>No more matches in your feed</h1>
          <p className="muted">
            We’ll refresh your feed as more families join and compatibility improves.
          </p>
          <div className="q-actions">
            <button className="ss-btn" onClick={() => router.push("/families/onboarding/questions")}>
              Edit profile
            </button>
            <button className="ss-btn-outline" onClick={() => setIndex(0)}>
              Restart feed
            </button>
          </div>
        </div>
      </main>
    );
  }

  function pass() {
    setIndex((i) => i + 1);
  }

  function like() {
    // later: save like to Supabase
    setIndex((i) => i + 1);
  }

  return (
    <main className="match-shell">
      <div className="match-inner">
        <div className="match-top">
          <div>
            <h1 className="match-title">Find Your Match</h1>
            <p className="muted">
              Transparent scoring — see exactly why a family fits your needs.
            </p>
          </div>

          <button className="match-edit" onClick={() => router.push("/families/onboarding/questions")}>
            <i className="bi bi-sliders" /> Edit profile
          </button>
        </div>

        <div className="match-card">
          <div className="match-card-head">
            <div>
              <div className="match-name">{current.name}</div>
              <div className="muted">{current.distance} away</div>
            </div>

            <div className="match-score">
              <div className="match-score-num">{current.matchScore}</div>
              <div className="match-score-label">Match</div>
            </div>
          </div>

          <div className="match-reasons">
            {current.highlights.map((h) => (
              <div key={h.label} className="match-reason">
                <div className="match-reason-row">
                  <span>{h.label}</span>
                  <span className="muted">{h.score}</span>
                </div>
                <div className="match-bar">
                  <div className="match-bar-fill" style={{ width: `${h.score}%` }} />
                </div>
              </div>
            ))}
          </div>

          <div className="match-actions">
            <button className="match-btn ghost" onClick={pass}>
              <i className="bi bi-x-lg" /> Pass
            </button>
            <button className="match-btn primary" onClick={like}>
              <i className="bi bi-heart-fill" /> Like
            </button>
          </div>
        </div>

        <p className="muted match-foot">
          Next: mutual likes become a match → then chat + agreement card.
        </p>
      </div>
    </main>
  );
}
