import { useState } from 'react';
import './Request.css';
import { wa, MSG } from '../../lib/whatsapp';

// What kind of request is it? Edit freely.
const KINDS = ['A new product', 'A gift for a specific need', 'A bulk or team order', 'A change to something you make', 'A suggestion for you'];
// Tap-to-fill starting points for the description box. Edit freely.
const STARTERS = [
  'A gift for the whole team',
  'Favours for a wedding or anniversary',
  'Something for their desk',
  'A surprise box with a few things inside',
  'A notebook or diary with their name',
  'A tote bag with an inside joke',
];

export default function Request() {
  const [f, setF] = useState({ name: '', kind: KINDS[0], what: '', qty: '', when: '', budget: '' });
  const set = (k) => (e) => setF((v) => ({ ...v, [k]: e.target.value }));
  const fill = (text) => setF((v) => ({ ...v, what: v.what ? `${v.what.trim()} ${text}` : text }));

  return (
    <section data-screen-label="Request" className="request">
      <h1 className="h-page" style={{ maxWidth: '13ch' }}>Not in our catalogue? <span className="accent">Request a new one.</span></h1>
      <p className="lead" style={{ maxWidth: '36ch' }}>Couldn’t find what you need? Tell me. A new product, a gift for a particular need, a team order. If it’s not in the catalogue, I’ll make it and deliver it. I read every request myself.</p>

      <div className="request__grid">
        <form className="request__form" onSubmit={(e) => e.preventDefault()}>
          <div className="req__field">
            <span className="req__label">What kind of request is it?</span>
            <div className="req__chips" role="group" aria-label="Kind of request">
              {KINDS.map((k) => (
                <button key={k} type="button" className="req__chip" aria-pressed={f.kind === k} onClick={() => setF((v) => ({ ...v, kind: k }))}>{k}</button>
              ))}
            </div>
          </div>

          <label className="req__field">
            <span className="req__label">Tell me about it</span>
            <textarea value={f.what} onChange={set('what')} rows={5} placeholder="What is it, who’s it for, and what should it say or show? A rough idea is fine." />
          </label>
          <div className="req__starters">
            <span>Need a nudge?</span>
            {STARTERS.map((s) => <button key={s} type="button" className="req__starter" onClick={() => fill(s)}>{s}</button>)}
          </div>

          <div className="req__row">
            <label className="req__field">
              <span className="req__label">How many?</span>
              <input value={f.qty} onChange={set('qty')} placeholder="Just one, or about 20" />
            </label>
            <label className="req__field">
              <span className="req__label">Budget, if you have one</span>
              <input value={f.budget} onChange={set('budget')} placeholder="Optional" />
            </label>
          </div>
          <label className="req__field">
            <span className="req__label">When, and where in Pune?</span>
            <input value={f.when} onChange={set('when')} placeholder="Date and area" />
          </label>
          <label className="req__field">
            <span className="req__label">Your name</span>
            <input value={f.name} onChange={set('name')} placeholder="Optional" />
          </label>

          <div className="req__send">
            <a className="btn btn--primary" href={wa(MSG.request(f))} target="_blank" rel="noopener">Send my request on WhatsApp</a>
            <p>You can share photos or a sketch in the chat.</p>
          </div>
        </form>

        <aside className="request__side">
          <h2>What happens next</h2>
          <ol>
            <li><b>I read it myself</b> and reply on WhatsApp.</li>
            <li><b>I confirm the details</b> and the price with you.</li>
            <li><b>You get a free preview</b> first. Nothing is printed, and you pay nothing, until you’ve approved it.</li>
          </ol>
          <p className="request__note">Delivering in Pune only for now. Your photos are deleted after delivery.</p>
        </aside>
      </div>
    </section>
  );
}
