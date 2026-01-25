"use client";

import { FormEvent, useState } from "react";

export default function EmployersPage() {
  const [companyName, setCompanyName] = useState("");
  const [contactName, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Employer intake", { companyName, contactName, email });
    setSubmitted(true);
  };

  return (
    <main className="auth-split">
      <section className="auth-left">
        <div className="auth-left-inner">
          <p className="eyebrow">
            <i className="bi bi-building me-2" />
            Employers & CSR partners
          </p>

          <h1 className="auth-title">
            Reduce absenteeism by helping shift-working employees{" "}
            <span>keep every shift covered.</span>
          </h1>

          <p className="auth-lead">
            This is an employer intake page — not matching. We capture details to
            provision access and align on rollout.
          </p>

          <ul className="auth-points">
            <li>
              <i className="bi bi-people-fill" /> Built for hospitals, plants, warehouses, operations
            </li>
            <li>
              <i className="bi bi-shield-lock" /> Clear agreements & a verified-first approach
            </li>
            <li>
              <i className="bi bi-graph-up-arrow" /> Designed for early demos and beta rollout
            </li>
          </ul>
        </div>
      </section>

      <section className="auth-right">
        <div className="auth-card">
          <div className="auth-card-head">
            <h2>Employer interest form</h2>
            <p className="muted">
              We’ll use this to follow up and prepare your company onboarding.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="form-stack">
            <div className="form-field">
              <label>Company name</label>
              <input
                className="ss-input"
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="Acme Manufacturing"
                required
              />
            </div>

            <div className="form-field">
              <label>Contact name</label>
              <input
                className="ss-input"
                type="text"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                placeholder="Alex Rivera"
                required
              />
            </div>

            <div className="form-field">
              <label>Work email</label>
              <input
                className="ss-input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="alex@acme.com"
                required
              />
            </div>

            {submitted && (
              <div className="auth-msg">
                Thanks — we received your request. We’ll reach out shortly.
              </div>
            )}

            <button className="ss-btn w-100 auth-primary" type="submit">
              Submit interest <i className="bi bi-send ms-2" />
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
