import { useState } from 'react';
import { wa, MSG } from '../../lib/whatsapp';

// Tap-to-fill ideas. Edit freely.
const IDEAS = ['A gift for the whole team', 'Something for their desk', 'Favours for a wedding or anniversary', 'A tote bag with an inside joke'];

// Big request box right under the hero: ask for a gift before browsing anything.
export default function RequestBand() {
  const [what, setWhat] = useState('');
  const add = (t) => setWhat((w) => (w ? `${w.trim()} ${t}` : t));
  return (
    <section className="reqband" aria-labelledby="reqband-title">
      <div className="reqband__inner">
        <div className="reqband__copy">
          <p className="reqband__eyebrow">Not in our catalogue?</p>
          <h2 id="reqband-title" className="reqband__title">Have a gift in mind? <span>Request it now.</span></h2>
          <p className="reqband__lead">Describe it in a line. I’ll make it and deliver it. No need to browse first.</p>
        </div>
        <form className="reqband__form" onSubmit={(e) => e.preventDefault()}>
          <textarea
            aria-label="Describe the gift you’d like"
            value={what}
            onChange={(e) => setWhat(e.target.value)}
            rows={3}
            placeholder="Who’s it for, and what should it be? A rough idea is fine."
          />
          <div className="reqband__ideas">
            {IDEAS.map((t) => <button key={t} type="button" onClick={() => add(t)}>{t}</button>)}
          </div>
          <div className="reqband__actions">
            <a className="btn btn--light btn--md" href={wa(MSG.request({ name: '', kind: 'A new product', what }))} target="_blank" rel="noopener">Send my request on WhatsApp</a>
            <a className="reqband__more" href="#/request">Add quantity, budget or date</a>
          </div>
        </form>
      </div>
    </section>
  );
}
