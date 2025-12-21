export default function FamiliesOnboardingPage() {
  return (
    <section style={{ padding: "4rem", maxWidth: "720px", margin: "0 auto" }}>
      <h1>Let&apos;s get to know your family</h1>

      <p style={{ marginTop: "1rem", lineHeight: 1.6 }}>
        ShiftSitter works when families truly align. This short onboarding helps
        us understand your needs, values, and availability so we can connect you
        with families who are genuinely compatible with you.
      </p>

      <p style={{ marginTop: "1rem", lineHeight: 1.6 }}>
        You&apos;ll answer a few questions about your schedule, childcare
        preferences, and what matters most to you. There are no commitments yet
        - this is about finding the right fit.
      </p>

      <p style={{ marginTop: "1rem", fontWeight: 500 }}>
        It only takes a few minutes.
      </p>

      <div style={{ marginTop: "2.5rem" }}>
        <button
          style={{
            padding: "12px 20px",
            borderRadius: "8px",
            border: "none",
            background: "#2ec4b6",
            color: "#fff",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Start onboarding
        </button>
      </div>
    </section>
  );
}
