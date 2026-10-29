import { asset } from '../lib/assets';

// A photo slot. Shows the real image if `src` is given, otherwise the dashed placeholder.
//   label = text inside the placeholder   ratio = '4/5' etc.
export default function Photo({ label, src, ratio = '4/5', pad, className = '', style, alt = '' }) {
  if (src) {
    return <img className={`photo-img ${className}`} src={asset(src)} alt={alt || label} style={{ aspectRatio: ratio, ...style }} />;
  }
  return (
    <div className={`photo ${className}`} style={{ aspectRatio: ratio, padding: pad, ...style }}>
      <span>{label}</span>
    </div>
  );
}
