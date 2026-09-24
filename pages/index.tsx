import Head from "next/head";
import Link from "next/link";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";\n\nconst promoImage = "https://www.rockline.si/wp-content/uploads/2026/09/TheDrinkers2026promo.jpg";
const liveImage = "https://www.rocker.si/wp-content/uploads/2026/09/The-Drinkers-2026-1.jpg";
const singleImage = "https://i.ytimg.com/vi/SvPAsFE3Y_8/maxresdefault.jpg";

const releases = [
  ["1995", "Lepi in trezni", "/images/album-lepi-in-trezni.jpg"],
  ["1997", "Žeja", "/images/album-zeja.jpg"],
  ["1999", "Pivolucija", "/images/album-pivolucija.jpg"],
  ["1999", "Zadnja večerja", "/images/album-zadnja-vecerja.jpg"],
  ["2001", "De best od", "/images/album-de-best-od.jpg"],
  ["2003", "Prohibicija", "/images/album-prohibicija.jpg"],
  ["2007", "Hajdi", "/images/album-hajdi.jpg"],
  ["2014", "Recidiv", "/images/album-recidiv.jpg"],
];

const lineup = [
  ["01", "Domen Kolenc", "Vokal"],
  ["02", "Robert Likar", "Kitara · vokal"],
  ["03", "Primož Trebec", "Klaviature · vokal"],
  ["04", "Kristian Buovski", "Bas"],
  ["05", "Janez Grošelj", "Bobni"],
  ["06", "David Zavolovšek", "Kitara"],
];

const shows = [
  {
    date: "25",
    month: "SEP",
    year: "2026",
    place: "Blunout",
    city: "Domžale",
    meta: "20:30 · koncert nove zasedbe",
    href: "https://blunout.si/vstopnice/",
    featured: true,
  },
  {
    date: "24",
    month: "OKT",
    year: "2026",
    place: "KluBar",
    city: "Kranj",
    meta: "20:30 · CHATEAU & The Drinkers",
    href: "https://klubar.si/vstopnice/",
    featured: false,
  },
];

const archive = [
  ["1993", "Začetek", "Litija"],
  ["1995", "Lepi in trezni", "Prvi album"],
  ["1997", "Žeja", "Prebojni katalog"],
  ["2014", "Recidiv", "Zadnji album pred premorom"],
  ["2017", "Premor", "Po Kolijevi smrti"],
  ["2026", "Ni še umru", "Nova zasedba · nov začetek"],
];

