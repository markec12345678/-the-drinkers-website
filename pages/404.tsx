import React from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "../src/components/Navbar";
import { Footer } from "../src/components/Footer";

export default function Custom404() {
  const quickLinks = [
    { href: "/", label: "DOMOV", desc: "Začetna stran" },
    { href: "/music", label: "GLASBA", desc: "8 albumov" },
    { href: "/tour", label: "KONCERTI", desc: "Prihajajoči nastopi" },
    { href: "/merch", label: "MERCH", desc: "Uradna trgovina" },
    { href: "/about", label: "O NAS", desc: "Zgodba benda" },
    { href: "/contact", label: "KONTAKT", desc: "Piši nam" },
  ];

  return (
    <>
      <Head>
        <title>404 | Stran ni najdena - The Drinkers</title>
        <meta
          name="description"
          content="Stran, ki jo iščete, ne obstaja. Vrnite se na domačo stran."
        />
        <link rel="canonical" href="https://thedrinkers.si/404" />
      </Head>

      <div className="min-h-screen bg-void flex flex-col">
        <Navbar />

        <main
          id="main-content"
          className="flex-1 flex items-center justify-center px-6"
        >
          <div className="container-premium text-center max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* 404 Number */}
              <p className="text-label text-amber mb-4 tracking-widest">
                NAPAKA 404
              </p>
              <h1
                className="text-9xl md:text-[12rem] leading-none font-bold text-ivory/10 mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                404
              </h1>

              <h2 className="text-headline text-ivory mb-4 font-bold">
                STRAN NI NAJDENA
              </h2>
              <p className="text-body-lg text-bone/40 max-w-lg mx-auto mb-12">
                Oops! Videti je, da je ta stran odšla na zasluženi dopust. Morda
                ste popili preveč in vtipkali napačen naslov. 🍺
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Link
                  href="/"
                  className="btn-primary inline-flex justify-center rounded"
                >
                  NA DOMAČO STRAN
                </Link>
                <Link
                  href="/contact"
                  className="btn-secondary inline-flex justify-center rounded"
                >
                  KONTAKTIRAJ NAS
                </Link>
              </div>

              {/* Quick Links Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {quickLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="block p-4 bg-charcoal border border-white/5 hover:border-amber/30 rounded-lg transition-all duration-300 group"
                    >
                      <div className="text-amber text-xs uppercase tracking-widest font-bold group-hover:text-amber/80 transition-colors">
                        {link.label}
                      </div>
                      <div className="text-bone/30 text-xs mt-1">
                        {link.desc}
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
