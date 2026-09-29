/**
 * The HM monogram — faithful vector of the user's chosen mark:
 * an outer M with rounded peaks and elbowed leg stubs, a top-center
 * U (two stubs) feeding an inner V nested above the M's valley, and
 * a lower pair of stems aligned under the top stubs. Rounded caps
 * throughout; draws in currentColor to adapt to light/dark.
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
        <polyline points="18,74 18,60 34.5,31.5 60,71.5 85.5,31.5 102,60 102,74" />
        <polyline points="36,16 36,28 60,55.5 84,28 84,16" />
        <line x1="36" y1="63" x2="36" y2="79" />
        <line x1="84" y1="63" x2="84" y2="79" />
      </g>
    </svg>
  );
}
