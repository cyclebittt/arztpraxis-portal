import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export const metadata = { title: "Rechtliches – Praxisportal" };

export default function Page() {
  return (
    <div className="min-h-dvh flex flex-col">
      <Navbar />
      <main id="main" className="flex-1 mx-auto max-w-4xl px-4 py-10">
        <h1 className="text-3xl font-bold">Rechtliches</h1>
        <ul className="mt-6 list-disc pl-6 space-y-2">
          <li><Link className="underline" href="/rechtliches/impressum">Impressum</Link></li>
          <li><Link className="underline" href="/rechtliches/datenschutz">Datenschutz</Link></li>
          <li><Link className="underline" href="/rechtliches/barrierefreiheit">Barrierefreiheit</Link></li>
        </ul>
      </main>
      <Footer />
    </div>
  );
}
