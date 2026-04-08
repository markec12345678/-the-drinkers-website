import React, { useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { Navbar } from "../src/components/Navbar";
import { Footer } from "../src/components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      label: "Booking",
      value: "booking@thedrinkers.net",
      icon: "🎵",
      href: "mailto:booking@thedrinkers.net",
    },
    {
      label: "Splošna vprašanja",
      value: "info@thedrinkers.net",
      icon: "📧",
      href: "mailto:info@thedrinkers.net",
    },
    {
      label: "Mediji / Press",
      value: "press@thedrinkers.net",
      icon: "📰",
      href: "mailto:press@thedrinkers.net",
    },
    { label: "Lokacija", value: "Litija, Slovenija", icon: "📍", href: "#" },
  ];

  return (
    <>
      <Head>
        <title>Kontakt | The Drinkers</title>
        <meta
          name="description"
          content="Kontaktiraj skupino The Drinkers za booking, medije ali splošna vprašanja."
        />
        <link rel="canonical" href="https://thedrinkers.si/contact" />
        <meta property="og:title" content="Kontakt | The Drinkers" />
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
                Poveži se z nami
              </motion.p>
              <motion.h1
                className="text-display text-ivory mb-8"
                style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                KONTAKT
              </motion.h1>
              <motion.p
                className="text-body-lg text-bone/50 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Booking, mediji, ali samo pozdrav? Piši nam!
              </motion.p>
            </div>
          </section>

          {/* Contact Form + Info */}
          <section className="section-xl bg-void">
            <div className="container-premium">
              <div className="grid lg:grid-cols-2 gap-16">
                {/* Form */}
                <div>
                  <h2 className="text-headline text-ivory mb-8 font-bold">
                    POŠLJI SPOROČILO
                  </h2>

                  {submitted ? (
                    <motion.div
                      className="p-8 bg-green-600/10 border border-green-500/30 rounded-lg"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                    >
                      <div className="text-3xl mb-4">🍻</div>
                      <h3 className="text-xl text-green-400 font-bold mb-2">
                        Hvala za sporočilo!
                      </h3>
                      <p className="text-bone/50">
                        Odgovorimo vam v najkrajšem možnem času. Do takrat pa...
                        na zdravje!
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label
                            htmlFor="name"
                            className="text-xs uppercase tracking-widest text-amber/60 mb-2 block font-medium"
                          >
                            Ime *
                          </label>
                          <input
                            id="name"
                            type="text"
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            required
                            className="w-full px-4 py-3 bg-smoke border border-white/10 text-ivory placeholder-bone/30 focus:border-amber focus:outline-none focus:ring-1 focus:ring-amber/30 transition-all rounded"
                            placeholder="Vaše ime"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="text-xs uppercase tracking-widest text-amber/60 mb-2 block font-medium"
                          >
                            E-pošta *
                          </label>
                          <input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                email: e.target.value,
                              })
                            }
                            required
                            className="w-full px-4 py-3 bg-smoke border border-white/10 text-ivory placeholder-bone/30 focus:border-amber focus:outline-none focus:ring-1 focus:ring-amber/30 transition-all rounded"
                            placeholder="vas@email.com"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="subject"
                          className="text-xs uppercase tracking-widest text-amber/60 mb-2 block font-medium"
                        >
                          Zadeva
                        </label>
                        <select
                          id="subject"
                          value={formData.subject}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              subject: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 bg-smoke border border-white/10 text-ivory focus:border-amber focus:outline-none focus:ring-1 focus:ring-amber/30 transition-all rounded appearance-none cursor-pointer"
                        >
                          <option value="">Izberite temo...</option>
                          <option value="booking">
                            Booking / Rezervacija koncerta
                          </option>
                          <option value="press">Mediji / Press</option>
                          <option value="merch">Merch / Trgovina</option>
                          <option value="fan">Sporočilo fana</option>
                          <option value="other">Drugo</option>
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor="message"
                          className="text-xs uppercase tracking-widest text-amber/60 mb-2 block font-medium"
                        >
                          Sporočilo *
                        </label>
                        <textarea
                          id="message"
                          rows={6}
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              message: e.target.value,
                            })
                          }
                          required
                          className="w-full px-4 py-3 bg-smoke border border-white/10 text-ivory placeholder-bone/30 focus:border-amber focus:outline-none focus:ring-1 focus:ring-amber/30 transition-all rounded resize-none"
                          placeholder="Vaše sporočilo..."
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn-primary w-full justify-center rounded"
                      >
                        POŠLJI SPOROČILO
                      </button>
                    </form>
                  )}
                </div>

                {/* Contact Info */}
                <div>
                  <h2 className="text-headline text-ivory mb-8 font-bold">
                    INFORMACIJE
                  </h2>

                  <div className="space-y-6">
                    {contactInfo.map((contact, i) => (
                      <motion.a
                        key={i}
                        href={contact.href}
                        className="flex items-start gap-4 p-4 rounded-lg hover:bg-white/5 transition-all duration-300 group border border-transparent hover:border-white/5"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <div className="text-2xl group-hover:scale-110 transition-transform">
                          {contact.icon}
                        </div>
                        <div>
                          <div className="text-xs uppercase tracking-widest text-amber/60 mb-1 font-medium">
                            {contact.label}
                          </div>
                          <div className="text-ivory group-hover:text-amber transition-colors">
                            {contact.value}
                          </div>
                        </div>
                      </motion.a>
                    ))}
                  </div>

                  <div className="mt-12 pt-8 border-t border-white/10">
                    <h3 className="text-xs uppercase tracking-widest text-bone/60 mb-4 font-medium">
                      SOCIALNA OMREŽJA
                    </h3>
                    <div className="flex gap-4">
                      {[
                        {
                          name: "Facebook",
                          url: "https://facebook.com",
                          abbr: "FB",
                        },
                        {
                          name: "Instagram",
                          url: "https://instagram.com",
                          abbr: "IG",
                        },
                        {
                          name: "YouTube",
                          url: "https://youtube.com",
                          abbr: "YT",
                        },
                      ].map((social) => (
                        <a
                          key={social.name}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-14 h-14 flex items-center justify-center bg-smoke border border-white/10 text-bone/40 hover:border-amber hover:text-amber hover:bg-amber/10 transition-all duration-300 rounded-lg"
                          aria-label={social.name}
                        >
                          <span className="text-sm font-bold">
                            {social.abbr}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Quick stats */}
                  <div className="mt-12 p-6 bg-charcoal border border-white/5 rounded-lg">
                    <p className="text-bone/40 text-sm italic">
                      &ldquo;Odgovorimo v 24-48 urah. Za nujne booking zahteve
                      pišite neposredno na booking@thedrinkers.net&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Contact;
