import type { Metadata } from "next";
import "./globals.scss";
import { ReactNode } from "react";
import Navbar from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";

// export const metadata: Metadata = {
//   title: "Classic Bakery | Premium & Affordable Bolu",
//   description:
//     "Order premium yet affordable bolu and bakery products from Classic Bakery with a cheerful pastel experience.",
// };

export const metadata: Metadata = {
  title: "Classic Bakery | Premium & Affordable Bolu Cakes",
  description:
    "Classic Bakery – premium yet affordable bolu and bakery products with a cheerful pastel aesthetic. Order online for pickup or delivery.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Classic Bakery",
    description:
      "Order premium & affordable bolu cakes, gift boxes, and bakery treats online.",
    url: "https://classicbakery.com",
    siteName: "Classic Bakery",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="main-wrapper">
          <Navbar />
          <main className="main-content">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}