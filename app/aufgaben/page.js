import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = { title: "Ihre Anliegen – Praxisportal" };

export default function Page() {
  const tasks = [
    "Rezept anfordern",
    "Überweisung",
    "Befund einsehen",
    "Stammdaten ändern",
    "Arbeitsunfähigkeit (eAU)",
    "Barrierefreie Anfahrt"
  ];
  return (
    <div className="min-h-dvh flex flex-col">
      <Navbar />
      <main id="main" className="flex-1 mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-3xl font-bold">Was möchten Sie erledigen?</h1>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {tasks.map((t, i) => (
            <div key={i} className="rounded-xl border border-gray-200 p-4">{t}</div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

