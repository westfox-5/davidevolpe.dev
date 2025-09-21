"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isNavHidden, setIsNavHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // Rilevo se sono su desktop o mobile
  useEffect(() => {
    const checkScreen = () => setIsDesktop(window.innerWidth >= 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Effetto scroll solo su desktop
  useEffect(() => {
    if (!isDesktop) return;

    const onScroll = () => {
      const currentY = window.scrollY;
      const threshold = 80;
      const delta = 5;

      if (currentY <= threshold) {
        setIsNavHidden(false);
      } else if (currentY > lastScrollY + delta) {
        setIsNavHidden(true);
      } else if (currentY < lastScrollY - delta) {
        setIsNavHidden(false);
      }

      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY, isDesktop]);

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
          fixed top-0 left-0 right-0 z-50 bg-glass w-full max-w-full
          ${isDesktop ? "transition-transform duration-300 will-change-transform" : ""}
          ${isDesktop && isNavHidden ? "-translate-y-full" : "translate-y-0"}
          after:block after:absolute after:bg-[var(--foreground-accent)]
          after:rounded-lg after:h-1 after:w-full after:content-[' ']
        `}
      >
        <div className="w-full flex items-center justify-between p-4">
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
