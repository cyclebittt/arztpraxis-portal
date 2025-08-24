// app/page.js
'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  ArrowRight,
  CalendarDays,
  ClipboardList,
  Handshake,
  Headset,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Users,
  FileText,
  CheckCircle2,
} from 'lucide-react';

/* --------- leichte CountUp-Logik (mit Rücksicht auf reduced motion) --------- */
function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const q = window.matchMedia('(prefers-reduced-motion: reduce)');
    const set = () => setReduced(q.matches);
    set();
    q.addEventListener?.('change', set);
    return () => q.removeEventListener?.('change', set);
  }, []);
  return reduced;
}

function useCountUp(target = 0, duration = 1200, start = 0, inView = true) {
  const [val, setVal] = useState(start);
  const startRef = useRef<number | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setVal(target);
      return;
    }
    let rafId: number;
    const step = (ts: number) => {
      if (startRef.current == null) startRef.current = ts;
      const p = Math.min(1, (ts - startRef.current) / duration);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      setVal(Math.round(start + (target - start) * eased));
      if (p < 1) rafId = requestAnimationFrame(step);
    };
    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [target, duration, start, inView, reduced]);

  return val;
}

function Stat({ label, value, suffix = '' }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.35 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  const n = useCountUp(value, 1200, 0, visible);
  return (
    <div ref={ref} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center">
      <div className="text-4xl md:text-5xl font-extrabold tracking-tight text-indigo-200">
        {n.toLocaleString('de-DE')}{suffix}
      </div>
      <div className="mt-2 text-neutral-200">{label}</div>
    </div>
  );
}

