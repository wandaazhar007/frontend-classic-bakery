import type { Metadata } from "next";
import "./styles/_globals.scss";
import { ReactNode } from "react";
// import LayoutWithNav from "./components/LayoutWithNav";
import LayoutWithNav from "./components/LayoutWithNav";

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
          <LayoutWithNav>{children}</LayoutWithNav>
        </div>
      </body>
    </html>
  );
}