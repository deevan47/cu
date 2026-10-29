import PolicyLayout from './PolicyLayout';
import { SITE } from '../../data/site';

export default function Privacy() {
  return (
    <PolicyLayout current="privacy" title="Privacy">
      <p>I only collect what’s needed to make and deliver your gift: your name, phone number, delivery address, and any photo or text you send for personalisation.</p>
      <p>I use this only to design, print and deliver your gift, and share it only with the vendor printing your order. I don’t sell or share your information with anyone else.</p>
      <p><b>Once your gift is delivered, your photos and details are deleted.</b> I don’t keep copies, so there’s nothing left to leak.</p>
      <p>Questions about your data? Write to <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>
    </PolicyLayout>
  );
}
