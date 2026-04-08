import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { Navbar } from "../src/components/Navbar";
import { Footer } from "../src/components/Footer";

const merchItems = [
  {
    name: "Majica 'Pijemo ga radi'",
    price: "€25",
    tag: "Bestseller",
    img: "/images/band-photo-main.jpg",
    filter: "contrast(1.1) brightness(0.85) saturate(1.1)",
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    name: "Hoodie The Drinkers",
    price: "€45",
    tag: "Novo",
    img: "/images/album-recidiv.jpg",
    filter: "grayscale(0.3) contrast(1.15) brightness(0.8)",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    name: "Kapa s šiltom",
    price: "€15",
    tag: "Popularno",
    img: "/images/album-zeja.jpg",
    filter: "sepia(0.3) contrast(1.1) brightness(0.85)",
    sizes: ["One Size"],
  },
  {
    name: "Majica 'Prohibicija'",
    price: "€25",
    tag: "Limitirano",
    img: "/images/album-prohibicija.jpg",
    filter: "contrast(1.1) brightness(0.85) saturate(1.15)",
    sizes: ["M", "L", "XL"],
  },
  {
    name: "CD 'Recidiv'",
    price: "€12",
    tag: "Klasik",
    img: "/images/album-recidiv.jpg",
    filter: "contrast(1.05) brightness(0.9)",
    sizes: [],
  },
  {
    name: "Majica 'Lepi in trezni'",
    price: "€25",
    tag: "Retro",
    img: "/images/album-lepi-in-trezni.jpg",
    filter: "grayscale(0.2) contrast(1.1) brightness(0.85)",
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
];

const Merch = () => {
  return (
    <>
      <Head>
        <title>Merch | The Drinkers - Official Store</title>
        <meta
          name="description"
          content="Official The Drinkers merchandise. Majice, hoodiji, glasba in več. Podpri svojo najljubšo rock skupino!"
        />
        <link rel="canonical" href="https://thedrinkers.si/merch" />
        <meta
          property="og:title"
          content="Merch | The Drinkers Official Store"
        />
        <meta property="og:image" content="/images/merch-hero.jpg" />
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
                Trgovina
              </motion.p>
              <motion.h1
                className="text-display text-ivory mb-8"
                style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                The Drinkers Merch Store
              </motion.h1>
              <motion.p
                className="text-body-lg text-bone/50 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Uradni merch za prave fane. Vsak kos je del Drink'n'roll zgodbe.
              </motion.p>
            </div>
          </section>

          {/* Products Grid */}
          <section className="section-xl bg-void">
            <div className="container-premium">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {merchItems.map((item, i) => (
                  <motion.div
                    key={i}
                    className="group bg-charcoal border border-white/5 hover:border-amber/30 transition-all duration-500 overflow-hidden"
                    whileHover={{ y: -6 }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <div className="aspect-[4/5] bg-smoke overflow-hidden relative">
                      <div
                        className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                        style={{
                          backgroundImage: `url(${item.img})`,
                          filter: item.filter,
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent opacity-60" />
                      <div className="absolute top-4 right-4 bg-amber text-void text-[10px] font-bold px-3 py-1 uppercase tracking-wider">
                        {item.tag}
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl text-ivory font-bold mb-2">
                        {item.name}
                      </h3>
                      <p className="text-amber font-mono font-bold text-lg mb-4">
                        {item.price}
                      </p>

                      {item.sizes.length > 0 && (
                        <div className="flex gap-2 mb-6">
                          {item.sizes.map((size) => (
                            <span
                              key={size}
                              className="text-xs text-bone/40 border border-white/10 px-2 py-1"
                            >
                              {size}
                            </span>
                          ))}
                        </div>
                      )}

                      <button className="w-full py-4 bg-white/5 hover:bg-amber hover:text-void text-bone text-xs font-bold uppercase tracking-widest transition-all duration-300">
                        V KOŠARICO
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Shipping Info */}
          <section className="section-lg bg-charcoal">
            <div className="container-premium">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                {[
                  {
                    icon: "📦",
                    title: "Brezplačna dostava",
                    desc: "Za naročila nad €50",
                  },
                  {
                    icon: "🇸🇮",
                    title: "Iz Slovenije",
                    desc: "Ročno pakirano z ljubeznijo",
                  },
                  {
                    icon: "🔄",
                    title: "30-dnevna vračila",
                    desc: "Brez vprašanj",
                  },
                ].map((feature, i) => (
                  <div key={i} className="py-8">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-ivory font-bold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-bone/40 text-sm">{feature.desc}</p>
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

export default Merch;
