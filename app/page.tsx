export default function HomePage() {
  return (
    <section className="hero">
      {/* Vídeo de fondo */}
      <video className="hero-media" autoPlay muted loop playsInline>
        <source src="/hero-shiftsitter.mp4" type="video/mp4" />
      </video>

      {/* Velo / tintado */}
      <div className="hero-tint" />

      <div className="hero-inner">
        <div className="hero-card" id="how-it-works">
          <h1 className="hero-title">
            Smart, verified childcare for{" "}
            <span>shift-working families.</span>
          </h1>

          <p className="hero-copy">
            ShiftSitter connects trusted families in a reciprocal childcare
            circle built around real shift work — nights, weekends and rotating
            schedules included.
          </p>

          <p className="hero-copy">
            Employers provide secure access, parents create their family
            profile, and ShiftSitter helps keep every shift covered with the
            right match.
          </p>

          <div className="hero-actions">
            <a href="/signup" className="ss-btn hero-cta">
              Create your account
            </a>
            <a href="#employers" className="ss-btn-outline hero-cta-outline">
              Learn how it works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
