import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { Navbar } from "../src/components/Navbar";
import { Footer } from "../src/components/Footer";

const pressKit = [
  { name: "Band Photo (Hi-Res)", size: "12.4 MB", type: "JPG" },
  { name: "Logo The Drinkers", size: "2.1 MB", type: "SVG" },
  { name: "Album Covers Collection", size: "45.8 MB", type: "ZIP" },
  { name: "Press Release 2025", size: "340 KB", type: "PDF" },
  { name: "Band Biography", size: "125 KB", type: "PDF" },
  { name: "Technical Rider", size: "890 KB", type: "PDF" },
];

const quotes = [
  {
    text: "The Drinkers so živi dokaz, da rock and roll v Sloveniji ni mrtev.",
    source: "Rock On.si",
  },
  { text: "Nepozabna energija, ki te dvigne s stola.", source: "Delo" },
  { text: "30 let in še vedno pijani od odre.", source: "Mladina" },
];

const stats = [
  { value: "30+", label: "Let na sceni" },
  { value: "8", label: "Albumov" },
  { value: "1000+", label: "Koncertov" },
  { value: "50+", label: "Medijskih objav" },
];

const Press = () => {
  return (
    <>
      <Head>
        <title>Press Kit | The Drinkers</title>
        <meta
          name="description"
          content="Press kit, fotografije in materiali za medije - The Drinkers."
        />
        <link rel="canonical" href="https://thedrinkers.si/press" />
        <meta property="og:title" content="Press Kit | The Drinkers" />
        <meta property="og:image" content="/images/band-photo-main.jpg" />
        <link rel="icon" href="/favicon.ico" />
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
                Za medije
              </motion.p>
              <motion.h1
                className="text-display text-ivory mb-8"
                style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                Press Kit
              </motion.h1>
              <motion.p
                className="text-body-lg text-bone/50 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Vsi materiali na enem mestu za novinarje, organizatorje in fane.
              </motion.p>
            </div>
          </section>

          {/* Stats */}
          <section className="py-12 px-6 bg-charcoal border-y border-white/5">
            <div className="container-premium">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="text-display text-amber text-4xl font-bold">
                      {stat.value}
                    </div>
                    <div className="text-label text-bone/40 mt-2">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Press Kit Downloads */}
          <section className="section-xl bg-void">
            <div className="container-premium">
              <h2 className="text-headline text-ivory mb-12 font-bold text-center">
                PRENESI MATERIAL
              </h2>

              <div className="max-w-3xl mx-auto">
                {pressKit.map((file, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center justify-between py-5 border-b border-white/10 hover:bg-white/5 transition-all duration-300 px-4 cursor-pointer group rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 flex items-center justify-center bg-amber/20 text-amber text-xs font-bold rounded-lg">
                        {file.type}
                      </div>
                      <div>
                        <div className="text-ivory font-medium group-hover:text-amber transition-colors">
                          {file.name}
                        </div>
                        <div className="text-bone/40 text-xs">{file.size}</div>
                      </div>
                    </div>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-bone/40 group-hover:text-amber transition-all group-hover:translate-y-1"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Press Quotes */}
          <section className="section-xl bg-charcoal">
            <div className="container-premium">
              <h2 className="text-headline text-ivory mb-12 font-bold text-center">
                PIŠEJO O NAS
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                {quotes.map((quote, i) => (
                  <motion.div
                    key={i}
                    className="bg-void border border-white/10 p-8 rounded-lg hover:border-amber/30 transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <p
                      className="text-ivory italic mb-4"
                      style={{ fontFamily: "var(--font-accent)" }}
                    >
                      &ldquo;{quote.text}&rdquo;
                    </p>
                    <p className="text-amber text-xs uppercase tracking-widest">
                      &mdash; {quote.source}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact */}
          <section className="section-lg bg-void">
            <div className="container-premium text-center">
              <h2 className="text-headline text-ivory mb-6 font-bold">
                MEDIA CONTACT
              </h2>
              <p className="text-bone/50 mb-6">
                Za medijska vprašanja, intervjuje in recenzije:
              </p>
              <a
                href="mailto:press@thedrinkers.net"
                className="text-amber text-xl font-bold hover:underline"
              >
                press@thedrinkers.net
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Press;
