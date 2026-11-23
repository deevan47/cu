import PolicyLayout from './PolicyLayout';
import { SITE } from '../../data/site';

export default function Terms() {
  return (
    <PolicyLayout current="terms" title="Terms of service">
      {SITE.legalName
        ? <p>Cheer Up is run by {SITE.legalName}, a single founder in {SITE.city}. All orders are placed and confirmed over WhatsApp.</p>
        : <p>Cheer Up is run by a single founder in {SITE.city}. All orders are placed and confirmed over WhatsApp.</p>}
      <p>Production begins only after you approve a free design preview and pay 70% of the order value in advance. The remaining 30% is due on delivery.</p>
      <p>Prices and delivery times may change without notice.</p>
      <p>I reserve the right to decline an order I can’t fulfil to my quality standard.</p>
      {SITE.jurisdiction && <p>Any dispute is subject to the courts of {SITE.jurisdiction}.</p>}
      {(!SITE.legalName || !SITE.jurisdiction) && (
        <p className="policy__todo">
          OWNER TO SUPPLY: the trading or legal name you contract under, and the city
          whose courts settle a dispute. Right now a buyer cannot tell who they are
          contracting with. Set <code>legalName</code> and <code>jurisdiction</code> in
          src/data/site.js, and have a lawyer check the final wording.
        </p>
      )}
    </PolicyLayout>
  );
}
