import { useState } from "react";
import Image from "next/image"
import { Menu } from "lucide-react"
import { FadeIn } from "./ui/fadeIn";

import MobileMenu from "@/components/ui/mobile-menu";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openMobileMenu = () => setIsMobileMenuOpen(true);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="bg-white py-3 px-4 md:px-8 sticky top-0 z-40 shadow-sm">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center">
              <div className="flex items-center">
              <FadeIn direction="left" delay={0}>
                  <Image 
                    src="/logo.png" 
                    alt="Cresco Logo" 
                    width={200} 
                    height={60}
                    className="mr-2"
                  />
                </FadeIn>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center gap-6">
              <a href="#chi-siamo" className="text-[#084CA1] hover:text-[#084CA1]/80 font-medium">CHI SIAMO</a>
              <a href="#processi" className="text-[#084CA1] hover:text-[#084CA1]/80 font-medium">PROCESSI</a>
              <a href="#filosofia" className="text-[#084CA1] hover:text-[#084CA1]/80 font-medium">FILOSOFIA</a>
              <a href="#servizi" className="text-[#084CA1] hover:text-[#084CA1]/80 font-medium">SERVIZI</a>
              <a href="#clienti" className="text-[#084CA1] hover:text-[#084CA1]/80 font-medium">CLIENTI</a>
              <a href="#contatti" className="text-[#084CA1] hover:text-[#084CA1]/80 font-medium">CONTATTI</a>
            </nav>
            
            <button 
              className="md:hidden p-2" 
              onClick={openMobileMenu}
              aria-label="Apri menu"
            >
              <Menu className="h-6 w-6 text-[#084CA1]" />
            </button>
          </div>

          <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
        </header>
  )
}

export default Navbar
