import Head from "next/head";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, CalendarDays, Disc3, ExternalLink, Instagram, MapPin, Music2, Play, Youtube } from "lucide-react";

const img = (path: string) => "/images" + path;

const releases = [
  { year: "1995", title: "Lepi in trezni", file: "/album-lepi-in-trezni.jpg" },
  { year: "1997", title: "Žeja", file: "/album-zeja.jpg" },
  { year: "1999", title: "Pivolucija", file: "/album-pivolucija.jpg" },
  { year: "1999", title: "Zadnja večerja", file: "/album-zadnja-vecerja.jpg" },
  { year: "2001", title: "De best od", file: "/album-de-best-od.jpg" },
  { year: "2003", title: "Prohibicija", file: "/album-prohibicija.jpg" },
  { year: "2007", title: "Hajdi", file: "/album-hajdi.jpg" },
  { year: "2014", title: "Recidiv", file: "/album-recidiv.jpg" },
];

const lineup = [
  ["Domen Kolenc", "vokal"],
  ["Robert Likar", "kitara · vokal"],
  ["Primož Trebec", "klaviature · vokal"],
  ["Kristian Buovski", "bas"],
  ["Janez Grošelj", "bobni"],
  ["David Zavolovšek", "kitara"],
];

const songs = [
  ["Ni še umru", "NOV SINGLE · 2026"],
  ["Pijemo ga radi", "KULTNA SKLADBA"],
  ["Deset majhnih jagrov", "ŽEJA · 1997"],
  ["Alkohol je moj idol", "LEPI IN TREZNI · 1995"],
];

