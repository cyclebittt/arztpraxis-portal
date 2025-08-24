import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = { title: "Anmeldung – Praxisportal" };

export default function Page() {
  return (
    <div className="min-h-dvh flex flex-col">
      <Navbar />
      <main id="main" className="flex-1 mx-auto max-w-md px-4 py-10">
        <h1 className="text-3xl font-bold">Anmeldung</h1>
        <form className="mt-6 space-y-3">
          <div>
            <label className="block text-sm">E‑Mail</label>
            <input className="mt-1 w-full rounded border border-gray-300 px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm">Passwort</label>
            <input type="password" className="mt-1 w-full rounded border border-gray-300 px-3 py-2" />
          </div>
          <button className="mt-2 w-full rounded bg-blue-600 text-white h-11">Anmelden (Demo)</button>
        </form>
      </main>
      <Footer />
    </div>
  );
}

