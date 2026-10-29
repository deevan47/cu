import { useState } from 'react';
import { useApp } from '../AppContext';
import { wa, MSG } from '../lib/whatsapp';
import './OrderSheet.css';

export default function OrderSheet() {
  const { sheet, setSheet } = useApp();
  const [form, setForm] = useState({ who: '', what: '', when: '' });
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const item = sheet || { n: '', cat: '' };
  const open = !!sheet;
  const close = () => setSheet(null);

  return (
    <>
      <div className={`sheet-backdrop${open ? ' is-open' : ''}`} onClick={close} />
      <aside className={`sheet${open ? ' is-open' : ''}`} role="dialog" aria-label="Make this gift theirs" aria-hidden={open ? 'false' : 'true'}>
        <div className="sheet__bar">
          <span className="sheet__eyebrow">Make it theirs</span>
          <button className="sheet__close" onClick={close}>Close</button>
        </div>
        <div>
          <h2 className="sheet__title">{item.n}</h2>
          <p className="sheet__cat">{item.cat}</p>
        </div>
        <label className="sheet__field">Who’s it for?
          <input value={form.who} onChange={set('who')} placeholder="Their name, and who they are to you" />
        </label>
        <label className="sheet__field">What should it say or show?
          <textarea value={form.what} onChange={set('what')} rows={3} placeholder="A name, a line, a photo idea. Or “surprise me”" />
        </label>
        <label className="sheet__field">When, and where in Pune?
          <input value={form.when} onChange={set('when')} placeholder="Date and area" />
        </label>
        <p className="sheet__note">Send your photos in the chat. You’ll see a free preview before you pay anything, and your photos are deleted after delivery.</p>
        <a className="btn btn--primary sheet__send" href={wa(MSG.sheet(item, form))} target="_blank" rel="noopener">Send it on WhatsApp</a>
      </aside>
    </>
  );
}
