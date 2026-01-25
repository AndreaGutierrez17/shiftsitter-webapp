"use client";

import { useEffect } from "react";
import { redirect } from "next/navigation";
import { getSupabaseClient } from "@/lib/supabase/client";

export default function LogoutPage() {
  useEffect(() => {
    const run = async () => {
      const supabase = getSupabaseClient();
      await supabase.auth.signOut();
      redirect("/families");
    };
    run();
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#fff6ef]">
      <p className="text-sm text-[#22314b]">Signing you out...</p>
    </main>
  );
}
