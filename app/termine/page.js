import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = { title: "Termin buchen – Praxisportal" };

export default function Page() {
  const steps = ["Leistung wählen", "Zeitpunkt wählen", "Daten eingeben", "Bestätigung"];
  return (
    <div className="min-h-dvh flex flex-col">
      <Navbar />
      <main id="main" className="flex-1 mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-3xl font-bold">Termin buchen</h1>
        <ol className="mt-4 grid gap-3 sm:grid-cols-4">
          {steps.map((s, i) => (
            <li key={i} className="rounded-xl border border-gray-200 p-4">
              <div className="text-sm text-gray-600">Schritt {i + 1}</div>
              <div className="font-medium">{s}</div>
            </li>
          ))}
        </ol>
        <div className="mt-6 rounded-xl border border-gray-200 p-6">
          <p>Kalender & Form folgt. Hier zunächst Platzhalter‑Inhalt.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

