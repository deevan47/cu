import { useApp } from '../../AppContext';
import { CATS } from '../../data/products';
import Photo from '../../components/Photo';

export default function Categories() {
  const { narrow, setCat } = useApp();
  return (
    <section className="ways">
      <div data-reveal="1" className="ways__head">
        <h2 className="h-section">Six ways to say <span className="accent">“you matter to me.”</span></h2>
        <a className="tlink ways__all" href="#/products">See them all</a>
      </div>
      <div data-reveal="1" className={`ways__grid${narrow ? ' is-narrow' : ''}`}>
        {CATS.map((c, i) => (
          <a key={c.name} className="cat-card" href="#/products" onClick={() => setCat(i)}>
            <Photo ratio="3/4" label={`Photo: ${c.name.toLowerCase()}`} src={c.image} />
            <div className="cat-card__name">{c.name}</div>
            <div className="cat-card__tag">{c.tag}</div>
          </a>
        ))}
      </div>
    </section>
  );
}
