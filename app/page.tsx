const beats = [
  ["COLD SUMMER", "R&B · 72 BPM", "01"],
  ["MERCY DRIVE", "HIP-HOP · 88 BPM", "02"],
  ["VELVET TAX", "ALT R&B · 66 BPM", "03"]
];

const licenses = [
  ["MP3 Lease", "$29", "Instant delivery · 2,500 streams"],
  ["WAV Lease", "$79", "HQ WAV · 25,000 streams"],
  ["Unlimited", "$149", "No stream cap · Performance rights"],
  ["Exclusive", "Inquire", "One artist · Full ownership"],
];

export default function Home() {
  return <main>
    <section className="home" id="home">
      <header className="nav"><a className="mark" href="#home">D<span>S</span>BM<sup>®</sup></a><nav><a href="#beats">Latest Beats</a><a href="#about">About</a><a href="#license">License</a><a href="#shop">Shop</a><a href="#contact">Contact</a></nav><a className="nav-cta" href="#beats">Browse vault <span>↗</span></a></header>
      <div className="hero-grid"><div className="hero-intro"><p className="kicker">Independent sound house · Detroit</p><h1>Darkies<br /><em>Sampling</em><br />Beat Mafia</h1><div className="hero-bottom"><p>Detroit-inspired hip-hop &amp; R&amp;B producer, crafting records for the moments after midnight.</p><a className="round-arrow" href="#beats" aria-label="Explore latest beats">↓</a></div></div><aside className="hero-aside"><p>Volume 01</p><p>Est. 2024</p><div className="hero-rule" /><p className="vertical">Good music costs something.</p></aside></div>
      <div className="hero-credit"><span>Photography / Detroit after dark</span><span>Scroll to enter</span></div>
    </section>

    <div className="ticker" aria-label="DSBM tagline"><div>Detroit sound system <b>✦</b> Darkies Sampling Beat Mafia <b>✦</b> Detroit sound system <b>✦</b> Darkies Sampling Beat Mafia <b>✦</b></div></div>

    <section className="beats wrap" id="beats"><div className="section-top"><p className="index">01 / Latest beats</p><p>Selected records from<br />the current vault.</p></div><h2>Fresh from<br /><em>the furnace.</em></h2><div className="beat-grid">{beats.map(([name, type, number]) => <article className="beat-card" key={number}><div className={`cover cover-${number}`}><span>{number}</span><button aria-label={`Preview ${name}`}>▶</button></div><div className="beat-info"><div><h3>{name}</h3><p>{type}</p></div><span className="duration">2:34</span></div></article>)}</div><a className="underlink" href="#contact">Request full beat catalog <span>↗</span></a></section>

    <section className="statement" id="about"><p className="index">02 / The DSBM ethos</p><div><h2>The beat is only<br />the <em>beginning.</em></h2><p>Built from soul, tension, and the quiet confidence of a city that never needed permission. DSBM makes room for a voice to become a record.</p><a className="underlink dark" href="#contact">Inside the mafia <span>↗</span></a></div></section>

    <section className="studio"><div className="studio-image" /><div className="studio-copy"><p className="index">From Detroit, with intent</p><p className="large-copy">Every sample is a detail. Every drum is a decision. Nothing here is accidental.</p><div className="signature">DSBM</div></div></section>

    <section className="license wrap" id="license"><div className="section-top"><p className="index">03 / Licensing</p><p>Clear terms. Clean files.<br />No hidden conversations.</p></div><h2>Make the<br /><em>record yours.</em></h2><div className="license-table">{licenses.map(([name, price, detail], i) => <article key={name} className={i === 1 ? "recommended" : ""}><span className="license-number">0{i + 1}</span><h3>{name}</h3><strong>{price}</strong><p>{detail}</p><a href="#contact">Select <span>↗</span></a></article>)}</div></section>

    <section className="shop" id="shop"><div className="shop-image"><p>DSBM<br /><em>Supply</em></p></div><div className="shop-info"><p className="index">04 / Shop</p><h2>Wear the<br /><em>frequency.</em></h2><p>Limited-run essentials for the people who recognize the first four bars.</p><a className="button-gold" href="#contact">View DSBM supply <span>↗</span></a></div></section>

    <section className="contact wrap" id="contact"><p className="index">05 / Contact</p><h2>Let&apos;s make<br />something <em>felt.</em></h2><a className="email" href="mailto:hello@dsbmusic.com">hello@dsbmusic.com <span>↗</span></a><footer><div className="mark">D<span>S</span>BM<sup>®</sup></div><div><a href="#home">Home</a><a href="#beats">Beats</a><a href="#license">License</a><a href="#shop">Shop</a></div><p>© 2026 Darkies Sampling Beat Mafia<br />Detroit, Michigan</p></footer></section>
  </main>;
}
