/* eslint-disable @next/next/no-img-element */
/**
 * The HM monogram — the user's original artwork, used as-is.
 * public/logo-mark.png is the exact mark extracted from their image
 * (white strokes, transparent background — nothing redrawn). It is
 * always shown white-on-dark, as designed, on a rounded badge.
 */
export default function Logo({
  size = 32,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <span
      aria-hidden
      className={`grid shrink-0 place-items-center ${className}`}
      style={{
        width: size,
        height: size,
        background: "#0b0b0a",
        borderRadius: size * 0.22,
      }}
    >
      <img
        src="/logo-mark.png"
        alt=""
        style={{ width: "78%", height: "auto", display: "block" }}
      />
    </span>
  );
}
