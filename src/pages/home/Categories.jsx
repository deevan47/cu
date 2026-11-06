import { useApp } from '../../AppContext';
import { CATS } from '../../data/products';
import Photo from '../../components/Photo';

// "Six ways": a plain grid of the six gift types.
export default function Categories() {
  const { setCat } = useApp();
  return (
    <section className="ways">
      <div className="ways__head" data-reveal="1">
        <div>
          <p className="kicker"><b>03</b>The gifts</p>
          <h2 className="h-section">Six ways to say <span className="accent">“you matter to me.”</span></h2>
        </div>
        <a className="tlink ways__all" href="#/products">See them all</a>
      </div>
      <div data-reveal="1" className="ways__grid">
        {CATS.map((c, i) => (
          <a key={c.name} className="cat-card" href="#/products" onClick={() => setCat(i)}>
            <Photo ratio="4/5" label={`Photo: ${c.name.toLowerCase()}`} src={c.image} />
            <div className="cat-card__name">{c.name}</div>
            <div className="cat-card__tag">{c.tag}</div>
          </a>
        ))}
      </div>
      <p className="ways__more" data-reveal="1">Didn’t find yours in the catalogue? <a className="tlink" href="#/request">Request a new one</a></p>
    </section>
  );
}
