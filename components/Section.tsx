/**
 * One page section: dot-eyebrow, big display heading, then content.
 * `center` mirrors the reference's centered "What I Do ?" treatment.
 */
export default function Section({
  id,
  eyebrow,
  heading,
  center = false,
  children,
}: {
  id: string;
  eyebrow: string;
  heading?: string;
  center?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="border-t border-rule">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
        <div className={`reveal ${center ? "text-center" : ""}`}>
          <p className="eyebrow">{eyebrow}</p>
          {heading && (
            <h2 className="display mt-5 text-[clamp(2.4rem,5.5vw,4.25rem)] text-ink">
              {heading}
            </h2>
          )}
        </div>
        <div className={heading ? "mt-12 sm:mt-16" : "mt-10"}>{children}</div>
      </div>
    </section>
  );
}
