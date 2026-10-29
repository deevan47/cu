// The three-column terracotta band: preview / payment / delivery promises.
const PROMISES = [
  ['Love it first. Pay later.', 'A free design preview, every single time. You say yes only when your heart does.'],
  ['Just 30% at the door.', '70% once you’ve approved the design. The last 30% when it’s finally in your hands.'],
  ['Say yes today. See them smile tomorrow.', 'I check every piece myself and hand-deliver it across Pune within 24 hours. Your photos are deleted after.'],
];

export default function Promises() {
  return (
    <section className="promises">
      <div data-reveal="1" className="promises__inner">
        {PROMISES.map(([h, p]) => (
          <div key={h}>
            <h2>{h}</h2>
            <p>{p}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
