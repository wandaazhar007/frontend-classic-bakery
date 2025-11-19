// app/layout.tsx
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.scss";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import { RootProviders } from "./context/RootProviders";
// import Navbar from "/components/navbar/Navbar";
// import Footer from "/components/footer/Footer";
// import Navbar from "/components/navbar/Navbar";
// import Footer from "/components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Classic Bakery | Bahan premium yang tulus dari hati",
  description:
    "Classic Bakery menghadirkan bolu jadul, bolu kukus, dan premium gift cake dengan bahan premium, rasa rumahan, dan harga terjangkau.",
  metadataBase: new URL("https://classicbakery.com"),
  openGraph: {
    title: "Classic Bakery | Bahan premium yang tulus dari hati",
    description:
      "Bolu jadul, bolu kukus, dan premium gift cake dengan bahan premium dan rasa hangat rumahan.",
    url: "https://classicbakery.com",
    siteName: "Classic Bakery",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="id">
      <body className={poppins.className}>
        <RootProviders>
          <div className="page-wrapper">
            {/* Global Navbar */}
            <Navbar />

            {/* Main content */}
            <main className="page-main">
              <div className="main-container">{children}</div>
            </main>

            {/* Global Footer */}
            <footer className="page-footer">
              <Footer />
            </footer>
          </div>
        </RootProviders>
      </body>
    </html>
  );
}