"use client";

import { useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";

type NavLink = {
  label: string;
  href: string;
};

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: NavLink[];
}

export default function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  // Prevenir scroll cuando el menú esté abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Cerrar el menú al hacer clic en un enlace
  const handleLinkClick = () => {
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 lg:hidden">
      <div className="fixed right-0 top-0 h-full w-[80%] max-w-sm bg-white shadow-lg flex flex-col">
        <div className="flex justify-between items-center p-4 border-b">
          <span className="text-[#084CA1] font-bold">MENU</span>
          <button onClick={onClose} className="p-2">
            <X className="h-6 w-6 text-[#084CA1]" />
          </button>
        </div>

        <nav className="flex flex-col p-4 space-y-4">
          {links.map((link) => {
            const isAnchor = link.href.startsWith("#");

            if (isAnchor) {
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[#084CA1] hover:text-[#084CA1]/80 font-medium py-2"
                  onClick={handleLinkClick}
                >
                  {link.label}
                </a>
              );
            }

            return (
              <Link
                key={link.label}
                href={link.href}
                className="text-[#084CA1] hover:text-[#084CA1]/80 font-medium py-2"
                onClick={handleLinkClick}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
