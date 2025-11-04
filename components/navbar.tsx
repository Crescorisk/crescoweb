'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import MobileMenu from "@/components/ui/mobile-menu";
import TopBar from "@/components/top-bar";

type NavLink = {
  label: string;
  href: string;
};

const DEFAULT_LINKS: NavLink[] = [
  { label: "HOME", href: "#home" },
  { label: "CHI SIAMO", href: "#chi-siamo" },
  { label: "PROCESSI", href: "#processi" },
  { label: "FILOSOFIA", href: "#filosofia" },
  { label: "SERVIZI", href: "#servizi" },
  { label: "CLIENTI", href: "#clienti" },
  { label: "CONTATTI", href: "#contatti" },
];

const POLICY_LINKS: NavLink[] = [{ label: "HOME", href: "/" }];

type NavbarProps = {
  variant?: "default" | "policy";
};

const Navbar = ({ variant = "default" }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isPolicy = variant === "policy";
  const navLinks = isPolicy ? POLICY_LINKS : DEFAULT_LINKS;

  const openMobileMenu = () => setIsMobileMenuOpen(true);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const renderLink = (link: NavLink) => {
    const isAnchor = link.href.startsWith("#");

    if (isAnchor) {
      return (
        <a
          key={link.label}
          href={link.href}
          className="text-[#084CA1] hover:text-[#084CA1]/80 font-medium"
        >
          {link.label}
        </a>
      );
    }

    return (
      <Link
        key={link.label}
        href={link.href}
        className="text-[#084CA1] hover:text-[#084CA1]/80 font-medium"
      >
        {link.label}
      </Link>
    );
  };

  return (
    <>
      {!isPolicy && <TopBar />}
      <header className="bg-white py-3 px-4 md:px-8 sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="inline-flex">
            <Image
              src="/logo.png"
              alt="Cresco Logo"
              width={160}
              height={50}
              className="h-auto w-[140px] md:w-[160px]"
              priority
            />
          </Link>

          {isPolicy ? (
            <Link href="/" className="text-[#084CA1] hover:text-[#084CA1]/80 font-medium">
              HOME
            </Link>
          ) : (
            <>
              <nav className="hidden lg:flex items-center gap-6">
                {navLinks.map((link) => renderLink(link))}
              </nav>
              <button className="lg:hidden p-2" onClick={openMobileMenu} aria-label="Apri menu">
                <Menu className="h-6 w-6 text-[#084CA1]" />
              </button>
            </>
          )}
        </div>
      </header>

      {!isPolicy && (
        <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} links={navLinks} />
      )}
    </>
  );
};

export default Navbar;
