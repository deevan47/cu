// Photo slots that are not tied to a product.
// PLACEHOLDER: put image files in /public/photos and set  src: 'photos/file.jpg'.
// While src is null a dashed placeholder box is shown.
export const PHOTOS = {
  founder: { src: '/pi/founder.jpeg', label: 'founder', ratio: '4/5' }, // founder photo on About page
  // "Delivered. Smiled at." gallery on the Reviews page. ratio = the box shape.
  delivered: [
    { label: 'delivered mug', ratio: '4/5', src: null },
    { label: 'delivered Polaroids', ratio: '1/1', src: null },
    { label: 'delivered keychain', ratio: '3/4', src: null },
    { label: 'delivered print', ratio: '4/3', src: null },
    { label: 'delivered phone case', ratio: '4/5', src: null },
    { label: 'delivered hoodie', ratio: '1/1', src: null },
  ],
};
