/**
 * The mark: a soft fin (curve) facing a hard-angled blade (edge),
 * joined by a rising bridge, with a lavender pixel resting in the
 * blade's notch. Abstract first, "H" second — the fin and blade are
 * its two bars, the bridge its crossbar. Ink shapes draw in
 * currentColor so the mark adapts to light/dark automatically.
 */
export default function Logo({
  size = 28,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      aria-hidden
      className={className}
    >
      <path fill="currentColor" d="M8,6 L24,6 L24,58 C13,50 8,28 8,6 Z" />
      <path fill="currentColor" d="M40,6 L40,58 L54,58 L54,20 Z" />
      <polygon fill="currentColor" points="24,36 40,26 40,42 24,52" />
      <rect x="46" y="5" width="9" height="9" fill="var(--accent)" />
    </svg>
  );
}
