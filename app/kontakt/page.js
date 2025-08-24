import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = { title: "Kontakt – Praxisportal" };

export default function Page() {
  return (
    <div className="min-h-dvh flex flex-col">
      <Navbar />
      <main id="main" className="flex-1 mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-3xl font-bold">Kontakt</h1>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-gray-200 p-4">
            <div className="font-medium">Telefon</div>
            <a href="tel:+4900000000" className="underline">+49 000 000000</a>
          </div>
          <div className="rounded-xl border border-gray-200 p-4">
            <div className="font-medium">E‑Mail</div>
            <a href="mailto:info@praxis.de" className="underline">info@praxis.de</a>
          </div>
          <div className="rounded-xl border border-gray-200 p-4">
            <div className="font-medium">Adresse</div>
            <p>Beispielstraße 1, 00000 Musterstadt</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

