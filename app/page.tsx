// app/page.tsx
export default function HomePage() {
  return (
    <>
      {/* HERO CON VIDEO DE FONDO */}
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

      {/* ===================== */}
      {/* MARYLAND NOTE SECTION */}
      {/* ===================== */}
      <section className="py-5">
        <div className="container">
          <div className="alert alert-dark border-0 bg-note text-note note-band shadow-soft">
            <div className="d-flex align-items-start align-items-md-center flex-column flex-md-row gap-3">
              {/* Icono principal */}
              <span className="note-icon flex-shrink-0" aria-hidden="true">
                <i className="bi bi-geo-alt-fill"></i>
              </span>

              <div className="flex-grow-1">
                <div className="d-flex flex-wrap align-items-center gap-2">
                  <strong className="note-title">Launching First in Maryland!</strong>
                  <span className="badge rounded-pill note-badge">Local First</span>
                  <span className="badge rounded-pill note-badge">Verified</span>
                  <span className="badge rounded-pill note-badge">Community</span>
                </div>

                <p className="mb-2 mt-2 mb-md-0">
                  We’re starting locally to build strong community support. Not in
                  Maryland? Join the waitlist to be notified when we launch in your
                  state.
                </p>

                {/* Mini chips con métricas/valor */}
                <div className="d-flex flex-wrap gap-2 mt-2">
                  <span className="note-chip">
                    <i className="bi bi-shield-check me-1"></i> ID &amp; Safety
                  </span>
                  <span className="note-chip">
                    <i className="bi bi-people-heart me-1"></i> Parent-to-Parent
                  </span>
                  <span className="note-chip">
                    <i className="bi bi-clock-history me-1"></i> Shift-Friendly
                  </span>
                </div>
              </div>

              {/* CTA lateral */}
              <div className="ms-md-3 mt-2 mt-md-0">
                <a
                  className="btn btn-primary btn-sm rounded-5 px-3"
                  data-bs-toggle="offcanvas"
                  href="#signupDrawer"
                >
                  Join Waitlist
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ */}
      {/* HOW IT WORKS */}
      {/* ============ */}
      <section id="how" className="py-5">
        <div className="container">
          <div className="row g-4 align-items-center">
            {/* Text / Card */}
            <div className="col-lg-6">
              <div className="card feature-card accent-2 p-4 h-100">
                <div className="text-center mb-3">
                  <span className="icon-badge-xl">
                    <i className="bi bi-heart-pulse-fill"></i>
                  </span>
                </div>
                <h3 className="text-center mb-3">How it Works</h3>
                <p className="mb-2 text-muted-strong text-center">
                  Parents supporting parents — be <strong>matched</strong> with nearby
                  mums and dads like you and enter into a reciprocal caregiving
                  arrangement that fits your schedule and lifestyle.
                </p>
                <p className="mb-0 text-muted-strong text-center">
                  <strong>No cost</strong>, just smart matching and shared trust.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="col-lg-6">
              <img
                src="img/ShiftSitter.jpeg"
                className="img-fluid rounded-4 shadow-soft"
                alt="Parents helping parents illustration"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========= */}
      {/* FEATURES */}
      {/* ========= */}
      <section id="features" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4 features-title">Features</h2>

          <div className="row g-4">
            {/* Trusted & Safe */}
            <div className="col-md-4">
              <div className="card feature-card accent-1 p-4 h-100 text-center">
                <span className="icon-badge-xl mb-3">
                  <i className="bi bi-shield-check"></i>
                </span>
                <h5 className="feature-heading">Trusted &amp; Safe</h5>
                <p className="text-muted-strong mb-0">
                  ID verification, checks, geo-fencing and roaming safeguards.
                </p>
              </div>
            </div>

            {/* Schedule Sync */}
            <div className="col-md-4">
              <div className="card feature-card accent-2 p-4 h-100 text-center">
                <span className="icon-badge-xl mb-3">
                  <i className="bi bi-calendar2-week"></i>
                </span>
                <h5 className="feature-heading">Schedule Sync</h5>
                <p className="text-muted-strong mb-0">
                  Real-time pairing by shift availability and proximity.
                </p>
              </div>
            </div>

            {/* Local Reciprocity */}
            <div className="col-md-4">
              <div className="card feature-card accent-3 p-4 h-100 text-center">
                <span className="icon-badge-xl mb-3">
                  <i className="bi bi-people"></i>
                </span>
                <h5 className="feature-heading">Local Reciprocity</h5>
                <p className="text-muted-strong mb-0">Parents helping parents.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================== */}
      {/* EMPLOYERS & CSR PARTNERS      */}
      {/* ============================== */}
      <section id="partners" className="py-5 section-deep">
        <div className="container">
          <div className="row align-items-center g-4">
            {/* Texto */}
            <div className="col-lg-6">
              <div className="d-flex align-items-center mb-3">
                <img
                  src="img/logo-shiftsitter.png"
                  alt="ShiftSitter logo"
                  className="me-2 partner-logo"
                />
                <h2 className="fw-800 m-0 text-accent">
                  For Employers &amp; CSR Partners
                </h2>
              </div>

              <p className="mb-1">
                <em>Support the people who support everyone else.</em>
              </p>
              <p className="mb-3">
                Provide 12-month platform access for your workforce, or sponsor
                local shift-working parents to help them find trusted, reciprocal
                childcare within their community.
              </p>

              <ul className="list-unstyled small mb-3">
                <li className="feature-bullet">
                  <i className="bi bi-graph-up-arrow"></i>
                  <span>
                    Every $1,000 in sponsorship helps 50+ families stay in the
                    workforce
                  </span>
                </li>
                <li className="feature-bullet">
                  <i className="bi bi-people-fill"></i>
                  <span>Reduces absenteeism by up to 30%</span>
                </li>
                <li className="feature-bullet">
                  <i className="bi bi-heart-pulse-fill"></i>
                  <span>
                    Retains an estimated $250K+ value per 100 employees supported
                  </span>
                </li>
              </ul>

              <a
                className="btn btn-primary-soft"
                data-bs-toggle="offcanvas"
                href="#partnerDrawer"
                role="button"
                aria-controls="partnerDrawer"
              >
                Become a Sponsor
              </a>
            </div>

            {/* Imagen */}
            <div className="col-lg-6">
              <img
                src="img/Employers supporting families.jpeg"
                alt="Employers supporting families"
                className="img-fluid rounded shadow-soft"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer-ss py-4 border-top border-secondary-subtle bg-dark text-white text-center">
        <div className="container">
          <div className="mb-2">
            <img
              src="img/logo-shiftsitter.png"
              alt="ShiftSitter"
              className="footer-logo me-2"
              style={{ height: "36px", verticalAlign: "middle" }}
            />
            <span className="fw-semibold">ShiftSitter</span>
          </div>

          {/* LINKS LEGALES */}
          <div className="mb-2 small">
            <button
              type="button"
              className="btn btn-link btn-sm text-white-50 text-decoration-none"
              data-bs-toggle="modal"
              data-bs-target="#privacyModal"
            >
              Privacy Policy
            </button>
            {" · "}
            <button
              type="button"
              className="btn btn-link btn-sm text-white-50 text-decoration-none"
              data-bs-toggle="modal"
              data-bs-target="#termsModal"
            >
              Terms &amp; Conditions
            </button>
            {" · "}
            <button
              type="button"
              className="btn btn-link btn-sm text-white-50 text-decoration-none"
              data-bs-toggle="modal"
              data-bs-target="#contactModal"
            >
              Contact
            </button>
          </div>

          {/* REDES */}
          <div className="mb-2 footer-social">
            <a
              href="https://www.instagram.com/shiftsitterofficial?igsh=cm80MG83eDBtcjlw"
              target="_blank"
              rel="noreferrer"
              className="footer-icon"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              href="https://x.com/ShiftSitterHQ"
              target="_blank"
              rel="noreferrer"
              className="footer-icon"
            >
              <i className="bi bi-twitter-x"></i>
            </a>
            <a
              href="https://www.facebook.com/share/17kYbNJrEE/"
              target="_blank"
              rel="noreferrer"
              className="footer-icon"
            >
              <i className="bi bi-facebook"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/shiftsitter/"
              target="_blank"
              rel="noreferrer"
              className="footer-icon"
              aria-label="LinkedIn"
            >
              <i className="bi bi-linkedin"></i>
            </a>
          </div>

          {/* COPYRIGHT */}
          <div className="small text-white-50">
            © <span id="year"></span> ShiftSitter. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}