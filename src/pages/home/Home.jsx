// HOME PAGE: sections stack top to bottom in this order. Reorder / remove lines freely.
import './Home.css';
import Hero from './Hero';
import LuckyOne from './LuckyOne';
import Promises from './Promises';
import Categories from './Categories';
import Process from './Process';
import FounderTeaser from './FounderTeaser';
import FinalCta from './FinalCta';

export default function Home() {
  return (
    <>
      <Hero />
      <LuckyOne />
      <Promises />
      <Categories />
      <Process />
      <FounderTeaser />
      <FinalCta />
    </>
  );
}
