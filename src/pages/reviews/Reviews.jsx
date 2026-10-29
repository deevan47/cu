import './Reviews.css';
import { useApp } from '../../AppContext';
import { REVIEWS } from '../../data/reviews';
import { PHOTOS } from '../../data/photos';
import { wa, MSG } from '../../lib/whatsapp';
import { rise } from '../../lib/motion';
import useUpdateEffect from '../../hooks/useUpdateEffect';
import Photo from '../../components/Photo';

export default function Reviews() {
  const { narrow, review: i, setReview } = useApp();
  const r = REVIEWS[i];

  useUpdateEffect(() => { rise('[data-quote]'); }, [i]);

  return (
    <>
      <section data-screen-label="Reviews" className="reviews-hero">
        <h1 className="h-page" style={{ maxWidth: '12ch' }}>Don’t take <span className="accent">my word</span> for it.</h1>
        <p className="lead" style={{ maxWidth: '36ch' }}>Every order so far came from a friend of a friend. Here’s what they felt.</p>
      </section>

      <section className={`reviews-main${narrow ? ' is-narrow' : ''}`}>
        <div className="reviews-main__grid">
          <div role="tablist" aria-label="Reviews by gift" className="review-tabs">
            {REVIEWS.map((t, n) => (
              <button key={t.product} role="tab" className="review-tab" aria-selected={n === i} onClick={() => setReview(n)}>{t.product}</button>
            ))}
          </div>
          <figure data-quote="1" className="review">
            <blockquote>“{r.q}”</blockquote>
            <figcaption>
              <span className="review__who">{r.who}</span>
              {r.sample && <span className="review__badge">Sample review, replace with a real customer quote</span>}
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="delivered">
        <div data-reveal="1" className="delivered__head">
          <h2>Delivered. <span className="accent">Smiled at.</span></h2>
          <a className="delivered__link" href={wa(MSG.review)} target="_blank" rel="noopener">Got a gift from me? Share the smile.</a>
        </div>
        <div data-reveal="1" className="delivered__masonry">
          {PHOTOS.delivered.map((p) => (
            <Photo key={p.label} ratio={p.ratio} label={`Photo: ${p.label}`} src={p.src} />
          ))}
        </div>
      </section>
    </>
  );
}
