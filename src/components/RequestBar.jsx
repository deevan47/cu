import { useApp } from '../AppContext';
import './RequestBar.css';

// Thin strip above the header on every page, so people can ask for something new before browsing.
export default function RequestBar() {
  const { page } = useApp();
  if (page === 'request') return null;
  return (
    <div className="req-bar">
      <span>Can’t find it in our catalogue? We’ll make it.</span>{' '}
      <a href="#/request">Request a new gift <span aria-hidden="true">→</span></a>
    </div>
  );
}
