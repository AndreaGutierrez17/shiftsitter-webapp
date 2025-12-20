// app/signup/page.tsx
"use client";

import { FormEvent, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function SignupPage() {
  const [fullName, setFullName] = useState("");
  const [role, setRole] = useState<"parent" | "employer">("parent");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);

    if (!email || !password || !fullName) {
      setErrorMsg("Please fill in all required fields.");
      return;
    }

    if (password !== confirm) {
      setErrorMsg("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
            role, // "parent" | "employer"
          },
        },
      });

      if (error) {
        setErrorMsg(error.message);
        return;
      }

      if (data.user) {
        setSuccessMsg(
          "Account created. Please check your email to confirm your address."
        );
        setFullName("");
        setEmail("");
        setPassword("");
        setConfirm("");
      }
    } catch (err: any) {
      setErrorMsg("Something went wrong while creating your account.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#fff6ef] px-4 py-10">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-[#f3e8de] p-6">
        <h1 className="text-2xl font-bold text-[#22314b] mb-1">
          Create your ShiftSitter account
        </h1>
        <p className="text-sm text-[#4a5a73] mb-5">
          Sign up to start building safe, reciprocal childcare matches.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full name */}
          <div>
            <label className="block text-sm font-semibold text-[#22314b] mb-1">
              Full name
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full rounded-lg border border-[#e6dcd2] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2fc4b6]"
              placeholder="Jane Doe"
              required
            />
          </div>

          {/* Role */}
          <div>
            <span className="block text-sm font-semibold text-[#22314b] mb-1">
              I&apos;m joining as
            </span>
            <div className="flex gap-3 text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="role"
                  value="parent"
                  checked={role === "parent"}
                  onChange={() => setRole("parent")}
                  className="accent-[#2fc4b6]"
                />
                <span>Parent / caregiver</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="role"
                  value="employer"
                  checked={role === "employer"}
                  onChange={() => setRole("employer")}
                  className="accent-[#2fc4b6]"
                />
                <span>Employer / HR</span>
              </label>
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-[#22314b] mb-1">
              Work email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-[#e6dcd2] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2fc4b6]"
              placeholder="you@example.com"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-semibold text-[#22314b] mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              minLength={6}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-[#e6dcd2] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2fc4b6]"
              required
            />
          </div>

          {/* Confirm */}
          <div>
            <label className="block text-sm font-semibold text-[#22314b] mb-1">
              Confirm password
            </label>
            <input
              type="password"
              value={confirm}
              minLength={6}
              onChange={(e) => setConfirm(e.target.value)}
              className="w-full rounded-lg border border-[#e6dcd2] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2fc4b6]"
              required
            />
          </div>

          {/* Messages */}
          {errorMsg && (
            <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
              {errorMsg}
            </p>
          )}
          {successMsg && (
            <p className="text-sm text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-lg px-3 py-2">
              {successMsg}
            </p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full ss-btn mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Creating account..." : "Create account"}
          </button>
        </form>

        <p className="mt-4 text-xs text-[#6f7b91]">
          By creating an account, you agree to ShiftSitter&apos;s terms and
          privacy approach around reciprocal care.
        </p>
      </div>
    </main>
  );
}