import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-6 md:grid-cols-4 text-sm">
        <div>
          <div className="font-semibold mb-2">Praxis Dr. Muster</div>
          <p>Beispielstraße 1, 00000 Musterstadt</p>
          <p className="mt-1"><a href="tel:+4900000000" className="underline">+49 000 000000</a></p>
        </div>
        <div>
          <div className="font-semibold mb-2">Öffnungszeiten</div>
          <p>Mo–Fr 08:00–12:00</p>
          <p>Mo, Mi 14:00–18:00</p>
        </div>
        <div>
          <div className="font-semibold mb-2">Service</div>
          <ul className="space-y-1">
            <li><Link href="/termine" className="underline">Termin buchen</Link></li>
            <li><Link href="/formulare" className="underline">Formulare hochladen</Link></li>
            <li><Link href="/video" className="underline">Videosprechstunde</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Rechtliches</div>
          <ul className="space-y-1">
            <li><Link href="/rechtliches/impressum" className="underline">Impressum</Link></li>
            <li><Link href="/rechtliches/datenschutz" className="underline">Datenschutz</Link></li>
            <li><Link href="/rechtliches/barrierefreiheit" className="underline">Barrierefreiheit</Link></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 pb-6">
        Hinweis: Demo‑Showcase. Bis zu 90 % förderfähig (BayDiGuP).
      </div>
    </footer>
  );
}

