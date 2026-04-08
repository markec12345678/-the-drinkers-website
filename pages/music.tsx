import React from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "../src/components/Navbar";
import { Footer } from "../src/components/Footer";

const albums = [
  { year: "1995", title: "Lepi in trezni", image: "/images/album-lepi-in-trezni.jpg", tracks: 12 },
  { year: "1997", title: "Žeja", image: "/images/album-zeja.jpg", tracks: 10 },
  { year: "1999", title: "Pivolucija", image: "/images/album-pivolucija.jpg", tracks: 14 },
  { year: "1999", title: "Zadnja večerja", image: "/images/album-zadnja-vecerja.jpg", tracks: 11 },
  { year: "2001", title: "De best od", image: "/images/album-de-best-od.jpg", tracks: 16 },
  { year: "2003", title: "Prohibicija", image: "/images/album-prohibicija.jpg", tracks: 13 },
  { year: "2007", title: "Hajdi", image: "/images/album-hajdi.jpg", tracks: 12 },
  { year: "2014", title: "Recidiv", image: "/images/album-recidiv.jpg", tracks: 15 },
];

const Music = () => {
  return (
    <>
      <Head>
        <title>Glasba | The Drinkers</title>
        <meta name="description" content="Poslušaj vse albume skupine The Drinkers." />
        <link rel="canonical" href="https://thedrinkers.si/music" />
        <meta property="og:title" content="Glasba | The Drinkers" />
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
                Diskografija
              </motion.p>
              <motion.h1
                className="text-display text-ivory mb-8"
                style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                GLASBA
              </motion.h1>
              <motion.p
                className="text-body-lg text-bone/50 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Od leta 1995 do danes - 8 albumov, 103 skladb in nešteto nepozabnih trenutkov.
              </motion.p>
            </div>
          </section>

          {/* Albums Grid */}
          <section className="section-xl bg-void">
            <div className="container-premium">
              <h2 className="text-headline text-center text-ivory mb-16 font-bold">
                DISKOGRAFIJA
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {albums.map((album, i) => (
                  <motion.div
                    key={i}
                    className="group cursor-pointer"
                    whileHover={{ y: -8 }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <div className="aspect-square bg-smoke mb-6 overflow-hidden relative border border-white/5 group-hover:border-amber/50 transition-all duration-500 shadow-lg group-hover:shadow-amber/20">
                      <div
                        className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url(${album.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-void/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-amber text-xs uppercase tracking-widest">{album.tracks} skladb</span>
                      </div>
                    </div>
                    <p className="text-label text-amber/60 mb-1 font-mono">{album.year}</p>
                    <h3 className="text-xl text-ivory font-bold group-hover:text-amber transition-colors duration-300">
                      {album.title}
                    </h3>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Streaming CTA */}
          <section className="section-lg bg-charcoal">
            <div className="container-premium text-center">
              <h2 className="text-headline text-ivory mb-6 font-bold">
                POSLUŠAJ ZDAJ
              </h2>
              <p className="text-bone/50 mb-12 max-w-lg mx-auto">
                The Drinkers so na vseh večjih glasbenih platformah.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                {["Spotify", "Apple Music", "YouTube Music", "Deezer"].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="px-8 py-4 bg-white/5 border border-white/10 text-ivory hover:border-amber hover:text-amber transition-all duration-300 text-sm uppercase tracking-widest"
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Music;
