import React from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "../src/components/Navbar";
import { Footer } from "../src/components/Footer";

const blogPosts = [
  {
    id: 1,
    title: "30 let Drink'n'Rolla: Kako smo preživeli tri desetletja",
    excerpt:
      "Zgodba o tem, kako je skupina iz Litije postala eden najbolj prepoznavnih slovenskih rock bendov.",
    date: "15. MAR 2025",
    image: "/images/band-photo-main.jpg",
    category: "Zgodba",
  },
  {
    id: 2,
    title: "Novi album 2026: Kaj lahko pričakujete?",
    excerpt:
      "Robert Likar namiguje, da pripravlja nov material. 'Čas je za nekaj svežega,' pravi.",
    date: "28. FEB 2025",
    image: "/images/album-recidiv.jpg",
    category: "Novice",
  },
  {
    id: 3,
    title: "Za oder: Kako izgleda tipičen koncert The Drinkers",
    excerpt:
      "Od soundchecka do encore - popis energije, ki poganja naše koncerte.",
    date: "10. JAN 2025",
    image: "/images/album-zeja.jpg",
    category: "Zaselek",
  },
  {
    id: 4,
    title: "Sandijevih top 10 besedil vseh časov",
    excerpt:
      "Legendarni frontman je izbral svoje najljubše tekste iz bogate kariere.",
    date: "5. DEC 2024",
    image: "/images/album-lepi-in-trezni.jpg",
    category: "Intervju",
  },
];

const Blog = () => {
  return (
    <>
      <Head>
        <title>Blog | The Drinkers</title>
        <meta
          name="description"
          content="Novice, zgodbe in intervjuji s skupino The Drinkers."
        />
        <link rel="canonical" href="https://thedrinkers.si/blog" />
        <meta property="og:title" content="Blog | The Drinkers" />
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
                Novice in zgodbe
              </motion.p>
              <motion.h1
                className="text-display text-ivory mb-8"
                style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                BLOG
              </motion.h1>
            </div>
          </section>

          {/* Posts */}
          <section className="section-xl bg-void">
            <div className="container-premium">
              <div className="grid md:grid-cols-2 gap-10">
                {blogPosts.map((post, i) => (
                  <motion.article
                    key={post.id}
                    className="group bg-charcoal border border-white/5 hover:border-amber/30 transition-all duration-500 overflow-hidden cursor-pointer"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="aspect-[16/9] bg-smoke overflow-hidden relative">
                      <div
                        className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                        style={{ backgroundImage: `url(${post.image})` }}
                      />
                      <div className="absolute top-4 left-4 bg-amber text-void text-[10px] font-bold px-3 py-1 uppercase tracking-wider">
                        {post.category}
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-label text-amber/60 mb-3">
                        {post.date}
                      </p>
                      <h3 className="text-xl text-ivory font-bold mb-3 group-hover:text-amber transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-bone/40 text-sm mb-6">
                        {post.excerpt}
                      </p>
                      <span className="text-amber text-xs uppercase tracking-widest font-bold group-hover:underline">
                        PREBERI VEČ →
                      </span>
                    </div>
                  </motion.article>
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

export default Blog;
