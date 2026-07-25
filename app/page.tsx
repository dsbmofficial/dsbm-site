import BeatPlayer from "./beat-player";

const beats = [
  ["Midnight Souls", "90 BPM  /  Boom Bap", "03:03", "night"],
  ["Dusty Memories", "78 BPM  /  Lo-Fi", "03:18", "road"],
  ["Dark Side of Mind", "85 BPM  /  Boom Bap", "03:00", "shadow"],
  ["No Light, No Hope", "92 BPM  /  Boom Bap", "02:51", "palms"],
];

export default function Home() {
  return <main className="site-shell">
    <header className="masthead">
      <a className="brand" href="#home"><strong>DSBM</strong><span>Darkies Sampling Beat Mafia</span></a>
      <nav className="main-nav" aria-label="Main navigation"><a className="active" href="#home">Home</a><a href="#beats">Beats</a><a href="#license">License</a><a href="#about">About</a><a href="#shop">Shop</a><a href="#contact">Contact</a></nav>
      <div className="socials" aria-label="Social links"><span>◉</span><span>◎</span><span>✉</span></div>
    </header>

    <section className="hero" id="home">
      <aside className="hero-rail"><span>DSBM</span><i /><b>✛</b></aside>
      <div className="hero-art" />
      <div className="hero-copy"><h1>Darkies<br />Sampling<br />Beat Mafia</h1><p>Raw soul. Dark samples. Real hip-hop.</p><div className="hero-actions"><a className="outline-button" href="#beats">Browse beats <span>→</span></a><a className="plain-link" href="#about">About DSBM</a></div></div>
      <ol className="hero-pages"><li className="selected">01</li><li>02</li><li>03</li></ol>
    </section>

    <section className="latest" id="beats"><div className="section-label"><h2>Latest Beats</h2><a href="#contact">View all beats <span>→</span></a></div><div className="beat-row">{beats.map(([name, genre, duration, art]) => <article className="beat-item" key={name}><div className={`beat-art ${art}`} /><div className="beat-details"><h3>{name}</h3><p>{genre}</p><div>{name === "Midnight Souls" ? <BeatPlayer src="/audio/midnight-souls.m4a" title={name} /> : name === "Dusty Memories" ? <BeatPlayer src="/audio/dusty-memories.m4a" title={name} /> : name === "Dark Side of Mind" ? <BeatPlayer src="/audio/dark-side-of-mind.m4a" title={name} /> : <button aria-label={`Play ${name}`}>▶</button>}<span>{duration}</span></div></div><button className="add" aria-label={`Add ${name}`}>＋</button></article>)}</div></section>

    <section className="columns">
      <article className="about-panel" id="about"><h2>About DSBM</h2><div className="gold-line" /><div className="about-content"><div className="about-art" /><div><p>Darkies Sampling Beat Mafia is Detroit-bred sound craft: warm vinyl dust, sharp drums, and melodies built for the spaces between midnight and morning.</p><p>Influenced by soul records, 90s hip-hop and the quiet confidence of the city, every beat leaves room for an artist to become the moment.</p><a className="outline-button small" href="#contact">View more <span>→</span></a></div></div></article>
      <article className="license-panel" id="license"><h2>License</h2><div className="gold-line" /><p className="choose">Choose your license</p><div className="license-list"><a href="#contact"><span>Basic license</span><b>$29.99</b><i>›</i></a><a href="#contact"><span>Premium license</span><b>$59.99</b><i>›</i></a><a href="#contact"><span>Exclusive license</span><b>$199.99+</b><i>›</i></a></div><a className="info-link" href="#contact">License info <span>→</span></a></article>
      <article className="shop-panel" id="shop"><h2>Shop</h2><div className="gold-line" /><div className="shop-content"><div className="shop-art" /><div><p>Sample packs, drum kits, loop kits, and select DSBM pieces for the crate.</p><a className="outline-button small" href="#contact">View shop <span>→</span></a></div></div></article>
    </section>

    <footer id="contact"><div className="brand"><strong>DSBM</strong><span>Darkies Sampling Beat Mafia</span><small>© 2024 DSBM. All rights reserved.</small></div><div className="footer-social"><p>Stay connected</p><span><a className="social-link" href="http://www.youtube.com/@turndaback" aria-label="YouTube" style={{ display: "inline-flex", pointerEvents: "auto", position: "relative", verticalAlign: "middle", zIndex: 1 }}><svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" /></svg></a>　<a className="social-link" href="https://www.instagram.com/turndaback?igsh=amdvMWlheHgxMnd0&utm_source=qr" aria-label="Instagram" style={{ display: "inline-flex", pointerEvents: "auto", position: "relative", verticalAlign: "middle", zIndex: 1 }}><svg aria-hidden="true" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" /></svg></a>　◌　𝕏</span></div><div className="footer-contact"><p>Contact / inquiry</p><a href="mailto:hello@dsbmusic.com">✉ &nbsp; dsbm.mafia@gmail.com</a></div><div className="advisory">Parental<br />Advisory</div></footer>
  </main>;
}
