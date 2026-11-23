import PolicyLayout from './PolicyLayout';
import { SITE } from '../../data/site';

export default function Privacy() {
  return (
    <PolicyLayout current="privacy" title="Privacy">
      <p>I only collect what’s needed to make and deliver your gift: your name, phone number, delivery address, and any photo or text you send for personalisation.</p>
      <p>I use this only to design, print and deliver your gift, and share it only with the vendor printing your order. I don’t sell or share your information with anyone else.</p>
      {/* The old wording was "your photos and details are deleted... there's nothing
          left to leak", which cannot be true of a WhatsApp chat as written. This says
          where they are deleted from, and names Meta's part. */}
      <p><b>After delivery I delete your photos and details from my phone, my files and our WhatsApp chat.</b> I don’t keep copies.</p>
      <p>WhatsApp is run by Meta; their privacy policy covers messages sent through it.</p>
      <p>Questions about your data? Write to <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>
      <p className="policy__todo">
        OWNER TO CHECK: have a lawyer read this page and the Terms before publishing.
        Both make promises you can be held to.
      </p>
    </PolicyLayout>
  );
}
