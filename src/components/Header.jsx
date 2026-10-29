import { useApp } from '../AppContext';
import { NAV } from '../routes';
import { SITE } from '../data/site';
import { wa, MSG } from '../lib/whatsapp';
import { Logo } from './Logo';
import './Header.css';

export default function Header() {
  const { page, narrow, menu, setMenu } = useApp();
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a href="#/home" className="site-header__logo" aria-label={`${SITE.name}, back to home`}>
          <Logo variant="horiz-nt" />
        </a>
        {!narrow && (
          <>
            <nav aria-label="Main" className="site-nav">
              {NAV.map((r) => (
                <a key={r.key} href={`#/${r.key}`} className={`${page === r.key ? 'is-active' : ''}${r.highlight ? ' is-request' : ''}`}>{r.label}</a>
              ))}
            </nav>
            <a className="btn btn--primary site-header__cta" href={wa(MSG.order)} target="_blank" rel="noopener">Start their moment</a>
          </>
        )}
        {narrow && (
          <button className="menu-toggle" onClick={() => setMenu((m) => !m)} aria-expanded={menu}>{menu ? 'Close' : 'Menu'}</button>
        )}
      </div>
    </header>
  );
}
