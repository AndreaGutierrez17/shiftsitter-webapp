"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { getSupabaseClient } from "@/lib/supabase/client";

export default function EmployersPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleRegister = async () => {
    const supabase = getSupabaseClient();
    if (!supabase) {
      setError("Falta configurar NEXT_PUBLIC_SUPABASE_URL y NEXT_PUBLIC_SUPABASE_ANON_KEY.");
      return;
    }

    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    router.push("/employers/onboarding");
  };

  const handleLogin = async () => {
    const supabase = getSupabaseClient();
    if (!supabase) {
      setError("Falta configurar NEXT_PUBLIC_SUPABASE_URL y NEXT_PUBLIC_SUPABASE_ANON_KEY.");
      return;
    }

    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    router.push("/employers/onboarding");
  };

  return (
    <section className="families-auth">
      <div className="families-auth-inner">
        <div className="families-hero">
          <p className="eyebrow">Para empleadores</p>
          <h1>Lanza ShiftSitter para tu equipo</h1>
          <p className="lead">
            Crea acceso para colaboradores que trabajan turnos, noches o fines de semana. Comparte códigos, gestiona menos y
            ofrece cuidado confiable a las familias de tu plantilla.
          </p>
          <ul className="families-bullets">
            <li>Códigos de acceso para equipos de operaciones, tiendas o plantas.</li>
            <li>Onboarding guiado y soporte directo para tus empleados.</li>
            <li>Listo para ID checks, acuerdos claros y visibilidad de uso.</li>
          </ul>
        </div>

        <div className="families-card">
          <h2>Acceso de empleadores</h2>
          <p className="muted">Usa tu correo corporativo para crear o iniciar sesión en tu cuenta de empleador.</p>

          <div className="form-field">
            <label htmlFor="email">Correo corporativo</label>
            <input
              id="email"
              type="email"
              placeholder="tu@empresa.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="ss-input"
            />
          </div>

          <div className="form-field">
            <label htmlFor="password">Contraseña</label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="ss-input"
            />
          </div>

          {error && <p className="form-error">{error}</p>}

          <div className="actions">
            <button onClick={handleRegister} disabled={loading} className="ss-btn w-100">
              Crear cuenta de empleador
            </button>
            <button onClick={handleLogin} className="ss-btn-outline w-100" disabled={loading}>
              Iniciar sesión
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
