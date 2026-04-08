import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { Navbar } from "../src/components/Navbar";
import { Footer } from "../src/components/Footer";

const galleryImages = [
  {
    src: "/images/band-photo-main.jpg",
    caption: "The Drinkers v živo",
    category: "Koncert",
  },
  {
    src: "/images/album-lepi-in-trezni.jpg",
    caption: "Album 'Lepi in trezni' (1995)",
    category: "Album",
  },
  {
    src: "/images/album-zeja.jpg",
    caption: "Album 'Žeja' (1997)",
    category: "Album",
  },
  {
    src: "/images/album-pivolucija.jpg",
    caption: "Album 'Pivolucija' (1999)",
    category: "Album",
  },
  {
    src: "/images/album-zadnja-vecerja.jpg",
    caption: "Album 'Zadnja večerja' (1999)",
    category: "Album",
  },
  {
    src: "/images/album-de-best-od.jpg",
    caption: "Album 'De best od' (2001)",
    category: "Album",
  },
  {
    src: "/images/album-prohibicija.jpg",
    caption: "Album 'Prohibicija' (2003)",
    category: "Album",
  },
  {
    src: "/images/album-hajdi.jpg",
    caption: "Album 'Hajdi' (2007)",
    category: "Album",
  },
  {
    src: "/images/album-recidiv.jpg",
    caption: "Album 'Recidiv' (2014)",
    category: "Album",
  },
  // Duplicate with different captions for variety
  {
    src: "/images/band-photo-main.jpg",
    caption: "Na odru - Litija 2023",
    category: "Koncert",
  },
  {
    src: "/images/album-recidiv.jpg",
    caption: "Studio snemanje",
    category: "Zaselek",
  },
  {
    src: "/images/album-zeja.jpg",
    caption: "Backstage pred koncertom",
    category: "Zaselek",
  },
];

const Gallery = () => {
  const [filter, setFilter] = React.useState("Vsi");
  const categories = ["Vsi", "Koncert", "Album", "Zaselek"];

  const filtered =
    filter === "Vsi"
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);

  return (
    <>
      <Head>
        <title>Galerija | The Drinkers</title>
        <meta
          name="description"
          content="Poglej fotografije s koncertov, studijskih snemanj in za oder skupine The Drinkers."
        />
        <link rel="canonical" href="https://thedrinkers.si/gallery" />
        <meta property="og:title" content="Galerija | The Drinkers" />
        <meta property="og:image" content="/images/band-photo-main.jpg" />
      </Head>

      <div className="min-h-screen bg-void">
        <Navbar />

        <main id="main-content" className="pt-24">
          {/* Hero */}
          <section className="relative py-20 px-6 bg-gradient-to-b from-void via-charcoal to-void">
            <div className="container-premium text-center">
              <motion.p
                className="text-label text-amber mb-6 tracking-widest"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Fotografije
              </motion.p>
              <motion.h1
                className="text-display text-ivory mb-8"
                style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                GALERIJA
              </motion.h1>
            </div>
          </section>

          {/* Filter */}
          <section className="py-8 px-6 bg-charcoal border-b border-white/5">
            <div className="container-premium flex flex-wrap justify-center gap-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2 text-xs uppercase tracking-widest transition-all ${
                    filter === cat
                      ? "bg-amber text-void font-bold"
                      : "bg-white/5 text-bone/40 hover:text-amber"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </section>

          {/* Gallery Grid */}
          <section className="section-xl bg-void">
            <div className="container-premium">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {filtered.map((img, i) => (
                  <motion.div
                    key={i}
                    className="group relative aspect-square bg-smoke overflow-hidden border border-white/5 cursor-pointer"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.03 }}
                  >
                    <div
                      className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${img.src})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-void/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                      <div>
                        <p className="text-ivory font-bold text-sm">
                          {img.caption}
                        </p>
                        <p className="text-amber/60 text-xs uppercase tracking-wider">
                          {img.category}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {filtered.length === 0 && (
                <div className="text-center py-20 text-bone/40">
                  Ni slik v tej kategoriji.
                </div>
              )}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Gallery;
