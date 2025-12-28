"use client";

import { FormEvent, useState } from "react";

export default function EmployersPage() {
  const [companyName, setCompanyName] = useState("");
  const [contactName, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Employer intake", { companyName, contactName, email });
    setSubmitted(true);
  };

  return (
    <section className="families-auth">
      <div className="families-auth-inner">
        <div className="families-hero">
          <p className="eyebrow">Employers</p>
          <h1>Launch ShiftSitter for your team</h1>
          <p className="lead">
            Intake to enable ShiftSitter for employees working shifts, nights,
            or weekends. No matching here—this captures details to create your
            tenant and prepare guided onboarding.
          </p>
          <ul className="families-bullets">
            <li>Built for operations, retail, and plant teams.</li>
            <li>We coordinate employee verification and clear agreements.</li>
            <li>Structured to connect with your systems or an API route later.</li>
          </ul>
        </div>

        <div className="families-card">
          <div className="card-header">
            <h2>Employer interest form</h2>
            <p className="muted">
              Complete the form below. This is an intake only—it doesn’t create
              Supabase records yet.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="form-stack">
            <div className="form-field">
              <label htmlFor="companyName">Company name</label>
              <input
                id="companyName"
                type="text"
                placeholder="Acme Manufacturing"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="ss-input"
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="contactName">Contact name</label>
              <input
                id="contactName"
                type="text"
                placeholder="Alex Rivera"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                className="ss-input"
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="email">Contact email</label>
              <input
                id="email"
                type="email"
                placeholder="alex@acme.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="ss-input"
                required
              />
            </div>

            {submitted && (
              <p className="success">
                Thanks for your interest. We’ll reach out to enable your
                employees.
              </p>
            )}

            <div className="actions">
              <button type="submit" className="ss-btn w-100">
                Submit interest
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
