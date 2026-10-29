import { wa, MSG } from '../../lib/whatsapp';

export default function FinalCta() {
  return (
    <section data-reveal="1" className="final">
      <div className="final__box">
        <h2>Not sure how to show you care?</h2>
        <div>
          <p>Tell me three things about them. I’ll turn them into something they’ll treasure.</p>
          <a className="btn" href={wa(MSG.suggest)} target="_blank" rel="noopener">Help me find it</a>
        </div>
      </div>
    </section>
  );
}
