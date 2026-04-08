import React, { useState, useEffect } from "react";
import Head from "next/head";
import { motion, useScroll, useTransform } from "framer-motion";

import { Navbar } from "../src/components/Navbar";
import FireParticles from "../src/components/FireParticles";
import BeerCounter from "../src/components/BeerCounter";
import GlitchText from "../src/components/GlitchText";
import VinylRecord from "../src/components/VinylRecord";
import ConcertLights from "../src/components/ConcertLights";
import { TourDates } from "../src/components/TourDates";
import { StreamingPlatforms } from "../src/components/StreamingPlatforms";
import { NewsletterSignup } from "../src/components/NewsletterSignup";
import { Footer } from "../src/components/Footer";
import { CustomCursor } from "../src/components/CustomCursor";

const Home = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const { scrollYProgress } = useScroll();

  const triggerShake = () => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 500);
  };

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.4]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  useEffect(() => {
    setHasMounted(true);
    document.body.style.cursor = "none";
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!hasMounted) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "-50px" },
    );
    document
      .querySelectorAll(".animate-on-scroll, section")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [hasMounted]);

  const discography = [
    {
      year: "1995",
      title: "Lepi in trezni",
      image: "/images/album-lepi-in-trezni.jpg",
    },
    { year: "1997", title: "Žeja", image: "/images/album-zeja.jpg" },
    {
      year: "1999",
      title: "Pivolucija",
      image: "/images/album-pivolucija.jpg",
    },
    {
      year: "1999",
      title: "Zadnja večerja",
      image: "/images/album-zadnja-vecerja.jpg",
    },
    {
      year: "2001",
      title: "De best od",
      image: "/images/album-de-best-od.jpg",
    },
    {
      year: "2003",
      title: "Prohibicija",
      image: "/images/album-prohibicija.jpg",
    },
    { year: "2007", title: "Hajdi", image: "/images/album-hajdi.jpg" },
    { year: "2014", title: "Recidiv", image: "/images/album-recidiv.jpg" },
  ];

  const bandMembers = [
    {
      name: "Sandi Kolenc - Koli",
      role: "Vokal (1993-2017)",
      status: "legend",
    },
    { name: "Robert Likar", role: "Kitara (1993-danes)", status: "active" },
    { name: "Miro Mutvar", role: "Bas (1994-danes)", status: "active" },
    { name: "Primož Trebec", role: "Klavir (2011-danes)", status: "active" },
  ];

  const merchItems = [
    {
      name: "Majica 'Pijemo ga radi'",
      price: "€25",
      tag: "Bestseller",
      img: "/images/band-photo-main.jpg",
      filter: "contrast(1.2) brightness(0.8) hue-rotate(10deg)",
    },
    {
      name: "Hoodie The Drinkers",
      price: "€45",
      tag: "Novo",
      img: "/images/album-recidiv.jpg",
      filter: "grayscale(1) contrast(1.5) brightness(0.5)",
    },
    {
      name: "Kapa s šiltom",
      price: "€15",
      tag: "Popularno",
      img: "/images/album-zeja.jpg",
      filter: "sepia(0.8) contrast(1.3) brightness(0.6)",
    },
  ];

  return (
    <div className={isShaking ? "shake-active" : ""}>
      <Head>
        <title>
          The Drinkers | Official Website - Slovenian Rock Band Since 1993
        </title>
        <meta
          name="description"
          content="Uradna spletna stran rock skupine The Drinkers iz Litije. Koncerti, glasba, merchandise in najnovejše novice. 30 let rock and roll zgodovine Slovenije."
        />
        <meta property="og:title" content="The Drinkers | Official Website" />
        <meta property="og:image" content="/images/band-photo-main.jpg" />
        <link rel="canonical" href="https://thedrinkers.si/" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Navbar />

      {hasMounted && (
        <>
          <CustomCursor />
          <FireParticles />
          <BeerCounter />
        </>
      )}

      <div className="grain-overlay" />

      {/* HERO SECTION */}
      <section className="relative h-screen overflow-hidden bg-void">
        {/* Dark background */}
        <div className="absolute inset-0 bg-gradient-to-b from-void via-charcoal to-void" />
        {/* Concert light beams - on top of background */}
        <div className="absolute inset-0 z-10">
          <ConcertLights />
        </div>

        <motion.div
          className="relative z-20 h-full flex flex-col justify-end pb-32 px-6 md:px-12"
          style={{ opacity }}
        >
          <div className="container-premium">
            <motion.p
              className="text-label text-amber mb-6 tracking-ultra"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              LITIJA, SLOVENIJA — OD 1993
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.5 }}
            >
              <h1
                className="text-display-xl text-ivory mb-8 animate-text-shake"
                style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
              >
                <GlitchText text="THE" />
                <br />
                <GlitchText text="DRINKERS" />
              </h1>
            </motion.div>
            <motion.p
              className="text-body-lg text-bone/60 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              Legendarna booze rock institucija. Drink'n'roll od leta 1993.
              Deset albumov, tisoč odrov in ena nepozabna žeja.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-6 mt-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
            >
              <button
                className="btn-primary"
                onClick={() => {
                  triggerShake();
                  window.location.hash = "#tour";
                }}
              >
                NA KONCERT
              </button>
              <button
                className="btn-secondary"
                onClick={() => {
                  triggerShake();
                  window.location.hash = "#discography";
                }}
              >
                DISKOGRAFIJA
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          <span className="text-amber/60 text-[10px] uppercase tracking-widest">
            Scroll
          </span>
          <motion.div
            className="w-6 h-10 border-2 border-amber/40 rounded-full flex justify-center"
            animate={{
              borderColor: [
                "rgba(212,115,26,0.3)",
                "rgba(212,115,26,0.6)",
                "rgba(212,115,26,0.3)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-2 bg-amber rounded-full mt-2"
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      </section>

      <StreamingPlatforms />

      {/* STORY */}
      <section className="section-xl bg-charcoal">
        <div className="container-premium">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-5 animate-on-scroll">
              <div className="relative aspect-[3/4] overflow-hidden bg-smoke border border-white/5 shadow-2xl">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: "url(/images/album-lepi-in-trezni.jpg)",
                    filter: "grayscale(100%) brightness(0.8) contrast(1.2)",
                  }}
                />
                <div className="absolute inset-0 bg-amber/10 mix-blend-overlay" />
              </div>
            </div>
            <div className="md:col-span-7 flex flex-col justify-center">
              <p className="text-label text-amber mb-6 tracking-widest">
                Zgodba
              </p>
              <h2
                className="text-display-lg text-ivory mb-8"
                style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
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
              </div>
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-subtle">
                {[
                  { value: "30+", label: "Let" },
                  { value: "10", label: "Albumov" },
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

      {/* DISCOGRAPHY */}
      <section id="discography" className="section-xl bg-void">
        <div className="container-premium">
          <h2 className="text-display text-center text-ivory mb-20 font-bold">
            DISKOGRAFIJA
          </h2>
          <div className="flex justify-center mb-24">
            <VinylRecord
              albumName="Recidiv"
              year="2014"
              imageUrl="/images/album-recidiv.jpg"
            />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {discography.map((album, i) => (
              <motion.div
                key={i}
                className="group animate-on-scroll"
                whileHover={{ y: -10 }}
              >
                <div className="aspect-square bg-smoke mb-6 overflow-hidden relative border border-white/5 group-hover:border-amber/50 transition-all duration-500 shadow-lg group-hover:shadow-amber/10">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${album.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-void/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <p className="text-label text-amber/60 mb-1 font-mono">
                  {album.year}
                </p>
                <h3
                  className="text-headline text-ivory group-hover:text-amber transition-colors duration-300"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.25rem",
                    letterSpacing: "0.05em",
                  }}
                >
                  {album.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MERCH SECTION */}
      <section
        id="merch"
        className="section-xl bg-ash relative overflow-hidden"
      >
        <div className="container-premium">
          <div className="text-center mb-20 font-bold">
            <p className="text-label text-amber mb-6 tracking-widest">
              Trgovina
            </p>
            <h2 className="text-display text-ivory mb-8 font-bold tracking-tighter">
              URADNI MERCH
            </h2>
            <p className="text-body text-bone/40 max-w-2xl mx-auto font-normal">
              Izbrani kosi za prave Drink'n'Roll fane.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {merchItems.map((item, i) => (
              <motion.div
                key={i}
                className="group bg-void border border-white/5 p-6 hover:border-amber/30 transition-all duration-500"
                whileHover={{ y: -10 }}
              >
                <div className="aspect-[4/5] bg-smoke mb-8 overflow-hidden relative border border-white/5">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${item.img})`,
                      filter: item.filter,
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent opacity-60" />
                  <div className="absolute top-4 right-4 bg-amber text-void text-[10px] font-bold px-2 py-1 uppercase">
                    {item.tag}
                  </div>
                </div>
                <h3 className="text-xl text-ivory mb-2 font-bold">
                  {item.name}
                </h3>
                <p className="text-amber font-mono font-bold text-lg mb-6">
                  {item.price}
                </p>
                <button
                  className="w-full py-4 bg-white/5 hover:bg-amber hover:text-void text-bone text-xs font-bold uppercase tracking-widest transition-all"
                  onClick={triggerShake}
                >
                  V KOŠARICO
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TourDates />

      {/* MEMBERS */}
      <section className="section-xl bg-charcoal">
        <div className="container-premium text-center">
          <h2 className="text-display text-ivory mb-20 font-bold tracking-tighter">
            ZASEDBA
          </h2>
          <div className="grid md:grid-cols-4 gap-12">
            {bandMembers.map((member, i) => (
              <div key={i} className="animate-on-scroll">
                <div
                  className={`w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center bg-smoke border border-white/5 ${member.status === "legend" ? "ring-2 ring-amber ring-offset-4 ring-offset-charcoal shadow-[0_0_20px_rgba(212,115,26,0.2)]" : ""}`}
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
                <h3 className="text-xl text-ivory mb-1 font-bold tracking-tight">
                  {member.name}
                </h3>
                <p className="text-label text-bone/40 text-xs tracking-widest uppercase">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NewsletterSignup />
      <Footer />
    </div>
  );
};

export default Home;
