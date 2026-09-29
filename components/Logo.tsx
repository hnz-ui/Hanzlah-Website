/**
 * "The Signal": one continuous square-wave stroke — rise, cross, rise —
 * climbing up and to the right. It is a signal pulse (Hanzlah → Hz →
 * hertz), a staircase of growth, and the skeleton of an H in a single
 * gesture. The lavender pixel is the step not yet climbed. Draws in
 * currentColor so it adapts to light/dark automatically.
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
      <path
        d="M16,58 L16,38 L48,38 L48,14"
        fill="none"
        stroke="currentColor"
        strokeWidth="14"
      />
      <rect x="41" y="0" width="11" height="11" fill="var(--accent)" />
    </svg>
  );
}
