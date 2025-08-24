'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  ArrowRight,
  Sparkles,
  CalendarDays,
  ShieldCheck,
  Activity,
  Brain,
  Settings2,
  Link as LinkIcon,
  BarChart3,
  FileText,
  CheckCircle2,
  Quote,
  Accessibility,
  Gauge,
  Handshake,
} from 'lucide-react';

/* ---------------- CountUp (leicht, ohne Lib) ---------------- */
function useCountUp(target = 0, duration = 1500, start = 0, inView = true) {
  const [val, setVal] = useState(start);
  const startRef = useRef(null);

  useEffect(() => {
    if (!inView) return;
    let rafId;
    const step = (ts) => {
      if (startRef.current == null) startRef.current = ts;
      const p = Math.min(1, (ts - startRef.current) / duration);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      setVal(Math.round(start + (target - start) * eased));
      if (p < 1) rafId = requestAnimationFrame(step);
    };
    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [target, duration, start, inView]);

  return val;
}

function Stat({ label, value, suffix = '' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.35 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  const n = useCountUp(value, 1400, 0, visible);
  return (
    <div
      ref={ref}
      className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center transition-transform will-change-transform hover:-translate-y-0.5"
    >
      <div className="text-4xl md:text-5xl font-extrabold tracking-tight text-indigo-300">
        {n.toLocaleString('de-DE')}
        {suffix}
      </div>
      <div className="mt-2 text-neutral-300">{label}</div>
    </div>
  );
}

/* ---------------- Seite ---------------- */
export default function Home() {
  const [fadeDir, setFadeDir] = useState('fade-right');

  useEffect(() => {
    AOS.init({ duration: 650, once: true, offset: 40 });
    const handleResize = () => setFadeDir(window.innerWidth < 768 ? 'fade-up' : 'fade-right');
    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const modules = [
    {
      icon: <FileText size={22} className="text-violet-300" />,
      title: 'Digitale Praxisportale',
      desc: 'Barrierearme, DSGVO‑konforme Websites mit Patientenportal, Formular‑Uploads & Videosprechstunden.',
      href: '/services/portal',
    },
    {
      icon: <CalendarDays size={22} className="text-violet-300" />,
      title: 'Digitale Terminvereinbarung',
      desc: 'Automatisierte Buchung, Erinnerungen, Auslastungsanalysen & Anbindung an Praxis‑Systeme.',
      href: '/services/termine',
    },
    {
      icon: <Brain size={22} className="text-violet-300" />,
      title: 'KI‑gestützte Optimierung',
      desc: 'Prognosen zu Auslastung & Patientenströmen – weniger No‑Shows, effizientere Planung.',
      href: '/services/ki',
    },
    {
      icon: <LinkIcon size={22} className="text-violet-300" />,
      title: 'TI‑Integration',
      desc: 'eAU, eRezept, KIM‑Mail, ePA – Roadmap & Umsetzung in klaren Schritten.',
      href: '/services/ti',
    },
    {
      icon: <BarChart3 size={22} className="text-violet-300" />,
      title: 'Analytics & Reporting',
      desc: 'Kennzahlen in Echtzeit: Terminauslastung, Feedback & Performance‑KPIs.',
      href: '/services/analytics',
    },
    {
      icon: <Settings2 size={22} className="text-violet-300" />,
      title: 'Managed Digital Service',
      desc: 'Updates, Sicherheit, Monitoring & Schulungen – laufende Betreuung.',
      href: '/services/managed',
    },
  ];

  return (
    <div className="font-proxima bg-[#0B0B0F] text-white">
      <Navbar />

      {/* ---------------- HERO (dezent, hochwertig) ---------------- */}
      <section className="relative overflow-hidden">
        {/* Hintergrund: weiche Gradients + animierte Grid‑Lines */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_-10%_-10%,rgba(129,51,241,.35),transparent_60%),radial-gradient(900px_600px_at_120%_0%,rgba(56,189,248,.20),transparent_55%),linear-gradient(120deg,#0B0B0F_0%,#0E0E15_60%,#0B0B0F_100%)]" />
          <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]">
            <div className="absolute -inset-1 bg-[linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:44px_44px] animate-[pulse_7s_ease-in-out_infinite]" />
          </div>
          <div className="absolute -top-24 -left-24 h-[28rem] w-[48rem] rounded-full bg-violet-600/20 blur-[120px]" />
          <div className="absolute top-1/3 -right-24 h-[26rem] w-[44rem] rounded-full bg-blue-500/20 blur-[120px]" />
        </div>

        <div className="relative px-5 md:px-16 pt-20 md:pt-28 pb-18 md:pb-24 text-center max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-2 text-sm text-indigo-300/90 bg-white/5 ring-1 ring-white/10 px-3 py-1 rounded-full">
            <Sparkles size={16} /> Spezialagentur für digitale Praxis‑Lösungen
          </span>

          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Die Zukunft{' '}
            <span className="bg-clip-text text-transparent bg-[linear-gradient(90deg,#c4b5fd,45%,#93c5fd,85%)] [background-size:200%_100%] animate-[pulse_6s_linear_infinite]">
              Ihrer Praxis
            </span>{' '}
            beginnt digital.
          </h1>

          <p className="mt-6 text-lg md:text-xl text-neutral-300">
            Für Haus‑ & Fachärzte, Zahnärzte und Gemeinschaftspraxen: Portale, Termin‑Automatisierung,
            KI‑Optimierung, TI‑Anbindung & Analytics – modular und verständlich für jedes Team.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link
              href="/request"
              className="px-6 py-3 rounded-full bg-violet-600 hover:bg-violet-500 transition-colors font-semibold inline-flex items-center justify-center gap-2"
            >
              Projekt starten <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full border border-white/15 hover:border-white/30 bg-white/5 transition-colors font-semibold inline-flex items-center justify-center"
            >
              Erstes Sparring
            </Link>
          </div>

          {/* kleine Nutzenleiste unter den Buttons */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-indigo-200/90">
            <div className="inline-flex items-center gap-2 bg-white/5 ring-1 ring-white/10 rounded-full px-3 py-1">
              <ShieldCheck size={16} className="text-emerald-400" />
              Bis zu <strong className="mx-1">90 % Förderung</strong> über BayDiGuP
            </div>
            <div className="inline-flex items-center gap-2 bg-white/5 ring-1 ring-white/10 rounded-full px-3 py-1">
              <Accessibility size={16} />
              Barrierearm & gut lesbar
            </div>
            <div className="inline-flex items-center gap-2 bg-white/5 ring-1 ring-white/10 rounded-full px-3 py-1">
              <Gauge size={16} />
              Schnell & stabil
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- TRUST BAR (besser sichtbar) ---------------- */}
      <section className="px-5 md:px-16 -mt-4 mb-8">
        <div className="rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-sm p-4 md:p-5">
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5">
            {['DSGVO‑konform', 'Barrierearm', 'TI‑ready', 'Analytics‑getrieben', 'BayDiGuP‑förderfähig'].map((t, i) => (
              <span
                key={t}
                data-aos="fade-up"
                data-aos-delay={i * 80}
                className="text-sm md:text-base text-neutral-100 px-3 py-1.5 rounded-full bg-black/10 ring-1 ring-white/10"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- KPIs ---------------- */}
      <section className="px-5 md:px-16 py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <Stat label="aktive Praxis‑Kunden" value={32} />
          <Stat label="Ø No‑Show‑Reduktion" value={24} suffix="%" />
          <Stat label="Zeitersparnis im Team" value={7} suffix="h/Woche" />
          <Stat label="Zufriedenheit" value={97} suffix="%" />
        </div>
      </section>

      {/* ---------------- MODULE (Cards mit Hover) ---------------- */}
      <section className="px-5 md:px-16 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Kern‑Services & Nutzen</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {modules.map(({ icon, title, desc, href }, i) => (
            <div
              key={title}
              data-aos={fadeDir}
              data-aos-delay={i * 70}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-transform hover:-translate-y-0.5"
            >
              {/* Glanzeffekt */}
              <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-violet-500/20 blur-3xl" />
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">{icon}</div>
                <h3 className="text-lg md:text-xl font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-neutral-300">{desc}</p>
              <div className="mt-4">
                <Link href={href} className="inline-flex items-center gap-2 text-indigo-300 hover:text-indigo-200">
                  Details ansehen <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Drei einfache Mehrwert-Kacheln */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <ShieldCheck className="text-emerald-400" size={18} />,
              title: 'Förderfähig',
              desc: 'Je nach Umfang bis zu 90 % Förderung über BayDiGuP.',
            },
            {
              icon: <Activity className="text-sky-300" size={18} />,
              title: 'Messbarer Impact',
              desc: 'Weniger No‑Shows, bessere Auslastung, klare Kennzahlen.',
            },
            {
              icon: <Settings2 className="text-violet-300" size={18} />,
              title: 'Skalierbar',
              desc: 'Module nach Bedarf – ohne Brüche im System.',
            },
          ].map((b, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm text-indigo-200">
                {b.icon}
                <span>{b.title}</span>
              </div>
              <p className="mt-3 text-neutral-300">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- „So einfach geht’s“ (3 Schritte) ---------------- */}
      <section className="px-5 md:px-16 py-10 md:py-14">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-6 md:p-10">
          <div className="flex items-center gap-2 text-sm text-indigo-200">
            <Handshake size={18} />
            <span>In drei Schritten startklar</span>
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                step: '01',
                title: 'Kickoff & Analyse',
                text: 'Ziele, Status, Team. Wir klären Förderfähigkeit & priorisieren Module.',
              },
              {
                step: '02',
                title: 'Umsetzung',
                text: 'Portal & Termine live – barrierearm, DSGVO‑konform, TI‑ready.',
              },
              {
                step: '03',
                title: 'Betrieb & Reporting',
                text: 'Monitoring, Schulung, Berichte. Kontinuierliche Optimierung.',
              },
            ].map((s, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <div className="text-sm text-indigo-300 font-semibold">{s.step}</div>
                <h3 className="mt-2 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-neutral-300">{s.text}</p>
              </div>
            ))}
          </div>

          {/* Barrierefrei-Hinweis klar sichtbar */}
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-[#AEB5C8]">
            <div className="inline-flex items-center gap-2">
              <Accessibility size={18} className="text-indigo-300" />
              <span>Große Schrift, klare Kontraste, gute Tastatur‑Fokus‑Ringe</span>
            </div>
            <div className="inline-flex items-center gap-2">
              <Gauge size={18} className="text-sky-300" />
              <span>Performant – auch auf älteren Geräten</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- TESTIMONIALS (text-only, hochwertig) ---------------- */}
      <section className="px-5 md:px-16 pb-8 md:pb-14">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02] p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8">Erfahrungen aus der Praxis</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  'Termin‑Automatisierung + Erinnerungen senkten unsere No‑Shows deutlich. Das Team hat jetzt messbar mehr Zeit.',
                name: 'Hausarztpraxis (Bayern)',
              },
              {
                quote:
                  'Das neue Portal mit Formular‑Uploads beschleunigt Abläufe. Patient:innen finden schneller, was sie brauchen.',
                name: 'Facharztzentrum (NRW)',
              },
              {
                quote: 'Wir sind förderfähig vorgegangen – der Prozess war klar, und das Ergebnis nachhaltig.',
                name: 'Zahnarztpraxis (Süddeutschland)',
              },
            ].map((t, i) => (
              <figure
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 120}
                className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <Quote className="absolute -top-4 -left-4 w-8 h-8 text-white/10" />
                <blockquote className="text-neutral-200">{t.quote}</blockquote>
                <figcaption className="mt-4 text-sm text-neutral-400">
                  <span className="text-white font-medium">{t.name}</span>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-6 flex items-start gap-2 text-sm text-[#AEB5C8]">
            <CheckCircle2 className="shrink-0 text-emerald-400" size={18} />
            <p>Zitate anonymisiert und sinngemäß zusammengefasst.</p>
          </div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="px-5 md:px-16 py-16 md:py-20 text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-10">
          <h2 className="text-3xl md:text-4xl font-bold">Bereit, Ihre Praxis digital zu stärken?</h2>
          <p className="mt-4 text-neutral-300 max-w-2xl mx-auto">
            Kurzer Call – klare nächsten Schritte, modulare Planung, optional förderfähig. Wir zeigen pragmatisch, was wirklich wirkt.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link
              href="/request"
              className="px-6 py-3 rounded-full bg-violet-600 hover:bg-violet-500 transition-colors font-semibold inline-flex items-center gap-2"
            >
              Termin vereinbaren <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full border border-white/15 hover:border-white/30 bg-white/5 transition-colors font-semibold"
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
