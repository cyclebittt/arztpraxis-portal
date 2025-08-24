'use client';

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="text-3xl font-bold">Datenschutzerklärung</h1>

        <section className="mt-6 space-y-4 text-gray-700">
          <p>
            Diese Website dient als Demo‑Showcase für ein Praxis‑Portal. Es werden keine
            personenbezogenen Daten dauerhaft gespeichert. Kontakt‑ und Terminformulare sind
            in der Demo funktionslos bzw. senden keine Daten an Dritte.
          </p>
          <h2 className="text-xl font-semibold">Verantwortlicher</h2>
          <p>
            Praxis Muster, Musterstraße 1, 12345 Musterstadt, praxis@example.de
          </p>
          <h2 className="text-xl font-semibold">Server‑Logs</h2>
          <p>
            Bei Aufruf der Seiten kann der Hosting‑Anbieter technische Logs verarbeiten (z. B. IP,
            Zeitpunkt, User‑Agent) zur Sicherstellung des Betriebs. In der Produktivumsetzung wird
            dies in der finalen Erklärung konkretisiert.
          </p>
          <h2 className="text-xl font-semibold">Cookies/Tracking</h2>
          <p>
            In dieser Demo werden keine optionalen Cookies gesetzt und kein externes Tracking geladen.
          </p>
          <h2 className="text-xl font-semibold">Ihre Rechte</h2>
          <p>
            Sie haben u. a. das Recht auf Auskunft, Berichtigung, Löschung und Beschwerde bei einer
            Aufsichtsbehörde. In der finalen Fassung werden die vollständigen Angaben ergänzt.
          </p>
          <p className="text-sm text-gray-600">
            Hinweis: Platzhaltertext für die Demo. Im realen Projekt wird eine geprüfte,
            praxisindividuelle Datenschutzerklärung eingebunden.
          </p>
        </section>
      </div>
    </main>
  );
}
