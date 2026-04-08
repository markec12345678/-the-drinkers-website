import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { Navbar } from "../src/components/Navbar";
import { Footer } from "../src/components/Footer";

const bandMembers = [
  {
    name: "Sandi Kolenc - Koli",
    role: "Vokal (1993-2017)",
    status: "legend",
    bio: "Legendarni frontman z nepozabno energijo in glasom, ki je zaznamoval slovenski rock.",
  },
  {
    name: "Robert Likar",
    role: "Kitara (1993-danes)",
    status: "active",
    bio: "Ustanovni član in glavni kitarist, arhitekt prepoznavnega zvoka The Drinkers.",
  },
  {
    name: "Miro Mutvar",
    role: "Bas (1994-danes)",
    status: "active",
    bio: "Basist z občutkom za ritem in neustavljivo odrečno prisotnostjo.",
  },
  {
    name: "Primož Trebec",
    role: "Klavir (2011-danes)",
    status: "active",
    bio: "Klavirist, ki je skupini prinesel novo dimenzijo in globino.",
  },
];

const timeline = [
  { year: "1993", event: "Ustanovitev skupine v Litiji" },
  { year: "1995", event: "Prvi album 'Lepi in trezni'" },
  { year: "1997", event: "Album 'Žeja' - preboj na sceno" },
  {
    year: "1999",
    event: "Dva albuma v enem letu: 'Pivolucija' in 'Zadnja večerja'",
  },
  { year: "2001", event: "'De best od' - kompilacija največjih uspešnic" },
  { year: "2003", event: "'Prohibicija' - zrelejši zvok" },
  { year: "2007", event: "'Hajdi' - energičen comeback" },
  { year: "2014", event: "'Recidiv' - najnovejši album" },
  { year: "2023", event: "30 let Drink'n'rolla" },
];

const About = () => {
  return (
    <>
      <Head>
        <title>O Nas | The Drinkers</title>
        <meta
          name="description"
          content="Spoznaj zgodbo rock skupine The Drinkers - člani, zgodovina in dosežki."
        />
        <link rel="canonical" href="https://thedrinkers.si/about" />
        <meta property="og:title" content="O Nas | The Drinkers" />
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
                Zgodba
              </motion.p>
              <motion.h1
                className="text-display text-ivory mb-8"
                style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                O NAS
              </motion.h1>
              <motion.p
                className="text-body-lg text-bone/50 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                30 let rock and rolla, piva in nepozabnih trenutkov iz Litije.
              </motion.p>
            </div>
          </section>

          {/* Story */}
          <section className="section-xl bg-charcoal">
            <div className="container-premium">
              <div className="grid md:grid-cols-12 gap-12">
                <div className="md:col-span-5">
                  <div className="relative aspect-[3/4] overflow-hidden bg-smoke border border-white/10 shadow-2xl group">
                    <div
                      className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{
                        backgroundImage: "url(/images/band-photo-main.jpg)",
                        filter: "brightness(1) contrast(1.05) saturate(1.1)",
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-void/40 via-transparent to-transparent" />
                  </div>
                </div>
                <div className="md:col-span-7 flex flex-col justify-center">
                  <h2
                    className="text-display-lg text-ivory mb-8"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 600,
                    }}
                  >
                    Drink'n'Roll
                    <br />
                    od 1993
                  </h2>
                  <div className="space-y-6 text-body-lg text-bone/50 mb-12">
                    <p>
                      The Drinkers so nastali leta 1993 v Litiji. Znani po
                      prepoznavnem "drink'n'roll" stilu, humornih besedilih in
                      nepozabni energiji frontmana Sandija Kolenca - Kolija.
                    </p>
                    <p
                      className="text-2xl text-amber italic"
                      style={{ fontFamily: "var(--font-accent)" }}
                    >
                      "Pili smo zmeraj radi."
                    </p>
                    <p>
                      Skozi tri desetletja so izdali 8 studijskih albumov,
                      odigrali na stotine koncertov po Sloveniji in regiji ter
                      postali eden najbolj prepoznavnih rock bendov.
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
                    {[
                      { value: "30+", label: "Let" },
                      { value: "8", label: "Albumov" },
                      { value: "1000+", label: "Koncertov" },
                    ].map((stat, i) => (
                      <div key={i}>
                        <div className="text-display text-amber text-4xl font-bold">
                          {stat.value}
                        </div>
                        <div className="text-label text-bone/30 mt-2">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Timeline */}
          <section className="section-xl bg-void">
            <div className="container-premium">
              <h2 className="text-headline text-center text-ivory mb-16 font-bold">
                ZGODOVINA
              </h2>
              <div className="max-w-3xl mx-auto">
                {timeline.map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex gap-8 pb-8 border-b border-white/5"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <div className="text-amber font-mono font-bold text-lg min-w-[60px]">
                      {item.year}
                    </div>
                    <div className="text-bone/60">{item.event}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Members */}
          <section className="section-xl bg-charcoal">
            <div className="container-premium">
              <h2 className="text-headline text-center text-ivory mb-16 font-bold">
                ČLANI SKUPINE
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {bandMembers.map((member, i) => (
                  <motion.div
                    key={i}
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div
                      className={`w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center bg-smoke border border-white/5 ${member.status === "legend" ? "ring-2 ring-amber ring-offset-4 ring-offset-charcoal" : ""}`}
                    >
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        className="text-bone/20"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                      </svg>
                    </div>
                    <h3 className="text-lg text-ivory font-bold mb-1">
                      {member.name}
                    </h3>
                    <p className="text-label text-amber/60 mb-3 text-xs tracking-widest uppercase">
                      {member.role}
                    </p>
                    <p className="text-bone/40 text-sm">{member.bio}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Press Kit */}
          <section className="section-lg bg-void">
            <div className="container-premium text-center">
              <h2 className="text-headline text-ivory mb-6 font-bold">
                PRESS KIT
              </h2>
              <p className="text-bone/50 mb-8 max-w-lg mx-auto">
                Za medije in organizatorje - logotipi, fotografije in tehnični
                rider.
              </p>
              <a href="/press" className="btn-primary inline-flex">
                PRENESI PRESS KIT
              </a>
            </div>
          </section>

          {/* Visuals / Gallery Preview */}
          <section className="section-lg bg-charcoal">
            <div className="container-premium text-center">
              <h2 className="text-headline text-ivory mb-6 font-bold">
                VISUALI
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  "/images/band-photo-main.jpg",
                  "/images/album-lepi-in-trezni.jpg",
                  "/images/album-recidiv.jpg",
                  "/images/album-zeja.jpg",
                ].map((img, i) => (
                  <div
                    key={i}
                    className="aspect-square bg-smoke overflow-hidden border border-white/5"
                  >
                    <div
                      className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-700"
                      style={{ backgroundImage: `url(${img})` }}
                    />
                  </div>
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

export default About;
