/**
 * One page section: a small-caps label in the left rail, content on the right.
 * Collapses to a single stacked column below `md`.
 */
export default function Section({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="border-t border-rule">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-10 md:grid-cols-[8rem_1fr] md:gap-16">
          <p className="eyebrow reveal md:sticky md:top-28 md:self-start">
            {label}
          </p>
          <div>{children}</div>
        </div>
      </div>
    </section>
  );
}
