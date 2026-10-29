import { useApp } from '../AppContext';
import { NAV } from '../routes';
import './MobileMenu.css';

export default function MobileMenu() {
  const { page, menu, setMenu } = useApp();
  return (
    <div className={`mobile-menu${menu ? ' is-open' : ''}`}>
      <nav aria-label="Mobile">
        {NAV.map((r) => (
          <a key={r.key} href={`#/${r.key}`} className={`${page === r.key ? 'is-active' : ''}${r.highlight ? ' is-request' : ''}`} onClick={() => setMenu(false)}>{r.label}</a>
        ))}
      </nav>
    </div>
  );
}
