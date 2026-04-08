import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "DOMOV" },
  { href: "/music", label: "GLASBA" },
  { href: "/tour", label: "KONCERTI" },
  { href: "/about", label: "O NAS" },
  { href: "/gallery", label: "GALERIJA" },
  { href: "/merch", label: "MERCH" },
  { href: "/contact", label: "KONTAKT" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    if (mobileOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* Skip Navigation - Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-amber focus:text-void focus:px-4 focus:py-2 focus:text-xs focus:uppercase focus:tracking-widest focus:font-bold rounded"
      >
        Preskoči na vsebino
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-void/95 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/20"
            : "bg-gradient-to-b from-black/60 to-transparent"
        }`}
      >
        <nav className="container-premium mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-ivory font-bold text-xl tracking-tighter hover:text-amber transition-all duration-300 hover:tracking-wide"
            style={{ fontFamily: "var(--font-display)" }}
          >
            THE DRINKERS
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-bone/60 hover:text-amber text-xs uppercase tracking-widest transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-amber transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-ivory p-2 hover:text-amber transition-colors relative z-50"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Zapri meni" : "Odpri meni"}
            aria-expanded={mobileOpen}
          >
            <motion.div
              animate={{ rotate: mobileOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                {mobileOpen ? (
                  <motion.g
                    initial={false}
                    animate={{ rotate: mobileOpen ? 0 : 0 }}
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </motion.g>
                ) : (
                  <>
                    <motion.line
                      x1="3"
                      y1="6"
                      x2="21"
                      y2="6"
                      animate={
                        mobileOpen
                          ? { opacity: 0, y: -4 }
                          : { opacity: 1, y: 0 }
                      }
                    />
                    <motion.line
                      x1="3"
                      y1="12"
                      x2="21"
                      y2="12"
                      animate={mobileOpen ? { scaleX: 0 } : { scaleX: 1 }}
                    />
                    <motion.line
                      x1="3"
                      y1="18"
                      x2="21"
                      y2="18"
                      animate={
                        mobileOpen ? { opacity: 0, y: 4 } : { opacity: 1, y: 0 }
                      }
                    />
                  </>
                )}
              </svg>
            </motion.div>
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              className="fixed inset-0 md:hidden bg-void/98 backdrop-blur-xl z-40 flex flex-col items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col items-center gap-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="text-ivory hover:text-amber text-2xl uppercase tracking-widest transition-colors py-2 block"
                      onClick={() => setMobileOpen(false)}
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
