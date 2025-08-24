import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = { title: "Einstellungen – Praxisportal" };

export default function Page() {
  return (
    <div className="min-h-dvh flex flex-col">
      <Navbar />
      <main id="main" className="flex-1 mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-3xl font-bold">Einstellungen</h1>
        <div className="mt-6 rounded-xl border border-gray-200 p-4">
          <p>Benachrichtigungen, Barriere‑Optionen – Demo‑Platzhalter.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

