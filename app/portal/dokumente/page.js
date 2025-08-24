import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = { title: "Dokumente – Praxisportal" };

export default function Page() {
  const docs = [
    { name: "Befund_2025-07-12.pdf", status: "neu" },
    { name: "Impfpass_Foto.jpg", status: "gespeichert" }
  ];
  return (
    <div className="min-h-dvh flex flex-col">
      <Navbar />
      <main id="main" className="flex-1 mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-3xl font-bold">Dokumente</h1>
        <ul className="mt-6 space-y-2">
          {docs.map((d, i) => (
            <li key={i} className="rounded-xl border border-gray-200 p-4 flex justify-between">
              <span>{d.name}</span>
              <span className="text-gray-600">{d.status}</span>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
}

