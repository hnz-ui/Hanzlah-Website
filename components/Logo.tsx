/**
 * The HM monogram (user's chosen mark, rebuilt as clean vector):
 * twin peaks with a deep dip, elbowed outer legs, a nested double
 * chevron, and four vertical stems — rounded caps throughout.
 * Draws in currentColor so it adapts to light/dark automatically.
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
      width={(size * 120) / 96}
      height={size}
      viewBox="0 0 120 96"
      aria-hidden
      className={className}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20,74 20,52 44,18 60,42 76,18 100,52 100,74" />
        <polyline points="28,44 60,80 92,44" />
        <polyline points="36,44 60,71 84,44" />
        <line x1="40" y1="56" x2="40" y2="84" />
        <line x1="80" y1="56" x2="80" y2="84" />
      </g>
    </svg>
  );
}
