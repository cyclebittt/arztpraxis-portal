import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = { title: "Nachrichten – Praxisportal" };

export default function Page() {
  const msgs = [
    { id: 324, subject: "Rezeptanfrage", status: "offen" },
    { id: 319, subject: "Rückfrage Termin", status: "geschlossen" }
  ];
  return (
    <div className="min-h-dvh flex flex-col">
      <Navbar />
      <main id="main" className="flex-1 mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-3xl font-bold">Nachrichten</h1>
        <div className="mt-6 space-y-2">
          {msgs.map((m) => (
            <div key={m.id} className="rounded-xl border border-gray-200 p-4">
              <div className="font-medium">#{m.id} – {m.subject}</div>
              <div className="text-gray-600">Status: {m.status}</div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

