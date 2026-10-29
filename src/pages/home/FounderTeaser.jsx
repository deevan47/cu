import Photo from '../../components/Photo';
import { SITE } from '../../data/site';
import { PHOTOS } from '../../data/photos';

export default function FounderTeaser() {
  return (
    <section className="founder">
      <Photo className="founder__photo" ratio="4/5" pad={16} label={`Photo: ${SITE.founderName}`} src={PHOTOS.founder.src} />
      <div data-reveal="1" className="founder__text">
        <p className="founder__big">No call centre. No warehouse. <span className="accent">Just someone who truly cares.</span></p>
        <p className="founder__sub">I design it, check it, Deliverd with Care. Your gift carries your feelings, and I treat it that way.</p>
        <p className="founder__name">{SITE.founderName}, founder</p>
        <a className="tlink founder__link" href="#/about">Meet the person behind it</a>
      </div>
    </section>
  );
}
