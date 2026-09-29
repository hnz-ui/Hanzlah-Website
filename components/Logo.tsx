/**
 * The HM monogram — faithful vector of the user's mark. Signature
 * geometry: the outer M's peak diagonals and the top-center U's
 * diagonals run PARALLEL (same slope, even gap), nesting a double
 * chevron into the valley; elbowed outer legs and stem pairs under
 * the U stubs. Rounded caps; draws in currentColor for light/dark.
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
      width={(size * 106) / 64}
      height={size}
      viewBox="7 4 106 64"
      aria-hidden
      className={className}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="17,60 17,52 34,30 60,61 86,30 103,52 103,60" />
        <polyline points="36,10 36,22 60,51 84,22 84,10" />
        <line x1="36" y1="52" x2="36" y2="62" />
        <line x1="84" y1="52" x2="84" y2="62" />
      </g>
    </svg>
  );
}