export default function Home() {
  return (
    <>
      <Head>
        <title>The Drinkers | Official Website</title>
        <meta
          name="description"
          content="The Drinkers — slovenska drink'n'roll skupina iz Litije. Nova generacija, nova glasba, ista energija."
        />
        <meta property="og:title" content="The Drinkers | Official Website" />
        <meta
          property="og:description"
          content="The Drinkers se vračajo. Nova glasba, nova zasedba, ista drink'n'roll energija."
        />
        <meta property="og:image" content="/images/band-photo-main.jpg" />
        <link rel="canonical" href="https://thedrinkers.si/" />
      </Head>

      <div className="bg-void text-ivory">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-amber focus:px-4 focus:py-3 focus:text-xs focus:font-bold focus:uppercase focus:tracking-widest focus:text-void"
        >
          Preskoči na vsebino
        </a>

        <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-void/75 backdrop-blur-xl">
          <div className="container-premium flex h-16 items-center justify-between px-4 sm:px-6 lg:px-10">
            <Link
              href="/"
              className="font-display text-sm font-semibold tracking-[0.26em] text-ivory transition hover:text-amber"
              style={{ fontFamily: "var(--font-display)" }}
            >
              THE DRINKERS
            </Link>

            <nav className="hidden items-center gap-7 md:flex">
              {[
                ["#glavna", "Domov"],
                ["#glasba", "Glasba"],
                ["#v-zivo", "V živo"],
                ["#zgodba", "Zgodba"],
                ["#diskografija", "Diskografija"],
                ["#kontakt", "Kontakt"],
              ].map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  className="text-[10px] font-medium uppercase tracking-[0.2em] text-bone/60 transition hover:text-amber"
                >
                  {label}
                </a>
              ))}
              <Link
                href="/epk"
                className="inline-flex items-center gap-2 border border-amber/50 px-3 py-2 text-[10px] font-medium uppercase tracking-[0.18em] text-amber transition hover:bg-amber hover:text-void"
              >
                EPK <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </nav>

            <details className="relative md:hidden">
              <summary className="flex h-10 cursor-pointer list-none items-center border border-white/15 px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-amber">
                Meni
              </summary>
              <div className="absolute right-0 top-12 w-56 border border-white/10 bg-charcoal p-2 shadow-2xl">
                {[
                  ["#glasba", "Glasba"],
                  ["#v-zivo", "V živo"],
                  ["#zgodba", "Zgodba"],
                  ["#diskografija", "Diskografija"],
                  ["#kontakt", "Kontakt"],
                  ["/epk", "EPK"],
                ].map(([href, label]) => (
                  <a
                    key={href}
                    href={href}
                    className="block px-4 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-bone/75 hover:bg-amber/10 hover:text-amber"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </details>
          </div>
        </header>

        <main id="main-content">
          <section id="glavna" className="relative min-h-screen overflow-hidden">
            <div className="absolute inset-0">
              <img
                src={img("/hero-bg.jpg")}
                alt=""
                className="h-full w-full object-cover object-center"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,3,3,.97)_0%,rgba(3,3,3,.82)_34%,rgba(3,3,3,.34)_68%,rgba(3,3,3,.78)_100%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,3,3,.48)_0%,transparent_34%,rgba(3,3,3,.98)_100%)]" />
            </div>

            <div className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] flex-col justify-end px-4 pb-20 pt-28 sm:px-6 lg:px-10 lg:pb-24">
              <div className="max-w-6xl">
                <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.42em] text-amber/75 sm:text-xs">
                  LITIJA · SLOVENIJA · 1993 → 2026
                </p>

                <h1
                  className="max-w-6xl font-display text-[19vw] font-semibold leading-[0.78] tracking-[-0.055em] text-ivory sm:text-[13vw] lg:text-[10rem]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  THE
                  <span className="block text-amber [text-shadow:8px_8px_0_#7b1b12]">DRINKERS</span>
                </h1>

                <div className="mt-8 grid max-w-4xl gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
                  <p className="max-w-2xl text-base leading-7 text-bone/65 sm:text-lg sm:leading-8">
                    Nova generacija. Nova glasba. Ista drink&apos;n&apos;roll zgodba.
                    Po skoraj desetletju se The Drinkers vračajo z novim singlom
                    <span className="text-ivory"> Ni še umru</span>.
                  </p>
                  <p className="font-accent text-2xl italic text-amber sm:text-3xl" style={{ fontFamily: "var(--font-accent)" }}>
                    zgodba se nadaljuje.
                  </p>
                </div>

                <div className="mt-9 flex flex-wrap gap-3">
                  <a
                    href="#glasba"
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    <Play className="h-4 w-4 fill-current" /> Poslušaj
                  </a>
                  <a
                    href="#v-zivo"
                    className="btn-secondary inline-flex items-center gap-2"
                  >
                    <CalendarDays className="h-4 w-4" /> Naslednji koncert
                  </a>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/10 bg-black/35 backdrop-blur-md">
              <div className="overflow-hidden py-3">
                <div className="drinkers-marquee flex w-max gap-10 px-4 text-[9px] font-semibold uppercase tracking-[0.32em] text-bone/35">
                  <span>NOV SINGLE · NI ŠE UMRU</span>
                  <span>DRINK&apos;N&apos;ROLL</span>
                  <span>LITIJA · 1993</span>
                  <span>THE DRINKERS 2.0</span>
                  <span>NAZAJ NA ODRU</span>
                  <span>NOV SINGLE · NI ŠE UMRU</span>
                  <span>DRINK&apos;N&apos;ROLL</span>
                  <span>LITIJA · 1993</span>
                  <span>THE DRINKERS 2.0</span>
                </div>
              </div>
            </div>
          </section>

          <section id="glasba" className="border-t border-white/10 bg-charcoal py-20 sm:py-24 lg:py-32">
            <div className="container-premium px-4 sm:px-6 lg:px-10">
              <div className="grid gap-12 lg:grid-cols-[0.6fr_1.4fr] lg:items-end">
                <div>
                  <p className="text-label text-amber/65">01 / GLASBA</p>
                  <h2 className="text-display text-ivory mt-4 font-bold" style={{ fontFamily: "var(--font-display)" }}>
                    NOVO<br />POGLAVJE.
                  </h2>
                  <p className="mt-6 max-w-md text-body-lg text-bone/45">
                    The Drinkers so se leta 2026 vrnili z novo postavo in novim singlom
                    <span className="text-bone/80"> Ni še umru</span>. Besedilo je napisal Domen Kolenc,
                    glasbo Robert Likar.
                  </p>
                  <a
                    href="https://www.youtube.com/@TheDrinkersSlovenija"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-amber transition hover:text-ivory"
                  >
                    Odpri YouTube kanal <Youtube className="h-4 w-4" />
                  </a>
                </div>

                <div className="grid gap-4 sm:grid-cols-[1.25fr_.75fr]">
                  <div className="overflow-hidden border border-white/10 bg-void">
                    <div className="aspect-video">
                      <iframe
                        src="https://www.youtube.com/embed/5bYFArOho7U"
                        title="The Drinkers – Deset majhnih jagrov"
                        className="h-full w-full"
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                    <div className="flex items-center justify-between border-t border-white/10 px-4 py-3">
                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-[0.23em] text-amber/55">ARCHIVE VIDEO</p>
                        <p className="mt-1 text-sm font-semibold text-ivory">Deset majhnih jagrov</p>
                      </div>
                      <Youtube className="h-5 w-5 text-amber" />
                    </div>
                  </div>

                  <div className="border border-white/10 bg-[#11100f] p-5">
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                      <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-bone/30">SELECTED</span>
                      <Music2 className="h-4 w-4 text-amber" />
                    </div>

                    <div className="mt-2">
                      {songs.map(([title, note], index) => (
                        <a
                          key={title}
                          href="https://www.youtube.com/@TheDrinkersSlovenija"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center gap-3 border-b border-white/5 py-4"
                        >
                          <span className="font-mono text-[10px] text-bone/20">0{index + 1}</span>
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-semibold text-ivory/85 transition group-hover:text-amber">{title}</p>
                            <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.15em] text-bone/25">{note}</p>
                          </div>
                          <ArrowUpRight className="h-3.5 w-3.5 text-bone/20 transition group-hover:text-amber" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="v-zivo" className="border-t border-white/10 bg-void py-20 sm:py-24 lg:py-32">
            <div className="container-premium px-4 sm:px-6 lg:px-10">
              <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
                <div>
                  <p className="text-label text-amber/65">02 / V ŽIVO</p>
                  <h2 className="text-display text-ivory mt-4 font-bold" style={{ fontFamily: "var(--font-display)" }}>
                    SPET<br /><span className="text-amber">NA ODRU.</span>
                  </h2>
                  <p className="mt-6 max-w-md text-body-lg text-bone/40">
                    Prvi veliki koncert nove postave je napovedan za 25. september 2026 v Blunoutu.
                    Naslednji preverjeni datum sledi oktobra.
                  </p>
                </div>

                <div className="space-y-3">
                  <a
                    href="https://blunout.si/vstopnice/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col gap-5 border border-amber/35 bg-amber/5 p-5 transition hover:border-amber hover:bg-amber/10 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center border border-amber/45 bg-amber/10">
                        <CalendarDays className="h-6 w-6 text-amber" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-amber/70">25. SEPTEMBER 2026 · 20:30</p>
                        <p className="mt-1 text-xl font-bold text-ivory">The Drinkers</p>
                        <p className="mt-1 flex items-center gap-1.5 text-sm text-bone/40">
                          <MapPin className="h-4 w-4" /> Blunout · Domžale
                        </p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-amber">
                      Vstopnice <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </span>
                  </a>

                  <a
                    href="https://klubar.si/vstopnice/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col gap-5 border border-white/10 bg-white/[0.02] p-5 transition hover:border-amber/60 hover:bg-white/[0.04] sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center border border-white/15 bg-white/[0.03]">
                        <CalendarDays className="h-6 w-6 text-amber" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-bone/30">24. OKTOBER 2026 · 20:30</p>
                        <p className="mt-1 text-xl font-bold text-ivory">CHATEAU & The Drinkers</p>
                        <p className="mt-1 flex items-center gap-1.5 text-sm text-bone/40">
                          <MapPin className="h-4 w-4" /> KluBar · Kranj
                        </p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-amber">
                      Vstopnice <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section id="zgodba" className="border-t border-white/10 bg-[#efe5d7] text-[#17120f]">
            <div className="grid lg:grid-cols-2">
              <div className="relative min-h-[430px] lg:min-h-[720px]">
                <img
                  src={img("/band-photo-main.jpg")}
                  alt="The Drinkers"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />
                <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10">
                  <p className="text-[9px] font-bold uppercase tracking-[0.35em] text-white/60">ARCHIVE / NOW</p>
                  <p className="mt-2 max-w-sm font-display text-3xl font-semibold leading-tight text-white sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
                    ISTA ZGODBA.<br />NOVO POGLAVJE.
                  </p>
                </div>
              </div>

              <div className="flex items-center px-5 py-16 sm:px-10 lg:px-16 xl:px-20">
                <div className="max-w-xl">
                  <p className="text-label text-[#a44f19]/70">03 / ZGODBA</p>
                  <h2 className="mt-5 font-display text-5xl font-semibold leading-[0.9] sm:text-6xl lg:text-7xl" style={{ fontFamily: "var(--font-display)" }}>
                    OD 1993
                    <span className="block text-[#a44f19]">NAPREJ.</span>
                  </h2>

                  <p className="mt-7 text-base leading-8 text-[#4e4035]">
                    The Drinkers so svojo pot začeli leta 1993 v Litiji in postali prepoznavni po
                    neposrednem, hudomušnem drink&apos;n&apos;rollu. Po obdobju premora se je leta 2026
                    odprlo novo poglavje.
                  </p>

                  <p className="mt-5 text-sm leading-7 text-[#6e5d50]">
                    Obuditev na Jevniškem Retro Džuboksu je prerasla v novo postavo, nov singel in
                    nove nastope. Domen Kolenc je prevzel vokal in sooblikoval novo zgodbo skupine.
                  </p>

                  <div className="mt-10 grid grid-cols-3 gap-4 border-t border-black/10 pt-8">
                    <div>
                      <p className="font-display text-4xl font-semibold text-[#a44f19]" style={{ fontFamily: "var(--font-display)" }}>1993</p>
                      <p className="mt-1 text-[9px] font-black uppercase tracking-[0.22em] text-black/40">ZAČETEK</p>
                    </div>
                    <div>
                      <p className="font-display text-4xl font-semibold text-[#a44f19]" style={{ fontFamily: "var(--font-display)" }}>2026</p>
                      <p className="mt-1 text-[9px] font-black uppercase tracking-[0.22em] text-black/40">POVRATEK</p>
                    </div>
                    <div>
                      <p className="font-display text-4xl font-semibold text-[#a44f19]" style={{ fontFamily: "var(--font-display)" }}>01</p>
                      <p className="mt-1 text-[9px] font-black uppercase tracking-[0.22em] text-black/40">NOV SINGLE</p>
                    </div>
                  </div>

                  <div className="mt-10 border-t border-black/10">
                    {[
                      ["1993", "Litija", "Začetek skupine."],
                      ["1995", "Lepi in trezni", "Prvi album."],
                      ["1997", "Žeja", "Ena ključnih plošč skupine."],
                      ["1999", "Pivolucija", "Novo poglavje diskografije."],
                      ["2014", "Recidiv", "Zadnji album pred premorom."],
                      ["2026", "Ni še umru", "Nova glasba. Nova postava."],
                    ].map(([year, title, text]) => (
                      <div key={year} className="flex gap-4 border-b border-black/10 py-3.5">
                        <span className="w-12 shrink-0 font-mono text-[10px] font-bold text-[#a44f19]">{year}</span>
                        <div>
                          <p className="text-sm font-bold">{title}</p>
                          <p className="mt-1 text-xs text-black/45">{text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="diskografija" className="border-t border-white/10 bg-[#080706] py-20 sm:py-24 lg:py-32">
            <div className="container-premium px-4 sm:px-6 lg:px-10">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-label text-amber/65">04 / KATALOG</p>
                  <h2 className="mt-4 text-display font-bold text-ivory" style={{ fontFamily: "var(--font-display)" }}>DISKOGRAFIJA</h2>
                </div>
                <p className="max-w-sm text-xs leading-6 text-bone/35">
                  Osem izdaj, ki oblikujejo vizualni arhiv skupine — od prvenca do Recidiva.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
                {releases.map((release) => (
                  <article key={release.year + release.title} className="group">
                    <div className="relative aspect-square overflow-hidden border border-white/10 bg-black">
                      <img
                        src={img(release.file)}
                        alt={release.title + " (" + release.year + ")"}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-3 pt-12">
                        <p className="text-[9px] font-bold tracking-[0.18em] text-amber/70">{release.year}</p>
                        <p className="mt-1 text-xs font-bold leading-tight text-white">{release.title}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-12 flex flex-wrap gap-3 border-t border-white/10 pt-10">
                <a
                  href="https://www.youtube.com/@TheDrinkersSlovenija"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-white/15 px-4 py-3 text-xs font-bold uppercase tracking-[0.17em] text-bone/60 transition hover:border-amber hover:text-amber"
                >
                  YouTube <Youtube className="h-4 w-4" />
                </a>
                <a
                  href="https://open.spotify.com/search/The%20Drinkers%20Slovenia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-white/15 px-4 py-3 text-xs font-bold uppercase tracking-[0.17em] text-bone/60 transition hover:border-amber hover:text-amber"
                >
                  Spotify <Music2 className="h-4 w-4" />
                </a>
              </div>
            </div>
          </section>

          <section className="border-t border-white/10 bg-charcoal py-20 sm:py-24 lg:py-32">
            <div className="container-premium px-4 sm:px-6 lg:px-10">
              <div className="grid gap-12 lg:grid-cols-[.65fr_1.35fr]">
                <div>
                  <p className="text-label text-amber/65">05 / ZASEDBA</p>
                  <h2 className="mt-4 text-display font-bold text-ivory" style={{ fontFamily: "var(--font-display)" }}>
                    THE<br />DRINKERS 2.0
                  </h2>
                  <p className="mt-6 max-w-sm text-sm leading-7 text-bone/35">
                    Zasedba novega poglavja združuje člane iz zgodovine skupine in novo generacijo.
                  </p>
                </div>

                <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
                  {lineup.map(([name, role], index) => (
                    <div key={name} className="bg-charcoal p-6 transition hover:bg-amber/[0.06]">
                      <span className="text-[9px] font-mono text-amber/45">0{index + 1}</span>
                      <h3 className="mt-8 text-lg font-bold text-ivory">{name}</h3>
                      <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.18em] text-bone/30">{role}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="kontakt" className="relative overflow-hidden border-t border-black/15 bg-amber text-void">
            <div className="relative mx-auto max-w-[1400px] px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28">
              <div className="grid gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.38em] text-void/55">06 / BOOKING</p>
                  <h2 className="mt-5 max-w-4xl font-display text-6xl font-semibold leading-[0.83] tracking-[-0.04em] sm:text-7xl lg:text-[8rem]" style={{ fontFamily: "var(--font-display)" }}>
                    NAREDI<br />HRUP.
                  </h2>
                  <p className="mt-7 max-w-xl text-sm leading-7 text-void/65">
                    Booking, sodelovanja, press in nastopi. Za dodatne informacije uporabite uradne kontakte skupine.
                  </p>
                </div>

                <div className="space-y-4 lg:justify-self-end lg:w-full lg:max-w-md">
                  <a
                    href="tel:+38640451250"
                    className="flex items-center justify-between border-t border-void/20 py-4 text-sm font-black uppercase tracking-[0.12em] transition hover:pl-2"
                  >
                    <span>Telefon</span>
                    <span>040 451 250</span>
                  </a>
                  <a
                    href="mailto:contact@thedrinkers.si"
                    className="flex items-center justify-between border-t border-void/20 py-4 text-sm font-black uppercase tracking-[0.1em] transition hover:pl-2"
                  >
                    <span>Email</span>
                    <span className="normal-case tracking-normal">contact@thedrinkers.si</span>
                  </a>
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <a
                      href="https://www.instagram.com/explore/tags/thedrinkers/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 border border-void/25 px-4 py-3 text-xs font-black uppercase tracking-[0.14em] transition hover:bg-void hover:text-amber"
                    >
                      Instagram <Instagram className="h-4 w-4" />
                    </a>
                    <a
                      href="https://www.facebook.com/the.drunkers.official"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 border border-void/25 px-4 py-3 text-xs font-black uppercase tracking-[0.14em] transition hover:bg-void hover:text-amber"
                    >
                      Facebook <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-white/10 bg-void">
          <div className="container-premium flex flex-col gap-5 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-10">
            <div>
              <p className="text-sm font-bold tracking-[0.2em] text-amber">THE DRINKERS</p>
              <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.28em] text-bone/20">Litija · Slovenia · Drink'n'Roll</p>
            </div>
            <div className="flex items-center gap-4 text-[9px] font-bold uppercase tracking-[0.2em] text-bone/20">
              <span>1993 — 2026</span>
              <Disc3 className="h-4 w-4" />
              <span>Official Website</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
