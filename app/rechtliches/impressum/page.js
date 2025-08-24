import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = { title: "Impressum – Praxisportal" };

export default function Page() {
  return (
    <div className="min-h-dvh flex flex-col">
      <Navbar />
      <main id="main" className="flex-1 mx-auto max-w-4xl px-4 py-10">
        <h1 className="text-3xl font-bold">Impressum</h1>
        <p className="mt-3">Demo‑Angaben der Praxis (Platzhalter).</p>
      </main>
      <Footer />
    </div>
  );
}

