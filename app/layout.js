export const metadata = {
  title: "Praxisportal – Showcase",
  description: "Online-Termine, Formulare, Videosprechstunde – Demo"
};

import "../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-white border border-gray-300 px-3 py-2 rounded"
        >
          Zum Inhalt springen
        </a>
        {children}
      </body>
    </html>
  );
}
