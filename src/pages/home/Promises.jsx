// "The deal": a ledger of the three promises. [big figure, small unit, heading, text]
const ROWS = [
  ['Free', '', 'Love it first. Pay later.', 'A free design preview, every single time. You say yes only when your heart does.'],
  ['30', '%', 'Just 30% at the door.', '70% once you’ve approved the design. The last 30% when it’s finally in your hands.'],
  ['24', 'h', 'Say yes today. See them smile tomorrow.', 'I check every piece myself and hand-deliver it across Pune within 24 hours. Your photos are deleted after.'],
];

export default function Promises() {
  return (
    <section className="ledger on-dark">
      <div className="ledger__inner">
        <p className="kicker"><b>02</b>The deal</p>
        <div data-reveal="1" className="ledger__rows">
          {ROWS.map(([n, u, h, p]) => (
            <div key={h} className="ledger__row">
              <div className="ledger__num"><b>{n}</b>{u && <small>{u}</small>}</div>
              <div className="ledger__txt">
                <h2>{h}</h2>
                <p>{p}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