/* --------- Seite --------- */
export default function Home() {
  const [fadeDir, setFadeDir] = useState<'fade-right' | 'fade-down'>('fade-right');

  useEffect(() => {
    // AOS dezent initialisieren (und Rücksicht auf reduced motion)
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    AOS.init({ duration: reduced ? 0 : 600, once: true, offset: 40 });
    const handleResize = () => setFadeDir(window.innerWidth < 768 ? 'fade-down' : 'fade-right');
    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const quickActions = [
    {
      icon: <CalendarDays size={24} aria-hidden />,
      title: 'Termin online vereinbaren',
      desc: 'Schnell & ohne Wartezeit einen freien Slot finden.',
      href: '/termine',
    },
    {
      icon: <FileText size={24} aria-hidden />,
      title: 'Formulare & Uploads',
      desc: 'Überweisungen, Anamnesen & Dokumente sicher senden.',
      href: '/formulare',
    },
    {
      icon: <Headset size={24} aria-hidden />,
      title: 'Videosprechstunde',
      desc: 'Bequem von zu Hause – sicher & verschlüsselt.',
      href: '/video',
    },
  ];

  const why = [
    {
      icon: <ShieldCheck className="text-emerald-400" size={18} aria-hidden />,
      title: 'Sicher & DSGVO‑konform',
      desc: 'Klare Prozesse, minimaler Datentransfer, geprüfte Tools.',
    },
    {
      icon: <Users className="text-sky-300" size={18} aria-hidden />,
      title: 'Für alle Altersgruppen',
      desc: 'Große Buttons, klare Sprache, barrierearme Gestaltung.',
    },
    {
      icon: <ClipboardList className="text-violet-300" size={18} aria-hidden />,
      title: 'Einfach im Alltag',
      desc: 'Weniger Telefon, weniger Papier – mehr Zeit für Medizin.',
    },
  ];

  return (
    <div className="font-proxima bg-[#0B0B0F] text-white">
      <Navbar />

      {/* HERO – freundlicher, aber klarer Auftritt */}
      <section className="relative overflow-hidden">
        {/* freundliche Farbflächen */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_-10%_-10%,rgba(99,102,241,.28),transparent_60%),radial-gradient(900px_600px_at_120%_0%,rgba(56,189,248,.18),transparent_55%),linear-gradient(120deg,#0B0B0F_0%,#0D1016_60%,#0B0B0F_100%)]" />
        <div className="pointer-events-none absolute -top-24 -left-32 h-[26rem] w-[46rem] rounded-full bg-indigo-500/15 blur-[120px]" />
        <div className="pointer-events-none absolute top-1/3 -right-28 h-[24rem] w-[42rem] rounded-full bg-rose-400/10 blur-[120px]" />

        <div className="relative px-5 md:px-16 pt-18 md:pt-24 pb-12 md:pb-18 max-w-5xl mx-auto text-center">
          <span
            className="inline-flex items-center gap-2 text-sm text-indigo-100 bg-white/10 ring-1 ring-white/15 px-3 py-1 rounded-full"
            aria-label="Hinweis auf Spezialisierung"
          >
            <Sparkles size={16} aria-hidden /> Digitale Patienten‑Services für Praxen
          </span>

          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Modern. Einfach. <span className="text-indigo-200">Für alle verständlich.</span>
          </h1>

          <p className="mt-5 text-lg md:text-xl text-neutral-200">
            Von der Online‑Terminvergabe bis zur sicheren Dokumenten‑Übergabe:
            Wir bauen Praxis‑Portale, die im Alltag wirklich helfen – optional förderfähig.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/termine"
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 transition-colors font-semibold inline-flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-indigo-300"
              aria-label="Jetzt Termin online vereinbaren"
            >
              Termin vereinbaren <ArrowRight size={18} aria-hidden />
            </Link>
            <Link
              href="/portal"
              className="w-full sm:w-auto px-6 py-3 rounded-full border border-white/15 hover:border-white/30 bg-white/5 transition-colors font-semibold focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-white/40"
              aria-label="Zum Patientenportal"
            >
              Zum Patientenportal
            </Link>
          </div>

          <div className="mt-5 flex items-center justify-center gap-2 text-sm text-indigo-100/90">
            <ShieldCheck size={16} className="text-emerald-400" aria-hidden />
            Bis zu <strong className="mx-1">90 % förderfähig</strong> (BayDiGuP, je nach Projekt).
          </div>
        </div>
      </section>

      {/* QUICK ACTIONS – große, leicht scanbare Karten */}
      <section className="px-5 md:px-16 -mt-5 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {quickActions.map((a, i) => (
            <Link
              key={a.title}
              href={a.href}
              className="group rounded-2xl border border-white/10 bg-white/[0.05] hover:bg-white/[0.07] transition-colors p-5 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              data-aos="fade-up"
              data-aos-delay={i * 100}
              aria-label={a.title}
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-indigo-200">
                  {a.icon}
                </div>
                <h3 className="text-lg font-semibold">{a.title}</h3>
              </div>
              <p className="mt-2 text-neutral-200">{a.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* KPI-BLOCK – dezent, aber wertig */}
      <section className="px-5 md:px-16 pb-6">
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 md:p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <Stat label="aktive Praxis‑Kunden" value={32} />
            <Stat label="Ø No‑Show‑Reduktion" value={24} suffix="%" />
            <Stat label="Zeitersparnis im Team" value={7} suffix="h/Woche" />
            <Stat label="Zufriedenheit" value={97} suffix="%" />
          </div>
        </div>
      </section>

      {/* WARUM – kurze, klare Nutzenargumente */}
      <section className="px-5 md:px-16 py-8">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Warum dieses Portal?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {why.map((b, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
              data-aos={fadeDir}
              data-aos-delay={i * 80}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm text-indigo-100">
                {b.icon}
                <span>{b.title}</span>
              </div>
              <p className="mt-3 text-neutral-200">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SO FUNKTIONIERT'S – schrittweise, sehr scanbar */}
      <section className="px-5 md:px-16 py-10 md:py-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">So funktioniert’s</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { step: '01', title: 'Anfrage', desc: 'Kurz schildern, was Sie brauchen – wir melden uns fix.' },
            { step: '02', title: 'Termin', desc: 'Wunschtermin online auswählen – Erinnerungen inklusive.' },
            { step: '03', title: 'Unterlagen', desc: 'Formulare digital ausfüllen & sicher übermitteln.' },
            { step: '04', title: 'Durchführung', desc: 'Termin wahrnehmen – Rückfragen klären wir vorab.' },
          ].map((s, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
              data-aos="fade-up"
              data-aos-delay={i * 90}
            >
              <div className="text-sm text-indigo-200 font-semibold tracking-wide">{s.step}</div>
              <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-neutral-200">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* KURZE STIMMEN – textbasiert, gut lesbar */}
      <section className="px-5 md:px-16 pb-10">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">Was Praxen sagen</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: '„Online‑Termine + Erinnerungen sparen uns täglich Telefonzeit.“',
                name: 'Hausarztpraxis (Bayern)',
              },
              {
                quote: '„Sichere Uploads, klare Formulare – weniger Zettel, weniger Fehler.“',
                name: 'Facharztzentrum (NRW)',
              },
              {
                quote: '„Auch ältere Patient:innen finden sich gut zurecht.“',
                name: 'Zahnarztpraxis (Süddeutschland)',
              },
            ].map((t, i) => (
              <figure
                key={i}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <blockquote className="text-neutral-100">{t.quote}</blockquote>
                <figcaption className="mt-3 text-sm text-neutral-300">
                  <Handshake className="inline mr-2 align-[-2px]" size={16} aria-hidden />
                  <span className="font-medium">{t.name}</span>
                </figcaption>
              </figure>
            ))}
          </div>

          <p className="mt-5 text-sm text-[#AEB5C8] flex items-start gap-2">
            <CheckCircle2 className="text-emerald-400" size={18} aria-hidden />
            Zitate anonymisiert & sinngemäß. Keine Bild‑Uploads erforderlich.
          </p>
        </div>
      </section>

      {/* GROßE CTA – klarer Abschluss */}
      <section className="px-5 md:px-16 py-14 md:py-18 text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-8 md:p-10">
          <h2 className="text-3xl md:text-4xl font-bold">Bereit, es auszuprobieren?</h2>
          <p className="mt-3 text-neutral-200 max-w-2xl mx-auto">
            In 30 Minuten zum Plan: Wir zeigen, welche Portal‑Bausteine Ihrer Praxis sofort helfen –
            förderfähig, sicher, alltagstauglich.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Link
              href="/request"
              className="px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 transition-colors font-semibold inline-flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              aria-label="Termin vereinbaren"
            >
              Termin vereinbaren <ArrowRight size={18} aria-hidden />
            </Link>
            <Link
              href="/kontakt"
              className="px-6 py-3 rounded-full border border-white/15 hover:border-white/30 bg-white/5 transition-colors font-semibold focus:outline-none focus:ring-2 focus:ring-white/40"
              aria-label="Kontakt aufnehmen"
            >
              Kontakt aufnehmen
            </Link>
          </div>
          <div className="mt-4 flex items-center justify-center gap-3 text-sm text-indigo-100/90">
            <HeartPulse size={16} aria-hidden /> Für Haus‑ & Fachärzte, Zahnärzte und Gemeinschaftspraxen.
          </div>
        </div>
      </section>

      <Footer />

      {/* Sticky Bottom-CTA (nur mobil) */}
      <div className="md:hidden fixed bottom-4 inset-x-4 z-40">
        <div className="rounded-full bg-white/10 backdrop-blur border border-white/15 p-2 flex gap-2">
          <Link
            href="/termine"
            className="flex-1 px-4 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 transition-colors font-semibold text-center"
            aria-label="Unten Termin vereinbaren"
          >
            Termin
          </Link>
          <Link
            href="/portal"
            className="flex-1 px-4 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 transition-colors font-semibold text-center"
            aria-label="Unten zum Portal"
          >
            Portal
          </Link>
        </div>
      </div>
    </div>
  );
}
