'use client';

import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import {
  ArrowRight,
  CalendarDays,
  FileText,
  Video,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

/**
 * Designprinzipien:
 * - Primär: Weiß (#FFFFFF), Text: nahezu Schwarz (#0A0A0A), dezente Linien (#E5E7EB)
 * - Große Typo, viel Weißraum, klare Hierarchie
 * - Starkes Fokus-Design für Tastatur (ring)
 * - Keine Animationen, kein Farb-Overload
 */

function Pill({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-sm text-neutral-700">
      {children}
    </span>
  );
}

function Card({ title, description, href, icon }) {
  return (
    <Link
      href={href}
      className="group block rounded-2xl border border-neutral-200 bg-white p-6 hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-black/60"
    >
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-xl border border-neutral-200 bg-white text-neutral-900">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
      </div>
      <p className="mt-3 text-neutral-600">{description}</p>
      <div className="mt-4 inline-flex items-center gap-2 text-neutral-900">
        <span className="font-medium">Öffnen</span>
        <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
      </div>
    </Link>
  );
}

export default function Home() {
  const actions = [
    {
      title: 'Termin online vereinbaren',
      description: 'Schnell einen freien Termin finden – ohne Telefonwarteschleife.',
      href: '/termine',
      icon: <CalendarDays size={20} aria-hidden />,
    },
    {
      title: 'Formulare & Uploads',
      description: 'Überweisungen, Anamnesen & Dokumente sicher übermitteln.',
      href: '/formulare',
      icon: <FileText size={20} aria-hidden />,
    },
    {
      title: 'Videosprechstunde',
      description: 'Bequem von zu Hause, Ende-zu-Ende verschlüsselt.',
      href: '/video',
      icon: <Video size={20} aria-hidden />,
    },
  ];

  return (
    <div className="bg-white text-neutral-900">
      <Navbar />

      {/* HERO */}
      <section className="px-5 md:px-12">
        <div className="mx-auto max-w-5xl border-b border-neutral-200 pb-12 pt-16 md:pb-16 md:pt-24">
          <div className="flex flex-wrap items-center gap-3">
            <Pill>
              <ShieldCheck size={16} aria-hidden className="text-neutral-800" />
              <span>DSGVO‑konform & barrierearm</span>
            </Pill>
            <Pill>Klare Sprache</Pill>
            <Pill>Für alle Altersgruppen</Pill>
          </div>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight md:text-6xl">
            Ein Patientenportal,<br className="hidden md:block" /> das einfach funktioniert.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-neutral-700 md:text-xl">
            Termine buchen, Dokumente sicher senden, Videosprechstunde nutzen – reduziert, schnell,
            professionell. Ideal für Haus‑ & Fachärzte, Zahnärzte und Gemeinschaftspraxen.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/termine"
              className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-white hover:bg-black/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/60"
            >
              Termin vereinbaren <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link
              href="/portal"
              className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white px-6 py-3 text-neutral-900 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/60"
            >
              Zum Patientenportal
            </Link>
          </div>

          <div className="mt-5 text-sm text-neutral-600">
            <CheckCircle2 size={16} className="inline -mt-0.5 mr-2" aria-hidden />
            Bis zu <span className="font-semibold text-neutral-900">90 % Förderung</span> (BayDiGuP, je nach Projekt).
          </div>
        </div>
      </section>

      {/* QUICK ACTIONS */}
      <section className="px-5 md:px-12">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 border-b border-neutral-200 py-8 md:grid-cols-3">
          {actions.map((a) => (
            <Card key={a.title} {...a} />
          ))}
        </div>
      </section>

      {/* VORTEILE – sehr reduziert */}
      <section className="px-5 md:px-12">
        <div className="mx-auto max-w-5xl border-b border-neutral-200 py-10 md:py-12">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Warum dieses Portal?</h2>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-neutral-200 bg-white p-6">
              <h3 className="text-base font-semibold">Schnell verständlich</h3>
              <p className="mt-2 text-neutral-700">Große Schrift, klare Kontraste, einfache Wege.</p>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white p-6">
              <h3 className="text-base font-semibold">Sicher & klar</h3>
              <p className="mt-2 text-neutral-700">Datensparsam, verschlüsselt, geprüfte Prozesse.</p>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white p-6">
              <h3 className="text-base font-semibold">Alltagstauglich</h3>
              <p className="mt-2 text-neutral-700">Weniger Telefon, weniger Papier, mehr Zeit fürs Team.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SO FUNKTIONIERT’S */}
      <section className="px-5 md:px-12">
        <div className="mx-auto max-w-5xl border-b border-neutral-200 py-10 md:py-12">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">So funktioniert’s</h2>
          <ol className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              ['01', 'Anfrage', 'Kurz mitteilen, was Sie benötigen.'],
              ['02', 'Termin', 'Online Termin auswählen – Erinnerungen inklusive.'],
              ['03', 'Unterlagen', 'Formulare digital ausfüllen & sicher senden.'],
            ].map(([step, title, text]) => (
              <li key={step} className="rounded-2xl border border-neutral-200 bg-white p-6">
                <div className="text-sm text-neutral-600">{step}</div>
                <h3 className="mt-1 text-base font-semibold">{title}</h3>
                <p className="mt-2 text-neutral-700">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 md:px-12">
        <div className="mx-auto max-w-5xl py-12 md:py-16">
          <div className="rounded-3xl border border-neutral-200 bg-white p-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Bereit für den nächsten Schritt?</h2>
            <p className="mx-auto mt-3 max-w-2xl text-neutral-700">
              Kurzer Austausch – klare nächsten Schritte, modulare Planung, optional förderfähig.
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <Link
                href="/termine"
                className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-white hover:bg-black/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/60"
              >
                Termin vereinbaren <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white px-6 py-3 text-neutral-900 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/60"
              >
                Kontakt aufnehmen
              </Link>
            </div>
            <div className="mt-4 text-sm text-neutral-600">
              <ShieldCheck size={16} className="mr-2 inline -mt-0.5" aria-hidden />
              BayDiGuP‑förderfähig – je nach Projektumfang.
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
