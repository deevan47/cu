import { href } from '../../routes';

// The 3-step summary. The full seven steps live on the How it works page, and the
// heading has to agree with it: this used to say "Two texts" while that page said
// "Seven steps", which made the shorter promise look untrue.
const STEPS = [
  ['Tell me about them.', 'A photo, a name, or just “help, it’s their birthday.” Start with the feeling. I’ll handle the rest.'],
  ['I send you a free preview.', 'Change anything until it feels exactly right. Then pay 70%.'],
  ['Ding-dong. Smile unlocked.', 'At their door within 24 hours. Pay the last 30% when it’s in your hands.'],
];

export default function Process() {
  return (
    <section className="process">
      <div className="process__inner">
        <p className="eyebrow">How it works</p>
        <div data-reveal="1" className="process__head">
          <h2 className="h-section">Three steps. <span className="accent">One happy doorbell.</span></h2>
          <a className="tlink tap process__link" href={href('how')}>See every step</a>
        </div>
        <ol data-reveal="1" className="steps3">
          {STEPS.map(([h, p], i) => (
            <li key={h} className="step3">
              <span className="step3__no" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
              <h3>{h}</h3>
              <p>{p}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
