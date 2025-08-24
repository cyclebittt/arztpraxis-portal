import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = { title: "Anfahrt – Praxisportal" };

export default function Page() {
  return (
    <div className="min-h-dvh flex flex-col">
      <Navbar />
      <main id="main" className="flex-1 mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-3xl font-bold">Anfahrt & Barrierehinweise</h1>
        <p className="mt-3">So finden Sie zu uns. Parken, ÖPNV, Zugang.</p>
        <div className="mt-6 rounded-xl border border-gray-200 p-4">
          <p>Hier kommt später die Karte / Beschreibung rein.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

