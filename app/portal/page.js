import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = { title: "Portal – Praxisportal" };

export default function Page() {
  return (
    <div className="min-h-dvh flex flex-col">
      <Navbar />
      <main id="main" className="flex-1 mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-3xl font-bold">Patientenportal (Demo)</h1>
        <p className="mt-3">Bitte melden Sie sich an, um Ihre Daten zu sehen.</p>
      </main>
      <Footer />
    </div>
  );
}

