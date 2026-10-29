import { SITE } from '../data/site';

export const wa = (text) => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;

// Pre-filled WhatsApp messages. Edit the wording here.
export const MSG = {
  order: 'Hi Cheer Up, I’d like to make someone smile with a personalised gift.',
  suggest: 'Hi Cheer Up, help me find the right gift. Three things about them: ',
  review: 'Hi Cheer Up, here’s a photo of the gift I received. Sharing the smile!',
  idea: (who, cat, line) => `Hi Cheer Up, I’d like a gift for my ${who.toLowerCase()}. ${cat}: “${line}”`,
  question: (variant, cat) => `Hi Cheer Up, quick question about the ${variant} (${cat}).`,
  sheet: (item, f) =>
    [
      `Hi Cheer Up, I’d like to order: ${item.cat}, ${item.n}.`,
      f.who ? `For: ${f.who}` : '',
      f.what ? `On it: ${f.what}` : '',
      f.when ? `When and where: ${f.when}` : '',
    ].filter(Boolean).join('\n'),
};
