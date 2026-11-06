// "Two texts and a doorbell": the 3-step summary as ticket stubs (full 7 steps live on the How page).
const STEPS = [
  ['Tell me about them.', 'A photo, a name, or just “help, it’s their birthday.” Start with the feeling. I’ll handle the rest.'],
  ['I send you a free preview.', 'Change anything until it feels exactly right. Then pay 70%.'],
  ['Ding-dong. Smile unlocked.', 'At their door within 24 hours. Pay the last 30% when it’s in your hands.'],
];

export default function Process() {
  return (
    <section className="process">
      <div className="process__inner">
        <p className="kicker"><b>04</b>How it works</p>
        <div data-reveal="1" className="process__head">
          <h2 className="h-section">Two texts. <span className="accent">One happy doorbell.</span></h2>
          <a className="tlink process__link" href="#/how">See every step</a>
        </div>
        <div data-reveal="1" className="steps3">
          {STEPS.map(([h, p], i) => (
            <div key={h} className="step3">
              <span className="step3__no">{String(i + 1).padStart(2, '0')}</span>
              <h3>{h}</h3>
              <p>{p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
