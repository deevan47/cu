import PolicyLayout from './PolicyLayout';

export default function Refund() {
  return (
    <PolicyLayout current="refund" title="Cancellation and refunds">
      <p>Because every gift is made for just one person, I can’t accept cancellations once printing has started.</p>
      <p>If you cancel before the design is approved and printing begins, your advance payment is refunded in full.</p>
      <p>Once printing has started, the order can’t be cancelled or refunded, since it’s made specifically for you.</p>
      <p>If your order arrives damaged or different from the approved design, tell me within 24 hours with a photo. I’ll reprint or refund it, because it should arrive perfect.</p>
    </PolicyLayout>
  );
}
