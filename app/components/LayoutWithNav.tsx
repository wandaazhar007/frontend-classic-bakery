"use client";

import { usePathname } from "next/navigation";
import Navbar from "./navbar/Navbar";
import { Footer } from "./footer/Footer";

export default function LayoutWithNav({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Paths that should NOT show Navbar & Footer
  const hideLayout =
    pathname === "/auth/login" ||
    pathname.startsWith("/auth/") // hides all /auth/* pages

  return (
    <>
      {!hideLayout && <Navbar />}
      <main className="main-content">{children}</main>
      {!hideLayout && <Footer />}
    </>
  );
}