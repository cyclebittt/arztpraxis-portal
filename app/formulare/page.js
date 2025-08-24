import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = { title: "Formulare & Upload – Praxisportal" };

export default function Page() {
  return (
    <div className="min-h-dvh flex flex-col">
      <Navbar />
      <main id="main" className="flex-1 mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-3xl font-bold">Formulare & Dokumente hochladen</h1>
        <p className="mt-3">PDF/JPG, max. 10 MB. Bitte sensible Daten nur zweckgebunden senden.</p>
        <div className="mt-6 rounded-xl border border-gray-200 p-6">
          <p>Demo‑Upload folgt. Hier zunächst Platzhalter‑Inhalt.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

