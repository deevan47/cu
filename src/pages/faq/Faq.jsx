import { useState } from 'react';
import './Faq.css';
import { useApp } from '../../AppContext';
import { FAQS } from '../../data/faqs';
import { wa, MSG } from '../../lib/whatsapp';
import { rise } from '../../lib/motion';
import useUpdateEffect from '../../hooks/useUpdateEffect';
import { Eye } from '../../components/Logo';

export default function Faq() {
  const { narrow } = useApp();
  const [open, setOpen] = useState(-1);   // index of the open question, -1 = all closed

  useUpdateEffect(() => { if (open > -1) rise('[data-answer]'); }, [open]);

  return (
    <section data-screen-label="FAQ" className={`faq${narrow ? ' is-narrow' : ''}`}>
      <div className="faq__intro">
        <h1>Fair questions. <span className="accent">Honest answers.</span></h1>
        <p>Still wondering? <a href={wa(MSG.order)} target="_blank" rel="noopener">Just ask me.</a></p>
      </div>
      <div className="faq__list">
        {FAQS.map((f, i) => (
          <div key={f.q} className="faq__item">
            <button className="faq__q" aria-expanded={open === i} onClick={() => setOpen((o) => (o === i ? -1 : i))}>
              <span>{f.q}</span>
              <Eye />
            </button>
            {open === i && (
              <div data-answer="1" className="faq__a">
                <p>{f.a}</p>
                {f.link && <a href={f.link}>{f.linkLabel}</a>}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
