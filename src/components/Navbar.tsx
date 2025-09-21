"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  // const [isNavHidden, setIsNavHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  // Effetto scroll solo su desktop
  // Effetto scroll solo su desktop (disabilitato: variabile rimossa)

  // Blocca lo scroll del body quando il menu mobile è aperto
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
  }, [isMobileMenuOpen]);

  const links = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50 bg-glass w-full
          translate-y-0
          after:block after:absolute after:bg-[var(--foreground-accent)]
          after:rounded-lg after:h-1 after:w-full after:content-['']
        `}
      >
        <div className="w-full flex items-center justify-between px-4 py-4">
          {/* Titolo */}
          <a href="#home" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-3xl lg:text-4xl font-semibold whitespace-nowrap dark:text-white">
              Davide Volpe
            </span>
          </a>

          {/* Menu Desktop */}
          <div className="hidden md:block text-xl lg:text-xl font-medium">
            <ul className="flex flex-row gap-6">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="block py-2">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hamburger Mobile */}
          <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </nav>

      <div className="h-16" />

      {/* Menu laterale mobile */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 overflow-hidden">
          <div className="fixed top-0 right-0 w-64 h-full bg-glass shadow-lg p-6 flex flex-col">
            <button className="self-end mb-6" onClick={() => setIsMobileMenuOpen(false)}>
              <X className="w-8 h-8" />
            </button>
            <ul className="flex flex-col gap-6 text-lg">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="block" onClick={() => setIsMobileMenuOpen(false)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
