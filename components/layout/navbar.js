'use client';

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-gray-200">
      <nav className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold">
          Praxis Dr. Muster
        </Link>
        <div className="flex items-center gap-3">
          <Link
            href="/portal/login"
            className="px-3 py-1.5 rounded border border-gray-300 hover:bg-gray-50"
          >
            Anmeldung
          </Link>
          <Link
            href="/termine"
            className="px-3 py-1.5 rounded bg-blue-600 text-white hover:bg-blue-700"
          >
            Termin buchen
          </Link>
        </div>
      </nav>
    </header>
  );
}

