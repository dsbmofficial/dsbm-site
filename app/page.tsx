const beats = [
  ["MIDNIGHT ON 7 MILE", "R&B / 74 BPM", "01"],
  ["MONEY TREES", "HIP-HOP / 92 BPM", "02"],
  ["VELVET ROPE", "R&B / 68 BPM", "03"]
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <nav><a className="wordmark" href="#top">DSBM<span>®</span></a><div><a href="#beats">Beats</a><a href="#about">About</a><a href="#licensing">Licensing</a><a href="#contact">Contact</a></div></nav>
        <div className="hero-content"><p className="eyebrow">Detroit, Michigan · Est. 2024</p><h1>Darkies<br />Sampling<br /><i>Beat Mafia</i></h1><p className="hero-copy">Detroit-inspired Hip-Hop and R&amp;B Producer</p><a className="button" href="#beats">Explore the vault <b>↘</b></a></div>
        <p className="side-note">Scroll to sample<br />the sound <span>↓</span></p>
      </section>

      <section className="beats section" id="beats"><div className="section-heading"><p className="eyebrow">01 / Selected cuts</p><h2>Built for the<br /><i>after hours.</i></h2></div><div className="beat-list">{beats.map(([name, genre, number]) => <article className="beat" key={number}><span className="number">{number}</span><div><h3>{name}</h3><p>{genre}</p></div><button aria-label={`Play ${name}`}>▶</button></article>)}<a className="text-link" href="#contact">Request the full catalog <span>→</span></a></div></section>

      <section className="about section" id="about"><div className="about-image" /><div className="about-copy"><p className="eyebrow">02 / The story</p><h2>No shortcuts.<br /><i>Just soul.</i></h2><p>Darkies Sampling Beat Mafia is a Detroit-bred production house where warm vinyl dust meets late-night R&amp;B and drums hit with intent.</p><p>Every record is shaped to leave room for the artist—raw enough for the cipher, polished enough for the stage.</p><a className="text-link" href="#contact">More about DSBM <span>→</span></a></div></section>

      <section className="licensing section" id="licensing"><p className="eyebrow">03 / Clear terms</p><h2>Pick a license.<br /><i>Make it yours.</i></h2><div className="licenses"><article><p>MP3 LEASE</p><strong>$29</strong><span>For the first take</span></article><article className="featured"><p>WAV LEASE</p><strong>$79</strong><span>For the serious release</span></article><article><p>EXCLUSIVE</p><strong>Let&apos;s talk</strong><span>One artist. One record.</span></article></div></section>

      <section className="contact section" id="contact"><p className="eyebrow">04 / Lock in</p><h2>Ready when<br /><i>you are.</i></h2><a className="contact-link" href="mailto:hello@dsbmusic.com">hello@dsbmusic.com <span>↗</span></a><footer><span>© 2026 Darkies Sampling Beat Mafia</span><span>Detroit, Michigan</span><a href="#top">Back to top ↑</a></footer></section>
    </main>
  );
}
