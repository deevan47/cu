import './Policy.css';
import { POLICIES } from '../../routes';
import { SITE } from '../../data/site';

// Shared frame for every policy page: eyebrow, title, body, and links to the other policies.
export default function PolicyLayout({ current, title, children }) {
  return (
    <section data-screen-label="Policy" className="policy">
      <div className="policy__inner">
        <p className="policy__eyebrow">Policy, last updated {SITE.policiesUpdated}</p>
        <h1>{title}</h1>
        <div className="policy__body">{children}</div>
        <div className="policy__others">
          <span>Other policies</span>
          {POLICIES.filter((r) => r.key !== current).map((r) => <a key={r.key} href={`#/${r.key}`}>{r.label}</a>)}
        </div>
      </div>
    </section>
  );
}
