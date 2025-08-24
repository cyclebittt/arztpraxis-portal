'use client';

import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-dvh flex flex-col bg-white text-gray-900">
      <Navbar />

      <main id="main" className="flex-1">
        <section className="mx-auto max-w-6xl px-4 pt-10 pb-12">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Willkommen in der Praxis Dr. Muster
          </h1>
          <p className="mt-3 text-lg text-gray-700">
            Buchen Sie Termine online, laden Sie Unterlagen hoch oder starten Sie die
            Videosprechstunde.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <QuickButton href="/termine" label="Termin buchen" />
            <QuickButton href="/formulare" label="Formulare hochladen" />
            <QuickButton href="/video" label="Videosprechstunde" />
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-16">
          <h2 className="text-2xl font-semibold">Was möchten Sie erledigen?</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {["Rezept anfordern", "Überweisung", "Befund einsehen", "Stammdaten ändern", "Arbeitsunfähigkeit (eAU)", "Barrierefreie Anfahrt"].map((t, i) => (
              <div key={i} className="rounded-xl border border-gray-200 p-4">
                {t}
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function QuickButton({ href, label }) {
  return (
    <Link
      href={href}
      className="h-14 flex items-center justify-center rounded-xl border border-gray-300 hover:bg-gray-50 text-lg font-medium"
    >
      {label}
    </Link>
  );
}
