// PRICE PLACEHOLDER: replace '₹___' on each variant below.
// VARIANT PLACEHOLDER: variant names and notes are drafts, confirm against what you actually sell.
// PHOTOS: optionally add  image: 'photos/your-file.jpg'  (file in /public/photos) to any
// category or variant. Without it, a dashed placeholder box is shown.
const P = 'Starting at ₹___';

export const CATS = [
  { name: 'Mugs', image: 'photos/mug-white.jpg', tag: 'Every morning, a little reminder of you.', line: 'Their name, in their hands, every single morning.', variants: [
    { n: 'Classic white mug', image: 'photos/mug-white.jpg', d: 'Your photo, wrapped around white ceramic. Every sip feels like a hug.', price: 269 },
    { n: 'Colour inside mug', image: 'photos/mug-colour-inside.jpg', d: 'White outside, a burst of colour inside and on the handle. Just like them.', price: 329 },
    { n: 'Magic mug', image: 'photos/mug-magic.jpg', d: 'Looks plain until the chai hits. Then your memory appears.', price: 539 } ] },
  { name: 'Keychains', image: 'photos/keychain-heart.jpg', tag: 'The smallest way to stay close.', line: 'Small enough to carry everywhere. That’s the whole point.', variants: [
    { n: 'Photo keychain', image: 'photos/keychain-heart.jpg', d: 'A favourite memory, always in their pocket.', price: 159 },
    //{ n: 'Name keychain', image: 'photos/keychain-heart.jpg', d: 'A name, initials or a date that means the world.', price: 179 },
    { n: 'Two-sided keychain', image: 'photos/keychain-heart.jpg', d: 'Two sides. Two memories. Two reasons to smile.', price: 219 } ] },
  { name: 'Paintings and prints', image: 'photos/print-glass-frame.jpg', tag: 'Memories that deserve a wall.', line: 'The photo you keep going back to deserves a wall of its own.', variants: [
    { n: 'Framed photo print', image: 'photos/print-glass-frame.jpg', d: 'Printed, framed, ready to hang or stand. The moment never fades.', price: 699 },
    { n: 'Painted portrait', image: 'photos/print-glass-frame.jpg', d: 'Your photo, painted. Someone’s going to tear up.', price: 759 },
    { n: 'Collage print', image: 'photos/print-glass-frame.jpg', d: 'All the favourite moments. One frame.', price: 699 } ] },
  { name: 'Polaroids', image: 'photos/polaroid-big.jpg', tag: 'Little squares of “remember when.”', line: 'Your camera roll, finally something they can hold.', variants: [
    { n: 'Mini Snaps', image: 'photos/polaroid-mini.jpg', d: 'Pocket-sized Polaroids for a stack, a wallet or a love letter.', price: 35 },
    { n: 'Big Snaps', image: 'photos/polaroid-big.jpg', d: 'Large Polaroids for walls, fridges and gift boxes. Memories, on display.', price: 45 } ] },
  { name: 'T-shirts and hoodies', image: 'photos/tee-white.jpg', tag: 'Wear the memory. Wear the joke.', line: 'A gift they’ll wear close, not fold away.', variants: [
    { n: 'Photo tee', image: 'photos/tee-white.jpg', d: 'Your photo, printed big on soft cotton. A memory they can wear.', price: 649 },
    { n: 'Words tee', image: 'photos/tee-white.jpg', d: 'A name, a line or a joke only your gang gets.', price: 679 }]},
    //{ n: 'Custom hoodie', d: 'Photo or words on a warm hoodie. The next best thing to a hug.', price: 1099 } ] },
  { name: 'Phone cases', image: 'photos/case-glossy.jpg', tag: 'Seen a hundred times a day. Felt every time.', line: 'What they hold all day will now hold you too.', variants: [
    { n: 'Soft Case', image: 'photos/case-glossy.jpg', d: 'One photo, edge to edge. Your favourite moment, always with them.', price: 369 },
    { n: 'Hard case', image: 'photos/case-matte.jpg', d: 'A name or initials on a clean colour. Simple. Personal. Theirs.', price: 329 } ] },
];

export const catIndex = (name) => Math.max(0, CATS.findIndex((c) => c.name === name));
