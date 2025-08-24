import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = { title: "Dashboard – Praxisportal" };

export default function Page() {
  const tiles = [
    { title: "Nächster Termin", desc: "Mo, 14.10., 10:20 Uhr" },
    { title: "Offene Aufgaben", desc: "Anamneseformular ausfüllen" },
    { title: "Dokumente", desc: "2 neue Befunde" }
  ];
  return (
    <div className="min-h-dvh flex flex-col">
      <Navbar />
      <main id="main" className="flex-1 mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-3xl font-bold">Ihr Bereich</h1>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {tiles.map((t, i) => (
            <div key={i} className="rounded-xl border border-gray-200 p-4">
              <div className="font-medium">{t.title}</div>
              <div className="text-gray-700 mt-1">{t.desc}</div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

