export default function EmployersOnboardingPage() {
  return (
    <section className="families-auth">
      <div className="families-auth-inner">
        <div className="families-hero">
          <p className="eyebrow">Onboarding empleadores</p>
          <h1>Configura tu acceso</h1>
          <p className="lead">
            Confirma los datos de tu empresa, define cuántos colaboradores tendrán códigos y activa el soporte para tu
            equipo.
          </p>
          <ul className="families-bullets">
            <li>Entrega de códigos individuales para tu plantilla.</li>
            <li>Soporte y comunicaciones para managers y empleados.</li>
            <li>Visibilidad de uso y recordatorios de renovación.</li>
          </ul>
        </div>

        <div className="families-card">
          <h2>Próximos pasos</h2>
          <p className="muted">
            Comparte tus datos de facturación y el volumen de códigos que necesitas. Nuestro equipo activará el acceso y
            enviará instrucciones a tus managers.
          </p>
          <div className="actions">
            <a className="ss-btn w-100" href="mailto:hello@shiftsitter.com?subject=Onboarding%20ShiftSitter%20Empleadores">
              Enviar detalles de acceso
            </a>
            <a className="ss-btn-outline w-100" href="/employers">
              Volver al portal de empleadores
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
