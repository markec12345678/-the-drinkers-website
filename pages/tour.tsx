import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { Navbar } from "../src/components/Navbar";
import { TourDates } from "../src/components/TourDates";
import { CountdownTimer } from "../src/components/CountdownTimer";
import { Footer } from "../src/components/Footer";

const Tour = () => {
  const pastShows = [
    {
      date: "12. APR 2025",
      city: "MARIBOR",
      venue: "Club Galeb",
      attendance: "350",
    },
    {
      date: "28. MAR 2025",
      city: "KRANJ",
      venue: "Krekov dom",
      attendance: "280",
    },
    {
      date: "15. FEB 2025",
      city: "KOPER",
      venue: "Galerija Alga",
      attendance: "200",
    },
    {
      date: "20. JAN 2025",
      city: "NOVA GORICA",
      venue: "Park Casino",
      attendance: "420",
    },
    {
      date: "31. DEC 2024",
      city: "LITIJA",
      venue: "Novo Leto Koncert",
      attendance: "800",
    },
    {
      date: "15. DEC 2024",
      city: "VELENJE",
      venue: "Črni Galeb",
      attendance: "310",
    },
  ];

  return (
    <>
      <Head>
        <title>Koncerti | The Drinkers</title>
        <meta
          name="description"
          content="Preveri vse prihajajoče koncerte skupine The Drinkers in si zagotovi vstopnice."
        />
        <link rel="canonical" href="https://thedrinkers.si/tour" />
        <meta property="og:title" content="Koncerti | The Drinkers" />
        <meta property="og:image" content="/images/band-photo-main.jpg" />
      </Head>

      <div className="min-h-screen bg-void">
        <Navbar />

        <main id="main-content" className="pt-24">
          {/* Hero */}
          <section className="relative py-20 px-6 bg-gradient-to-b from-void via-charcoal to-void overflow-hidden">
            <div className="container-premium text-center">
              <motion.p
                className="text-label text-amber mb-6 tracking-widest"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                V živo
              </motion.p>
              <motion.h1
                className="text-display text-ivory mb-8"
                style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                KONCERTI
              </motion.h1>
              <motion.p
                className="text-body-lg text-bone/50 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                1000+ odrov, 30 let nepozabne energije. The Drinkers v živo so
                izkušnja za vsa čutila.
              </motion.p>
            </div>
          </section>

          {/* Countdown Timer */}
          <section className="py-8 px-6 bg-charcoal border-y border-white/5">
            <CountdownTimer
              targetDate={new Date("2025-05-15T20:00:00")}
              label="Naslednji koncert čez"
            />
          </section>

          {/* Upcoming Tours */}
          <TourDates />

          {/* Past Shows */}
          <section className="section-xl bg-charcoal">
            <div className="container-premium">
              <h2 className="text-headline text-center text-ivory mb-6 font-bold">
                PRETEKLI KONCERTI
              </h2>
              <p className="text-bone/40 text-center mb-12 max-w-lg mx-auto">
                Vsak koncert je zgodba zase. Tukaj je nekaj naših najnovejših
                nastopov.
              </p>

              <div className="max-w-4xl mx-auto">
                {pastShows.map((show, i) => (
                  <motion.div
                    key={i}
                    className="flex flex-col md:flex-row items-center justify-between py-6 border-b border-white/5 text-center md:text-left"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <div className="flex flex-col md:flex-row items-center gap-6">
                      <div className="text-amber font-mono text-sm">
                        {show.date}
                      </div>
                      <div>
                        <div className="text-ivory font-bold">{show.city}</div>
                        <div className="text-bone/40 text-sm">{show.venue}</div>
                      </div>
                    </div>
                    <div className="text-bone/30 text-xs mt-2 md:mt-0">
                      {show.attendance} obiskovalcev
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Booking CTA */}
          <section className="section-lg bg-void">
            <div className="container-premium text-center">
              <h2 className="text-headline text-ivory mb-6 font-bold">
                REZERVIRAJ KONCERT
              </h2>
              <p className="text-bone/50 mb-8 max-w-lg mx-auto">
                Želite The Drinkers na vašem dogodku? Pišite nam za rezervacijo.
              </p>
              <a
                href="mailto:booking@thedrinkers.net"
                className="btn-primary inline-flex"
              >
                KONTAKTIRAJ NAS
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Tour;
