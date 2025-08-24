'use client';

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="text-3xl font-bold">Impressum</h1>
        <p className="mt-6 text-gray-700">
          <strong>Praxis Muster</strong><br/>
          Musterstraße 1<br/>
          12345 Musterstadt<br/>
        </p>
        <p className="mt-4 text-gray-700">
          Telefon: 01234 567890<br/>
          E‑Mail: praxis@example.de
        </p>
        <p className="mt-4 text-gray-700">
          Vertretungsberechtigt: Dr. med. Max Muster<br/>
          Zuständige Kammer: Bayerische Landesärztekammer<br/>
          Berufsbezeichnung: Arzt (verliehen in Deutschland)<br/>
          Berufsrechtliche Regelungen: MBO‑Ä/Berufsordnung der zuständigen Kammer
        </p>
        <p className="mt-8 text-sm text-gray-600">
          Hinweis: Inhalte sind Platzhalter für den Showcase. Beim echten Projekt werden die
          korrekten Praxisdaten eingetragen.
        </p>
      </div>
    </main>
  );
}
