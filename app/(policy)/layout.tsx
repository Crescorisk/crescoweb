import type { ReactNode } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function PolicyLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <Navbar variant="policy" />
      {children}
      <Footer />
    </>
  );
}
