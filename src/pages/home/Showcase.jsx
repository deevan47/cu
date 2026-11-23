import { CATS, catId } from '../../data/products';
import { price } from '../../lib/money';
import { href } from '../../routes';
import Photo from '../../components/Photo';

/**
 * Four real products, named and priced, directly under the hero.
 *
 * The hero is the brand mark and the promise, and the first screen used to end
 * there: a visitor could scroll a long way without seeing a single thing they
 * could buy. Unlabelled photos were barely better, because a picture of a mug
 * does not tell you it is ₹329 or what it is called.
 *
 * Named by product rather than by category, because "Photo keychain, ₹159" is a
 * thing you can decide about and "Keychains" is not.
 *
 * PHOTO NOTE (owner): these still show the logo printed on the product rather
 * than someone's photo or name. See the note at the top of data/products.js.
 */
const PICKS = [
  ['Polaroids', 'Big Snaps'],
  ['Mugs', 'Colour inside mug'],
  ['Keychains', 'Photo keychain'],
  ['T-shirts and hoodies', 'Photo tee'],
];

/** Pulls the live name, photo, alt text and price out of the catalogue. */
const look = ([catName, variantName]) => {
  const cat = CATS.find((c) => c.name === catName);
  const v = cat.variants.find((x) => x.n === variantName);
  return { ...v, catName, id: catId(catName) };
};

export default function Showcase() {
  return (
    <section className="showcase" aria-label="A few of the gifts">
      {PICKS.map(look).map((p, i) => (
        <a key={p.n} className="shot" href={`${href('products')}#${p.id}`}>
          <Photo
            src={p.image}
            alt={p.alt}
            ratio="4/5"
            eager={i === 0}
            sizes="(max-width: 900px) 24vw, 280px"
          />
          <span className="shot__name">{p.n}</span>
          <span className="shot__price">{price(p.price)}{p.unit ? ` ${p.unit}` : ''}</span>
        </a>
      ))}
    </section>
  );
}
