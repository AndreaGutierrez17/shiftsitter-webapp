export default function EmployersPage() {
  return (
    <section className="employers">
      <div className="employers-hero">
        <p className="eyebrow">For employers & partners</p>
        <h1>ShiftSitter for your workforce</h1>
        <p className="lead">
          Provide verified childcare access codes for shift-working teams. Zero admin overhead, fast launch,
          and a trusted experience for parents who work nights, weekends, and rotating hours.
        </p>
        <div className="employers-cta">
          <a className="ss-btn" href="mailto:hello@shiftsitter.com?subject=ShiftSitter%20Employer%20Access">
            Talk to sales
          </a>
          <a className="ss-btn-outline" href="#plans">
            View access options
          </a>
        </div>
        <ul className="employers-pills">
          <li>Access codes (25 / 50 / 100+)</li>
          <li>One-time or recurring billing</li>
          <li>No user management for HR</li>
        </ul>
      </div>

      <div className="employers-grid">
        <div className="employers-card">
          <h3>Access codes, not overhead</h3>
          <p>
            Buy packs of single-use codes. Employees redeem them, complete onboarding, and start matching.
            HR doesn&apos;t manage accounts.
          </p>
        </div>
        <div className="employers-card">
          <h3>Safety-first</h3>
          <p>
            Built for verified parents. Ready for ID checks, background checks, and clear agreements between
            families.
          </p>
        </div>
        <div className="employers-card">
          <h3>Launch in days</h3>
          <p>
            Stripe-enabled purchase, branded comms, and onboarding flows tuned for shift-working teams.
            Minimal lift for your IT and HR teams.
          </p>
        </div>
      </div>

      <div className="employers-steps" id="plans">
        <h2>How it works</h2>
        <ol>
          <li>Choose access: 25, 50, 100+ codes (or custom volume).</li>
          <li>Purchase via Stripe or invoice for enterprise.</li>
          <li>Distribute codes to employees; we handle onboarding.</li>
          <li>Parents match, chat, and agree on care terms.</li>
          <li>Usage reports and renewal reminders when codes run low.</li>
        </ol>
      </div>

      <div className="employers-banner">
        <div>
          <h3>Ready to sponsor access?</h3>
          <p>We&apos;ll set up your access pack, onboarding comms, and support for your managers.</p>
        </div>
        <div className="employers-banner-actions">
          <a className="ss-btn" href="mailto:hello@shiftsitter.com?subject=ShiftSitter%20Employer%20Access">
            Start with a code pack
          </a>
          <a className="ss-btn-outline" href="/families">
            See the family experience
          </a>
        </div>
      </div>
    </section>
  );
}
