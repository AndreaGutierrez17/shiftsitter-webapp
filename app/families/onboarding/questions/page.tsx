"use client";

import { useMemo, useState } from "react";

type QuestionType = "single" | "multi" | "text" | "number" | "range";

type Question = {
  id: string;
  step: number;
  title: string;
  subtitle?: string;
  type: QuestionType;
  required?: boolean;
  options?: { value: string; label: string; icon?: string }[];
  min?: number;
  max?: number;
  placeholder?: string;
};

type Answers = Record<string, any>;

const QUESTIONS: Question[] = [
  // =========================
  // SECTION 1 — WHAT YOU NEED
  // =========================

  // A) Scheduling Needs
  {
    id: "need_days",
    step: 1,
    title: "Let’s find out what you need",
    subtitle: "Which days do you typically need childcare?",
    type: "multi",
    required: true,
    options: [
      { value: "mon", label: "Mon", icon: "bi-calendar2" },
      { value: "tue", label: "Tue", icon: "bi-calendar2" },
      { value: "wed", label: "Wed", icon: "bi-calendar2" },
      { value: "thu", label: "Thu", icon: "bi-calendar2" },
      { value: "fri", label: "Fri", icon: "bi-calendar2" },
      { value: "sat", label: "Sat", icon: "bi-calendar2" },
      { value: "sun", label: "Sun", icon: "bi-calendar2" },
    ],
  },
  {
    id: "need_shifts",
    step: 1,
    title: "Which shift(s) do you need help with?",
    subtitle: "Select all that apply. This is a match core filter.",
    type: "multi",
    required: true,
    options: [
      { value: "early", label: "Early (4–8am)", icon: "bi-alarm" },
      { value: "day", label: "Day (8am–4pm)", icon: "bi-brightness-high" },
      { value: "evening", label: "Evening (4–10pm)", icon: "bi-sunset" },
      { value: "night", label: "Night (10pm–7am)", icon: "bi-moon-stars" },
    ],
  },

  // B) Duration of Need
  {
    id: "need_duration",
    step: 2,
    title: "How many hours do you typically need on those days/blocks?",
    subtitle: "This influences reciprocity balance (not a hard filter).",
    type: "single",
    required: true,
    options: [
      { value: "1_4", label: "1–4 hours", icon: "bi-hourglass-split" },
      { value: "4_8", label: "4–8 hours", icon: "bi-hourglass" },
      { value: "8_12", label: "8–12 hours", icon: "bi-clock" },
      { value: "full_12", label: "Full shift (12 hours)", icon: "bi-clock-history" },
      { value: "12_plus", label: "More than 12 hours", icon: "bi-plus-circle" },
    ],
  },

  // C) Setting Preference
  {
    id: "need_setting",
    step: 2,
    title: "Where do you prefer care to happen?",
    type: "single",
    required: true,
    options: [
      { value: "my_home", label: "My home", icon: "bi-house-heart" },
      { value: "their_home", label: "Their home", icon: "bi-house" },
      { value: "either", label: "Either is fine", icon: "bi-arrow-left-right" },
    ],
  },

  // D) Your Children
  {
    id: "need_children_count",
    step: 3,
    title: "Your children",
    subtitle: "How many children need care?",
    type: "number",
    required: true,
    min: 1,
    max: 10,
  },
  {
    id: "need_children_ages",
    step: 3,
    title: "Age of each child",
    subtitle: "Comma-separated is fine.",
    type: "text",
    required: true,
    placeholder: "e.g. 2, 4, 7",
  },
  {
    id: "need_special_considerations_yesno",
    step: 3,
    title: "Any special considerations or specific needs?",
    subtitle: "Allergies, sensory needs, medical notes, routines, etc.",
    type: "single",
    required: true,
    options: [
      { value: "no", label: "No", icon: "bi-x-circle" },
      { value: "yes", label: "Yes", icon: "bi-check2-circle" },
    ],
  },
  {
    id: "need_special_considerations_text",
    step: 3,
    title: "Please describe the considerations (short)",
    subtitle: "Only visible if you selected “Yes”.",
    type: "text",
    required: false,
    placeholder: "Optional details…",
  },

  // E) Safety & Home Environment (hard filters)
  {
    id: "home_smokefree",
    step: 4,
    title: "Safety & home environment",
    subtitle: "Is your home smoke-free?",
    type: "single",
    required: true,
    options: [
      { value: "yes", label: "Yes", icon: "bi-shield-check" },
      { value: "no", label: "No", icon: "bi-shield-x" },
    ],
  },
  {
    id: "require_smokefree",
    step: 4,
    title: "Do you require your match’s home to be smoke-free?",
    type: "single",
    required: true,
    options: [
      { value: "yes", label: "Yes", icon: "bi-check2-circle" },
      { value: "no", label: "No", icon: "bi-dash-circle" },
    ],
  },
  {
    id: "pets_in_home",
    step: 4,
    title: "Pets in your home?",
    type: "single",
    required: true,
    options: [
      { value: "none", label: "None", icon: "bi-ban" },
      { value: "small", label: "Small", icon: "bi-emoji-smile" },
      { value: "big", label: "Big", icon: "bi-emoji-sunglasses" },
      { value: "multiple", label: "Multiple", icon: "bi-stars" },
    ],
  },
  {
    id: "ok_with_pets",
    step: 4,
    title: "Are you okay with your children being around pets?",
    type: "single",
    required: true,
    options: [
      { value: "yes", label: "Yes", icon: "bi-check2-circle" },
      { value: "no", label: "No", icon: "bi-x-circle" },
    ],
  },

  // F) Transport / Distance (hard filters)
  {
    id: "home_zip",
    step: 5,
    title: "Transport & distance",
    subtitle: "Home ZIP code",
    type: "text",
    required: true,
    placeholder: "e.g. 21201",
  },
  {
    id: "work_zip",
    step: 5,
    title: "Work ZIP code",
    subtitle: "Used only to support handoff preferences.",
    type: "text",
    required: true,
    placeholder: "e.g. 21202",
  },
  {
    id: "handoff_location",
    step: 5,
    title: "Where should the handoff normally happen?",
    type: "single",
    required: true,
    options: [
      { value: "my_home", label: "My home", icon: "bi-house" },
      { value: "their_home", label: "Their home", icon: "bi-house-heart" },
      { value: "my_work", label: "My workplace", icon: "bi-building" },
      { value: "their_work", label: "Their workplace", icon: "bi-briefcase" },
      { value: "flexible", label: "Flexible", icon: "bi-arrow-repeat" },
    ],
  },
  {
    id: "max_travel",
    step: 5,
    title: "How far are you willing to travel for a match?",
    type: "single",
    required: true,
    options: [
      { value: "5", label: "5 minutes", icon: "bi-geo" },
      { value: "10", label: "10 minutes", icon: "bi-geo" },
      { value: "15", label: "15 minutes", icon: "bi-geo" },
      { value: "20", label: "20 minutes", icon: "bi-geo" },
      { value: "30", label: "30 minutes", icon: "bi-geo" },
      { value: "30_plus", label: "More than 30 minutes", icon: "bi-geo-alt" },
    ],
  },

  // G) Optional Care-Extras
  {
    id: "extras_need",
    step: 6,
    title: "Optional care extras",
    subtitle: "Not hard filters — they contribute to compatibility scoring.",
    type: "multi",
    required: false,
    options: [
      { value: "light_cleaning", label: "Light cleaning", icon: "bi-sparkles" },
      { value: "laundry", label: "Laundry", icon: "bi-basket" },
      { value: "meal_prep", label: "Meal prep", icon: "bi-egg-fried" },
      { value: "groceries", label: "Groceries / Errands", icon: "bi-cart" },
      { value: "transportation", label: "Transportation", icon: "bi-car-front" },
      { value: "pet_help", label: "Pet help", icon: "bi-heart" },
    ],
  },

  // =========================
  // SECTION 2 — WHAT YOU OFFER
  // =========================

  // A) Availability to Give Care
  {
    id: "give_days",
    step: 7,
    title: "Now let’s find out what you can offer in return",
    subtitle: "Which days can you provide care?",
    type: "multi",
    required: true,
    options: [
      { value: "mon", label: "Mon", icon: "bi-calendar2" },
      { value: "tue", label: "Tue", icon: "bi-calendar2" },
      { value: "wed", label: "Wed", icon: "bi-calendar2" },
      { value: "thu", label: "Thu", icon: "bi-calendar2" },
      { value: "fri", label: "Fri", icon: "bi-calendar2" },
      { value: "sat", label: "Sat", icon: "bi-calendar2" },
      { value: "sun", label: "Sun", icon: "bi-calendar2" },
    ],
  },
  {
    id: "give_shifts",
    step: 7,
    title: "Which shift(s) can you cover?",
    type: "multi",
    required: true,
    options: [
      { value: "early", label: "Early (4–8am)", icon: "bi-alarm" },
      { value: "day", label: "Day (8am–4pm)", icon: "bi-brightness-high" },
      { value: "evening", label: "Evening (4–10pm)", icon: "bi-sunset" },
      { value: "night", label: "Night (10pm–7am)", icon: "bi-moon-stars" },
    ],
  },
  {
    id: "give_hours_month",
    step: 8,
    title: "How many hours can you realistically give per month?",
    subtitle: "This is a reciprocity balance dimension.",
    type: "single",
    required: true,
    options: [
      { value: "0_4", label: "0–4", icon: "bi-hourglass" },
      { value: "4_8", label: "4–8", icon: "bi-hourglass-split" },
      { value: "8_12", label: "8–12", icon: "bi-clock" },
      { value: "12_plus", label: "12+", icon: "bi-plus-circle" },
    ],
  },

  // B) Where you can provide care
  {
    id: "give_setting",
    step: 8,
    title: "Where are you comfortable providing care?",
    type: "single",
    required: true,
    options: [
      { value: "my_home", label: "My home", icon: "bi-house-heart" },
      { value: "their_home", label: "Their home", icon: "bi-house" },
      { value: "either", label: "Either", icon: "bi-arrow-left-right" },
    ],
  },

  // C) Capacity
  {
    id: "give_total_children_capacity",
    step: 9,
    title: "Your capacity",
    subtitle: "How many total children (including yours) are you comfortable supervising?",
    type: "single",
    required: true,
    options: [
      { value: "1", label: "1", icon: "bi-1-circle" },
      { value: "2", label: "2", icon: "bi-2-circle" },
      { value: "3", label: "3", icon: "bi-3-circle" },
      { value: "4_plus", label: "4+", icon: "bi-plus-circle" },
    ],
  },
  {
    id: "give_age_ranges",
    step: 9,
    title: "What age ranges are you comfortable caring for?",
    type: "multi",
    required: true,
    options: [
      { value: "0_11m", label: "0–11 months", icon: "bi-heart" },
      { value: "1_3", label: "1–3 years", icon: "bi-emoji-smile" },
      { value: "4_5", label: "4–5 years", icon: "bi-balloon" },
      { value: "6_11", label: "6–11 years", icon: "bi-controller" },
      { value: "12_plus", label: "12+", icon: "bi-lightning" },
    ],
  },

  // D) Special requirements
  {
    id: "give_special_needs_ok",
    step: 10,
    title: "Special requirements",
    subtitle: "Are you comfortable caring for children with special needs?",
    type: "single",
    required: true,
    options: [
      { value: "yes", label: "Yes", icon: "bi-check2-circle" },
      { value: "no", label: "No", icon: "bi-x-circle" },
    ],
  },
  {
    id: "give_vehicle",
    step: 10,
    title: "Do you have your own vehicle for pickups/drop-offs?",
    type: "single",
    required: true,
    options: [
      { value: "yes", label: "Yes", icon: "bi-car-front" },
      { value: "no", label: "No", icon: "bi-ban" },
    ],
  },

  // E) Extras you're willing to offer
  {
    id: "extras_offer",
    step: 11,
    title: "Optional extras you’re willing to offer",
    subtitle: "Not hard filters — they contribute to compatibility scoring.",
    type: "multi",
    required: false,
    options: [
      { value: "light_cleaning", label: "Light cleaning", icon: "bi-sparkles" },
      { value: "laundry", label: "Laundry", icon: "bi-basket" },
      { value: "meal_prep", label: "Meal prep", icon: "bi-egg-fried" },
      { value: "groceries", label: "Groceries / Errands", icon: "bi-cart" },
      { value: "transportation", label: "Transportation", icon: "bi-car-front" },
      { value: "pet_help", label: "Pet help", icon: "bi-heart" },
    ],
  },
];

