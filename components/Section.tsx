/**
 * Proxio-style section: a chip label, a centered two-tone headline
 * (white part + gray part), then the content.
 */
export default function Section({
  id,
  chip,
  white,
  gray,
  center = true,
  children,
}: {
  id: string;
  chip: string;
  white?: string;
  gray?: string;
  center?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
        <div className={`reveal ${center ? "text-center" : ""}`}>
          <span className="chip">{chip}</span>
          {(white || gray) && (
            <h2 className="display mt-6 text-[clamp(2.2rem,5vw,3.6rem)]">
              {gray && <span className="tg">{gray} </span>}
              {white && <span className="tw">{white}</span>}
            </h2>
          )}
        </div>
        <div className="mt-12 sm:mt-16">{children}</div>
      </div>
    </section>
  );
}
