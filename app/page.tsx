import Image from "next/image";
import BeatPlayer from "./beat-player";
import NewBeats from "./new-beats";
import TikTokLink from "./tiktok-link";

const beats = [
  ["Midnight Souls", "90 BPM  /  Boom Bap", "03:03", "night"],
  ["Dusty Memories", "78 BPM  /  Lo-Fi", "03:18", "road"],
  ["Dark Side of Mind", "85 BPM  /  Boom Bap", "03:00", "shadow"],
  ["Mirage", "Instrumental", "05:16", "mirage"],
];

export default function Home() {
  return <main className="site-shell">
    <header className="masthead">
      <a className="brand" href="#home" aria-label="Dirt Sampling Beat Mafia home"><Image className="header-logo" src="/dirt-sampling-banner.png" alt="DSBM — Dirt Sampling Beat Mafia" width={1672} height={941} priority /></a>
      <nav className="main-nav" aria-label="Main navigation"><a className="active" href="#home">Home</a><a href="#beats">Beats</a><a href="#license">License</a><a href="#about">About</a><a href="#shop">Shop</a><a href="#contact">Contact</a></nav>
      <div className="socials" aria-label="Social links"><TikTokLink /><a href="http://www.youtube.com/@turndaback" aria-label="YouTube"><svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" /></svg></a><a href="https://www.instagram.com/turndaback?igsh=amdvMWlheHgxMnd0&utm_source=qr" aria-label="Instagram"><svg aria-hidden="true" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" /></svg></a><a href="mailto:threepointshooterz.turndaback@gmail.com" aria-label="Email"><svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg></a></div>
    </header>

    <section className="hero" id="home">
      <div className="hero-copy">
        <span className="eyebrow">Dirt Sampling Beat Mafia</span>
        <h1>RAW SOUL.<br />FRESH<br /><em>ENERGY.</em></h1>
        <p>Raw soul. Dark samples. Real hip-hop.</p>
        <p className="hero-description">Hip-Hop &amp; R&amp;B, made with feeling.<br />Find the sound for your next story.</p>
        <div className="hero-actions"><a className="outline-button" href="#beats">Explore the beats <span>↗</span></a><a className="plain-link" href="#about">About DSBM</a></div>
      </div>
      <a className="featured-release" href="#beats" aria-label="Explore If You Stayed and the latest beats">
        <div className="featured-art" />
        <div className="featured-caption"><div><span className="eyebrow">New release</span><h2>If You Stayed</h2></div><span className="featured-play">03:02　▶</span></div>
      </a>
    </section>

    <section className="latest" id="beats"><div className="section-label"><h2>Latest Beats</h2><a href="#contact">View all beats <span>→</span></a></div><div className="beat-row"><NewBeats />{beats.map(([name, genre, duration, art]) => <article className="beat-item" key={name}><div className={`beat-art ${art}`} style={name === "Midnight Souls" ? { backgroundImage: "url('/midnight-souls-cover.png')", backgroundPosition: "center", filter: "none" } : name === "Dusty Memories" ? { backgroundImage: "url('/dusty-memories-cover.png')", backgroundPosition: "center", filter: "none" } : name === "Dark Side of Mind" ? { backgroundImage: "url('/dark-side-of-mind-cover.png')", backgroundPosition: "center", filter: "none" } : name === "Mirage" ? { backgroundImage: "url('/mirage-cover.png')", backgroundPosition: "center", filter: "none" } : undefined} /><div className="beat-details"><h3>{name}</h3><p>{genre}</p><div>{name === "Midnight Souls" ? <BeatPlayer src="/audio/midnight-souls.m4a" title={name} /> : name === "Dusty Memories" ? <BeatPlayer src="/audio/dusty-memories.m4a" title={name} /> : name === "Dark Side of Mind" ? <BeatPlayer src="/audio/dark-side-of-mind.m4a" title={name} /> : name === "Mirage" ? <BeatPlayer src="/audio/mirage.mp3" title={name} /> : <button aria-label={`Play ${name}`}>▶</button>}<span>{duration}</span></div></div><button className="add" aria-label={`Add ${name}`}>＋</button></article>)}</div></section>

    <section className="studio-sections">
      <article className="studio-about" id="about">
        <div className="studio-section-label"><span>01 / THE SOUND</span><span>ABOUT DSBM</span></div>
        <div className="studio-about-grid">
          <h2>OLD SOUL.<br /><span>NEW RULES.</span></h2>
          <div className="studio-story"><span className="eyebrow">Dirt Sampling Beat Mafia</span><p className="studio-lead">Soul in the samples.<br />Character in every beat.</p><p>Rooted in soul, shaped by Detroit-inspired drums. DSBM brings the warmth of sampling into Hip-Hop and R&amp;B — music for late nights, new verses, and stories still unwritten.</p><a className="studio-text-link" href="#beats">Find your sound <span>↗</span></a></div>
        </div>
        <div className="studio-genres"><span>SOULFUL R&amp;B</span><span>BOOM BAP</span><span>DETROIT INFLUENCE</span><span>SAMPLE CULTURE</span></div>
      </article>

      <article className="studio-license" id="license">
        <div className="studio-section-label"><span>02 / MAKE IT YOURS</span><span>LICENSING</span></div>
        <div className="studio-heading"><h2>Your voice.<br /><span>Our sound.</span></h2><p>Found your next beat?<br />Get in touch to discuss usage and license details.</p></div>
        <div className="studio-plans">
          <a href="#contact" className="studio-plan"><span className="plan-index">01 / BASIC</span><h3>Start something.</h3><div className="plan-price">$29.99</div><span className="plan-action">Ask about Basic <b>↗</b></span></a>
          <a href="#contact" className="studio-plan plan-featured"><span className="plan-index">02 / PREMIUM</span><h3>Take it further.</h3><div className="plan-price">$59.99</div><span className="plan-action">Ask about Premium <b>↗</b></span></a>
          <a href="#contact" className="studio-plan"><span className="plan-index">03 / EXCLUSIVE</span><h3>Make it yours.</h3><div className="plan-price">$199.99<span>+</span></div><span className="plan-action">Discuss Exclusive <b>↗</b></span></a>
        </div>
      </article>

      <article className="studio-shop" id="shop">
        <div className="studio-section-label"><span>03 / THE COLLECTION</span><span>DSBM SHOP</span></div>
        <div className="studio-shop-grid"><div><h2>BUILD YOUR<br /><span>NEXT SOUND.</span></h2><p>Sample packs. Drum kits. Loop kits.<br />Ask about the DSBM collection and availability.</p><a className="studio-shop-cta" href="mailto:threepointshooterz.turndaback@gmail.com?subject=DSBM%20Shop%20Inquiry">Shop inquiries <span>↗</span></a></div>
          <div className="studio-categories"><a href="mailto:threepointshooterz.turndaback@gmail.com?subject=Sample%20Packs"><span>01</span><strong>Sample packs</strong><b>↗</b></a><a href="mailto:threepointshooterz.turndaback@gmail.com?subject=Drum%20Kits"><span>02</span><strong>Drum kits</strong><b>↗</b></a><a href="mailto:threepointshooterz.turndaback@gmail.com?subject=Loop%20Kits"><span>03</span><strong>Loop kits</strong><b>↗</b></a></div>
        </div>
      </article>
    </section>

    <footer id="contact"><div className="brand"><strong>DSBM</strong><span>Dirt Sampling Beat Mafia</span><small>© 2024 DSBM. All rights reserved.</small></div><div className="footer-social"><p>Stay connected</p><span><a className="social-link" href="http://www.youtube.com/@turndaback" aria-label="YouTube" style={{ display: "inline-flex", pointerEvents: "auto", position: "relative", verticalAlign: "middle", zIndex: 1 }}><svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" /></svg></a>　<a className="social-link" href="https://www.instagram.com/turndaback?igsh=amdvMWlheHgxMnd0&utm_source=qr" aria-label="Instagram" style={{ display: "inline-flex", pointerEvents: "auto", position: "relative", verticalAlign: "middle", zIndex: 1 }}><svg aria-hidden="true" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" /></svg></a>　◌　𝕏　<TikTokLink /></span></div><div className="footer-contact"><p>Contact / inquiry</p><a href="mailto:threepointshooterz.turndaback@gmail.com">✉ &nbsp; threepointshooterz.turndaback@gmail.com</a></div><div className="advisory">Parental<br />Advisory</div></footer>
  </main>;
}