export default function QuestionsPage() {
  const [answers, setAnswers] = useState<Answers>({});
  const [step, setStep] = useState<number>(1);

  const steps = useMemo(() => {
    const uniq = Array.from(new Set(QUESTIONS.map((q) => q.step))).sort((a, b) => a - b);
    return uniq.length ? uniq : [1];
  }, []);

  const stepQuestions = useMemo(() => QUESTIONS.filter((q) => q.step === step), [step]);

  const setValue = (id: string, value: any) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const next = () => setStep((s) => Math.min(s + 1, steps[steps.length - 1]));
  const prev = () => setStep((s) => Math.max(s - 1, steps[0]));

  // simple conditional: only show special considerations text if "yes"
  const shouldShowSpecialText = answers["need_special_considerations_yesno"] === "yes";

  return (
    <div className="ss-container" style={{ maxWidth: 980, margin: "0 auto", padding: "28px 18px" }}>
      <div style={{ marginBottom: 18 }}>
        <h1 style={{ fontSize: 30, lineHeight: 1.1, margin: 0 }}>Onboarding questions</h1>
        <p style={{ opacity: 0.7, marginTop: 8, marginBottom: 0 }}>
          Step {steps.indexOf(step) + 1} of {steps.length}
        </p>
      </div>

      <div style={{ display: "grid", gap: 14 }}>
        {stepQuestions
          .filter((q) => {
            if (q.id === "need_special_considerations_text") return shouldShowSpecialText;
            return true;
          })
          .map((q) => (
            <div
              key={q.id}
              style={{
                background: "#ffffff",
                border: "1px solid rgba(0,0,0,.08)",
                borderRadius: 18,
                padding: 16,
              }}
            >
              <div style={{ fontWeight: 800, marginBottom: 6 }}>{q.title}</div>
              {q.subtitle ? <div style={{ opacity: 0.72, marginBottom: 12 }}>{q.subtitle}</div> : null}

              {/* SINGLE */}
              {q.type === "single" && q.options?.length ? (
                <div style={{ display: "grid", gap: 10 }}>
                  {q.options.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setValue(q.id, opt.value)}
                      style={{
                        textAlign: "left",
                        padding: "12px 14px",
                        borderRadius: 14,
                        border: answers[q.id] === opt.value ? "2px solid #1fb6aa" : "1px solid rgba(0,0,0,.12)",
                        background: answers[q.id] === opt.value ? "rgba(31,182,170,.10)" : "#fff",
                        cursor: "pointer",
                        fontWeight: 700,
                      }}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              ) : null}

              {/* MULTI */}
              {q.type === "multi" && q.options?.length ? (
                <div style={{ display: "grid", gap: 10 }}>
                  {q.options.map((opt) => {
                    const current: string[] = Array.isArray(answers[q.id]) ? answers[q.id] : [];
                    const active = current.includes(opt.value);

                    return (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => {
                          const nextArr = active
                            ? current.filter((v) => v !== opt.value)
                            : [...current, opt.value];
                          setValue(q.id, nextArr);
                        }}
                        style={{
                          textAlign: "left",
                          padding: "12px 14px",
                          borderRadius: 14,
                          border: active ? "2px solid #1fb6aa" : "1px solid rgba(0,0,0,.12)",
                          background: active ? "rgba(31,182,170,.10)" : "#fff",
                          cursor: "pointer",
                          fontWeight: 700,
                        }}
                      >
                        {opt.label}
                      </button>
                    );
                  })}
                </div>
              ) : null}

              {/* TEXT */}
              {q.type === "text" ? (
                <input
                  value={answers[q.id] ?? ""}
                  onChange={(e) => setValue(q.id, e.target.value)}
                  placeholder={q.placeholder ?? ""}
                  style={{
                    width: "100%",
                    padding: "12px 14px",
                    borderRadius: 14,
                    border: "1px solid rgba(0,0,0,.12)",
                    outline: "none",
                    fontWeight: 600,
                  }}
                />
              ) : null}

              {/* NUMBER */}
              {q.type === "number" ? (
                <input
                  type="number"
                  value={answers[q.id] ?? ""}
                  min={q.min}
                  max={q.max}
                  onChange={(e) => setValue(q.id, e.target.value === "" ? "" : Number(e.target.value))}
                  style={{
                    width: 220,
                    padding: "12px 14px",
                    borderRadius: 14,
                    border: "1px solid rgba(0,0,0,.12)",
                    outline: "none",
                    fontWeight: 700,
                  }}
                />
              ) : null}
            </div>
          ))}
      </div>

      <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
        <button
          type="button"
          onClick={prev}
          disabled={step === steps[0]}
          style={{
            padding: "12px 16px",
            borderRadius: 14,
            border: "1px solid rgba(0,0,0,.12)",
            background: "#fff",
            cursor: "pointer",
            opacity: step === steps[0] ? 0.55 : 1,
            fontWeight: 800,
          }}
        >
          Back
        </button>

        <button
          type="button"
          onClick={next}
          style={{
            padding: "12px 16px",
            borderRadius: 14,
            border: 0,
            background: "#1fb6aa",
            color: "#fff",
            cursor: "pointer",
            fontWeight: 900,
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
