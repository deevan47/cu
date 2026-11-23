import './Products.css';
import { useApp } from '../../AppContext';
import { CATS, catId } from '../../data/products';
import { href } from '../../routes';
import { priceWithUnit } from '../../lib/money';
import { wa, MSG } from '../../lib/whatsapp';
import WaLink, { WaTextLink } from '../../components/WaLink';
import Photo from '../../components/Photo';

/**
 * Every gift on one page.
 *
 * It used to be six serif "tabs" that looked like a list of headings, showing one
 * category at a time: three mugs on load and the other eleven products hidden
 * behind controls nobody reads as controls. Now all six categories are stacked
 * sections and the row of chips jumps between them, so scrolling finds everything
 * and a link can point at one category.
 */
export default function Products() {
  const { setSheet, sheetOpener } = useApp();

  // remember which button opened the panel, so closing it hands focus back
  const openSheet = (e, item) => { sheetOpener.current = e.currentTarget; setSheet(item); };

  return (
    <div data-screen-label="Products" className="products">
      <div className="products__head">
        <h1 className="h-page">Pick a gift. <span className="accent">Pour your heart into it.</span></h1>
        <p className="lead">Six kinds of gift, fourteen ways to say what words can’t. <b className="hl">Prices from ₹35.</b></p>
      </div>

      <nav className="cat-jump" aria-label="Jump to a gift type">
        {CATS.map((c) => <a key={c.name} className="chip" href={`#${catId(c.name)}`}>{c.name}</a>)}
      </nav>

      {CATS.map((c, n) => (
        <section key={c.name} id={catId(c.name)} className="cat">
          <div className="cat__head">
            <h2 className="h-section">{c.name}</h2>
            <p>{c.line}</p>
          </div>
          <div className="variants">
            {c.variants.map((v, vi) => (
              <article key={v.n} className="variant">
                <Photo
                  src={v.image}
                  alt={v.alt}
                  ratio="4/5"
                  /* only the single first photo on the page is worth preloading */
                  eager={n === 0 && vi === 0}
                  sizes="(max-width: 700px) 92vw, (max-width: 1099px) 44vw, 360px"
                />
                <h3>{v.n}</h3>
                <p className="variant__desc">{v.d}</p>
                <p className="variant__price">{priceWithUnit(v.price, v.unit)}</p>
                <div className="variant__actions">
                  <button className="btn btn--primary btn--sm" onClick={(e) => openSheet(e, { n: v.n, cat: c.name })}>
                    Personalise this
                  </button>
                  <WaTextLink className="tlink tap variant__ask" href={wa(MSG.question(v.n, c.name))}>
                    Ask about this
                  </WaTextLink>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}

      <div className="products__foot">
        <div className="products__help">
          <p>Can’t decide? Tell me about them. I’ll find the feeling.</p>
          <WaLink href={wa(MSG.suggest)}>Chat on WhatsApp</WaLink>
        </div>
        <p className="products__new">
          Not in the catalogue? I’ll make it. <a className="tlink" href={href('request')}>Request a gift</a>
        </p>
      </div>
    </div>
  );
}
