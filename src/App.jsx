import { useCallback, useEffect, useRef, useState } from 'react';
import { AppContext } from './AppContext';
import { findRoute, parsePage } from './routes';
import useNarrow from './hooks/useNarrow';
import { drawLine, enter, reducedMotion, stopObserving } from './lib/motion';
import BrandSprite from './components/BrandSprite';
import Header from './components/Header';
import MobileMenu from './components/MobileMenu';
import StickyBar from './components/StickyBar';
import Footer from './components/Footer';
import OrderSheet from './components/OrderSheet';

const PAGE_FADE_MS = 240;

export default function App() {
  const [page, setPage] = useState(parsePage);
  const [shown, setShown] = useState(true);       // main content fade between pages
  const [menu, setMenu] = useState(false);
  const [sheet, setSheet] = useState(null);       // product being personalised, or null
  const [barUp, setBarUp] = useState(false);      // mobile WhatsApp bar visible
  // choices that survive moving between pages (same as the original site)
  const [cat, setCat] = useState(0);
  const [person, setPerson] = useState(0);
  const [review, setReview] = useState(0);
  const narrow = useNarrow();

  const pageRef = useRef(page);
  const timer = useRef(0);

  /** Fade out, swap the page, fade in. */
  const go = useCallback((p) => {
    if (p === pageRef.current) return;
    setMenu(false);
    setSheet(null);
    clearTimeout(timer.current);
    if (reducedMotion()) {
      window.scrollTo(0, 0);
      pageRef.current = p;
      setPage(p);
      return;
    }
    setShown(false);
    timer.current = setTimeout(() => {
      window.scrollTo(0, 0);
      pageRef.current = p;
      setPage(p);
      setShown(true);
    }, PAGE_FADE_MS);
  }, []);

  useEffect(() => {
    const onHash = () => go(parsePage());
    const onKey = (e) => { if (e.key === 'Escape') { setSheet(null); setMenu(false); } };
    const onScroll = () => { drawLine(); setBarUp(window.scrollY > 420); };
    window.addEventListener('hashchange', onHash);
    window.addEventListener('keydown', onKey);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('hashchange', onHash);
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('scroll', onScroll);
      clearTimeout(timer.current);
      stopObserving();
    };
  }, [go]);

  // leaving mobile layout closes the menu
  useEffect(() => { setMenu(false); }, [narrow]);

  // after every page change: run entrance animations (first load waits a beat)
  const firstLoad = useRef(true);
  useEffect(() => {
    let raf = 0;
    let t = 0;
    if (firstLoad.current) {
      firstLoad.current = false;
      t = setTimeout(() => enter(page), 30);
    } else {
      raf = requestAnimationFrame(() => enter(page));
    }
    return () => { cancelAnimationFrame(raf); clearTimeout(t); };
  }, [page]);

  const { Page } = findRoute(page);
  const ctx = { page, narrow, menu, setMenu, sheet, setSheet, barUp, cat, setCat, person, setPerson, review, setReview };

  return (
    <AppContext.Provider value={ctx}>
      <BrandSprite />
      <Header />
      <MobileMenu />
      <StickyBar />
      <main style={{ opacity: shown ? 1 : 0, transform: shown ? 'none' : 'translateY(10px)' }}>
        <Page />
      </main>
      <Footer />
      <OrderSheet />
    </AppContext.Provider>
  );
}
