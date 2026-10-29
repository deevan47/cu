import { useApp } from '../AppContext';
import { wa, MSG } from '../lib/whatsapp';
import './StickyBar.css';

export default function StickyBar() {
  const { narrow, barUp, sheet } = useApp();
  if (!narrow) return null;
  return (
    <div className={`sticky-bar${barUp && !sheet ? ' is-up' : ''}`}>
      <a className="btn btn--primary" href={wa(MSG.order)} target="_blank" rel="noopener">Tell me who it’s for</a>
    </div>
  );
}
