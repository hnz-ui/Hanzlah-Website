/**
 * The "H" mark: full-height bars, a rising crossbar (growth), and a
 * floating lavender pixel. Draws in currentColor so it adapts to
 * light/dark; the accent square uses the site's --accent token.
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
      width={(size * 68) / 64}
      height={size}
      viewBox="0 0 68 64"
      aria-hidden
      className={className}
    >
      <rect x="4" y="10" width="14" height="50" fill="currentColor" />
      <rect x="38" y="10" width="14" height="50" fill="currentColor" />
      <polygon points="18,40 38,30 38,44 18,54" fill="currentColor" />
      <rect x="56" y="2" width="11" height="11" fill="var(--accent)" />
    </svg>
  );
}
