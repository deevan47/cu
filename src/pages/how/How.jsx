import './How.css';
import { STEPS } from '../../data/steps';
import { wa, MSG } from '../../lib/whatsapp';

export default function How() {
  return (
    <>
      <section data-screen-label="How it works" className="how-hero">
        <h1 className="h-page" style={{ maxWidth: '11ch' }}>From a feeling to <span className="accent">their doorbell.</span></h1>
        <p>Seven steps. All on WhatsApp. Not a rupee until you’ve seen the design and loved it.</p>
      </section>

      <section className="how-steps-section">
        {/* data-steps / data-line / data-dot are used by lib/motion.js (drawLine) */}
        <div data-steps="1" className="steps">
          <div className="steps__track" />
          <div data-line="1" className="steps__fill" />
          {STEPS.map(([t, d], i) => (
            <div key={t} className="step">
              <span data-dot="1" className="step__dot">{i + 1}</span>
              <h2>{t}</h2>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section data-reveal="1" className="how-cta">
        <div className="how-cta__box">
          <p>The first step costs nothing. Just say hi.</p>
          <a className="btn btn--light" href={wa(MSG.order)} target="_blank" rel="noopener">Say hi on WhatsApp</a>
        </div>
      </section>
    </>
  );
}
