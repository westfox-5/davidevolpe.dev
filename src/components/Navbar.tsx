"use client";

import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";


const getSystemTheme = () => {
  if (typeof window === "undefined") return "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || getSystemTheme();
    }
    return "dark";
  });

  // Blocca lo scroll del body quando il menu mobile è aperto
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
  }, [isMobileMenuOpen]);

  // Applica la classe theme e aggiorna le variabili CSS su html e body
  useEffect(() => {
    if (typeof window !== "undefined") {
      const root = window.document.documentElement;
      const body = window.document.body;
      if (theme === "dark") {
        root.classList.add("dark");
        root.classList.remove("light");
        body.classList.add("dark");
        body.classList.remove("light");
        root.style.setProperty('--background', '#181818');
        root.style.setProperty('--background-light', '#02435a');
        root.style.setProperty('--foreground', '#efefef');
        root.style.setProperty('--foreground-accent', '#0096cc');
      } else {
        root.classList.add("light");
        root.classList.remove("dark");
        body.classList.add("light");
        body.classList.remove("dark");
        root.style.setProperty('--background', '#f7fafc');
        root.style.setProperty('--background-light', '#e2e8f0');
        root.style.setProperty('--foreground', '#181818');
        root.style.setProperty('--foreground-accent', '#0096cc');
      }
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const links = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" }
  ];

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

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
            <span
              className="self-center text-3xl lg:text-4xl font-semibold whitespace-nowrap"
              style={{ color: 'var(--foreground)' }}
            >
              Davide Volpe
            </span>
          </a>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center gap-4 text-xl lg:text-xl font-medium">
            <ul className="flex flex-row gap-6">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="block py-2">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            {/* Switch Light/Dark */}
            <button
              aria-label="Switch theme"
              className="ml-4 p-2 rounded-full border border-[var(--foreground-accent)] hover:bg-[var(--background-light)] transition-colors"
              onClick={toggleTheme}
            >
              {theme === "dark" ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
            </button>
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
        <div className={`fixed inset-0 z-50 bg-black/50 overflow-hidden flex justify-end transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
    <div className={`w-64 h-full bg-glass shadow-lg p-6 flex flex-col relative transform transition-transform duration-[900ms] ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            {/* Riga bottoni: switch tema a sinistra, X a destra */}
            <div className="flex flex-row items-center justify-between w-full mb-8">
              <button
                aria-label="Switch theme"
                className="p-2 rounded-full border border-[var(--foreground-accent)] hover:bg-[var(--background-light)] transition-colors"
                onClick={toggleTheme}
              >
                {theme === "dark" ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
              </button>
              <button className="p-2" onClick={() => setIsMobileMenuOpen(false)}>
                <X className="w-8 h-8" />
              </button>
            </div>
            <ul className="flex flex-col gap-6 text-lg mt-8">
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