export default function Home() {
  return (
    <>
      <Head>
        <title>The Drinkers — Ni še umru</title>
        <meta name="description" content="The Drinkers. Litija, Slovenija. Drink'n'roll od 1993. Nova zasedba, novi single Ni še umru, novi koncerti." />
        <meta property="og:title" content="The Drinkers — Ni še umru" />
        <meta property="og:description" content="Nova zasedba. Nova glasba. Ista drink'n'roll zgodba." />
        <meta property="og:image" content={promoImage} />
        <meta name="theme-color" content="#090806" />\n        <link rel="icon" href={`${basePath}/favicon.svg`} />
        <link rel="canonical" href="https://thedrinkers.si/" />
      </Head>

      <div className="drinkers-site">
        <header className="site-header">
          <div className="site-header-inner">
            <Link href="/" className="brand-mark">
              <span>THE</span>
              <strong>DRINKERS</strong>
            </Link>

            <nav className="desktop-nav" aria-label="Glavna navigacija">
              <a href="#glasba">Glasba</a>
              <a href="#v-zivo">V živo</a>
              <a href="#zgodba">Zgodba</a>
              <a href="#diskografija">Diskografija</a>
              <a href="#zasedba">Zasedba</a>
            </nav>

            <a className="header-booking" href="#booking">
              BOOKING <span>↗</span>
            </a>
          </div>
        </header>

        <main>
          <section className="hero-2026" id="top">
            <div className="hero-image-wrap">
              <img src={promoImage} alt="The Drinkers 2026" className="hero-image" fetchPriority="high" />
              <div className="hero-image-shade" />
              <div className="hero-image-grain" />
            </div>

            <div className="hero-copy">
              <p className="eyebrow">LITIJA · SLOVENIJA · 1993 — 2026</p>
              <h1>
                THE
                <span>DRINKERS</span>
              </h1>
              <div className="hero-bottom">
                <div className="hero-intro">
                  <div className="hero-kicker">THE COMEBACK</div>
                  <p>
                    Nova zasedba. Nova glasba. Ista zgodba.
                    <strong> Ni še umru.</strong>
                  </p>
                </div>
                <a className="hero-cta" href="#glasba">
                  <span>POSLUŠAJ NOVI SINGLE</span>
                  <i>↓</i>
                </a>
              </div>
            </div>

            <div className="hero-side-note">
              <span>DRINK&apos;N&apos;ROLL</span>
              <span>02.0 / 26</span>
            </div>

            <div className="hero-ticker">
              <div className="ticker-track">
                <span>NI ŠE UMRU</span>
                <b>•</b>
                <span>THE DRINKERS 2.0</span>
                <b>•</b>
                <span>BACK ON STAGE</span>
                <b>•</b>
                <span>LITIJA</span>
                <b>•</b>
                <span>NI ŠE UMRU</span>
                <b>•</b>
                <span>THE DRINKERS 2.0</span>
                <b>•</b>
                <span>BACK ON STAGE</span>
                <b>•</b>
              </div>
            </div>
          </section>

          <section className="single-feature" id="glasba">
            <div className="section-topline">
              <span>01 / GLASBA</span>
              <span>2026 — NOVO POGLAVJE</span>
            </div>

            <div className="single-grid">
              <div className="single-art">
                <img src={singleImage} alt="The Drinkers — Ni še umru" />
                <a
                  className="single-play"
                  href="https://www.youtube.com/watch?v=SvPAsFE3Y_8"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Predvajaj Ni še umru na YouTubu"
                >
                  <span>PLAY</span>
                  <i>↗</i>
                </a>
                <div className="single-art-label">THE DRINKERS / 2026</div>
              </div>

              <div className="single-copy">
                <div className="single-word">NOVO</div>
                <h2>NI ŠE<br /><em>UMRU.</em></h2>
                <p className="single-lead">
                  Po skoraj desetletju je drink&apos;n&apos;roll nazaj na odru.
                  Prvi novi singel nove postave je izjava brez nostalgije:
                  zgodba skupine gre naprej.
                </p>

                <div className="credit-grid">
                  <div>
                    <small>BESEDILO</small>
                    <strong>Domen Kolenc</strong>
                  </div>
                  <div>
                    <small>GLASBA</small>
                    <strong>Robert Likar</strong>
                  </div>
                  <div>
                    <small>VIDEO</small>
                    <strong>Rožle Kisovec</strong>
                  </div>
                  <div>
                    <small>FORMAT</small>
                    <strong>Single · 2026</strong>
                  </div>
                </div>

                <div className="single-links">
                  <a href="https://www.youtube.com/watch?v=SvPAsFE3Y_8" target="_blank" rel="noopener noreferrer">YouTube ↗</a>
                  <a href="https://open.spotify.com/search/The%20Drinkers%20Ni%20%C5%A1e%20umru" target="_blank" rel="noopener noreferrer">Spotify ↗</a>
                </div>
              </div>
            </div>
          </section>

          <section className="live-section" id="v-zivo">
            <div className="section-topline light">
              <span>02 / V ŽIVO</span>
              <span>2026 DATUMI</span>
            </div>

            <div className="live-head">
              <h2>SPET<br /><span>NA ODRU.</span></h2>
              <p>
                Prvi veliki nastopi nove postave so že napovedani.
                Stran zdaj kaže samo preverjene aktualne datume.
              </p>
            </div>

            <div className="shows">
              {shows.map((show) => (
                <a
                  key={show.place}
                  href={show.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={"show-row" + (show.featured ? " featured" : "")}
                >
                  <div className="show-date">
                    <strong>{show.date}</strong>
                    <span>{show.month} / {show.year}</span>
                  </div>
                  <div className="show-venue">
                    <small>{show.meta}</small>
                    <h3>{show.place}</h3>
                    <p>{show.city}</p>
                  </div>
                  <div className="show-action">
                    <span>{show.featured ? "VSTOPNICE" : "INFO / VSTOPNICE"}</span>
                    <i>↗</i>
                  </div>
                </a>
              ))}
            </div>
          </section>

          <section className="story-section" id="zgodba">
            <div className="story-image">
              <img src={liveImage} alt="The Drinkers 2026 promocijska fotografija" loading="lazy" />
              <div className="story-image-caption">
                <span>THE DRINKERS 2.0</span>
                <span>PHOTO / ŠPELA OSTREŽ</span>
              </div>
            </div>

            <div className="story-copy">
              <div className="section-topline dark">
                <span>03 / ZGODBA</span>
                <span>1993 — 2026</span>
              </div>
              <div className="story-number">33</div>
              <h2>ENA ZGODBA.<br /><span>NOVO POGLAVJE.</span></h2>
              <p className="story-lead">
                The Drinkers so svojo pot začeli leta 1993 v Litiji. Po obdobju
                premora je leto 2026 prineslo nepričakovan povratek:
                Jevniški Retro Džuboks, nova kemija med glasbeniki in nova postava.
              </p>
              <p>
                Vokal je prevzel Domen Kolenc, prvi novi singel pa je nastal iz
                njegovega besedila in glasbe Roberta Likarja. The Drinkers 2.0
                nadaljujejo prepoznavni drink&apos;n&apos;roll, vendar gledajo naprej.
              </p>

              <div className="timeline">
                {archive.map(([year, title, detail]) => (
                  <div key={year} className={year === "2026" ? "timeline-item current" : "timeline-item"}>
                    <span>{year}</span>
                    <div>
                      <strong>{title}</strong>
                      <small>{detail}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="discography-section" id="diskografija">
            <div className="section-topline light">
              <span>04 / KATALOG</span>
              <span>ARCHIVE</span>
            </div>
            <div className="discography-head">
              <h2>DISKO<br /><span>GRAFIJA.</span></h2>
              <p>Osem izdaj. Trideset let zgodovine. Vizualni arhiv skupine, postavljen v ospredje.</p>
            </div>

            <div className="albums-grid">
              {releases.map(([year, title, file], index) => (
                <article key={title + year} className={"album-card album-" + (index + 1)}>
                  <div className="album-image">
                    <img src={`${basePath}${file}`} alt={title + " (" + year + ")"} loading="lazy" />
                    <span>{year}</span>
                  </div>
                  <div className="album-meta">
                    <strong>{title}</strong>
                    <small>{index === 0 ? "DEBUT" : index === releases.length - 1 ? "LAST ALBUM" : "THE DRINKERS"}</small>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="lineup-section" id="zasedba">
            <div className="lineup-photo">
              <img src={promoImage} alt="The Drinkers 2026" loading="lazy" />
              <div className="lineup-overlay">
                <span>THE DRINKERS 2.0</span>
                <strong>NOVA POSTAVA.</strong>
              </div>
            </div>
            <div className="lineup-copy">
              <div className="section-topline dark">
                <span>05 / ZASEDBA</span>
                <span>LITIJA</span>
              </div>
              <h2>ŠEST LJUDI.<br /><span>EN GLAS.</span></h2>
              <p>Nova postava povezuje zgodovino skupine z novo generacijo in novimi skladbami.</p>

              <div className="members">
                {lineup.map(([num, name, role]) => (
                  <div key={name} className="member-row">
                    <span>{num}</span>
                    <strong>{name}</strong>
                    <small>{role}</small>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="press-strip">
            <div className="press-mark">2026</div>
            <p>
              Nova glasba. Novi koncerti. Nov frontman.
              <strong> The Drinkers so nazaj.</strong>
            </p>
            <a href="https://www.rockline.si/opojni-napitki-eksoticne-plesalke-in-zupnik-the-drinkers-so-nazaj/" target="_blank" rel="noopener noreferrer">
              PREBERI ZGODBO ↗
            </a>
          </section>

          <section className="booking-section" id="booking">
            <div className="booking-top">
              <span>06 / BOOKING</span>
              <span>THE DRINKERS · LIVE</span>
            </div>
            <div className="booking-main">
              <h2>SPRAVI<br /><em>NAS NA ODER.</em></h2>
              <div className="booking-side">
                <p>Koncerti, festivali, klubi, sodelovanja in press.</p>
                <a href="tel:+38640451250" className="booking-phone">040 451 250 <span>↗</span></a>
                <div className="booking-socials">
                  <a href="https://www.facebook.com/the.drunkers.official" target="_blank" rel="noopener noreferrer">Facebook</a>
                  <a href="https://www.instagram.com/explore/tags/thedrinkers/" target="_blank" rel="noopener noreferrer">Instagram</a>
                  <a href="https://www.youtube.com/@TheDrinkersSlovenija" target="_blank" rel="noopener noreferrer">YouTube</a>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="site-footer">
          <div className="footer-brand">THE DRINKERS</div>
          <div className="footer-meta">LITIJA · SLOVENIA · DRINK&apos;N&apos;ROLL</div>
          <a href="#top">NA VRH ↑</a>
        </footer>
      </div>
    </>
  );
}
