'use client';

export default function BarrierefreiheitPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="text-3xl font-bold">Erklärung zur Barrierefreiheit</h1>
        <p className="mt-6 text-gray-700">
          Diese Demo‑Website orientiert sich an den Anforderungen der Barrierefreiheits‑Stärkungsgesetze
          (insb. WCAG 2.1 AA). Sie dient als Beispiel, wie ein Praxis‑Portal zugänglich gestaltet werden kann.
        </p>
        <ul className="mt-4 list-disc pl-6 text-gray-700 space-y-2">
          <li>Klare Kontraste, große Klickflächen, skalierbare Schrift</li>
          <li>Tastaturbedienbarkeit, sichtbarer Fokus</li>
          <li>Sinnvolle Struktur (Überschriften, Landmarken, ARIA dort wo nötig)</li>
          <li>Verständliche Sprache und eindeutige Labels</li>
        </ul>
        <p className="mt-6 text-sm text-gray-600">
          Hinweis: Platzhaltererklärung für den Showcase. In der echten Praxis‑Website wird eine
          vollständige A11y‑Erklärung inkl. Feedback‑Mechanismus bereitgestellt.
        </p>
      </div>
    </main>
  );
}
