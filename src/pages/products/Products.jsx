import './Products.css';
import { useApp } from '../../AppContext';
import { CATS } from '../../data/products';
import { wa, MSG } from '../../lib/whatsapp';
import { rise } from '../../lib/motion';
import useUpdateEffect from '../../hooks/useUpdateEffect';
import { Eye } from '../../components/Logo';
import Photo from '../../components/Photo';

export default function Products() {
  const { narrow, cat: i, setCat, setSheet } = useApp();
  const cat = CATS[i];

  useUpdateEffect(() => { rise('[data-catname]'); rise('[data-variant]', 70); }, [i]);

  return (
    <section data-screen-label="Products" className={`products${narrow ? ' is-narrow' : ''}`}>
      <h1 className="h-page" style={{ maxWidth: '12ch' }}>Pick a gift. <span className="accent">Pour your heart into it.</span></h1>
      <p className="lead" style={{ maxWidth: '36ch' }}>Six gifts. Endless ways to say what words can’t.</p>

      <div className="products__layout">
        <div role="tablist" aria-label="Gift types" className="cat-tabs">
          {CATS.map((c, n) => (
            <button key={c.name} role="tab" className="cat-tab" aria-selected={n === i} onClick={() => setCat(n)}>
              <Eye />
              <span>{c.name}</span>
            </button>
          ))}
        </div>

        <div>
          <div data-catname="1" className="cat-head">
            <h2>{cat.name}</h2>
            <p>{cat.line}</p>
          </div>
          <div className="variants">
            {cat.variants.map((v) => (
              <article key={v.n} data-variant="1" className="variant">
                <Photo ratio="4/5" label={`Photo: ${v.n.toLowerCase()}`} src={v.image} />
                <h3>{v.n}</h3>
                <p className="variant__desc">{v.d}</p>
                <p className="variant__price">{v.price}</p>
                <div className="variant__actions">
                  <button className="btn btn--primary btn--xs" onClick={() => setSheet({ n: v.n, cat: cat.name })}>Make it theirs</button>
                  <a className="tlink variant__ask" href={wa(MSG.question(v.n, cat.name))} target="_blank" rel="noopener">Ask me anything</a>
                </div>
              </article>
            ))}
          </div>
          <div className="products__help">
            <p>Can’t decide? Tell me about them. I’ll find the feeling.</p>
            <a className="btn btn--primary btn--sm" href={wa(MSG.suggest)} target="_blank" rel="noopener">Help me find it</a>
          </div>
        </div>
      </div>
    </section>
  );
}
