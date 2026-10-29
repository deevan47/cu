import './About.css';
import Photo from '../../components/Photo';
import { Eye } from '../../components/Logo';
import { SITE } from '../../data/site';
import { PHOTOS } from '../../data/photos';
import { wa, MSG } from '../../lib/whatsapp';

const WHY = [
  ['One human. Start to finish.', 'The person who reads your message is the person who makes your gift.'],
  ['Made for one. Never mass-made.', 'Nothing comes off a shelf. Every piece is made for one person you love.'],
  ['Checked by hand. Every time.', 'Handled with care. Packed with effort. Delivered with a smile.'],
  ['Clueless? Perfect.', 'Tell me about them. I’ll find the gift that says it for you.'],
];

export default function About() {
  return (
    <>
      <section data-screen-label="About" className="about">
        <Photo className="about__photo" ratio="4/5" pad={16} label={`Photo: ${SITE.founderName}, ideally at work on an order`} src={PHOTOS.founder.src} />
        <div className="about__text">
          <h1>Hi, I’m <span className="accent">{SITE.founderName}.</span></h1>
          <p className="about__tagline">For the moment someone opens a gift, goes quiet, and realises you really thought about them.</p>
          <div className="about__body">
            <p>Tell me who it’s for and what they love. I’ll turn that into something made only for them, send you a preview, and deliver it once you approve.</p>
            <p>It’s quick, and priced so <strong>students can afford it</strong>, because showing you care shouldn’t cost a fortune.</p>
            <p>
              Cheer Up is small on purpose, so your gift gets my full attention.<br />
              <span className="about__em">My only aim is to deliver the smile you want to see.<span data-underline="1" aria-hidden="true" /></span>
            </p>
          </div>
        </div>
      </section>

      <section className="why">
        <div className="why__inner">
          <h2 data-reveal="1" className="h-section">Why one person who cares <span className="accent">beats an app.</span></h2>
          <div data-reveal="1" className="why__grid">
            {WHY.map(([h, p]) => (
              <div key={h} className="why__item">
                <Eye />
                <h3>{h}</h3>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section data-reveal="1" className="about-cta">
        <p>Now you know me. Tell me about them.</p>
        <a className="btn btn--primary" href={wa(MSG.order)} target="_blank" rel="noopener">Start their gift</a>
      </section>
    </>
  );
}
