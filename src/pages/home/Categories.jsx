import { CATS, catId } from '../../data/products';
import { href } from '../../routes';
import Photo from '../../components/Photo';

// "Six ways": a plain grid of the six gift types.
export default function Categories() {
  return (
    <section className="ways">
      <div className="ways__head" data-reveal="1">
        <div>
          <p className="eyebrow">The gifts</p>
          <h2 className="h-section">Six ways to say <span className="accent">“you matter to me.”</span></h2>
        </div>
        <a className="tlink tap ways__all" href={href('products')}>See them all</a>
      </div>
      <div data-reveal="1" className="ways__grid">
        {CATS.map((c) => (
          <a key={c.name} className="cat-card" href={`${href('products')}#${catId(c.name)}`}>
            <Photo
              src={c.image}
              alt={c.alt}
              ratio="4/5"
              sizes="(max-width: 700px) 44vw, (max-width: 1099px) 30vw, 340px"
            />
            <div className="cat-card__name">{c.name}</div>
            <div className="cat-card__tag">{c.tag}</div>
          </a>
        ))}
      </div>
      {/* The one place on the Home page that offers the off-catalogue route. It
          used to appear four times, which told people the catalogue was not enough
          before they had looked at it. */}
      <p className="ways__more" data-reveal="1">
        Not in the catalogue? I’ll make it. <a className="tlink" href={href('request')}>Request a gift</a>
      </p>
    </section>
  );
}
