import PolicyLayout from './PolicyLayout';

export default function Shipping() {
  return (
    <PolicyLayout current="shipping" title="Delivery">
      <p>I currently deliver only within Pune.</p>
      <p>Once your design is approved and the advance is paid, your gift is printed, personally quality-checked and hand-delivered, usually within 24 hours.</p>
      <p>I’ll keep you posted on WhatsApp at every step.</p>
      <p>I don’t offer shipping outside Pune yet.</p>
    </PolicyLayout>
  );
}
