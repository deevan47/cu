// THE PAGE REGISTRY.
// To add a page: create the file in src/pages/, then add one line below.
//   group 'main'   -> shows in the header + footer "Pages" list (and mobile menu)
//   group 'policy' -> shows in the footer "Policies" list and the policy pages
import Home from './pages/home/Home';
import Products from './pages/products/Products';
import How from './pages/how/How';
import About from './pages/about/About';
import Reviews from './pages/reviews/Reviews';
import Faq from './pages/faq/Faq';
import Contact from './pages/contact/Contact';
import Refund from './pages/policies/Refund';
import Shipping from './pages/policies/Shipping';
import Privacy from './pages/policies/Privacy';
import Terms from './pages/policies/Terms';

export const ROUTES = [
  { key: 'home', label: 'Home', group: 'main', Page: Home },
  { key: 'products', label: 'Gifts', group: 'main', Page: Products },
  { key: 'how', label: 'How it works', group: 'main', Page: How },
  { key: 'about', label: 'My story', group: 'main', Page: About },
  { key: 'reviews', label: 'Reviews', group: 'main', Page: Reviews },
  { key: 'faq', label: 'Questions', group: 'main', Page: Faq },
  { key: 'contact', label: 'Say hi', group: 'main', Page: Contact },
  { key: 'refund', label: 'Cancellation & refunds', group: 'policy', Page: Refund },
  { key: 'shipping', label: 'Delivery', group: 'policy', Page: Shipping },
  { key: 'privacy', label: 'Privacy', group: 'policy', Page: Privacy },
  { key: 'terms', label: 'Terms of service', group: 'policy', Page: Terms },
];

export const NAV = ROUTES.filter((r) => r.group === 'main');
export const POLICIES = ROUTES.filter((r) => r.group === 'policy');
export const DEFAULT_PAGE = 'home';
export const findRoute = (key) => ROUTES.find((r) => r.key === key);

/** Reads the current page from the URL hash: '#/products' -> 'products'. */
export function parsePage() {
  const h = (location.hash || '').replace(/^#\/?/, '');
  return findRoute(h) ? h : DEFAULT_PAGE;
}
