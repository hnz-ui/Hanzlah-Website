/**
 * The "Shear H": a solid H with two diagonal bites cut from the
 * crossbar corners — one from the top-left, one from the bottom-right —
 * giving it a slash of motion. Pure single-color mark; draws in
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
        fill="currentColor"
        d="M8,6 L22,6 L22,31.5 L32,26 L42,26 L42,6 L56,6 L56,58 L42,58 L42,32.5 L32,38 L22,38 L22,58 L8,58 Z"
      />
    </svg>
  );
}
