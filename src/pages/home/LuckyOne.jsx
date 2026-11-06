import { useApp } from '../../AppContext';
import { PEOPLE } from '../../data/people';
import { CATS, catIndex } from '../../data/products';
import { wa, MSG } from '../../lib/whatsapp';
import { rise } from '../../lib/motion';
import { asset } from '../../lib/assets';
import useUpdateEffect from '../../hooks/useUpdateEffect';

// small product photo for an idea card (the category's photo, if it has one)
const thumb = (cat) => (CATS.find((c) => c.name === cat) || {}).image;

export default function LuckyOne() {
  const { person: i, setPerson, setCat } = useApp();
  const person = PEOPLE[i];

  useUpdateEffect(() => { rise('[data-idea]', 70); }, [i]);

  return (
    <section className="lucky">
      <div className="lucky__inner">
        <div data-reveal="1" className="lucky__head">
          <p className="kicker"><b>01</b>Who’s it for</p>
          <h2 className="h-section">Who’s on your <span className="accent">mind right now?</span></h2>
          <p className="lead">Tap a person. Watch the idea land.</p>
        </div>
        <div className="lucky__body">
          <div role="tablist" aria-label="Who are you thinking of" data-reveal="1" className="who">
            {PEOPLE.map((p, idx) => (
              <button key={p.k} role="tab" className="who__item" aria-selected={idx === i} onClick={() => setPerson(idx)}>
                <i>{String(idx + 1).padStart(2, '0')}</i><span>{p.k}</span>
              </button>
            ))}
          </div>

          {person.ideas.length > 0 && (
            <div className="lucky__ideas">
              {person.ideas.map(([cat, line]) => (
                <div key={cat + line} data-idea="1" className="idea">
                  {thumb(cat) && <img className="idea__thumb" src={asset(thumb(cat))} alt="" />}
                  <div className="idea__main">
                    <span className="idea__cat">{cat}</span>
                    <p className="idea__line">{line}</p>
                  </div>
                  <div className="idea__actions">
                    <a className="tlink idea__want" href={wa(MSG.idea(person.k, cat, line))} target="_blank" rel="noopener">This is the one</a>
                    <a className="idea__more" href="#/products" onClick={() => setCat(catIndex(cat))}>See the options</a>
                  </div>
                </div>
              ))}
            </div>
          )}

          {person.ideas.length === 0 && (
            <div data-idea="1" className="lucky__help">
              <p>Tell me three things about them. I’ll find the feeling.</p>
              <a className="btn btn--light btn--md" href={wa(MSG.suggest)} target="_blank" rel="noopener">Help me find it</a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
