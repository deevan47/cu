// The catalogue. One place for names, prices, photos and alt text.
//
// `price` is a plain number in rupees; lib/money.js adds the ₹ and the grouping.
// `unit` is for anything not sold as one item, so "₹35" can never be mistaken for
// the price of a pack.
// `alt` describes what the photo shows, for anyone who cannot see it.
//
// PHOTO NOTE (owner): every file in /public/photos currently shows the Cheer Up
// logo printed on the product. The site sells "their photo, their name, your
// inside joke", so a buyer cannot picture the result from any of these. They need
// re-shooting with a sample personal photo and a first name, same framing, 4:5,
// 1200x1500 or larger, then `npm run images`.
export const CATS = [
  {
    name: 'Mugs',
    image: 'photos/mug-white.jpg',
    alt: 'White ceramic mug with a custom printed design',
    tag: 'Every morning, a little reminder of you.',
    line: 'Their name, in their hands, every single morning.',
    variants: [
      { n: 'Classic white mug', image: 'photos/mug-white.jpg', alt: 'White ceramic mug with a custom printed design', d: 'Your photo, wrapped around white ceramic. Every sip feels like a hug.', price: 269 },
      { n: 'Colour inside mug', image: 'photos/mug-colour-inside.jpg', alt: 'Mug with a coloured inside and handle and a printed design outside', d: 'White outside, a burst of colour inside and on the handle. Just like them.', price: 329 },
      { n: 'Magic mug', image: 'photos/mug-magic.jpg', alt: 'Dark magic mug that reveals a printed photo when a hot drink is poured in', d: 'Looks plain until the chai hits. Then your memory appears.', price: 539 },
    ],
  },
  {
    name: 'Keychains',
    image: 'photos/keychain-heart.jpg',
    alt: 'Heart-shaped acrylic photo keychain',
    tag: 'The smallest way to stay close.',
    line: 'Small enough to carry everywhere. That’s the whole point.',
    variants: [
      { n: 'Photo keychain', image: 'photos/keychain-heart.jpg', alt: 'Heart-shaped acrylic photo keychain', d: 'A favourite memory, always in their pocket.', price: 159 },
      { n: 'Two-sided keychain', image: 'photos/keychain-heart.jpg', alt: 'Acrylic photo keychain printed on both sides', d: 'Two sides. Two memories. Two reasons to smile.', price: 219 },
    ],
  },
  {
    name: 'Paintings and prints',
    image: 'photos/print-glass-frame.jpg',
    alt: 'Framed photo print standing upright',
    tag: 'Memories that deserve a wall.',
    line: 'The photo you keep going back to deserves a wall of its own.',
    variants: [
      { n: 'Framed photo print', image: 'photos/print-glass-frame.jpg', alt: 'Framed photo print standing upright', d: 'Printed, framed, ready to hang or stand. The moment never fades.', price: 699 },
      { n: 'Painted portrait', image: 'photos/print-glass-frame.jpg', alt: 'Painted portrait in a frame', d: 'Your photo, painted. Someone’s going to tear up.', price: 759 },
      { n: 'Collage print', image: 'photos/print-glass-frame.jpg', alt: 'Framed collage print of several photos', d: 'All the favourite moments. One frame.', price: 699 },
    ],
  },
  {
    name: 'Polaroids',
    image: 'photos/polaroid-big.jpg',
    alt: 'Polaroid-style photo print with a wide white border',
    tag: 'Little squares of “remember when.”',
    line: 'Your camera roll, finally something they can hold.',
    variants: [
      // OWNER TO CONFIRM: priced per print. If these are sold in packs, change
      // `unit` to 'per pack of 10' (or whatever it is) and set the pack price.
      { n: 'Mini Snaps', image: 'photos/polaroid-mini.jpg', alt: 'Stack of mini Polaroid-style photo prints', d: 'Pocket-sized Polaroids for a stack, a wallet or a love letter.', price: 35, unit: 'per print' },
      { n: 'Big Snaps', image: 'photos/polaroid-big.jpg', alt: 'Large Polaroid-style photo print with a wide white border', d: 'Large Polaroids for walls, fridges and gift boxes. Memories, on display.', price: 45, unit: 'per print' },
    ],
  },
  {
    name: 'T-shirts and hoodies',
    image: 'photos/tee-white.jpg',
    alt: 'White cotton T-shirt with a custom printed design',
    tag: 'Wear the memory. Wear the joke.',
    line: 'A gift they’ll wear close, not fold away.',
    variants: [
      { n: 'Photo tee', image: 'photos/tee-white.jpg', alt: 'White cotton T-shirt with a large printed photo', d: 'Your photo, printed big on soft cotton. A memory they can wear.', price: 649 },
      { n: 'Words tee', image: 'photos/tee-white.jpg', alt: 'White cotton T-shirt with printed words', d: 'A name, a line or a joke only your gang gets.', price: 679 },
      // Custom hoodie: no photo yet, so it is left out rather than shown as an
      // empty card. Add  image + alt  here and it appears.
    ],
  },
  {
    name: 'Phone cases',
    image: 'photos/case-glossy.jpg',
    alt: 'Glossy phone case with a custom printed design',
    tag: 'Seen a hundred times a day. Felt every time.',
    line: 'What they hold all day will now hold you too.',
    variants: [
      { n: 'Soft case', image: 'photos/case-glossy.jpg', alt: 'Glossy soft phone case with a printed photo covering the back', d: 'One photo, edge to edge. Your favourite moment, always with them.', price: 369 },
      { n: 'Hard case', image: 'photos/case-matte.jpg', alt: 'Matte hard phone case with a printed name', d: 'A name or initials on a clean colour. Simple. Personal. Theirs.', price: 329 },
    ],
  },
];

/** Every category's id for the Gifts page anchors: 'Paintings and prints' -> 'paintings-and-prints'. */
export const catId = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
