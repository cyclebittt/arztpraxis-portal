import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = { title: "Videosprechstunde – Praxisportal" };

export default function Page() {
  const steps = ["Technik testen", "Einwilligung", "Warteraum betreten"];
  return (
    <div className="min-h-dvh flex flex-col">
      <Navbar />
      <main id="main" className="flex-1 mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-3xl font-bold">Videosprechstunde</h1>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {steps.map((s, i) => (
            <div key={i} className="rounded-xl border border-gray-200 p-4">
              <div className="font-medium">{i + 1}. {s}</div>
              <p className="text-gray-700 mt-1">Kurze Erklärung (Demo).</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

