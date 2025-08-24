'use client';

import Link from 'next/link';

export default function LegalIndexPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="text-3xl font-bold">Rechtliches</h1>
        <p className="mt-3 text-gray-700">
          Hier finden Sie die gesetzlichen Pflichtinformationen Ihrer Praxis‑Website.
        </p>

        <nav className="mt-8 space-y-3">
          <Link href="/rechtliches/impressum" className="block rounded-md border p-4 hover:bg-gray-50">
            <span className="font-semibold">Impressum</span>
            <span className="block text-sm text-gray-600">Anbieterkennzeichnung nach § 5 TMG</span>
          </Link>
          <Link href="/rechtliches/datenschutz" className="block rounded-md border p-4 hover:bg-gray-50">
            <span className="font-semibold">Datenschutzerklärung</span>
            <span className="block text-sm text-gray-600">Informationen gemäß DSGVO</span>
          </Link>
          <Link href="/rechtliches/barrierefreiheit" className="block rounded-md border p-4 hover:bg-gray-50">
            <span className="font-semibold">Erklärung zur Barrierefreiheit</span>
            <span className="block text-sm text-gray-600">Konformität & Feedback‑Möglichkeiten</span>
          </Link>
        </nav>
      </div>
    </main>
  );
}
