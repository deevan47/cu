import { useEffect, useRef, useState } from 'react';
import './Contact.css';
import { SITE } from '../../data/site';
import { wa, MSG } from '../../lib/whatsapp';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const timer = useRef(0);
  useEffect(() => () => clearTimeout(timer.current), []);

  const copyNumber = () => {
    try {
      const pr = navigator.clipboard && navigator.clipboard.writeText(SITE.phoneShort);
      if (pr && pr.catch) pr.catch(() => {});
    } catch (e) { /* clipboard not available */ }
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section data-screen-label="Contact" className="contact">
      <h1 className="h-page" style={{ maxWidth: '12ch' }}>Someone’s about to feel special. <span className="accent">Message me.</span></h1>
      <p className="lead" style={{ maxWidth: '34ch' }}>Orders, questions, half-formed ideas. Every message lands on my phone, not a team’s.</p>

      <div className="contact__grid">
        <div className="contact__main">
          <p className="contact__label">WhatsApp</p>
          <a className="contact__number" href={wa(MSG.order)} target="_blank" rel="noopener">{SITE.phoneDisplay}</a>
          <div className="contact__actions">
            <a className="btn btn--primary" href={wa(MSG.order)} target="_blank" rel="noopener">Start their gift on WhatsApp</a>
            <button className="contact__copy" onClick={copyNumber}>{copied ? 'Copied' : 'Copy number'}</button>
          </div>
        </div>
        <div className="contact__side">
          <div>
            <p className="contact__label">Email</p>
            <a className="contact__email" href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </div>
          <div>
            <p className="contact__label">Where</p>
            <p>{SITE.city}. Ordered online, delivered to their door.</p>
          </div>
          <div>
            <p className="contact__label">Your photos</p>
            <p>Yours alone, and deleted right after delivery. <a href="#/privacy">Privacy policy</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}
