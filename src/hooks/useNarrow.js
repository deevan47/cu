import { useEffect, useState } from 'react';

// "Narrow" = below 1040px: mobile menu, sticky WhatsApp bar, stacked layouts.
export const NARROW_BREAKPOINT = 1040;

export default function useNarrow() {
  const [narrow, setNarrow] = useState(() => window.innerWidth < NARROW_BREAKPOINT);
  useEffect(() => {
    const onResize = () => setNarrow(window.innerWidth < NARROW_BREAKPOINT);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return narrow;
}
