import { useApp } from '../AppContext';
import { NAV, POLICIES } from '../routes';
import { SITE } from '../data/site';
import { wa, MSG } from '../lib/whatsapp';
import { Logo } from './Logo';
import './Footer.css';

export default function Footer() {
  const { narrow } = useApp();
  return (
    <footer className={`site-footer${narrow ? ' has-bar' : ''}`}>
      <div className="site-footer__grid">
        <a href="#/home" className="site-footer__logo" aria-label={`${SITE.name}, back to home`}>
          <Logo variant="stack" label={`${SITE.name}, ${SITE.tagline}`} />
        </a>
        <nav aria-label="Footer" className="site-footer__col">
          <span className="site-footer__head">Pages</span>
          {NAV.map((r) => <a key={r.key} href={`#/${r.key}`}>{r.label}</a>)}
        </nav>
        <nav aria-label="Policies" className="site-footer__col">
          <span className="site-footer__head">Policies</span>
          {POLICIES.map((r) => <a key={r.key} href={`#/${r.key}`}>{r.label}</a>)}
        </nav>
        <div className="site-footer__col">
          <span className="site-footer__head">Talk to me</span>
          <a href={wa(MSG.order)} target="_blank" rel="noopener">WhatsApp {SITE.phoneShort}</a>
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          <span>Delivering smiles across Pune</span>
        </div>
      </div>
      <div className="site-footer__legal">© {SITE.year} {SITE.name}. {SITE.tagline}.</div>
    </footer>
  );
}
