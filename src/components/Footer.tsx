import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="py-20 px-6 bg-charcoal border-t border-white/5 relative z-10">
      <div className="container-premium">
        {/* Newsletter Section */}
        <div className="max-w-2xl mx-auto text-center mb-16 pb-16 border-b border-white/5">
          <h3 className="text-headline text-ivory mb-3 font-bold">
            OSTANI V KONTAKTU
          </h3>
          <p className="text-bone/40 mb-6">
            Prijavi se na novice in bodi prvi obveščen o novih koncertih,
            albumih in merchu.
          </p>

          {subscribed ? (
            <motion.div
              className="text-green-400 font-medium py-3 px-6 bg-green-400/10 rounded inline-block"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              🍻 Hvala! Preverite vaš email.
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="vas@email.com"
                required
                className="flex-1 px-4 py-3 bg-smoke border border-white/10 text-ivory placeholder-bone/30 focus:border-amber focus:outline-none rounded text-sm"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-amber text-void font-bold text-xs uppercase tracking-widest hover:bg-amber/90 transition-colors rounded whitespace-nowrap"
              >
                PRIJAVA
              </button>
            </form>
          )}
        </div>

        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12">
          <div>
            <h3
              className="text-headline text-ivory text-3xl mb-2"
              style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
            >
              THE DRINKERS
            </h3>
            <p className="text-label text-bone/40">
              Litija, Slovenija — Od 1993
            </p>
            <p className="text-label text-amber/60 mt-1 uppercase tracking-widest text-xs">
              Drink'n'Roll
            </p>
          </div>

          <div className="flex flex-col md:items-end gap-6 text-label text-bone/40">
            <div className="flex gap-8">
              <Link
                href="/music"
                className="hover:text-amber transition-colors"
              >
                DISKOGRAFIJA
              </Link>
              <Link href="/tour" className="hover:text-amber transition-colors">
                KONCERTI
              </Link>
              <Link
                href="/gallery"
                className="hover:text-amber transition-colors"
              >
                GALERIJA
              </Link>
            </div>
            <div className="flex gap-8">
              <Link
                href="/about"
                className="hover:text-amber transition-colors"
              >
                O NAS
              </Link>
              <Link
                href="/contact"
                className="hover:text-amber transition-colors"
              >
                KONTAKT
              </Link>
              <Link href="/blog" className="hover:text-amber transition-colors">
                BLOG
              </Link>
            </div>
            <div className="flex gap-8">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ivory transition-colors"
              >
                FB
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ivory transition-colors"
              >
                IG
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ivory transition-colors"
              >
                YT
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 text-center text-label text-bone/20 text-xs">
          <p>
            © 1993-{new Date().getFullYear()} The Drinkers. Vse pravice
            pridržane.
          </p>
          <p className="mt-2 font-mono">DRINK'N'ROLL LEGACY — LITIJA</p>
        </div>
      </div>
    </footer>
  );
};
